import React from 'react'
import PropTypes from 'prop-types';

import { Container } from './styles'

export const Title = props => <Container>{props.title}</Container>

Title.defaultProps = {
  name: 'Título'
}

Title.propTypes = {
    title: PropTypes.string.isRequired
}
