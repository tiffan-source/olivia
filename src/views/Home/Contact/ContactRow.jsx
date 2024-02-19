import {React} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// This is a component that will be used in the Contact component. Takes icon name and text as props.
function ContactRow({icon, text}) {
	  return (
	<div className="flex flex-row bg-gray-200 items-center pl-10 gap-7 p-3 active:bg-gray-100 cursor-pointer md:flex-col md:gap-5 md:pl-0 md:py-10 md:justify-center md:rounded-md hover:bg-gray-100 ease-linear transition-colors">
		<div className="w-7 h-7 hover:bg-gray-200 bg-gray-300 flex justify-center items-center rounded-3xl md:w-12 md:h-12 ease-linear transition-colors">
			<FontAwesomeIcon icon={icon} className="md:h-6"/>
		</div>
		<div className="" >
			{text}
		</div>
	</div>
  );
}

export default ContactRow;