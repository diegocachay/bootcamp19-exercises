/* TODO: Write a program which takes in a place name via the command line and 
/ returns the following string, formatted with the appropriate values:

'INPUTTED_PLACE is located at coordinates RETURNED_COORDINATES, at the address RETURNED_ADDRESS.' */

const googleMapsClient  = require('./google_api.js')



googleMapsClient.geocode({
    address: process.argv[2]
  }, function(err, response) {
    if (!err) {
      let lat = response.json.results[0].geometry.location.lat
      let lng = response.json.results[0].geometry.location.lng     
      let RETURNED_ADDRESS = response.json.results[0].formatted_address;
      console.log(` ${process.argv[2]} is located at coordinates Latitude ${lat} and Longitude ${lng}, at the address ${RETURNED_ADDRESS}`)
    }
  });


  