<div align="center">
  <img src="./favicon.png" alt="GameDeck Icons" />
  <h1>GameDeck</h1>

  <p>
    <strong>GameDeck é a sua lista organizadora de jogos.</strong>
  </p>

[![build](https://img.shields.io/github/actions/workflow/status/duhnunes/gamedeck/build.yml)](https://github.com/duhnunes/gamedeck/actions)
[![release](https://img.shields.io/github/package-json/v/duhnunes/gamedeck)](https://github.com/duhnunes/gamedeck/releases)
![license](https://img.shields.io/badge/license-MIT-green?style=flat)

![GameDeck Demo](./docs/demo.png)

</div>

## Table of Contents

[About](#about)  
[Features](#features)  
[Installation](#installation)  
[Contributing](#contributing)

- [Fork and clone repository](#fork-and-clone-repository)
- [Ways can contribute](#ways-can-contribute)
- [Project Structure](#project-structure)

<!-- [Contributors](#-contributors) -->

## 📝 About

**GameDeck** é um aplicativo simples e eficiente para **adicionar jogos à sua lista**. Ele ajuda você a organizar os títulos que quer explorar, mantendo tudo em um só lugar de forma prática e acessível.

## ✨ Features

- [x] **Interface Elegante** - Navegação fluida e intuitiva, garantindo uma experiência agradável.
- [x] **Multi-Plataforma** - Suporte para Windows Mac e Linux.

## 💾 Installation

> Follow the steps below to install:

1. Download the latest version of GameDeck from the [Releases](https://github.com/duhnunes/gamedeck/releases/latest) page.

- Download only `.exe` if you want to install GameDeck on Windows.

2. Run the downloaded file
3. Enjoy GameDeck!

## ⚒️ Contributing

### Fork and clone repository

1. Fork the repository [(click here to fork now)](https://github.com/duhnunes/gamedeck/fork)
2. Clone repository:

- Using GH: `gh repo clone your_username/GameDeck`
- Using GIT: `git clone https://github.com/your_username/GameDeck.git`

3. Create a new branch
  - Name branch following commit convention: `type/branch-name` (e.g. `feat/button-modal`, `refactor/rewrite-modal`, `fix/dont-open-modal`)

4. Open in VSCode:
  - Type `code GameDeck`
  - Start Application: `pnpm run dev`

5. Make yours changes
6. Push your commits
7. Submit a new Pull Request

### Ways can contribute

- **Translation**: Feel free to help translate to new languages or update and improve the ones that are already available on GameDeck.
- **Code**: GameDeck is build with <ins>TypeScript</ins> and <ins>Electron</ins>.

### Project Structure

- **src/app**: The UI for the App.
- **src-engine/electron**: The Engine Electron for the App.

<!-- ## 👥 Contributors

<a href="https://github.com/duhnunes/gamedeck/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=duhnunes/gamedeck" />
</a> -->

## ⚖️ License

GameDeck is licensed under the [MIT License](LICENSE)
