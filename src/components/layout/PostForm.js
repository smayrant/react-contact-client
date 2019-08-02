import React from "react";

const PostForm = () => {
	return (
		<div className="white z-depth-1 create-post-container post-container">
			<div className="post-heading">
				<h6 className="post-title">Create Post</h6>
			</div>
			<div className="row">
				<form>
					<div className="row">
						<div className="input-field col s6">
							<input
								placeholder="Enter your post's title"
								id="title"
								type="text"
								className="create-post-title"
							/>
							<label htmlFor="title">Title</label>
						</div>
					</div>
					<div className="row avatar-input-container">
						<div className="col s1 post-avatar">
							<i className="fas fa-user" />
						</div>
						<div className="input-field col s11">
							<textarea id="textarea1" className="materialize-textarea" />
							<label htmlFor="textarea1">Say something...</label>
						</div>
					</div>
				</form>
			</div>
			<div className="create-post-btn-container">
				<button className="create-post-btn waves-effect waves-light btn">
					<i className="fas fa-edit" /> Create a new post!
				</button>
			</div>
		</div>
	);
};

export default PostForm;
