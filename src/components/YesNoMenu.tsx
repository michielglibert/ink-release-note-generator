import React from "react";
import Menu from "./Menu";

interface Props {
	handleChange: (arg0: boolean) => void;
	defaultOption?: boolean;
}

const YesNoMenu: React.FC<Props> = ({ handleChange, defaultOption = true }) => {
	return (
		<Menu
			defaultOption={defaultOption ? "Yes" : "No"}
			manualInputEnabled={false}
			menuOptions={["Yes", "No"]}
			handleChange={(arg0: unknown) => handleChange((arg0 as string) === "Yes")}
		/>
	);
};

export default YesNoMenu;
