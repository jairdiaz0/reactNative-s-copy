import { View, StyleSheet } from 'react-native'
import React from 'react'

/**Imports */
import LogIn from './pages/LogIn'
import SignIn from './pages/SignIn';

const AuthTemplate = (props: any) => {
    const { setIsAuth } = props;
    const [pageName, setPageName] = React.useState('log-in');
    return (
        <View style={styles.container}>
            {
                pageName=='log-in'?
                <LogIn setPageName={setPageName} setIsAuth={setIsAuth}/>
                :
                <SignIn setPageName={setPageName}/>
            }
        </View>
    )
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1
        }
    }
);

export default AuthTemplate