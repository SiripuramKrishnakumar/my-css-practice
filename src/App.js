import './App.css';
import RootLayout from './components/RootLayout';
import Home from './components/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  
   const router = createBrowserRouter([
     {
       path: "/",
       element: <RootLayout />,
       children: [
        { path: '/home', element: <Home/> }
      ],
     },
   ]);
  return <RouterProvider router={router} />;
}

export default App;
