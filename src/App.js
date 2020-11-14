import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchProducts } from './redux/products/actions'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  componentDidMount() {
    this.props.onFetchProducts()
  }

  render() {
    const { loading, data, error } = this.props.product
    const { count } = this.state
    if (loading) {
      return (
        <div>
          Loading...
        </div>
      )
    }
    if (error) {
      return (
        <div>
          {error}
        </div>
      )
    }
    return (
      <div>
        <p>{count}</p>
        <button onClick={() => this.setState({ count: count + 1 })}>BOP EM DI</button>
        {data.map((product, index) => <p key={index}>
          {product.name || ""}
        </p>)}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    product: state.product
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchProducts: params => dispatch(fetchProducts(params))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)