import api from './api';

export async function signUp(info) {
  const { data } = await api.post('/api/v1/auth/signup', info);
  return data;
}

export async function signIn(info) {
  const { data } = await api.post('/api/v1/auth/login', info);
  return data;
}

export async function createPictogram(datas) {
  const { data } = await api.post('/api/v1/drawings', datas);
  return data;
}
