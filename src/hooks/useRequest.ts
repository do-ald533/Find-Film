import useSWR from 'swr';

export function useRequest<T>(url: string) {
  const fetcher = (url: string) =>
    fetch(url)
      .then((response) => response.json())
      .then((responseBody) => {
        return responseBody;
      });

  const { data, error } = useSWR<T>(url, fetcher);
  console.log(data);
  return {
    data: data ? data : undefined,
    isError: error,
  };
}
