import React from "react";
import { Text, Box } from "ink";
import { ReleaseNoteType } from "../types";
import Menu from "./Menu";

interface Props {
	handleChange: (arg0: ReleaseNoteType) => void;
}

const ReleaseNoteTypeView: React.FC<Props> = ({ handleChange }) => {
	const releaseTypeOptions: ReleaseNoteType[] = [
		"feature",
		"improvement",
		"fix",
		"technical",
		"other",
	];

	return (
		<Box flexDirection="column">
			<Box>
				<Box borderStyle="single" marginX={2} marginY={1} paddingX={2}>
					<Text color="green">ADD A CHANGELOG</Text>
				</Box>
			</Box>
			<Text color="green">What type of releasenote do you want to add?</Text>
			<Menu
				menuOptions={releaseTypeOptions}
				handleChange={(val) => handleChange(val as ReleaseNoteType)}
			/>
		</Box>
	);
};

export default ReleaseNoteTypeView;
