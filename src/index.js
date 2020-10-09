//export hi
import { sayHi } from './hi.js';
//import React
import React from 'react';
//import render method
import { render } from 'react-dom';

//use hi function
sayHi();

render('Hey there, Im react.js', document.getElementById('app'));
