import { Container, LoadIndicator, LoadingTypeStyleProps } from "./styles";

type Props = {
    type: LoadingTypeStyleProps;
}

export function Loading({type}:Props ) {
    return(
        <Container >
            <LoadIndicator type={type}/>
        </Container>

    )
}