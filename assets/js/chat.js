import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";
import { enviarPrompt } from './api.js';

document.addEventListener("DOMContentLoaded", () => {
const chatContainer = document.getElementById('chat-container');
  
  if (chatContainer) {
    const chat = document.getElementById("chat");
    const userInput = document.getElementById("entrada");
    const sendButton = document.querySelector("#input-container button");

    // Função para adicionar mensagens à interface
    const adicionarMensagem = (remetente, texto, classe) => {
      // const msgContainer = document.createElement("div");
      // const msgBubble = document.createElement("div");
      
      // msgContainer.className = "msg-container " + classe;
      // msgBubble.className = "msg";
      // msgBubble.textContent = texto;

      // msgContainer.appendChild(msgBubble);
      // chat.appendChild(msgContainer);
      // chat.scrollTop = chat.scrollHeight;

      const msgContainer = document.createElement("div");
      const msgBubble = document.createElement("div");

      msgContainer.className = "msg-container " + classe;
      msgBubble.className = "msg";

      //Ao invés de definir como texto, definimos como innerHTML por causa do marked - estilo a partir das marcações recebidas pela API do Gemini
      //sanitize() vai sanitizar o conteúdo - ou seja, vai prevenir que o conteúdo não interfira negativamente no funcionamento do site e na 
      //exibição de conteúdo.
      msgBubble.innerHTML = DOMPurify.sanitize(marked.parse(texto));

      msgContainer.appendChild(msgBubble);
      chat.appendChild(msgContainer);
      chat.scrollTop = chat.scrollHeight;
    };

    // Função da Amina para responder
    const responder = async (texto) => {
      // Mostra o aviso "digitando..."
      const typing = document.createElement("div");
      typing.className = "msg-container amina";
      typing.innerHTML = `<div class="typing"><div class="dot"></div><div class="dot"></div><div class="dot"></div></div>`;
      chat.appendChild(typing);
      chat.scrollTop = chat.scrollHeight;

      // let resposta = "Não entendi muito bem, mas estou aqui para te ouvir. Pode me explicar de outra forma?";
      // const t = texto.toLowerCase();

      // if (t.includes("oi") || t.includes("olá")) {
      //   resposta = "Oi! Eu sou a Amina. Estou aqui para apoiar você. Como está se sentindo?";
      // } else if (t.includes("triste") || t.includes("sozinha") || t.includes("mal")) {
      //   resposta = "Sinto muito que esteja passando por isso. Lembre-se que você é forte. Quer conversar mais sobre o que está te deixando assim?";
      // } else if (t.includes("feliz") || t.includes("bem")) {
      //   resposta = "Fico muito feliz por você! Compartilhar bons momentos também é muito importante. O que te deixou feliz hoje?";
      // } else if (t.includes("ajuda") || t.includes("preciso de ajuda")) {
      //   resposta = "Claro! Você pode me contar o que está acontecendo e eu vou te apoiar da melhor forma. Se for uma emergência, ligue para 190 ou 180.";
      // } else if (t.includes("obrigada") || t.includes("obrigado")) {
      //   resposta = "De nada! Estarei sempre aqui quando precisar conversar. Se cuida!";
      // } else if (t.includes("sim") || t.includes("pode ser")) {
      //   resposta = "Estou aqui para te ouvir!";
      // } else if (t.includes("tchau") || t.includes("até mais")) {
      //   resposta = "Tudo bem. Se cuida, você não está sozinha. Estarei aqui sempre que precisar conversar.";
      // }

      //Sugestão: vocês precisam bloquear o botão para que não seja possível requisitar mais de uma vez enquanto a API não retornou as informações

      //Tenta a requisição com a API
      try {
        const resp = await enviarPrompt(texto);
        console.log(resp); //Log para verificação do conteúdo retornado pela API
        typing.remove();
        adicionarMensagem("Amina", resp || "Não entendi, tente novamente.", "amina");
      } catch {
        //Caso dê problema, lança a mensagem de erro
        typing.remove();
        adicionarMensagem("Amina", "Erro ao conectar ao servidor.", "amina");
      }
    };

    // Função para enviar a mensagem do usuário
    const enviar = async () => {
      const texto = userInput.value;
      if (texto.trim() === "") return;
      
      adicionarMensagem("Você", texto, "user");
      await responder(texto);
      userInput.value = "";
      userInput.focus();
    };

    // Adiciona os eventos
    sendButton.addEventListener('click', enviar);
    userInput.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        enviar();
      }
    });

    // Mensagem inicial da Amina
    setTimeout(() => {
      adicionarMensagem("Amina", "Olá! Eu sou a Amina, sua amiga virtual. Estou aqui para conversar e apoiar você. Como você está hoje?", "amina");
    }, 500);
  }
});