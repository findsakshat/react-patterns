import { Post as PostType } from "../../types"

type PostListProps = {
  posts: PostType[]
}

export default function PostsList(props: PostListProps) {
  const { posts } = props;

  return (
    <div>
      {posts && posts.map((item, index) => (
        <Post 
          key={index}
          post={item}
        />
      ))}
    </div>
  )
}

type PostProps = {
  post: PostType
}

function Post(props: PostProps) {
  const { post } = props;
  const { title, description, readTime, likes, views } = post;

  return (
    <div className="border p-6 rounded-md shadow-sm mb-6">
      <h4 className="text-[20px] font-semibold">{title}</h4>
      <p className="mt-2 text-gray-500">{description}</p>
      <div className="flex items-center justify-between mt-4">
        <div>{readTime}</div>
        <div className="flex gap-4">
          <div>{likes} Likes</div>
          <div>{views} Views</div>
        </div>
      </div>
    </div>
  )
}