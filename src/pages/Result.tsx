import { Link } from "react-router-dom";

type ResultProps = {
    score: number;
    total: number;
};

const Result = ({ score, total }: ResultProps) => {
    const getResultMessage = (score: number, total: number) => {
        const percentage = (score / total) * 100;

        if (percentage < 33) {
            return {
                emoji: "😢",
                message: "Oh no! It looks like you need to brush up on your knowledge. Don't worry, keep learning and try again!",
            };

        } else if (percentage >= 33 && percentage < 66) {
            return {
                emoji: "😊",
                message: "Not bad! You're on the right track, but there's still room for improvement. Keep practicing!",
            };
        } else {
            return {
                emoji: "🎉",
                message: "Wow, excellent job! You really know your stuff. Keep up the great work!",
            };
        }
    };

    const { emoji, message } = getResultMessage(score, total);

    return (
        <div className="max-w-2xl mx-auto p-4 text-center">
            <h1 className="text-3xl font-bold mb-4">Quiz Completed!</h1>
            <p className="text-xl">
                You asnwered {score} correct out of {total}.
            </p>

            <div className="my-6">
                <span className="text-6xl">{emoji}</span>
                <p className="text-xl mt-4">{message}</p>
            </div>
            <div className="mt-4">
                <Link
                    to="/"
                    className="btn btn-primary cursor-pointer inline-block  transition-transform duration-800 ease-in-out hover:scale-110 hover:font-bold focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
                >
                    Restart Quiz
                </Link>
            </div>
        </div>
    );
};

export default Result;