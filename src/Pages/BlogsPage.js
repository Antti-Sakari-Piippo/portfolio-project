import Tittle from "../Components/Tittle";
import { BlogItem } from "../Components/BlogItem";
import blogs from "../data/allBlogs";

function BlogsPage() {
	return (
		<div className="BlogsPage">
			<div className="blogs-title">
				<Tittle title={"Education and work experience"} span={"Education and work experience"} />
			</div>
			<div className="blogs">
				{blogs.map((blog) => {
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
