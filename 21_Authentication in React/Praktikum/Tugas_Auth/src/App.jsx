import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import LandingPage from "./pages/LandingPage/LandingPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import CreateProduct from "./pages/CreateProduct/CreateProduct";
import DataProduct from "./pages/DataProduct/DataProduct";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import "bootstrap/dist/css/bootstrap.min.css";
import store from "./redux/store/store";

function App() {
  const [datas, setDatas] = useState([]);

  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/LoginPage" element={<LoginPage />} />
          <Route
            path="/CreateProduct"
            element={<CreateProduct setData={setDatas} />}
          />
          <Route
            exact
            path="/DataProduct/:id"
            element={<DataProduct product={datas} />}
          />
          {/* <Route
            path="/CreateProduct"
            element={<CreateProduct setData={setDatas} />}
          /> */}
          {/* <Route
            exact
            path="/DataProduct/:id"
            element={<DataProduct product={datas} />}
          /> */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
