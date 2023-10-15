import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <main className="container">
        <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
          <h1 className="display-5 fw-normal text-body-emphasis">My Open AI</h1>
          <p className="fs-5 text-body-secondary">
            A website equipped with various Artificial Intelligence (AI) tools
            that can assist users in various tasks
          </p>
        </div>
        <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
          <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm">
              <div className="card-header py-3 text-bg-primary border-primary">
                <h4 className="my-0 fw-normal">Chat Bot</h4>
              </div>
              <div className="card-body">
                <h2 className="card-title pricing-card-title">
                  Interactive Chatbot
                </h2>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>Real-time conversation</li>
                  <li>Quick responses to queries</li>
                  <li>Personalized interaction</li>
                </ul>
                <Link to="/ChatBot">
                  <button
                    type="button"
                    className="w-100 btn btn-lg btn-primary"
                  >
                    Get started
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm">
              <div className="card-header py-3 text-bg-primary border-primary">
                <h4 className="my-0 fw-normal">Q&A Bot</h4>
              </div>
              <div className="card-body">
                <h2 className="card-title pricing-card-title">
                  Question & Answer
                </h2>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>Ask questions, get answers</li>
                  <li>Accurate information retrieval</li>
                  <li>Knowledge at your fingertips</li>
                </ul>
                <Link to="/QnA">
                  <button
                    type="button"
                    className="w-100 btn btn-lg btn-primary"
                  >
                    Get started
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm">
              <div className="card-header py-3 text-bg-primary border-primary">
                <h4 className="my-0 fw-normal">Image Bot</h4>
              </div>
              <div className="card-body">
                <h2 className="card-title pricing-card-title">
                  Image Generation Bot
                </h2>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>Create unique images</li>
                  <li>Customizable image generation</li>
                  <li>Artistic and creative solutions</li>
                </ul>
                <Link to="/ImageAI">
                  <button
                    type="button"
                    className="w-100 btn btn-lg btn-primary"
                  >
                    Get started
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
