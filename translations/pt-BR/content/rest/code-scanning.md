---
title: Verificação de código
intro: 'A API de {% data variables.product.prodname_code_scanning %} permite que você recupere e atualize alertas de {% data variables.product.prodname_code_scanning %} alertas de um repositório.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
  - Code scanning
  - REST
miniTocMaxHeadingLevel: 3
redirect_from:
  - /rest/reference/code-scanning
ms.openlocfilehash: 29e04fddb96212e716f2f54b1b62e99fcff1e4da
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147061391'
---
{% data reusables.code-scanning.beta %}

## Sobre a API de Verificação de código

A API de {% data variables.product.prodname_code_scanning %} permite que você recupere e atualize alertas de {% data variables.product.prodname_code_scanning %} alertas de um repositório. Você pode usar os pontos de extremidade para criar relatórios automatizados para os alertas de {% data variables.product.prodname_code_scanning %} em uma organização ou fazer upload dos resultados de análise gerados usando as ferramentas off-line de {% data variables.product.prodname_code_scanning %}. Para obter mais informações, confira "[Como encontrar vulnerabilidades de segurança e erros no seu código](/github/finding-security-vulnerabilities-and-errors-in-your-code)".

### Tipo de mídia personalizada para {% data variables.product.prodname_code_scanning %}

Existe um tipo de mídia personalizada com suporte para a API REST de {% data variables.product.prodname_code_scanning %}. 

    application/sarif+json

Use isso com solicitações `GET` enviadas ao ponto de extremidade `/analyses/{analysis_id}`. Para obter mais informações sobre essa operação, confira "[Obter uma análise da {% data variables.product.prodname_code_scanning %} para um repositório](#get-a-code-scanning-analysis-for-a-repository)". Quando você usa esse tipo de mídia com essa operação, a resposta inclui um subconjunto dos dados reais que foram carregados para a análise especificada, em vez do resumo da análise retornada quando você usa o tipo de mídia padrão. A resposta também inclui dados adicionais, como as propriedades `github/alertNumber` e `github/alertUrl`. Os dados são formatados como [SARIF versão 2.1.0](https://docs.oasis-open.org/sarif/sarif/v2.1.0/cs01/sarif-v2.1.0-cs01.html).

Para obter mais informações, confira "[Tipos de mídia](/rest/overview/media-types)".
