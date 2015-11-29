'use strict';

var mongoose = require('mongoose');

var listSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  list_items:[
  //list items???
  ]
}, {
  timestamps: true,
  toObject: { virtuals: true },
  toJSON: { virtuals: true }
});

//model
var List = mongoose.model('List', listSchema);

module.exports = List;
