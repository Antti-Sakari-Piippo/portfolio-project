import Tittle from "../Components/Tittle";
import { BlogItem } from "../Components/BlogItem";

function BlogsPage({ blogsArray }) {
	return (
		<div className="BlogsPage">
			<div className="b-title">
				<Tittle title={"Recent Blogs"} span={"Recent Blogs"} />
			</div>
			<div className="BlogsArray">
				{blogsArray.map((blog) => {
					return (
						<div>
							<BlogItem blog={blog} />
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default BlogsPage;
