

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
    createdAt: Date;
    updatedAt: Date;
    resource: any;
    owner?: User;
    assignments?: Assignment[];
    
}

export interface Assignment {
    id: string | number;
    deadline: any;
    title: string;
    createdAt?: Date;
    updatedAt?: Date;
    resource?: any;
    progress?: number;
    status?: string;
    owner?: User;
    subject?: Subject;

}