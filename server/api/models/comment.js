/* server/api/models/comments.js */

'use strict';

import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const CommentSchema = new Schema({
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

const Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment;
