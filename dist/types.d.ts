export declare type ReleaseNoteType = "feature" | "improvement" | "fix" | "technical" | "other";
export declare type Project = "general" | "proflow" | "louise" | "claims" | "campaigns" | "toolkit" | "settings" | "smt" | string;
export interface ReleaseNote {
    type?: ReleaseNoteType;
    project?: Project;
    message?: string;
}
