import { configure , shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


const fetchPolifill = require('whatwg-fetch');

global.fetch = fetchPolifill.fetch;

global.shallow = shallow;
global.render = render;
global.mount = mount;


console.error = message => {
  throw new Error(message);
};

configure({ adapter: new Adapter() });