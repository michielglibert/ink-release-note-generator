import React from "react";
import { Text, Box } from "ink";
import Menu from "../components/Menu";

interface Props {
	handleChange: (arg0: string) => void;
}

const ReleaseNoteTypeView: React.FC<Props> = ({ handleChange }) => {
	const releaseTypeOptions: string[] = [
		"feature",
		"improvement",
		"fix",
		"technical",
		"updated tests",
		"other",
	];

	return (
		<Box flexDirection="column">
			<Text color="green">What type of releasenote do you want to add?</Text>
			<Menu
				menuOptions={releaseTypeOptions}
				handleChange={(val) => handleChange(val as string)}
			/>
		</Box>
	);
};

export default ReleaseNoteTypeView;
