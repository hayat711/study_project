import { createModel } from "@rematch/core";
import { RootModel } from ".";
import { Subject } from "@/utils/types.dt";
import axios, { AxiosError } from "axios";

export interface SubjectState {
    subjects : Subject[] ;
}

const initialState: SubjectState = {
    subjects: [],
}


export const subject = createModel<RootModel>()({
    name: 'subject',
    state: initialState,
    reducers: {
        loadSubjects:(state: SubjectState, payload: Subject[]) => {
            return {
                ...state,
                subjects: payload
            };
        },
        addSubject: (state: SubjectState, payload: Subject) => {
            const { subjects } = state;
            const existingSubjectIndex = subjects.findIndex((subject) => subject.id === payload.id);
            if (existingSubjectIndex === -1) {
                return {
                    ...state,
                    subjects: [...subjects, payload],
                }
            } else {
                return  state;
            }
        },

        removeSubject: (state: SubjectState, payload: string) => {
            const { subjects } = state;
            const updatedSubjects = subjects.filter((subject) => subject.id !== payload);
            return {
                ...state,
                subjects: updatedSubjects,
            }
        }
    },
    effects: (dispatch) => ({
        async addSubjectAsync( subject: Subject, rootState) {
            try {
                const res = await axios.post(`/subject`, {
                    data: {
                        subject: subject
                    }
                });

                dispatch.subject.addSubject(res.data.subject);
            } catch(e) {
                if (e instanceof AxiosError) {
                    console.log(e.response?.data);
                }
                console.log('error creating subject',e)
            }
        }
    }),
})