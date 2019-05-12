import React, { Component } from 'react';
import { Card, Button, Carousel, CardDeck, Col, Row, ListGroup } from 'react-bootstrap';

class ProductList extends Component {


    componentDidMount() {
        this.props.getProducts()
    }

    render() {
        const { data } = this.props;

        if (!data) {
            return null;
        }

        return (
            <div>
                <Carousel>

                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={`http://localhost:8000/img/products/banner nikadoku.jpg`}
                                alt= "image"
                                height="300"
                                style={{marginBottom:"30px"}}
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={`http://localhost:8000/img/products/banner nikadoku.jpg`}
                                alt= "image"
                                height="300"
                                style={{marginBottom:"30px"}}
                            />
                        </Carousel.Item>
                </Carousel>
                <Row>
                    <Col>
                        <Card style={{ width: '17rem', marginLeft: '30px' }}>
                            <ListGroup variant="flush">
                                <ListGroup.Item>Menu 1</ListGroup.Item>
                                <ListGroup.Item>Menu 2</ListGroup.Item>
                                <ListGroup.Item>Menu 3</ListGroup.Item>
                                <ListGroup.Item>Menu 3</ListGroup.Item>
                                <ListGroup.Item>Menu 3</ListGroup.Item>
                            </ListGroup>
                        </Card>;
                </Col>
                    <Col>

                        {data.map(({
                            _id,
                            name,
                            slug,
                            rating,
                            variants,
                            reviews,
                            timestamp
                        }, index) => (
                                <Card key={index} style={{ width: '60rem', marginBottom: '20px', marginRight: '50px' }}>

                                    <Card.Header>
                                        <Card.Title style={{ textAlign: "center", marginTop: '10px' }}>{name}</Card.Title>
                                    </Card.Header>

                                    {variants.map(({
                                        name,
                                        price,
                                        discount,
                                        description,
                                        soldQuantity,
                                        images
                                    }, index) => (
                                            <Card.Body>
                                                <Row>
                                                    <Col md={6}>
                                                        <Card.Subtitle className="mb-2 text-muted">{name}</Card.Subtitle>
                                                        <Carousel>
                                                            {images && images.map((image, index) => (
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
                                                            {description}
                                                        </Card.Text>
                                                    </Col>

                                                </Row>
                                                <Card.Footer>
                                                    <Row>
                                                        <Col md={2}>
                                                            <small className="text-muted">IDR {price}</small><br></br>
                                                            <small className="text-muted">Disc {discount}%</small><br></br>
                                                        </Col>
                                                        <Col md={8}>
                                                            <small className="text-muted">Rating : {rating}</small><br></br>
                                                        </Col>
                                                        <Col>
                                                            <Button variant="primary">Add To Cart</Button>
                                                        </Col>
                                                    </Row>
                                                </Card.Footer>
                                            </Card.Body>
                                        ))}
                                </Card>

                            ))}
                    </Col>

                </Row>
            </div>
        );
    }
}

export default ProductList;