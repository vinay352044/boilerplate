import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "../../common/Button";
import AdminLinks from "./Links/AdminLinks";
import UserLinks from "./Links/UserLinks";
import logo from "/images/png/logo-no-background.png";
import { useDispatch, useSelector } from "react-redux";
import { removeRole } from "../../../redux/actions/roleAction";
import { toast } from "react-toastify";
import CommonLinks from "./Links/CommonLinks";

const Navbar = () => {
  const { user, admin } = useSelector((state) => state.role);
  console.log(user)  // coming here
  console.log(admin)
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleLogOut = (e) => {
    e.preventDefault();
    dispatch(removeRole());
    toast.success("Logout Successful !!");
    navigate('/')
  };

  return (
    <nav className="bg-[#0295db] sticky top-0 left-0 z-50 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-2 px-4 md:px-8">
        <NavLink
          to={admin ? "/admin" : "/"}
          className="flex items-center space-x-3"
        >
          
        </NavLink>
        <Button
          handleClick={() => setShow(!show)}
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center w-5 h-5 justify-center rounded-sm md:hidden"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <svg
            className="w-full h-full text-white hover:text-black"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </Button>
        <div
          className={`${show ? "" : "hidden"} w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <CommonLinks handleLogOut={handleLogOut}>
            {user ? (
              <UserLinks />
            )  : admin ? (
              <AdminLinks />
            ) : null}
          </CommonLinks>
        </div>
      </div>
    </nav>
    
  );
};

export default Navbar;

