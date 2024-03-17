import { useEffect, useState } from 'react';

type Posts = {
  title: string
  body: string
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
    <div className='max-w-[600px] mx-auto'>
      <h3 className='text-[24px] mb-4 font-semibold'>Posts</h3>
      {/* LOADING AND ERROR */}
      {loading && <p>Loading...</p>}
      {error && <p>Something went wrong</p>}

      {/* POSTS */}
      <div>
        {posts && posts.length > 0 && posts.map((post, index) => (
          <Post key={index} title={post.body} />
        ))}
      </div>
    </div>
  )
}

type PostProps = {
  title: string
}

function Post(props: PostProps) {
  const { title } = props;

  return (
    <div className='p-4 rounded-md border mb-4 bg-white'>
      <div>

      </div>
      <div>
        <span className='font-medium'>loremuser</span>
        <p>{title}</p>
      </div>
    </div>
  )
}
