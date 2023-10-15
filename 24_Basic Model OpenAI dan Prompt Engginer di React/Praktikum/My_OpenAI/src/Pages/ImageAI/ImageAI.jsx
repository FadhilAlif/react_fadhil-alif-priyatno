import OpenAI from "openai";
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import Button from "../../components/Button/index";
import TextArea from "../../components/TextArea/TextArea";

const ImageAI = () => {
  const [command, setCommand] = useState(""); // state input user
  const [loading, setLoading] = useState(false); // state loader untuk nunggu response dari openai
  const [image, setImage] = useState("");

  const openai = new OpenAI({
    apiKey: "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", // defaults to process.env["OPENAI_API_KEY"]
    dangerouslyAllowBrowser: true,
  });

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
      <h2 className="text-center text-primary">IMAGE BOT</h2>
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
            {image.length > 0 ? (
              <img src={image} width={"100%"} alt="respone image" />
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
          placeholder={"Mau Gambar Apa..."}
          className="text-input"
        />
        <Button
          type="submit"
          className="btn btn-primary"
          text="Generate Image"
          onClick={(e) => handleGenerateImageByPrompt(e)}
        />
      </div>
    </div>
  );
};

export default ImageAI;
