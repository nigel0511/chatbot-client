import axios from "axios";

const CHATBOT_SERVER_URL = import.meta.env.VITE_CHATBOT_SERVER_URL;
axios.defaults.baseURL = CHATBOT_SERVER_URL;
axios.defaults.withCredentials = true;

export const loginUser = async (email: string, password: string) => {
  const res = await axios.post(`/api/auth/login`, {
    email,
    password,
  });
  if (res.status !== 200) {
    throw new Error("Unable to login");
  }
  const data = await res.data;
  return data;
};

export const signupUser = async (
  name: string,
  email: string,
  password: string
) => {
  const res = await axios.post(`/api/auth/register`, {
    name,
    email,
    password,
  });

  if (res.status !== 201) {
    throw new Error("Unable to Signup");
  }
  const data = await res.data;
  return data;
};

export const checkAuthStatus = async () => {
  const res = await axios.get(`/api/auth/auth-status`);
  if (res.status !== 200) {
    throw new Error("Unable to authenticate");
  }
  const data = await res.data;
  return data;
};

export const sendChatRequest = async (message: string) => {
  const res = await axios.post(`/api/chat/new`, { message });
  if (res.status !== 200) {
    throw new Error("Unable to send chat");
  }
  const data = await res.data;
  return data;
};

export const getUserChats = async () => {
  const res = await axios.get(`/api/chat/all-chats`);
  if (res.status !== 200) {
    throw new Error("Unable to send chat");
  }
  const data = await res.data;
  return data;
};

export const deleteUserChats = async () => {
  const res = await axios.delete(`/api/chat/delete`);
  if (res.status !== 200) {
    throw new Error("Unable to delete chats");
  }
  const data = await res.data;
  return data;
};

export const logoutUser = async () => {
  const res = await axios.get(`/api/auth/logout`);
  if (res.status !== 200) {
    throw new Error("Unable to delete chats");
  }
  const data = await res.data;
  return data;
};
