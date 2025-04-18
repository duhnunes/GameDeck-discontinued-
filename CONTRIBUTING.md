# Contribuindo para GameDeck

Agradecemos por considerar contribuir para o GameDeck! Este guia vai ajudar você a entender como colaborar de forma eficaz. 🚀

## Como Posso Contribuir?

Existem várias formas de contribuir:
- **Relatar Problemas (Issues):** Encontrou um bug ou algo que poderia ser melhor? Abra uma issue!
- **Adicionar Funcionalidades:** Tem uma ideia de melhoria ou nova funcionalidade? Discuta nas issues antes de enviar seu código.
- **Melhorar Documentação:** Documentações mais claras ajudam toda a comunidade. 💡
- **Testar e Dar Feedback:** Seu feedback é valioso para melhorar o projeto!

## Diretrizes Gerais

Antes de começar, siga estas diretrizes:
1. **Leia o Código de Conduta:** Certifique-se de seguir as boas práticas descritas no [`CODE_OF_CONDUCT.md`](./CODE_OF_CONDUCT.md).
2. **Verifique as Issues:** Veja se alguém já relatou ou está trabalhando no problema ou ideia que você tem.
3. **Trabalhe em Branches:** Nunca contribua diretamente na branch principal (`main`). Crie sua própria branch seguindo a Conventional Commits seguido do nome da branch (ex.: `refactor/rewrite-button`).
4. **Inclua Testes:** Testes para novas funcionalidades ou correções são essenciais.
5. **Documente suas Alterações:** Adicione comentários no código e, se necessário, edite o arquivo README para que outros saibam como usar o que você criou.

## Como Enviar um Pull Request

Siga os passos abaixo para fazer sua contribuição:
1. **Faça um Fork:** Clone o repositório para sua conta.
2. **Crie uma Branch:** Crie uma nova branch para suas alterações usando:  
   ```bash
   git checkout -b type/nome-da-sua-branch
3. **Implemente sua Contribuição**: Faça as mudanças, adicione testes e teste localmente.
4. **Commits**: Escreva mensagens de commit claras e concidas que seguem o [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
5. **Sincronize com o Repositório Original**: Certifique-se de que sua branch está atualizada com a `main`.
```Bash
git pull origin master
```
6. **Crie o Pull Request**: Submeta seu PR no Github com uma descrição clara sobre o que foi alterado.

## Configuração do Projeto
### Pré-requisitos:
- [Tecnologia usada, ex. Node.js, versão 18 ou superior]
- [Gerenciador de pacotes, ex. pnpm]

### Passos para Configuração Local:
1. Clone o repositório:
```Bash
gh repo clone duhnunes/gamedeck
```
```Bash
git clone https://github.com/duhnunes/gamedeck.git
```
2. Instale as dependências:
```Bash
pnpm i
```
3. Execute o projeto:
```Bash
pnpm run dev
```

## Regras de Boas Práticas
- Siga os padrões de estilo definidos no projeto (exemplo: eslint, prettier).
- Seja respeitoso ao discutir ideias ou revisar código de outros colaboradores.
- Lembre-se que trabalhar em equipe é sobre cooperação e aprendizado.

Aguardamos suas contribuições!

---
