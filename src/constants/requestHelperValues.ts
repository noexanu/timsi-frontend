export const DEFAULT_POST_REQUEST_PARAMS: RequestInit = {
  method: 'post',
  headers: {
    'Content-type': 'application/json',
  },
  credentials: 'include',
};

export const DEFAULT_GET_REQUEST_PARAMS: RequestInit = {
  method: 'get',
};
