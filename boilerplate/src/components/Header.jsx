import React from 'react'
import {Link} from 'react-router-dom'
import navWithAuthentication from './Hoc'
// import ReactSwitch from 'react-switch'
const Header = ({ isAuthenticated }) => {
  return (
    <div>
      {isAuthenticated ? (
        <nav>
          <Link to='/admin'>Admin</Link> <br/>
          <Link to='/premium'>Premium</Link> <br/>
          <Link to='/hochide'>HocHide</Link> <br/>
          {/* <ReactSwitch /> */}
        </nav>
      ) : (
        <nav>
          <Link to='/'>Dashboard</Link> <br/>
          <Link to='/login'>Login</Link> <br/>
        </nav>
      )}
    </div>
  )
}

export default navWithAuthentication(Header);
