import React from "react";
import { Box, useInput } from "ink";
import MenuOption from "./MenuOption";

interface Props {
	menuOptions: string[];
	handleChange: (arg0: unknown) => void;
}

const Menu: React.FC<Props> = ({ menuOptions, handleChange }) => {
	const [activeOption, setActiveOption] = React.useState(0);

	const handleNextOption = () => {
		if (activeOption === menuOptions.length - 1) setActiveOption(0);
		else setActiveOption((activeOption) => activeOption + 1);
	};

	const handlePreviousOption = () => {
		if (activeOption === 0) setActiveOption(menuOptions.length - 1);
		else setActiveOption((activeOption) => activeOption - 1);
	};

	useInput((_, key) => {
		if (key.downArrow) handleNextOption();
		if (key.upArrow) handlePreviousOption();
		if (key.return && menuOptions[activeOption])
			handleChange(menuOptions[activeOption]);
	});

	return (
		<Box flexDirection="column">
			{menuOptions.map((releaseType, index) => (
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

export default Menu;
