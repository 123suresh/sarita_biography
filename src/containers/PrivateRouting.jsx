import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import ResponsiveAppBar from "../components/Header";

function PrivateRoute() {
//   const token = useSelector((state)=> state.Auth.token)

  return (
    <div>
      {/* {token ? ( */}
        <>
          <ResponsiveAppBar />
          <Outlet />
        </>
      {/* ) : (
        <Navigate to="/" />
      )} */}
    </div>
  );
}

export default PrivateRoute;
