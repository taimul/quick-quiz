import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './Topics.css';

const Topics = ({ topic }) => {
    const { name, logo, total, id } = topic;
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <div className='image-container'>
                    <Card.Img className='image' variant="top" src={logo} />
                </div>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        Total Questions: {total}
                    </Card.Text>

                    <Button variant="danger"><Link to={`/quiz/${id}`}>Start Quiz</Link></Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Topics;