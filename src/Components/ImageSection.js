import blank from "../images/blank-profile-picture.webp";

function ImageSection() {
  return (
    <div className="ImageSection">
      <div className="img">
        <img src={blank} alt="" />
      </div>
      <div className="about-info">
        <h4>
          I am<span> Lorem Ipsum</span>
        </h4>
        <p className="about-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          necessitatibus perferendis numquam dolorem cumque facilis. Desir per
          po la ta doso vi slone ve?
        </p>
        <div className="about-details">
          <div className="left-section">
            <p>Full Name</p>
            <p>Nationality</p>
            <p>Age</p>
            <p>Languages</p>
            <p>Address</p>
          </div>
          <div className="right-section">
            <p>Lorem Ipsum</p>
            <p>Finnish</p>
            <p>27</p>
            <p>Finnish, English</p>
            <p>Lorem ipsum 23</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageSection;
