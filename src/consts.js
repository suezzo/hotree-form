import PropTypes from 'prop-types';

export const color = {
  black: '#000',
  white: '#fff',
  blue: '#355990',
  silver: '#d8d8da',
  sundownRed: '#ffb2b2',
  whiteIceGreen: '#f0fcf3',
  orange: '#ff8e1d',
  green: '#7cc580',
  red: '#FF0000',
};

export const headerWidth = '79px';
export const headerBgColor = color.blue;
export const headerBorderColor = '#1e3b68';

export const inputMaxLength = 140;

export const messageBgColor = {
  success: color.whiteIceGreen,
  error: color.sundownRed,
};

export const dataFieldPropType = PropTypes.shape({
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  type: PropTypes.string,
  status: PropTypes.bool,
});

// ACTIONS
export const LOAD_CATEGORIES_START = 'LOAD_CATEGORIES_START';
export const LOAD_CATEGORIES_SUCCESS = 'LOAD_CATEGORIES_SUCCESS';
export const LOAD_CATEGORIES_FAILURE = 'LOAD_CATEGORIES_FAILURE';

export const LOAD_EMPLOYEES_START = 'LOAD_EMPLOYEES_START';
export const LOAD_EMPLOYEES_SUCCESS = 'LOAD_EMPLOYEES_SUCCESS';
export const LOAD_EMPLOYEES_FAILURE = 'LOAD_EMPLOYEES_FAILURE';

export const SET_DATA = 'SET_DATA';

export const SUBMIT_FORM_START = 'SUBMIT_FORM_START';
export const SUBMIT_FORM_SUCCESS = 'SUBMIT_FORM_SUCCESS';
export const SUBMIT_FORM_FAILURE = 'SUBMIT_FORM_FAILURE';
