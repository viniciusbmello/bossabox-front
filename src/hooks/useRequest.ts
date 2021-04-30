import useSWR from 'swr';
import axios from 'axios';

const fetcher = async (url: string) => axios.get(url).then(res => res.data);
const baseUrl = 'http://localhost:3333/';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const useGetTools = (...args) => {
  let path: string;
  let params: string;
  let url: string;

  if (args.length === 2) {
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

  if (args.length === 2) {
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

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useAddTools = (...args) => {
  let path: string;
  let title: string;
  let link: string;
  let description: string;
  let tags: Array<string>;

  if (args.length === 5) {
    [path, title, link, description, tags] = args;
  } else {
    throw new Error('Args is required');
  }

  if (!path) {
    throw new Error('Path is required');
  }

  const url = baseUrl + path;

  axios.post(
    url,
    {
      title,
      link,
      description,
      tags,
    },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
};

export default useGetTools;
