import api from './api';

export async function Test() {
  const { data } = await api.get('/api/v1/hello');
  return data;
}

export async function Info() {
  const { data } = await api.get('/api/v1/membersss');
  return data;
}
// /api/v1/hello
