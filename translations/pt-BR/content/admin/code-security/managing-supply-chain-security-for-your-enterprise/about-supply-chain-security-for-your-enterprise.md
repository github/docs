---
title: Sobre a segurança da cadeia de suprimento da sua empresa
intro: Você pode habilitar recursos que ajudam seus desenvolvedores a entender e atualizar as dependências das quais o código do seu projeto depende.
shortTitle: About supply chain security
permissions: ''
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - Security
  - Dependency graph
ms.openlocfilehash: f99085f6c484869623a81c7585216aca936929e1
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145096008'
---
Você pode permitir que os usuários identifiquem as dependências dos projetos {% ifversion ghes %}habilitando{% elsif ghae %}usando{% endif %} o grafo de dependência para o {% data variables.product.product_location %}. Para obter mais informações, confira "{% ifversion ghes %}[Como habilitar o grafo de dependência para sua empresa](/admin/code-security/managing-supply-chain-security-for-your-enterprise/enabling-the-dependency-graph-for-your-enterprise){% elsif ghae %}[Sobre o grafo de dependência](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph){% endif %}".

Você também pode permitir que os usuários do {% data variables.product.product_location %} encontrem e corrijam vulnerabilidades nas dependências do código habilitando os {% data variables.product.prodname_dependabot_alerts %}{% ifversion ghes > 3.2 %} e as {% data variables.product.prodname_dependabot_updates %}{% endif %}. Para obter mais informações, confira "[Como habilitar o {% data variables.product.prodname_dependabot %} para sua empresa](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)".

Depois de habilitar o {% data variables.product.prodname_dependabot_alerts %}, você poderá ver os dados da vulnerabilidade de {% data variables.product.prodname_advisory_database %} em {% data variables.product.product_location %} e sincronizar manualmente os dados. Para obter mais informações, confira "[Como ver os dados de vulnerabilidade da sua empresa](/admin/code-security/managing-supply-chain-security-for-your-enterprise/viewing-the-vulnerability-data-for-your-enterprise)".
