import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors, fonts } from '../utils'
import { Icon } from 'react-native-elements'

export default function Home({ navigation }) {

    const DataMenu = ({ img, judul, onPress }) => {
        return (
            <TouchableOpacity onPress={onPress} style={{
                backgroundColor: colors.primary,
                padding: 10,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10,
                flex: 1,
                marginHorizontal: 20,
            }}>
                <Image source={img} style={{
                    width: 70,
                    height: 70,
                    resizeMode: "contain"
                }} />
                <Text style={{
                    fontFamily: fonts.secondary[600],
                    color: colors.white,
                    textAlign: 'center',
                    fontSize: 16
                }}>{judul}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: colors.secondary
        }}>
            <View style={{
                flex: 1,
                backgroundColor: colors.primary,
                borderBottomLeftRadius: 50,
                borderBottomRightRadius: 50,
                paddingHorizontal: 20,
                flexDirection: 'row'
            }}>
                <View style={{
                    flex: 1,
                    height: 80,
                }}>
                    <Text style={styles.txt}>Welcome</Text>
                    <Text style={styles.txtLogo}>AECAS</Text>
                    <Text style={styles.txt}>Aplikasi Edukasi Cegah Anak Stunting</Text>
                </View>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: 80,
                }}>
                    <Image source={require('../logo_white.png')} style={{
                        width: 50,
                        height: 50,
                    }} />
                </View>


            </View>
            <View style={{
                flex: 3,
                backgroundColor: colors.secondary,
            }}>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: -100,
                }}>
                    <Image source={require('../slider.png')} style={{
                        width: '90%',
                        height: 200,
                        borderRadius: 20,
                    }} />
                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    marginVertical: 5,
                }}>
                    <DataMenu onPress={() => navigation.navigate('Cek')} judul="Memeriksa Status Gizi" img={require('../1.png')} />
                    <DataMenu judul="Mengenal Stunting" img={require('../2.png')} />
                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    marginVertical: 5,
                }}>
                    <DataMenu judul="Inisiasi Menyusui Dini" img={require('../3.png')} />
                    <DataMenu judul="Pemberian ASI Ekslusif dan Lanjut" img={require('../4.png')} />
                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    marginVertical: 5,
                }}>
                    <DataMenu judul="Gizi Ibu Hamil dan Menyusui" img={require('../5.png')} />
                    <DataMenu onPress={() => navigation.navigate('Menu5')} judul="MP-ASI" img={require('../6.png')} />
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    txt: {
        fontFamily: fonts.secondary[400],
        fontSize: 13,
        color: colors.white,
    }
    , txt2: {
        fontFamily: fonts.secondary[600],
        fontSize: 14,
        marginBottom: 20,
        color: colors.primary,
    },
    txtLogo: {
        fontFamily: fonts.secondary[600],
        fontSize: 30,
        marginBottom: 5,
        color: colors.white,
    }, txtLogo2: {
        fontFamily: fonts.secondary[400],
        fontSize: 18,
        color: colors.primary,
    }

})