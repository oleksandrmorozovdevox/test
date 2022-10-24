import { Status } from "../enums/status.enum";
import { Submission } from "../models/submission.model";

export class TestData {
    public static readonly SubmissionItems: Array<Submission> = [
        {
            title: 'Work Flow: Requires Location',
            status: Status.Uncomplete,
            from: 'denisgordiyenya@gmail.com',
            to: 'denisgordiyenya@gmail.com',
            dueDate: '06 December'
        },
        {
            title: 'Work Flow: Requires Location',
            status: Status.LowRisk,
            from: 'denisgordiyenya@gmail.com',
            to: 'denisgordiyenya@gmail.com',
            dueDate: '06 December'
        },
        {
            title: 'Work Flow: Requires Location',
            status: Status.Uncomplete,
            from: 'denisgordiyenya@gmail.com',
            to: 'denisgordiyenya@gmail.com',
            dueDate: '06 December'
        },
        {
            title: 'Work Flow: Requires Location',
            status: Status.NeedsReview,
            from: 'denisgordiyenya@gmail.com',
            to: 'denisgordiyenya@gmail.com',
            dueDate: '06 December'
        }
    ]
} 