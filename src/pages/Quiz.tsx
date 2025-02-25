/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MdError } from 'react-icons/md';
import Loading from '../components/Loading';
import NextButton from '../components/NextButton';
import QuestionCard from '../components/QuestionCard';
import Timer from '../components/Timer';
import { Question } from '../types';
import Result from './Result';

const Quiz = () => {
    const { category } = useParams<{ category: string }>();
    const [questions, setQuestions] = useState<Question[]>([]);
    const [loading, setLoading] = useState(true);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [answerSubmitted, setAnswerSubmitted] = useState(false);
    const [quizCompleted, setQuizCompleted] = useState(false);
    const [score, setScore] = useState(0);
    const [error, setError] = useState('');
    const [timeUp, setTimeUp] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                await new Promise((resolve) => setTimeout(resolve, 1000));
                let apiUrl = '';
                switch (category) {
                    case 'react':
                        apiUrl = 'https://magmarion.github.io/quiz-json/react.json';
                        break;
                    case 'math':
                        apiUrl = 'https://magmarion.github.io/quiz-json/math.json';
                        break;
                    case 'astronomy':
                        apiUrl = 'https://magmarion.github.io/quiz-json/astronomy.json';
                        break;
                    case 'physics':
                        apiUrl = 'https://magmarion.github.io/quiz-json/physics.json';
                        break;
                    case 'error':
                        apiUrl = '';
                        break;
                    default:
                        apiUrl = 'https://magmarion.github.io/quiz-json/react.json';
                }

                const response = await fetch(apiUrl);

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();

                if (!data.questions || !Array.isArray(data.questions)) {
                    throw new Error('Invalid data format');
                }

                setQuestions(data.questions);
                setError('');
            } catch (error) {
                console.error('Fetch error:', error);
                setError('Failed to load questions. Please try again later.');
                setQuestions([]);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [category]);

    const handleOptionClick = (index: number) => {
        if (!answerSubmitted) {
            setSelectedAnswer(index);
            setAnswerSubmitted(true);
        }
    };

    const handleNextQuestion = () => {
        if (selectedAnswer === questions[currentQuestionIndex]?.correctOption) {
            setScore(score + 1);
        }
        setSelectedAnswer(null);
        setAnswerSubmitted(false);

        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex((prev) => prev + 1);
        } else {
            setQuizCompleted(true);
        }
    };

    const handleTimeUp = () => {
        setTimeUp(true);
        setQuizCompleted(true);
    };

    if (loading) return <Loading />;

    if (error)
        return (
            <div css={errorStyle}>
                <MdError css={errorIconStyle} />
                {error}
            </div>
        );

    if (!questions.length)
        return <div css={noQuestionsStyle}>No questions available.</div>;

    if (quizCompleted) return <Result score={score} total={questions.length} />;

    const currentQuestion = questions[currentQuestionIndex];

    return (
        <div css={containerStyle}>
            {/* Question Card */}
            <QuestionCard
                question={currentQuestion}
                currentQuestionIndex={currentQuestionIndex}
                totalQuestions={questions.length}
                answerSubmitted={answerSubmitted}
                handleOptionClick={handleOptionClick}
                category={category}
                timeUp={timeUp}
            />

            {/* Score, Timer, and Next Button */}
            <div css={controlsContainerStyle}>
                <div css={scoreStyle}>Score: {score} / {questions.length}</div>
                <div css={timerStyle}>
                    <Timer initialTime={300} onTimeUp={handleTimeUp} />
                </div>
                <div css={nextButtonStyle}>
                    <NextButton
                        onClick={handleNextQuestion}
                        isLastQuestion={currentQuestionIndex === questions.length - 1}
                        disabled={!answerSubmitted}
                    />
                </div>
            </div>
        </div>
    );
};

export default Quiz;

const containerStyle = css`
    max-width: 42rem;
    margin: 0 auto;
    padding: 1rem;
`;

const controlsContainerStyle = css`
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    @media (min-width: 640px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        height: 3rem;
    }
`;

const scoreStyle = css`
    @media (min-width: 640px) {
        height: 100%;
        display: flex;
        align-items: center;
        padding: 0 0.5rem;
    }
`;

const timerStyle = css`
    @media (min-width: 640px) {
        height: 100%;
        display: flex;
        align-items: center;
        padding: 0 0.5rem;
    }
`;

const nextButtonStyle = css`
    @media (min-width: 640px) {
        height: 100%;
        display: flex;
        align-items: center;
        padding: 0 0.5rem;
    }
`;

const errorStyle = css`
    color: #ef4444;
    font-size: 1.25rem;
    text-align: center;
    padding: 1rem;
`;

const errorIconStyle = css`
    margin: 0 auto;
    margin-bottom: 1rem;
    font-size: 1.875rem;
`;

const noQuestionsStyle = css`
    color: #ef4444;
    text-align: center;
    padding: 1rem;
`;