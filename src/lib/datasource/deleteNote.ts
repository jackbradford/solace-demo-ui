import axios, { AxiosError } from 'axios'; 
import { API_URL, options } from './config';

export const deleteNote = async (noteId: string) => {
  const url = `${API_URL}/notes/?id=${noteId}`;
  return axios.delete(url, options);
}

