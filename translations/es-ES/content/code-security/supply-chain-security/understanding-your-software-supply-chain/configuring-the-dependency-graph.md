---
title: Configuración del gráfico de dependencias
intro: Puedes permitir que los usuarios identifiquen las dependencias de sus proyectos si habilitas el gráfico de dependencias.
redirect_from:
  - /code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph#enabling-the-dependency-graph
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Dependency graph
  - Dependencies
  - Repositories
shortTitle: Configure dependency graph
ms.openlocfilehash: 24dcaac4ddd994d544f6caa7d04529e1e4a5d569
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '146684081'
---
## Acerca del gráfico de dependencias

{% data reusables.dependabot.about-the-dependency-graph %}  

Para más información, vea "[Acerca del gráfico de dependencias](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph)".

{% ifversion fpt or ghec %}
## Acerca de la configuración del gráfico de dependencias 
Para generar un gráfico de dependencias, {% data variables.product.product_name %} necesita acceso de solo lectura a los archivos de manifiesto de dependencias y de bloqueo de un repositorio. La gráfica de dependencias se genera automáticamente para todos los repositorios públicos y puedes elegir habilitarla para los privados. Para obtener más información sobre la visualización del gráfico de dependencias, consulta "[Exploración de las dependencias de un repositorio](/github/visualizing-repository-data-with-graphs/exploring-the-dependencies-of-a-repository)".

{% data reusables.dependency-submission.dependency-submission-link %} {% endif %}

{% ifversion ghes %} ## Habilitación del gráfico de dependencias {% data reusables.dependabot.ghes-ghae-enabling-dependency-graph %}{% endif %}{% ifversion fpt or ghec %}

### Habilitar e inhabilitar la gráfica de dependencias para un repositorio privado

{% data reusables.dependabot.enabling-disabling-dependency-graph-private-repo %} {% endif %}

Cuando la gráfica de dependencias se habilita por primera vez, cualquier manifiesto y archivo de bloqueo para los ecosistemas compatibles se pasarán de inmediato. La gráfica se llena en cuestión de minutos habitualmente, pero esto puede tardar más para los repositorios que tengan muchas dependencias. Una vez que está habilitado, el gráfico se actualiza automáticamente con cada inserción en el repositorio{% ifversion fpt or ghec %} y con cada inserción en otros repositorios del gráfico{% endif %}.

{% ifversion ghes %} {% ifversion dependency-submission-api %}{% data reusables.dependency-submission.dependency-submission-link %}{% endif %} {% endif %}

## Información adicional

{% ifversion ghec %}- "[Visualización de conclusiones de la organización](/organizations/collaborating-with-groups-in-organizations/viewing-insights-for-your-organization)"{% endif %}
- "[Visualización y actualización de {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts)"
- "[Solución de problemas en la detección de dependencias vulnerables](/github/managing-security-vulnerabilities/troubleshooting-the-detection-of-vulnerable-dependencies)"
