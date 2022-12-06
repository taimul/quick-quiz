import React from 'react';
import { ToastContainer } from 'react-toastify';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Quiz = () => {
    const quiz = useLoaderData();
    const quizDetails = quiz.data;
    const { name, questions } = quizDetails;
    return (
        <div>
            <h2>Quiz of {name}</h2>
            {
                questions.map((question, serial) => <Question
                    key={question.id}
                    questions={question}
                    serial={serial}
                ></Question>)
            }
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Quiz;