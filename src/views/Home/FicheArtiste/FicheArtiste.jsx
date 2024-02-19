import React from "react";
import artiste from "../../../assets/images/artist_fake.png";
import Tag from "./Tag";

function FicheArtiste() {
	return (
		<div className="mx-6">
			{/* This is a component describing an artist  */}
			{/* image */}
			<div className="flex justify-center" >
				<img src={artiste} alt="Artiste" className="w-48 h-48 rounded-full" />
			</div>

			{/* artiste name */}
			<div className="text-center text-3xl font-light my-5" >
				John Doe
			</div>

			{/* tags */}
			<div className="flex flex-row flex-wrap gap-x-4 gap-y-4 items-center justify-center mb-11 ml-1" >
				<Tag text={"Art plastique"} />
				<Tag text={"Dessin artistique"} />
				<Tag text={"Art urbain"} />
				<Tag text={"Art antique"} />
			</div>

			{/* description */}
			<div className="text-center text-lg font-light my-5" >
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam mollitia, veritatis blanditiis, sunt nemo officia doloribus at dolore repellendus corporis, tempore cum nostrum exercitationem voluptatibus. Nostrum magnam at aliquam nemo.
				Labore voluptatum natus voluptates ipsum beatae obcaecati, repudiandae explicabo sint totam incidunt nulla ea alias fugit assumenda quae veniam magnam nesciunt, eligendi ducimus? Suscipit excepturi voluptatem perspiciatis veniam iste magnam.
				Laboriosam itaque exercitationem autem deserunt architecto qui non doloribus enim. Reprehenderit doloremque quia, dignissimos atque sed perferendis vero aperiam magnam rem veritatis perspiciatis ab harum ex ad nesciunt eos consequuntur.
				Et, doloremque in! Unde, sunt! Sunt a necessitatibus illum quibusdam quae dolore unde sint assumenda architecto, officia praesentium eveniet impedit ullam laudantium. Blanditiis aut ducimus accusantium amet asperiores quaerat vitae.
				Voluptatibus perspiciatis aliquam fugit deserunt quia esse accusantium. Consequuntur, sunt ratione nihil officia magnam necessitatibus exercitationem! Blanditiis natus amet facilis, expedita neque dicta quibusdam officia, odit sed aperiam cumque pariatur.
				<br />
				Impedit suscipit, odit, temporibus vitae quod magnam magni incidunt distinctio itaque pariatur praesentium facilis libero autem soluta! Enim, numquam nobis modi voluptatum deserunt deleniti neque laboriosam quae corrupti placeat ex!
				Maiores tempore dolore rem aperiam ducimus nemo in, quibusdam pariatur vitae consequatur assumenda atque mollitia alias quidem ex ut repellat eaque aliquam incidunt id quae temporibus illo possimus molestiae? Vitae?
				Odio beatae commodi fuga dolore praesentium quibusdam quam aperiam, eum itaque blanditiis doloribus laudantium enim. Dignissimos, blanditiis iusto.
			</div>
		</div>
	);
}

export default FicheArtiste;