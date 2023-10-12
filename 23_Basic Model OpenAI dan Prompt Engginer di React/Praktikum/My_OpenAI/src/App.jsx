import { useState } from "react";
import { OpenAIApi } from "openai";
import TextArea from "./components/TextArea/TextArea";
import Button from "./components/Button/index";
import { ColorRing } from "react-loader-spinner";

function App() {
  const [command, setCommand] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState([]);

  const openai = new OpenAIApi({
    apiKey: "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",
    // apiKey: process.env.OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    const res = await openai.chat.completions.create({
      // prompt: command,
      // model: "text-davinci-003",
      messages: [{ role: "system", content: command }],
      model: "gpt-3.5-turbo",
    });
    setResult(res.choices);
    console.log("result", res);
    setLoading(false);
  };

  return (
    <div className="App">
      <div>
        <TextArea
          name="command"
          id="command"
          value={command}
          onChange={(e) => setCommand(e.target.value)}
          placeholder="Masukkan command..."
          className="command-gpt"
        />
        <Button
          text="Submit"
          type="submit"
          className="btn btn-submit"
          onClick={(e) => handleSubmit(e)}
        />
        {loading ? (
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
          />
        ) : (
          <div>
            {result.length > 0 &&
              result?.map((item, index) => (
                <div key={index}>
                  <p>{item.message.content}</p>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
