import { DEFAULT_POST_REQUEST_PARAMS } from 'constants/requestHelperValues';

export default class RequestHelper {
  public static post = async (input: RequestInfo, init: RequestInit = {}) => (
    fetch(input, {
      ...DEFAULT_POST_REQUEST_PARAMS,
      ...init,
    })
  );
}
