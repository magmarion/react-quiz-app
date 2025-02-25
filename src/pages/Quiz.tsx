import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MdError } from 'react-icons/md';
import Loading from "../components/Loading";
import NextButton from "../components/NextButton";
import QuestionCard from "../components/QuestionCard";
import Timer from "../components/Timer";
import { Question } from "../types";
import Result from "./Result";

/**
 * The Quiz component serves as the main quiz interface for the application.
 * It retrieves quiz questions based on the selected category, manages the quiz state,
 * and renders the appropriate components such as the QuestionCard, Timer, and NextButton.
 * 
 * The component manages the following states:
 * - `questions`: An array of quiz questions fetched from an external source.
 * - `loading`: A boolean indicating the loading state of the questions.
 * - `currentQuestionIndex`: The index of the currently displayed question.
 * - `selectedAnswer`: The index of the currently selected answer option.
 * - `answerSubmitted`: A boolean indicating if an answer has been submitted.
 * - `quizCompleted`: A boolean indicating if the quiz has been completed.
 * - `score`: The user's current score based on correct answers.
 * - `error`: A string containing any error messages related to fetching questions.
 * - `timeUp`: A boolean indicating if the time for the quiz has expired.
 * 
 * The component handles user interactions such as selecting an answer, advancing to the next question,
 * and handling time expiration. It also displays loading and error states, and shows the result upon completion.
 */

const Quiz = () => {
    const { category } = useParams<{ category: string }>();
    const [questions, setQuestions] = useState<Question[]>([]);
    const [loading, setLoading] = useState(true);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [answerSubmitted, setAnswerSubmitted] = useState(false);
    const [quizCompleted, setQuizCompleted] = useState(false);
    const [score, setScore] = useState(0);
    const [error, setError] = useState("");
    const [timeUp, setTimeUp] = useState(false);

    useEffect(() => {
        /**
         * fetchData is an asynchronous function that fetches quiz questions
         * from an external API based on the selected category.
         * The function first waits for 2 seconds to simulate a loading delay,
         * then fetches the questions from the API endpoint. If the response
         * is not ok, an error is thrown. If the response data is not in the
         * expected format, an error is thrown. If an error is thrown, the
         * error message is stored in the component state, and the loading
         * state is set to false.
         */
        const fetchData = async () => {
            try {
                await new Promise((resolve) => setTimeout(resolve, 1000));
                let apiUrl = "";
                switch (category) {
                    case "react":
                        apiUrl = "https://magmarion.github.io/quiz-json/react.json";
                        break;
                    case "math":
                        apiUrl = "https://magmarion.github.io/quiz-json/math.json"
                        break;
                    case "astronomy":
                        apiUrl = "https://magmarion.github.io/quiz-json/astronomy.json"
                        break;
                    case "physics":
                        apiUrl = "https://magmarion.github.io/quiz-json/physics.json"
                        break;
                    case "error":
                        apiUrl = ""
                        break;
                    default:
                        apiUrl = "https://magmarion.github.io/quiz-json/react.json";

                }

                const response = await fetch(apiUrl);

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();

                if (!data.questions || !Array.isArray(data.questions)) {
                    throw new Error("Invalid data format");
                }

                setQuestions(data.questions);
                setError("");
            } catch (error) {
                console.error("Fetch error:", error);
                setError("Failed to load questions. Please try again later.");
                setQuestions([]);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [category]);

    /**
     * Handles user selection of an answer option.
     * @param index The index of the selected answer option.
     * If the user has not already submitted an answer, the selected answer is stored
     * in the component state and the answer submitted state is set to true.
     */
    const handleOptionClick = (index: number) => {
        if (!answerSubmitted) {
            setSelectedAnswer(index);
            setAnswerSubmitted(true);
        }
    };
    /**
     * Handles user request to proceed to the next question.
     * If the user has already submitted an answer, checks if the answer was correct
     * and updates the score accordingly. Then resets the selected answer and answer
     * submitted states. If the user has reached the end of the quiz, sets the quiz
     * completed state to true. Otherwise, increments the current question index.
     */
    const handleNextQuestion = () => {
        if (selectedAnswer === questions[currentQuestionIndex]?.correctOption) {
            setScore(score + 1);
        }
        setSelectedAnswer(null);
        setAnswerSubmitted(false);

        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
        } else {
            setQuizCompleted(true);
        }
    };
    /**
     * Handles the event when the quiz time expires.
     * Sets the `timeUp` state to true and marks the quiz as completed.
     */
    const handleTimeUp = () => {
        setTimeUp(true);
        setQuizCompleted(true);
    };

    if (loading) return <Loading />;

    if (error) return (
        <p className="text-red-500 text-xl text-center p-4"> <MdError className="mx-auto mb-4 text-3xl" />{error}</p>
    );

    if (!questions.length) return <p className="text-red-500 text-center p-4"> No questions available.</p>;
    if (quizCompleted) return <Result score={score} total={questions.length} />;

    const currentQuestion = questions[currentQuestionIndex];

    return (
        <div className="max-w-2xl mx-auto p-4">
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
            <div className="mt-4 flex flex-col items-center gap-2
                sm:flex-row sm:justify-between sm:items-center sm:h-12">
                <div className="sm:h-full sm:flex sm:items-center px-2">
                    Score: {score} / {questions.length}
                </div>
                <div className="sm:h-full sm:flex sm:items-center px-2">
                    <Timer initialTime={300} onTimeUp={handleTimeUp} />
                </div>
                <div className="sm:h-full sm:flex sm:items-center px-2">
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
