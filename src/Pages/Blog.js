import { useParams } from "react-router-dom";
import { BlockList } from "../Components/BlockList";
import blogs from "../data/allBlogs";
import { Link } from "react-router-dom";
import arrow from "../images/arrow.svg";

export const Blog = () => {
	let { slug } = useParams();
	const blogsArray = [...blogs.map((item) => item)];
	const currentItem = blogsArray[slug - 1];
	return (
		<div>
			<p className="blog-title">{currentItem.title}</p>
			<div className="blog-item">
				<div className="wrapper-left">
					<img src={currentItem.image} alt="blog" />
					<p className="blog-text">{currentItem.text}</p>
					<br />
					<p className="blog-date">
						{currentItem.date} {currentItem.month} {currentItem.year}
					</p>
					<br />
					<Link to={`/blogs/`} className="button blog-link">
						<img src={arrow} alt="back arrow" />
						Back
					</Link>
				</div>
				<div className="wrapper-right">
					<div className="BlockList">
						<BlockList />
					</div>
				</div>
			</div>
		</div>
	);
};
