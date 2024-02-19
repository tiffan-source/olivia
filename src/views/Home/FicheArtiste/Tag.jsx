import React from "react";

function Tag({text}) {
	return (
		<div className="bg-gray-100 p-2 px-3.5 text-sm font-light uppercase" >
			{text}
		</div>
	);
}

export default Tag;