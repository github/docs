---
title: Administración de la configuración de seguridad y análisis para la cuenta personal
intro: 'Puedes controlar las características que dan seguridad y analizan tu código en tus proyectos dentro de {% data variables.product.prodname_dotcom %}.'
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
topics:
  - Accounts
redirect_from:
  - /github/setting-up-and-managing-your-github-user-account/managing-security-and-analysis-settings-for-your-user-account
  - /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/managing-security-and-analysis-settings-for-your-user-account
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/managing-security-and-analysis-settings-for-your-user-account
shortTitle: Manage security & analysis
ms.openlocfilehash: 22ff867691f79360db54f0fe85f5e988c71536a3
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109865'
---
## Acerca de la administración de los parámetros de seguridad y análisis

{% data variables.product.prodname_dotcom %} puede ayudarte a asegurar tus repositorios. Este tema te muestra cómo puedes administrar las características de seguridad y análisis para todos tus repositorios existentes o nuevos.

Aún puedes administrar las características de seguridad y análisis para los repositorios individuales. Para más información, vea "[Administración de la configuración de seguridad y análisis para el repositorio](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)".

También puedes revisar el registro de seguridad para toda la actividad de tu cuenta personal. Para más información, vea "[Revisión del registro de seguridad](/authentication/keeping-your-account-and-data-secure/reviewing-your-security-log)".

{% data reusables.security.some-security-and-analysis-features-are-enabled-by-default %}

{% data reusables.security.security-and-analysis-features-enable-read-only %}

Para obtener información general sobre la seguridad de nivel de repositorio, vea "[Protección del repositorio](/code-security/getting-started/securing-your-repository)".

## Habilitar o inhabilitar las características para los repositorios existentes

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.security-analysis %}
3. En "Seguridad y análisis de código", a la derecha de la característica, haga clic en **Deshabilitar todo** o **Habilitar todo**.
  {% ifversion ghes %}![Botón "Habilitar todo" o "Deshabilitar todo" para la característica "Configurar seguridad y análisis"](/assets/images/enterprise/3.3/settings/security-and-analysis-disable-or-enable-all.png){% else %}![Botón "Habilitar todo" o "Deshabilitar todo" para la característica "Configurar seguridad y análisis"](/assets/images/help/settings/security-and-analysis-disable-or-enable-all.png){% endif %}
6. Opcionalmente, habilita la característica predeterminada para los repositorios nuevos que te pertenezcan.
  {% ifversion ghes %}![Opción "Habilitar de manera predeterminada" para los nuevos repositorios](/assets/images/enterprise/3.3/settings/security-and-analysis-enable-by-default-in-modal.png){% else %}![Opción "Habilitar de manera predeterminada" para los nuevos repositorios](/assets/images/help/settings/security-and-analysis-enable-by-default-in-modal.png){% endif %}
7. Haga clic en **Disable FEATURE** o **Enable FEATURE** a fin de deshabilitar o habilitar la característica para todos los repositorios que posea.
  {% ifversion ghes %}![Botón para deshabilitar o habilitar la característica](/assets/images/enterprise/3.3/settings/security-and-analysis-enable-dependency-graph.png){% else %}![Botón para deshabilitar o habilitar la característica](/assets/images/help/settings/security-and-analysis-enable-dependency-graph.png){% endif %}

{% data reusables.security.displayed-information %}

## Habilitar o inhabilitar las características para los repositorios nuevos

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.security-analysis %}
3. Debajo de "Análisis y seguridad del código", a la derecha de la característica, habilítala o inhabilítala predeterminadamente para los repositorios nuevos que te pertenezcan.
  {% ifversion ghes %}![Casilla a fin de habilitar o deshabilitar una característica para nuevos repositorios](/assets/images/enterprise/3.3/settings/security-and-analysis-enable-or-disable-feature-checkbox.png){% else %}![Casilla a fin de habilitar o deshabilitar una característica para nuevos repositorios](/assets/images/help/settings/security-and-analysis-enable-or-disable-feature-checkbox.png){% endif %}

## Información adicional

- "[Acerca del gráfico de dependencias](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)"
- "[Acerca de {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)"
- "[Mantenimiento de las dependencias actualizadas automáticamente](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically)"
