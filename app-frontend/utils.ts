// TODO if I had time should check how can I fix this type
export const fetcher = (...args: any[]) =>
  fetch(...args).then((res) => res.json());
