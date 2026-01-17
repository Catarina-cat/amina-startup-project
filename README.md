# Projeto: Startup Explorer - Amina

## ETEC - Escola Técnica Estadual Rodrigues de Abreu - Bauru

## Integrantes da Equipe
* **Eloá Vitória Nunes** – Líder
* **Catarina Mainini Moraes** – Desenvolvedora Front-End
* **Ana Julia Batista Cavalcante** – Designer

---

## Descrição do Projeto
**Amina** é uma startup social focada em acolher, apoiar e empoderar mulheres em situação de vulnerabilidade.
Por meio de uma aplicação web acessível e gratuita, conectamos mulheres a uma rede de apoio segura, incluindo profissionais de saúde mental, assessoria jurídica e oportunidades de emprego. 

Inspirada na força da **rainha guerreira Amina de Zazzau**, nossa missão é usar a tecnologia como uma ponte para a liberdade, segurança e autonomia feminina.

---

## Fluxo de Navegação
A página inicial (**index.html**) contém o acesso ao **login** e a introdução ao projeto.
O usuário deve preencher nome e senha (***para testes, qualquer senha é aceita**).
**Perfil de acesso:** Usuária buscando apoio.
Após o login, o sistema direciona para a **Home**, onde estão as principais funcionalidades.

---

## Instruções de Setup
Este projeto foi desenvolvido utilizando apenas tecnologias web front-end (HTML, CSS, JavaScript) e não requer um ambiente de back-end para ser executado.

1.  **Clone o repositório (ou baixe os arquivos):**
    ```bash
    git clone [https://github.com/Catarina-cat/amina-startup-project.git](https://github.com/Catarina-cat/amina-startup-project.git)
    ```

2.  **Entrar no diretório do projeto:**
    ```bash
    cd amina-startup-project
    ```

3.  **Executar o projeto com o Live Server**

    * Para que as requisições à API do Gemini funcionem corretamente, é **necessário executar o site com o Live Server**, pois o navegador bloqueia chamadas diretas a APIs em arquivos abertos localmente (file://).
    * **Passos:**

    **1.** Abra o projeto no Visual Studio Code (VS Code).
    
    **2.** Instale a extensão Live Server (caso ainda não tenha).
    
    **3.** Clique com o botão direito no arquivo index.html → "Open with Live Server".
    
    **4.** O site abrirá automaticamente no seu navegador padrão.

---

## Acesso à Chave da API do Gemini
Para utilizar o chatbot da Amina, é necessário obter uma chave de API do Google Gemini e inseri-la no código localmente.
    
**Passo a passo para gerar sua chave:**
    
**1.** Acesse o site oficial da API Gemini: https://aistudio.google.com/app/apikey

**2.** Faça login com sua conta Google.

**3.** Clique em "Create API Key".

**4.** Escolha o projeto “Default” e confirme.

**5.** Copie a chave gerada (exemplo: AIzaSyXXXX...).

**6.** No seu projeto, abra o arquivo:

```bash
assets/js/api.js
```

**7.** Substitua a variável pela sua chave:

```bash
const API_KEY = "SUA_CHAVE_AQUI";
```

**8.** Salve o arquivo e recarregue o site.

**Importante:**
Nunca compartilhe sua chave em repositórios públicos.
Use apenas para testes locais com o Live Server.

---

## Acesso ao Projeto

Acesse o projeto no github:
[Clique aqui para acessar] https://github.com/Catarina-cat/amina-startup-project

---

## Vídeo de Apresentação
Esse vídeo apresenta a **versão antiga** do nosso projeto

🔗 [Clique aqui para assistir] (https://drive.google.com/file/d/1RwZJ4vbrnLql-R90AfrW01G3EPntVYuj/view)

Este projeto é um protótipo acadêmico. Não deve ser utilizado em produção.

