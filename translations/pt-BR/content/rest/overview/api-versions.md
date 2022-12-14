---
title: Versões da API
shortTitle: API Versions
intro: Especifique qual versão da API REST usar sempre que fizer uma solicitação à API REST.
versions:
  feature: api-date-versioning
ms.openlocfilehash: 6689d8c342930a44c7d243c3872cdc431007eb1c
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192862'
---
## Sobre o controle de versão da API

{% data reusables.rest-api.about-api-versions %}

{% ifversion ghes %}

## Sobre o controle de versão do {% data variables.product.prodname_ghe_server %} e o controle de versão da API REST

As versões do {% data variables.product.prodname_ghe_server %} são dissociadas das versões da API REST. Você pode atualizar sua versão do {% data variables.product.prodname_ghe_server %}, mas manter a mesma versão da API REST, desde que a versão da API seja incluída na versão do {% data variables.product.prodname_ghe_server %}. Da mesma forma, você pode atualizar sua versão da API REST sem atualizar sua versão do {% data variables.product.prodname_ghe_server %}, desde que a nova versão da API REST escolhida esteja disponível para sua versão do {% data variables.product.prodname_ghe_server %}.

As notas sobre a versão do {% data variables.product.prodname_ghe_server %} serão declaradas quando uma versão da API REST não tiver mais suporte. Para obter mais informações, confira as "[Notas sobre a versão](/admin/release-notes)".

{% endif %}

## Especificando uma versão da API

Você deve usar o cabeçalho `X-GitHub-Api-Version` para especificar uma versão da API. Por exemplo:

```shell
$ curl {% data reusables.rest-api.version-header %} https://api.github.com/zen
```

As solicitações sem o cabeçalho `X-GitHub-Api-Version` usarão a versão `{{ initialRestVersioningReleaseDate }}` padrão.

Se você especificar uma versão da API que não tem mais suporte, receberá um erro `400`.

## Atualizando para o nova versão da API

Antes de atualizar para uma nova versão da API REST, leia o log de alterações de alterações interruptivas da nova versão da API para entender quais alterações interruptivas estão incluídas e saber mais sobre como atualizar para essa versão específica da API. Para saber mais, confira "[Alteração interruptiva](/rest/overview/breaking-changes)".

Ao atualizar sua integração para especificar a nova versão da API no cabeçalho `X-GitHub-Api-Version`, você também precisará fazer as alterações necessárias para que sua integração funcione com a nova versão da API.

Após a atualização da integração, teste sua integração para verificar se ela funciona com a nova versão da API.

## Versões de API com suporte

No momento, há suporte para as seguintes versões da API REST:

{% for apiVersion in allVersions[currentVersion].apiVersions %} {{ apiVersion }} {% endfor %}

Você também pode fazer uma solicitação de API para obter todas as versões de API com suporte. Para saber mais, confira "[Obter todas as versões da API](/rest/meta#get-all-api-versions)."
