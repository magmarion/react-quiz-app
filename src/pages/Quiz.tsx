import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NextButton from "../components/NextButton";
import { Question } from "../types";
import Loading from "../components/Loading";

const Quiz = () => {
    const { category } = useParams<{ category: string }>();
    const [questions, setQuestions] = useState<Question[]>([]);
    const [loading, setLoading] = useState(true);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [answerSubmitted, setAnswerSubmitted] = useState(false);
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

            // TODO: move this to a result component
            alert(
                `Quiz completed! You scored ${score + (selectedAnswer === questions[currentQuestionIndex]?.correctOption ? 1 : 0)
                } out of ${questions.length}`
            );
        }
    };


    if (loading) {
        return (
            <Loading />
        );
    }

    if (error) {
        return <p className="text-red-500 text-center p-4">{error}</p>;
    }


    if (!questions.length) {
        return <p className="text-red-500 text-center p-4">
            No questions available.
        </p>;
    }

    const currentQuestion = questions[currentQuestionIndex];


    return (
        <div className="max-w-2xl mx-auto p-4">
            <div className="flex justify-between mb-4">
                <h2
                    className={`text-2xl font-bold ${category === "react"
                        ? "text-blue-600"
                        : category === "math"
                            ? "text-green-600"
                            : category === "astronomy"
                                ? "text-purple-600"
                                : "text-gray-600" // Default color for unknown categories
                        }`}
                >
                    {category?.toUpperCase()}
                </h2>

                <div className="text-gray-300">
                    Question {currentQuestionIndex + 1}/{questions.length}
                </div>
            </div>

            <h3 className="text-xl font-semibold mb-6">
                {currentQuestion.question}
            </h3>

            <div className="grid grid-cols-1 gap-4">
                {currentQuestion.options.map((option, index) => (
                    <button
                        key={option}
                        onClick={() => handleOptionClick(index)}
                        disabled={answerSubmitted}
                        className={`p-3 rounded-lg text-left transition-all duration-500 ease-in-out

                            ${answerSubmitted
                                ? "cursor-not-allowed"
                                : "cursor-pointer hover:scale-105"
                            } 
                            
                             ${answerSubmitted
                                ? index === currentQuestion.correctOption
                                    ? "bg-green-500 text-white"
                                    : "bg-orange-500 text-white"
                                : selectedAnswer === index
                                    ? "bg-blue-500 text-white"
                                    : "bg-gray-200 text-gray-800"
                            }`}
                    >
                        {option}
                    </button>
                ))}
            </div>
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
