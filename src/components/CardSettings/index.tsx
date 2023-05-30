import * as Icon from "phosphor-react-native";
import { Wrapper,Container, Title, SubTitle} from "./styles";
import { TouchableOpacityProps } from "react-native";
import { IconProps } from "@phosphor-icons/react";

type Props = TouchableOpacityProps &{
    title: string;
    subTitle: string;
    icon: IconProps
    
}

export function CardSettings({title, subTitle, icon,...rest }: Props, ){
    return (
        <Wrapper {...rest}>
            <>
                {icon}
            </>
            <Container>
                <Title >{title}</Title>
                <SubTitle >{subTitle}</SubTitle>
                
            </Container>
            <>
                {<Icon.CaretRight weight="light" size={16}/>} 
            </>
        </Wrapper>
        
    )
}