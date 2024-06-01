import {post} from 'aws-amplify/api';

export const getToken = async () => {
  try {
    const res = post({
      apiName: 'auth',
      path: '/getToken',
      options: {
        withCredentials: false,
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: 'test',
        },
      },
    });
    const resonse = await (await res.response).body.json() as string;
    return resonse;
  } catch (error) {}
};
