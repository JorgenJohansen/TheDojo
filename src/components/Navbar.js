import { Link, Outlet } from "react-router-dom"
import './Navbar.css';
import Temple from '../assets/temple.svg';
import DashboardIcon from '../assets/dashboard_icon.svg';
import AddIcon from '../assets/add_icon.svg';
import Sidebar from "./Sidebar";
import { useLogout } from '../hooks/useLogout';


export default function Navbar() {
  const { logout, isPending } = useLogout();
  return (
    <>
    <Sidebar />
    <div className="navbar">
        <ul>
            <li className='logo'>
               <img src={Temple} alt="dojo logo" />
               <span>The Dojo</span>
            </li>
            {/* <li>
              <Link to="/">
                <img src={DashboardIcon} alt='dashboard icon' />
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link to="/create">
              <img src={AddIcon} alt='add project icon' />
              <span>New Project</span>
              </Link>
            </li> */}
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Signup</Link></li>
            <li>
              {!isPending && <button className="btn" onClick={logout}>Logout</button>}
              {isPending && <button className="btn" onClick={logout} disabled>Logging out...</button>}

            </li>
        </ul>
        
        <Outlet />
        
    </div>
    
    
    </>
  )
}