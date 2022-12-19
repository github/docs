---
title: GitHub Marketplace
allowTitleToDifferFromFilename: true
shortTitle: Marketplace
intro: ''
topics:
  - API
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
ms.openlocfilehash: acbdb60fc93898dd7c56c21f60e12fb9dbadb31d
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145126898'
---
## Sobre a API {% data variables.product.prodname_marketplace %}

Para obter mais informações sobre o {% data variables.product.prodname_marketplace %}, confira "[GitHub Marketplace](/marketplace/)".

A API de {% data variables.product.prodname_marketplace %} permite que você veja quais clientes estão usando um plano de preços, as compras de um cliente e se uma conta tem uma assinatura ativa.

### Fazer testes com pontos de extremidades de amostra

Essa API inclui pontos de extremidade que permitem [testar seu {% data variables.product.prodname_github_app %}](/marketplace/integrating-with-the-github-marketplace-api/testing-github-marketplace-apps/) com os **dados fragmentados**. Os dados do de amostra têm código rígido, dados falsos e não serão alterados com base em assinaturas reais.

Para fazer teste com dados de amostra, use um pontos de extremidade de amostra no lugar da sua contraparte de produção. Isso permite que você teste se a lógica da API é bem-sucedida antes de anunciar {% data variables.product.prodname_github_apps %} em {% data variables.product.prodname_marketplace %}.

Certifique-se de substituir pontos de extremidades de amostra pelos pontos de extremidades de produção antes de implantar seu {% data variables.product.prodname_github_app %}.
