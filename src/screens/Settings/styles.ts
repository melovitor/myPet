import styled from "styled-components/native"
import { SafeAreaView } from "react-native-safe-area-context"

export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color:${({theme}) =>  theme.COLORS.WHITE} ;
`

export const Text = styled.Text`
    color: ${({theme}) =>  theme.COLORS.GRAY_400};
    text-align: center;
    margin: 32px;
    font-size: ${({theme}) =>  theme.FONT_SIZE.MD}px;
`