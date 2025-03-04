import "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Signup() {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:4001/user/signup", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Signup Successfully");
          navigate(from, { replace: true });
        }
        localStorage.setItem("Users", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error: " + err.response.data.message);
        }
      });
  };

  return (
    <>
      {/* Background with Blur Effect */}
      <div className="relative flex h-screen items-center justify-center bg-cover bg-center " 
        style={{ backgroundImage: "url('/signup-bg.jpg')" }}>
        
        {/* Blurred Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur"></div>

        {/* Signup Form Box */}
        <div className="relative w-[400px] bg-white bg-opacity-90 p-6 rounded-lg shadow-lg dark:bg-gray-900 dark:text-white">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>

            <h3 className="font-bold text-lg text-center">Signup</h3>

            {/* Name Input */}
            <div className="mt-4 ">
              <label className="block">Name</label>
              <input
                type="text"
                placeholder="Enter your fullname"
                className="w-full px-3 py-2 border rounded-md outline-none dark:bg-gray-900 dark:text-white"
                {...register("fullname", { required: true })}
              />
              {errors.fullname && (
                <span className="text-sm text-red-500">This field is required</span>
              )}
            </div>

            {/* Email Input */}
            <div className="mt-4 dark:bg-gray-900 dark:text-white ">
              <label className="block">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 border rounded-md outline-none dark:bg-gray-900 dark:text-white"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-sm text-red-500">This field is required</span>
              )}
            </div>

            {/* Password Input */}
            <div className="mt-4">
              <label className="block">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-3 py-2 border rounded-md outline-none dark:bg-gray-900 dark:text-white"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className="text-sm text-red-500">This field is required</span>
              )}
            </div>

            {/* Signup Button */}
            <div className="flex justify-between items-center mt-4">
              <button className="w-full bg-pink-500 text-white rounded-md px-4 py-2 hover:bg-pink-700 duration-200">
                Signup
              </button>
            </div>

            {/* Login Link */}
            <p className="text-center mt-3 text-sm">
              Have an account?{" "}
              <button
                className="underline text-blue-500 cursor-pointer"
                onClick={() => document.getElementById("my_modal_3").showModal()}
              >
                Login
              </button>
              <Login />
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
