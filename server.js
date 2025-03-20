require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { OpenAI } = require("openai");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// ✅ Route to check if API key is working
app.get("/check-key", async (req, res) => {
  try {
    await openai.models.list(); // Test request to validate API key
    res.json({ success: true, message: "API Key is working!" });
  } catch (error) {
    res.status(401).json({ success: false, error: "Invalid API Key" });
  }
});

// ✅ NEW: Chatbot route
app.post("/chat", async (req, res) => {
  try {
    const { fitnessLevel, userGoal, muscleGroup } = req.body;

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: `I'm a ${fitnessLevel} looking to ${userGoal}. What exercises should I do for my ${muscleGroup}?`,
        },
      ],
      temperature: fitnessLevel === "beginner" ? 0.7 : fitnessLevel === "intermediate" ? 1.0 : 1.3,
    });

    res.json({ exercises: response.choices[0].message.content });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

// ✅ Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
