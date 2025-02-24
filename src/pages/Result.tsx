import { Link } from "react-router-dom";

type ResultProps = {
    score: number;
    total: number;
};

/**
 * The Result component is a presentational component that displays the result of the quiz.
 * The component takes two props: score (the number of correct answers) and total (the total number of questions).
 * The component will display a message and an emoji based on how well the user did in the quiz.
 * The component will also display a link to restart the quiz.
 */
const Result = ({ score, total }: ResultProps) => {
    /**
     * Calculates the result message based on the user's score.
     * The result message depends on the percentage of correct answers.
     * If the percentage is less than 33, the message is "Oh no! It looks like you need to brush up on your knowledge. Don't worry, keep learning and try again!".
     * If the percentage is between 33 and 66, the message is "Not bad! You're on the right track, but there's still room for improvement. Keep practicing!".
     * If the percentage is 66 or higher, the message is "Wow, excellent job! You really know your stuff. Keep up the great work!".
     * @param score The number of correct answers.
     * @param total The total number of questions.
     * @returns An object with an emoji and a message.
     */
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