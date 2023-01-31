import { createAsyncThunk } from '@reduxjs/toolkit';
import type { IApiViewerPayload } from '../api/types';
import { apiViewerLogin } from '../api';

export const viewer_login = createAsyncThunk(
  'viewer/login',
  async (payload: IApiViewerPayload, thunkAPI) => {
    try {
      const { data } = await apiViewerLogin(payload);

      return data;
    } catch (e: unknown) {
      return `${e}`;
    }
  },
);
