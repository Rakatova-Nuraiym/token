import { useState } from "react";
import scss from "./login.module.scss";
import { useFindUserMutation } from "../../../redux/api/crud";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [findUser] = useFindUserMutation();
  const navigate = useNavigate();

  const addUser = async () => {
    const findUsers = {
      email,
      password,
    };
    const response = await findUser(findUsers);

    if ("data" in response) {
      const responseData = response.data.token;
      localStorage.setItem("token", responseData);
      localStorage.setItem("isAuth", "true");
      console.log(responseData);
    } else {
      console.error("Ligin failed:", response.error);
    }
    if (findUsers) {
      navigate("/home");
    }

    // localStorage.setItem("token", data.token);
  };
  const signIn = () => {
    navigate("/registration");
  };

  return (
    <div className={scss.registration}>
      <div className={scss.card}>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={addUser}>addUser</button>
        <button onClick={signIn}>sign up</button>
      </div>
    </div>
  );
};

export default LoginPage;
