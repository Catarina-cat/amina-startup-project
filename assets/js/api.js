const BACKEND_URL = "http://localhost:3000/api/gemini";

export async function enviarPrompt(prompt) {
  const payload = {
    contents: [
      {
        role: "user",
        parts: [{ text: prompt }]
      }
    ]
  };

  const response = await fetch(BACKEND_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const data = await response.json();

  if (!response.ok) {
    console.error("Erro na API:", data);
    throw new Error(data.error?.message || "Erro desconhecido na API");
  }

  // Retorna a resposta processada
  return data.candidates?.[0]?.content?.parts?.[0]?.text || "Sem resposta.";
}
