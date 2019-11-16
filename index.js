const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/post', rateMath)
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