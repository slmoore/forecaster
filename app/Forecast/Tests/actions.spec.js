import { expect } from 'chai'
import * as Actions from '../Actions/index'

// testing incomplete - need to mock async actions

const current = {
    time: 1453402675,
    summary: "Rain"
  }
const alerts = [
    {title:"flood",uri:"http://google.com"},
    {title:"earthquake",uri:"http://yelp.com"}
  ]
const forecast = {
    current: current,
    days: [{current},{current}],
    alerts: alerts
  }

describe('actions - forecast - getCoordinates:', function() {
  it('should return the correct action object', function() {
    const actual = Actions.getCoordinates()
    const expected = {
      type: Actions.GET_COORDINATES,
      payload: {
        first: false,
        isFetching: true
      }
    }
    expect(actual).to.deep.equal(expected)
  })
})

describe('actions - forecast - parseCoordinates', function() {
  it('should return the correct action object', function() {
    const coordinates = {
      lat: 1234,
      lng: 5678,
      fa: 'Seattle'
    }
    const actual = Actions.parseCoordinates(coordinates)
    const expected = {
      type: Actions.PARSE_COORDINATES,
      payload: {
        lat: 1234,
        lng: 5678,
        fa: 'Seattle'
      }
    }
    expect(actual).to.deep.equal(expected)
  })
})

describe('actions - forecast - parseForecast', function() {
  it('should return the correct action object', function() {
    const actual = Actions.parseForecast(forecast)
    const expected = {
      type: Actions.PARSE_FORECAST,
      payload: {
        isFetching: false,
        current: current,
        days: [{current},{current}],
        alerts: alerts
      }
    }
    expect(actual).to.deep.equal(expected)
  })
})

describe('actions - forecast - fetchError', function() {
  it('should return the correct action object', function() {
    const error = {
      message: "error found"
    }
    const actual = Actions.fetchError(error)
    const expected = {
      type: Actions.FETCH_ERROR,
      payload: {
        isFetching: false,
        error: {
          message: "error found"
        }
      }
    }
    expect(actual).to.deep.equal(expected)
  })
})


