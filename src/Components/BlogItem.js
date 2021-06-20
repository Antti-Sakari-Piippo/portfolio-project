import { Link } from "react-router-dom";

export const BlogItem = ({ blog }) => {
	const excerpt = (text) => {
		let trimmedString = text.substr(0, 100);
		trimmedString =
			trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" "))) + '..."';
		return trimmedString;
	};

	return (
		<div className="blogItem">
			<div className="blog-content">
				<Link to={`/blogs/${blog.id}`}>
					<img src={blog.image} alt="blog" />
					<p className="blog-link">{blog.title}</p>
					<p className="excerpt">{excerpt(blog.text)}</p>
				</Link>
			</div>
		</div>
	);
};
