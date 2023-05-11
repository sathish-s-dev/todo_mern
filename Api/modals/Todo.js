const express = require("express");
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const TodoSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    completed: {
        type: Boolean,
        default: false,
    },
    timestamp: {
        type: String,
        default: Date.now()
    },
    description:{
        type: String,
        required: true,
    }
})

const Todo = mongoose.model('Todo', TodoSchema)

module.exports = Todo
