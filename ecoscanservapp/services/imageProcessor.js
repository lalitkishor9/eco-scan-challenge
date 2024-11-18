// const {  OpenAI } = require("openai");
// require("dotenv").config();
// const openai = new OpenAI({
//     apiKey: process.env.OPENAI_API_KEY,
// });

const processImageWithGPT = async (imageBase64 ) => {
    try {
      // const response = await openai.chat.completions.create({
      //   model: 'gpt-4-vision-preview',
      //   messages: [{ role: "user", content: [
      //     {type:'text', text: 'Identify types of clothing in this image, e.g., t-shirts, jeans, shirts.'},
      //     {type:'image_url', image_url: `data:image/jpeg;base64,${imageBase64}`}
      //   ] }],
      // });
      // console.log(response.choices[0]);
      // const clothingList = response.choices[0].message.split(",").map(item => item.trim());
      // return clothingList;

      //Mocked response
      return ["TShirt", "Jeans", "Shirt"];
    } catch (error) {
        console.error("Error with GPT-4 processing:", error);
        throw new Error("Failed to process image with GPT-4");
    }
  };
  
  module.exports = { processImageWithGPT };
  