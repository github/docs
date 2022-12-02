---
title: Alterações de quebra
shortTitle: Breaking changes
intro: Saiba mais sobre as alterações interruptivas introduzidas em cada versão da API REST.
versions:
  feature: api-date-versioning
ms.openlocfilehash: 674345b82c5da9b0804fe4a0f62450ff4fbbc3e9
ms.sourcegitcommit: d2f0b59ed096b9e68ef8f6fa019cd925165762ec
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/29/2022
ms.locfileid: '148184384'
---
## Sobre alterações interruptivas na API REST

{% data reusables.rest-api.about-api-versions %}

Para obter mais informações sobre as versões da API, confira "[Versões de API](/rest/overview/api-versions)".

## Atualizando para o nova versão da API

Antes de atualizar para uma nova versão da API REST, leia a seção nesta página que corresponde à nova versão da API para entender quais alterações interruptivas estão incluídas e saber mais sobre como atualizar para essa versão da API.

Ao atualizar sua integração para especificar a nova versão da API no cabeçalho `X-GitHub-Api-Version`, você também precisará fazer as alterações necessárias para que sua integração funcione com a nova versão da API.

Após a atualização da integração, teste sua integração para verificar se ela funciona com a nova versão da API.

## Alterações interruptivas para {{ initialRestVersioningReleaseDate }}

A versão `{{ initialRestVersioningReleaseDate }}` é a primeira versão da API REST do {% data variables.product.product_name %} após a introdução do controle de versão baseado em data. Esta versão não inclui nenhuma alteração interruptiva.
