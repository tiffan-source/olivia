import {
    createBrowserRouter,
    RouterProvider
} from 'react-router-dom';
import Home from './views/Home/Home';
import Olivia from './views/Olivia/Olivia';
import Navbar from './common/Navbar/Navbar';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/olivia',
        element: <Olivia />
    }
]);

function App() {
  return (
    <div className="overflow-x-hidden min-h-screen">
        <Navbar/>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
