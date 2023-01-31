import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { viewer_login } from '~/src/entities/viewer/model/actions';

let token: string | null = null;

const fetchToken = async () => {
  const storedToken = await AsyncStorage.getItem('token');

  if (storedToken) {
    token = storedToken;
  }
};

fetchToken();

interface IAuthSliceState {
  loading: boolean;
  user: any;
  token: string | null;
  isAuthorization: boolean;
  error: string | null;
}

const initialState: IAuthSliceState = {
  loading: false,
  error: null,
  user: null,
  token: token,
  isAuthorization: false,
};

export const viewerSlice = createSlice({
  name: 'viewer',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(viewer_login.pending.type, (state) => {
      state.loading = true;
    });
    builder.addCase(viewer_login.fulfilled.type, (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.token = action.payload;
      state.isAuthorization = true;
    });
    builder.addCase(viewer_login.rejected.type, (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.token = null;
      state.isAuthorization = false;
      state.error = action.payload;
    });
  },
});

export const ViewerReducer = viewerSlice.reducer;
