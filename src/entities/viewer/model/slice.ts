import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// let token: string | null = null;
//
// const fetchToken = async () => {
//   const storedToken = await AsyncStorage.getItem('token');
//
//   if (storedToken) {
//     token = storedToken;
//   }
// };
//
// fetchToken();

interface IAuthSliceState {
  loading: boolean;
  user: any;
  token: string | null;
  isAuthorization: boolean;
  error: string | null;
  saveToken: boolean;
  email: string;
  password: string;
}

const initialState: IAuthSliceState = {
  loading: false,
  error: null,
  user: null,
  token: '',
  isAuthorization: false,
  email: '',
  password: '',
  saveToken: false,
};

export const viewerSlice = createSlice({
  name: 'viewer',
  initialState,
  reducers: {
    viewerLoginPending: (state) => {
      state.loading = true;
    },
    viewerLoginFulfilled: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.token = action.payload;
      state.isAuthorization = true;
    },
    viewerLoginReject: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.token = null;
      state.isAuthorization = false;
      state.error = action.payload;
    },
    handleChangeDataValue: (
      state,
      action: PayloadAction<{ type: 'email' | 'password'; value: string }>,
    ) => {
      state[action.payload.type] = action.payload.value;
    },
    handleChangeSaveToken: (state) => {
      state.saveToken = !state.saveToken;
    },
  },
  // extraReducers: {
  // [viewer_login.pending.type]: (state) => {
  //   state.loading = true;
  // },
  // [viewer_login.fulfilled.type]: (state, action: PayloadAction<string>) => {
  //   state.loading = false;
  //   state.token = action.payload;
  //   state.isAuthorization = true;
  // },
  // [viewer_login.rejected.type]: (state, action: PayloadAction<string>) => {
  //   state.loading = false;
  //   state.token = null;
  //   state.isAuthorization = false;
  //   state.error = action.payload;
  // },
  // },
  // extraReducers: (builder) => {
  //   builder.addCase(viewer_login.pending, (state) => {
  //     state.loading = true;
  //   });
  //   builder.addCase(viewer_login.fulfilled.type, (state, action: PayloadAction<string>) => {
  //     state.loading = false;
  //     state.token = action.payload;
  //     state.isAuthorization = true;
  //   });
  //   builder.addCase(viewer_login.rejected.type, (state, action: PayloadAction<string>) => {
  //     state.loading = false;
  //     state.token = null;
  //     state.isAuthorization = false;
  //     state.error = action.payload;
  //   });
  // },
});

export const { handleChangeDataValue, handleChangeSaveToken } = viewerSlice.actions;

export const ViewerReducer = viewerSlice.reducer;
