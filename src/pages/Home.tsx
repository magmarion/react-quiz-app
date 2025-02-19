import { Link } from 'react-router-dom';

const Home = () => (
  <div className='flex justify-center items-center h-screen'>
    <div className='text-center'>
      <h1 className='text-4xl mb-4'>Welcome to the Quiz App!</h1>
      <p className='mb-4'>Select a quiz category:</p>
      <div className='space-x-4'>
        <Link to="/quiz/react" className='btn btn-primary'>React</Link>
        <Link to="/quiz/math" className='btn btn-secondary'>Math</Link>
        <Link to="/quiz/astronomy" className='btn btn-tertiary'>Astronomy
        </Link>
      </div>
    </div>
  </div>
);

export default Home;
