/** @jsxImportSource @emotion/react */
import { css, keyframes } from '@emotion/react';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

/**
 * A stateless functional component that renders a loading spinner
 * and a text message to indicate that questions are being loaded.
 *
 * @returns A container with a spinning animation and a loading message.
 */

const Loading = () => {
    return (
        <div css={containerStyle}>
            <div css={spinnerStyle} />
            <p css={textStyle}>Loading questions...</p>
        </div>
    );
};

export default Loading;

const containerStyle = css`
    text-align: center;
    padding: 1rem;
`;

const spinnerStyle = css`
    animation: ${spin} 1s linear infinite;
    border-radius: 50%;
    height: 3rem;
    width: 3rem;
    border: 2px solid transparent;
    border-bottom-color: #3b82f6; /* blue-500 */
    margin: 0 auto;
`;

const textStyle = css`
    margin-top: 0.5rem;
`;