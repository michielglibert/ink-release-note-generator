import React from "react";
import { Text, Box, useInput } from "ink";
import { exit } from "process";

interface MenuOptionProps {
	isActive: boolean;
}

const MenuOption: React.FC<MenuOptionProps> = ({ isActive, children }) => {
	return (
		<Box>
			<Text color="yellow">{isActive && "> "}</Text>
			<Text color="red">{children}</Text>
		</Box>
	);
};

const App = () => {
	const releaseTypeOptions = ["Feature", "Improvement", "Fix"];
	const [activeOption, setActiveOption] = React.useState(0);

	const handleNextOption = () => {
		if (activeOption === releaseTypeOptions.length - 1) setActiveOption(0);
		else setActiveOption((activeOption) => activeOption + 1);
	};

	const handlePreviousOption = () => {
		if (activeOption === 0) setActiveOption(2);
		else setActiveOption((activeOption) => activeOption - 1);
	};

	useInput((input, key) => {
		if (input === "q") exit();

		if (key.downArrow) handleNextOption();
		if (key.upArrow) handlePreviousOption();
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

const chooseReleaseNote = () => {
	const releaseTypeOptions = ["Feature", "Improvement", "Fix"];
	const [activeOption, setActiveOption] = React.useState(0);

	const handleNextOption = () => {
		if (activeOption === releaseTypeOptions.length - 1) setActiveOption(0);
		else setActiveOption((activeOption) => activeOption + 1);
	};

	const handlePreviousOption = () => {
		if (activeOption === 0) setActiveOption(2);
		else setActiveOption((activeOption) => activeOption - 1);
	};

	useInput((input, key) => {
		if (input === "q") exit();

		if (key.downArrow) handleNextOption();
		if (key.upArrow) handlePreviousOption();
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

module.exports = App;
