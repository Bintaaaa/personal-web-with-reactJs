import React from "react";
import Analisyst from "./components/analisyst/Analisyst";
import Service from "./components/service/Service";
import TopBanner from "./components/topBanner/TopBanner";
import TopNavigation from "./components/topNavigation/TopNavigation";
function App() {
  return (
    <div>
      <TopNavigation />
      <TopBanner />
      <Service />
      <Analisyst />
    </div>
  );
}

export default App;
