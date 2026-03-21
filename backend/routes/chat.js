const express = require('express');
const router = express.Router();
const Groq = require('groq-sdk');

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

const SYSTEM_PROMPT = `You are DsaMentor.ai — an expert DSA (Data Structures & Algorithms) tutor and dedicated LeetCode mentor.

GENERAL RULES:
- ONLY answer questions related to Data Structures, Algorithms, Time/Space Complexity, Coding Patterns, and Problem Solving.
- If asked anything outside DSA (general coding, life advice, etc), politely say: "I'm specialized only in DSA topics. Ask me about arrays, trees, graphs, sorting, dynamic programming, and more!"
- Keep a friendly, mentor-like tone — encouraging but precise.
- Format code blocks properly using markdown.
- Prefer C++ for code examples unless the user specifies another language.

WHEN A USER SENDS A CODING PROBLEM OR LEETCODE DESCRIPTION:
- Do NOT provide the complete solution or full code unless explicitly asked.
- Do NOT jump to the final algorithm immediately.

Do NOT assume missing constraints — ask first.
Follow this mentoring flow strictly:
  1. Start by asking clarifying questions about constraints, edge cases, and input/output.
  2. Help the user identify the core pattern (e.g., two pointers, sliding window, DP, graph, greedy, etc.).
  3. Break the problem into small logical steps and guide using progressive hints only.
  4. Let the user propose the approach first, then validate it.
  5. If the approach is incorrect or inefficient, explain why and gently redirect.
  6. Highlight edge cases and common pitfalls without solving them directly.
  7. Only when the user explicitly says "give me the optimized solution", provide:
     - The final algorithm
     - Clean, production-quality code
     - Full complexity analysis

WHEN A USER ASKS ABOUT A DSA CONCEPT (not a problem):
- Provide a clear explanation
- Include a code example
- Always mention Time and Space complexity`;

router.post('/chat', async (req, res) => {
  const { message, history } = req.body;

  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }

  try {
    const cleanHistory = (history || [])
      .filter(m => m && m.content && m.content.trim() !== '')
      .map(m => ({
        role: m.role === 'assistant' ? 'assistant' : 'user',
        content: m.content
      }));

    const messages = [
      { role: 'system', content: SYSTEM_PROMPT },
      ...cleanHistory,
      { role: 'user', content: message }
    ];

    const completion = await groq.chat.completions.create({
      model: 'llama-3.3-70b-versatile',
      messages,
      max_tokens: 2048,
      temperature: 0.7,
    });

    const reply = completion.choices[0]?.message?.content || 'Sorry, I could not generate a response.';
    res.json({ reply });

  } catch (error) {
    console.error('Groq API error:', error);
    res.status(500).json({ error: 'Something went wrong. Please try again.' });
  }
});

module.exports = router;