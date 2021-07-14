import blank from "../images/blank-profile-picture.webp";

function ImageSection() {
	return (
		<div className="ImageSection">
			<div className="img">
				<img src={blank} alt="" />
			</div>
			<div className="about-info">
				<h4>
					I am<span> Antti Piippo</span>
				</h4>
				<p className="about-text">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum necessitatibus perferendis
					numquam dolorem cumque facilis. Desir per po la ta doso vi slone ve?
				</p>
				<div className="about-details">
					<div className="left-section">
						<p>Full Name</p>
						<p>Nationality</p>
						<p>Age</p>
						<p>Languages</p>
					</div>
					<div className="right-section">
						<p>Antti Piippo</p>
						<p>Finnish</p>
						<p>28</p>
						<p>Finnish, English</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ImageSection;
