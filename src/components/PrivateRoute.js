import { Route, Redirect } from "react-router-dom";

function PrivateRoute({ children: Component, path, user }) {

  return (
    <Route
      path={path}
      render={(props) =>
        user.isLogin ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  )
}

export default PrivateRoute
