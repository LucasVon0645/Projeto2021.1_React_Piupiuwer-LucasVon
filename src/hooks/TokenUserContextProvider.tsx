import { createContext, Dispatch, SetStateAction, useState} from "react";
import * as Interfaces from '../interfaces/index'

export const TokenUserContext = createContext({} as {
    user: Interfaces.User,
    setUser: Dispatch<SetStateAction<Interfaces.User>>,
    token: string,
    setToken: Dispatch<SetStateAction<string>>
})

const TokenUserProvider: React.FC = ({children}) => {


    const [user, setUser] = useState({} as Interfaces.User);
    const [token, setToken] = useState("")

    return (

        <TokenUserContext.Provider value={{user, setUser, token, setToken}}>
            {children}
        </TokenUserContext.Provider>
       

   );}

export default TokenUserProvider;


