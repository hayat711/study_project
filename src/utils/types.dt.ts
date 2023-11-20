export enum Status {
    PENDING = 'pending',
    COMPLETED = 'completed',
    IN_PROGRESS = 'in_progress',
    NOT_STARTED = 'not_started',
}

export interface User {
    id: string;
    username: string;

    subjects: Subject[];
    assignments: Assignment[];
}

export interface Subject {
    id: string;
    title: string;
    studyMethod?: string;
    createdAt: Date;
    updatedAt: Date;
    resource: any;
    owner?: User;
    assignments?: Assignment[];
    description?: string;
}

export interface Assignment {
    id: string;
    title: string;
    deadline: string;
    progress?: number;
    status?: string;
    owner?: User;
    subject?: Subject;
}
