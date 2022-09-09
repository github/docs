---
title: Verificação de segredo
intro: Use a API a digitalização de segredo para recuperar e atualizar alertas de segredos de um repositório.
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
redirect_from:
  - /rest/reference/secret-scanning
ms.openlocfilehash: d17aa63bb3d7e71adb310c66cabb05a83776b78f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147066800'
---
{% data reusables.secret-scanning.api-beta %}

## Sobre a API de Verificação de segredos

A API do {% data variables.product.prodname_secret_scanning %} permite que você:

- Habilite ou desabilite a {% data variables.product.prodname_secret_scanning %}{% ifversion secret-scanning-push-protection %} e a proteção por push{% endif %} em um repositório. Para obter mais informações, confira "[Repositórios](/rest/repos/repos#update-a-repository)" e expanda a seção "Propriedades do objeto `security_and_analysis`" na documentação da API REST.
- Recuperar e atualizar os alertas da {% data variables.product.prodname_secret_scanning_GHAS %} de um repositório. Para obter mais detalhes, confira as seções abaixo.

Para obter mais informações sobre a {% data variables.product.prodname_secret_scanning %}, confira "[Sobre a {% data variables.product.prodname_secret_scanning %}](/code-security/secret-security/about-secret-scanning)".
