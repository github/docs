---
title: Usar parâmetros de consulta para criar um pull request
intro: Usar parâmetros de consulta para criar URLs personalizadas para abrir pull requests com campos pré-preenchidos.
redirect_from:
  - /github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/using-query-parameters-to-create-a-pull-request
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
ms.openlocfilehash: 89ca4b13ff6291f7b4449d25b3daa911734a22b9
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145128041'
---
Você pode usar parâmetros de consulta para abrir pull requests. Os parâmetros de consulta são partes opcionais de uma URL que você pode personalizar para compartilhar uma visualização específica da página, tais como resultados de filtro de pesquisa ou um modelo de pull request em {% data variables.product.prodname_dotcom %}. Para criar seus próprios parâmetros de consulta, você deve corresponder o par de chave e valor.

{% tip %}

**Dica:** crie também modelos de solicitações de pull que são abertos com rótulos padrão, destinatários e um título de solicitação de pull. Para obter mais informações, confira "[Como usar modelos para incentivar problemas e solicitações de pull úteis](/communities/using-templates-to-encourage-useful-issues-and-pull-requests)".

{% endtip %}

Você deve ter as permissões adequadas para qualquer ação para usar o parâmetro de consulta equivalente. Por exemplo, você precisa ter permissão para adicionar um rótulo a uma solicitação de pull para usar o parâmetro de consulta `labels`. Para obter mais informações, confira "[Funções de repositório de uma organização](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)".

Se você criar uma URL inválida usando parâmetros de consulta ou se não tiver as permissões adequadas, a URL retornará uma página de erro `404 Not Found`. Se você criar uma URL que exceda o limite do servidor, a URL retornará uma página de erro `414 URI Too Long`.

Parâmetro de consulta | Exemplo
---  | ---
`quick_pull` | `https://github.com/octo-org/octo-repo/compare/main...my-branch?quick_pull=1` cria uma solicitação de pull que compara o branch base `main` com o branch principal `my-branch`. A consulta `quick_pull=1` leva você diretamente para a página "Abrir uma solicitação de pull".
`title` | `https://github.com/octo-org/octo-repo/compare/main...my-branch?quick_pull=1&labels=bug&title=Bug+fix+report` cria uma solicitação de pull com o rótulo "bug" e o título "Correção de bug".
`body` | `https://github.com/octo-org/octo-repo/compare/main...my-branch?quick_pull=1&title=Bug+fix&body=Describe+the+fix.` cria uma solicitação de pull com o título "Correção de bug" e o comentário "Descreva a correção" no corpo da solicitação de pull.
`labels` | `https://github.com/octo-org/octo-repo/compare/main...my-branch?quick_pull=1&labels=help+wanted,bug` cria uma solicitação de pull com os rótulos "preciso de ajuda" e "bug".
`milestone` | `https://github.com/octo-org/octo-repo/compare/main...my-branch?quick_pull=1&milestone=testing+milestones` cria uma solicitação de pull com o marco "testando marcos".
`assignees` | `https://github.com/octo-org/octo-repo/compare/main...my-branch?quick_pull=1&assignees=octocat` cria uma solicitação de pull e a atribui a @octocat.
`projects` | `https://github.com/octo-org/octo-repo/compare/main...my-branch?quick_pull=1&title=Bug+fix&projects=octo-org/1` cria uma solicitação de pull com o título "Correção de bug" e a adiciona ao quadro de projetos 1 da organização.
`template` | `https://github.com/octo-org/octo-repo/compare/main...my-branch?quick_pull=1&template=issue_template.md` cria uma solicitação de pull com um modelo no corpo da solicitação de pull. O parâmetro de consulta `template` funciona com modelos armazenados em um subdiretório `PULL_REQUEST_TEMPLATE` na raiz, o diretório `docs/` ou `.github/` de um repositório. Para obter mais informações, confira "[Como usar modelos para incentivar problemas e solicitações de pull úteis](/communities/using-templates-to-encourage-useful-issues-and-pull-requests)".
