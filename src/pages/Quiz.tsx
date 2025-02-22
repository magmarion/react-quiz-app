import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import NextButton from "../components/NextButton";
import { Question } from "../types";
import Result from "./Result";
import QuestionCard from "../components/QuestionCard";


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

    useEffect(() => {
        const fetchData = async () => {
            try {
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
            setCurrentQuestionIndex(prev => prev + 1);
        } else {
            setQuizCompleted(true);
        }
    };


    if (loading) return <Loading />;
    if (error) return <p className="text-red-500 text-center p-4">{error}</p>;
    if (!questions.length) return <p className="text-red-500 text-center p-4"> No questions available.</p>;
    if (quizCompleted) return <Result score={score} total={questions.length} />;

    const currentQuestion = questions[currentQuestionIndex];


    return (
        <div className="max-w-2xl mx-auto p-4">
            {/* Moved question rendering logic to `QuestionCard` for cleaner, more maintainable code.*/}
            <QuestionCard
                question={currentQuestion}
                currentQuestionIndex={currentQuestionIndex}
                totalQuestions={questions.length}
                selectedAnswer={selectedAnswer}
                answerSubmitted={answerSubmitted}
                handleOptionClick={handleOptionClick}
                category={category}
            />

            <NextButton
                onClick={handleNextQuestion}
                isLastQuestion={currentQuestionIndex === questions.length - 1}
                disabled={!answerSubmitted}
                score={score}
                totalQuestions={questions.length}
            />
        </div>

    );
};

export default Quiz;
