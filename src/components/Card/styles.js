import styled from "styled-components"

export const Container = styled.div`
    background: #FFFFFF;
    box-shadow: 1px 1px 1px #D8DDE6
    border: 1px solid #D8DDE6;
    max-width: 437px;
    min-width: 437px;
    min-height: 358px;
    padding: 21px 14px 36px;
    &.double {
        max-width: 869px;
    }
    & + div {
        margin-left: 55px;
    }
`

export const Title = styled.h2`
    font-size: 14px;
    font-weight: 600;
    line-height: 28px;
    text-transform: uppercase;
    color: #035A27;
`