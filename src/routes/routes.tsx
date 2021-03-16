import React from 'react';
import {Route as ReactRouter, RouteProps as ReactRoutetProps, Redirect} from 'react-router-dom';

import useAuth from '../hooks/useAuth';

interface RouteProps extends ReactRoutetProps {
    isPrivate?: boolean;
    component: React.ComponentType;
}


const Route: React.FC<RouteProps> = ({isPrivate = false, component: Component, ...rest}) => {

    const {userData} = useAuth();
    const {user} = userData;

  
    
        return (
            
            <ReactRouter 

                {...rest}

                render={({location}) => {

                    return isPrivate === !!user
                    ? (
                        <Component />
                    ) : (
                        <Redirect to={{
                            pathname: isPrivate ? '/' : '/feed',
                            state: {from: location}
                        }}/>
                    );


                }}/>

        );

};

export default Route