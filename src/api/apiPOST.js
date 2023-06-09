import api from './api';

export async function SignUp(info) {
  const { data } = await api.post('/api/v1/auth/signup', info);
  return data;
}
