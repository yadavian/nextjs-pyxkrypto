import axios from "axios";
import { useState } from "react";
import useRazorpay, { RazorpayOptions } from "react-razorpay";
import { useDispatch, useSelector } from "react-redux";
import { getUserWalletInfo } from "redux/slice/walletSlice";

export default function useDepositWithdraw(friendID) {
  const dispatch = useDispatch();
  const Razorpay = useRazorpay();
  const [open, setOpen] = useState(false);
  const [withdrawOpen, setwithdrawOpen] = useState(false);

  //   const router = useRouter();
  const userInfo = useSelector((state) => state.auth);

  const config = {
    headers: {
      Authorization: `Bearer ${userInfo?.user?.token}`,
    },
  };

  const { walletInfo } = useSelector((state) => state.wallet);

  const handleOpenModal = (value) => {
    setOpen(value);
  };

  const handleWithdrawOpenModal = (value) => {
    setwithdrawOpen(value);
  };

  const handlWithrawMoneyModal = async (value) => {
    if (walletInfo?.walletInrBalance >= value) {
      const data = {
        amount: parseInt(walletInfo?.walletInrBalance) - parseInt(value),
        userId: userInfo?.user?.id,
      };
      //   await callApi.Calls(`payment/updateWallet`, "POST", data);
      //   //  Create order on your backend
      //   getWalletbalance();
      const updateWallet = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/payment/updateWallet`,
        data,
        config
      );
      dispatch(getUserWalletInfo());
    } else {
      alert("bigger than wallet amount");
      console.log("bigger than wallet amount");
    }
  };

  const handlePayment = async (amount) => {
    const data = {
      amount,
    };

    try {
      const order = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/payment/createOrder`,
        data,
        config
      ); //  Create order on your backend

      const options = {
        key: "rzp_test_N7DmxNEFQcl5b6", // Enter the Key ID generated from the Dashboard
        amount: data.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: "INR",
        name: "Pyxkrypto",
        description: "Test Transaction",
        // image: "https://example.com/your_logo",
        order_id: order.data.id, //This is a sample Order ID. Pass the `id` obtained in the response of createOrder().
        handler: async function (response) {
          const data = {
            amount: parseInt(walletInfo?.walletInrBalance) + parseInt(amount),
            userId: userInfo?.user?.id,
          };
          try {
            const updateWallet = await axios.post(
              `${process.env.NEXT_PUBLIC_SERVER_URL}/payment/updateWallet`,
              data,
              config
            );
            // await callApi.Calls(`updateWallet`, "POST", data); //  Create order on your backend
            dispatch(getUserWalletInfo());
          } catch (error) {}
        },

        theme: {
          color: "#3399cc",
        },
      };

      const rzp1 = new Razorpay(options);

      rzp1.on("payment.failed", function (response) {
        alert(response.error.code);
        alert(response.error.description);
        alert(response.error.source);
        alert(response.error.step);
        alert(response.error.reason);
        alert(response.error.metadata.order_id);
        alert(response.error.metadata.payment_id);
      });

      rzp1.open();
    } catch (error) {}
  };

  return {
    open,
    setOpen,
    withdrawOpen,
    handleOpenModal,
    handlePayment,
    handleWithdrawOpenModal,
    handlWithrawMoneyModal,
    setwithdrawOpen,
  };
}
