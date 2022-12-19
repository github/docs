---
title: Pré-visualizações da API
intro: Você pode usar pré-visualizações da API para testar novos recursos e fornecer feedback antes que estes recursos se tornem oficiais.
redirect_from:
  - /v3/previews
versions:
  ghes: <3.4
topics:
  - API
ms.openlocfilehash: d637b59fc72332ee142cec78653907c2bfeebdc0
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108261'
---
Pré-visualizações da API permitem que você experimente novas APIs e alterações nos métodos de API existentes antes de se tornarem parte da API oficial do GitHub.

Durante o período de pré-visualização, poderemos alterar alguns recursos com base no feedback do desenvolvedor. Se fizermos alterações, nós as anunciaremos no [blog do desenvolvedor](https://developer.github.com/changes/) sem aviso prévio.

Para acessar uma versão prévia de API, você precisará fornecer um [tipo de mídia](/rest/overview/media-types) personalizado no cabeçalho `Accept` das solicitações. A documentação dos recursos para cada pré-visualização especifica qual tipo de mídia personalizado deve ser fornecido.

{% ifversion ghes < 3.4 %}
## Anexos de conteúdo

Agora você pode fornecer mais informações no GitHub para URLs vinculadas a domínios registrados usando a API de {% data variables.product.prodname_unfurls %}. Confira "[Usar anexos de conteúdo](/apps/using-content-attachments/)" para obter mais detalhes.

**Tipos de mídia personalizados:** `corsair-preview`
**Anúncio:** [2018-12-10](https://developer.github.com/changes/2018-12-10-content-attachments-api/)

{% endif %}


