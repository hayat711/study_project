'use client';
import { store } from '@/store/store';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'next-themes';

import { PersistGate } from 'redux-persist/lib/integration/react';
import { getPersistor } from '@rematch/persist';
import axios from 'axios';
import { SWRConfig } from 'swr';

const persistor = getPersistor();

axios.defaults.baseURL = 'http://localhost:8080/api';
axios.defaults.withCredentials = true;

const fetcher = async (url: string) => {
    try {
        const res = await axios.get(url);
        return res.data;
    } catch (err: any) {
        throw err.response.data;
    }
};

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider>
            <SWRConfig
                value={{
                    fetcher,
                    dedupingInterval: 5000,
                }}
            >
                <Provider store={store}>
                    <PersistGate persistor={persistor}>{children}</PersistGate>
                </Provider>
            </SWRConfig>
        </ThemeProvider>
    );
}
