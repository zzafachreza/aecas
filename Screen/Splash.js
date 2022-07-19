import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors, fonts } from '../utils'

export default function Splash({ navigation }) {

    setTimeout(() => {
        navigation.replace('Home');
    }, 2000)

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: colors.secondary
        }}>
            <View style={{
                flex: 3,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Image source={require('../logo.png')} style={{
                    width: 150,
                    height: 150
                }} />
                <Text style={styles.txtLogo}>AECAS</Text>
                <Text style={styles.txtLogo2}>Aplikasi Edukasi Cegah Anak Stunting</Text>
            </View>
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text style={styles.txt2}>Disusun oleh :</Text>
                <Text style={styles.txt}>Ika Nurfajriyani, S.Kep., Ns., M.Kep.</Text>
                <Text style={styles.txt}>Citra Setyo Dwiandhini, S.Kep., Ns., M.Kep.</Text>
                <Text style={styles.txt}>Halimatus Sa'diya</Text>
                <Text style={styles.txt}>Fega Nurpuji</Text>
                <Text style={styles.txtBrand}>Stikes Mahardika Cirebon</Text>
            </View>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    txt: {
        fontFamily: fonts.secondary[400],
        fontSize: 15,
        marginVertical: 2,
        color: colors.primary,
    }
    , txt2: {
        fontFamily: fonts.secondary[600],
        fontSize: 18,
        marginBottom: 10,
        color: colors.primary,
    },
    txtLogo: {
        fontFamily: fonts.secondary[600],
        fontSize: 40,
        marginBottom: 5,
        color: colors.primary,
    }, txtLogo2: {
        fontFamily: fonts.secondary[400],
        fontSize: 18,
        color: colors.primary,
    },
    txtBrand: {
        fontFamily: fonts.secondary[600],
        fontSize: 17,
        marginTop: 10,
        color: colors.primary,
    }

})