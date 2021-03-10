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
    logout: () => void,
    updateUser: () => Promise<void>

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

    const updateUser = async () => {

        const token = userData.token;
        const username = userData.user.username
        const response = await api.get('/users?username=' + username, {headers: { Authorization: `Bearer ${token}` }})
        const user: Interfaces.User = response.data[0]
        localStorage.setItem('@Project:user', JSON.stringify(user))
        setUserData({token, user});
    }


    return (

        <AuthContext.Provider value={{userData, login, logout, updateUser}}>
            {children}
        </AuthContext.Provider>
       

   );}

export default AuthProvider;


