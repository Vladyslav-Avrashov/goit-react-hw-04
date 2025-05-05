import axios from 'axios';

const ACCESS_KEY = 'd7D-92yfm-wC7B95Qb60fRAA0E99Vd-f90lzjbCxoY0';
const BASE_URL = 'https://api.unsplash.com/';

export interface UnsplashImage {
  id: string;
  alt_description: string;
  urls: {
    regular: string;
    small: string;
  };
}

interface SearchResponse {
  results: UnsplashImage[];
}

export const searchImages = async (
  query: string,
  page: number
): Promise<SearchResponse> => {
  const response = await axios.get<SearchResponse>(`${BASE_URL}search/photos`, {
    params: {
      query,
      page,
      client_id: ACCESS_KEY,
    },
  });
  return response.data;
};
