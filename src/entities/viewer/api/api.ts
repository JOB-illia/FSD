import { carenty } from '~/src/shared/api';
import type { IApiViewerPayload, IViewer } from '~/src/entities/viewer/api/types';

export const apiViewerLogin = ({ email, password }: IApiViewerPayload) => {
  return carenty.post<string>(`api/auth/login`, { email, password });
};

export const apiViewerMe = (token: string): Promise<IViewer> => {
  return carenty.get('api/users/me', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
