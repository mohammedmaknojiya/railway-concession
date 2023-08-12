import axios, { AxiosResponse } from "axios";

const API_ENDPOINT = "http://localhost:3001";

const addUserDetails = async (userData: CFormInitialValues) => {
  const response = await axios.post(`${API_ENDPOINT}/`, {
    ...userData,
  });
  return response;
};

const getUserDetails = async (
  userEmailID: string
): Promise<AxiosResponse<UserDetailsAPIResp>> => {
  const response = await axios.get(`${API_ENDPOINT}/${userEmailID}`);
  return response;
};

const getUsersList = async (): Promise<AxiosResponse<UserDetailsAPIResp[]>> => {
  const response = await axios.get(`${API_ENDPOINT}/applicationsList`);
  return response;
};

export { addUserDetails, getUserDetails, getUsersList };
