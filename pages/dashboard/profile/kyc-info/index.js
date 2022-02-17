import useDepositWithdraw from "@components/providers/hooks/useDepositWithdraw";
import BaseLayout from "@components/ui/common/layout/base";
import DashboardLayout from "@components/ui/common/layout/dashboard";
import ProfileLayout from "@components/ui/common/layout/profile";
import ModalComponent from "@components/ui/common/modal";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const KYCInfo = () => {

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
            <h2 className="font-bold">Government Issued ID </h2>
            <div className="w-1/2 m-auto">
              <div className="flex-col mt-2">

                <h2 className="ml-10 mb-2 font-bold">Aadhar Card </h2>
                <input type="text" placeholder="Enter Aadhar Number" className="ml-10 block w-auto px-10 py-1 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />

                <div className="flex">
                  {/* FILE UPLOAD */}
                  <div className="flex justify-center mt-4">
                    <div className="rounded-lg shadow-xl bg-gray-50 lg:w-4/5">
                      <div className="m-4">
                        <label className="inline-block mb-2 text-gray-800 font-bold">Upload Front Side</label>
                        <div className="flex items-center justify-center w-full">
                          <label className="flex flex-col w-full h-32 border-4 border-dashed hover:bg-gray-100 hover:border-gray-300">
                            <div className="flex flex-col items-center justify-center pt-7">
                              <svg xmlns="http://www.w3.org/2000/svg"
                                className="w-12 h-12 text-gray-400 group-hover:text-gray-600" viewBox="0 0 20 20"
                                fill="currentColor">
                                <path fill-rule="evenodd"
                                  d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                                  clip-rule="evenodd" />
                              </svg>
                              <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                                Select a photo</p>
                            </div>
                            <input type="file" className="opacity-0" />
                          </label>
                        </div>
                      </div>
                      <div className="flex p-2 space-x-4">
                        <button className="px-4 py-2 text-white bg-yellow-500 rounded shadow-xl">Reupload</button>
                      </div>
                    </div>
                  </div>
                  {/* FILE UPLOAD */}
                  <div className="flex justify-center mt-4">
                    <div className="rounded-lg shadow-xl bg-gray-50 lg:w-4/5">
                      <div className="m-4">
                        <label className="inline-block mb-2 text-gray-800 font-bold">Upload Front Side</label>
                        <div className="flex items-center justify-center w-full">
                          <label className="flex flex-col w-full h-32 border-4 border-dashed hover:bg-gray-100 hover:border-gray-300">
                            <div className="flex flex-col items-center justify-center pt-7">
                              <svg xmlns="http://www.w3.org/2000/svg"
                                className="w-12 h-12 text-gray-400 group-hover:text-gray-600" viewBox="0 0 20 20"
                                fill="currentColor">
                                <path fill-rule="evenodd"
                                  d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                                  clip-rule="evenodd" />
                              </svg>
                              <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                                Select a photo</p>
                            </div>
                            <input type="file" className="opacity-0" />
                          </label>
                        </div>
                      </div>
                      <div className="flex p-2 space-x-4">
                        <button className="px-4 py-2 text-white bg-yellow-500 rounded shadow-xl">Reupload</button>
                      </div>
                    </div>
                  </div>


                </div>
              </div>

              <div className="flex justify-end mt-5">
                <button className="px-8 py-1 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                  LINK
                </button>
              </div>
            </div>
          </div>


          <div className="px-5 py-2">
            <div className="w-1/2 m-auto">
              <div className="flex-col  mt-2 mt-2">

                <h2 className="ml-10 mb-2 font-bold">Pan Card </h2>

                <input type="text" placeholder="Enter Pan Card Number" className="ml-10 block w-auto px-10 py-1 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />

                <div className="flex">
                  {/* FILE UPLOAD */}
                  <div className="flex justify-center mt-4">
                    <div className="rounded-lg shadow-xl bg-gray-50 lg:w-4/5">
                      <div className="m-4">
                        <label className="inline-block mb-2 text-gray-800 font-bold">Upload Front Side</label>
                        <div className="flex items-center justify-center w-full">
                          <label className="flex flex-col w-full h-32 border-4 border-dashed hover:bg-gray-100 hover:border-gray-300">
                            <div className="flex flex-col items-center justify-center pt-7">
                              <svg xmlns="http://www.w3.org/2000/svg"
                                className="w-12 h-12 text-gray-400 group-hover:text-gray-600" viewBox="0 0 20 20"
                                fill="currentColor">
                                <path fill-rule="evenodd"
                                  d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                                  clip-rule="evenodd" />
                              </svg>
                              <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                                Select a photo</p>
                            </div>
                            <input type="file" className="opacity-0" />
                          </label>
                        </div>
                      </div>
                      <div className="flex p-2 space-x-4">
                        <button className="px-4 py-2 text-white bg-yellow-500 rounded shadow-xl">Reupload</button>
                      </div>
                    </div>
                  </div>


                </div>
              </div>

              <div className="flex justify-end mt-5">
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

KYCInfo.Layout = BaseLayout;

export default KYCInfo;
