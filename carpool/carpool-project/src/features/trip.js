import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// import Swal from "sweetalert2";

const initialState = {
  trips: [],
  loading: false,
  error: "",
};

export const tripSlice = createSlice({
  name: "trips",
  initialState,
  reducers: {
    fetchPending: (state) => {
      state.loading = true;
    },
    fetchSuccess(state, action) {
      state.loading = false;
      state.trips = action.payload;
    },
    fetchReject(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    // increment: (state) => {
    //   // Redux Toolkit allows us to write "mutating" logic in reducers. It
    //   // doesn't actually mutate the state because it uses the Immer library,
    //   // which detects changes to a "draft state" and produces a brand new
    //   // immutable state based off those changes
    // //   state.va += 1
    // },
    // decrement: (state) => {
    // //   state.value -= 1
    // },
    // incrementByAmount: (state, action) => {
    // //   state.value += action.payload
    // },
  },
});

// Action creators are generated for each case reducer function
export const { fetchPending, fetchSuccess, fetchReject } = tripSlice.actions;

export const fetchAsync = () => async (dispatch) => {
  try {
    dispatch(fetchPending());

    const { data } = await axios.get("http://localhost:3000/trip", {
      headers: {
        Authorization: `Bearer ${localStorage.access_token}`,
      },
    });
    console.log(data);

    dispatch(fetchSuccess(data.data));
    
  } catch (error) {
    dispatch(fetchReject(error.message));
   
  }
};

export default tripSlice.reducer;
