import OpenAI from "openai";
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import Button from "../../components/Button/index";

const QuestionAnswerAI = () => {
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
      messages: [
        {
          role: "system",
          content:
            'Saya adalah bot penjawab pertanyaan(Question and Answer) yang sangat cerdas. Jika Anda mengajukan pertanyaan yang berakar pada kebenaran, saya akan memberikan jawabannya. Jika Anda bertanya kepada saya pertanyaan yang tidak masuk akal, tidak ada di data, dan tidak memiliki jawaban yang jelas, saya akan menjawab "Ya Ndak Tau Kok Tanya Saya"\n\nQ : Apa Ibukota dari Indonesia?\nA : Ibukota Jakarta\n\nQ : Siapakah Presiden Indonesia?\nA : Presiden Indonesia adalah Joko Widodo.\n\nQ : Yogyakarta dikenal sebagai Kota?\nA : Kota Pelajar',
        },
      ],
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
          <h2 className="text-center text-primary">QNA BOT</h2>
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
        <Button
          type="submit"
          className="submit-btn"
          text="Generate Q&A"
          onClick={(e) => handleSubmit(e)}
        />
      </div>
    </div>
  );
};

export default QuestionAnswerAI;
