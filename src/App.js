import React from "react";
import Footer from "./components/footer/Footer";
import TopNavigation from "./components/topNavigation/TopNavigation";
import { BrowserRouter } from "react-router-dom"
import AppRouter from "./router/AppRouter";


function App() {
  return (
    <div>

      <BrowserRouter>
        <TopNavigation />
        <AppRouter />
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
