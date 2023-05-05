

export async function Search_participante(navigation, data) {

    const host = '192.168.0.39';
    const port = 8083;
    const code = 'ba51406ab095895ca91ead3c661eef5fbb02385784cc0ea3a6ab580fa206330a';

    console.log(data)

    try{
        const data = await fetch(`http://${host}:${port}/qr?code=${code}`,{
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        });

        const result = await data.json();
        console.log(result[0])
        navigation.navigate('search', {parts: result[0]})


    }catch(err){
        console.log('Erro: ', err);
    }

    

    


}
