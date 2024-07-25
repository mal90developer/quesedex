import axios, { AxiosResponse } from 'axios';
import { Cheese } from 'interfaces/Cheese';

export const getCheeses = (): Promise<AxiosResponse<Cheese[]>> => {
  return axios.get<Cheese[]>('http://localhost:8090/cheese/list');
};

export const getCheeseById = (id: string): Promise<AxiosResponse<Cheese>> => {
  return axios.get<Cheese>(`http://localhost:8090/cheese/${id}`);
};
