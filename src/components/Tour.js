import React, {useState} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

const Tour = ({id, image, info, price, name, removeTour}) => {
    const [readMore, setReadMore] = useState(false);
    return(
        <Card>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{name} <Badge bg="secondary">$ {price}</Badge></Card.Title>
                <Card.Text>
                    {readMore ? info : `${info.substring(0, 200)}}...`}
                    <Button variant="link" onClick={() => setReadMore(!readMore)}>{readMore ? 'Show less' : 'Read More'}</Button>
                </Card.Text>
                <Button className='btn-not-intrested' variant="outline-danger" onClick={() => removeTour(id)}>Not intrested</Button>
            </Card.Body>
        </Card>
    )
};

export default Tour;