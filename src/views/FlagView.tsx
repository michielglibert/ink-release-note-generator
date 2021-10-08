import React from "react";
import { Text, Box } from "ink";
import YesNoMenu from "../components/YesNoMenu";

interface Props {
	handleChange: (arg0: boolean) => void;
}

const FlagView: React.FC<Props> = ({ handleChange }) => {
	return (
		<Box flexDirection="column">
			<Text color="green">
				Is this releasenote behind a feature flag or not yet available to
				sales/customers?
			</Text>
			<YesNoMenu defaultOption={false} handleChange={handleChange} />
		</Box>
	);
};

export default FlagView;
