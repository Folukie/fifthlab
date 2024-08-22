import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import http from "../../utils/axios";

export const searchByName = createAction("user/searchByName");
export const toggleState = createAction("user/toggleState");
export const filterUserByGender = createAction("user/filterUserByGender");

export const getAllUsers = createAsyncThunk("user/getAllUsers", async () => {
  try {
    const response = await http.get(`?results=5000`);
    return response.data.results;
  } catch (error: any) {
    alert(error.message || "Something went wrong");
  }
});

export const getUserCSV = createAsyncThunk("user/getUserCSV", async () => {
  try {
    const response = await http.get(`?format=csv`);
    return response.data;
  } catch (error: any) {
    alert(error.message || "Something went wrong");
  }
});

export const getUserByNationality = createAsyncThunk(
  "user/getUserByNationality",
  async (query: string) => {
    const payload = query.toLowerCase();
    try {
      const response = await http.get(`?nat=${payload}`);
      return response.data.results;
    } catch (error: any) {
      alert(error.message || "Something went wrong");
    }
  }
);
