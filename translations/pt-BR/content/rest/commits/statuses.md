---
title: Status do commit
intro: 'A API de status de commit permite que serviços externos marquem commits com um status, que é refletido em solicitações pull envolvendo esses commits.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 4c75b4817ecddad0e91460d7d12eddabc634d588
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '147882292'
---
## Sobre a API de status de commit

A API de status de commit permite que os serviços externos marquem os commits com um estado `error`, `failure`, `pending` ou `success`, que, em seguida, é refletido nas solicitações de pull que envolvem esses commits. Os status também podem incluir uma `description` e uma `target_url` opcionais, e recomendamos expressamente fornecê-las, pois tornam os status muito mais úteis na interface do usuário do GitHub.

Por exemplo, um uso comum disso é para os serviços de integração contínua marcarem os commits como builds aprovados ou com falha usando o status.  A `target_url` será a URL completa para a saída de build, e a `description` será o resumo de alto nível do que aconteceu com o build.

Os status podem incluir um `context` para indicar o serviço que está fornecendo esse status. Por exemplo, você pode fazer com que o serviço de integração contínua efetue push dos status com o contexto `ci`, e uma ferramenta de auditoria de segurança efetue push dos status com o contexto `security`.  Em seguida, você pode usar [Obter o status combinado para uma referência específica](/rest/reference/commits#get-the-combined-status-for-a-specific-reference) para recuperar todos os status de um commit.

Observe que o [escopo OAuth](/developers/apps/scopes-for-oauth-apps) `repo:status` permite acesso direcionado aos status **sem** também permitir acesso ao código do repositório, enquanto o escopo `repo` concede permissão no código, bem como no status.

Se você estiver desenvolvendo um Aplicativo do GitHub e quiser fornecer informações mais detalhadas sobre um serviço externo, use a [API de Verificações](/rest/reference/checks).
