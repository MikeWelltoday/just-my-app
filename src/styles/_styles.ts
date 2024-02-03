import styled from 'styled-components'

const NavWrapper = styled.div`

    text-align: center;
    display: block;
    margin-bottom: 20px;
   
    color: black;

    &:last-child {
        margin-bottom: 0;
    }
    
    a {
        text-decoration: none;
        &.active {
            color: orange;
        }
    }
    
`

export const s = {
    NavWrapper
}