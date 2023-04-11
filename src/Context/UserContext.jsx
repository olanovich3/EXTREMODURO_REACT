import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  let navigate = useNavigate();
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem(`user`);
    const initialValue = JSON.parse(savedUser);
    return initialValue || null;
  });

  const logOut = () => {
    setUser(null);
    localStorage.removeItem(`user`);
    localStorage.removeItem(`password`);
    navigate(`/`);
  };
  const logIn = (resUser, resPassword) => {
    setUser(resUser);
    localStorage.setItem(`user`, JSON.stringify(resUser));
    localStorage.setItem(`password`, JSON.stringify(resPassword));
    navigate(`/`);
  };

  return (
    <UserContext.Provider value={{ user, setUser, logOut, logIn }}>
      {children}
    </UserContext.Provider>
  );
};
