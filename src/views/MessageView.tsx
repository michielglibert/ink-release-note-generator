import React, { useState } from "react";
import { Text, Box, useInput } from "ink";
import Input from "../components/Input";

interface Props {
	handleChange: (arg0: string) => void;
}

const MessageView: React.FC<Props> = ({ handleChange }) => {
	const [message, setMessage] = useState<string>("");

	useInput((_, key) => {
		if (key.return) handleChange(message);
	});

	return (
		<Box flexDirection="column">
			<Text color="green">Describe the change:</Text>
			<Input onChange={setMessage} />
		</Box>
	);
};

export default MessageView;
