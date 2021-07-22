import profile from "../images/cv/cv_profil.png";

function ImageSection() {
	return (
		<div className="ImageSection">
			<div className="img">
				<img src={profile} alt="profile" />
			</div>
			<div className="about-info">
				<h4>
					I am<span> Antti Piippo</span>
				</h4>
				<p className="about-text">I'm passionate about what I do and hard working.</p>
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
