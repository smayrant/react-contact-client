import React from "react";
import PostItem from "./PostItem";

const Post = props => {
	return <div>{props.posts.map(post => <PostItem key={post.id} post={post} />)}</div>;
};

export default Post;
