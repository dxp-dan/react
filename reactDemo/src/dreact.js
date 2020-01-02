import { createVdom } from './dvdom';

function createElement(type, props, ...children){
  // console.log(arguments);
  props.children = children;
  delete props.__source;
  delete props.__self;

  // type dom,函数式,class
  let vtype;
  if(typeof type === 'string'){
    //dom
    vtype = 1; 
  }else if(typeof type === 'function'){
    if(type.isClassComponent){
      vtype = 2;
    } else {
      vtype = 3;
    }
  }
  return createVdom(vtype, type, props);
}

export class Component {
  static isClassComponent = true;
  constructor(props){
    this.props = props;
    this.state={};
  }
  setState(state){}
};

export default {
  createElement,
};