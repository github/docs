---
title: Variáveis de ambiente padrão para seu codespace
shortTitle: Variáveis padrão de ambiente
product: '{% data reusables.gated-features.codespaces %}'
permissions: '{% data reusables.codespaces.availability %}'
intro: 'O {% data variables.product.prodname_dotcom %} define variáveis de ambiente padrão para cada codespace.'
versions:
  fpt: '*'
  ghec: '*'
type: overview
topics:
  - Codespaces
  - Fundamentals
  - Developer
---

## Sobre as variáveis de ambiente padrão

O {% data variables.product.prodname_dotcom %} define variáveis de ambiente padrão para cada codespace. Os comandos executados nos codespaces podem criar, ler e modificar as variáveis de ambiente.

{% note %}

**Observação**: As variáveis de ambiente diferenciam maiúsculas de minúsculas.

{% endnote %}

## Lista de variáveis de ambiente padrão

| Variável de ambiente  | Descrição                                                                                                                                                                                                                                                                           |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `CODESPACE_NAME`      | O nome do código, por exemplo, `monalisa-github-hello-world-2f2fsdf2e`                                                                                                                                                                                                              |
| `CODESPACES`          | Sempre `verdadeiro` quando no ambiente de um codespace                                                                                                                                                                                                                              |
| `GIT_COMMITTER_EMAIL` | O e-mail para o campo "autor" dos commits do `git` futuros.                                                                                                                                                                                                                         |
| `GIT_COMMITTER_NAME`  | O nome para o campo "committer" dos commits do `git` futuros.                                                                                                                                                                                                                       |
| `GITHUB_API_URL`      | Retorna a URL da API. Por exemplo, `{% data variables.product.api_url_code %}`.                                                                                                                                                                                                     |
| `GITHUB_GRAPHQL_URL`  | Retorna a URL API do GraphQL. Por exemplo, `{% data variables.product.graphql_url_code %}`.                                                                                                                                                                                         |
| `GITHUB_REPOSITORY`   | Nome do repositório e o proprietário. Por exemplo, `octocat/Hello-World`.                                                                                                                                                                                                           |
| `GITHUB_SERVER_URL`   | Retorna a URL do servidor {% data variables.product.product_name %}. Por exemplo, `https://{% data variables.product.product_url %}`.                                                                                                                                               |
| `GITHUB_TOKEN`        | Um token de autenticação assinado que representa o usuário no codespace. Você pode usar isso para fazer chamadas autenticadas para a API do GitHub. Para obter mais informações, consulte "[Autenticação](/codespaces/codespaces-reference/security-in-codespaces#authentication)". |
| `GITHUB_USER`         | O nome do usuário que iniciou o codespace. Por exemplo, `octocat`.                                                                                                                                                                                                                  |
