import numeral from 'numeral';
import './index.css';
const money = numeral(1000).format('$0,0.00');
/* eslint-disable no-console */
console.log(`I would pay ${money} to the account holder`);
