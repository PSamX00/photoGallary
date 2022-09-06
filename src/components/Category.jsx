import React, { useContext } from "react";
import { categories } from "../constants/Links";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import "../css/Category.css";
import ImageContext from "../context/imageContext";

export const Category = () => {
	const { clickId, setClickId } = useContext(ImageContext);

	console.log(clickId);
	return (
		<>
			<div className='categoryDivision'>
				<div className='categoryName'>
					{categories.map((items, index) => {
						return (
							<span
								className={
									index === clickId
										? "selectedSpan"
										: ""
								}
								onClick={() => {
									setClickId(index);
								}}
							>
								{items.name}
							</span>
						);
					})}
				</div>
				<div className='buttonNew'>
					<button className='addNewCategory'>
						+ <span>New Category</span>
					</button>
				</div>
			</div>
		</>
	);
};
