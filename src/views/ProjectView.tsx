import React from "react";
import { Text, Box } from "ink";
import Menu from "../components/Menu";

interface Props {
	handleChange: (arg0: string) => void;
}

const ProjectView: React.FC<Props> = ({ handleChange }) => {
	const projectOptions: string[] = [
		"general",
		"proflow",
		"louise",
		"claims",
		"campaigns",
		"toolkit",
		"settings",
		"smt",
		"other",
	];

	return (
		<Box flexDirection="column">
			<Text color="green">What project is this releasenote for?</Text>
			<Menu
				menuOptions={projectOptions}
				handleChange={(val) => handleChange(val as string)}
			/>
		</Box>
	);
};

export default ProjectView;
