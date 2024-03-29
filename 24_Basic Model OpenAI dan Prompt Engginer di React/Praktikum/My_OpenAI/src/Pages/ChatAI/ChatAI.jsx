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
  //   const [image, setImage] = useState("");

  const openai = new OpenAI({
    apiKey: "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", // defaults to process.env["OPENAI_API_KEY"]
    dangerouslyAllowBrowser: true,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // TODO: handle openai completion
    setLoading(true);
    const res = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "system", content: command }],
      temperature: 1,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });
    setResult(res.choices);
    console.log("result ", res);
    setLoading(false);
  };

  return (
    <div className="chat-container">
      <h2 className="text-center text-primary">CHAT BOT</h2>
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
          </div>
        )}
      </div>
      <div className="input-container">
        <TextArea
          type="text"
          id="command"
          value={command}
          onChange={(e) => setCommand(e.target.value)}
          placeholder={"Masukkan Perintah..."}
          className="text-input"
        />
        <Button
          type="submit"
          className="submit-btn"
          text="Submit"
          onClick={(e) => handleSubmit(e)}
        />
      </div>
    </div>
  );
};

export default ChatAI;
