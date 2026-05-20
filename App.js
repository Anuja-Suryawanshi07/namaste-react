//const heading = React.createElement("h1", {id: "heading"}, "Hello world from React!");

//console.log(heading);
/* What React.createElement do?
    React.createElement("h1", {id: "heading"}, "Hello world from React!");
 This console.log(heading) gives us a "Object."
That Means whenever we are creating react element we are creating Javascript Object.
And these are ("h1", {id: "heading"}, "Hello world from React!") the "props" of that object.
something like that. 
props: 
    children: "Hello world from React!"
    id: "heading"
[[Prototype]]: Object
ref: null
type: "h1"
_owner: null 
*/
//const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(heading);
// .render method takes an "heading" Object and convert 
// it in to a h1 html node.

/* How to create this structure in React.
    <div id="parent">
        <div id="child">
            <h1>I'm h1 tag</h1>
        </div>
    </div>
*/
/* How to create this structure in React.
    <div id="parent">
        <div id="child">
            <h1>I'm h1 tag</h1>
            <h2>I'm h2 tag</h2>
        </div>
    </div>
Note: when we have to create a siblings in React we have to
take a third parameter as an array.
eg.

const parent = React.createElement("div",{ id:"parent" },
     React.createElement("div", { id:"child" },
     [React.createElement("h1",{}, "I'm a h1 tag"),
      React.createElement("h2",{}, "I'm a h2 tag")]  
    )
);




const parent = React.createElement("div",{ id:"parent" },
     React.createElement("div", { id:"child" },
     React.createElement("h1",{}, "I'm a h1 tag")
    )
);
console.log(parent); //Object

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
*/
/*
How to create this structure in React.
    <div id="parent">
        <div id="child1">
            <h1>I'm child1 h1 tag</h1>
            <h2>I'm child1 h2 tag</h2>
        </div>
        <div id="child2">
            <h1>I'm child2 h1 tag</h1>
            <h2>I'm child2 h2 tag</h2>
        </div>
    </div>
    ***ReactElement(Object) => HTML(Browser Understands)
*/
    const parent = React.createElement("div",{ id:"parent" },[
     React.createElement("div", { id:"child1" },[
     React.createElement("h1",{}, "I'm child1 h1 tag"),
      React.createElement("h2",{}, "I'm child1 h2 tag")
      ]),
     React.createElement("div", { id:"child2" },[
     React.createElement("h1",{}, "I'm child2 h1 tag"),
      React.createElement("h2",{}, "I'm child2 h2 tag")
      ]),  
]);

console.log(parent); //Object

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

// JSX comes in a picture over here to avoid 
// the complex createElement mess.

/*
Notes: Cross Origin?
"crossorigin is an HTML attribute used when loading resources from another domain. 
It helps the browser handle cross-origin requests properly and provides better error reporting and security handling."

Even shorter version:
"crossorigin allows external resources like CDN scripts to be loaded securely from another origin."

For React-specific context:
"In React CDN setup, crossorigin is used so the browser can load React files from another domain and show proper error messages."

*/

