import React, { Component } from 'react';
import { Card, Button, Carousel, CardDeck, Col, Row, ListGroup } from 'react-bootstrap';
import { Next } from 'react-bootstrap/PageItem';
import Axios from 'axios';

class ProductDetail extends Component {
    constructor() {
        super()
        this.state = {
            data: null,
            activeIndex: 0
        }
    }

    componentDidMount() {
        Axios.get(`http://localhost:8000/api/products/${this.props.match.params.slug}`).then(res => {
            this.setState({
                data: res.data
            })
        })
    }

    render() {
        const { data } = this.state;
        console.log(data)

        if (!data) {
            return null;
        }



        return (
            <div>
                <Card style={{ width: '60rem', marginBottom: '20px', marginRight: '50px' }}>

                    <Card.Header>
                        <Card.Title style={{ textAlign: "center", marginTop: '10px' }}>{data.name}</Card.Title>
                    </Card.Header>


                    <Card.Body>
                        <Row>
                            <Col md={6}>
                                <Card.Subtitle className="mb-2 text-muted">{data.variants[this.state.activeIndex].name}</Card.Subtitle>
                                <Carousel>
                                    {data.variants[this.state.activeIndex].images && data.variants[this.state.activeIndex].images.map((image, index) => (
                                        <Carousel.Item key={index}>
                                            <img
                                                className="d-block w-100"
                                                src={`http://localhost:8000/img/products/${image}`}
                                                alt={image}
                                                height="300"
                                            />
                                        </Carousel.Item>))}
                                </Carousel>
                            </Col>
                            <Col md={6}>
                                <Card.Text>
                                    {data.variants[this.state.activeIndex].description.substring(0, 255)}
                                </Card.Text>
                                <Card.Text>
                                    Weight : {data.variants[this.state.activeIndex].weight}
                                </Card.Text>
                                <Card.Text>
                                    Quantity: {data.variants[this.state.activeIndex].quantity}
                                </Card.Text>
                                <Card.Text>
                                    Variants :
                                </Card.Text>
                                {data.variants.map(({
                                    name
                                }, index) => (
                                        <Button style={{marginLeft:"7px"}}variant="primary" onClick={() => { this.setState({ activeIndex: index }) }}>{name}</Button>
                                    ))}
                            </Col>

                        </Row>
                        <Card.Footer>
                            <Row>
                                <Col md={2}>
                                    <small className="text-muted">IDR {data.variants[this.state.activeIndex].price}</small><br></br>
                                    <small className="text-muted">Disc {
                                        data.variants[this.state.activeIndex].price -
                                        (data.variants[this.state.activeIndex].price * data.variants[this.state.activeIndex].discount / 100)
                                    }
                                    </small><br></br>
                                </Col>
                                <Col md={8}>
                                    {/* <small className="text-muted">Rating : {data.variants[this.state.activeIndex].rating}</small><br></br> */}
                                        </Col>
                                <Col>
                                    <Button variant="primary">Add To Cart</Button>
                                </Col>
                            </Row>
                        </Card.Footer>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default ProductDetail;