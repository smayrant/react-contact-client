import React, { Fragment } from "react";
import Navbar from "../layout/Navbar";
import Post from "../layout/Post";
import Footer from "../layout/Footer";

const Start = () => {
	return (
		<Fragment>
			<Navbar />
			<div className="container">
				<div className="white z-depth-1 create-post-container post-container">
					<div className="post-heading">
						<h6 className="post-title">Create Post</h6>
					</div>
					<div class="row">
						<form class="s">
							<div class="row avatar-input-container">
								<div class="col s1 post-avatar">
									<i class="fas fa-user" />
								</div>
								<div class="input-field col s11">
									<textarea id="textarea1" class="materialize-textarea" />
									<label for="textarea1">Say something...</label>
								</div>
							</div>
						</form>
					</div>
					<div className="create-post-btn-container">
						<button class="create-post-btn waves-effect waves-light btn">
							<i class="fas fa-edit" /> Create a new post!
						</button>
					</div>
				</div>

				<Post />
			</div>
			<Footer />
		</Fragment>
	);
};

export default Start;
