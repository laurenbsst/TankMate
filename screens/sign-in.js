import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AnimatedLottieView from 'lottie-react-native';
import { TextInput } from 'react-native-paper';

export default function SignIn() {
    return (
        <View style={{backgroundColor: '#CDE0F1', flex: 1}}>
            <View style={styles.animationContainer}>
                <AnimatedLottieView style={styles.fishAnimation} source={require('../assets/fish-tank.json')} autoPlay resizeMode='contain' />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.welcome}>Welcome!</Text>
                <Text style={styles.continue}>Sign in to continue</Text>
            </View>
            <View style={styles.inputContainer}>
                <Text>Email address</Text>
                <TextInput style={styles.textInput} placeholder="johndoe@gmail.com"></TextInput>
                <Text>Password</Text>
                <TextInput style={styles.textInput} placeholder="************"></TextInput>
            </View>

            <StatusBar style="auto" />

        </View>

    );
}

const styles = StyleSheet.create({
    animationContainer: {
        height: hp('30%'),
        width: wp('100%'),
    },
    fishAnimation: {
    },
    textContainer: {
        height: hp('10%'),
        width: hp('100%'),
    },
    welcome: {
        fontSize: hp('6%'),
        position: 'relative',
        left: 20,
    },
    continue: {
        fontSize: hp('2%'),
        position: 'relative',
        left: 30,
    },
    inputContainer: {
        width: wp('80%'),
        alignSelf: 'center',
        marginTop: '10%',
    },
    textInput: {
        marginBottom: '5%',
    }
});