

export async function Search_participante(navigation, data) {

    const host = '192.168.0.42';
    const port = 8083;
    const code = data.toString()

    try{
        const data = await fetch(`http://${host}:${port}/qr?code=${code}`,{
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        });

        const result = await data.json();
        navigation.navigate('search', {parts: result})

    }catch(err){
        console.log('Erro: ', err);
    }

    

    


}
