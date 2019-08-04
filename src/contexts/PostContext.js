import React, { createContext, Component } from "react";

export const PostContext = createContext();

class PostContextProvider extends Component {
	state = {
		posts: [
			{
				id: 1,
				username: "rick",
				date: "aug 2",
				postTitle: "new post",
				content: "this is the content for the post"
			},
			{
				id: 2,
				username: "jon",
				date: "aug 2",
				postTitle: "john's new post",
				content: "this is the content for jon's post"
			},
			{
				id: 3,
				username: "dan",
				date: "aug 2",
				postTitle: "dan's new post",
				content: "this is the content for dan's post"
			}
		]
	};
	render () {
		return <PostContext.Provider value={{ ...this.state }}>{this.props.children}</PostContext.Provider>;
	}
}

export default PostContextProvider;
