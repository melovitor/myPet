import { Loading } from "@components/Loading";
import { ButtonTypeStyleProps, Container, Title } from "./styles";
import { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps &{
    title: string;
    type?: ButtonTypeStyleProps;
    loading?: boolean
}
export function Button({title, type = 'PRIMARY',loading, ...rest }: Props){
    return (
        <Container type={type} {...rest}>
            {!loading ? 
                <Title type={type} >{title}</Title> : 
                <Loading type={type}/> 
            }
        </Container>
    )
}