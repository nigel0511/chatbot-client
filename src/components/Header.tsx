import Logo from "./shared/Logo";
import { useAuth } from "../context/AuthContext";
import NavigationLink from "./shared/NavigationLink";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const auth = useAuth();
  const location = useLocation();
  return (
    <div className="fixed flex w-full p-6 bg-white z-10 h-[80px]">
      <Link className="mr-auto" to="/">
        <Logo />
      </Link>
      <div>
        {auth?.isLoggedIn ? (
          <div className="flex">
            {location.pathname !== "/chat" && (
              <NavigationLink
                bg="white"
                to="/chat"
                text="Go To Chat"
                textColor="black"
              />
            )}

            <NavigationLink
              bg="#0B201A"
              textColor="white"
              to="/"
              text="logout"
              onClick={auth.logout}
            />
          </div>
        ) : (
          <>
            <NavigationLink
              bg="white"
              to="/login"
              text="Login"
              textColor="black"
            />
            <NavigationLink
              bg="#0B201A"
              textColor="white"
              to="/signup"
              text="Signup"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
