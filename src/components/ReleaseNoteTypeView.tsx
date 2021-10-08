import React from "react";
import { Text, Box, useInput } from "ink";
import MenuOption from "./MenuOpton";
import { ReleaseNoteType } from "../types";

interface Props {
	handleChange: (arg0: ReleaseNoteType) => void;
}

const ReleaseNoteTypeView: React.FC<Props> = ({ handleChange }) => {
	const releaseTypeOptions: ReleaseNoteType[] = [
		"feature",
		"improvement",
		"fix",
		"improvement",
		"other",
	];
	const [activeOption, setActiveOption] = React.useState(0);

	const handleNextOption = () => {
		if (activeOption === releaseTypeOptions.length - 1) setActiveOption(0);
		else setActiveOption((activeOption) => activeOption + 1);
	};

	const handlePreviousOption = () => {
		if (activeOption === 0) setActiveOption(2);
		else setActiveOption((activeOption) => activeOption - 1);
	};

	useInput((_, key) => {
		if (key.downArrow) handleNextOption();
		if (key.upArrow) handlePreviousOption();
		if (key.return && releaseTypeOptions[activeOption])
			handleChange(
				(releaseTypeOptions[activeOption] as ReleaseNoteType).toLowerCase()
			);
	});

	return (
		<Box flexDirection="column">
			<Box>
				<Box borderStyle="single" marginX={2} marginY={1} paddingX={2}>
					<Text color="green">ADD A CHANGELOG</Text>
				</Box>
			</Box>
			<Text color="green">What type of releasenote do you want to add?</Text>
			{releaseTypeOptions.map((releaseType, index) => (
				<MenuOption
					key={`MenuOption_${releaseType}`}
					isActive={index === activeOption}
				>
					{releaseType}
				</MenuOption>
			))}
		</Box>
	);
};

export default ReleaseNoteTypeView;
