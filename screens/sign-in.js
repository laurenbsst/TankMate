/**
 * sign-in.js - created 10/09/2021
 * @description Sign in screen for all users
 * @author Lauren Bassett <laurenb252@outlook.com>
 */

import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Colors } from '../styles/colors.js';
import AnimatedLottieView from 'lottie-react-native';

export default function SignIn() {
    return (
        <View style={{ backgroundColor: Colors.primary, flex: 1 }}>
            <View style={styles.animationContainer}>
                <AnimatedLottieView style={styles.fishAnimation} source={require('../assets/fish-tank.json')} autoPlay resizeMode='contain' />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.welcome}>Welcome!</Text>
                <Text style={styles.continue}>Sign in to continue</Text>
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.inputLabels}>Email address</Text>
                <TextInput style={styles.textInput} placeholder="johndoe@gmail.com"></TextInput>
                <Text style={styles.inputLabels}>Password</Text>
                <TextInput style={styles.textInput} placeholder="************"></TextInput>
            </View>
            <View style={styles.forgottenPTextContainer}>
                <TouchableOpacity>
                    <Text style={styles.forgottenPText}>Forgotten password?</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity>
                <View style={styles.signInBtn}>
                    <Text style={styles.signInText}>Sign in</Text>
                </View>
            </TouchableOpacity>
            <View style={styles.bottomTextContainer}>
                <Text style={styles.bottomText}>Don't have an account?</Text>
                <TouchableOpacity>
                    <Text style={styles.bottomText2}>Create account</Text>
                </TouchableOpacity>

            </View>
            <StatusBar style="auto" />
        </View>

    );
}

const styles = StyleSheet.create({
    animationContainer: {
        height: hp('30%'),
        width: wp('100%'),
        position: 'relative',
    },
    fishAnimation: {
        width: wp('100%'),
        height: hp('50%'),
        marginTop: '-6%',
        alignSelf: 'center'
    },
    textContainer: {
        height: hp('10%'),
        width: hp('100%'),
    },
    welcome: {
        fontSize: hp('5.5%'),
        position: 'relative',
        left: 20,
        fontFamily: 'Nunito-Bold',
    },
    continue: {
        fontSize: hp('2%'),
        position: 'relative',
        left: 30,
        fontFamily: 'Nunito-Regular',
    },
    inputContainer: {
        width: wp('80%'),
        alignSelf: 'center',
        marginTop: '10%',
    },
    textInput: {
        marginBottom: '5%',
        borderColor: Colors.secondary,
        borderWidth: 2,
        borderRadius: 10,
        height: hp('6.5%'),
        backgroundColor: Colors.surface,
        paddingLeft: '3%',
    },
    inputLabels: {
        fontFamily: 'Nunito-Light',
        marginBottom: '1.5%',
    },
    forgottenPTextContainer: {
        width: wp('80%'),
        alignItems: 'flex-end',
        alignSelf: 'center',
        marginTop: '-2.5%',
    },
    forgottenPText: {
        fontFamily: 'Nunito-SemiBold',
    },
    signInBtn: {
        alignSelf: 'center',
        backgroundColor: Colors.secondary,
        width: wp('60%'),
        height: hp('7%'),
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '10%',
        borderRadius: 10,
    },
    signInText: {
        fontFamily: 'Nunito-SemiBold',
        textAlign: 'center',
        fontSize: hp('2.5%'),
    },
    bottomTextContainer: {
        alignItems: 'center',
        marginTop: hp('6%'),
    },
    bottomText: {
        fontFamily: 'Nunito-SemiBold',
        fontSize: hp('2%'),
        marginBottom: hp('1%'),
    },
    bottomText2: {
        fontFamily: 'Nunito-Bold',
        fontSize: hp('2%'),
        marginBottom: hp('1%'),
    },
});