import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setAuth } from "../redux/features/authSlice";
import useCheckAuth from "../hooks/useCheckAuth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  useCheckAuth();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [formState, setFormState] = useState({
    name: "",
    profilePic: "",
  });

  const handleChange = (e) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setAuth(formState));
    navigate("/");
  };

  return (
    <div className="bg-[#0B141A] min-h-screen flex justify-center items-center">
      <div className="flex w-full max-w-4xl p-6 text-white bg-black rounded-lg">
        <img
          src="https://images.pexels.com/photos/2422292/pexels-photo-2422292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          className="h-[600px] object-cover"
          alt="chat img"
        />
        <form
          onSubmit={handleSubmit}
          className="flex flex-col flex-1 gap-8 p-2 font-bold"
        >
          <h1>Login / Register</h1>
          <div className="flex flex-col">
            <label htmlFor="name" className="uppercase">
              Name :{" "}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={handleChange}
              className="px-2 py-3 bg-gray-700 rounded-lg focus:outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="profilePic" className="uppercase">
              profilePic :{" "}
            </label>
            <input
              type="text"
              id="profilePic"
              name="profilePic"
              onChange={handleChange}
              className="px-2 py-3 bg-gray-700 rounded-lg focus:outline-none"
            />
          </div>
          <button className="py-3 text-3xl text-white bg-green-600 rounded-lg">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
