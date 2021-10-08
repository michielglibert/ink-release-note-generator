import React, { useState } from "react";
import { Box, useInput } from "ink";
import MenuOption from "./MenuOption";
import Input from "./Input";

interface Props {
	menuOptions: string[];
	handleChange: (arg0: unknown) => void;
	manualInputEnabled?: boolean;
	defaultOption?: string;
}

const Menu: React.FC<Props> = ({
	menuOptions: passedMenuOptions,
	handleChange,
	manualInputEnabled = true,
	defaultOption,
}) => {
	const menuOptions = [
		...passedMenuOptions,
		...(manualInputEnabled ? ["manual input"] : []),
	];

	const defaultOptionIndex = defaultOption
		? menuOptions.findIndex((option) => option === defaultOption)
		: -1;

	const [activeOption, setActiveOption] = React.useState(
		defaultOptionIndex > -1 ? defaultOptionIndex : 0
	);
	const [manualInputActive, setManualInputActive] = useState<boolean>(false);
	const [manualInputValue, setManualInputValue] = useState<string>("");

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
		if (key.return && menuOptions[activeOption]) {
			if (menuOptions[activeOption] === "manual input" && !manualInputActive) {
				setManualInputActive(true);
			} else if (manualInputActive) {
				handleChange(manualInputValue);
				setManualInputActive(false);
			} else {
				handleChange(menuOptions[activeOption]);
			}
		}
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
			{manualInputActive && (
				<Input onChange={(arg0: string) => setManualInputValue(arg0)} />
			)}
		</Box>
	);
};

export default Menu;
