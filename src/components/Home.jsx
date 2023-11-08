// import Container from "../assets/container.jpg";
import { NavLink }  from 'react-router-dom'


const Home = () => {
  return (
    <>
      <div className="flex flex-col pl-12 items-center justify-center bg_img ">
        <div>
          <h1 className="text-7xl text-white mb-2">Click Me I Will Surprise You</h1>
        </div>
        <div className='border rounded-lg p-3 bg-green-500 text-white border-none tooltip'>
          Yes Me
        <NavLink to='/nothing' className='tooltip_text'>Are you sure</NavLink>
        </div>
      </div>
    </>
  );
};

export default Home;
