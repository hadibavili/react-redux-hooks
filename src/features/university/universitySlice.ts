import { createSlice } from "@reduxjs/toolkit";
import { actionType, initialStateType } from "../../interfaces/interface";
import { fetchUniversitiesAsync } from "./middleware";

const initialState: initialStateType = {
   universities: [],
   status: "",
   search: "iran",
};

const universitySlice = createSlice({
   name: "university",
   initialState,
   reducers: {
      searchMusics(state: initialStateType, action: actionType) {},
   },
   extraReducers: builder => {
      builder
         .addCase(fetchUniversitiesAsync.pending, state => {
            state.status = "loading";
         })
         .addCase(fetchUniversitiesAsync.fulfilled, (state, action) => {
            state.status = "fetched";
            state.universities = action.payload.universities;
            state.search = action.payload.search;
         });
   },
});

export const universityActions = universitySlice.actions;
export default universitySlice;
