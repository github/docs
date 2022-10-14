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
ms.openlocfilehash: bcff0f06aad7eb930b47f4b9cb32e42c067d07cf
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147614340'
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
| `GITHUB_API_URL` | Retorna a URL da API. Por exemplo, `{% data variables.product.api_url_code %}`. |
| `GITHUB_GRAPHQL_URL` | Retorna a URL API do GraphQL. Por exemplo, `{% data variables.product.graphql_url_code %}`. |
| `GITHUB_REPOSITORY` | Nome do repositório e o proprietário. Por exemplo, `octocat/Hello-World`. |
| `GITHUB_SERVER_URL`| Retorna a URL do servidor {% data variables.product.product_name %}. Por exemplo, `https://{% data variables.product.product_url %}`. |
| `GITHUB_TOKEN` | Um token de autenticação assinado que representa o usuário no codespace. Você pode usar isso para fazer chamadas autenticadas para a API do GitHub. Para obter mais informações, confira "[Autenticação](/codespaces/codespaces-reference/security-in-codespaces#authentication)".  |
| `GITHUB_USER` | O nome do usuário que iniciou o codespace. Por exemplo, `octocat`. |
