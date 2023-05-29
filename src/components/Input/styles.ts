import { TextInput } from "react-native";
import styled, {css} from "styled-components/native";

export const Container = styled(TextInput)`
    ${({theme})=> css`
        flex: 1;
        min-height: 56px;
        max-height: 56px;
        background-color: ${theme.COLORS.GRAY_100};
        color: ${theme.COLORS.GRAY_700};
        border-radius: 10px;
        padding: 16px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.MD}px;
        margin-bottom: 8px;
    `}

`