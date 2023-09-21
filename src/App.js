import './App.css';
import RootLayout from './components/RootLayout';
import Home from './components/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Room1 from './components/Room1';
import Room2 from './components/Room2';
import Room3 from './components/Room3';
import Room4 from './components/Room4';

function App() {
  
   const router = createBrowserRouter([
     {
       path: "/",
       element: <RootLayout />,
       children: [
         { path: "/", element: <Home /> },
         {
           path: "/home",
           element: <Home />,
           children: [
             { path: "room1", element: <Room1 /> },
             { path: "room2", element: <Room2 /> },
             { path: "room3", element: <Room3 /> },
             { path: "room4", element: <Room4 /> },
           ],
         },
       ],
     },
   ]);
  return <RouterProvider router={router} />;
}

export default App;
