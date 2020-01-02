import { initVdom } from './dvdom';
function render(vdom, container){
  console.log('initVdom(vdom)', initVdom(vdom));
  container.appendChild(initVdom(vdom));
}

export default { render };