---
title: Marcar com uma estrela
intro: A API de Marcação com Estrelas permite que você adicione um repositório aos favoritos.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 267d87a4120bba3dbfd080bcfe3e59b1ee3ec6d1
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147064247'
---
## Sobre a API de Marcação com Estrelas

A API de Marcação com Estrelas permite que você adicione um repositório aos favoritos. As estrelas são exibidas ao lado dos repositórios para mostrar um nível de interesse aproximado. As estrelas não têm efeito nas notificações ou no feed da atividade. Para obter mais informações, confira "[Salvando repositórios com estrelas](/get-started/exploring-projects-on-github/saving-repositories-with-stars)".

### Marcar como estrela vs. Inspecionar

Em agosto de 2012, [alteramos o funcionamento da inspeção](https://github.com/blog/1204-notifications-stars) no {% data variables.product.prodname_dotcom %}. Talvez muitos aplicativos cliente da API estejam usando os pontos de extremidade "observadores" originais para acessar esses dados. Você já pode começar a usar os pontos de extremidade "estrela" (descritos abaixo). Para obter mais informações, confira a [postagem Alteração da API do Observador](https://developer.github.com/changes/2012-09-05-watcher-api/) e a "[API de Observação do Repositório](/rest/reference/activity#watching)".

### Tipos de mídia personalizados para marcar como estrela

Existe um tipo de mídia personalizado com suporte para a API REST estrelada. Ao usar esse tipo de mídia personalizado, você receberá uma resposta com a propriedade de carimbo de data/hora `starred_at` que indica a hora em que a estrela foi criada. A resposta também tem uma segunda propriedade que inclui o recurso retornado quando o tipo de mídia personalizado não está incluído. A propriedade que contém o recurso será `user` ou `repo`.

    application/vnd.github.star+json

Para obter mais informações sobre os tipos de mídia, confira "[Tipos de mídia personalizados](/rest/overview/media-types)".
