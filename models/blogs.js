const mongoose = require('mongoose');

const blogSchema = mongoose.Schema({
  title: String,
  body: String,
  slug: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  comments: [{
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    author: String,
    comment: String,
    approved: Boolean,
    created_at: Date,
  }],
  category: [{ name: String }]
});
const Blog = module.exports = mongoose.model('Blog',blogSchema);

//Get Blogs -find method
module.exports.getBlogs = (callback,limit) => {
    Blog.find(callback).limit(limit);
};

module.exports.getBlogById = (_id, callback) => {
	Blog.findById(_id, callback);
}

module.exports.updateBlog = (match_id, blog_info, options, callback) => {
	Blog.findOneAndUpdate({_id:match_id}, blog_info, options, callback);
};

module.exports.addBlog = (blog_info, callback) =>{
	Blog.create(blog_info, callback);

}

module.exports.removeBlog = (match_id, callback) => {
	Blog.deleteOne({_id:match_id}, callback);

};