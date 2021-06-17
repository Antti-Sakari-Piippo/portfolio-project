import { useState } from "react";
import { generatePath, Route, useHistory, useRouteMatch } from "react-router-dom";
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
            <div className="blog" key={blog.id}>
              <div className="blog-content">
                <img src={blog.image} alt="" />
                <a href={blog.link} className="blog-link">
                  {blog.title}
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default BlogsPage;
