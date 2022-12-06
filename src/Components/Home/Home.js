import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topics from '../Topics/Topics';
import banner from './banner.jpg';
import './Home.css';

const Home = () => {
    const topics = useLoaderData();
    const topics_data = topics.data;
    return (
        <div className='container'>
            <div className='banner'>
                <img src={banner} alt="" ></img>
                <h1>Lets Discover your knowledge</h1>
            </div>
            <div className='topics-container'>
                {
                    topics_data.map(topic => <Topics
                        key={topic.id}
                        topic={topic}
                    ></Topics>)
                }
            </div>
        </div>
    );
};

export default Home;