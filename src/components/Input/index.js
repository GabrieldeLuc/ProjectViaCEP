import { InputText } from "./style"

export const Input = ({
    placeholder,
    editable,
    fieldValue,
    fieldWidth, 
    onChangeText,
    keyType,
    maxLentgh 
}) => {
    return (
        <InputText
        placeholder= {placeholder}
        editable={editable}
        keyboardType = {keyType}
        maxLentgh= {maxLentgh}
        value= {fieldValue}
        onChangeText= {onChangeText}
        fieldWidth={fieldWidth}
        />
        
    
    )
}