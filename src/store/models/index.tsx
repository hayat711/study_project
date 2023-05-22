import { Models } from "@rematch/core";
import { user } from "./user";
import { subject } from "./subject";
import { dashboard } from "./dashboard";
import { assignment } from "./assignment";

export interface RootModel extends Models<RootModel> {
    dashboard: typeof dashboard;
    user: typeof user;
    subject: typeof subject;
    assignment: typeof assignment
    

}

export const models: RootModel = {user, subject, dashboard, assignment}