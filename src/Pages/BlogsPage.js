import { useState } from "react";
// import { generatePath, Route, useHistory, useRouteMatch } from "react-router-dom";
import Tittle from "../Components/Tittle";
import { useParams, BrowserRouter as Router, Link, Switch } from "react-router-dom";
import { BlogItem } from "../Components/BlogItem";

function BlogsPage({ correctBlogF, blogsArray, blogItem }) {
	const { id } = useParams();
	return (
		<div>
			<div className="b-title">
				<Tittle title={"Recent Blogs"} span={"Recent Blogs"} />
			</div>
			<div className="BlogsPage">
				{blogsArray.map((blog) => {
					return <BlogItem onClick={() => correctBlogF(blogsArray)} blog={blog} blogItem={blog} />;
				})}
			</div>
		</div>
	);
}

export default BlogsPage;
