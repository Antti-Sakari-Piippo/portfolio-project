import React from "react";
import { Link } from "react-router-dom";

export const BlogItem = ({ blog }) => {
	return (
		<Link to={`/blogs/${blog.id}`} className="blog-link">
			<div className="blogItem">
				<div className="blog-content">
					<img src={blog.image} alt="" />
					<p>{blog.title}</p>
				</div>
			</div>
		</Link>
	);
};
