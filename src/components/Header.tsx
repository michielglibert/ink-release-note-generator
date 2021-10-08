import React from "react";
import { Text, Box } from "ink";

const Header: React.FC = () => {
	return (
		<Box>
			<Box borderStyle="single" marginX={2} marginY={1} paddingX={2}>
				<Text color="green">ADD A CHANGELOG</Text>
			</Box>
		</Box>
	);
};

export default Header;
