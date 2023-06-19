import api from './api';

export async function SignUp(info) {
  const { data } = await api.post('/api/v1/auth/signup', info);
  return data;
}

export async function SignIn(info) {
  const { data } = await api.post('/api/v1/auth/login', info);
  return data;
}
