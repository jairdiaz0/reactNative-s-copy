import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'

/**Import Colors */
import Colors from '../../utils/Colors';

/**Import Song Data */
// import Songs from '../../utils/data/Songs';

/**Import Components */
import Card from '../../components/Card';

const SearchPage = (props: any) => {
    const { setInfoSong, Songs, setSongs } = props;

    const [textFilter, setTextFilter] = React.useState('')
    const [songsFiltered, setSongsFiltered] = React.useState(Songs)

    React.useEffect(() => {
        filterSongs();
    }, [textFilter])

    React.useEffect(() => {
        filterSongs();
    }, [Songs])
    const filterSongs = () => {
        let newSongsFiltered = Songs;
        if (textFilter != "") {
            newSongsFiltered = Songs.filter((song:any) => {
                return song.title.toLowerCase().includes(textFilter.toLowerCase()) ||
                       song.author.toLowerCase().includes(textFilter.toLowerCase());
            });            
        }
        setSongsFiltered(newSongsFiltered);
    }

    return (
            <View style={styles.container}>
                <View style={styles.searchBarSpace}>
                    <TextInput
                        style={inputStyle.search}
                        onChangeText={setTextFilter}
                        value={textFilter}
                        placeholder='Search by Song Name or Author Name'
                    />
                </View>
                <View style={styles.resultsSpace}>
                    {
                        songsFiltered.map((song:any, index:any) => (
                            <Card key={index} Songs={Songs} setSongs={setSongs} setInfoSong={setInfoSong} infoSong={song} containerStyle={styles.cardContainer} />
                        ))
                    }
                </View>
            </View>
    )
}

const styles = StyleSheet.create(
    {
        container: {
        },
        searchBarSpace: {
            backgroundColor: Colors.COLOR_4,
            marginBottom: 20
        },
        resultsSpace: {
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-around'
        },
        cardContainer: {
            marginBottom: '5%',
            width: '45%',
            padding: '5%',
            backgroundColor: Colors.COLOR_4,
            borderRadius: 10,
        }
    }
);

const inputStyle = StyleSheet.create(
    {
        search: {
            backgroundColor: Colors.COLOR_3,
            padding: 10,
            borderRadius: 25,
            textAlign: 'center'
        }
    }
);

export default SearchPage