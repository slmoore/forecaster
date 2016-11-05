import React, { Component } from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

class Home extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className="container-fluid">
        <Header dispatch={this.props.dispatch} />
        {/*pass props to children components*/}
        {this.props.children && 
          React.cloneElement(this.props.children, {...this.props.forecast})
        }
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ...state
  }
}

// connect redux state and dispatch() to react
export default connect(mapStateToProps)(Home)