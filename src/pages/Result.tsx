import { Link } from "react-router-dom";

type ResultProps = {
    score: number;
    total: number;
};

const Result = ({ score, total }: ResultProps) => {
    return (
        <div className="max-w-2xl mx-auto p-4 text-center">
            <h1 className="text-3xl font-bold mb-4">Quiz Completed!</h1>
            <p className="text-xl">
                You asnwered {score} correct out of {total}.
            </p>
            <div className="mt-4">
                <Link
                    to="/"
                    className="btn btn-primary cursor-pointer inline-block transform transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:scale-110 hover:font-bold focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
                >
                    Restart Quiz
                </Link>
            </div>
        </div>
    );
};

export default Result;