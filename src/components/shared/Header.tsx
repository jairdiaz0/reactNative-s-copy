import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'

/**Import Shared Components */
import TextCustom from './TextCustom';

/**Import Icons */
import Icon from 'react-native-vector-icons/Ionicons';

/**Import Colors */
import Colors from '../../utils/Colors';
import { sendLogOut } from '../../services/firebase/auth';

const Header = (props: any) => {
    const { setIsAuth } = props;

    const signOutOk = () => {
        setIsAuth(false);
    }

    const logOut = () => {
        sendLogOut(signOutOk, () => { });
    }
    return (
        <View style={styles.container}>
            <View style={styles.userSpace}>
                <TextCustom>Edén Jair Sánchez Díaz</TextCustom>
            </View>
            <TouchableOpacity style={styles.settingsSpace} onPress={logOut}>
                <Icon name="exit-outline" size={25} color={Colors.COLOR_2} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        container: {
            paddingHorizontal: '2.5%',
            height: '100%',
            alignItems: 'center',
            flexDirection: 'row'
        },
        userSpace: {
            width: '100%',
            alignItems: 'center'
        },
        settingsSpace: {
            position: 'absolute',
            width: '30%',
            marginStart: '60%',
            alignItems: 'flex-end'
        }
    }
);

export default Header