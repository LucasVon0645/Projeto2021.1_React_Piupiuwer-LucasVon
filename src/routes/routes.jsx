import {BrowserRouter, Route} from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import Feed from '../pages/Feed'
import Login from '../pages/Login'
import Profile from '../pages/ProfilePage'


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
        console.log("oi");
        
        return (<BrowserRouter>
             <Route path="/" exact component={Login} />
        </BrowserRouter>)

    }
}

export default Routes