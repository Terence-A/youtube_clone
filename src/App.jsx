import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import FullSidebar from "./components/FullSidebar";
import QuickCategories from "./components/QuickCategories";
import SmallCard from "./components/SmallCard";

function App() {
  const [showFullSidebar, setShowFullSidebar] = useState(false);

  const handleSidebar = () => {
    setShowFullSidebar(!showFullSidebar);
  };

  return (
    <>
      <Header showSidebar={handleSidebar} />
      <main className="flex">
        <section className="pl-2">
          {!showFullSidebar ? <Sidebar /> : <FullSidebar />}
        </section>
        <section className="flex flex-col">
          <QuickCategories />
          <SmallCard />
        </section>
      </main>
    </>
  );
}

export default App;
