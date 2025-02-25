/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';

type ResultProps = {
    score: number;
    total: number;
};

const Result = ({ score, total }: ResultProps) => {
    const getResultMessage = (score: number, total: number) => {
        const percentage = (score / total) * 100;

        if (percentage < 33) {
            return {
                emoji: '😢',
                message: 'Oh no! It looks like you need to brush up on your knowledge. Don\'t worry, keep learning and try again!',
            };
        } else if (percentage >= 33 && percentage < 66) {
            return {
                emoji: '😊',
                message: 'Not bad! You\'re on the right track, but there\'s still room for improvement. Keep practicing!',
            };
        } else {
            return {
                emoji: '🎉',
                message: 'Wow, excellent job! You really know your stuff. Keep up the great work!',
            };
        }
    };

    const { emoji, message } = getResultMessage(score, total);

    return (
        <div css={containerStyle}>
            <h1 css={headingStyle}>Quiz Completed!</h1>
            <p css={scoreTextStyle}>
                You answered {score} correct out of {total}.
            </p>

            <div css={emojiContainerStyle}>
                <span css={emojiStyle}>{emoji}</span>
                <p css={messageStyle}>{message}</p>
            </div>

            <div css={buttonContainerStyle}>
                <Link to="/" css={buttonStyle}>Retake Quiz</Link>
            </div>
        </div>
    );
};

export default Result;

// Emotion Styles
const containerStyle = css`
    max-width: 42rem;
    margin: 0 auto;
    padding: 1rem;
    text-align: center;
`;

const headingStyle = css`
    font-size: 1.875rem;
    font-weight: 700;
    margin-bottom: 1rem;
`;

const scoreTextStyle = css`
    font-size: 1.25rem;
`;

const emojiContainerStyle = css`
    margin: 1.5rem 0;
`;

const emojiStyle = css`
    font-size: 4rem;
`;

const messageStyle = css`
    font-size: 1.25rem;
    margin-top: 1rem;
`;

const buttonContainerStyle = css`
    margin-top: 1rem;
`;

const buttonStyle = css`
    display: inline-block;
    padding: 0.5rem 1rem;
    background-color: #007bff;
    color: white;
    font-weight: 600;
    border-radius: 0.375rem;
    text-decoration: none;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;

    &:hover {
        background-color: #0056b3;
    }
`;