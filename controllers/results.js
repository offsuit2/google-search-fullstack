// Import Packages

const express = require('express')
const router = express.Router()

// Views
// Create here a controller that accepts GET requests and renders the "results" page

router.post('/products', (req, res) => {
  console.log(req.search)
})

router.post('/', (req, res) => {
  // 1. initial data

  let array = [
    {
      title: 'JS tutorials',
      description: 'The best JavaScript tutorials in the galaxy hello!',
      url: 'https://www.w3schools.com',
      links: [
        {
          title: 'JS for Beginners',
          url: 'https://www.w3schools.com/js'
        },
        {
          title: 'JS for the Web',
          url: 'https://www.w3schools.com/js'
        }
      ]
    },
    {
      title: 'JS tutorials',
      description: 'The best JavaScript tutorials in the galaxy goodbye!',
      url: 'https://www.w3schools.com',
      links: [
        {
          title: 'JS for Beginners',
          url: 'https://www.w3schools.com/js'
        },
        {
          title: 'JS for the Web',
          url: 'https://www.w3schools.com/js'
        }
      ]
    },
    {
      title: 'JS tutorials',
      description: 'The best JavaScript tutorials in the galaxy!',
      url: 'https://www.w3schools.com',
      links: [
        {
          title: 'JS for Beginners',
          url: 'https://www.w3schools.com/js'
        },
        {
          title: 'JS for the Web',
          url: 'https://www.w3schools.com/js'
        }
      ]
    }
  ]

  // 2. filter data and put in a variable
  const resultsArray = array.filter(e =>
    e.description.includes(req.body.searchBar)
  )

  // 3. render page with new data

  res.render('results', {
    results: resultsArray
  })
})

// Export
module.exports = router

// Create POST controller
// Export module
