import { useWallet } from "@components/providers/hooks";
import BaseLayout from "@components/ui/common/layout/base";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserWalletInfo } from "redux/slice/walletSlice";
import useRazorpay, { RazorpayOptions } from "react-razorpay";
import ModalComponent from "@components/ui/common/modal";
import useDepositWithdraw from "@components/providers/hooks/useDepositWithdraw";
import WithdrawModal from "@components/ui/wallet/WithdrawModal";

export default function Wallet() {
  const dispatch = useDispatch();

  const {
    open,
    setOpen,
    handleOpenModal,
    handlePayment,
    withdrawOpen,
    handlWithrawMoneyModal,
    handleWithdrawOpenModal,
    setwithdrawOpen,
  } = useDepositWithdraw();

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
    <>
      <ModalComponent
        show={open}
        handleOpenModal={handleOpenModal}
        handlePayment={handlePayment}
      />
      <WithdrawModal
        show={withdrawOpen}
        handlWithrawMoneyModal={handlWithrawMoneyModal}
        handleOpenModal={handleWithdrawOpenModal}
      />
      <div className="h-full w-full py-24  flex justify-center">
        <div className="max-w-2xl px-8 py-4 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800">
          <div className="mt-2">
            <h1 className="text-center text-xl font-bold">
              INR Deposited {walletInfo?.walletInrBalance}{" "}
            </h1>
            <p className="text-center text-lg font-bold text-gray-700 text-blue hover:text-gray-600 dark:hover:text-gray-200 hover:underline">
              In order to deposit INR you need to first verify your bank account
            </p>
          </div>

          <div className="flex justify-center mt-6">
            <Image layout="fixed" height="60" width="60" src="/bank-logo.png" />
          </div>
          <div className="flex justify-center mt-4">
            <button className="px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
              <Link href="/dashboard/wallet/verify">Verify</Link>
            </button>
            <button
              onClick={() => setOpen(true)}
              className="px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 mr-10 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
            >
              Deposit
            </button>
            <button
              onClick={() => {
                setwithdrawOpen(true);
              }}
              className="px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 mr-10 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
            >
              Withdraw
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

Wallet.Layout = BaseLayout;
