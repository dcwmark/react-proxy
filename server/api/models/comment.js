/* server/api/models/comment.js */

'use strict';

import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const commentSchema = new Schema({
	postId: {
		type: Number,
	},
	name: String,
	email: {
		type: String,
		unique: true,
	},
	body: String,
	createdOn: {
		type: Date,
		default: Date.now,
	},
	createdBy: {
		type: String,
		require: true,
	},
	updatedOn: {
		type: Date,
		default: Date.now,
	},
	updatedBy: {
		type: String,
		require: true,
	},
	deleted: {
		type: Boolean,
		default: false,
	},
});

const comment = mongoose.model('Comment', commentSchema);

module.exports = { Comment: comment };
