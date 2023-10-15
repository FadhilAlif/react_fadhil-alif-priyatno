import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChatAI from "./Pages/ChatAI/ChatAI";
import ImageAI from "./Pages/ImageAI/ImageAI";
import QuestionAnswerAI from "./Pages/QuestionAnswerAI/QuestionAnswerAI";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ChatBot" element={<ChatAI />} />
          <Route path="/ImageAI" element={<ImageAI />} />
          <Route path="/QnA" element={<QuestionAnswerAI />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
