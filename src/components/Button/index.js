import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { color } from './../../consts';

const ButtonItem = styled.button`
  width: 164px;
  height: 50px;
  background-color: ${color.orange};
  border: 0;
  border-radius: 3px;
  cursor: pointer;
  color: ${color.white};
  text-transform: ${props => (props.uppercase ? 'uppercase' : 'none')};
  margin: 2em auto;

  &:disabled {
    background-color: ${color.silver};
    color: ${color.black};
    cursor: default;
  }
`;

const Button = props => (
  <ButtonItem onClick={props.clickHandler} uppercase={props.uppercase} disabled={props.disabled}>
    {props.title}
  </ButtonItem>
);

export default Button;

Button.propTypes = {
  title: PropTypes.string.isRequired,
  uppercase: PropTypes.bool,
  disabled: PropTypes.bool,
  clickHandler: PropTypes.func.isRequired,
};

Button.defaultProps = {
  uppercase: false,
  disabled: false,
};
