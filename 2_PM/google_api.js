// TODO - create client object for Google API connection which can be exported

const config  = require('./config.js')


let googleMapsClient = require('@google/maps').createClient({
    key: config.key
  });
  
  module.exports = googleMapsClient