import { useFetchPosts } from './useFetchPosts';

export default function Good() {
  const { posts, isLoading, error } = useFetchPosts();

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error occurred in fetching posts!</p>}
      {posts && posts.length > 0 && posts.map((post, index) => (
        <div key={index}>
          {post.title}
        </div>
      ))}
    </div>
  )
}