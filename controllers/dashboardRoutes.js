const router = require('express').Router();
const { Post, User } = require('../models/');
const withAuth = require('../utils/auth');

//dashboard, making sure user is logged in using withAuth method
router.get('/', withAuth, async (req, res) => {
  try {
    const postContent = await Post.findAll({
      where:{'userId': req.session.userId},
      include: [User]
    });
    const posts = postContent.map((post) => post.get({ plain: true }));
    res.render('allPosts', {
      layout: 'dashboard',
      posts
    });
  } catch (err) {
    //redirects to login page if not loogged in
    res.redirect('login');
  }
});

//new post
router.get('/new', withAuth, (req, res) => {
  res.render('newPost', {
    layout: 'dashboard',
  });
});

//edit posts
router.get('/edit/:id', withAuth, async (req, res) => {
  try {
    const postContent = await Post.findByPk(req.params.id);

    if (postContent) {
      const post = postContent.get({ plain: true });
      res.render('editPosts', {
        layout: 'dashboard',
        post
      });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    //again, redirects to login if not logged in
    res.redirect('login');
  }
});

module.exports = router;