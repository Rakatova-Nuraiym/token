import { Route, Routes } from "react-router-dom";
import LoginPage from "./login/LodinPage";
import RegistrationPage from "./registration/RegistrationPage";
import HomePage from "../home/HomePage";
const UserPage = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/registration" element={<RegistrationPage />} />
      </Routes>
    </div>
  );
};

export default UserPage;
