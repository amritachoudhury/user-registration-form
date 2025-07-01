import { createContext } from "react";

export const UserContext = createContext({
    loggedInUser: 'Default user',
})

export default UserContext;