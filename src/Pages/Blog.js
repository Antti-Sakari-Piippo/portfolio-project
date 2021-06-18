import { useParams } from "react-router-dom";

export const Blog = ({ blogItem }) => {
	return (
		<div className="blog-item">
			<p className="blog-title">{blogItem.title}</p>
			<img src={blogItem.image} />
			<p className="blog-text">{blogItem.text}</p>
			<br />
			<p>
				{blogItem.date} {blogItem.month} {blogItem.year}
			</p>
		</div>
	);
};

// id: 1,
// image: blog,
// title: "Lorem ipsum dolor sit amet consectetur",
// link: "https://www.facebook.com/",
// date: "21",
// month: "Mar",
// year: "2021",
