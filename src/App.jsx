import React,{ lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";
//import Grocery from "./components/Grocery";
import UserContext from "./utils/UserContext";

/* Code Splitting/ Lazy loading of Grocery component. */
const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {

  const [userName, setUserName] = useState();
  //Authentication Logic

  useEffect(() => {
    //Make an API call & send UserName & Password.
    const data = {
      name: "Anuja Surya"
    };
    setUserName(data.name);
  },[]);

  // To pass the information throughout App we use context Provider.
  return (
    // Nested UserContext Provider
    <UserContext.Provider value = {{loggedInUser : userName, setUserName }}>
      <div className="app">
        <UserContext.Provider value = {{loggedInUser : "Aarush"}}>
        <Header />
        </UserContext.Provider>
        <Outlet />
        <Footer />
      </div>
    </UserContext.Provider>
  );
};


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
        {
            path: "/",
            element: <Body />

        },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<Shimmer/>}><Grocery /></Suspense>,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

// function App() {
//     return (
//         <div>
//             <Header />
//         </div>
//     );
// }
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);

// JSX (transpiled before it reaches the JS) - Parcel - Babel

// JSX => Babel transpiles it to React.createElement => ReactElement- JS Object => HTMLElement(render)

// const jsxHeading = <h1 className="head" tabIndex="5">Namaste React using JSX 😊</h1>;

// console.log(jsxHeading);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxHeading);
/*
// React Element
const heading = (<h1 className="head">Namste React using JSX! 🚀</h1>);

// React functinal Component
const HeadingComponent = () => (
    <h1 className="head">Namaste React functional component! 😊</h1>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);

Note: we can write functional component in this way also;

const FunctionalComponent = () => {
    return <h1 className="head"> 
    Another way to write functional component!!
    </h1>; 
    }



// React Component Composition(component within component)

const Title = () => (
    <h1 className="title">I am Title Component !🤷‍♀️</h1>
);

const FunctionalComponent = () => {
    return <h1 className="head"> 
    Another way to write functional component!!
    </h1>; 
    }

const HeadingComponent = () => (
    <div className="container">
        <Title />
        <FunctionalComponent />
        <h1 className="head">
        I am Heading Component !🚀
        </h1>
    </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
*/

/* Create a Nested header Element using React.createElement(h1,h2,h3 inside a
div with class “title”)
○ Create the same element using JSX
○ Create a functional component of the same with JSX
○ Pass attributes into the tag in JSX
○ Composition of Component(Add a component inside another)
○ {TitleComponent} vs {<TitleComponent/>} vs
{<TitleComponent></TitleComponent>} in JSX
*/

// const header = React.createElement("div", {},
//     [ React.createElement("h1", {id:"first"},
//         "I am H1 inside Div."),

//       React.createElement("h2",{id:"second"},
//         "I am H2 inside Div."),

//       React.createElement("h3",{id:"third"},
//         "I am H3 inside Div.")
//     ])
//     const root = ReactDOM.createRoot(document.getElementById("root"));
//     root.render(header);
//     console.log(header);

/* React Element

const header = (<div className="title">
    <h1 className="first">"I am h1 inside div."</h1>
    <h2 className="second">"I am h2 inside div."</h2>
    <h3 className="third">"I am h3 inside div."</h3>
</div>);
const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(header);
  console.log(header);
 */
/*
// Component composition
const Title = () => (
    <h1 className="head">"Component composition!"🚀</h1>
);  

const Header = () => (
    <div id="Container">
        <Title />
        <h1 className="head">"This is Header Component with Component Composition!" </h1>
    </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);
 
/*Create a Header Component from scratch using Functional Components with
JSX
○ Add a Logo on left
○ Add a search bar in middle
○ Add User icon on right
○ Add CSS to make it look nice
 */
