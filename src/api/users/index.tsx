import axios, { AxiosResponse } from "axios";

const API_ENDPOINT = process.env.REACT_APP_NODE_SERVER_API;

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

const approveUsersApplication = async (userDetailsID: string) => {
  const response = await axios.post(`${API_ENDPOINT}/approve`, {
    id: userDetailsID,
  });
  return response;
};

const addRemarks = async (userDetailsID: string, remarks: string) => {
  const response = await axios.post(`${API_ENDPOINT}/remarks`, {
    id: userDetailsID,
    remarks,
  });
  return response;
};

export {
  addUserDetails,
  getUserDetails,
  getUsersList,
  approveUsersApplication,
  addRemarks,
};
