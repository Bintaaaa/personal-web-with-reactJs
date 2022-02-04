import React from "react";
import Analisyst from "./components/analisyst/Analisyst";
import Service from "./components/service/Service";
import Summery from "./components/summery/Summery";
import TopBanner from "./components/topBanner/TopBanner";
import TopNavigation from "./components/topNavigation/TopNavigation";
function App() {
  return (
    <div>
      <TopNavigation />
      <TopBanner />
      <Service />
      <Analisyst />
      <Summery />
    </div>
  );
}

export default App;
