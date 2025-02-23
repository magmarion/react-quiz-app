import { FC, useEffect, useState } from "react";

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