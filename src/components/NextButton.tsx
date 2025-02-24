import { FC } from "react";

interface NextButtonProps {
    onClick: () => void;
    isLastQuestion: boolean;
    disabled: boolean;
}

/**
 * The NextButton component renders a button with a rounded corner and a gradient background.
 * The component takes three props: onClick, isLastQuestion, and disabled.
 * onClick is a function that is called when the button is clicked.
 * isLastQuestion is a boolean that indicates if the button should display "Finish Quiz" or "Next Question".
 * disabled is a boolean that indicates if the button should be disabled.
 * The component is styled using tailwindcss classes.
 */
const NextButton: FC<NextButtonProps> = ({
    onClick,
    isLastQuestion,
    disabled,
}) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`px-6 py-2 rounded-lg text-white cursor-pointer transition-colors
                 ${disabled
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-500 hover:bg-blue-600"
                }`}
        >
            {isLastQuestion ? "Finish Quiz" : "Next Question"}
        </button>

    );
};

export default NextButton;