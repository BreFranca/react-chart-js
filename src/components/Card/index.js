import React from "react"

import { Container, Title } from "./styles"

export const Card = (props) => (
    <Container className={props.className}>
        <Title>{props.title}</Title>
        {props.children}
    </Container>
)