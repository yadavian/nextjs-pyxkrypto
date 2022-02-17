import BaseLayout from "@components/ui/common/layout/base";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addUserData } from "redux/slice/authSlice";
// import { addUser } from "redux/slice/authSlice";

export default function Login({ currentUser }) {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();

  const [showVerifySection, setShowVerifySection] = useState(false);
  const [loading, setLoading] = useState(false);
  const [tempEmail, setTempEmail] = useState("");

  const router = useRouter();

  const userInfo = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo?.user) {
      router.push("/dashboard");
    }
  }, [userInfo]);

  const onSubmit = async (data1) => {
    try {
      setLoading(true);
      const { data, status } = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/user/signin`,
        data1
      );

      if (status === 200) {
        setTempEmail(data.result);
        setShowVerifySection(true);
        setValue("verifyOtp", "");
      }

      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const onVerify = async (data1) => {
    data1["email"] = tempEmail;

    try {
      setLoading(true);
      const { data, status } = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/user/login-verify-email-otp`,
        data1
      );

      if (status === 200) {
        dispatch(addUserData(data));
        router.push("/dashboard");
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && (
        <div>
          <div className="absolute h-full w-full bg-black  z-10 opacity-20"></div>
          <div className="flex absolute h-full w-full items-center justify-center space-x-2 animate-pulse z-20">
            <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
            <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
            <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
          </div>
        </div>
      )}
      <div className="flex justify-center h-full items-center py-24">
        <div className="w-full max-w-sm md:max-w-lg mx-auto overflow-hidden  bg-white rounded-lg shadow-md dark:bg-gray-800">
          <div className="px-6 py-4">
            <h2 className="text-3xl font-bold text-center text-gray-700 dark:text-white">
              Pyxkrypto
            </h2>

            <h3 className="mt-1 text-xl font-medium text-center text-gray-600 dark:text-gray-200">
              Welcome Back
            </h3>

            <p className="mt-1 text-center text-gray-500 dark:text-gray-400">
              Login account
            </p>

            {!showVerifySection ? (
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="w-full  p-2">
                  <input
                    {...register("email")}
                    className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                    type="email"
                    placeholder="Email Address"
                    aria-label="Password"
                  />
                </div>

                <div className="flex">
                  <div className="w-full p-2">
                    <input
                      {...register("password")}
                      className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                      type="password"
                      placeholder="Password"
                      aria-label="Email Address"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between mt-4">
                  <a
                    href="#"
                    className="text-sm text-gray-600 dark:text-gray-200 hover:text-gray-500"
                  >
                    Forget Password?
                  </a>

                  <button
                    className="px-4 py-2 z-3 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded hover:bg-gray-600 focus:outline-none"
                    type="submit"
                  >
                    Login
                  </button>
                </div>
              </form>
            ) : (
              <form onSubmit={handleSubmit(onVerify)}>
                <div className="w-full  p-2">
                  <input
                    {...register("verifyOtp")}
                    className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                    type="text"
                    placeholder="Verify Email OTP"
                    aria-label="Password"
                  />
                </div>
                <div className="flex items-center justify-between mt-4">
                  <button
                    className="px-4 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded hover:bg-gray-600 focus:outline-none"
                    type="submit"
                  >
                    Confirm
                  </button>
                </div>
              </form>
            )}
          </div>

          <div className="flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-700">
            <span className="text-sm text-gray-600 dark:text-gray-200">
              {!showVerifySection
                ? "Don't have an account?"
                : "Didn't recieve the otp?"}{" "}
            </span>

            {!showVerifySection ? (
              <a className="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline">
                <Link href="/auth/signup">Signup</Link>
              </a>
            ) : (
              <a className="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline">
                <Link href="/auth/signup">Resend</Link>
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

Login.Layout = BaseLayout;
