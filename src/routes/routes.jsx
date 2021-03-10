import {BrowserRouter, Route} from 'react-router-dom'
import Feed from '../pages/Feed'
import Login from '../pages/Login'
import Profile from '../pages/ProfilePage'


function Routes () {
    return (

        <BrowserRouter>
            <Route path="/" exact component={Login} />
            <Route path="/feed" component={Feed}/>
            <Route path="/profile" component={Profile}/>
        </BrowserRouter>

    )
}

export default Routes