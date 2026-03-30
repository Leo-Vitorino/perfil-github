# 📱 GitHub Profile App (React Native)

Aplicativo mobile desenvolvido com **React Native + TypeScript**, inspirado no layout de perfis do GitHub.

O objetivo do projeto é simular uma tela de perfil de usuário, exibindo informações como dados pessoais, estatísticas e repositórios fixados, aplicando conceitos de componentização, tipagem e estilização.

---

## 🚀 Tecnologias utilizadas

* React Native
* Expo
* TypeScript
* StyleSheet (estilização nativa)

---

## 📸 Funcionalidades

* 👤 Exibição de perfil (foto, nome e username)
* 📝 Biografia do usuário
* 📍 Localização
* 📊 Estatísticas (repositórios, seguidores, seguindo)
* 📦 Lista de repositórios fixados
* 🎨 Interface inspirada no GitHub (tema dark)

---

## 🧱 Estrutura do projeto

```
src/
 ├── components/
 │    ├── ProfileHeader.tsx
 │    ├── ProfileInfo.tsx
 │    ├── Stats.tsx
 │    └── RepoCard.tsx
 │
 ├── screens/
 │    └── ProfileScreen.tsx
 │
 ├── data/
 │    └── user.ts
 │
 └── types/
      └── User.ts
```

---

## ▶️ Como executar o projeto

### 1. Clonar o repositório

```
git clone https://github.com/seu-usuario/seu-repo.git
```

---

### 2. Instalar dependências

```
npm install
```

---

### 3. Rodar o projeto

```
npm start
```

---

### 4. Executar no celular

* Instale o app **Expo Go**
* Conecte o celular na mesma rede Wi-Fi
* Escaneie o QR Code exibido no terminal

---

## 🎨 Customização

Os dados do usuário podem ser alterados em:

```
src/data/user.ts
```

É possível modificar:

* Nome
* Username
* Bio
* Foto
* Repositórios
* Estatísticas

---

## 📚 Objetivo acadêmico

Este projeto foi desenvolvido como atividade prática da disciplina **PDMI**, com foco em:

* Componentização em React Native
* Tipagem com TypeScript
* Organização de código
* Construção de interfaces mobile

---

## 💡 Melhorias futuras

* Integração com API do GitHub
* Animações na interface
* Sistema de navegação
* Tema claro/escuro dinâmico

---

## 👨‍💻 Autor

Desenvolvido por **Leonardo Vitorino**

---
