import React from 'react';
import reactCSS from 'reactcss';
import {
  compose,
  setDisplayName,
  withProps,
} from 'recompose';

const stylesheet = () => reactCSS({
  default: {
    root: {
      color: '#596e78',
      display: 'block',
      marginBottom: 10,
      fontSize: 12,
      fontWeight: 600,
      cursor: 'pointer',
    },
  },
});

export const PureLabel = ({
  styles,
  children,
  htmlFor,
}) => (
  <label
    style={styles.root}
    htmlFor={htmlFor}
  >
    {children}
  </label>
);

export const enhance = compose(
  setDisplayName('Label'),
  withProps((ownerProps) => ({
    styles: stylesheet(ownerProps),
  })),
);

export default enhance(PureLabel);
