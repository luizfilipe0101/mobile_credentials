import {View, Text, StyleSheet, Button, Vibration} from 'react-native';
import {useState, useEffect} from 'react';
import { BarCodeScanner } from 'expo-barcode-scanner';

import {Search_participante} from '../../controller/qr_search';



export default function Search({route, navigation, props}) {

    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    navigation.addListener('tabPress', ()=>{
        setScanned(false)
    })

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        Search_participante(navigation, data);
        
      };

    

    // Pede permissão da camera a primeira vez que a tela é aberta
    useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status === 'granted');
    };
    getBarCodeScannerPermissions();
    }, []);


    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
      }
      if (hasPermission === false) {
        return <Text>No access to camera</Text>;
      }

    return (
        <View style={style.container}>
            <View> 
                <BarCodeScanner
                    onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                    style={style.camera}
                />
            </View>
    </View>
    );
}


const style = StyleSheet.create({
    container:{
        flex: 1,
        padding: 24,
        alignItems: 'center',
        
    },
    camera: {
        padding: 300,
        paddingBottom: 200,
        

    }
})
