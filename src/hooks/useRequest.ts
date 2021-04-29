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

export default useGetTools;
