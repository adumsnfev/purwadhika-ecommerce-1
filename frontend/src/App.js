import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ProductAdmin from './pages/admin/Product'
import ProductDisplay from './pages/display/Product'
import ProductDetail from './pages/display/Product/ProductDetail'

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/admin" exact component={ProductAdmin} />
        {/* <Route path="/products2" exact component={ProductDetail} /> */}
        <Route path="/product-detail/:slug" component={ProductDetail} />
        <Route path="/products" exact component={ProductDisplay} />
      </Router>
    );
  }
}

export default App;
