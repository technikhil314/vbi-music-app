import { useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
const withAuthenticationRequired = (
    Component,
    options
) => {
    return function WithAuthenticationRequired(props) {
        const { isAuthenticated, isLoading, loginWithPopup } = useAuth0();
        const {
            returnTo = "/",
            onRedirecting,
            loginOptions = {},
        } = options;

        useEffect(() => {
            if (isLoading || isAuthenticated) {
                return;
            }
            const opts = {
                ...loginOptions,
                appState: {
                    ...loginOptions.appState,
                    returnTo: typeof returnTo === 'function' ? returnTo() : returnTo,
                },
            };
            (async () => {
                await loginWithPopup(opts);
            })();
        }, [isLoading, isAuthenticated, loginWithPopup, loginOptions, returnTo]);

        return isAuthenticated ? <Component {...props} /> : onRedirecting();
    };
}

export default withAuthenticationRequired;