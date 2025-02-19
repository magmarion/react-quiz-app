import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Question } from "../data";

const Quiz = () => {
    const { category } = useParams<{ category: string }>();
    const [questions, setQuestions] = useState<Question[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let apiUrl = "";
        switch (category) {
            case "react":
                apiUrl = "https://opentdb.com/api.php?amount=15&category=18&type=multiple";
                break;
            case "math":
                apiUrl = "https://opentdb.com/api.php?amount=15&category=19&type=multiple&difficulty=hard"
                break;
            case "astronomy":
                apiUrl = "https://opentdb.com/api.php?amount=15&category=17&type=multiple"
                break;
            default:
                apiUrl = "https://opentdb.com/api.php?amount=15&category=18&type=multiple";

        }

        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                console.log("API data:", data);
                setQuestions(data.results);
                setLoading(false);
            });
    }, [category]);

    return (
        <div>
            <h2 className="text-2xl font-bold text-blue-400">
                {category?.toUpperCase()}
            </h2>
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
