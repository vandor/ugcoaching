# Undergound Coaching
This app is for coaches in the [Tampa Underground Network](http://www.tampaunderground.com/).
It's the product of a coding sprint to create the Minimum Viable Product (MVP) of a mobile app for the Tampa Underground's Coaching Department.
There's an instance running on Heroku: http://ugcoaching.herokuapp.com/

# The Coaching Department
The coaching department exists to provide fresh eyes and listening hearts for kingdom-minded leaders, helping them pursue what God has called them to in our city. We think every believer has the spiritual DNA in them to grow a faith community which follows Jesus and plays its part in engaging every evil -- but sometimes people are unsure where to begin or what next steps to take. What dream has God deposited in you? Whether you are just getting started or have been leading a microchurch for a while and feel like you could benefit from some fresh input, we would love to walk alongside you. Get in touch at [Underground.Coach](http://underground.coach/).

# Tech Specs
The app is a single-page hybrid app written with Vue.js and the Framework7 UI toolkit. An API served by Express.js in Node provides the data, proxied from an Airtable database. User access to the API is authenticated with Auth0.

* [Vue.js](https://vuejs.org/)
* [Framework7](https://framework7.io/)
* [Express.js](https://expressjs.com/)
* [Node.js](https://nodejs.org/)
* [Airtable.js](https://github.com/Airtable/airtable.js)
* [Auth0](https://auth0.com/)
* [Heroku](https://www.heroku.com/)


# Based on template: Framework7 Vue + Webpack App

A full-featured Framework7 Vue with Webpack setup with hot-reload & css extraction. Based on [Vue Webpack Boilerplate](https://github.com/vuejs-templates/webpack)


## Project Structure

* `src/assets` - folder with static assets (images)
* `src/components` - folder with custom `.vue` components
* `src/css` - put custom app CSS styles here. Don't forget to import them in `main.js`
* `src/pages` - app `.vue` pages
* `src/main.js` - main app file where you include/import all required libs and init app
* `src/routes.js` - app routes
* `src/app.vue` - main app structure/component
