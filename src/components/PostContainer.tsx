import { postAPI } from "../services/PostService";
import { PostItem } from "./PostItem";
import { useState } from "react";
import { IPost } from "../models/IPost";

export const PostContainer = () => {
  const [limit, setLimit] = useState(50);
  const {
    data: posts,
    error,
    isLoading,
    refetch,
  } = postAPI.useFetchAllPostsQuery(limit);

  const [createPost, {}] = postAPI.useCreatePostMutation();
  const [deletePost, {}] = postAPI.useDeletePostMutation();
  const [updatePost, {}] = postAPI.useUpDatePostMutation();

  /* useEffect(() => {
    setTimeout(() => {
      setLimit(3);
    }, 2000);
  }, []);*/

  const handleCreate = async () => {
    const title = prompt();
    await createPost({ title, body: title } as IPost);
  };

  const handleRemove = (post: IPost) => {
    deletePost(post);
  };

  const handleUpDate = (post: IPost) => {
    updatePost(post);
  };

  return (
    <div className="post__list">
      <button onClick={handleCreate}> Add NEW POST</button>
      <br></br>
      <button onClick={() => refetch()}> REFETCH</button>
      {isLoading && <h1>Waiting...</h1>}
      {error && <h1>Error</h1>}
      {posts &&
        posts.map((post) => (
          <PostItem
            remove={handleRemove}
            update={handleUpDate}
            key={post.id}
            post={post}
          />
        ))}
    </div>
  );
};
