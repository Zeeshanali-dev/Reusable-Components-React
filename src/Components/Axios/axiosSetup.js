import axios from "axios";

const Api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const FormDataAPI = axios.create({ // we use this when we have to send data other than text e.g file
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    "Content-Type": "multipart/form-data",
    "Access-Control-Allow-Origin": "*",
  },
});

export const getRequest = async (data) => {
  const { route } = data;
  const response = await Api.get(route);

  return response;
};

export const getRequestWithParams = async (data) => {
  const { route, formValues } = data;
  const response = await Api.get(route, { params: formValues });

  return response;
};

export const postRequest = async (data) => {
  const { route, formValues } = data;
  const response = await Api.post(route, formValues);

  return response;
};

export const postRequestWithFormData = async (data) => {
  const { route, formValues } = data;
  const response = await FormDataAPI.post(route, formValues);

  return response;
};
