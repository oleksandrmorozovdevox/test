import { Status } from "../enums/status.enum";

export interface Submission {
    title: string;
    status: Status;
    from: string;
    to: string;
    dueDate: string;
}