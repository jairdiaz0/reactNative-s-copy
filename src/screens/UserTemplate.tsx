import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'

/**Import Shared Components */
import Header from '../components/shared/Header';
import NavBar from '../components/shared/NavBar';
import Player from '../components/shared/Player';

/**Import Colors */
import Colors from '../utils/Colors';

/**Import Pages */
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import PlayListPage from './pages/PlayListPage';

const Template = (props: any) => {
    const { Songs, setSongs, setIsAuth, infoSong, setInfoSong, pageName, setPageName } = props;
    const [playerScreen, setPlayerScreen] = React.useState(false);
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Header setIsAuth={setIsAuth} />
            </View>
            <ScrollView style={styles.main}>
                {
                    pageName == 'Home' ?
                        <HomePage setSongs={setSongs} Songs={Songs} infoSong={infoSong} setInfoSong={setInfoSong} />
                        :
                        pageName == 'Search' ?
                            <SearchPage Songs={Songs} setSongs={setSongs} infoSong={infoSong} setInfoSong={setInfoSong} />
                            :
                            pageName == 'Playlist' ?
                                <PlayListPage Songs={Songs} setSongs={setSongs} />
                                :
                                ''
                }
                {/* {children} */}
            </ScrollView>
            {
                infoSong ?
                    <View style={!playerScreen ? styles.player : styles.playerScreen}>
                        <Player playerScreen={playerScreen} setPlayerScreen={setPlayerScreen} infoSong={infoSong} />
                    </View>
                    :
                    <></>
            }
            <View>
                <NavBar pageName={pageName} setPageName={setPageName} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1
        },
        header: {
            height: '5%',
            backgroundColor: Colors.COLOR_4,
            marginBottom: 10,
            borderRadius: 20,
            marginHorizontal: 20
        },
        main: {
            padding: 10,
            paddingTop: 0
        },
        player: {
            height: '7.5%',
            backgroundColor: Colors.COLOR_4,
            justifyContent: 'center',
            borderRadius: 10
        },
        playerScreen: {
            position: 'absolute',
            height: '100%',
            width: '100%',
            backgroundColor: Colors.COLOR_4,
        }
    }
);

export default Template