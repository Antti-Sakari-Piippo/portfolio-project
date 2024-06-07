import blogs from "../data/allBlogs";
import { Link } from "react-router-dom";

export const BlockList = () => {
	return (
		<div className="blogList">
			<h4>All entries</h4>
			{blogs.map((blog) => {
				return (
					<Link to={`/blogs/${blog.id}`}>
						<p className="blog-link">{blog.title}</p>
					</Link>
				);
			})}
		</div>
	);
};
