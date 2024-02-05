import { View } from "react-native";
import { BoxInput } from "../../components/BoxInput";
import { ContainerForm, ContainerInput, ScrollForm } from "./style";
import { useState } from "react";

export function Home() {
    // states - variáveis 
    const [cep, setCep] = useState('')
    const [logradouro, setLogradouro] = useState('')
    const [bairro, setBairro] = useState('')
    const [cidade, setCidade] = useState('')
    const [estado, setEstado] = useState('')
    const [uf, setUF] = useState('')

    // useEffect - funções 
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