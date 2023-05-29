import styled from "styled-components/native"
import { SafeAreaView } from "react-native-safe-area-context"

export const Container = styled(SafeAreaView)`
    flex: 1;
    padding: 24px;
    background-color: ${({theme}) =>  theme.COLORS.WHITE};
    justify-content: center;
`

export const Text = styled.Text`
    color: ${({theme}) =>  theme.COLORS.GRAY_400};
    text-align: center;
    margin-bottom: 24px;
    margin-top: 48px;
`