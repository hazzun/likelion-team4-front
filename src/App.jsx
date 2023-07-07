import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/NavigationBar/Header";
import Mainpage from "./pages/Mainpage/Mainpage";
import AfterLike from "./pages/AfterLikePage/AfterLike";
import { useState } from "react";
import SidebarValue from "./SidebarValue";

function App() {
  const [openSidebar, setOpenSidebar] = useState(true);
  const handleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };
  return (
    <SidebarValue.Provider value={{ openSidebar, handleSidebar }}>
      <Header />
      <main id="main">
        <Routes>
          {/* 경로가 "/"이면 메인페이지 표시 */}
          <Route path="/" element={<Mainpage />}></Route>
          {/* 경로가 "/watch"이면 AfterLike 페이지 표시 */}
          <Route path="/watch" element={<AfterLike />}></Route>
        </Routes>
      </main>
    </SidebarValue.Provider>
  );
}

export default App;
