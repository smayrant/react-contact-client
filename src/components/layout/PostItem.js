import React from "react";

const PostItem = ({ post }) => {
	return (
		<div>
			<div className="white z-depth-1 new-post-container post-container">
				<div className="post-heading new-post-heading">
					<div className="col s1 post-avatar new-post-avatar">
						<i className="fas fa-user" />
					</div>
					<div className="post-info">
						<h5 className="post-user-name">{post.username}</h5>
						<p className="post-date">{post.date}</p>
					</div>
				</div>
				<div className="post-content-container">
					<div className="post-content-title">
						<h5>{post.title}</h5>
					</div>
					<div className="post-content">
						<p>{post.content}</p>
					</div>
				</div>
				<div className="like-container">
					<div className="like-content">
						<div className="like-icon">
							<i className="fas fa-heart" />
						</div>
						<div className="like-count">0</div>
					</div>
				</div>
			</div>
			<hr className="post-break" />
		</div>
	);
};

export default PostItem;
