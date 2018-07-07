/* server/api/models/post.js */

'use strict';

import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const postSchema = new Schema({
	userId: {
		type: Number,
	},
	title: String,
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

const post = mongoose.model('Post', postSchema);

module.exports = { Post: post };
