import React from "react";
import logo from "../../../assets/images/oliart_logo.jpg";

function Footer() {

	return (
		// This is the footer component. It will be used in the Home component.
		<div className="text-white bg-black flex flex-col justify-between pt-20 pb-4 gap-5 md:pt-10" >
			{/* first half */}
			<div className="flex flex-col-reverse items-center gap-16 md:flex-row md:justify-start md:items-start md:pl-10 md:gap-[23rem]">
				{/* image */}
				<div className="w-24" >
					<img src={logo} alt="Logo Oliart"/>
				</div>

				{/* menu */}
				<div className="flex flex-col gap-7 text-center text-2xl font-light " >
					<div className=" flex flex-col gap-7 md:flex-row">
						<div className="uppercase" > Expositions </div>
						<div className="uppercase" > Evenements </div>
					</div>
					<div className="flex flex-col gap-7 md:flex-row">
						<div className="uppercase" > Nos artistes </div>
						<div className="uppercase" > Galeristes </div>
					</div>
				</div>
			</div>

			{/* copyright */}
			<div className="flex items-center justify-center" >
				<div className="" >© 2024 Oliart. All rights reserved</div>
			</div>
		</div>
	);
}

export default Footer;