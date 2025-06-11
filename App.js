// Move everything written within second scripts of index.html here and in the script add src pointing here

// element is a core thing of react. Hence it comes from the first library which is the core library.
// the curly braces are for giving attributes to the element

// created nested html structure

/**
 * <div id="parent">
 *      <div id="child">
 *          <h1></h1>
 *          <h2></h2>
 *      </div>
 *      <div id="child">
 *          <h1></h1>
 *          <h2></h2>
 *      </div>
 * </div>
 */

const heading1 = React.createElement("h1", {
    id: 'heading1',
    className: 'heading-class'
}, "Hello world from react");
// The first is the tag. Second is props. Third is children
// After the above statement, you need to tell react where to render this heading
// so we first create a root inside react where react can do all the DOM stuff

const heading2 = React.createElement("h1", {
    id: 'heading2',
    className: 'heading-class'
}, "I am heading 2");

const child = React.createElement('div', {id: 'child'}, [heading1, heading2])

const child2 = React.createElement('div', {id: 'child2'}, [heading1, heading2])
const parent = React.createElement('div', {id: 'parent'}, [child, child2]);



const parentX = React.createElement('div', {id: 'parent'}, [
    React.createElement('div', {id: 'child'}, [heading1, heading2]),
    React.createElement('div', {id: 'child2'}, [heading1, heading2])
]);


// dom is comes from the second library which is the react-dom library.
const root = ReactDOM.createRoot(document.getElementById('root'));

console.log(heading1) // shows you that heading is actually a react element and not an html element. a react element is a js object which browser understands
// root.render(heading1) // the render method takes a js object as an input and converts into a tag which can be put in the DOM

root.render(parent) // root.render always replaces anything that is already present