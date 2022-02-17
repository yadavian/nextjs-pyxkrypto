import useDepositWithdraw from "@components/providers/hooks/useDepositWithdraw";
import BaseLayout from "@components/ui/common/layout/base";
import DashboardLayout from "@components/ui/common/layout/dashboard";
import ProfileLayout from "@components/ui/common/layout/profile";
import ModalComponent from "@components/ui/common/modal";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const LinkBank = () => {

    const { open, setOpen, handleOpenModal, handlePayment } = useDepositWithdraw();

    const router = useRouter();
    const userInfo = useSelector((state) => state.auth);

    // useEffect(() => {
    //   if (!userInfo?.user) {
    //     router.push("/auth/login");
    //   }
    // }, [userInfo]);

    return <>
        {/* {userInfo?.user?.email} */}
        <ProfileLayout>
            <ModalComponent
                show={open}
                handleOpenModal={handleOpenModal}
                handlePayment={handlePayment}
            />
            <div className="space-y-4">

                <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Link Bank</h2>

                <div className="border border-black border-1">
                <div className="px-5 py-2">
                        <h2 className="font-bold">Bank Account </h2>
                        <div className="w-1/2 m-auto">
                            <div className="flex  mt-2 mt-2">
                                <p className="font-bold">Account Holder Name : </p>
                                <input type="text" className="ml-10 block w-auto px-4 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>
                            <div className="flex  mt-2">
                                <p className="font-bold">Account Number : </p>
                                <input type="text" className="ml-10 block w-auto px-4 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>

                            <div className="flex  mt-2">
                                <p className="font-bold">Re-Enter Account Number : </p>
                                <input type="text" className="ml-10 block w-auto px-4 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>

                            <div className="flex  mt-2">
                                <p className="font-bold">IAFC CODE :  </p>
                                <input type="text" className="ml-10 block w-auto px-4 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>

                            <div className="flex  mt-2">
                                <p className="font-bold">Bank Name : </p>
                                <input type="text" className="ml-10 block w-auto px-4 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>

                            <div className="flex  mt-2">
                                <p className="font-bold">Bank Type : </p>
                                <input type="text" className="ml-10 block w-auto px-4 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>

                            <div className="flex justify-end mt-2">
                                <button className="px-8 py-1 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                                    LINK
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="px-5 py-2 mt-5">
                        <h2 className="font-bold">UPI ID </h2>
                        <div className="w-1/2 m-auto">
                            <div className="flex  mt-2 mt-2">
                                <p className="font-bold">Enter UPI ID : </p>
                                <input type="text" className="ml-10 block w-auto px-4 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>
                            <div className="flex  mt-2">
                                <p className="font-bold">Enter OTP : </p>
                                <input type="text" className="ml-10 block w-auto px-4 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>

                            <div className="flex  mt-2 justify-end">
                                <button className="px-8 py-1 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                                    LINK
                                </button>
                            </div>
                        </div>
                    </div>

                    
                </div>


            </div>
        </ProfileLayout>
    </>

};

LinkBank.Layout = BaseLayout;

export default LinkBank;
