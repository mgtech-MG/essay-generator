import { OpenAIApi, Configuration } from "openai";

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const openai = new OpenAIApi(configuration);

  export default async function (req, res) {
    if (!configuration.apiKey) {
      res.status(500).json({
        error: {
          message: "OpenAI API key not configured, please follow instructions in README.md",
        }
      });
      return;
    }

    //get the essay prompt
    const essayPrompt = req.body.essayprompt  || '';
    if (essayPrompt.trim().length === 0) {
        res.status(400).json({
            error: {
                message: "Please enter a valid essay prompt"
            }
        });
        return;
    }

    try {
          //create a completion with open API

          const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: `In ${200} or less generate an essay about ${essayPrompt}`,
            max_tokens: 1000,
            temperature: 0.2,
          });
          //send the essay back
          res.status(200).json({ result: response.data.choices[0].text });

    } catch (error) {
        if (error.response) {
            console.error(error.response.status, error.response.data);
            res.status(error.response.status).json(error.response.data);
        } else {
        console.error(`Error with OpenAI API request: ${error.message}`);
        res.status(500).json({
            error: {
            message: 'An error occurred during your request.',
            }
        });
    }

}
  }