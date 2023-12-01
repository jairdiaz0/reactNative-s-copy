import React from 'react'
import { View, TouchableOpacity, TextInput, StyleSheet } from 'react-native'

/**Imports */
import Colors from '../utils/Colors'
import TextCustom from './shared/TextCustom'

/**FireStore */

import { updateSong } from '../services/firestore/songs'
import { InfoSongModel } from '../utils/models/InfoSongModel'

const CardUpdate = (props: any) => {
    const { infoSong, handleUpdateSong } = props;
    const [title, setTitle] = React.useState(infoSong.title);
    const [author, setAuthor] = React.useState(infoSong.author);
    const [coverSrc, setCoverSrc] = React.useState(infoSong.coverSrc);
    const [songSrc, setSongSrc] = React.useState(infoSong.songSrc);

    const [message, setMessage] = React.useState('');

    const addSongOK = (song: InfoSongModel) => {
        setMessage(`Song Updated`);
        handleUpdateSong();
    }

    const addSongError = (error: any) => {
        setMessage(`Error: ${error}`);
    }

    const sendSong = () => {
        updateSong(infoSong.id, title, author, coverSrc, songSrc, addSongOK, addSongError);
        infoSong.title = title;
        infoSong.author = author;
        infoSong.coverSrc = coverSrc;
        infoSong.songSrc = songSrc;
    }
    return (
        <View style={styles.addSpace}>
            <TextCustom customStyle={styles.title}>Add Song</TextCustom>
            <TextCustom customStyle={{ fontSize: 15, textAlign: 'center' }}>{message}</TextCustom>
            <TextInput
                style={inputStyle.input}
                onChangeText={setTitle}
                value={title}
                placeholder="Song's Title"
            />
            <TextInput
                style={inputStyle.input}
                onChangeText={setAuthor}
                value={author}
                placeholder="Song's Author"
            />
            <TextInput
                style={inputStyle.input}
                onChangeText={setCoverSrc}
                value={coverSrc}
                placeholder="Song's Cover Source"
            />
            <TextInput
                style={inputStyle.input}
                onChangeText={setSongSrc}
                value={songSrc}
                placeholder="Song's Song Source"
            />
            <TouchableOpacity style={inputStyle.button} onPress={sendSong}>
                <TextCustom customStyle={{ fontSize: 15, textAlign: 'center' }}>Update</TextCustom>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        addSpace: {
            backgroundColor: Colors.COLOR_4,
            padding: 25,
            borderRadius: 25,
        },
        title: {
            fontSize: 25,
            marginVertical: 25,
            textAlign: 'center'
        }
    }
)

const inputStyle = StyleSheet.create(
    {
        input: {
            backgroundColor: Colors.COLOR_3,
            padding: 10,
            borderRadius: 25,
            textAlign: 'center',
            marginBottom: 20
        },
        button: {
            backgroundColor: Colors.COLOR_2,
            padding: 20,
            width: '50%',
            borderRadius: 25,
            alignSelf: 'center'
        }
    }
)

export default CardUpdate