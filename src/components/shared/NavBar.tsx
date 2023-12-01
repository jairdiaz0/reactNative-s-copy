import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'

/**Import Colors */
import Colors from '../../utils/Colors';

/**Import TextCustom */
import TextCustom from './TextCustom';

/**Import Icons */
import Icon from 'react-native-vector-icons/AntDesign';

/**Const NavBar Items */
const items: Array<any> = [
    {
        pageName: 'Home',
        title: 'Home',
        iconName: 'home',
    },
    {
        pageName: 'Search',
        title: 'Search',
        iconName: 'search1',
    },
    {
        pageName: 'Playlist',
        title: 'Your Library',
        iconName: 'switcher',
    }
];

const NavBar = (props: any) => {
    const { pageName, setPageName } = props;

    const handleButtonClick = (pageName: string) => {
        setPageName(pageName);
    };

    return (
        <View style={styles.container}>
            {
                items.map((item, index) => (
                    <TouchableOpacity onPress={() => handleButtonClick(item.pageName)} key={index} style={iconsStyle.containerStyle}>
                        <Icon name={item.iconName} size={20} color={item.pageName == pageName ? Colors.COLOR_2 : Colors.COLOR_3} />
                        <TextCustom customStyle={[iconsStyle.textStyle, { color: item.pageName == pageName ? Colors.COLOR_2 : Colors.COLOR_3 }]}>{item.title}</TextCustom>
                    </TouchableOpacity>
                ))
            }
        </View>
    )
}

const styles = StyleSheet.create(
    {
        container: {
            flexDirection: 'row',
            justifyContent: 'space-around',
            paddingVertical: 10
        }
    }
);

const iconsStyle = StyleSheet.create(
    {
        textStyle: {
            letterSpacing: 2
        },
        containerStyle: {
            alignItems: 'center',
            width: `${100 / 3}%`
        }
    }
);

export default NavBar