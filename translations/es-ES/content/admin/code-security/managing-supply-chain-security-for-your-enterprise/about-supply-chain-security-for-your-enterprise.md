---
title: Acerca de la seguridad de la cadena de suministro para la empresa
intro: Puedes habilitar características que ayuden a los desarrolladores a comprender y actualizar las dependencias en las que se basa tu código.
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
ms.contentlocale: es-ES
ms.lasthandoff: 11/07/2022
ms.locfileid: '148135699'
---
Puedes permitir que los usuarios identifiquen las dependencias de sus proyectos mediante la {% ifversion ghes %}habilitación{% elsif ghae %}con{% endif %} el gráfico de dependencias para {% data variables.location.product_location %}. Para obtener más información, consulta "{% ifversion ghes %}[Habilitación del gráfico de dependencias para la empresa](/admin/code-security/managing-supply-chain-security-for-your-enterprise/enabling-the-dependency-graph-for-your-enterprise){% elsif ghae %}[Acerca del gráfico de dependencias](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph){% endif %}".

{% data reusables.dependency-review.dependency-review-enabled-ghes %}

También puedes permitir que los usuarios de {% data variables.location.product_location %} busquen y corrijan vulnerabilidades en sus dependencias de código habilitando {% data variables.product.prodname_dependabot_alerts %}{% ifversion ghes %} y {% data variables.product.prodname_dependabot_updates %}{% endif %}. Para obtener más información, consulte "[Habilitación de {% data variables.product.prodname_dependabot %} para la empresa](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)".

Después de habilitar {% data variables.product.prodname_dependabot_alerts %}, puedes ver los datos de vulnerabilidad desde {% data variables.product.prodname_advisory_database %} en {% data variables.location.product_location %} y sincronizar manualmente los datos. Para obtener más información, consulta "[Visualización de los datos de vulnerabilidad de la empresa](/admin/code-security/managing-supply-chain-security-for-your-enterprise/viewing-the-vulnerability-data-for-your-enterprise)".
