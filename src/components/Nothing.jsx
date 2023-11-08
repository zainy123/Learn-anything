import {NavLink} from 'react-router-dom'
const Nothing = () => {
  return (
    <>
    <div className="joke_image h-[100vh] flex flex-col items-center justify-center">
      <h1 className='text-7xl text-white mb-3'>You Dare Touch my soul</h1>
      <div className='border p-3 rounded-md bg-green-500 text-white border-none'>
        <NavLink to='/'>There won't be a second time</NavLink>
      </div>
    </div>
    </>
    );
};

export default Nothing;
