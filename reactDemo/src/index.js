import React, { Component } from './dreact';
import ReactDom from './dreact-dom.js';

function Comp(props){
  return <h2>函数组件, {props.name}</h2>
}

class Comp2 extends Component {
  render(){
    return <h2>class组件</h2>
  }
}
const users = [
  {name:'Tony', id: 1}
];
const jsx = (
  <div id="demo" style="color: red">
    <span>h1</span>
      <Comp name='dxp' />
      <Comp2></Comp2>
      <ul>
        {users.map(user=><li key={user.id}>{user.name}</li>)}
      </ul>
  </div>
)

console.log(jsx);

ReactDom.render(
  jsx,
  document.getElementById('root')
);
