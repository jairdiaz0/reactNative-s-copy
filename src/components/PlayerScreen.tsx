import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, ActivityIndicator } from 'react-native';

/**Import Slider Components From Community */
import Slider from '@react-native-community/slider';

/**Import Icon */
import Icon from 'react-native-vector-icons/Feather';

/**Import Shared Components */
import TextCustom from './shared/TextCustom';

/**Import Colors */
import Colors from '../utils/Colors';

const PlayerScreen = (props: any) => {
    const {
        isPlaying,
        soundGlobal,
        infoSong,
        isLooping,
        sliderValue,
        durationMilliSeconds,
        timer,
        setSliderValue,
        handlePressChangePlayerScreen,
        handPlayButton,
        handlePressLoop,
        sliderCompleteValue
    } = props;

    const formattedDuration = `${Math.floor((durationMilliSeconds / 1000) / 60)}:${Math.floor((durationMilliSeconds / 1000) % 60).toString().padStart(2, '0')}`;

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.coverSpace} onPress={handlePressChangePlayerScreen}>
                <Image style={styleItems.coverImage} source={{ uri: infoSong.coverSrc }} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.aboutSpace} onPress={handlePressChangePlayerScreen}>
                <TextCustom customStyle={{ fontSize: 20 }}>{infoSong.title}</TextCustom>
                <TextCustom customStyle={{ fontSize: 15 }}>{infoSong.author}</TextCustom>
            </TouchableOpacity>
            <View style={styles.controlsSpace}>
                <View style={styles.sliderContainer}>
                    <Slider
                        minimumValue={0}
                        maximumValue={durationMilliSeconds}
                        value={sliderValue}
                        onValueChange={setSliderValue}
                        minimumTrackTintColor={Colors.COLOR_3}
                        maximumTrackTintColor={Colors.COLOR_2}
                        onSlidingStart={handPlayButton}
                        onSlidingComplete={(value) => { sliderCompleteValue(value); }}
                    />
                    <View style={styles.sliderLabels}>
                        <TextCustom>{timer}</TextCustom>
                        <TextCustom>{formattedDuration}</TextCustom>
                    </View>
                </View>
                <View style={styles.iconsSpace}>
                    <TouchableOpacity onPress={() => { }}>
                        <Icon name={"heart"} size={25} color={Colors.COLOR_3} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handPlayButton}>
                        <Icon size={25} style={{ display: isPlaying && !soundGlobal ? 'none' : 'flex' }} name={isPlaying ? "pause" : "play"} color={Colors.COLOR_3} />
                        {isPlaying && !soundGlobal ? <ActivityIndicator /> : null}
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handlePressLoop}>
                        <Icon name={"repeat"} size={25} color={isLooping ? Colors.COLOR_2 : Colors.COLOR_3} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.bottomBar}></View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    coverSpace: {
        height: '40%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    aboutSpace: {
        height: '20%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    controlsSpace: {
        width: '100%',
        height: '30%',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: Colors.COLOR_1
    },
    sliderContainer: {
        width: '100%',
        padding: '5%',
        borderRadius: 20,
    },
    sliderLabels: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    iconsSpace: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
    },
    bottomBar: {
        height: '10%',
        width: '100%',
        backgroundColor: Colors.COLOR_1
    }
});

const styleItems = StyleSheet.create({
    coverImage: {
        width: '50%',
        aspectRatio: 1,
        borderRadius: 10
    }
});

export default PlayerScreen;
