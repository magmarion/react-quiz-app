import { FC } from "react";
import { Question } from "../types";

interface QuestionCardProps {
    question: Question;
    currentQuestionIndex: number;
    totalQuestions: number;
    selectedAnswer: number | null;
    answerSubmitted: boolean;
    handleOptionClick: (index: number) => void;
    category?: string;
    timeUp: boolean;

}

const QuestionCard: FC<QuestionCardProps> = ({
    question,
    currentQuestionIndex,
    totalQuestions,
    selectedAnswer,
    answerSubmitted,
    handleOptionClick,
    category,
    timeUp
}) => (
    <div>
        <div className="flex justify-between mb-4">
            <h2
                className={`text-2xl font-bold ${category === "react"
                    ? "text-[#007bff]"
                    : category === "math"
                        ? "text-[#2aaf64]"
                        : category === "astronomy"
                            ? "text-[#ff9900]"
                            : category === "physics"
                                ? "text-[#7886C7]"
                                : "text-[#4b5563]"
                    }`}
            >
                {category?.toUpperCase()}
            </h2>
            <div className="text-gray-300">
                Question {currentQuestionIndex + 1} of {totalQuestions}
            </div>
        </div>
        <h3 className="text-xl font-semibold mb-6">{question.question}</h3>
        <div className="grid grid-cols-1 gap-4">
            {question.options.map((option, index) => (
                <button
                    key={option}
                    onClick={() => handleOptionClick(index)}
                    disabled={answerSubmitted || timeUp}
                    className={`p-3 rounded-lg text-left transition-all duration-500 ease-in-out
                     ${answerSubmitted || timeUp ? "cursor-not-allowed" : "cursor-pointer hover:scale-105"}
                     ${answerSubmitted
                            ? index === question.correctOption
                                ? "bg-green-500 text-white"
                                : "bg-orange-500 text-white"
                            : selectedAnswer == index
                                ? "bg-blue-500 text-white"
                                : "bg-gray-200 text-gray-600"
                        }`}
                >
                    {option}
                </button>
            ))}
        </div>
    </div >
)

export default QuestionCard;