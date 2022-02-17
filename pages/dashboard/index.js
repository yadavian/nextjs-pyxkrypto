import useDepositWithdraw from "@components/providers/hooks/useDepositWithdraw";
import BaseLayout from "@components/ui/common/layout/base";
import DashboardLayout from "@components/ui/common/layout/dashboard";
import ModalComponent from "@components/ui/common/modal";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getUserWalletInfo } from "redux/slice/walletSlice";

export default function Dashboard({ currentUser }) {
  const dispatch = useDispatch();

  const { open, setOpen, handleOpenModal, handlePayment } =
    useDepositWithdraw();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const router = useRouter();

  const userInfo = useSelector((state) => state.auth);
  const { walletInfo } = useSelector((state) => state.wallet);

  useEffect(() => {
    if (!userInfo?.user) {
      router.push("/auth/login");
    }
  }, [userInfo]);

  useEffect(() => {
    dispatch(getUserWalletInfo());
  }, [dispatch]);

  return (
    <DashboardLayout>
      <ModalComponent
        show={open}
        handleOpenModal={handleOpenModal}
        handlePayment={handlePayment}
      />
      <div className="space-y-4">
        <div className="bg-gray-50 flex flex-col sm:flex-row justify-between space-y-4 sm:space-y-0 sm:items-center rounded-md p-4">
          <div className="flex items-center">
            <img
              className="inline-block h-6 w-6 rounded-full ring-2 ring-white mr-2"
              src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <div className="text-xs font-semibold">
              <p>
                {userInfo?.user?.firstName} {userInfo?.user?.lastName}
              </p>
              <p>{userInfo?.user?.email}</p>
            </div>
          </div>
          <div className="text-sm font-semibold">
            <p>User ID: {userInfo?.user?.id}</p>
            {userInfo?.user?.lastLoginTime && (
              <p>Last Login Time: {userInfo?.user?.lastLoginTime}</p>
            )}
          </div>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10 mx-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
              />
            </svg>
            <div>
              <h1 className="text-lg text-center">KYC</h1>
              <span className="text-sm px-2 rounded-full inline-block font-semibold bg-yellow-400">
                Not Verified
              </span>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 flex justify-between items-center rounded-md p-4">
          <div className="py-2">
            <h1 className="font-semibold pb-2 text-center text-xl">
              Balance INR: {walletInfo?.walletInrBalance}
            </h1>
            <div className="flex">
              <div>
                <button
                  onClick={() => setOpen(true)}
                  className="bg-blue-500 mr-2 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
                >
                  Deposit
                </button>
              </div>

              <div>
                <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded">
                  Withdraw
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50  items-center rounded-md p-4">
          <div className="flex justify-between">
            <h1 className="text-xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
              Your Assets{" "}
            </h1>
            <button className="bg-slate-600 hover:bg-slate-800 text-white font-bold py-1 px-2 rounded">
              <span className="flex items-center">
                View All{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-2 h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </button>
          </div>

          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-4">
            {[1, 2, 3, 4, 5, 6].map((asset, index) => {
              return (
                <div
                  key={index}
                  className="p-4 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl"
                >
                  <div className="flex justify-between">
                    <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                      BTC
                    </h1>
                    <h1 className="text-2xl font-semibold text-gray-700  dark:text-white">
                      0.0001
                    </h1>
                  </div>

                  <a
                    href="#"
                    className="inline-flex p-2 text-blue-500 capitalize transition-colors duration-200 transform bg-blue-100 rounded-full dark:bg-blue-500 dark:text-white hover:underline hover:text-blue-600 dark:hover:text-blue-500"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

Dashboard.Layout = BaseLayout;
