import { createContext, useState} from "react";
import * as Interfaces from '../interfaces/index'
import api from "../services/api";

interface AuthState {
    user: Interfaces.User,
    token: string
}

interface Credentials {
    email: string,
    password: string
}

export const AuthContext = createContext({} as {
    userData: {
        token: string,
        user: Interfaces.User
    }
    login: ({ email, password }: Credentials) => Promise<1 | 0>,
    logout: () => void
})

const AuthProvider: React.FC = ({children}) => {

    const [userData, setUserData] = useState<AuthState>(() => {

        const token = localStorage.getItem('@Project:token');
        const user = localStorage.getItem('@Project:user');

        if (user && token) {
            return {token, user: JSON.parse(user)}
        }

        return {} as AuthState
    })

    const login = async ({email,password}: Credentials) => {
        
        try {
            const response = await api.post('/sessions/login', {
            email,
            password
            })
            
            const {user, token} = response.data;
            localStorage.setItem('@Project:token', token);
            localStorage.setItem('@Project:user', JSON.stringify(user));

            setUserData({user, token})

            return 1
            }
        catch{
            return 0
        }}

    const logout = () => {
        localStorage.removeItem('@Project:token');
        localStorage.removeItem('@Project:user');

        setUserData({} as AuthState)
    }

    return (

        <AuthContext.Provider value={{userData, login, logout}}>
            {children}
        </AuthContext.Provider>
       

   );}

export default AuthProvider;


