import { useState } from "react";
import Logo from "../../assets/bootstrap-logo.png"
import article from "../../Article";

const Title = () => {
  const [title, setTitle] = useState(article.title.en);
  const [desc, setDesc] = useState(article.description.en);

  const handleBahasa = () => {
    setTitle(title === article.title.en ? article.title.id : article.title.en);
    setDesc(
      desc === article.description.en
        ? article.description.id
        : article.description.en
    );
  };
  return (
    <div className="main row justify-content-center mt-5">
      <div className="col-md-8">
        {/* Title */}
        <section
          id="title"
          className="pt-4 d-flex flex-column justify-content-center align-items-center"
        >
          <a className="navbar-brand" href="#">
            <img src={Logo} alt="Logo Bootstrap" />
          </a>
          <h1 className="text-center pt-2">
            {title === article.title.en ? article.title.id : article.title.en}
          </h1>
          <p className="text-center lead pt-1">
            {desc === article.description.en
              ? article.description.id
              : article.description.en}
          </p>
          <button className="btn btn-primary" onClick={handleBahasa}>
            <i className="bi bi-translate "></i>
          </button>
        </section>
      </div>
    </div>
  );
};

export default Title;
