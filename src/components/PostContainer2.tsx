import { postAPI } from "../services/PostService";
import { PostItem } from "./PostItem";

export const PostContainer2 = () => {
  const { data: posts, error, isLoading } = postAPI.useFetchAllPostsQuery(50);
  return (
    <div className="post__list">
      {isLoading && <h1>Waiting...</h1>}
      {/* {error && <h1>Error</h1>} */}
      {/* {posts && posts.map((post) => <PostItem key={post.id} post={post} />)} */}
    </div>
  );
};
