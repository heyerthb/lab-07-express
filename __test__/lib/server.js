'use strict';

const express = require('express');
const routes = require('../../routes/category-routes');
// require('../docs/config/swagger');
const app = express();
app.use(express.json());




// create a middleware function that adds a timestamp on object request
function requestTime(request, response, next){
  request.requestTime = Date.now();
  console.log(requestTime);
  next();
}

// create a logging middleware
function logger(request,response, next){
  console.log(`${request.method}`);
}
// create an error middleware
function coinflip(req,res, next){
  req.valid = coinflip;
  Math.random() <.05;
}

/**Response with a newly created POST object
 * @route POST/posts
 * @returns {array} 200 - [{}, {}]
 * @returns{error} 500 - server error
 */
app.get('/category', routes.handleGet);
app.post('/category')


const errorHandler = (status) =>(request, response) => response.status(status).send('Error Found');

module.exports = {
  app,
  start: (PORT)=>{
    app.listen(PORT || process.env.PORT || 3000, ()=> {
      console.log('server listening');
    });
  },
};

