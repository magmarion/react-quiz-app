
import { Link } from 'react-router';

const Home = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='text-center'>
        <h1 className='text-4xl mb-4'>Welcome to the Quiz App!</h1>
        <p className='mb-4'>Select a quiz category to get started:</p>
        <div>
          <Link to="/quiz/react" className='btn btn-primary'>React Quiz</Link>
          <Link to="/quiz/math" className='btn btn-secondary'>Math Quiz</Link>
          <Link to="/quiz/astronomy" className='btn btn-tertiary'>Astronomy Quiz
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home;
