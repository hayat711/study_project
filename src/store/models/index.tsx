import { Models } from "@rematch/core";
import { user } from "./user";
import { subject } from "./subject";

export interface RootModel extends Models<RootModel> {
    // dashboard: typeof dashboard;
    user: typeof user;
    subject: typeof subject;

}

export const models: RootModel = {user, subject}