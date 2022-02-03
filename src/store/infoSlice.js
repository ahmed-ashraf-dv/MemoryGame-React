import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCountery = createAsyncThunk("users/getCountery", async () => {
  // Get Data From API
  const res = await axios("https://api.db-ip.com/v2/free/self");

  // Get Name And Flag
  const { countryName: name, countryCode: flag } = res.data;

  // Return Data
  return { name, flag };
});

export const addPoint = createAsyncThunk(
  "users/addPoint",
  async (point, { getState }) => {
    // Get User Info
    const {
      info: {
        country: { flag, name },
      },
    } = getState();

    // Create Data
    const Data = new FormData();
    Data.append("name", name);
    Data.append("flag", flag);
    Data.append("point", point);

    // Set Data From API
    axios.post(
      "https://testsss53d4sa54.000webhostapp.com/setPoint.php",
      Data
    );

    // Return Data
    return point;
  }
);

const initialState = {
  points: 0,
  country: { isLoading: false, name: null, flag: null },
};

const infoSlice = createSlice({
  name: "info",
  initialState,
  reducers: {
    setInfo: (state, action) => {
      state.points = action.payload;
    },
  },
  extraReducers: {
    [getCountery.fulfilled]: (state, action) => {
      state.country.name = action.payload.name;
      state.country.flag = `https://countryflagsapi.com/png/${action.payload.flag}`;
      state.country.isLoading = true;
    },
    [addPoint.fulfilled]: (state, action) => {
      state.points += action.payload;
    },
  },
});

export const { setInfo } = infoSlice.actions;
export default infoSlice.reducer;
