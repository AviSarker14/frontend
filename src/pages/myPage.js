import React from 'react'
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';

function myPage() {
  return (
    <div>
        <Profile />
        <LogoutButton />
    </div>
  )
}

export default myPage