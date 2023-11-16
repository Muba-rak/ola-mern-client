import React, { useContext, useState } from "react";
import axios from "axios";
import { UserContext } from "./UserContext.jsx";

export const RegisterAndLoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginOrRegister, setIsLoginOrRegister] = useState("register");
  const { setUsername: setLoggedInUsername, setId } = useContext(UserContext);

  async function handleSubmit(ev) {
    ev.preventDefault();
    const url = isLoginOrRegister === "register" ? "api/register" : "api/login";

    try {
      const { data } = await axios.post(
        url,
        { username, password },
        {
          withCredentials: true,
        }
      );
      // Handle response (e.g., success message)
      console.log("Registration successful:", data);
      setLoggedInUsername(username);
      setId(data.id);
    } catch (error) {
      // Handle error (e.g., display an error message)
      console.error("Registration failed:", error.message);
    }
  }
  return (
    <div className="bg-blue-50 h-screen flex items-center">
      <form className="w-64 mx-auto mb-12" onSubmit={handleSubmit}>
        <input
          value={username}
          onChange={(ev) => setUsername(ev.target.value)}
          type="text"
          placeholder="username"
          className="block w-full rounded-sm p-2 mb-2 border"
        />
        <input
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
          type="password"
          placeholder="password"
          className="block w-full rounded-sm p-2 mb-2 border"
        />
        <button className="bg-blue-500 text-white block w-full rounded-sm p-2">
          {isLoginOrRegister === "register" ? "register" : "Login"}
        </button>
        <div className="text-center mt-2">
          {isLoginOrRegister === "register" && (
            <div>
              Already a member?{" "}
              <button onClick={() => setIsLoginOrRegister("login")}>
                Login here
              </button>{" "}
            </div>
          )}{" "}
          {isLoginOrRegister === "login" && (
            <div>
              Dont have an Account?{" "}
              <button onClick={() => setIsLoginOrRegister("register")}>
                Register
              </button>{" "}
            </div>
          )}{" "}
        </div>
      </form>
    </div>
  );
};
