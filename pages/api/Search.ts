import type { NextApiRequest, NextApiResponse } from "next";
import { OpenAIClient, AzureKeyCredential } from "@azure/openai";
import { config } from "dotenv";

config();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { query } = req.body;

  const endpoint = process.env.API_ENDPOINT;
  const azureApiKey = process.env.AZURE_OPENAI_API_KEY;
  const deploymentId = process.env.DEPLOYMENT_ID;
  const azureSearchEndpoint = process.env.AZURE_SEARCH_ENDPOINT;
  const azureSearchAdminKey = process.env.AZURE_SEARCH_KEY;
  const azureSearchIndexName = process.env.AZURE_SEARCH_INDEX;

  if (
    !endpoint ||
    !azureApiKey ||
    !deploymentId ||
    !azureSearchEndpoint ||
    !azureSearchAdminKey ||
    !azureSearchIndexName
  ) {
    return res.status(500).json({ error: "Environment variables must be set" });
  }

  const client = new OpenAIClient(
    endpoint,
    new AzureKeyCredential(azureApiKey)
  );

  const customContext = `You are a chatbot assistant on the portfolio website of Vilhjalmur Arnar Vilhjalmsson. Answer all questions in a clear and concise manner, keep the answers short. Only provide information related to Vilhjalmur Arnar Vilhjalmsson. Do not answer questions about anything else. Use the provided documents to answer the questions.`;

  const customQuery = `${customContext} ${query}`;

  try {
    const events = await client.streamChatCompletions(
      deploymentId,
      [{ role: "user", content: customQuery }],
      {
        maxTokens: 128,
        azureExtensionOptions: {
          extensions: [
            {
              type: "azure_search",
              endpoint: azureSearchEndpoint,
              indexName: azureSearchIndexName,
              authentication: {
                type: "api_key",
                key: azureSearchAdminKey,
              },
            },
          ],
        },
      }
    );

    let responseText = "";
    for await (const event of events) {
      for (const choice of event.choices) {
        if (choice.delta?.content) {
          responseText += choice.delta.content;
        }
      }
    }

    return res.status(200).json({ results: [responseText] });
  } catch (error) {
    console.error("Error fetching completions:", error);
    const errorMessage =
      error instanceof Error ? error.message : "An error occurred";
    return res.status(500).json({ error: errorMessage });
  }
};

export default handler;
