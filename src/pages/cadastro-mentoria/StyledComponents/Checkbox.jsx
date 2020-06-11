import { func, string } from 'prop-types';
import React from 'react';

import ContainerCheckbox from './ContainerCheckbox';


const Checkbox = ({ label, name, value, onChange }) => (
  <ContainerCheckbox>
    <input type="checkbox" id={value} value={value} onChange={onChange} />
    <ContainerCheckbox.Label htmlFor={value}>{label}</ContainerCheckbox.Label>
  </ContainerCheckbox>
);

Checkbox.propTypes = {
  label: string,
  value: string,
  onChange: func,
};

Checkbox.defaultProps = {
  label: string,
  value: string,
  onChange: () => {},
};

export default Checkbox;
