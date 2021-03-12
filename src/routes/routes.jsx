import {BrowserRouter, Route} from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import Feed from '../pages/Feed'
import Login from '../pages/Login'
import Profile from '../pages/ProfilePage'
import Register from '../pages/Register'


function Routes () {

    const {userData} = useAuth();

    if (userData.user) {
        
    
        return (
            <BrowserRouter>
                <Route path="/" exact component={Login} />
                <Route path="/feed" component={Feed}/>
                <Route path="/profile" component={Profile}/>
            </BrowserRouter>
        )}

    else {
        
        return (

        <BrowserRouter>
             <Route path="/" exact component={Login} />
             <Route path="/Register" exact component={Register} />
        </BrowserRouter>)

    }
}

export default Routes