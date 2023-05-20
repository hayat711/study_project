import { createModel } from "@rematch/core";
import { RootModel } from ".";
import { Subject } from "@/utils/types.dt";

export interface SubjectState {
    subject : Subject | null;
}

const initialState = {
    subject: null,
}


export const subject = createModel<RootModel>()({
    name: 'subject',
    state: {},
    reducers: {},
    effects: (dispatch) => ({

    }),
})