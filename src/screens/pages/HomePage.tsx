import { View, StyleSheet } from 'react-native'
import React from 'react'

/**Import Components */
import Card from '../../components/Card';

/**Import Colors */
import Colors from '../../utils/Colors';

/**Import Song Data */
// import Songs from '../../utils/data/Songs';

const HomePage = (props: any) => {
    const { setSongs, setInfoSong, Songs } = props;
    return (
        <View style={styles.container}>
            {
                Songs.map((song:any, index:any) => (
                    <Card key={index} Songs={Songs} setSongs={setSongs} setInfoSong={setInfoSong} infoSong={song} containerStyle={styles.cardContainer} />
                ))
            }
        </View>
    )
}

const styles = StyleSheet.create(
    {
        container: {
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

export default HomePage