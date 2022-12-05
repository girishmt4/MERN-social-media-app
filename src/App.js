import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { createBrowserRouter, RouterProvider, Outlet, Navigate } from 'react-router-dom';
import NavBar from "./components/navbar/NavBar";
import LeftBar from "./components/leftBar/LeftBar";
import RightBar from "./components/rightBar/RightBar";
import Profile from './pages/profile/Profile';
import Homepage from './pages/homepage/Homepage';
import './App.scss';

function App() {

  const currentUser = true;

  const Layout = () => {
    return (
      <div className="theme-dark">
        <NavBar />
        <div className="bars-container">
          <LeftBar />
          <div className="outlet">
            <Outlet />
          </div>
          <RightBar />
        </div>
      </div>
    )
  };

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to='/login/' />
    }

    return children;
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: <ProtectedRoute><Layout /></ProtectedRoute>,
      children: [
        {
          path: '/',
          element: <Homepage />
        },
        {
          path: '/profile/:id',
          element: <Profile />
        }
      ]
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/register',
      element: <Register />
    }
  ]);

  return (
    <div>
      {/* <Login /> */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
