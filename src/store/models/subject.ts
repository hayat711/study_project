import { createModel } from '@rematch/core';
import { RootModel } from '.';
import { Subject } from '@/utils/types.dt';
import axios, { AxiosError } from 'axios';

export interface SubjectState {
    subjects: Subject[];
}

const initialState: SubjectState = {
    subjects: [],
};

export const subject = createModel<RootModel>()({
    name: 'subject',
    state: initialState,
    reducers: {
        loadSubjects: (state: SubjectState, payload: Subject[]) => {
            return {
                ...state,
                subjects: payload,
            };
        },
        addSubject: (state: SubjectState, payload: Subject) => {
            const { subjects } = state;
            const existingSubjectIndex = subjects.findIndex((subject) => subject.id === payload.id);
            if (existingSubjectIndex === -1) {
                return {
                    ...state,
                    subjects: [...subjects, payload],
                };
            } else {
                return state;
            }
        },

        updateSubject: (state: SubjectState, payload: Subject) => {
            const { subjects } = state;
            const existingSubjectIndex = subjects.findIndex((subject) => subject.id === payload.id);
            if (existingSubjectIndex !== -1) {
                subjects[existingSubjectIndex] = payload;
                return {
                    ...state,
                    subjects: [...subjects],
                };
            } else {
                return state;
            }
        },

        removeSubject: (state: SubjectState, payload: string) => {
            const { subjects } = state;
            const updatedSubjects = subjects.filter((subject) => subject.id !== payload);
            return {
                ...state,
                subjects: updatedSubjects,
            };
        },
    },
    effects: (dispatch) => ({
        async loadSubjectsAsync() {
            try {
                const res = await axios.get(`/subject`);
                dispatch.subject.loadSubjects(res.data.subjects);
            } catch (e) {
                if (e instanceof AxiosError) {
                    console.log(e.response?.data);
                }
                console.log('error loading subjects', e);
            }
        },
        async addSubjectAsync(subject: Subject, rootState) {
            try {
                const res = await axios.post(`/subject`, {
                    data: {
                        subject: subject,
                    },
                });

                dispatch.subject.addSubject(res.data.subject);
            } catch (e) {
                if (e instanceof AxiosError) {
                    console.log(e.response?.data);
                }
                console.log('error creating subject', e);
            }
        },
        async updateSubjectAsync(subject: Subject, rootState) {
            try {
                const res = await axios.put(`/subject/${subject.id}`, {
                    data: {
                        subject: subject,
                    },
                });

                dispatch.subject.updateSubject(res.data.subject);
            } catch (e) {
                if (e instanceof AxiosError) {
                    console.log(e.response?.data);
                }
                console.log('error updating subject', e);
            }
        },

        async deleteSubjectAsync(subject: Subject, rootState) {
            try {
                const res = await axios.delete(`/subject/${subject.id}`);

                dispatch.subject.removeSubject(res.data.subject.id);
            } catch (e) {
                if (e instanceof AxiosError) {
                    console.log(e.response?.data);
                }
                console.log('error deleting subject', e);
            }
        },
    }),
});
