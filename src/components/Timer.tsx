/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { FC, useEffect, useState } from 'react';

interface TimeProps {
    initialTime: number;
    onTimeUp: () => void;
}

const Timer: FC<TimeProps> = ({ initialTime, onTimeUp }) => {
    const [timeLeft, setTimeLeft] = useState(initialTime);

    useEffect(() => {
        if (timeLeft <= 0) {
            onTimeUp();
            return;
        }

        const timer = setInterval(() => {
            setTimeLeft((prevTime) => prevTime - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [timeLeft, onTimeUp]);

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60)
            .toString()
            .padStart(2, '0');
        const secs = (seconds % 60).toString().padStart(2, '0');
        return `${mins}:${secs}`;
    };

    return (
        <div css={timerStyle}>
            {formatTime(timeLeft)}
        </div>
    );
};

export default Timer;

// Emotion Styles
const timerStyle = css`
    border: 1px solid #6b7280; /* border border-gray-500 */
    border-radius: 0.5rem; /* rounded-lg */
    padding: 0.25rem 1rem; /* px-4 py-1 */
    font-size: 1.125rem; /* text-lg */
    font-weight: 600; /* font-semibold */
    color: white; /* text-white */
`;