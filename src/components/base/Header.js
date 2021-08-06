import { Link } from "react-router-dom";

const myStyles = {
  header: {
    height: 50,
    backgroundColor: '#333',
    color: 'white'
  },
  flex: {
    display: 'flex',
    height: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  navList: {
    cursor: 'pointer'
  }
}

const Header = ({ user, logout }) => {
  return (
    <header style={myStyles.header}>
      <div className="container" style={myStyles.flex}>
        <Link to='/'>
          <h3>IkhsanShop</h3>
        </Link>
        <ul>
          {user.isLogin ? (
            <li style={myStyles.navList} onClick={() => logout()}>LOGOUT</li>
          ) : <Link to='/login'><li>LOGIN</li></Link>}
        </ul>
      </div>
    </header>
  )
}

export default Header
