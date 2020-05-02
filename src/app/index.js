import React from 'react';
import { render } from 'react-dom';
import App from './App';

// Только здесь используется document.getElementById -
// больше нигде не должно быть вызовов document. или window.
render(<App/>, document.getElementById('root'));
