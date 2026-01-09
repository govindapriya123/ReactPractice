import { useState } from "react";
import { Tabs } from "./components/Tabs";
function App() {
  const tabDetails = [{title:"Home",content:<p>HomeContent</p>}, {title:"Messages",content:<p>Messages Content</p>}, {title:"Communication",content:<p>Communication Contnet</p>}];
  return (
    <div style={{
    position: "relative", height: "100vh"
  }}>
   
      <Tabs tabs={tabDetails} />
    </div>
  );
}

export default App;
