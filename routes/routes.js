var Fliker = require("../controller/flikr");

var appRouter = function (app) {
  	
	/**
	 * [description]
	 * @param  {[type]} req  [description]
	 * @param  {[type]} res) {		Fliker.getFlikrData(req.params.q)		.then(function (result) {			 res.status(200).send({"data": result.body});		}).catch(function (err) {			res.status(400).send({"error": error});		});  	} [description]
	 * @return {[type]}      [description]
	 */
  	app.get("/", function(req, res) {
		Fliker.getFlikrData(req.query.q, req.query.page)
		.then(function (result) {
			 res.status(200).send({"data": result.body});
		}).catch(function (err) {
			res.status(400).send({"error": error});
		});
  	});
}

module.exports = appRouter;