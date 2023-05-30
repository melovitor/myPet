import {TouchableOpacity} from 'react-native'
import { Svg } from 'react-native-svg';
import styled, {css} from "styled-components/native";


export const Wrapper = styled(TouchableOpacity)`
    flex: 1;
    height: 100%;
    max-height: 64px;
    background-color: ${({theme}) => theme.COLORS.WHITE};
    justify-content: center;
    align-items: center;
    border-color:${({theme}) => theme.COLORS.GRAY_100};
    border-width: 1px;
    flex-direction: row;
    padding: 16px;
    
`;

export const Container = styled.View`
    flex: 1;
    align-items: flex-start;
    padding-left: 16px;
    
`;

export const Title = styled.Text`
    ${({theme}) => css`
        font-size: ${theme.FONT_SIZE.MD}px;
        color: ${theme.COLORS.GRAY_600};
        font-family: ${theme.FONT_FAMILY.BOLD};
    `};    
`;

export const SubTitle = styled.Text`
    ${({theme}) => css`
        font-size: ${theme.FONT_SIZE.SM}px;
        color: ${theme.COLORS.GRAY_300};
        font-family: ${theme.FONT_FAMILY.REGULAR};
    `};    
`;

