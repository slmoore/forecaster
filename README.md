
**Forecaster displays the weather conditions for the next five days and any alerts which appear.  Location Coordinates are retrieved using Google Maps Geocode API.  Weather data is pulled from the Dark Sky API.**

## Live Site

[Live Forecaster](https://forecaster-darksky.herokuapp.com/)

## Build Instructions

  1. Download or clone repo: `git clone https://github.com/slmoore/forecaster.git`
  2. Sign up for [Dark Sky](https://developer.forecast.io/) and [Google Maps Geocode](https://developers.google.com/maps/documentation/geocoding/start) in order to get your personal API keys.
  3. Change to forecaster directory and install dependencies:
    - `cd path/to/forecaster`
    - `npm install`

  4. Create a `.env` file in the root directory and paste in the following environment variables. Replace the values with your own:
    - `PORT=8080`
    - `GEOCODE=1234`
    - `DARK_SKY=5678`

    - ***Unless port 8080 is already in use, it can be left as 8080.***
  5. You're done! So now you can run any of the following commands:
    - `npm run dev # run in development environment` (visit http://localhost:8080)
    - `npm test # run unit tests`
    - `npm run cover # run unit test coverage report` (html version generated inside /coverage/index.html)
    - `npm start # run from node server` (visit http://localhost:8080)

  **This application accesses the environment variables using node, so it does not run statically.**

## Technology used with reason:
  - react - view framework to maintain display as state changes
  - redux - simplifies maintaining state as new features are added
  - react-router - maintaining routing within a single page application
  - sass - simplifies style over time
  - bootstrap - initial style
  - mocha/chai/istanbul - unit testing (only partial testing as of 10/16/16)
  - webpack/babel - bundles project with babel allowing for ES6/JSX features, hot reloading in development, uglify tasks, sass css preprocessor tasks, and server-side rendering

## User Story:

Using the Dark Sky API
- For the next five days display the:
  - conditions
    - status: complete
  - min and max temperature
    - status: complete

Extra
  - additional features beyond task
    - location generated based on user input: complete
    - added Alerts feature: complete
    - started unit tests
    - started server-side rendering
    - started routing

## To be continued:
  - write tests for async actions, reducers, components
  - add routing for specific days/alerts
  - improve server-side rendering

