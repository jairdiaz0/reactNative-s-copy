import { View, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

/**Import Icons */
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
/**Import Custom Components */
import TextCustom from './shared/TextCustom'
/**Import Colors */
import Colors from '../utils/Colors';

const CardInfo = (props:any) => {
    const {containerStyle, infoSong, handDeleteSong, handleUpdateSong, handlePlaySong} = props;
    return (
        <View style={containerStyle}>
            <Image style={styles.coverSpace} source={{ uri: infoSong.coverSrc }} />
            <TextCustom customStyle={{ fontSize: 12.5 }}>{infoSong.title}</TextCustom>
            <TextCustom customStyle={{ fontSize: 10 }}>{infoSong.author}</TextCustom>
            <View style={styles.iconContainer}>
                <TouchableOpacity style={{ marginEnd: 10 }} onPress={() => handDeleteSong(infoSong.id)}>
                    <Icon name="delete-empty-outline" size={20} color={'red'} />
                </TouchableOpacity>
                <TouchableOpacity style={{ marginEnd: 10 }} onPress={() => handleUpdateSong()}>
                    <Icon name="circle-edit-outline" size={20} color={Colors.COLOR_2} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handlePlaySong()}>
                    <Icon name="play-outline" size={35} color={Colors.COLOR_2} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        coverSpace: {
            marginBottom: 10,
            aspectRatio: 1,
            borderRadius: 10,
        },
        iconContainer: {
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center'
        }
    }
);

export default CardInfo