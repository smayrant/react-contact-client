import React, { Component } from "react";
import Navbar from "../layout/Navbar";
import Posts from "../layout/Posts";
import PostContextProvider from "../../contexts/PostContext";
// import Footer from "../layout/Footer";

class Start extends Component {
	addPost = ({ post }) => {
		this.setState({
			posts: [
				...this.state.posts,
				{ id: post.id, username: post.username, postTitle: post.postTitle, content: post.content }
			]
		});
	};

	render () {
		return (
			<PostContextProvider>
				<Navbar />
				<div className="container">
					<Posts />
				</div>
			</PostContextProvider>
		);
	}
}

export default Start;
