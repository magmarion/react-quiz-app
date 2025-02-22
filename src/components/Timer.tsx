import { FC, useEffect, useState } from "react";

interface TimeProps {
    intialTime: number;
    onTimeUp: () => void;
}

const Timer: FC<TimeProps> = ({ intialTime, onTimeUp }) => {
    const [timeLeft, setTimeLeft] = useState(30);

    useEffect(() => {
        if (timeLeft === 0) {
            onTimeUp();
            return;
        }

        const timer = setInterval(() => {
            setTimeLeft((prevTime) => prevTime - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [timeLeft, onTimeUp]);

}

export default Timer;