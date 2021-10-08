import React, { useState } from "react";
import { Text, Box, useInput } from "ink";
import { exit } from "process";
import { v4 as uuidv4 } from "uuid";
import { format } from "date-fns";
import { capitalize } from "lodash";
import { writeFileSync, existsSync, mkdirSync } from "fs";

// Components
import Header from "./components/Header";

// Views
import ReleaseNoteTypeView from "./views/ReleaseNoteTypeView";
import ProjectView from "./views/ProjectView";
import MessageView from "./views/MessageView";
import FlagView from "./views/FlagView";
import ConfirmView from "./views/ConfirmView";

// Types
import { ReleaseNote } from "./types";

enum View {
	ReleaseNoteType,
	Project,
	Message,
	Flag,
	Confirm,
}

const App = ({ root = "." }) => {
	const [releaseNote, setReleaseNote] = useState<ReleaseNote>({
		type: undefined,
		project: undefined,
		message: undefined,
	});

	const releaseNoteText = `[${releaseNote.type?.toUpperCase()}] ${capitalize(
		releaseNote.project
	)}: ${releaseNote.message}`;

	const [currentView, setCurrentView] = useState<View>(0);
	const [isAdded, setIsAdded] = useState<boolean>();
	const [changelogFilename, setChangelogFilename] = useState<string>();

	useInput((input) => {
		if (input === "q") exit();
	});

	const handleReleaseNoteTypeChange = (value: string) => {
		setReleaseNote({ ...releaseNote, type: value });
		setCurrentView(View.Project);
	};

	const handleProjectChange = (value: string) => {
		setReleaseNote({ ...releaseNote, project: value });
		setCurrentView(View.Message);
	};

	const handleMessageChange = (value: string) => {
		setReleaseNote({ ...releaseNote, message: value });
		setCurrentView(View.Flag);
	};

	const handleFlagChange = (value: boolean) => {
		setReleaseNote({ ...releaseNote, flag: value });
		setCurrentView(View.Confirm);
	};

	const handleConfirmChange = (value: boolean) => {
		if (value) {
			const filename = `${format(new Date(), "dd-MM-yyyy")}_${uuidv4()}`;
			const dir = `${root}/.changelog`;
			setChangelogFilename(filename);

			if (!existsSync(dir)) {
				mkdirSync(dir);
			}
			writeFileSync(
				`${dir}/${filename}.json`,
				JSON.stringify(releaseNote),
				"ascii"
			);

			setIsAdded(true);
			exit();
		} else {
			setCurrentView(View.ReleaseNoteType);
		}
	};

	return (
		<Box flexDirection="column">
			<Header />
			{{
				[View.ReleaseNoteType]: (
					<ReleaseNoteTypeView handleChange={handleReleaseNoteTypeChange} />
				),
				[View.Project]: <ProjectView handleChange={handleProjectChange} />,
				[View.Message]: <MessageView handleChange={handleMessageChange} />,
				[View.Flag]: <FlagView handleChange={handleFlagChange} />,
				[View.Confirm]: (
					<ConfirmView
						releaseNote={releaseNoteText}
						handleChange={handleConfirmChange}
					/>
				),
			}[currentView] || <Text>View not defined</Text>}
			{isAdded != null &&
				(isAdded ? (
					<Box>
						<Text color="green">Releasenote was saved to </Text>
						<Text color="yellow">.changelog/{changelogFilename}.json</Text>
					</Box>
				) : (
					<Text color="red">Something went wrong when saving the file</Text>
				))}
		</Box>
	);
};

export default App;
