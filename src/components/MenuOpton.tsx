import React from "react";
import { Text, Box } from "ink";

interface Props {
	isActive: boolean;
}

const MenuOption: React.FC<Props> = ({ isActive, children }) => {
	return (
		<Box>
			<Text color="yellow">{isActive && "> "}</Text>
			<Text color="red">{children}</Text>
		</Box>
	);
};

export default MenuOption;
