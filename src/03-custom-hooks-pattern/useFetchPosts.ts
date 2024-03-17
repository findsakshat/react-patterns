// Custom hooks are just normal functions
// They can make use of built-in hooks and other hooks
// Custom hooks are a subset of React components, they just don't return JSX

import { useEffect, useState } from "react";

type Posts = {
  title: string
}

export function useFetchPosts(defaultValue = []) {
  const [posts, setPosts] = useState<Posts[] | []>(defaultValue)
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        if (data && data.length > 0) {
          setPosts(data);
        }
        setIsLoading(false);
        setError(false);
      } catch (error) {
        setIsLoading(false);
        setError(true);
      }
    }

    fetchPosts();
  }, []);


  return { posts, isLoading, error };
}