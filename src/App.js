// React Imports
import { lazy } from "react";

// React Router Dom Imports
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// ToastContainer
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "./imports/Global";

// Layout Imports
const AppLayout = lazy(()=> import('./layouts/app/AppLayout'));

// Pages Imports
const AppErrorPage = lazy(()=> import('./pages/app/error/AppErrorPage'));
const NotFoundPage = lazy(()=> import('./pages/app/NotFoundPage'));
const HomePage = lazy(()=> import('./pages/__home/HomePage'));


// Function
function App() {
  const routes = createBrowserRouter([
    {
      path:'',
      element: <AppLayout />,
      errorElement: <AppErrorPage />,
      children: [
        { index: true, element: <HomePage /> }
      ]
    },
    { path:"*", element:<NotFoundPage /> }
  ]);

  return (
    <>    
      <RouterProvider router={routes} />
      <ToastContainer />
    </>
  );
}

export default App;
