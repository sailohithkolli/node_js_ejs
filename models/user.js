const mongoose = require('mongoose');

// User Schema
const userSchema = mongoose.Schema({
	name:{
		type: String,
		required: true
	},
	email:{
		type: String,
		default: true
	}
});

const User = module.exports = mongoose.model('User', userSchema);

// Get All Users - find method
module.exports.getUsers = (callback, limit) => {
        User.find(callback).limit(limit);
};

// Get User - findById method
module.exports.getUserById = (id, callback) => {
		User.findById(id,callback);
};

// Add User - create method
module.exports.addUser = (user,callback) =>{
	User.create(user,callback);
	console.log("Add new user");
};

// Update User - findOneAndUpdate method
module.exports.updateUser = (id,user,options,callback)=>{
		var query = { _id: id };
		var update = 
		{ 
			name: user.name,
			email: user.email
		};
		User.findOneAndUpdate(query,update,options,callback);
		console.log("User info Update");
};

// Delete User - deleteOne method
module.exports.removeUser = (id,callback)=>{
		var query = {_id:id};
		User.remove(query,callback);
		console.log("Delete new User");
};
