import React, { Fragment, Component } from "react";
import Navbar from "../layout/Navbar";
import Posts from "../layout/Posts";
import PostForm from "../layout/PostForm";
// import Footer from "../layout/Footer";

class Start extends Component {
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
		return (
			<Fragment>
				<Navbar />
				<div className="container">
					<PostForm />

					<Posts posts={this.state.posts} />
				</div>
			</Fragment>
		);
	}
}

export default Start;
