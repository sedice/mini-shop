import request from '@/utils/request';

export async function login(data) {
  return request({
    method: 'POST',
    url: '/users/login',
    data,
  });
}

export async function regist(data) {
  return request({
    method: 'POST',
    url: '/users/regist',
    data,
  });
}
