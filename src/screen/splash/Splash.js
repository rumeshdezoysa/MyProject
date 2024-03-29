import React, { useEffect, useState } from 'react';
import { View,Image,Text } from 'react-native';
import { useNavigation } from "@react-navigation/core";


const Splash = () => {

	const [isGo,setIsGo]=useState(true);
    const Navigation=useNavigation();


    useEffect(()=>{
        if(isGo == true){
            setTimeout(()=>{
                Navigation.navigate("Login");
                setIsGo(false);
            },2000);
        }
    });

    return (
        <View style={{ flex:1,justifyContent:'center',alignItems:'center',backgroundColor:"#fff"}}>
             <Image source={require('../../assets/images/logo.png')} style={{width:150,height:50}}/>
             <Text style={{fontSize:24,textAlign:'center',fontWeight:'bold'}}>My First App</Text>
        </View>

    )
}

export default Splash;