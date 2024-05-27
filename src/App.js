
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import './App.css'

// Pages and components
import Dashboard from './pages/dashboard/Dashboard';
import Create from './pages/create/Create';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Project from './pages/project/Project';
import Navbar from './components/Navbar';
import RequireNotAuth from './guards/RequireNotAuth';
import RequireAuth from './guards/RequireAuth';
import { useAuthContext } from './hooks/useAuthContext';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar />}>
      <Route element={<RequireAuth />}>
        <Route index element={<Dashboard />} />
        <Route path='create' element={<Create />} />
        <Route path='projects/:id' element={<Project />}/>
      </Route>
      <Route element={<RequireNotAuth />}>
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<Signup />} />
      </Route>
    </Route>
  )
)

function App() {
  const { authIsReady } = useAuthContext();
  return (
    <div className="App">
      {authIsReady && (
        <RouterProvider router={router} />
      )}
    </div>
  );
}

export default App
