import React from "react";
import { daysWeeks } from "../constants/Links";
import "../css/Body.css";

import { GallaryDiv } from "./bodyComponents/GallaryDiv";
export const Body = () => {
	return (
		<>
			<div className='gallaryBody'>
				{daysWeeks.map((items) => {
					return (
						<GallaryDiv
							title={items.title}
							date={items.date}
							day={items.day}
						/>
					);
				})}
			</div>
		</>
	);
};
