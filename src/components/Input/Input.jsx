import React from "react";
import "./Input.css";
function Input({ type, name, handleInputChange, placeHolder }) {
	return (
		<input
			type={type}
			name={type}
			onChange={(event) => handleInputChange(event)}
			placeholder={placeHolder}
		/>
	);
}

export default Input;
