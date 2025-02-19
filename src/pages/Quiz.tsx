import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Question } from "../data";

const Quiz = () => {
    const { category } = useParams<{ category: string }>();
    const [questions, setQuestions] = useState<Question[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let apiUrl = "";
                switch (category) {
                    case "react":
                        apiUrl = "https://magmarion.github.io/quiz-json/react.json";
                        break;
                    case "math":
                        apiUrl = "https://magmarion.github.io/quiz-json/math.json"
                        break;
                    case "astronomy":
                        apiUrl = "https://magmarion.github.io/quiz-json/astronomy.json"
                        break;
                    default:
                        apiUrl = "https://magmarion.github.io/quiz-json/react.json";

                }

                await new Promise(resolve => setTimeout(resolve, 1000));

                const response = await fetch(apiUrl);

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();

                setQuestions(data.results);
            } catch (error) {
                console.error("Fetch error:", error);
            } finally {
                setLoading(false);
            }

        };

        fetchData();
    }, [category]);

    return (
        <div>
            <h2 className="text-2xl font-bold text-blue-400">
                {category?.toUpperCase()}
            </h2>
            {loading ? (<p>Loading...</p>) : questions?.length > 0 ? (
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
            ) : (
                <p className="text-red-500">
                    No questions available. Please try again later.
                </p>
            )}
        </div>
    );
}
export default Quiz;
