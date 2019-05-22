import styled from "styled-components"

export const Menu = styled.div`
    background: linear-gradient(180deg, #000000 0%, #B5B5B5 100%);
    width: 105px;
    height: 100%;
    text-align: center;
`

export const MenuLink = styled.li`
    color: #FFFFFF;
    padding: 12px 0 16px;
    transition: all .4s linear;
    &.active {
        background: rgba(255, 255, 255, 0.2);
    }
    &:hover {
        background: rgba(255, 255, 255, 0.2);
    }
`