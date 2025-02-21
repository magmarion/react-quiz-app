import { FC } from "react";

interface NextButtonProps {
    onClick: () => void;
    isLastQuestion: boolean;
    disabled: boolean;
    score: number;
    totalQuestions: number;
}

const NextButton: FC<NextButtonProps> = ({
    onClick,
    isLastQuestion,
    disabled,
    score,
    totalQuestions,
}) => {
    return (
        <div className="mt-6 flex justify-between items-center">
            <div className="text-gray-300">
                Score: {score} / {totalQuestions}
            </div>
            <button
                onClick={onClick}
                disabled={disabled}
                className={`px-6 py-2 rounded-lg text-white transition-colors ${disabled
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-500 hover:bg-blue-600"
                    }`}
            >
                {isLastQuestion ? "Finish Quiz" : "Next Question"}
            </button>
        </div>
    );
};

export default NextButton;