const request = require('request')


const forecast  = (latitude, longitude , callback ) => {
  const url  = 'https://darksky.net/forecast/e01cb46bfa9f6314deefdd0b91eb7655/' + latitude + ','+ longitude

  request({ url:url, json:true}, (error , response ) => {

      if (error) {
        callback('Unable to connect to location services!', undefined)
      } else if (response.body.error ) {
        callback("Unable to find location. Try another search.", undefined)
      } else {
        callback(undefined , {
            latitude: response.body.features[0].center[0],
            longitude: response.body.features[0].center[1],
            location: response.body.features[0].place_name
        })
      }
  
  })
}

module.exports = geocode