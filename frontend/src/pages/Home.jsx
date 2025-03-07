import { Link } from 'react-router-dom';
import uberLogo from '../assets/uberLogo.png';

const Home = () => {
  return (
    <div>
      <div className="bg-[url(https://images.unsplash.com/photo-1557404763-69708cd8b9ce?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dHJhZmZpYyUyMGxpZ2h0c3xlbnwwfHwwfHx8MA%3D%3D)] bg-cover bg-center bg-no-repeat h-screen w-full pt-8 flex justify-between flex-col">
        <img className='w-20 ml-8' src={uberLogo} alt="Uber Logo" />
        <div className="bg-white pb-7 py-4 px-4">
          <h2 className='text-3xl font-bold'>Get Started With Uber</h2>
          <Link to='/UserLogin' className='flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5'>Continue</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
