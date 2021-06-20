import Tittle from "../Components/Tittle";
import { BlogItem } from "../Components/BlogItem";
import blogs from "../data/allBlogs";

function BlogsPage() {
	const blogsArray = [ ...blogs.map((item) => item) ];
	return (
		<div className="BlogsPage">
			<div className="blogs-title">
				<Tittle title={"Recent Blogs"} span={"Recent Blogs"} />
			</div>
			<div className="blogs">
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
