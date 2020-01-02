export function initVdom(vdom){
  const { vtype } = vdom;
  if(!vtype){
    //文本元素 TextNode
    return document.createTextNode(vdom);
  }
  if(vtype === 1){
    return createElement(vdom);
  } else if(vtype === 2){
    return createClassComp(vdom);
  } else {
    return createFuncComp(vdom)
  }
}

function createElement(vdom){
  const { type, props } = vdom;
  const dom = document.createElement(type);
  const { key, children, ...rest } = props;
  Object.keys(rest).forEach(attr=>{
    //处理属性 for class
    if(attr==='className'){
      dom.setAttribute('class', rest[attr])
    } else {
      dom.setAttribute(attr, rest[attr]);
    }
  });
  children.forEach(c=>{
    if(Array.isArray(c)){
      c.forEach(n=>dom.appendChild(initVdom(n)))
    } else {
      dom.appendChild(initVdom(c));
    }
  })
  return dom;
}

function createClassComp(vdom){
  const { type, props } = vdom;
  const component = new type(props);
  //执行class组件的render
  const newDom = component.render();
  return initVdom(newDom);
}

function createFuncComp(vdom){
  const { type, props } = vdom;
  const newDom = type(props);
  return initVdom(newDom);
}

export function createVdom(vtype, type, props){
  const vdom = {
    vtype, type, props
  }
  return vdom;
}