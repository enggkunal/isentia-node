var config = require("../config/config");
var Flickr = require('flickr-sdk');

var flickr = new Flickr(config.config.key);

var getFlikrData  = (q, page) =>  {
	return flickr.photos.search({
  		text: q ? q : 'isentia',
  		per_page: 20,
  		page: page ? page : 0
	}); 
}

module.exports = {
	getFlikrData
};