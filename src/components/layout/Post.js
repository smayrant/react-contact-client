import React from "react";

const Post = () => {
	return (
		<div>
			<div className="white z-depth-1 new-post-container post-container">
				<div className="post-heading new-post-heading">
					<div className="col s1 post-avatar new-post-avatar">
						<i className="fas fa-user" />
					</div>
					<div className="post-info">
						<h5 className="post-user-name">Rick</h5>
						<p className="post-date">August 1, 2019</p>
					</div>
				</div>
				<div className="post-content-container">
					<div className="post-content-title">
						<h5>post title</h5>
					</div>
					<div className="post-content">
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo molestiae, laborum atque
							commodi corporis perferendis, sapiente, reiciendis mollitia consequatur repellendus
							laudantium repellat rem accusantium dolorum illum alias veritatis nobis dignissimos.
						</p>
					</div>
				</div>
				<div className="like-container">
					<div className="like-content">
						<div className="like-icon">
							<i class="fas fa-heart" />
						</div>
						<div className="like-count">0</div>
					</div>
				</div>
			</div>
			<hr className="post-break" />
		</div>
	);
};

export default Post;
