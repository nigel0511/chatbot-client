import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  checkAuthStatus,
  loginUser,
  logoutUser,
  signupUser,
} from "../helpers/api-communicator";
import Cookies from "js-cookie";

type User = {
  name: string;
  email: string;
};
type UserAuth = {
  isLoggedIn: boolean;
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
};
const AuthContext = createContext<UserAuth | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // fetch if the user's cookies are valid then skip login
    async function checkStatus() {
      const data = await checkAuthStatus();
      if (data) {
        setUser({ email: data.email, name: data.name });
        setIsLoggedIn(true);
      }
    }
    setTimeout(() => {
      checkStatus();
    }, 2000);
  }, []);
  const login = async (email: string, password: string) => {
    const data = await loginUser(email, password);
    if (data) {
      setUser({ email: data.email, name: data.name });
      setIsLoggedIn(true);
    }
  };
  const signup = async (name: string, email: string, password: string) => {
    const data = await signupUser(name, email, password);
    if (data) {
      setUser({ email: data.email, name: data.name });
      setIsLoggedIn(true);
    }
  };
  const logout = async () => {
    await logoutUser();
    setIsLoggedIn(false);
    setUser(null);
    Cookies.remove("auth_token", {
      path: "/",
      sameSite: "None",
      secure: true,
      domain: import.meta.env.COOKIE_DOMAIN,
    });
  };

  const value = {
    user,
    isLoggedIn,
    login,
    logout,
    signup,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
