
import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, Image, ScrollView, ImageBackground, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/core";
const Login = () => {
    const naviation=useNavigation();
    return (
        <SafeAreaView>
        <ScrollView>
            <View style={styles.container}>
            <ImageBackground style={styles.defaultBg} resizeMode={'cover'} source={require('../../assets/images/auth_bg.png')}/>

            </View>
            <View style={{ padding:10,backgroundColor:'#fff' }}>
                    <View style={styles.formInput}>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Image resizeMode={'contain'} source={require('../../assets/images/logo.png')} style={{ width:'100%', height: 80}} />
                        </View>
                    </View>

                    <View style={styles.formInput}>
                        <TextInput style={styles.textInput} placeholder='Type Your Email' />

                    </View>
                    <View style={styles.formInput}>
                        <TextInput style={styles.textInput} placeholder='Type Password' secureTextEntry={true} />
                    </View>
                    <View style={styles.formInput}>
                        <TouchableOpacity  onPress={()=>{ naviation.navigate("Forget") }}>
                            <Text style={{ color: '#db2218', textAlign: 'right', fontSize: 16, fontWeight: 'bold' }}>Forget Password?</Text>
                        </TouchableOpacity>

                    </View>
                    <View style={styles.formInput}>
                        <TouchableOpacity style={styles.defaultButton}>
                            <Text style={{ textAlign: 'center', fontSize: 16, color: '#fff' }}>Login</Text>
                        </TouchableOpacity>

                    </View>
                    <View style={styles.formInput}>
                        <Text style={{ textAlign: 'center' }}>or</Text>
                    </View>
                    <View style={styles.formInput}>
                        <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>

                            <TouchableOpacity style={{ marginRight: 10 }}>
                                <Image source={require('../../assets/images/google.png')} style={{ width: 40, height: 40, borderRadius: 1000 }} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{ marginLeft: 10 }}>
                                <Image source={require('../../assets/images/facebook.png')} style={{ width: 40, height: 40, borderRadius: 1000 }} />
                            </TouchableOpacity>
                        </View>

                    </View>
                    <View style={styles.formInput}>
                        <View style={{ height: 1, backgroundColor: '#ddd', width: '100%' }}></View>
                    </View>

                    <View style={styles.formInput}>
                        <TouchableOpacity onPress={()=>{ naviation.navigate("Register") }}>
                            <Text style={{ color: '#14b531', textAlign: 'center', fontSize: 16, fontWeight: 'bold' }}>Need To Account ? Register Now</Text>
                        </TouchableOpacity>
                    </View>
            </View>
            </ScrollView>

        </SafeAreaView>
        )
    }

    const styles=StyleSheet.create({
        container:{
            flex:1
        },defaultBg:{
            width:'100%',
            height:120
        },formInput:{
            marginTop:10,
            padding:10,
        },textInput:{
            padding:10,
            fontSize:16,
            borderWidth:1,
            borderColor:'#a7a7a7',
            borderRadius:10
        },defaultButton:{
            padding:12,
            backgroundColor:'#4284f5',
            borderRadius:18
        }

    });
export default Login;