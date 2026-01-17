// ATENÇÃO: Nunca exponha sua chave de API em código de front-end em produção!
// Use esta abordagem apenas para prototipagem/testes em ambientes controlados.
const API_KEY = "";
const MODEL_NAME = "gemini-2.5-flash";
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL_NAME}:generateContent?key=${API_KEY}`;

export async function enviarPrompt(prompt) {
    const userPrompt = prompt;

    console.log(prompt);

    const payload = {
        contents: [
            {
                parts: [
                    {
                        text: userPrompt
                    }
                ]
            }
        ]
    };

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            // Se a resposta HTTP não for 2xx, lance um erro.
            const errorData = await response.json();
            throw new Error(`Erro na API: ${response.status} - ${errorData.error.message}`);
        }

        const data = await response.json();
        
        // A resposta de texto geralmente está aninhada em 'candidates[0].content.parts[0].text'
        const aiResponseText = data.candidates?.[0]?.content?.parts?.[0]?.text;

        if (aiResponseText) {
            return aiResponseText;
        } else {
            return "Resposta vazia ou em formato inesperado.";
            console.error("Dados completos da resposta:", data);
        }

    } catch (error) {
        respostaElement.textContent = `Ocorreu um erro: ${error.message}`;
        console.error("Erro:", error);
    }
}
