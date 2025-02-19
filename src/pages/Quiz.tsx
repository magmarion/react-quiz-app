import { useEffect, useState } from "react";
import { Question } from "../data";

const Quiz = () => {
    const [questions, setQuestions] = useState<Question[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=10&category=18&type=multiple")
            .then((response) => response.json())
            .then((data) => {
                setQuestions(data.results);
                setLoading(false);
            });
    }, []);

    return (
        <div>
            <h2 className="text-2xl font-bold text-red-400">React Quiz</h2>
            {loading ? (<p>Loading...</p>) : (
                <div>
                    {questions.map((question, index) => (
                        <div key={index}>
                            <p>{question.question}</p>
                            <ul>
                                {question.incorrect_answers.map((answer, ix) => (
                                    <li key={ix}>{answer}</li>
                                ))}
                                <li>{question.correct_answer}</li>
                            </ul>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Quiz;
