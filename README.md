# 📄 Currículo Express

API REST criada com **Node.js + Express + PostgreSQL (via Sequelize)** para gerenciar currículos de usuários.  
Projeto individual para atividade prática da disciplina.

---

## 🚀 Tecnologias Utilizadas

- Node.js
- Express
- Sequelize ORM
- PostgreSQL (Render Cloud DB)
- Dotenv

---

## 📦 Funcionalidades

- Cadastro de **usuários**
- Cadastro de **formações**, **experiências** e **projetos**
- Relacionamento 1:N entre usuários e seus dados
- Edição e remoção de todas as entidades
- Endpoint especial que retorna o currículo completo de um usuário

---

## 🔗 Endpoints principais

### Usuários
- `POST /api/usuarios` – cria usuário
- `GET /api/usuarios` – lista todos
- `GET /api/usuarios/:id` – detalha um
- `PUT /api/usuarios/:id` – atualiza
- `DELETE /api/usuarios/:id` – remove

### Formações
- `POST /api/formacoes`
- `GET /api/formacoes`
- `GET /api/formacoes/usuario/:userId`
- `PUT /api/formacoes/:id`
- `DELETE /api/formacoes/:id`

### Experiências
- `POST /api/experiencias`
- `GET /api/experiencias`
- `GET /api/experiencias/usuario/:userId`
- `PUT /api/experiencias/:id`
- `DELETE /api/experiencias/:id`

### Projetos
- `POST /api/projetos`
- `GET /api/projetos`
- `GET /api/projetos/usuario/:userId`
- `PUT /api/projetos/:id`
- `DELETE /api/projetos/:id`

### Currículo Completo
- `GET /api/curriculo/:id` – retorna todas as informações de um usuário (bio, formação, experiências e projetos)

---

## 🧪 Testes

Você pode testar com:
- Postman
- Insomnia
- `curl`

---

## 🏁 Como rodar localmente

```bash
git clone https://github.com/seuusuario/curriculo-express
cd curriculo-express
npm install
