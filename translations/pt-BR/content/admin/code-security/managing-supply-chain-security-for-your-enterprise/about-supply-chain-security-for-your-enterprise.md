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
ms.openlocfilehash: 7f1c658285e88065ad1a232fc13c9186be143119
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107194'
---
Você pode permitir que os usuários identifiquem as dependências dos projetos {% ifversion ghes %}habilitando{% elsif ghae %}usando{% endif %} o grafo de dependência de {% data variables.location.product_location %}. Para obter mais informações, confira "{% ifversion ghes %}[Como habilitar o grafo de dependência para sua empresa](/admin/code-security/managing-supply-chain-security-for-your-enterprise/enabling-the-dependency-graph-for-your-enterprise){% elsif ghae %}[Sobre o grafo de dependência](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph){% endif %}".

Você também pode permitir que os usuários de {% data variables.location.product_location %} encontrem e corrijam vulnerabilidades nas dependências do código habilitando os {% data variables.product.prodname_dependabot_alerts %}{% ifversion ghes %} e as {% data variables.product.prodname_dependabot_updates %}{% endif %}. Para obter mais informações, confira "[Como habilitar o {% data variables.product.prodname_dependabot %} para sua empresa](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)".

Depois de habilitar os {% data variables.product.prodname_dependabot_alerts %}, você poderá ver os dados de vulnerabilidade do {% data variables.product.prodname_advisory_database %} em {% data variables.location.product_location %} e sincronizar os dados manualmente. Para obter mais informações, confira "[Como ver os dados de vulnerabilidade da sua empresa](/admin/code-security/managing-supply-chain-security-for-your-enterprise/viewing-the-vulnerability-data-for-your-enterprise)".
