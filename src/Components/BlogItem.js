import React from "react";
import { Link, useParams } from "react-router-dom";
import blogs from "../data/allBlogs";

const blogsArray = [ ...blogs.map((item) => item) ];

export const BlogItem = ({ blogItem, correctBlogF, blog }) => {
	return (
		<div>
			<Link to={`/blogs/${blog.id}`} className="blog-link">
				<div className="blog">
					<div className="blog-content">
						<img src={blog.image} alt="" />
						{blog.title}
					</div>
				</div>
			</Link>
		</div>
	);
};
