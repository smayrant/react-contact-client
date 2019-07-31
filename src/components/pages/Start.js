import React, { Fragment } from "react";
import Navbar from "../layout/Navbar";
import Post from "../layout/Post";

const Start = () => {
	return (
		<Fragment>
			<Navbar />
			<div className="container">
				<div className="white z-depth-1 create-post-container">
					<div className="create-post-heading">
						<h6 className="create-post-title">Create Post</h6>
					</div>
					<div class="row">
						<form class="s">
							<div class="row">
								<div class="col s1 create-post-avatar">IMG</div>
								<div class="input-field col s11">
									<textarea id="textarea1" class="materialize-textarea" />
									<label for="textarea1">Say something...</label>
								</div>
							</div>
						</form>
					</div>
					<button class="waves-effect waves-light btn">
						<i class="fas fa-edit" /> Create a new post!
					</button>
				</div>
				<hr />
				<Post />
			</div>
		</Fragment>
	);
};

export default Start;
