import api from './api';

export async function userInfo() {
  const { data } = await api.get('/api/v1/membersss');
  return data;
}
