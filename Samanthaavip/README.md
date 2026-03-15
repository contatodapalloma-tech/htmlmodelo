# Dudinha Clone — Projeto de exemplo

Arquivos criados:

- [dudinha-clone/index.html](dudinha-clone/index.html) — página principal pronta para abrir no navegador.
- [dudinha-clone/styles.css](dudinha-clone/styles.css) — estilos responsivos (mobile‑first).
- [dudinha-clone/script.js](dudinha-clone/script.js) — validação simples do formulário.
- [dudinha-clone/images/avatar.svg](dudinha-clone/images/avatar.svg) — placeholder SVG do avatar.
- [dudinha-clone/prompt-gemini.txt](dudinha-clone/prompt-gemini.txt) — prompt em Português para usar no Google Gemini (antigravity).

Como testar localmente:

1. Abra o arquivo `dudinha-clone/index.html` no navegador.
2. Em telas de desktop redimensione a janela para ver comportamento mobile.
3. Preencha o nome para avançar ao passo de compra; o botão "Voltar" foi removido (fluxo somente para frente).
4. O desconto só é oferecido **na segunda etapa** (após colocar o nome). Se você tentar sair ou mover o cursor para o topo nessa etapa, um modal aparece: preço base vai de R$ 20 → R$ 18 e WhatsApp R$ 12 → R$ 11,90.
5. Na segunda etapa, se você não marcar o WhatsApp, um prompt aparecerá perguntando se deseja aceitá‑lo mesmo. Aceitar marca a opção automaticamente; recusar prossegue apenas com o ocultinhos.
6. Substitua `images/avatar.svg` por uma foto real mantendo o mesmo nome para trocar o avatar.
