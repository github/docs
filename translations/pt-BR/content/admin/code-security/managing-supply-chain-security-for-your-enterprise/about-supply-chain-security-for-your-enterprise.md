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
ms.openlocfilehash: edfa8c2abecfa4eb7dc797d1dac3a06827fff5d7
ms.sourcegitcommit: 6bd8fe6d49214743f82fa2dc71847c241f140c87
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/07/2022
ms.locfileid: '148135692'
---
Você pode permitir que os usuários identifiquem as dependências dos projetos {% ifversion ghes %}habilitando{% elsif ghae %}usando{% endif %} o grafo de dependência de {% data variables.location.product_location %}. Para obter mais informações, confira "{% ifversion ghes %}[Como habilitar o grafo de dependência para sua empresa](/admin/code-security/managing-supply-chain-security-for-your-enterprise/enabling-the-dependency-graph-for-your-enterprise){% elsif ghae %}[Sobre o grafo de dependência](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph){% endif %}".

{% data reusables.dependency-review.dependency-review-enabled-ghes %}

Você também pode permitir que os usuários de {% data variables.location.product_location %} encontrem e corrijam vulnerabilidades nas dependências do código habilitando os {% data variables.product.prodname_dependabot_alerts %}{% ifversion ghes %} e as {% data variables.product.prodname_dependabot_updates %}{% endif %}. Para obter mais informações, confira "[Como habilitar o {% data variables.product.prodname_dependabot %} para sua empresa](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)".

Depois de habilitar os {% data variables.product.prodname_dependabot_alerts %}, você poderá ver os dados de vulnerabilidade do {% data variables.product.prodname_advisory_database %} em {% data variables.location.product_location %} e sincronizar os dados manualmente. Para obter mais informações, confira "[Como ver os dados de vulnerabilidade da sua empresa](/admin/code-security/managing-supply-chain-security-for-your-enterprise/viewing-the-vulnerability-data-for-your-enterprise)".
