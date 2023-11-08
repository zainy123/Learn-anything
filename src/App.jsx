import Home from './components/Home'
import Nothing from './components/Nothing';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/nothing',
    element: <Nothing/>
  }
])


function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
