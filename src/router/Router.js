import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "../page/Detail";
import Main from "../page/Main";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<login />} /> */}
        <Route path="/main" element={<Main />} />
        <Route path="/Detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
