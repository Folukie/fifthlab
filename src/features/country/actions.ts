import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


//  Handle GET request for a list of countries
export const getCountries = createAsyncThunk(
    "user/getCountries",
    async () => {
        try {
            const response = await axios.get(`https://restcountries.com/v3.1/all`);
            return response?.data;
        } catch (error: any) {
            alert(error.message || 'Something went wrong');
            // return thunkAPI.rejectWithValue(error.message);
        }
    }
);