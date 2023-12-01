import React from 'react'
import { View, TouchableOpacity, TextInput, StyleSheet } from 'react-native'

/**Imports */
import Colors from '../utils/Colors'
import TextCustom from './shared/TextCustom'

/**FireStore */

import { addSong } from '../services/firestore/songs'
import { InfoSongModel } from '../utils/models/InfoSongModel'

const AddSong = (props:any) => {
    const {Songs, setSongs} = props;
    const [title, setTitle] = React.useState('');
    const [author, setAuthor] = React.useState('');
    const [coverSrc, setCoverSrc] = React.useState('');
    const [songSrc, setSongSrc] = React.useState('');

    const [message, setMessage] = React.useState('');

    const addSongOK = (song:InfoSongModel)=>{
        setMessage(`Song Added, id: ${song.id}`);
        setSongs([...Songs, song]);
        setTitle('');
        setAuthor('');
        setCoverSrc('');
        setSongSrc('');
    }

    const addSongError = (error:any)=>{
        setMessage(`Error: ${error}`);
    }

    const sendSong = () => {
        addSong(title, author, coverSrc, songSrc, addSongOK, addSongError);
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
                <TextCustom customStyle={{ fontSize: 15, textAlign: 'center' }}>Add</TextCustom>
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

export default AddSong