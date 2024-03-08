import React from "react";
import { useSelector } from "react-redux";

const navWithAuthentication = (WrappedComp) => {
  return (props) => {
    const isAuthenticated = useSelector((state) => state.authenticationReducer.isAuthenticated);

    return <WrappedComp isAuthenticated={isAuthenticated} {...props} />;
  };
};

export default navWithAuthentication;
