import {BrowserRouter, Switch} from 'react-router-dom'
import Feed from '../pages/Feed'
import Login from '../pages/Login'
import Profile from '../pages/ProfilePage'
import Register from '../pages/Register'
import Route from './routes'


function Routes () {

  
        
    
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Login} />
                    <Route path="/register" exact component={Register} />
                    <Route path="/feed" component={Feed} isPrivate/>
                    <Route path="/profile" component={Profile} isPrivate/>
                </Switch>
            </BrowserRouter>
        )
}

export default Routes