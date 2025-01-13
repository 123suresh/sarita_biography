import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import ResponsiveAppBar from "../components/Header";
import Footer from "../components/Footer";

function PrivateRoute() {
//   const token = useSelector((state)=> state.Auth.token)

  return (
    <div>
      {/* {token ? ( */}
        <>
          <ResponsiveAppBar />
          <Outlet />
          <Footer/>
        </>
      {/* ) : (
        <Navigate to="/" />
      )} */}
    </div>
  );
}

export default PrivateRoute;
