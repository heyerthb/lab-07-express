'use strict';

const express = require('express');
// require('../docs/config/swagger');
const app = express();
app.use(express.json());



// create a middleware function that adds a timestamp on object request
// function requestTime(request, response){
//   // add a date property
// }; 

/**Response with a newly created POST object
 * @route POST/posts
 * @returns {array} 200 - [{}, {}]
 * @returns{error} 500 - server error
 */


module.exports = {
  app,
  start: (PORT)=>{
    app.listen(PORT || process.env.PORT || 3000, ()=> {
      console.log('server listening');
    });
  },
};

// app.listen(3000, () => {
//   console.log('my server is running');
// });