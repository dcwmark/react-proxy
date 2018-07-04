/* server/api/models/todo.js */

'use strict';

import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const todoSchema = new Schema({
	userId: {
		type: Number,
	},
	title: String,
	completed: {
		type: Boolean,
		default: false,
	},
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

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
