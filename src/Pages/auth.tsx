import { Location } from 'history'

import React, { useContext, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { UserContext } from '../Context/UserContext'
import { useLoginMutation } from '../hooks/useLoginMutation'
import { LoadingPage } from './loading-page'

const extractAccessCodeFromURL = (location: Location<unknown>) => {
  // @ts-ignore
  return /code=([\w\%_-]+)/.exec(location.search)[1]
}

export default function OauthCallbackPage() {
  const location = useLocation();
  const { push } = useHistory();
  const { login } = useLoginMutation();
  const { isLogged } = useContext(UserContext);

  const accessCode = extractAccessCodeFromURL(location)

  useEffect(() => {
    if (accessCode) login(accessCode, process.env.REACT_APP_REDIRECT_AUTH ?? "http://localhost:3000/auth")
  }, [accessCode, login])

  useEffect(() => {
    if(!isLogged) return
    push('/perfil')
  }, [isLogged, push])

  if(!isLogged) return <LoadingPage />
  else return <></>
}
