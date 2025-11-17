const Post = require('../models/Post');

// @desc    Get all posts
// @route   GET /api/feed
// @access  Public
const getFeed = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    
    const posts = await Post.find()
      .populate('user', 'name organizationName')
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit);

    const total = await Post.countDocuments();

    res.json({
      posts,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
      total
    });
  } catch (error) {
    res.status(400).json({ message: 'Error fetching feed' });
  }
};

// @desc    Create post
// @route   POST /api/feed
// @access  Private
const createPost = async (req, res) => {
  try {
    const { content, type, urgent, neededItems, location } = req.body;

    const post = await Post.create({
      user: req.user.id,
      content,
      type,
      urgent,
      neededItems,
      location
    });

    await post.populate('user', 'name organizationName');
    res.status(201).json(post);
  } catch (error) {
    res.status(400).json({ message: 'Error creating post' });
  }
};

// @desc    Like/unlike post
// @route   POST /api/feed/:id/like
// @access  Private
const toggleLike = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    const hasLiked = post.likes.includes(req.user.id);
    
    if (hasLiked) {
      post.likes = post.likes.filter(like => like.toString() !== req.user.id);
    } else {
      post.likes.push(req.user.id);
    }

    await post.save();
    res.json(post);
  } catch (error) {
    res.status(400).json({ message: 'Error toggling like' });
  }
};

module.exports = {
  getFeed,
  createPost,
  toggleLike
};