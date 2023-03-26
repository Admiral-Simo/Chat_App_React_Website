import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectCredentials } from "../redux/features/authSlice";

const useCheckAuth = () => {
  const { name, profilePic } = useSelector(selectCredentials);
  const navigate = useNavigate();
  useEffect(() => {
    if (name && profilePic) {
      navigate("/");
    } else {
      navigate("/login");

    }
  }, []);
};

export default useCheckAuth;
