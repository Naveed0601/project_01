import { createContext, useContext } from "react";
import { useState, useEffect } from "react";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [userget, setUserGet] = useState("");
  const [isloading, setIsLoading] = useState(true);
  const authorizationToken = `Bearer ${token}`;

  const storeTokenInLS = (servertoken) => {
    setToken(servertoken);
    return localStorage.setItem("token", servertoken);
  };

  const isloggedIn = !!token;

  const logoutUser = () => {
    setToken("");
    localStorage.removeItem("token");
  };

  // jwt authentication

  const userAuthentication = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("http://localhost:8000/users", {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      if (response.ok) {
        const data = await response.json();
        //console.log("User data", data.userData);
        setUserGet(data.userData);
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    } catch (error) {}
  };

  useEffect(() => {
    userAuthentication();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isloggedIn,
        storeTokenInLS,
        logoutUser,
        userget,
        authorizationToken,
        isloading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const AuthContextValue = useContext(AuthContext);
  if (!AuthContextValue) {
    throw new Error("useAuth used outside of the Provider ");
  }
  return AuthContextValue;
};
