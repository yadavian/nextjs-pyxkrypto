import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const walletSlice = createSlice({
  name: "wallet",
  initialState: {
    loading: false,
    walletInfo: null,
  },
  reducers: {
    addWalletInfo: (state, action) => {
      state.walletInfo = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.loading;
    },
  },
});

export const { addWalletInfo, setLoading } = walletSlice.actions;

export const getUserWalletInfo = () => async (dispatch, getState) => {
  const {
    auth: {
      // user: { token },
    },
  } = getState();

  const config = {
    headers: {
      // Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };

  dispatch(setLoading(true));

  try {
    const { data, status } = await axios.get(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/wallet/details`,
      config
    );

    if (status === 200) {
      dispatch(addWalletInfo(data[0]));
    }

    dispatch(setLoading(false));
  } catch (error) {
    dispatch(setLoading(false));
  }
};

export default walletSlice.reducer;
