export enum Status {
    PENDING = 'PENDING',
    COMPLETED = 'COMPLETED',
    IN_PROGRESS = 'IN_PROGRESS',
    OVERDUE = 'OVERDUE',
    NOT_STARTED = 'NOT_STARTED'
}

export interface User {
    id: string;
    name: string;
    email: string;
    username: string;
    password: string;
    avatar: string;
    createdAt: Date;
    updatedAt: Date;
    subjects: Subject[];
    assignments: Assignment[];

}


export interface Subject {
    id: string;
    title: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    resource: any;
    owner?: User;
    assignments?: Assignment[];
    
}

export interface Assignment {
    id: string;
    title: string;
    description: string;
    deadline: any;
    createdAt?: Date;
    updatedAt?: Date;
    resource?: any;
    progress?: number;
    status?: string;
    owner?: User;
    subject?: Subject;

}