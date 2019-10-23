'use strict';
 
const categories = [];

// let handleGet;
// let handlePost;

exports.handleGet = (req, res, next) => {
  res.send(categories);
};

exports.handlePost = (req, res, next) => {
  const newCategory = {};
  categories.push(newCategory);
};

