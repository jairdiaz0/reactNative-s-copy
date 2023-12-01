import { View, StyleSheet, Image, TouchableOpacity, ActivityIndicator } from 'react-native'
import React from 'react'

/**Import Shared Components */
import TextCustom from './shared/TextCustom';

/**Import Icons */
import Icon from 'react-native-vector-icons/Feather';

/**Import Colors */
import Colors from '../utils/Colors';

const PlayerMinimize = (props: any) => {
    const {
        handlePressChangePlayerScreen,
        isPlaying,
        soundGlobal,
        infoSong,
        handPlayButton
    } = props;

    return (
        <View style={styles.container}>
            <View style={styles.coverSpace}>
                <Image style={styleItems.coverImage} source={{ uri: infoSong.coverSrc }} />
            </View>
            <TouchableOpacity style={styles.aboutSpace} onPress={() => handlePressChangePlayerScreen()}>
                <TextCustom customStyle={{ fontSize: 12.5 }}>{infoSong.title}</TextCustom>
                <TextCustom customStyle={{ fontSize: 10 }}>{infoSong.author}</TextCustom>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconsSpace} onPress={() => handPlayButton()}>
                <Icon style={{ display: (isPlaying && !soundGlobal) ? 'none' : 'flex' }} name={isPlaying ? "pause" : "play"} size={20} color={Colors.COLOR_3} />
                {
                    (isPlaying && !soundGlobal) ? <ActivityIndicator /> : <></>
                }
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
        },
        coverSpace: {
            width: '25%',
            alignItems: 'center',
        },
        aboutSpace: {
            width: '50%',
            alignItems: 'center',
        },
        iconsSpace: {
            width: '25%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
        }
    }
);

const styleItems = StyleSheet.create({
    coverImage: {
        width: 50,
        aspectRatio: 1,
        borderRadius: 10
    }
});

export default PlayerMinimize