import {post} from 'aws-amplify/api';

interface Token {
  token: string;
}

export const getToken = async (): Promise<string | null> => {
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
    const response = await res;

    const responseBody = (await (await response.response).body.json()) as {
      token: any;
      response: {token: string};
    };

    const token = responseBody.token;
    return token;
  } catch (error) {
    console.error('Error obteniendo el token:', error);
    return null;
  }
};
