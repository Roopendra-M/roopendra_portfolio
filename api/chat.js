export default async function handler(req, res) {
  try {
    const { messages } = req.body;
    const apiKey = process.env.OPENAI_API_KEY;

    console.log("🧪 DEBUG - Received messages:", messages);
    console.log("🔐 DEBUG - OpenAI Key Exists:", !!apiKey);

    if (!apiKey) {
      return res.status(500).json({ reply: "Missing OpenAI API Key ❌" });
    }

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
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
      return res.status(200).json({ reply: data.choices[0].message.content });
    } else {
      console.error("🛑 OpenAI Error:", data);
      return res.status(500).json({ reply: "Failed to get a response from OpenAI." });
    }
  } catch (err) {
    console.error("🔥 CRASHED:", err);
    return res.status(500).json({ reply: "Server crashed." });
  }
}
