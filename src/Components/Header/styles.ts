import styled from 'styled-components';

export const Container = styled.div`
    background-color: red;
    height: 90px;
`;



export const ListItem= styled.li<{active: boolean}>`
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${(Props) => Props.active? '#fff' : '#333'};
`;
