import React from "react";
import Service from "./components/service/Service";
import TopBanner from "./components/topBanner/TopBanner";
import TopNavigation from "./components/topNavigation/TopNavigation";
function App() {
  return (
    <div>
      <TopNavigation />
      <TopBanner />
      <Service />
    </div>
  );
}

export default App;
