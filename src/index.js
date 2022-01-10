//webpack tutorial
/*jshint esversion: 6 */

import _ from 'lodash';
import './style.css';

function component(){
    const element = document.createElement('div');
//lodash is now imported by this script 
    element.innerHTML = _.join(['Hello', 'webpack'],' ');
    element.classList.add('hello');
    return element;
}

document.body.appendChild(component());
