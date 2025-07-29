import ContactItem from "../Components/ContactItem";
import phone from "../images/phone.svg";
import email from "../images/emailme.svg";
import location from "../images/location.svg";
import Tittle from "../Components/Tittle";

function ContactPage() {
	return (
		<div>
			<div className="title">
				<Tittle title={"About Me"} span={"About Me"} />
			</div>
			<div className="ContactPage">
				<div className="map-sect">
					<iframe
						title="google-map"
						width="500"
						height="500"
						src="https://maps.google.com/maps?q=H%C3%B6yhty%C3%A4,%20Oulu&t=&z=13&ie=UTF8&iwloc=&output=embed"
						frameborder="0"
						scrolling="no"
					/>
				</div>
				<div className="contact-sect">
					<ContactItem title={"Email"} icon={email} text1={"antti.sakari.piippo@gmail.com"} />
					{/* <ContactItem title={"Phone"} icon={phone} text1={"00 000000"} /> */}
					{/* <ContactItem
						icon={location}
						title={
							<a href="https://www.linkedin.com/in/piippo-antti" rel="noopener noreferrer">
								LinkedIn
							</a>
						}
					/> */}
				</div>
			</div>
		</div>
	);
}

export default ContactPage;
