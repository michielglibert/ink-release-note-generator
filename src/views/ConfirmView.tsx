import React from "react";
import { Text, Box } from "ink";
import YesNoMenu from "../components/YesNoMenu";

interface Props {
	releaseNote: string;
	handleChange: (arg0: boolean) => void;
}

const ConfirmView: React.FC<Props> = ({ releaseNote, handleChange }) => {
	return (
		<Box flexDirection="column">
			<Text color="green">Is this the releasenote you want to add?</Text>
			<Text color="blue">{releaseNote}</Text>
			<YesNoMenu handleChange={handleChange} />
		</Box>
	);
};

export default ConfirmView;
