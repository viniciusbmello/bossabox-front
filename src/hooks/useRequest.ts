import useSWR from 'swr';
import axios from 'axios';

const fetcher = async (url: string) => axios.get(url).then(res => res.data);
const baseUrl = 'http://localhost:3333/';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const useGetTools = (...args) => {
  let path: string;
  let params: string;
  let url: string;

  if (args.length > 1) {
    [path, params] = args;
  } else {
    [path] = args;
  }

  if (!path) {
    throw new Error('Path is required');
  }

  if (params) {
    params = `?${params}`;
    url = baseUrl + path + params;
  } else {
    url = baseUrl + path;
  }

  const { data: tools, error } = useSWR(url, fetcher);

  return { tools, error };
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useDeleteTools = (...args) => {
  let path: string;
  let id: string;
  let url: string;

  if (args.length > 1) {
    [path, id] = args;
  } else {
    [path] = args;
  }

  if (!path) {
    throw new Error('Path is required');
  }

  if (!id) {
    throw new Error('ID is required');
  } else {
    id = `/${id}`;
    url = baseUrl + path + id;
  }

  axios.delete(url).then(res => res.data);
};

export default useGetTools;
