/** @jsxImportSource @emotion/react */

import { FC } from "react";
import { css } from "@emotion/react";

interface NextButtonProps {
    onClick: () => void;
    isLastQuestion: boolean;
    disabled: boolean;
}

/**
 * Generates a CSS-in-JS style for a button based on its disabled state.
 * 
 * The button has a consistent padding, border-radius, text color, and font style.
 * The background color and cursor style change depending on whether the button
 * is disabled or not. When the button is not disabled, it has a hover effect
 * that darkens the background color.
 * 
 * @param {boolean} disabled - Determines if the button is disabled.
 * @returns The CSS styles for the button.
 */

const buttonStyle = (disabled: boolean) => css`
padding: 0.5rem 1.5rem;
border-radius: 0.5rem;
color: white;
cursor: pointer;
transition: background-color 0.2s ease-in-out;
border: none;
font-size: 1rem;
font-weight: bold;

${disabled
        ? css`
            background-color: gray;
            cursor: not-allowed;
          `
        : css`
            background-color: #155E95;
            &:hover {
              background-color: #074799;
            }
          `}
`;

/**
 * A button component that displays the text "Next Question" or "Finish Quiz" based on the isLastQuestion prop.
 * 
 * The button has a consistent padding, border-radius, text color, and font style.
 * The background color and cursor style change depending on whether the button
 * is disabled or not. When the button is not disabled, it has a hover effect
 * that darkens the background color.
 * 
 * @param {() => void} onClick - A callback function to be called when the button is clicked.
 * @param {boolean} isLastQuestion - A boolean indicating if the current question is the last one.
 * @param {boolean} disabled - A boolean indicating if the button should be disabled.
 * 
 * @returns A button HTML element with the specified styles and properties.
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
            css={buttonStyle(disabled)}
        >
            {isLastQuestion ? "Finish Quiz" : "Next Question"}
        </button>

    );
};

export default NextButton;