import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import './Question.css';

const Question = ({ questions, serial }) => {
    const { question, options, correctAnswer } = questions;
    let ques = question.replace(/(<([^>]+)>)/ig, '');

    const correctAns = () => {
        toast.success(`Correct Answer: ${correctAnswer}`, {
            toastId: 'success',
            position: 'top-center',
        });
    }
    const isCorrect = (option) => {
        if (option === correctAnswer) {
            toast.success('Correct Answer', {
                position: 'top-center',
                autoClose: 1000,
            })
        } else {
            toast.error('incorrect Answer', {
                position: 'top-center',
                autoClose: 500,
            })
        }
    }

    return (
        <div className='question container'>
            <div className='card mb-5'>
                <div className='card-title mb-3 mt-3'>
                    <div className='row '>
                        <div className='d-flex'>
                            <div className='m-auto'>
                                <h4>Quiz {serial + 1}: {ques}</h4>
                            </div>
                            <div className='col-md-1 icon'>
                                <FontAwesomeIcon onClick={correctAns} icon={faEye} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='card-body'>
                    <div className='row'>
                        {
                            options.map((option, index) =>
                                <div className='col-md-6' key={index}>
                                    <div className='d-flex option'>
                                        <label htmlFor={option}>
                                            <input onClick={() => { isCorrect(option) }} type="radio" id={option} name={ques} value={option} /> {option}
                                        </label>

                                    </div>

                                </div>
                            )
                        }
                    </div>

                </div>

            </div>

        </div>
    );
};

export default Question;