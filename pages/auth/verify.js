import BaseLayout from "@components/ui/common/layout/base";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";

export default function SignUp() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    if (!user?.accountVerifyStatus || user.accountVerifyStatus !== "PENDING") {
      router.push("/auth/signup");
    }
  }, [user]);

  const onSubmit = async (data) => {
    try {
      console.log(
        "process.env.NEXT_PUBLIC_SERVER_URL",
        process.env.NEXT_PUBLIC_SERVER_URL
      );
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/user/signup`,
        data
      );

      console.log("response", response);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
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
            Create account
          </p>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="w-full  p-2">
              <input
                {...register("verifyOtp")}
                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                type="email"
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
        </div>

        <div className="flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-700">
          <span className="text-sm text-gray-600 dark:text-gray-200">
            Already have an account?{" "}
          </span>

          <a
            href="#"
            className="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline"
          >
            Login
          </a>
        </div>
      </div>
    </div>
  );
}

SignUp.Layout = BaseLayout;
