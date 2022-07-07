// Import Packages

const express = require('express')
const router = express.Router()

// Views
// Create here a controller that accepts GET requests and renders the "results" page

router.get('/', (req, res) => {
  res.render('results', /*for the google web results page, results: {[]} }*/ )
	
	// Export
	module.exports = router
