import blogs from "../data/allBlogs";
import { Link } from "react-router-dom";

export const BlockList = () => {
	const blogsArray = [ ...blogs.map((item) => item) ];

	return (
		<div className="blogList">
			<h4>All blogs</h4>
			{blogsArray.map((blog) => {
				return (
					<Link to={`/blogs/${blog.id}`}>
						<p className="blog-link">{blog.title}</p>
					</Link>
				);
			})}
		</div>
	);
};
