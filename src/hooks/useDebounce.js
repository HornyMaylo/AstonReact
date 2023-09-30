import { useState, useEffect } from 'react';

export function useDebounce(query) {
  const [finalQuery, setFinalQuery] = useState(query);

  useEffect(() => {
    setFinalQuery(query);
  }, [query]);
  return finalQuery;
}
