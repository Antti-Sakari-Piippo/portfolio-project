import { useParams } from "react-router-dom";
import blogs from "../data/allBlogs";

export const Blog = () => {
	let { slug } = useParams();
	const blogsArray = [ ...blogs.map((item) => item) ];
	const currentItem = blogsArray[slug - 1];
	return (
		<div className="blog-item">
			<p className="blog-title">{currentItem.title}</p>
			<img src={currentItem.image} />
			<p className="blog-text">{currentItem.text}</p>
			<br />
			<p>
				{currentItem.date} {currentItem.month} {currentItem.year}
			</p>
		</div>
	);
};
