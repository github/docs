---
title: Administrar la configuración de seguridad y análisis para tu cuenta de usuario
intro: You can control features that secure and analyze the code in your projects on {% data variables.product.prodname_dotcom %}.
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>3.2'
topics:
- Accounts
redirect_from:
- /github/setting-up-and-managing-your-github-user-account/managing-security-and-analysis-settings-for-your-user-account
- /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/managing-security-and-analysis-settings-for-your-user-account
shortTitle: Manage security & analysis
ms.openlocfilehash: 1a025a46dc42252a2e3c0facbe6b3beffa48cf45
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 05/17/2022
ms.locfileid: "145091932"
---
## <a name="about-management-of-security-and-analysis-settings"></a>Acerca de la administración de los parámetros de seguridad y análisis

{% data variables.product.prodname_dotcom %} puede ayudarte a asegurar tus repositorios. Este tema te muestra cómo puedes administrar las características de seguridad y análisis para todos tus repositorios existentes o nuevos.

Aún puedes administrar las características de seguridad y análisis para los repositorios individuales. Para más información, vea "[Administración de la configuración de seguridad y análisis para el repositorio](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)".

También puedes revisar el registro de seguridad para toda la actividad de tu cuenta personal. Para más información, vea "[Revisión del registro de seguridad](/authentication/keeping-your-account-and-data-secure/reviewing-your-security-log)".

{% data reusables.security.some-security-and-analysis-features-are-enabled-by-default %}

{% data reusables.security.security-and-analysis-features-enable-read-only %}

Para obtener información general sobre la seguridad de nivel de repositorio, vea "[Protección del repositorio](/code-security/getting-started/securing-your-repository)".

## <a name="enabling-or-disabling-features-for-existing-repositories"></a>Habilitar o inhabilitar las características para los repositorios existentes

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.security-analysis %}
3. En "Seguridad y análisis de código", a la derecha de la característica, haga clic en **Deshabilitar todo** o **Habilitar todo**.
  {% ifversion ghes > 3.2 %}![Botón "Habilitar todo" o "Deshabilitar todo" para "Configurar características de seguridad y análisis"](/assets/images/enterprise/3.3/settings/security-and-analysis-disable-or-enable-all.png){% else %}!["Enable all" or "Disable all" button for "Configure security and analysis" features](/assets/images/help/settings/security-and-analysis-disable-or-enable-all.png){% endif %}
6. Opcionalmente, habilita la característica predeterminada para los repositorios nuevos que te pertenezcan.
  {% ifversion ghes > 3.2 %}![Opción "Habilitar de forma predeterminada" para los nuevos repositorios](/assets/images/enterprise/3.3/settings/security-and-analysis-enable-by-default-in-modal.png){% else %}!["Enable by default" option for new repositories](/assets/images/help/settings/security-and-analysis-enable-by-default-in-modal.png){% endif %}
7. Haga clic en **Disable FEATURE** o **Enable FEATURE** a fin de deshabilitar o habilitar la característica para todos los repositorios que posea.
  {% ifversion ghes > 3.2 %}![Botón para deshabilitar o habilitar la característica](/assets/images/enterprise/3.3/settings/security-and-analysis-enable-dependency-graph.png){% else %}![Button to disable or enable feature](/assets/images/help/settings/security-and-analysis-enable-dependency-graph.png){% endif %}

{% data reusables.security.displayed-information %}

## <a name="enabling-or-disabling-features-for-new-repositories"></a>Habilitar o inhabilitar las características para los repositorios nuevos

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.security-analysis %}
3. Debajo de "Análisis y seguridad del código", a la derecha de la característica, habilítala o inhabilítala predeterminadamente para los repositorios nuevos que te pertenezcan.
  {% ifversion ghes > 3.2 %}![Casilla para habilitar o deshabilitar una característica para nuevos repositorios](/assets/images/enterprise/3.3/settings/security-and-analysis-enable-or-disable-feature-checkbox.png){% else %}![Checkbox for enabling or disabling a feature for new repositories](/assets/images/help/settings/security-and-analysis-enable-or-disable-feature-checkbox.png){% endif %}

## <a name="further-reading"></a>Información adicional

- "[Acerca del gráfico de dependencias](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)"
- "[Acerca de {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)"
- "[Mantenimiento de las dependencias actualizadas automáticamente](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically)"
