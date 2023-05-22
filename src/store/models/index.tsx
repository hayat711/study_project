import { Models } from "@rematch/core";
import { user } from "./user";
import { subject } from "./subject";
import { dashboard } from "./dashboard";

export interface RootModel extends Models<RootModel> {
    dashboard: typeof dashboard;
    user: typeof user;
    subject: typeof subject;
    

}

export const models: RootModel = {user, subject, dashboard}