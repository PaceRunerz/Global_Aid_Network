// controllers/donationController.js
const Donation = require('../models/Donation');
const User = require('../models/User');
const generateQR = require('../utils/generateQR');

// @desc    Create donation
// @route   POST /api/donations
// @access  Private
const createDonation = async (req, res) => {
  try {
    const { type, quantity, description, location, pickupTime, category } = req.body;

    const donation = await Donation.create({
      donor: req.user.id,
      type,
      quantity,
      description,
      location,
      pickupTime,
      category: category || req.user.role === 'restaurant' ? 'restaurant' : 'individual'
    });

    // Generate QR code
    const qrCode = await generateQR(donation._id.toString());
    donation.qrCode = qrCode;
    await donation.save();

    // Update user's total impact
    await User.findByIdAndUpdate(req.user.id, {
      $inc: { totalImpact: quantity }
    });

    res.status(201).json(donation);
  } catch (error) {
    console.error('Create donation error:', error);
    res.status(400).json({ message: 'Error creating donation' });
  }
};

// @desc    Get all donations
// @route   GET /api/donations
// @access  Public
const getDonations = async (req, res) => {
  try {
    const { type, location, page = 1, limit = 10 } = req.query;
    
    let query = { status: 'available' };
    
    if (type) query.type = type;
    if (location) {
      query['location.city'] = new RegExp(location, 'i');
    }

    const donations = await Donation.find(query)
      .populate('donor', 'name organizationName rating')
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit);

    const total = await Donation.countDocuments(query);

    res.json({
      donations,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
      total
    });
  } catch (error) {
    console.error('Get donations error:', error);
    res.status(400).json({ message: 'Error fetching donations' });
  }
};

// @desc    Get donation statistics
// @route   GET /api/donations/stats
// @access  Public
const getDonationStats = async (req, res) => {
  try {
    const totalDonations = await Donation.countDocuments();
    const foodDonations = await Donation.countDocuments({ type: 'food' });
    const completedDonations = await Donation.countDocuments({ status: 'delivered' });
    
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const todayDonations = await Donation.countDocuments({
      createdAt: { $gte: today },
      type: 'food'
    });

    res.json({
      total: totalDonations,
      food: foodDonations,
      completed: completedDonations,
      today: todayDonations
    });
  } catch (error) {
    console.error('Get stats error:', error);
    res.status(400).json({ message: 'Error fetching statistics' });
  }
};

// @desc    Verify donation with QR code
// @route   POST /api/donations/:id/verify
// @access  Private
const verifyDonation = async (req, res) => {
  try {
    const donation = await Donation.findById(req.params.id);
    
    if (!donation) {
      return res.status(404).json({ message: 'Donation not found' });
    }

    // First verification (donor)
    if (!donation.verification.donorVerified) {
      donation.verification.donorVerified = true;
    } 
    // Second verification (recipient)
    else if (!donation.verification.recipientVerified) {
      donation.verification.recipientVerified = true;
      donation.verification.verifiedAt = new Date();
      donation.status = 'delivered';
    }

    await donation.save();
    res.json(donation);
  } catch (error) {
    console.error('Verify donation error:', error);
    res.status(400).json({ message: 'Error verifying donation' });
  }
};

module.exports = {
  createDonation,
  getDonations,
  getDonationStats,
  verifyDonation
};