import React from "react";
import ReactDOM from "react-dom/client";
//import Header from "./Header";

const resList = [
  {
    id: 1,
    resName: "Chinese Wok",
    cuisine: "Chinese, Asian",
    rating: "4.4",
    deliveryTime: "30 mins",
    image:
      "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 2,
    resName: "Pizza Hut",
    cuisine: "Pizza, Fast Food",
    rating: "4.2",
    deliveryTime: "25 mins",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591",
  },
  {
    id: 3,
    resName: "Burger King",
    cuisine: "Burgers, American",
    rating: "4.1",
    deliveryTime: "28 mins",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
  },
  {
    id: 4,
    resName: "Biryani House",
    cuisine: "Biryani, North Indian",
    rating: "4.5",
    deliveryTime: "35 mins",
    image: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a",
  },
  {
    id: 5,
    resName: "Domino's Pizza",
    cuisine: "Pizza, Italian",
    rating: "4.3",
    deliveryTime: "30 mins",
    image: "https://images.unsplash.com/photo-1594007654729-407eedc4be65",
  },
  {
    id: 6,
    resName: "KFC",
    cuisine: "Fried Chicken, Fast Food",
    rating: "4.0",
    deliveryTime: "27 mins",
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec",
  },
  {
    id: 7,
    resName: "Tandoori Treat",
    cuisine: "North Indian, Mughlai",
    rating: "4.6",
    deliveryTime: "40 mins",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
  },
  {
    id: 8,
    resName: "South Spice",
    cuisine: "South Indian",
    rating: "4.3",
    deliveryTime: "22 mins",
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0",
  },
  {
    id: 9,
    resName: "Cafe Mocha",
    cuisine: "Cafe, Beverages",
    rating: "4.5",
    deliveryTime: "20 mins",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5",
  },
  {
    id: 10,
    resName: "Sweet Tooth",
    cuisine: "Desserts, Ice Cream",
    rating: "4.7",
    deliveryTime: "18 mins",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb",
  },
  {
    id: 11,
    resName: "Pasta Palace",
    cuisine: "Italian, Pasta",
    rating: "4.5",
    deliveryTime: "32 mins",
    image:
      "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=1000&auto=format&fit=crop",
  },

  {
    id: 12,
    resName: "Bombay Biryani",
    cuisine: "Biryani, Mughlai",
    rating: "4.6",
    deliveryTime: "38 mins",
    image:
      "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?q=80&w=1000&auto=format&fit=crop",
  },

  {
    id: 13,
    resName: "Street Spice",
    cuisine: "Street Food, Indian",
    rating: "4.3",
    deliveryTime: "24 mins",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop",
  },

  {
    id: 14,
    resName: "Sushi Wave",
    cuisine: "Japanese, Sushi",
    rating: "4.7",
    deliveryTime: "40 mins",
    image:
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=1000&auto=format&fit=crop",
  },

  {
    id: 15,
    resName: "Taco Fiesta",
    cuisine: "Mexican, Fast Food",
    rating: "4.2",
    deliveryTime: "26 mins",
    image:
      "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?q=80&w=1000&auto=format&fit=crop",
  },

  {
    id: 16,
    resName: "Punjabi Dhaba",
    cuisine: "Punjabi, North Indian",
    rating: "4.8",
    deliveryTime: "35 mins",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1000&auto=format&fit=crop",
  },

  {
    id: 17,
    resName: "Healthy Bowl",
    cuisine: "Salads, Healthy Food",
    rating: "4.4",
    deliveryTime: "20 mins",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1000&auto=format&fit=crop",
  },

  {
    id: 18,
    resName: "The Dessert Hub",
    cuisine: "Desserts, Bakery",
    rating: "4.9",
    deliveryTime: "18 mins",
    image:
      "https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=1000&auto=format&fit=crop",
  },
];

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://static.vecteezy.com/system/resources/thumbnails/037/219/954/small_2x/man-chef-character-for-business-logo-free-png.png"
        />
        <div className="app-name">npmEats</div>
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search-container">
        <input
          type="text"
          className="search-bar"
          placeholder="Search Here..."
        />
      </div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const { resData } = props;
  const { resName, cuisine, rating, deliveryTime, image } = resData;
  //console.log(props);
  return (
    <div className="res-card">
      <img className="res-logo" alt="res-logo" src={image} />
      <div className="description">
        <h2>{resName}</h2>
        <h4>{cuisine}</h4>
        <h4>Avg Rating: {rating}</h4>
        <h4>Deliver in: {deliveryTime}</h4>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-logo">
        <div className="logo-name">
          <img
            className="logoimg"
            src="https://static.vecteezy.com/system/resources/thumbnails/037/219/954/small_2x/man-chef-character-for-business-logo-free-png.png"
          />
          <div className="footer-name">npmEats</div>
        </div>
        <div className="copyright">© 2026 npmEats Limited </div>
      </div>

      <div className="company">
        {" "}
        Company
        <ul className="company-content">
          <li>About Us</li>
          <li>npm corporate</li>
          <li>Careers</li>
          <li>Team</li>
        </ul>
      </div>
      <div className="contact">
        Contact Us
        <ul className="contact-details">
          <li>Help & Support</li>
          <li>Partner with us</li>
          <li>Ride with us</li>
        </ul>
      </div>
      <div className="available">
        Available in
        <ul className="city-list">
          <li>Mumbai</li>
          <li>Pune</li>
        </ul>
        <span className="social-links">
          Social Links
          <div className="social-icons">
            <img
              className="social-icon"
              src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
            />
            <img
              className="social-icon"
              src="https://cdn-icons-png.flaticon.com/512/733/733558.png"
            />
            <img
              className="social-icon"
              src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
            />
          </div>
        </span>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

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
