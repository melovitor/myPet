import styled from "styled-components/native"

export const Container = styled.View`
    flex: 1;
    align-items: flex-start;
    margin-bottom: 48px;
`

export const Title = styled.Text`
    font-size: ${({theme}) =>  theme.FONT_SIZE.XXL}px;
    font-family: ${({theme}) =>  theme.FONT_FAMILY.BOLD};
    color: ${({theme}) =>  theme.COLORS.GRAY_700};

`
export const SubTitle = styled.Text`
    font-size: ${({theme}) =>  theme.FONT_SIZE.SM}px;
    color: ${({theme}) =>  theme.COLORS.GRAY_400};
    font-family: ${({theme}) =>  theme.FONT_FAMILY.REGULAR};

`