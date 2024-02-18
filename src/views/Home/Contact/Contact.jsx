import { React } from "react";
import  ContactRow  from "./ContactRow";
import { faEnvelope, faPhone, faLocationDot, faCreditCard } from '@fortawesome/free-solid-svg-icons';

function Contact() {
	  return (
	<div className=" flex flex-col gap-2 md:grid md:grid-cols-2 md:grid-rows-2 md:mx-32 md:gap-x-36 md:gap-y-10 my-8" >
		<ContactRow icon={faEnvelope} text="oliart@gmail.com"/>
		<ContactRow icon={faLocationDot} text="28 RUE COCODI"/>
		<ContactRow icon={faPhone} text="+33 78 89 90 56 45"/>
		<ContactRow icon={faCreditCard} text="www.oliart.com"/>
	</div>
  );

}

export default Contact