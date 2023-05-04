import {StyleSheet, View, Text} from 'react-native';


export default function Home() {
    return (
        <View style={style.container}>
            <Text> Homes </Text>
        </View>
    );
}

const style = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignContent:'center',
        alignItems: 'center',
        backgroundColor: '#B2DEFF',
        flex: 1
    }
})