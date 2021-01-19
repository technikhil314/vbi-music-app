import { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

export const useApi = (url, fetchOptions = {}) => {
    const { isAuthenticated, getAccessTokenSilently } = useAuth0();
    const [state, setState] = useState({
        error: null,
        loading: true,
        data: null,
    });
    const [refreshIndex, setRefreshIndex] = useState(0);
    useEffect(() => {
        isAuthenticated && (async () => {
            try {
                const accessToken = await getAccessTokenSilently({
                    audience: process.env.REACT_APP_AUTH0_AUD_URL,
                    scope: "read:current_user update:current_user_metadata"
                });
                const res = await fetch(url, {
                    ...fetchOptions,
                    headers: {
                        ...fetchOptions.headers,
                        Authorization: `Bearer ${accessToken}`,
                    },
                });
                setState({
                    ...state,
                    data: await res.json(),
                    error: null,
                    loading: false,
                });
            } catch (error) {
                setState({
                    ...state,
                    error,
                    loading: false,
                });
            }
        })();
    }, [refreshIndex, isAuthenticated]);

    return {
        ...state,
        refresh: () => setRefreshIndex(refreshIndex + 1),
    };
};