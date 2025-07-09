export default async function handler(req, res) {
  const { messages } = req.body;

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages,
      temperature: 0.7,
    }),
  });

  const data = await response.json();

  if (data?.choices?.[0]?.message?.content) {
    res.status(200).json({ reply: data.choices[0].message.content });
  } else {
    res.status(500).json({ reply: "Failed to get a response from OpenAI." });
  }
  console.log("API KEY: ", process.env.OPENAI_API_KEY);

}
