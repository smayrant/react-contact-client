import React from "react";
import PostItem from "./PostItem";
import { PostContext } from "../../contexts/PostContext";

const Post = () => {
	return (
		<PostContext.Consumer>
			{context => {
				/* destructure the posts from context */
				const { posts } = context;
				/* map over posts received from context, returning the PostItem component for each post */
				return posts.map(post => <PostItem key={post.id} post={post} />);
			}}
		</PostContext.Consumer>
	);
};

export default Post;
