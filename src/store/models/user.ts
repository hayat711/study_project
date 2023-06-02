import { createModel } from '@rematch/core';
import { RootModel } from '.';
import { User } from '@/utils/types.dt';
import axios, { AxiosError } from 'axios';

export interface UserState {
    user: User | null;
    authenticated: boolean;
    attendance: number;
}

const initialState: UserState = {
    user: null,
    authenticated: false,
    attendance: 0,
};

export const user = createModel<RootModel>()({
    name: 'user',
    state: initialState,
    reducers: {
        setUser: (state: UserState, payload: User) => {
            return {
                ...state,
                authenticated: true,
                user: payload,
            };
        },
        logout: (state: UserState) => {
            return {
                ...state,
                authenticated: false,
                user: null,
            };
        },
    },
    effects: (dispatch) => ({
        async login({ username, password }) {
            try {
                const { data } = await axios.post('/api/login', {
                    username,
                    password,
                });
                dispatch.user.setUser(data.user);
                return data;
            } catch (error) {
                console.error(error);
                let axiosError: AxiosError;
                if (error instanceof AxiosError) {
                    axiosError = error.response?.data;
                    return axiosError;
                }
                return error;
            }
        },

        async getTotalMembers() {
            try {
                const { data } = await axios.get('/member-count');
                return data;
            } catch (error) {
                console.error(error);
                let axiosError: AxiosError;
                if (error instanceof AxiosError) {
                    axiosError = error.response?.data;
                    return axiosError;
                }
                return error;
            }
        },

        async getAttendance() {
            try {
                const { data } = await axios.get('/attendance-count');
                return data;
            } catch (error) {
                console.error(error);
                let axiosError: AxiosError;
                if (error instanceof AxiosError) {
                    axiosError = error.response?.data;
                    return axiosError;
                }
                return error;
            }
        },

        async register({ username }) {
            try {
                const { data } = await axios.post('/member-create', {
                    username,
                });
                dispatch.user.setUser(data.user);
                return data;
            } catch (error) {
                console.error(error);
                let axiosError: AxiosError;
                if (error instanceof AxiosError) {
                    axiosError = error.response?.data;
                    return axiosError;
                }
                return error;
            }
        },

        async logout() {
            try {
                await axios.delete('/api/logout');
                dispatch.user.logout();
            } catch (error) {
                console.error(error);
                let axiosError: AxiosError;
                if (error instanceof AxiosError) {
                    axiosError = error.response?.data;
                    return axiosError;
                }
                return error;
                dispatch.user.logout();
            }
        },
    }),
});
