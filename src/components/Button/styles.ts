import {TouchableOpacity} from 'react-native'
import styled, {css} from "styled-components/native";


export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
    type: ButtonTypeStyleProps;
}

export const Container = styled(TouchableOpacity)<Props>`
    flex: 1;
    min-height: 56px;
    max-height: 56px;
    background-color: ${({theme, type}) => type === 'PRIMARY' ? theme.COLORS.GREEN_700 : theme.COLORS.WHITE};
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    border-color:${({theme, type}) => type  === 'PRIMARY' ? theme.COLORS.GREEN_700 : theme.COLORS.GREEN_700};
    border-width: ${({type}) => type === 'SECONDARY' ? 2 : 0}px;
    margin-bottom: 8px;
`;



export const Title = styled.Text<Props>`
    ${({theme,type}) => css`
        font-size: ${theme.FONT_SIZE.MD}px;
        color: ${type === "PRIMARY" ? theme.COLORS.WHITE: theme.COLORS.GREEN_700};
        font-family: ${theme.FONT_FAMILY.REGULAR};
    `};    
`;