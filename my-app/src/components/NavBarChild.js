import React from 'react'

function NavBarChild({ isLoggedIn, handleLoginClick }) {
  return (
    <div>
        {isLoggedIn ? (
          <button type='submit' onClick={handleLoginClick}>Login</button>
        ) : (
        <form>
          <div>
            <label htmlFor='username'>Username</label>
            <input type='text' id='username' />
          </div>
          <div>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button type='submit' onClick={handleLoginClick}>Submit</button>
        </form>
        )}
    </div>
  )
}

export default NavBarChild