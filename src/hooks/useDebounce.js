import { useState, useEffect } from 'react';

export function useDebounce(query) {
  const [finalQuery, setFinalQuery] = useState(query);

  useEffect(() => {
      const debounce = setTimeout(() => setFinalQuery(query), 200);
      return () => clearTimeout(debounce);
  }, [query]);
  return finalQuery;
}
