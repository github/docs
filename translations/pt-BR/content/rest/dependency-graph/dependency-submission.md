---
title: Envio de dependência
intro: 'A API Envio de dependência permite que você envie dependências para projetos, como as dependências resolvidas quando um projeto é criado ou compilado.'
versions:
  feature: dependency-submission-api
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 72ffb8376c33972ab02c0a5fb48504b92fef3cec
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147079636'
---
## Sobre a API Envio de dependência

{% data reusables.dependency-submission.dependency-submission-api-beta %}

{% data reusables.dependency-submission.about-dependency-submission %}

As dependências são enviadas à API Envio de dependência em forma de instantâneo. Um instantâneo é um conjunto de dependências associadas a um SHA de commit e a outros metadados, que reflete o estado atual do repositório de um commit.  Você pode usar ações predefinidas ou criar as próprias ações para enviar dependências à API Envio de dependência no formato necessário sempre que o projeto for compilado. Para obter mais informações de como usar a API Envio de dependência, confira "[Como usar a API Envio de dependência](/code-security/supply-chain-security/understanding-your-software-supply-chain/using-the-dependency-submission-api)".

Você pode enviar vários conjuntos de dependências à API Envio de dependência a serem incluídos no grafo de dependência. A API usa a propriedade `job.correlator` e a categoria `detector.name` do instantâneo para garantir que os envios mais recentes de cada fluxo de trabalho sejam mostrados. A propriedade `correlator` em si é o campo primário que você usará para diferenciar os envios independentes. Um `correlator` de exemplo pode ser uma combinação simples de duas variáveis disponíveis em execuções de ações: `<GITHUB_WORKFLOW> <GITHUB_JOB>`.
