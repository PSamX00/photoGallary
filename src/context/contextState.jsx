import React, { useState } from "react";
import ImageContext from "./imageContext";

const ImageState = ({ children }) => {
	const [clickId, setClickId] = useState(0);

	return (
		<ImageContext.Provider value={{ clickId, setClickId }}>
			{children}
		</ImageContext.Provider>
	);
};

export default ImageState;
