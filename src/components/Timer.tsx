import { FC, useEffect, useState } from "react";

interface TimeProps {
    initialTime: number;
    onTimeUp: () => void;
}

/**
 * A Timer component that displays a countdown in mm:ss format.
 *
 * Props:
 * - `initialTime`: The initial time in seconds.
 * - `onTimeUp`: A callback that is called when the timer reaches 0.
 */
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

    /**
     * Converts a time duration from seconds into a formatted string "mm:ss".
     * Pads single digit minutes and seconds with leading zeros.
     *
     * @param seconds - The time duration in seconds.
     * @returns A string representing the time in "mm:ss" format.
     */

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60)
            .toString()
            .padStart(2, "0");
        const secs = (seconds % 60).toString().padStart(2, "0");
        return `${mins}:${secs}`;
    };

    return (
        <div className="border border-gray-500 rounded-lg px-4 py-1 text-lg font-semibold text-white">
            {formatTime(timeLeft)}
        </div>
    );
};

export default Timer;