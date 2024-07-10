import { useContext } from "react";
import { AuthContext } from "./Provider/AuthProvider";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const Routes = ({children}) => {
    const {user,loading} =useContext(AuthContext)
    if(loading){
        return <span className="loading loading-spinner loading-md"></span>
    }
if(user) {
    return children;
}
    return <Navigate to='/login'></Navigate>
};

export default Routes;
Routes.propTypes = {
    children: PropTypes.node,
  }