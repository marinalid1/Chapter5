import express from 'express'
import userCtrl from '../controllers/user.controller'
import authCtrl from '../controllers/auth.controller'
import postCtrl from '../controllers/post.controller'

const router = express.Router()

// Pg 184, Newsfeed Api for posts
router.route('/api/posts/new/:userId')
  .post(authCtrl.requireSignin, postCtrl.create)

// Pg 192, retrieving a post's photo
router.route('/api/posts/photo/:postId')
  .get(postCtrl.photo)

// Pg 188, post related route that will receive a query to return posts by a specfic user
router.route('/api/posts/by/:userId')
  .get(authCtrl.requireSignin, postCtrl.listByUser)

router.route('/api/posts/feed/:userId')
  .get(authCtrl.requireSignin, postCtrl.listNewsFeed)

// Pg 200, put request that will update the likes array in the Post document
router.route('/api/posts/like')
  .put(authCtrl.requireSignin, postCtrl.like)

// Pg 201, put request that will update the likes array in the Post document
router.route('/api/posts/unlike')
  .put(authCtrl.requireSignin, postCtrl.unlike)

// Pg 205, the comment API
router.route('/api/posts/comment')
  .put(authCtrl.requireSignin, postCtrl.comment)

// Pg 209, the uncomment API
router.route('/api/posts/uncomment')
  .put(authCtrl.requireSignin, postCtrl.uncomment)

// Pg 198, route for the delete post API endpoint
router.route('/api/posts/:postId')
  .delete(authCtrl.requireSignin, postCtrl.isPoster, postCtrl.remove)


//Pg 184, define the route path that will recieve the request for retrieving Newsfeed post
router.param('userId', userCtrl.userByID)
router.param('postId', postCtrl.postByID)

export default router
