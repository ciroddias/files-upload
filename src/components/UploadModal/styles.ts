import styled from "styled-components";

export const Container = styled.div`
    background-color: ${props => props.theme.colors.cardBackground};
    position: absolute;
    width: 20rem;
    bottom: 2rem;
    right: 2rem;
    display: flex;
    text-align: center;
    justify-content: space-between;
    border-radius: 2rem;
    padding: 2rem;
    
    ::shadow {
        
    }
`