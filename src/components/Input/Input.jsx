import React from "react";
import "./Input.css";
function Input({ type, name, handleInputChange, placeHolder, value }) {
	return (
		<input
			type={type}
			name={type}
			onChange={(event) => handleInputChange(event, name)}
			placeholder={placeHolder}
			value={value}
		/>
	);
}

export default Input;
