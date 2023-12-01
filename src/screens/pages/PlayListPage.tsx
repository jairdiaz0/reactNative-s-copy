import { StyleSheet, View } from 'react-native'
import React from 'react'

/**Import Components */
import AddSong from '../../components/AddSong';

const PlayListPage = (props:any) => {
  const { setSongs, Songs } = props;
  
  return (
    <View style={styles.container}>
      <AddSong Songs={Songs} setSongs={setSongs}/>
    </View>
  )
}

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
    },
  }
)

export default PlayListPage