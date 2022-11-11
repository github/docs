---
title: Variáveis de ambiente padrão para seu codespace
shortTitle: Default environment variables
product: '{% data reusables.gated-features.codespaces %}'
intro: 'O {% data variables.product.prodname_dotcom %} define variáveis de ambiente padrão para cada codespace.'
versions:
  fpt: '*'
  ghec: '*'
type: overview
topics:
  - Codespaces
  - Fundamentals
  - Developer
ms.openlocfilehash: e9034fb566c8245fff6d610ff456084dc9818f0b
ms.sourcegitcommit: 43a959b8faf78d9c5b3deadffa079d24cd11650b
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/04/2022
ms.locfileid: '148134754'
---
## Sobre as variáveis de ambiente padrão

O {% data variables.product.prodname_dotcom %} define variáveis de ambiente padrão para cada codespace. Os comandos executados nos codespaces podem criar, ler e modificar as variáveis de ambiente.

{% note %}

**Observação**: as variáveis de ambiente diferenciam maiúsculas de minúsculas.

{% endnote %}

## Lista de variáveis de ambiente padrão

| Variável de ambiente | Descrição |
| ---------------------|------------ |
| `CODESPACE_NAME` | O nome do codespace Por exemplo, `monalisa-github-hello-world-2f2fsdf2e` |
| `CODESPACES` | Sempre `true` em um codespace |
| `GIT_COMMITTER_EMAIL` | O email para o campo "autor" de commits `git` futuros. |
| `GIT_COMMITTER_NAME` | O nome do campo "autor do commit" de commits `git` futuros. |
| `GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN`| Retorna o domínio da porta encaminhada de {% data variables.product.prodname_github_codespaces %}. Por exemplo, `preview.app.github.dev`. |
| `GITHUB_API_URL` | Retorna a URL da API. Por exemplo, `{% data variables.product.api_url_code %}`. |
| `GITHUB_GRAPHQL_URL` | Retorna a URL API do GraphQL. Por exemplo, `{% data variables.product.graphql_url_code %}`. |
| `GITHUB_REPOSITORY` | Nome do repositório e o proprietário. Por exemplo, `octocat/Hello-World`. |
| `GITHUB_SERVER_URL`| Retorna a URL do servidor {% data variables.product.product_name %}. Por exemplo, `https://{% data variables.product.product_url %}`. |
| `GITHUB_TOKEN` | Um token de autenticação assinado que representa o usuário no codespace. Você pode usar isso para fazer chamadas autenticadas para a API do GitHub. Para obter mais informações, confira "[Autenticação](/codespaces/codespaces-reference/security-in-codespaces#authentication)".  |
| `GITHUB_USER` | O nome do usuário que iniciou o codespace. Por exemplo, `octocat`. |
