import React, { Fragment } from "react";
import Navbar from "../layout/Navbar";

const Start = () => {
	return (
		<Fragment>
			<Navbar />
			<div className="container">
				<div className="white create-post-container">
					<div className="create-post-heading">
						<div className="create-post-avatar">IMG</div>

						<h6 className="create-post-title">Create Post</h6>
					</div>
					<div class="row">
						<form class="s">
							<div class="row">
								<div class="input-field col s12">
									<textarea id="textarea1" class="materialize-textarea" />
									<label for="textarea1">Say something...</label>
								</div>
							</div>
						</form>
					</div>
					<button class="waves-effect waves-light btn">
						<i class="fas fa-comment-alt" /> Create a new post!
					</button>
				</div>
			</div>
		</Fragment>
	);
};

export default Start;
