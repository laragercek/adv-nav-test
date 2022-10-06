import {useCookies} from 'react-cookie';

export const useIsLoggedIn = () => {
    const [{loggedIn}, set, clear] = useCookies(['loggedIn']);

    return {
        isSignedIn: loggedIn,
        onLogIn: () => set('loggedIn',true),
        signOut: () => {
            clear('loggedIn');
        }
    }
}