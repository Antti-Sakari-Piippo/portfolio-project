import { Link } from "react-router-dom";

export const BlogItem = ({ blog }) => {
	return (
		<div className="blogItem">
			<div className="blog-content">
				<Link to={`/blogs/${blog.id}`}>
					<img src={blog.image} alt="blog" />
					<p className="blog-link">{blog.title}</p>
				</Link>
			</div>
		</div>
	);
};
