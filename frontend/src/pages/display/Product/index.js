import React, { Component, Fragment } from 'react';
import axios from 'axios'
import ProductList from './ProductList'
import ProductList2 from './ProductList2'
import ProductDetail from './ProductDetail';

class Product extends Component {
  constructor() {
    super();
    this.state = {
      formData: {
        id: '',
        name: '',
        variants: [],
      },
      formImages: {},
      hasVariant: null,
      products: null,
    };
  }


  getProducts = () => {
    axios.get('http://localhost:8000/api/products')
      .then(res => {
        this.setState({ products: res.data })
      })
  }


  render() {
    const {  products } = this.state;

    return (
      <Fragment>
        <ProductList2
          data = {products}
          getProducts={this.getProducts}
        />
      </Fragment>
    );
  }
}

export default Product;