import React, { useEffect, useState } from "react";
import { Text, useInput } from "ink";

interface Props {
	onChange: (arg0: string) => void;
	value?: string;
}

const Input: React.FC<Props> = ({ value: initialValue, onChange }) => {
	const [value, setValue] = useState<string>(initialValue || "");

	useEffect(() => {
		if (initialValue != null) setValue(initialValue);
	}, [initialValue]);

	useInput((input) => {
		const newValue = value + input;
		onChange(newValue);
		setValue(newValue);
	});

	return (
		<Text>
			{"> "}
			{value}
		</Text>
	);
};

export default Input;
