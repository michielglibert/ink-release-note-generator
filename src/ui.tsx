import React, { useState } from "react";
import { Text, Box, useInput } from "ink";
import { exit } from "process";
import { ReleaseNote, ReleaseNoteType } from "./types";
import ReleaseNoteTypeView from "./components/ReleaseNoteTypeView";

enum View {
	ReleaseNoteType,
	Project,
	Message,
}

const App = () => {
	const [releaseNote, setReleaseNote] = useState<ReleaseNote>({
		type: undefined,
		project: undefined,
		message: undefined,
	});

	const [currentView, setCurrentView] = useState<View>(0);

	useInput((input) => {
		if (input === "q") exit();
	});

	const handleReleaseNoteTypeChange = (value: ReleaseNoteType) => {
		setReleaseNote({ ...releaseNote, type: value });
		setCurrentView(View.Project);
	};

	return (
		<Box>
			{{
				[View.ReleaseNoteType]: (
					<ReleaseNoteTypeView handleChange={handleReleaseNoteTypeChange} />
				),
				[View.Project]: <Text>{releaseNote.type}</Text>,
				[View.Message]: <></>,
			}[currentView] || <Text>View not defined</Text>}
		</Box>
	);
};

export default App;
