import React from 'react';
import { BrowserRouter,Switch, Route } from 'react-router-dom';

import HomePage from '../Pages/home'
import LoginPage from '../Pages/login';
import PublishResource from '../Pages/publishResource'
import SignInPage from '../Pages/signIn'
import ProfilePage from '../Pages/profile'
import ResourcePage from '../Pages/resource'
import CommentPage from '../Pages/comment'
import ModifyResource from '../Pages/modifyResource'
import HelpPage from '../Pages/helpHostYourRea'

import {PrivateRoute} from './privateRoutes'

import UserContextProvider from '../AuthContext/ContextProvider'

function Routes(){
    return(
        <BrowserRouter>
            <UserContextProvider>
                <Switch>
                    <Route path='/' exact component={HomePage}/>
                    <Route path='/login' exact component={LoginPage}/>
                    <Route path='/signIn' exact component={SignInPage}/>
                    <Route path='/recurso/:id' exact component={ResourcePage}/>
                    <Route path='/help' exact component={HelpPage}/>
                    <PrivateRoute path='/publicar' exact component={PublishResource}/>
                    <PrivateRoute path='/perfil' exact component={ProfilePage}/>
                    <PrivateRoute path='/recurso/:id/avaliar' exact component={CommentPage}/>
                    <PrivateRoute path='/recurso/editar/:id' exact component={ModifyResource}/>
                </Switch>
            </UserContextProvider>
        </BrowserRouter>
    );
}

export default Routes;