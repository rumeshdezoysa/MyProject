import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View, Text, Image } from "react-native";

const Test = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.myTitle}>Hello My Test Word...!</Text>
                </View>


            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
    myTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center'
    }
});


export default Test;