import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import universitySlice from "../features/university/universitySlice";
export const store = configureStore({
   reducer: {
      universities: universitySlice.reducer,
   },
});

export const getState = store.getState;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
   ReturnType,
   RootState,
   unknown,
   Action<string>
>;
