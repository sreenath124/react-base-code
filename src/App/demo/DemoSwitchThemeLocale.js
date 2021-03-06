import React from 'react';
import PropTypes from 'prop-types';
import props from 'lodash/fp/props';
import compose from 'lodash/fp/compose';
import map from 'lodash/fp/map';

const DemoSwitchThemeLocale = ({
  heading,
  data,
  selectedId,
  onChange,
}) => {
  const getProps = props(['id', 'name']);

  // eslint-disable-next-line react/prop-types
  const listItem = (({ 0: id, 1: name }) => (
    <li key={id}>
      <button
        disabled={id === selectedId}
        onClick={() => onChange(id)}
      >
        {name}
      </button>
    </li>
  ));
  const getList = map(compose(listItem, getProps));

  return (
    <div>
      <h3>{heading}</h3>
      <ul>{getList(data)}</ul>
    </div>
  );
};

DemoSwitchThemeLocale.propTypes = {
  heading: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectedId: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default DemoSwitchThemeLocale;
