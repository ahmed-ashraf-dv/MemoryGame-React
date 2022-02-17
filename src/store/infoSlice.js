import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const domin = "https://api0014s1a5d34a3.000webhostapp.com";
const imgDomin = "https://countryflagsapi.com/png";

export const getCountery = createAsyncThunk("users/getCountery", async () => {
  // Get Data From API
  const { data } = await axios("https://api.db-ip.com/v2/free/self");
  // const { data } = await axios("http://ip-api.com/json");

  // Get Name And Flag
  // const { country: name, countryCode: flag } = data;
  const { countryName: name, countryCode: flag } = data;

  // Return Data
  return { name, flag: `${imgDomin}/${flag}` };
});

export const addPoint = createAsyncThunk(
  "users/addPoint",
  async (points, { getState }) => {
    // Get User Info
    const { info } = getState();
    const { country } = info;
    const { flag, name } = country;

    if (points <= 0) return points;

    // Create Data
    const Data = new FormData();
    Data.append("name", name);
    Data.append("flag", flag);
    Data.append("points", points);

    axios.post(`${domin}/setPoint.php`, Data);

    // Return Data
    return points;
  }
);

export const isBlock = createAsyncThunk("users/checkBlock", async () => {
  // Get Respons
  let Blocked = await axios(`${domin}/isBlacklist.php`).then(
    ({ data }) => data
  );

  // Return Data
  return Blocked;
});

const initialState = {
  points: 0,
  isBlock: null,
  country: { isLoading: false, name: null, flag: null },
};

const infoSlice = createSlice({
  name: "info",
  initialState,
  reducers: {
    setInfo: (state, { payload }) => {
      state.points = payload;
    },
  },
  extraReducers: {
    [getCountery.fulfilled]: (state, { payload: { name, flag } }) => {
      state.country.name = name;
      state.country.flag = flag;
      state.country.isLoading = true;
    },

    [addPoint.fulfilled]: (state, { payload }) => {
      state.points += payload;
    },

    [isBlock.fulfilled]: (state, { payload }) => {
      state.isBlock = payload;
    },
  },
});

export const { setInfo } = infoSlice.actions;
export default infoSlice.reducer;
