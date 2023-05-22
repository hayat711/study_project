import { createModel } from "@rematch/core";
import { RootModel } from ".";
import { Assignment } from "@/utils/types.dt";
import axios, { AxiosError } from "axios";

export interface AssignmentState {
    assignments: Assignment[];
}

const initialState: AssignmentState = {
    assignments: [],
}

export const assignment = createModel<RootModel>()({
    name: 'assignment',
    state: initialState,
    reducers: {
        loadAssignments: (state: AssignmentState, payload: Assignment[]) => {
            return {
                ...state,
                assignments: payload
            };
        },

        addAssignment: (state: AssignmentState, payload: Assignment) => {
            const { assignments } = state;
            const existingAssignmentIndex = assignments.findIndex((assignment) => assignment.id === payload.id);
            if (existingAssignmentIndex === -1) {
                return {
                    ...state,
                    assignments: [...assignments, payload],
                }
            } else {
                return state;
            }
        },

        removeAssignment: (state: AssignmentState, payload: string) => {
            const { assignments } = state;
            const updatedAssignments = assignments.filter((assignment) => assignment.id !== payload);
            return {
                ...state,
                assignments: updatedAssignments,
            }
        },

        updateAssignment: (state: AssignmentState, payload: Assignment) => {
            const { assignments } = state;
            const existingAssignmentIndex = assignments.findIndex((assignment) => assignment.id === payload.id);
            if (existingAssignmentIndex !== -1) {
                assignments[existingAssignmentIndex] = payload;
                return {
                    ...state,
                    assignments: [...assignments],
                }
            } else {
                return state;
            }
        },

        updateAssignmentProgress: (state: AssignmentState, payload: { id: string, progress: number }) => {
            const { assignments } = state;
            const existingAssignmentIndex = assignments.findIndex((assignment) => assignment.id === payload.id);
            if (existingAssignmentIndex !== -1) {
                assignments[existingAssignmentIndex].progress = payload.progress;
                return {
                    ...state,
                    assignments: [...assignments],
                }
            } else {
                return state;
            }
        },

        deleteAssignment: (state: AssignmentState, payload: string) => {
            const { assignments } = state;
            const existingAssignmentIndex = assignments.findIndex((assignment) => assignment.id === payload);
            if (existingAssignmentIndex !== -1) {
                assignments.splice(existingAssignmentIndex, 1);
                return {
                    ...state,
                    assignments: [...assignments],
                }
            } else {
                return state;
            }
        },
    },
    effects: (dispatch) => ({
        async loadAssignmentsAsync() {
            try {
                const res = await axios.get(`/assignment`);
                dispatch.assignment.loadAssignments(res.data.assignments);
            } catch (e) {
                if (e instanceof AxiosError) {
                    console.log(e.response?.data);
                }
                console.log('error loading assignments', e)
            }
        },
        async addAssignmentAsync(assignment: Assignment, rootState) {
            try {
                const res = await axios.post(`/assignment`, assignment);
                dispatch.assignment.addAssignment(res.data.assignment);
            } catch (e) {
                if (e instanceof AxiosError) {
                    console.log(e.response?.data);
                }
                console.log('error adding assignment', e)
            }
        },
        async updateAssignmentAsync(assignment: Assignment, rootState) {
            try {
                const res = await axios.put(`/assignment/${assignment.id}`, assignment);
                dispatch.assignment.updateAssignment(res.data.assignment);
            } catch (e) {
                if (e instanceof AxiosError) {
                    console.log(e.response?.data);
                }
                console.log('error updating assignment', e)
            }
        },
        async updateAssignmentProgressAsync(payload: { id: string, progress: number }, rootState) {
            try {
                const res = await axios.put(`/assignment/${payload.id}/progress`, payload);
                dispatch.assignment.updateAssignmentProgress(res.data.assignment);
            } catch (e) {
                if (e instanceof AxiosError) {
                    console.log(e.response?.data);
                }
                console.log('error updating assignment progress', e)
            }
        },

        async deleteAssignmentAsync(id: string, rootState) {
            try {
                const res = await axios.delete(`/assignment/${id}`);
                dispatch.assignment.deleteAssignment(id);
            } catch (e) {
                if (e instanceof AxiosError) {
                    console.log(e.response?.data);
                }
                console.log('error deleting assignment', e)
            }
        },

    }),
})