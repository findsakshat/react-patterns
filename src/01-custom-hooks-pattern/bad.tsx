import { useEffect, useState } from 'react';

type Posts = {
  title: string
}

export default function Bad() {
  // State for fetching posts
  const [posts, setPosts] = useState<Posts[] | []>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);


  // API call for fetching posts
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        console.log(data);
        if (data && data.length > 0) {
          setPosts(data);
        }
        setLoading(false);
        setError(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    }

    fetchPosts();
  }, []);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Something went wrong</p>}

      {posts && posts.length > 0 && posts.map((post, index) => (
        <div key={index}>
          {post.title}
        </div>
      ))}
    </div>
  )
}
