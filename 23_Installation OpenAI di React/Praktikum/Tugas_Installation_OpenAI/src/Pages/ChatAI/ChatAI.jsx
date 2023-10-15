import OpenAI from "openai";
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import TextArea from "../../components/TextArea/TextArea";
import Button from "../../components/Button/index";
import "./ChatAI.css";

const ChatAI = () => {
  const [command, setCommand] = useState(""); // state input user
  const [loading, setLoading] = useState(false); // state loader untuk nunggu response dari openai
  const [result, setResult] = useState([]); // state untuk menyimpan response dari openai
  const [image, setImage] = useState("");

  const openai = new OpenAI({
    apiKey: "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", // defaults to process.env["OPENAI_API_KEY"]
    dangerouslyAllowBrowser: true,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // TODO: handle openai completion
    setLoading(true);
    const res = await openai.chat.completions.create({
      // prompt: "A summarizing article from this url : “ + prompt", // parameter untuk send chat message
      // model: "text-davinci-003",
      messages: [{ role: "system", content: command }],
      model: "gpt-3.5-turbo",
      // max_tokens: 7,
      // temperature: 0.0,
      // frequency_penalty: 0.0,
      // presence_penalty: 0.0,
      // top_p: 1,
    });
    setResult(res.choices);
    console.log("result ", res);
    setLoading(false);
  };

  const handleGenerateImageByPrompt = async (e) => {
    e.preventDefault();
    setLoading(true);
    // const file = e.target.files[0]
    const resImage = await openai.images.generate({ prompt: command });
    setImage(resImage.data[0].url);
    setLoading(false);
  };
  return (
    <div className="chat-container">
      <div className="chat-result">
        {loading ? (
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#007bff"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        ) : (
          <div className="result">
            {result.length > 0 ? (
              result?.map((item, index) => (
                <div key={index}>
                  <p>{item.message.content}</p>
                </div>
              ))
            ) : (
              <div></div>
            )}
            {image.length > 0 ? (
              <img src={image} width={220} alt="respone image" />
            ) : (
              <div></div>
            )}
          </div>
        )}
      </div>
      <div className="input-container">
        <TextArea
          type="text"
          id="command"
          value={command}
          onChange={(e) => setCommand(e.target.value)}
          placeholder={"Masukkan perintah..."}
          className="text-input"
        />
        <Button
          type="submit"
          className="submit-btn"
          text="Submit Text"
          onClick={(e) => handleSubmit(e)}
        />
        <Button
          type="submit"
          className="submit-btn"
          text="Generate Image"
          onClick={(e) => handleGenerateImageByPrompt(e)}
        />
      </div>
    </div>
  );
};

export default ChatAI;
