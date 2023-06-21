import api from './api';

export async function userInfo() {
  const { data } = await api.get('/api/v1/members');
  return data;
}
