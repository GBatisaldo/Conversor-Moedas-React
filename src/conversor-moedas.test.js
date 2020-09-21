import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import ConversorMoedas from './conversor-moedas';

if('deve renderizar o componete sem erros', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ConversorMoedas />, div);
  ReactDOM.unmountComponentAtNode(div);
});
