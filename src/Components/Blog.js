import { Link, useParams } from "react-router-dom";

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
