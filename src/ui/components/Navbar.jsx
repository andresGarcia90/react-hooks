import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context/AuthContext';

export const Navbar = () => {

  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);
  const handleLogout = () => {
    logout();
    navigate('/login', {replace: true})
  }
  const { user } = useContext(AuthContext);
  console.log(user);
  const userName = user ? user.name : '';

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
      <Link className="navbar-brand" to="/">
        Asociaciones
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink className={({ isActive }) => `nav-item nav-link ${isActive ? ' active' : ''}` }
            to="/marvel">
            Marvel
          </NavLink>

          <NavLink className={({ isActive }) => `nav-item nav-link ${isActive ? ' active' : ''}` }
            to="/dc">
            DC
          </NavLink>

          <NavLink className={({ isActive }) => `nav-item nav-link ${isActive ? ' active' : ''}` }
            to="/Hero">
            Hero
          </NavLink>

          <NavLink className={({ isActive }) => `nav-item nav-link ${isActive ? ' active' : ''}` }
            to="/search">
            Search
          </NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul className="navbar-nav ml-auto">
          <NavLink className={({ isActive }) => `nav-item nav-link ${isActive ? ' active' : ''}` }
            to="/login">
            Logout
          </NavLink>
        </ul>
      </div>
      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
        <span className="nav-item nav-link text-light px-3">{userName}</span>
        <button type="button" className="btn btn-dark" onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  );
};
