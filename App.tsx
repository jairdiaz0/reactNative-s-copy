import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet } from 'react-native';

/**Import Colors */
import Colors from './src/utils/Colors';

/**Import Models */
import { InfoSongModel } from './src/utils/models/InfoSongModel';

/**Import Template User */
import UserTemplate from './src/screens/UserTemplate';
import AuthTemplate from './src/screens/auth/AuthTemplate';

import { loadSongs } from './src/utils/data/Songs';

export default function App() {
  const [infoSong, setInfoSong] = React.useState<InfoSongModel>();
  const [pageName, setPageName] = React.useState<string>('Home');
  const [isAuth, setIsAuth] = React.useState<boolean>(false);
  const [Songs, setSongs] = React.useState<Array<InfoSongModel>>();
  React.useEffect(() => {
    getSongs();
  }, [])
  
  async function getSongs(){
    setSongs(await loadSongs());
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={true} />
      {
        !isAuth ?
          <AuthTemplate setIsAuth={setIsAuth} />
          :
          <UserTemplate setSongs={setSongs} Songs={Songs} setIsAuth={setIsAuth} infoSong={infoSong} setInfoSong={setInfoSong} pageName={pageName} setPageName={setPageName} />
      }

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.COLOR_1,
  },
});
