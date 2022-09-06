import React, { useContext, useState } from "react";
import "./bodyCss/GallaryDiv.css";
import { categories } from "../../constants/Links";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ImageContext from "../../context/imageContext";
export const GallaryDiv = ({ title, date, day }) => {
	const { clickId, setClickId } = useContext(ImageContext);

	return (
		<>
			<div className='DaysDiv'>
				<div className='infoDiv'>
					<p className='dayDiv'>{title}</p>
					<p className='dateDiv'>
						{day} {date}
					</p>
				</div>

				{title === "Today" ? (
					<div className='gallaryDiv'>
						{categories[clickId].image1.map(
							(items, index) => {
								return (
									<img
										key={index}
										src={items}
										className='gallaryImage'
										alt={index}
									/>
								);
							}
						)}
					</div>
				) : (
					<div className='gallaryDiv'>
						{categories[clickId].image2.map(
							(items, index) => {
								return (
									<img
										src={items}
										className='gallaryImage'
										alt={index}
									/>
								);
							}
						)}
					</div>
				)}
			</div>
		</>
	);
};
