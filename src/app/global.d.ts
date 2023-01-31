import type { Action, ThunkAction } from "@reduxjs/toolkit";

declare global {
  type RootState = ReturnType<typeof import("./index").store.getState>;
  type AppDispatch = ReturnType<typeof import("./index").store.dispatch>;
  type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
}