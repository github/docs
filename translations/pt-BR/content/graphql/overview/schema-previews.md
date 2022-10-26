---
title: Pré-visualizações de esquema
intro: 'Você pode visualizar os próximos recursos e alterações para o esquema do GraphQL do {% data variables.product.prodname_dotcom %} antes de eles serem adicionados à API do GraphQL de {% data variables.product.prodname_dotcom %}.'
redirect_from:
  - /v4/previews
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
topics:
  - API
ms.openlocfilehash: 038afd8cbdd60863213eae385ec9a26f707f62d8
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107852'
---
## Sobre pré-visualizações de esquemas

Durante o período de pré-visualização, poderemos alterar alguns recursos com base no feedback do desenvolvedor. Se fizermos alterações, nós as anunciaremos no [blog do desenvolvedor](https://developer.github.com/changes/) sem aviso prévio.

Para acessar uma versão prévia de esquema, você precisará fornecer um [tipo de mídia](/rest/overview/media-types) personalizado no cabeçalho `Accept` das solicitações. A documentação dos recursos para cada pré-visualização especifica qual tipo de mídia personalizado deve ser fornecido.

{% note %}

**Observação:** no momento, os membros do esquema do GraphQL em versão prévia não podem ser acessados por meio do Explorer.

{% endnote %}
