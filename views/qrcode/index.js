import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {useState} from 'react';
import { Camera, CameraType } from 'expo-camera';



export default function QR() {

    const [type, setType] = useState(CameraType.back);
    const [permission, requestPermission] = Camera.useCameraPermissions();

    function toggleCameraType() {
        setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
      }

      Camera.useCameraPermissions();

    return (
        <View style={style.container}>
        <Camera type={type}>
            <View style={style.container}>
            <TouchableOpacity onPress={toggleCameraType}>
                <Text >Flip Camera</Text>
            </TouchableOpacity>
            </View>
        </Camera>
    </View>
    );
}


const style = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignContent:'center',
        alignItems: 'center',
        backgroundColor: '#00000',
        flex: 1
    }
})