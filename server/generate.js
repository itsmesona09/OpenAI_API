import openaiClient from "./api.js";

const generate = async (queryDescription) => {
    const response = await openaiClient.completions.create({
        model: "gpt-3.5-turbo-instruct",
        prompt: `Convert the following Natural Language description  into a SQL query : \n\n${queryDescription}`,
        max_tokens: 100,
        temperature: 0
    });
    return response.choices[0].text;
}

export default generate; 