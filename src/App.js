import React from "react";

import Navigation from "./components/navbar/Navigation";
import MyFooter from "./components/footer/MyFooter";
import Welcome from "./components/Welcome/Welcome";
import Books from "./components/AllBooks/AllTheBooks";

function App() {
  return (
    <div>
      <Navigation />
      <Welcome />
      <Books />

      <MyFooter />
    </div>
  );
}

export default App;
