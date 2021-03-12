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
            width="500"
            height="300"
            src="https://api.maptiler.com/maps/streets/?key=ptRri5SRXyugsx5Bdomf#14.0/40.70850/-74.00603"
          ></iframe>
        </div>
        <div className="contact-sect">
          <ContactItem title={"Phone"} icon={phone} text1={"+123 123123123"} />
          <ContactItem
            title={"Email"}
            icon={email}
            text1={"loremimpsum@gmail.com"}
            text2={"abcloremipsum@hotmail.com"}
          />
          <ContactItem
            icon={location}
            text1={"Lorem ipsum 25"}
            text2={"Finland"}
            title={"Address"}
          />
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
