---
title: Administrar la configuración de uso de datos para tu repositorio privado
intro: 'Para ayudar a que {% data variables.product.product_name %} te conecte a las herramientas, proyectos, personas e información relevantes, puedes configurar el uso de datos para tu repositorio privado.'
redirect_from:
  - /articles/opting-into-or-out-of-data-use-for-your-private-repository
  - /github/understanding-how-github-uses-and-protects-your-data/opting-into-or-out-of-data-use-for-your-private-repository
  - /github/understanding-how-github-uses-and-protects-your-data/managing-data-use-settings-for-your-private-repository
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Policy
  - Legal
shortTitle: Manage data use for private repo
ms.openlocfilehash: 36ddc4449726b67863e7d4e045dd1582b12f2c27
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147526674'
---
## Acerca del uso de datos para tu repositorio privado


Puede controlar el uso de datos para el repositorio privado con las características de seguridad y análisis. 

- Habilite el gráfico de dependencias para permitir el análisis de datos de solo lectura en el repositorio. 
- Deshabilite el gráfico de dependencias para impedir el análisis de datos de solo lectura en el repositorio. 

Cuando habilitas el uso de datos para tu repositorio privado, podrás acceder a la gráfica de dependencias, en donde puedes rastrear las dependencias de tus repositorios y recibir las {% data variables.product.prodname_dependabot_alerts %} cuando {% data variables.product.product_name %} detecte las dependencias vulnerables. Para más información, vea "[Acerca de {% data variables.product.prodname_dependabot_alerts %}](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies#dependabot-alerts-for-vulnerable-dependencies)".


{% note %}

**Nota:** Si deshabilita el gráfico de dependencias, también se deshabilitan {% data variables.product.prodname_dependabot_alerts %} y {% data variables.product.prodname_dependabot_security_updates %}. Para más información, vea "[Acerca del gráfico de dependencias](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph)". 

{% endnote %}

## Habilitación o deshabilitación del uso de datos mediante características de seguridad y análisis

{% data reusables.security.security-and-analysis-features-enable-read-only %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-code-security-and-analysis %}
4. En "Seguridad y análisis de código", a la derecha de la característica, haga clic en **Deshabilitar** o **Habilitar**.{% ifversion fpt %} ![Botón "Habilitar" o "Deshabilitar" para las características de "Seguridad y análisis de código"](/assets/images/help/repository/security-and-analysis-disable-or-enable-fpt-private.png){% elsif ghec %} !["Enable" or "Disable" button for "Configure security and analysis" features](/assets/images/help/repository/security-and-analysis-disable-or-enable-ghec-private.png){% endif %}

## Información adicional

- "[Acerca del uso de los datos en {% data variables.product.prodname_dotcom %}](/articles/about-github-s-use-of-your-data)"
- "[Visualización y actualización de {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts)"
- "[Administración de la configuración de seguridad y análisis para el repositorio](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)"
