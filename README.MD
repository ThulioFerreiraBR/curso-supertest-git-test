# QA API Automation - CRUD Categories (Learning Project)

## 📌 About

This project was developed as a learning exercise to practice API automation using Supertest and Jest.

It focuses on CRUD operations with authentication flow and basic test structure organization.

---

## 🎯 What I practiced

- API testing with Supertest
- CRUD operations (GET, POST, PUT, DELETE)
- Authentication using JWT token
- Test organization using Jest
- Setup/teardown with beforeAll/afterAll

---

## 🔄 CI/CD (GitHub Actions)

Este projeto possui integração com GitHub Actions, executando automaticamente a suíte de testes a cada push ou pull request na branch principal.

### ⚙️ O que o pipeline executa

- Instalação de dependências
- Execução dos testes automatizados (Jest + Supertest)
- Geração de relatório HTML com o resultado da execução

---

## 📊 Test Report (HTML)

Após cada execução do pipeline, um relatório HTML é gerado contendo:

- status dos testes
- detalhes das execuções
- falhas e erros
- resumo da suíte

---

### 📍 Como visualizar o report

1. Faça um push ou abra um Pull Request na branch `main`
2. Acesse a aba **Actions** no GitHub
3. Selecione a última execução do workflow
4. Baixe o artifact do report HTML
5. Abra o arquivo `index.html` no navegador

---

### 🌐 Acesso ao Report

O relatório pode também ser acessado diretamente através de uma URL pública gerada pelo pipeline:

👉 [Clique aqui para visualizar o último report](https://thulioferreirabr.github.io/curso-supertest-git-test/)

---

## 💡 Destaque Técnico

A integração com GitHub Actions foi implementada para simular um fluxo real de CI/CD utilizado em ambientes corporativos, garantindo execução contínua e rastreabilidade dos testes automatizados.