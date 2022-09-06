import React from "react";
import "./childCss/InputField.css";
export const InputField = ({ type, name, value, placeholder }) => {
	return (
		<>
			<input
				className='inputField'
				type={type}
				placeholder={placeholder}
				name={name}
			/>
		</>
	);
};
