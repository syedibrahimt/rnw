import { ApiResponse, ApisauceInstance, create } from 'apisauce';
import { Config } from '../config';

const apiClient: ApisauceInstance = create({
  baseURL: Config.API_ENDPOINT,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

function sampleService(username: string, password: string, domain: string) {
  return apiClient
    .get('/users?page=2',
    //   {
    //     name: username,
    //     password: password,
    //     domain: domain
    // }
  )
    .then((response: ApiResponse<any>) => {
      if (response.data) {
        return response.data
      } else {
        return null
      }
    })
}

export const serviceClient = {
  sampleService,
}