import { FC } from "react";

interface NextButtonProps {
    onClick: () => void;
    isLastQuestion: boolean;
    disabled: boolean;
}

const NextButton: FC<NextButtonProps> = ({
    onClick,
    isLastQuestion,
    disabled,
}) => {
    return (
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

    );
};

export default NextButton;