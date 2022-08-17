import React from "react";
import { useSetRecoilState } from "recoil";
import { authenStore } from "../Stores/Authen";
import { useNavigate } from "react-router-dom";

export default function Login() {
  let navigate = useNavigate();
  const setLogin = useSetRecoilState(authenStore);
  const Login = () => {
    setLogin(true);
    navigate("/");
  };
  return (
    <div className="mt-5 container">
      <button className="btn btn-success" onClick={Login}>
        Login
      </button>
    </div>
  );
}
