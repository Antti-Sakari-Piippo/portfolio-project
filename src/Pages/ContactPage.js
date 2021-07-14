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
						title="map"
						width="500"
						height="300"
						src="https://api.maptiler.com/maps/streets/?key=ptRri5SRXyugsx5Bdomf#14.0/40.70850/-74.00603"
					/>
				</div>
				<div className="contact-sect">
					<ContactItem title={"Phone"} icon={phone} text1={"045 2123490"} />
					<ContactItem title={"Email"} icon={email} text1={"antti.sakari.piippo@gmail.com"} />
					<ContactItem icon={location} title={"LinkedIn"} />
				</div>
			</div>
		</div>
	);
}

export default ContactPage;
