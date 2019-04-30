const request = require('request')
const yargs = require('yargs')
const argv = yargs
  .options({
    a : {
      demand:true,
      alias:'address',
      describe: 'Address to fetch weather',
      string: true
    }
  }).help().argv;

request({
  url:"https://maps.googleapis.com/maps/api/geocode/json?address="+encodeURIComponent(argv.address)+"&key=AIzaSyD4vcmasl0FIMXqVibFbNuJRkoERTZi26c",
  json:true
}, (error , response , body) => {
  if (error) {
    console.log("Unable to connect to Google Services.");
  } else if (body.status === "ZERO_RESULTS") {
    console.log("BAD FORMAT ON ADDRESS.");
  } else if (body.status == 'OK'){
    console.log(JSON.stringify(body.results[0].geometry.location, undefined , 2));
  } else {
    console.log('Invalid address')
  }

})
