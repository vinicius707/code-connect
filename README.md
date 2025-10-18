# code-connect

Curso introdutório de Next.js

## 📋 Sobre o Projeto

Este é um projeto de blog desenvolvido com Next.js que demonstra conceitos fundamentais de desenvolvimento web moderno, incluindo componentes React, TypeScript e logging com Winston.

## 🛠️ Tecnologias Utilizadas

- **Next.js 15.5.6** - Framework React para produção
- **React 19.1.0** - Biblioteca para interfaces de usuário
- **TypeScript 5** - Superset tipado do JavaScript
- **Tailwind CSS 4** - Framework CSS utilitário
- **Winston 3.18.3** - Biblioteca de logging para Node.js
- **ESLint** - Linter para JavaScript/TypeScript

## 📦 Dependências

### Dependências Principais

- `next`: 15.5.6
- `react`: 19.1.0
- `react-dom`: 19.1.0
- `winston`: ^3.18.3

### Dependências de Desenvolvimento

- `@eslint/eslintrc`: ^3
- `@tailwindcss/postcss`: ^4
- `@types/node`: ^20
- `@types/react`: ^19
- `@types/react-dom`: ^19
- `eslint`: ^9
- `eslint-config-next`: 15.5.6
- `tailwindcss`: ^4
- `typescript`: ^5

## 🚀 Como Executar o Projeto

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone <url-do-repositorio>
cd code-connect

# Instale as dependências
npm install
```

### Executando o Projeto

```bash
# Modo de desenvolvimento (com Turbopack)
npm run dev

# Build para produção
npm run build

# Executar versão de produção
npm start

# Executar linter
npm run lint
```

O projeto estará disponível em: `http://localhost:3000`

## 🗄️ JSON Server

Para simular uma API REST, você pode usar o `json-server` com o arquivo `posts.json`:

### Instalação do JSON Server

```bash
# Instalar globalmente
npm install -g json-server

# Ou instalar localmente no projeto
npm install --save-dev json-server
```

### Executando o JSON Server

```bash
# Comando básico
json-server --watch posts.json

# Com porta personalizada
json-server --watch posts.json --port 3001

# Com delay para simular latência
json-server --watch posts.json --delay 1000
```

O JSON Server estará disponível em: `http://localhost:3000` (porta padrão)

### Endpoints Disponíveis

- `GET /posts` - Lista todos os posts
- `GET /posts/:id` - Busca um post específico
- `POST /posts` - Cria um novo post
- `PUT /posts/:id` - Atualiza um post
- `DELETE /posts/:id` - Remove um post

## 📝 Logging

O projeto utiliza Winston para logging com as seguintes configurações:

- **Nível de log**: `info`
- **Formato**: JSON
- **Arquivos de log**:
  - `error.log` - Apenas logs de erro
  - `combined.log` - Todos os logs

## 📁 Estrutura do Projeto

```
src/
├── app/                 # App Router do Next.js
│   ├── globals.css     # Estilos globais
│   ├── layout.tsx      # Layout principal
│   └── page.tsx        # Página inicial
├── components/         # Componentes React
│   ├── Aside/         # Componente de sidebar
│   ├── Avatar/        # Componente de avatar
│   └── CardPost/      # Componente de card de post
└── logger.ts          # Configuração do Winston
```

## 🎯 Funcionalidades

- ✅ Interface responsiva com Tailwind CSS
- ✅ Componentes React reutilizáveis
- ✅ Sistema de logging com Winston
- ✅ API simulada com JSON Server
- ✅ TypeScript para tipagem estática
- ✅ ESLint para qualidade de código
