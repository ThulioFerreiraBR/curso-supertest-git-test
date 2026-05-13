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

## 💡 Destaque Técnico

A integração com GitHub Actions foi implementada para simular um fluxo real de CI/CD utilizado em ambientes corporativos, garantindo execução contínua e rastreabilidade dos testes automatizados.