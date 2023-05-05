import {View, Text, TextInput ,StyleSheet, Button, ScrollView} from 'react-native';
import { useState, useEffect } from 'react';
import Search_participante from '../../controller/qr_search';


// Container de campo de buscas
function SearchField() {
    const [inputValue, setInputValue] = useState('');
    return (
        <View>
            <View style={styles.form}>
                        <TextInput
                            style={styles.input}
                            onChangeText={setInputValue}
                            value={inputValue}
                            placeholder='CPF'
                            keyboardType='numeric'
                            maxLength={11}
                        />
            
                    </View>

                    <Button
                        title='Pesquisar'
                        onPress={()=>{}}
                    ></Button>
        </View>
    )
}


//Container do campo de resultado da pesquisa
function DataField(data) {

    const [name, setName]= useState('');
    const [cpf, setCPF]= useState('');
    const [email, setEmail]= useState('');
    const [phone, setPhone]= useState('');
    const [payment_status, setPaymentStatus] = useState('');

    const [buttonStatus, setButtonStatus] = useState(false);
    const [buttonPay, setButtonPay] = useState(true);

    useEffect(()=>{
        try{

            setName(data.name);
            setCPF(data.cpf);
            setEmail(data.email);
            setPhone(data.phone);
            setName(data.name);
            setPaymentStatus(data.payment)

            if(data.payment === 'Pendente') {
                setButtonStatus(true);
                setButtonPay(false);
            }
        }catch(err){
            
        }
    },[data.trigger])

    function change_button() {
        setButtonStatus(false);
        setButtonPay(true);
        setPaymentStatus('Aprovado');
    }

    function Confirmar() {
        setName('');
        setCPF('');
        setEmail('');
        setPhone('');
        setName('');
        setPaymentStatus('')
    }

    return (
        <View style={styles.constainer}>
                
                    <View style={styles.text_box}>

                        <View>
                            <Text style={styles.text_label}> Nome </Text>
                            <Text style={styles.text_data}> {name} </Text>
                        </View>

                        <View>
                            <Text style={styles.text_label}> CPF </Text>
                            <Text style={styles.text_data}> {cpf} </Text>
                        </View>

                        <View>
                            <Text style={styles.text_label}> E-mail </Text>
                            <Text style={styles.text_data}> {email} </Text>
                        </View>

                        <View>
                            <Text style={styles.text_label}> Telefone </Text>
                            <Text style={styles.text_data}> {phone} </Text>
                        </View>

                        <View>
                            <Text style={styles.text_label}> Pagamento </Text>
                            <Text style={styles.text_data}> {payment_status} </Text>
                        </View>
                    
                    </View>
                    
                    <View style={styles.button_container}>
                        <Button
                            title='Confirmar'
                            onPress={()=>{Confirmar()}}
                            disabled={buttonStatus}
                        ></Button>

                        <Button
                            title='Pagamento'
                            onPress={()=>{change_button()}}
                            disabled={buttonPay}
                        ></Button>
                    </View>

                

            </View>
    )
}


// Main function
export default function Search({route, navigation}) {

    try{
        const name = route.params.parts['name'];
        const cpf = route.params.parts['cpf'];
        const email = route.params.parts['email'];
        const phone = route.params.parts['phone'];
        const payment = route.params.parts['payment'];

        return(<DataField 
            name={name}
            cpf={cpf}
            email={email}
            phone={phone}
            payment={payment}
            trigger={route}
            />);
        
    }catch(err){

    }
    
}



const styles = StyleSheet.create({
    constainer: {
        
    },

    text_box: {
        flexDirection: 'column',
        padding: 10,
        borderWidth: 1,
        margin: 12,
        
    },

    text_label: {
        fontSize: 16
    },

    text_data: {
        fontSize: 20,
        marginBottom: 10
    },

    form: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },

    button_container: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        margin: 12,
        
    }
})