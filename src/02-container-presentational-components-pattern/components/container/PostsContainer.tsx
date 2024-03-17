import { useState } from "react";
import PostsList from "../presentational/PostList";
import PostListHeader from "../presentational/PostListHeader";

import POSTS from '../../data.json';
import { Post as PostType } from "../../types";

export default function PostsContainer() {
  const [posts, setPosts] = useState<PostType[] | []>(POSTS);
  const [searchValue, setSearchValue] = useState('');

  const filteredPosts = posts && posts.filter((post) => {
    return post.title.toLowerCase().includes(searchValue.toLowerCase());
  });


  return (
    <div>
      <div>
        <PostListHeader 
          count={filteredPosts ? filteredPosts.length : 0} 
          onSearch={(value) => {
            setSearchValue(value);
          }}
        />
      </div>
      <div className="mt-4">
        <PostsList posts={filteredPosts} />
      </div>
    </div>
  )
}