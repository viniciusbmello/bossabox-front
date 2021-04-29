import useSWR from 'swr';
import axios from 'axios';

const fetcher = async (url: string) => axios.get(url).then(res => res.data);
const baseUrl = 'http://localhost:3333/';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const useGetTools = path => {
  if (!path) {
    throw new Error('Path is required');
  }

  const url = baseUrl + path;
  const { data: tools, error } = useSWR(url, fetcher);

  return { tools, error };
};

export default useGetTools;
