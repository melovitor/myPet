import styled from "styled-components/native";

export type LoadingTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
    type: LoadingTypeStyleProps;
}

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: transparent;
`

export const LoadIndicator = styled.ActivityIndicator.attrs<Props>(({theme, type}) => ({
    color: type === 'PRIMARY' ? theme.COLORS.WHITE : theme.COLORS.GREEN_700
}))<Props>``