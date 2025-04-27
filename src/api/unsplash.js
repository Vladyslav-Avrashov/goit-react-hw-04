import axios from 'axios';

const ACCESS_KEY = 'd7D-92yfm-wC7B95Qb60fRAA0E99Vd-f90lzjbCxoY0';
const BASE_URL = 'https://api.unsplash.com/';

export const searchImages = async (query, page) => {
  const response = await axios.get(`${BASE_URL}search/photos`, {
    params: {
      query,
      page,
      client_id: ACCESS_KEY,
    },
  });
  return response.data;
};
