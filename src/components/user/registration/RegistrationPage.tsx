import { useState } from "react";
import { usePostUserMutation } from "../../../redux/api/crud";
import scss from "./redistratiom.module.scss";
import { useNavigate } from "react-router-dom";

const RegistrationPage = () => {
  const [postUser] = usePostUserMutation();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const addUser = async () => {
    const newUser = {
      email,
      userName,
      password,
    };

    await postUser(newUser);
  };

  const findUser = () => {
    navigate("/");
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
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={addUser}>addUser</button>
        <button onClick={findUser}>sign in</button>
      </div>
    </div>
  );
};

export default RegistrationPage;
