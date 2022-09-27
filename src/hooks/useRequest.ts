import useSWR from 'swr';

export function useRequest(url: string) {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data } = useSWR(url, fetcher);
  console.log(data);

  return data;
}
