
type ResultProps = {
  score: number;
  total: number;
};

const Result = ({ score, total }: ResultProps) => {
  return (
    <div className="max-w-2xl mx-auto p-4 text-center">
      <h1 className="text-3xl font-bold mb-4">Quiz Completed!</h1>
      <p className="text-xl">
        You scored {score} out of {total}.
      </p>
      {/* Additional UI elements like a "Restart Quiz" button can go here */}
    </div>
  );
};

export default Result;