import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../constants';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    fontSize: 14,
    iconSize: 16,
    borderThickness: 1,
    height: 24
  },
  large: {
    fontSize: 18,
    iconSize: 24,
    borderThickness: 2,
    height: 36
  }
}

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  const styles = STYLES[size];
  return <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper style={{'--size': styles.iconSize + 'px'}}><Icon id={icon} strokeWidth={1} size={styles.iconSize} /></IconWrapper>
      <TextInput type="text" placeholder={placeholder} style={{'--width': width + 'px', '--font-size': styles.fontSize + 'px', '--height': styles.height + 'px', '--border-thickness': styles.borderThickness + 'px'}} />
    </Wrapper>;
};

const Wrapper = styled.label`
  position: relative;
  display: block;
  color: ${COLORS.gray700};
  &:hover {
    color: black;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: var(--size);
  height: var(--size);
  margin: auto 0;
  pointer-events: none;
`;

const TextInput = styled.input`
  border: none;
  height: var(--height);
  width: var(--width);
  border-bottom: var(--border-thickness) solid black;
  font-weight: 700;
  font-size: var(--font-size);
  padding-left: var(--height);
  outline-offset: 2px;
  color: inherit;

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }

`;



export default IconInput;
