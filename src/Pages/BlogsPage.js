import { useState } from "react";
import {
  generatePath,
  Route,
  useHistory,
  useRouteMatch,
} from "react-router-dom";
import Blog from "../Components/Blog";
import Tittle from "../Components/Tittle";
import allBlogs from "../data/allBlogs";

function BlogsPage() {
  return (
    <>
      <div className="b-title">
        <Tittle title={"Recent Blogs"} span={"Recent Blogs"} />
      </div>
      <div className="BlogsPage">
        {allBlogs.map((blog) => {
          return (
            <Blog link={blog.link} image={blog.image} title={blog.title} />
          );
        })}
      </div>
    </>
  );
}

export default BlogsPage;
