import React, { useState, useEffect } from 'react';

/**Import Expo Audio */
import { Audio, InterruptionModeAndroid, InterruptionModeIOS } from 'expo-av';

/**Import Player Components */
import PlayerMinimize from '../PlayerMinimize';
import PlayerScreen from '../PlayerScreen';
import { Platform } from 'react-native';

const Player = (props: any) => {
    const { infoSong, playerScreen: initialPlayerScreen, setPlayerScreen } = props;

    const [isPlaying, setIsPlaying] = useState(false);
    const [isLooping, setIsLooping] = useState(true);

    const [sound, setSound] = useState<Audio.Sound>();

    const [timer, setTimer] = useState('0:00');

    const [sliderValue, setSliderValue] = useState(0);
    const [durationMilliSeconds, setDurationMilliSeconds] = useState<number | undefined>(undefined);

    useEffect(() => {
        getPermissions()
    }, []);

    async function getPermissions() {
        await Audio.requestPermissionsAsync();
        await Audio.setAudioModeAsync({
            staysActiveInBackground: true,
            allowsRecordingIOS: false,
            playsInSilentModeIOS: true,
            interruptionModeIOS: InterruptionModeIOS.DoNotMix,
            interruptionModeAndroid: InterruptionModeAndroid.DoNotMix,
        });
    }


    async function removeSound() {
        await pauseSong();
        await unloadSong();
        setSound(undefined);
    }

    const loadSound = async () => {
        let soundValue = sound;
        if (!soundValue) {
            const { sound: newSound, status } = await Audio.Sound.createAsync(
                { uri: infoSong.songSrc },
                { isLooping }
            );
            setSound(newSound);
            soundValue = newSound;
            if (status.isLoaded) {
                setDurationMilliSeconds(status.durationMillis);
            }
            newSound.setOnPlaybackStatusUpdate((status: any) => {
                if (status.isPlaying) {
                    setSliderValue(status.positionMillis);
                    if (status.positionMillis === status.durationMillis) {
                        handPlayButton();
                    }
                }
            });
        } else {
            const status = await soundValue.getStatusAsync();
            if (status.isLoaded && status.positionMillis === status.durationMillis) {
                await soundValue.setPositionAsync(0);
            }
        }

        await soundValue?.playAsync();
    };

    const pauseSong = async () => {
        await sound?.pauseAsync();
    };

    const unloadSong = async () => {
        await sound?.unloadAsync();
        setSound(undefined);
    };

    const loopSong = async (flag: boolean) => {
        await sound?.setIsLoopingAsync(flag);
    };

    const handPlayButton = () => {
        isPlaying ? pauseSong() : loadSound();
        setIsPlaying(!isPlaying);
    };

    const handlePressChangePlayerScreen = () => {
        setPlayerScreen(!initialPlayerScreen);
    };

    const handlePressLoop = () => {
        loopSong(!isLooping);
        setIsLooping(!isLooping);
    };

    const changePositionSound = async (value: any) => {
        await sound?.setPositionAsync(value);
    };

    const sliderCompleteValue = async (value:any) =>{
        await changePositionSound(value);
        handPlayButton();
    }
    useEffect(() => {
        removeSound();
        setIsPlaying(false);
    }, [infoSong]);

    useEffect(() => {
        return () => { sound?.unloadAsync() }
    }, []);

    useEffect(() => {
        const minutes = Math.floor((sliderValue / 1000) / 60);
        const seconds = Math.floor((sliderValue / 1000) % 60).toString().padStart(2, '0');
        setTimer(`${minutes}:${seconds}`);
    }, [sliderValue])
    return (
        <>
            {!initialPlayerScreen ? (
                <PlayerMinimize
                    handlePressChangePlayerScreen={handlePressChangePlayerScreen}
                    isPlaying={isPlaying}
                    soundGlobal={sound}
                    infoSong={infoSong}
                    handPlayButton={handPlayButton}
                />
            ) : (
                <PlayerScreen
                    isLooping={isLooping}
                    handlePressLoop={handlePressLoop}
                    handlePressChangePlayerScreen={handlePressChangePlayerScreen}
                    isPlaying={isPlaying}
                    soundGlobal={sound}
                    infoSong={infoSong}
                    handPlayButton={handPlayButton}
                    durationMilliSeconds={durationMilliSeconds}
                    sliderValue={sliderValue}
                    setSliderValue={setSliderValue}
                    sliderCompleteValue={sliderCompleteValue}
                    timer={timer}
                />
            )}
        </>
    );
};

export default Player;
