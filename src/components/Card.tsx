import { View, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'

/**Import Shared Components */
import TextCustom from './shared/TextCustom';


/**Import Colors */
import { deleteSong } from '../services/firestore/songs';
import { InfoSongModel } from '../utils/models/InfoSongModel';
import CardInfo from './CardInfo';
import CardUpdate from './CardUpdate';

const Card = (props: any) => {
    const { Songs, setSongs, setInfoSong, containerStyle, infoSong } = props;
    const handlePlaySong = () => {
        setInfoSong(infoSong);
    }
    const handleUpdateSong = () => {
        setIsEditing(!isEditing);
    }
    const handDeleteSong = (songId: string) => {
        deleteSong(songId, () => { setSongs(Songs.filter((song: InfoSongModel) => song.id != songId)) }, () => { });
    }
    const [isEditing, setIsEditing] = React.useState(false)
    return (
        <>
            {
                !isEditing ?
                    <CardInfo containerStyle={containerStyle} infoSong={infoSong} handDeleteSong={handDeleteSong} handleUpdateSong={handleUpdateSong} handlePlaySong={handlePlaySong} />
                    :
                    <CardUpdate infoSong={infoSong} handleUpdateSong={handleUpdateSong} />
            }
        </>
    )
}

export default Card