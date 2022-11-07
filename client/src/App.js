import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import { setPortfolioData, showLoading,hideLoading, reloadData } from "./redux/rootSlice";

import { useDispatch, useSelector } from "react-redux";
import Home from "./pages/Home/Home";
import Loader from "./components/Loader";
import Admin from "./pages/Admin";
import Login from "./pages/Admin/Login";

function App() {
  const { loading, portfolioData , reloadData} = useSelector((state) => state.root);
  const dispatch = useDispatch();
  const getPorftfolioData = async () => {
    try {
      dispatch(showLoading());
      const response = await axios.get("/api/portfolio/get-portfolio-data");
      dispatch(setPortfolioData(response.data));
      dispatch(reloadData(false));
      dispatch(hideLoading());
    } catch (error) {
      dispatch(hideLoading());
    }
  };

  useEffect(() => {
    if (!portfolioData) getPorftfolioData();
  }, [portfolioData]);

  useEffect(() => {
    if (reloadData) {
      getPorftfolioData();
    }
  }, [reloadData]);

  return (
    <BrowserRouter>
      {loading ? <Loader /> : null}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin-login" element={<Login />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
