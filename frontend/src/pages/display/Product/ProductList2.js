import React, { Component } from 'react';
import { Card, Button, Carousel, CardDeck, Col, Row, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class ProductList extends Component {
    constructor() {
        super()
        this.state = {
            search: ""
        }
    }

    componentDidMount() {
        this.props.getProducts()
    }

    render() {
        const { data } = this.props;
        const { search } = this.state;

        if (!data) {
            return null;
        }

        const filteredData = data.filter(item => {
            if (item.name.toLowerCase().includes(search.toLowerCase())) {
                return true;
            } else {
                return false;
            }
        })

        return (
            <div>
                <Carousel>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={`http://localhost:8000/img/products/banner nikadoku.jpg`}
                            alt="image"
                            height="300"
                            style={{ marginBottom: "30px" }}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={`http://localhost:8000/img/products/banner nikadoku.jpg`}
                            alt="image"
                            height="300"
                            style={{ marginBottom: "30px" }}
                        />
                    </Carousel.Item>
                </Carousel>
                <Row>
                    <Col md={3}>
                        <Card style={{}}>
                            <ListGroup variant="flush">
                                <input type="text" value={this.state.search} onChange={e => { this.setState({ search: e.target.value }) }}></input>
                                <ListGroup.Item>Menu 1</ListGroup.Item>
                                <ListGroup.Item>Menu 2</ListGroup.Item>
                                <ListGroup.Item>Menu 3</ListGroup.Item>
                                <ListGroup.Item>Menu 3</ListGroup.Item>
                                <ListGroup.Item>Menu 3</ListGroup.Item>
                            </ListGroup>
                        </Card>;
                    </Col>

                    <Col md={8}>
                        <Row>
                            {filteredData.map(({
                                _id,
                                name,
                                slug,
                                rating,
                                variants,
                                reviews,
                                timestamp
                            }, index) => (
                                    <Col md={4}>
                                        <Card key={index} style={{}}>
                                            <Card.Header>
                                                <Card.Title style={{ textAlign: "center", marginTop: '10px' }}>{name}</Card.Title>
                                            </Card.Header>
                                            <Card.Body>
                                                <Carousel>
                                                    <Carousel.Item>
                                                        <img
                                                            className="d-block w-100"
                                                            src={`http://localhost:8000/img/products/${variants[0].images[0]}`}
                                                            alt={variants[0].images}
                                                            height="250px"
                                                        />
                                                    </Carousel.Item>
                                                    ))}
                                                </Carousel>
                                                <Card.Footer>
                                                    <small className="text-muted">IDR {variants[0].price}</small><br></br>
                                                    <small className="text-muted">Disc {variants[0].price - (variants[0].price * variants[0].discount / 100)}</small><br></br>
                                                    <small className="text-muted">Rating : {variants[0].rating}</small><br></br>
                                                    <Row>
                                                        <Col md={6}>
                                                            <Link to={`product-detail/${slug}`}><Button variant="primary">Details</Button></Link>
                                                        </Col>
                                                        <Col md={6}>
                                                            <Button variant="primary">To Cart</Button>
                                                        </Col>
                                                    </Row>
                                                </Card.Footer>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                ))}
                        </Row>

                    </Col>

                </Row>

                 
            </div>
        );
    }
}

export default ProductList;