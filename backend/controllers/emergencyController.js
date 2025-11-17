const Emergency = require('../models/Emergency');
const User = require('../models/User');

// @desc    Create emergency request
// @route   POST /api/emergency
// @access  Private
const createEmergency = async (req, res) => {
  try {
    const { type, title, description, location, contact, neededItems, priority } = req.body;

    const emergency = await Emergency.create({
      user: req.user.id,
      type,
      title,
      description,
      location,
      contact,
      neededItems,
      priority
    });

    // Notify nearby volunteers/organizations (simplified)
    const nearbyHelpers = await User.find({
      role: { $in: ['ngo', 'volunteer'] },
      'address.city': location?.city
    }).limit(10);

    res.status(201).json(emergency);
  } catch (error) {
    res.status(400).json({ message: 'Error creating emergency request' });
  }
};

// @desc    Get all emergency requests
// @route   GET /api/emergency
// @access  Public
const getEmergencies = async (req, res) => {
  try {
    const { status = 'pending', page = 1, limit = 10 } = req.query;
    
    const emergencies = await Emergency.find({ status })
      .populate('user', 'name organizationName')
      .sort({ priority: -1, createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit);

    const total = await Emergency.countDocuments({ status });

    res.json({
      emergencies,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
      total
    });
  } catch (error) {
    res.status(400).json({ message: 'Error fetching emergencies' });
  }
};

// @desc    Respond to emergency
// @route   POST /api/emergency/:id/respond
// @access  Private
const respondToEmergency = async (req, res) => {
  try {
    const { message, itemsOffered } = req.body;
    
    const emergency = await Emergency.findById(req.params.id);
    
    if (!emergency) {
      return res.status(404).json({ message: 'Emergency not found' });
    }

    emergency.responses.push({
      user: req.user.id,
      message,
      itemsOffered,
      status: 'pending'
    });

    await emergency.save();
    await emergency.populate('responses.user', 'name organizationName');
    
    res.json(emergency);
  } catch (error) {
    res.status(400).json({ message: 'Error responding to emergency' });
  }
};

module.exports = {
  createEmergency,
  getEmergencies,
  respondToEmergency
};