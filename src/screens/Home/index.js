import { View } from "react-native";
import { BoxInput } from "../../components/BoxInput";
import { ContainerForm, ContainerInput, ScrollForm } from "./style";
import { useEffect, useState } from "react";
import axios from "axios";

export function Home() {
    // states - variáveis 
    const [cep, setCep] = useState('')
    const [logradouro, setLogradouro] = useState('')
    const [bairro, setBairro] = useState('')
    const [cidade, setCidade] = useState('')
    const [estado, setEstado] = useState('')
    const [uf, setUF] = useState('')

    // useEffect - funções 

useEffect(() => {},

async function buscarCEP() {
    
try {
    
if (cep != '' && cep.length === 8 ) {
    const dados =  await axios.get(`https://brasilaberto.com/api/v1/zipcode/${cep}`)
}

if (dados.error) {
    return; 
}

setLogradouro(dados.dados.result.street); 
setBairro(dados.data.result.district); 
setCidade(dados.data.result.city)
setEstado(dados.data.result.state)
setUF(dados.data.result.stateShortname)

} catch (error) {
    console.log('Erro ao Buscar Cep');
}

buscarCEP(); 

}

[cep]); 


    return (

        <>
            <ScrollForm>
                <ContainerForm>
                    <BoxInput
                        textlabel='Informe o CEP'
                        placeholder='Cep...'
                        keyType='numeric'
                        editable={true}
                        maxLength={9}
                        fieldValue={cep}
                        onChangeText={(tx) => { setCep(tx) }}
                         
                        
                    />
                    <BoxInput
                        textlabel='Informe o Logradouro'
                        placeholder='Logradouro...'
                        editable={false}
                        fieldValue={logradouro}

                    />

                    <BoxInput
                        textlabel='Bairro'
                        placeholder='Bairro...'
                        editable={false}
                        fieldValue={bairro}

                    />
                    <BoxInput
                        textlabel='Cidade'
                        placeholder='Cidade...'
                        editable={false}
                        fieldValue={cidade}

                    />

                    <ContainerInput>
                        <BoxInput
                            textlabel='Estado'
                            placeholder='Estado...'
                            editable={false}
                            fieldWidth={60}
                            fieldValue={estado}

                        />
                        <BoxInput
                            textlabel='UF'
                            placeholder='UF...'
                            editable={false}
                            fieldWidth={30}
                            fieldValue={uf}

                        />
                    </ContainerInput>

                </ContainerForm>
            </ScrollForm>
        </>
    )

}