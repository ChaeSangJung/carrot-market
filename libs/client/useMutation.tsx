import { useState } from "react";

interface useMutationState {
  loading: boolean;
  data?: object;
  error?: object;
}

type useMutationResult = [(data:any)=> void, useMutationState];

export default function useMutation(url:string) : useMutationResult {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<undefined | any>(undefined);
  const [error, setError] = useState<undefined | any>(undefined);
  
  const mutation = (data:any) => {};
  return [mutation, {loading, data, error}];
}