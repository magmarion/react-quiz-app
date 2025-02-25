/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { FC } from 'react';
import { Question } from '../types';

interface QuestionCardProps {
    question: Question;
    currentQuestionIndex: number;
    totalQuestions: number;
    answerSubmitted: boolean;
    handleOptionClick: (index: number) => void;
    category?: string;
    timeUp: boolean;
}

const QuestionCard: FC<QuestionCardProps> = ({
    question,
    currentQuestionIndex,
    totalQuestions,
    answerSubmitted,
    handleOptionClick,
    category,
    timeUp,
}) => {
    // Dynamic color for category title
    const getCategoryColor = () => {
        switch (category) {
            case 'react':
                return '#007bff';
            case 'math':
                return '#2aaf64';
            case 'astronomy':
                return '#ff9900';
            case 'physics':
                return '#7886C7';
            default:
                return '#4b5563';
        }
    };

    return (
        <div>
            <div css={headerStyle}>
                <h2 css={[categoryTitleStyle, { color: getCategoryColor() }]}>
                    {category?.toUpperCase()}
                </h2>
                <div css={questionCounterStyle}>
                    Question {currentQuestionIndex + 1} of {totalQuestions}
                </div>
            </div>
            <h3 css={questionTextStyle}>{question.question}</h3>
            <div css={optionsGridStyle}>
                {question.options.map((option, index) => (
                    <button
                        key={option}
                        onClick={() => handleOptionClick(index)}
                        disabled={answerSubmitted || timeUp}
                        css={[
                            optionButtonStyle,
                            answerSubmitted || timeUp
                                ? disabledButtonStyle
                                : hoverButtonStyle,
                            answerSubmitted
                                ? index === question.correctOption
                                    ? correctOptionStyle
                                    : incorrectOptionStyle
                                : defaultOptionStyle,
                        ]}
                    >
                        {option}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default QuestionCard;

// Emotion Styles
const headerStyle = css`
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
`;

const categoryTitleStyle = css`
    font-size: 1.5rem; /* text-2xl */
    font-weight: 700; /* font-bold */
`;

const questionCounterStyle = css`
    color: #d1d5db; /* text-gray-300 */
`;

const questionTextStyle = css`
    font-size: 1.25rem; /* text-xl */
    font-weight: 600; /* font-semibold */
    margin-bottom: 1.5rem; /* mb-6 */
`;

const optionsGridStyle = css`
    display: grid;
    grid-template-columns: 1fr; /* grid-cols-1 */
    gap: 1rem; /* gap-4 */
`;

const optionButtonStyle = css`
    padding: 0.75rem; /* p-3 */
    border-radius: 0.5rem; /* rounded-lg */
    text-align: left; /* text-left */
    transition: all 0.5s ease-in-out; /* transition-all duration-500 ease-in-out */
`;

const disabledButtonStyle = css`
    cursor: not-allowed; /* cursor-not-allowed */
`;

const hoverButtonStyle = css`
    cursor: pointer; /* cursor-pointer */
    &:hover {
        background-color: #3674b5; /* hover:bg-[#3674B5] */
        color: white; /* hover:text-white */
        transform: scale(1.05); /* hover:scale-105 */
    }
`;

const defaultOptionStyle = css`
    background-color: #e5e7eb; /* bg-gray-200 */
    color: #4b5563; /* text-gray-600 */
`;

const correctOptionStyle = css`
    background-color: #355f2e; /* bg-[#355F2E] */
    color: white; /* text-white */
`;

const incorrectOptionStyle = css`
    background-color: #e16a54; /* bg-[#E16A54] */
    color: white; /* text-white */
`;