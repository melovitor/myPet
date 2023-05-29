import {NavigationContainer} from '@react-navigation/native'
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth'
import { SignInRoutes } from './auth.routes'
import { AppRoutes } from './app.routes'
import { useEffect, useState} from 'react'

export function Routes(){
    const [user, setUser] = useState<FirebaseAuthTypes.User | null>()
    console.log(user)

    useEffect(() => {
        const subscriber = auth()
            .onAuthStateChanged(response => {
                setUser(response)})

        return subscriber
    },[])

    return(                 
        <NavigationContainer>
            {user ? <AppRoutes/> : <SignInRoutes/>}
        </NavigationContainer>
    )

}