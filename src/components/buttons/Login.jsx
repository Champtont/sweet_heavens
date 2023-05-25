import { useState } from "react";

const LoginButton = () => {
  const [isLoggedIn, setLogin] = useState(false);

  const handleLoginPress = () => {
    setLogin(true);
  };
  return (
    <button
      onClick={handleLoginPress}
      className={isLoggedIn === false ? "slideOption" : "displayNone"}
    >
      Login
    </button>
  );
};

export default LoginButton;
