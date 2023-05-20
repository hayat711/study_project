import { createModel } from '@rematch/core';
import { RootModel } from '.';
import { User } from '@/utils/types.dt';
import axios, { AxiosError } from 'axios';

export interface UserState {
    user: User | null;
    authenticated: boolean;
}

const initialState: UserState = {
    user: null,
    authenticated: false,
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

        async register({ email, username, password }) {
            try {
                const { data } = await axios.post('/api/register', {
                    email,
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
