---
title: Análise de dependência
intro: A API Revisão de dependência permite que você entenda as alterações de dependência e o impacto na segurança dessas alterações antes de adicioná-las ao ambiente.
versions:
  fpt: '*'
  ghes: '>=3.6'
  ghec: '*'
  ghae: '>= 3.6'
topics:
  - API
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 64cb77b737927e8d44315fd40b51f68c77c50c54
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147064871'
---
## Sobre a API de Revisão de Dependência

{% data reusables.dependency-review.dependency-review-api-beta-note %}

A API de Revisão de Dependência permite que você entenda as alterações de dependência e o impacto na segurança dessas alterações antes de adicioná-las ao seu ambiente. Você pode ver a comparação de dependências entre dois commits de um repositório, incluindo dados de vulnerabilidade para todas as atualizações de versão com vulnerabilidades conhecidas. Para obter mais informações sobre a revisão de dependência, confira "[Sobre a revisão de dependência](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review)".
