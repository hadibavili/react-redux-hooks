import { createSlice } from "@reduxjs/toolkit";
import { actionType, initialStateType } from "../../interfaces/interface";
import { fetchUniversitiesAsync } from "./middleware";
import CONSTANTS from "../../constants/constants";

const initialState: initialStateType = {
   universities: CONSTANTS.UNIVERSITIES,
   status: CONSTANTS.STATUS,
   search: CONSTANTS.SEARCH,
};

const universitySlice = createSlice({
   name: CONSTANTS.SLICENAME,
   initialState,
   reducers: {
      searchMusics(state: initialStateType, action: actionType) {},
   },
   extraReducers: builder => {
      builder
         .addCase(
            fetchUniversitiesAsync.pending,
            (state: Partial<initialStateType>) => {
               state.status = "loading";
            }
         )
         .addCase(
            fetchUniversitiesAsync.fulfilled,
            (state: Partial<initialStateType>, action: actionType) => {
               state.status = "fetched";
               state.universities = action.payload.universities;
               state.search = action.payload.search;
            }
         );
   },
});

export const universityActions = universitySlice.actions;
export default universitySlice;
