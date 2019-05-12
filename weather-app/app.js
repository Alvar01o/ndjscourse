const request = require('request')

const geocode = require('./utils/geocode')
//const url = "https://api.darksky.net/forecast/e01cb46bfa9f6314deefdd0b91eb7655/37.8267,-122.4233"
//request({ url:url, json:true}, (error , response , body) => {
//  console.log(response.body);
//
//})
//
//


//const geocode  = (address , callback ) => {
//  const url  = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiYWx2YXJvcHkiLCJhIjoiY2p2NDg4cHV4MHVsYzQzbDg0N3d5aWVzMCJ9.jiDHL8crsrGQl7ZXcO5KcQ'
//
//  request({ url:url, json:true}, (error , response ) => {
//
//      if (error) {
//        callback('Unable to connect to location services!', undefined)
//      } else if (response.body.features.length === 0) {
//        callback("Unable to find location. Try another search.", undefined)
//      } else {
//        callback(undefined , {
//            latitude: response.body.features[0].center[0],
//            longitude: response.body.features[0].center[1],
//            location: response.body.features[0].place_name
//        })
//      }
//  
//  })
//}
//

//geocode('Itapua' ,  (error , data) => {
//  console.log('Error', error)
//  console.log('Data', data)
//})
//

geocode(-75.7088 , 44.1545 ,  (error , data) => {
  console.log('Error', error)
  console.log('Data', data)
})