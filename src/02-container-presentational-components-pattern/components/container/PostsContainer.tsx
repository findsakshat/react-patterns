import { useState } from "react";
import PostsList from "../presentational/PostList";
import PostListHeader from "../presentational/PostListHeader";

import POSTS from '../../data.json';
import { Post } from "../../types";

export default function PostsContainer() {
  const [posts, setPosts] = useState<Post[] | []>(POSTS);

  return (
    <div>
      <PostListHeader count={posts ? posts.length : 0} />
      <PostsList posts={posts} />
    </div>
  )
}