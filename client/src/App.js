import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { createBrowserRouter, RouterProvider, Outlet, Navigate } from 'react-router-dom';
import NavBar from "./components/navbar/NavBar";
import LeftBar from "./components/leftBar/LeftBar";
import RightBar from "./components/rightBar/RightBar";
import Profile from './pages/profile/Profile';
import Homepage from './pages/homepage/Homepage';
import './App.scss';
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/authContext";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'


function App() {

  const { currentUser } = useContext(AuthContext);
  const { darkMode } = useContext(DarkModeContext);


  const queryClient = new QueryClient();

  const Layout = () => {
    return (
      <QueryClientProvider client={queryClient}>
        <div className={`theme-${darkMode ? 'dark' : 'light'}`}>
          <NavBar />
          <div className="bars-container" style={{ display: 'flex' }}>
            <LeftBar />
            <div className="outlet" style={{ flex: 6 }}>
              <Outlet />
            </div>
            <RightBar />
          </div>
        </div>
      </QueryClientProvider>
    )
  };

  const ProtectedRoute = ({ children }) => {


    // console.log(currentUser);
    if (currentUser === null) {
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
