import {
  Link,
  Route,
  Switch,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import blogs from "../data/allBlogs";
import allBlogs from "../data/allBlogs";

function Blog({ key, image, title }) {
  const { id } = useParams();

  return (
    <>
      <Link to={`/blogs/${id}`}>
        <div className="blog" key={key}>
          <div className="blog-content">
            <img src={image} alt="" />
            <a>{title}</a>
          </div>
        </div>
      </Link>
    </>
  );
}

export default Blog;
