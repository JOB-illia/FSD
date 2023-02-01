import { viewerSlice } from './slice';
import { apiViewerLogin } from '~/src/entities/viewer/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { viewerLoginPending, viewerLoginFulfilled, viewerLoginReject } = viewerSlice.actions;

export const viewerLogin = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(viewerLoginPending());

    const { data } = await apiViewerLogin({ email: 'admin@admin.com', password: 'qwerty' });

    console.log('da');

    console.log(data.token);

    await AsyncStorage.setItem('token', data.token);

    dispatch(viewerLoginFulfilled(data.token));
  } catch (e: unknown) {
    console.log(e);
    // @ts-ignore
    return dispatch(viewerLoginReject(`Error: ${e}`));
  }
};
