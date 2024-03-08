import React from 'react'
import Header from './Header'
// import Hoc from './Hoc'

import navWithAuthentication from './Hoc'
const Dashboard = () => {
  return (
    <div>
        <Header/>
        <br/>
        <br/>
        <br/>
      This is Dashboard Page
      
    </div>
  )
}

export default navWithAuthentication(Dashboard)
