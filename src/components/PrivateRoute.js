import { Route, Redirect } from "react-router-dom";

function PrivateRoute({ children: Component, user }) {

  return (
    <Route
      render={(props) =>
        user.isLogin ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  )
}

export default PrivateRoute
