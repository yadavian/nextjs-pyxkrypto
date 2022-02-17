import useDepositWithdraw from "@components/providers/hooks/useDepositWithdraw";
import BaseLayout from "@components/ui/common/layout/base";
import DashboardLayout from "@components/ui/common/layout/dashboard";
import ProfileLayout from "@components/ui/common/layout/profile";
import ModalComponent from "@components/ui/common/modal";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const Profile = () => {

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

        <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Account settings</h2>

        <section className="max-w-4xl p-6 bg-white rounded-md shadow-md dark:bg-gray-800">

          <form>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">


              <div>
                <label className="text-gray-700 font-bold uppercase dark:text-gray-200" for="passwordConfirmation">First Name</label>
                <input id="passwordConfirmation" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
              </div>

              <div>
                <label className="text-gray-700 font-bold uppercase dark:text-gray-200" for="passwordConfirmation">Last Name</label>
                <input id="passwordConfirmation" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
              </div>

              <div>
                <label className="text-gray-700 font-bold uppercase dark:text-gray-200" for="passwordConfirmation">Date OF Birth</label>
                <input id="passwordConfirmation" type="date" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
              </div>

              <div>
                <label className="text-gray-700 font-bold uppercase dark:text-gray-200" for="passwordConfirmation">Email</label>
                <input id="passwordConfirmation" type="email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
              </div>

              <div>
                <label className="text-gray-700 font-bold uppercase dark:text-gray-200" for="passwordConfirmation">Mobile</label>
                <input id="passwordConfirmation" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
              </div>
            </div>

            <div className="flex justify-end mt-6">
              <button className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Save</button>
            </div>
          </form>
        </section>
      </div>
    </ProfileLayout>
  </>

};

Profile.Layout = BaseLayout;

export default Profile;
