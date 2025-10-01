import React from "react";
import { Routes, Route } from "react-router-dom";
import Hoomepage from "./pages/Homepage";
import Createpage from "./pages/Createpage";
import Detailpage from "./pages/Detailpage";

function App() {
  return (
    <>
      <div data-theme="forest">
        <Routes>
          <Route index element={<Hoomepage />} />
          <Route path="/create" element={<Createpage />} />
          <Route path="/note/:id" element={<Detailpage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
