---
title: Versões da API
shortTitle: API Versions
intro: Especifique qual versão da API REST usar sempre que fizer uma solicitação à API REST.
versions:
  feature: api-date-versioning
ms.openlocfilehash: c1209120fab4c4cc26962991ad48b76638627db5
ms.sourcegitcommit: d2f0b59ed096b9e68ef8f6fa019cd925165762ec
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/29/2022
ms.locfileid: '148184383'
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

Você também pode fazer com que uma solicitação de API obtenha todas as versões de API com suporte. Para saber mais, confira "[Obter todas as versões da API](/rest/meta#get-all-api-versions)."
