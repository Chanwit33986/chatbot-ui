import { atom, useRecoilValue } from "recoil";
import { useLocation, Navigate } from "react-router-dom";

export const authenStore = atom({
  key: "isLogin",
  default: false,
});

export default function RequireAuth(props) {
  const isLogin = useRecoilValue(authenStore);
  let location = useLocation();
  if (!isLogin) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return props.children;
}
