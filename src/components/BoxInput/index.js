import { Input } from "../Input"
import { Label } from "../Label"
import { FieldContent } from "./style"

export const BoxInput = ({
    fieldWidth = 100,
    editable = false,
    textlabel,
    placeholder,
    fieldValue = null,
    onChangeText = null,
    keyType = 'default',
    maxLength
}) => {

    return (
        <FieldContent fieldWidth={fieldWidth}>
            <Label textlabel={textlabel} />


            <Input
                editable={editable}
                placeholder={placeholder}
                keyType={keyType}
                maxLentgh={maxLength}
                value={fieldValue}
                onChangeText={onChangeText}
          
            />

            

        </FieldContent>
    )
}

