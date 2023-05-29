import { CaretRight, Password } from "phosphor-react-native";
import { Wrapper,Container, Title, SubTitle} from "./styles";
import { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps &{
    title: string;
    subTitle: string;
}
export function CardSettings({title, subTitle, ...rest }: Props){
    return (
        <Wrapper {...rest}>
            <Password weight="light"/>
            <Container>
                <Title >{title}</Title>
                <SubTitle >{subTitle}</SubTitle>
                
            </Container>
            <CaretRight weight="light" size={16}/>
        </Wrapper>
        
    )
}