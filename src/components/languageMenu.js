import React, { useState } from 'react';
import Select from '@material-ui/core/Select';
import { MenuItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';

import brLogo from 'images/br.png';
import enLogo from 'images/en.png';

const useStyles = makeStyles({
  selectFocus: {
    '&:focus': {
      background: 'transparent',
    },
  },
});

const LanguageMenu = (props) => {
  const { i18n } = useTranslation();
  const classes = useStyles();

  const [values, setValues] = useState({
    language: 'pt-BR',
  });

  function handleChange(event) {
    i18n.changeLanguage(event.target.value);

    setValues((oldValues) => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
  }

  return (
    <Select
      value={values.language}
      onChange={(e) => handleChange(e)}
      disableUnderline
      inputProps={{
        name: 'language',
      }}
      classes={{
        select: classes.selectFocus,
      }}
      style={{ paddingLeft: 20 }}
    >
      <MenuItem value={'pt-BR'}>
        <img src={brLogo} alt="PT" style={{ height: 50 }} />
      </MenuItem>
      <MenuItem value={'en'}>
        <img src={enLogo} alt="EN" style={{ height: 50 }} />
      </MenuItem>
    </Select>
  );
};

export default LanguageMenu;
