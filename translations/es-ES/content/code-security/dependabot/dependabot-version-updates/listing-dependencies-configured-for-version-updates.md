---
title: Listar dependencias configuradas para las actualizaciones de versión
intro: 'Puedes ver las dependencias que monitorea el {% data variables.product.prodname_dependabot %} pára encontrar actualizaciones.'
redirect_from:
  - /github/administering-a-repository/listing-dependencies-configured-for-version-updates
  - /code-security/supply-chain-security/listing-dependencies-configured-for-version-updates
  - /code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/listing-dependencies-configured-for-version-updates
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>3.2'
type: how_to
topics:
  - Repositories
  - Dependabot
  - Version updates
  - Dependencies
shortTitle: List configured dependencies
ms.openlocfilehash: 8028c10c39d4b045206954fc38ed805b5432e553
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '145125960'
---
{% data reusables.dependabot.beta-security-and-version-updates %} {% data reusables.dependabot.enterprise-enable-dependabot %}

## Visualizar dependencias que monitorea el {% data variables.product.prodname_dependabot %}

Después de habilitar las actualizaciones de versión, puede confirmar que su configuración es la correcta mediante la pestaña **{% data variables.product.prodname_dependabot %}** en el gráfico de dependencias para el repositorio. Para más información, vea "[Configuración de las actualizaciones de la versión de {% data variables.product.prodname_dependabot %}](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/enabling-and-disabling-dependabot-version-updates)".

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.accessing-repository-graphs %} {% data reusables.repositories.click-dependency-graph %} {% data reusables.dependabot.click-dependabot-tab %}
1. Opcionalmente, a fin de ver los archivos que se supervisan para un administrador de paquetes, haga clic en el {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} asociado.
  ![Archivos de dependencia supervisados](/assets/images/help/dependabot/monitored-dependency-files.png)

Si no encuentras alguna dependencia, revisa los archivos de bitácora para ver los errores. En caso de que no encuentres algún administrador de paquete, revisa el archivo de configuración.

## Visualizar los archivos de bitácora del {% data variables.product.prodname_dependabot %}

1. En la pestaña **{% data variables.product.prodname_dependabot %}** , haga clic **Last checked *TIME* ago** (Última comprobación hace TIME) para ver el archivo de registro que {% data variables.product.prodname_dependabot %} generó durante la última comprobación de actualizaciones de la versión.
  ![Ver el archivo de registros](/assets/images/help/dependabot/last-checked-link.png)
2. Opcionalmente, para volver a ejecutar la comprobación de versión, haga clic en **Check for updates** (Buscar actualizaciones).
  ![Revisar si hay actualizaciones](/assets/images/help/dependabot/check-for-updates.png)
