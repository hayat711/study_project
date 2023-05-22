import { createModel } from "@rematch/core";
import { RootModel } from ".";

export interface DashboardState {
    isUserLoggedIn?: boolean;
    isUserPageOpen?: boolean;
    isUserPageLoading?: boolean;

} 

export const initialState: DashboardState = {
    isUserLoggedIn: false,
    isUserPageOpen: false,
    isUserPageLoading: false,

}


export const dashboard = createModel<RootModel>()({
    name: 'dashboard',
    state: initialState,
    reducers: {
        setIsUserPageOpen(state, payload: boolean) {
            return {
                ...state,
                isUserPageOpen: payload,
            }
        },
        setIsUserPageLoading(state, payload: boolean) {
            return {
                ...state,
                isUserPageLoading: payload,
            }
        },
        setIsUserLoggedIn(state, payload: boolean) {
            return {
                ...state,
                isUserLoggedIn: payload,
            }
        },
        
    },
    effects: (dispatch) => ({}),
})