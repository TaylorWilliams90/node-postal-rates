const express = require('express')
const path = require('path')
const url = require('url')
const { Pool } = require('pg')
const PORT = process.env.PORT || 5000
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: true
});

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/post', rateMath)
  .get('/getRestaurants', getRestaurants)
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

  function rateMath(request, response) {
    const type = request.query.type;
    const weight = Number(request.query.weight);
    console.log(type);
    console.log(weight);
    computeRate(response, type, weight);
  }

  function computeRate(response, type, weight){
    type = type.toLowerCase();

    let result = 0;

    if (type == "stamped"){
      result = weight * 1;
    }
    else if (type == "metered"){
      result = weight * 1.3;
    }
    else if (type == "flats"){
      result = weight * 2;
    }
    else if (type == "class"){
      result = weight * 5;
    } else {

    }

    const params = {result: result};

    response.render('pages/post', params);
        
  }

  function getRestaurants(request, response) {
  
    conn.query('select * from restaurant', function(error, results){
      if ( error ){
          response.status(400).send('Error in database operation');
      } else {
        console.log(result);
          response.send(results);
      }
  
      // Make sure we got a row with the resturant, then prepare JSON to send back
      if (error || result == null || result.length != 1) {
        response.status(500).json({success: false, data: error});
      } else {
        const restaurtants = result[i];
        response.status(200).json(restaurtants);
      }
    });
  }