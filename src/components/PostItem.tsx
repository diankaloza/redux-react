import React, { FC } from "react";
import { IPost } from "../models/IPost";

interface PostItemProps {
  post: IPost;
  remove: (post: IPost) => void;
  update: (post: IPost) => void;
}

export const PostItem: FC<PostItemProps> = ({ post, remove, update }) => {
  const handleRemove = (event: React.MouseEvent) => {
    event.stopPropagation();
    remove(post);
  };

  const handleUpDate = (event: React.MouseEvent) => {
    const title = prompt() || "";
    update({ ...post, title });
  };
  return (
    <div className="post" onClick={handleUpDate}>
      {post.id} {post.title}
      <button onClick={handleRemove}>DELETE</button>
    </div>
  );
};
