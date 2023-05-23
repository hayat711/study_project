import { createModel } from "@rematch/core";
import { RootModel } from ".";

export interface DashboardState {
    isUserLoggedIn?: boolean;
    isUserPageOpen: boolean;
    isUserPageLoading?: boolean;
    activeMenu: string;

} 

export const initialState: DashboardState = {
    isUserLoggedIn: false,
    isUserPageOpen: false,
    isUserPageLoading: false,
    activeMenu: 'Dashboard',

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
        setActiveMenu(state, payload: string) {
            return {
                ...state,
                activeMenu: payload,
            }
        }
        
    },
    effects: (dispatch) => ({}),
})