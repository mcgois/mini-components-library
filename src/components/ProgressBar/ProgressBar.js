/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    height: '8px',
    padding: '0px',
    radius: '0px'
  },
  medium: {
    height: '12px',
    padding: '0px',
    radius: '0px'
  },
  large: {
    height: '16px',
    padding: '8px',
    radius: '8px'
  }
}

const ProgressBar = ({ value, size }) => {
  const styles = STYLES[size];

  return (
    <Wrapper role="progressbar" aria-valuenow={value} aria-valuemin="0" aria-valuemax="100" style={{'--padding': styles.padding, '--radius': styles.radius}}>
      <VisuallyHidden>{value}</VisuallyHidden>
      <BarLimit>
        <Bar style={{'--width': value + '%', '--height': styles.height}} />
      </BarLimit>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: var(--radius);
  padding: var(--padding);
`;

const BarLimit = styled.div`
  border-radius: 4px;
  overflow: hidden;
`;

const Bar = styled.div`
  width: var(--width);
  height: var(--height);
  background-color: ${COLORS.primary};
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
`;

export default ProgressBar;
