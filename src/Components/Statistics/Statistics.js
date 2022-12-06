import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, } from 'recharts';
import { ResponsiveContainer } from 'recharts';
import './Statistics.css';

const Statistics = () => {
    const chart = useLoaderData();
    const chartInfo = chart.data;


    return (
        <div className='recharts-wrapper container'>

            <ResponsiveContainer width={'100%'} height={500} >
                <LineChart width={500} height={300} data={chartInfo} margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <Line type="monotone" dataKey="total" stroke="#82ca9d" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                </LineChart>
            </ResponsiveContainer>
            <h2>Statistics about Topic and Quiz</h2>
        </div >
    );
};

export default Statistics;