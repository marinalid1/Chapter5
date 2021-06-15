import mongoose from 'mongoose'
const PostSchema = new mongoose.Schema({
  // Pg 180, post text
  text: {
    type: String,
    required: 'Text is required'
  },
   // Pg 180, post photo
  photo: {
    data: Buffer,
    contentType: String
  },
   // Pg 180, likes
  likes: [{type: mongoose.Schema.ObjectId, ref: 'User'}],
   // Pg 180, comments
  comments: [{
    text: String,
    created: { type: Date, default: Date.now },
    postedBy: { type: mongoose.Schema.ObjectId, ref: 'User'}
  }],
   // Pg 180, post by
  postedBy: {type: mongoose.Schema.ObjectId, ref: 'User'},
   // Pg 180, created time
  created: {
    type: Date,
    default: Date.now
  }
})

export default mongoose.model('Post', PostSchema)
