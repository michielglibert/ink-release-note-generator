export type ReleaseNoteType =
	| "feature"
	| "improvement"
	| "fix"
	| "technical"
	| "other";

export type Project =
	| "general"
	| "proflow"
	| "louise"
	| "claims"
	| "campaigns"
	| "toolkit"
	| "settings"
	| "smt"
	| string;

export interface ReleaseNote {
	type?: ReleaseNoteType;
	project?: Project;
	message?: string;
}
