---
title: Protección de la organización
intro: 'Puedes utilizar varias características de {% data variables.product.prodname_dotcom %} para ayudar a mantener tu organización segura.'
permissions: Organization owners can configure organization security settings.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Organizations
  - Dependencies
  - Vulnerabilities
  - Advanced Security
shortTitle: Secure your organization
ms.openlocfilehash: 7a3565884793e6d10a6d9c5ddd08286b3601c415
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106393'
---
## Introducción
Esta guía te muestra cómo configurar las características de seguridad para una organización. Las necesidades de seguridad de tu organización son únicas y puede que no necesites habilitar cada una de las características de seguridad. Para más información, vea "[Características de seguridad de {% data variables.product.prodname_dotcom %}](/code-security/getting-started/github-security-features)".

{% data reusables.advanced-security.security-feature-availability %}

## Administrar el acceso a tu organización

Puedes utilizar roles para controlar qué acciones pueden tomar las personas en tu organización. {% ifversion security-managers %}Por ejemplo, puedes asignar el rol de administrador de seguridad a un equipo para proporcionarles la capacidad de administrar la configuración de seguridad en toda la organización, así como el acceso de lectura a todos los repositorios.{% endif %} Para más información, consulta "[Roles en una organización](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)".

{% ifversion fpt or ghes or ghec %}

## Crear una política de seguridad predeterminada

Puedes crear una política de seguridad predeterminada que se mostrará en cualquier repositorio público de tu organización que no tenga su propia política de seguridad. Para más información, vea "[Creación de un archivo de estado de la comunidad predeterminado](/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file)".

{% endif %}

## Administrar las {% data variables.product.prodname_dependabot_alerts %} y la gráfica de dependencias

{% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %} detecta vulnerabilidades en repositorios públicos y muestra la gráfica de dependencias. Puedes habilitar las {% data variables.product.prodname_dependabot_alerts %} para todos los repositorios públicos que pertenezcan a tu organización. Puedes habilitar o inhabilitar las {% data variables.product.prodname_dependabot_alerts %} y la gráfica de dependencias para todos los repositorios privados que pertenezcan a tu organización.

1. Haga clic en la foto del perfil y después en **Organizaciones**.
2. Haga clic en **Configuración** junto a la organización.
3. Haga clic en **Seguridad y análisis**.
4. Haga clic en **Habilitar todo** o **Deshabilitar todo** junto a la característica que quiera administrar.
5. Opcionalmente, seleccione **Habilitar automáticamente para los nuevos repositorios**.
{% endif %}

{% data reusables.dependabot.dependabot-alerts-beta %} {% data reusables.dependabot.dependabot-alerts-dependency-graph-enterprise %}

Para más información, vea "[Acerca de {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)", "[Exploración de las dependencias de un repositorio](/code-security/supply-chain-security/exploring-the-dependencies-of-a-repository#enabling-and-disabling-the-dependency-graph-for-a-private-repository)" y "[Administración de la configuración de seguridad y análisis de la organización](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)".

## Administrar la revisión de dependencias

La revisión de dependencias es una característica de {% data variables.product.prodname_advanced_security %} que te permite visualizar los cambios en las dependencias de las solicitudes de cambios antes de que se fusionen en tus repositorios. Para más información, vea "[Acerca de la revisión de dependencias](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review)".

{% ifversion fpt or ghec %}La revisión de dependencias ya se habilitó en todos los repositorios públicos. {% ifversion fpt %}Las organizaciones que utilizan {% data variables.product.prodname_ghe_cloud %} con {% data variables.product.prodname_advanced_security %} pueden habilitar la revisión de dependencias para repositorios internos y privados adicionalmente. Para más información, vea la [documentación de {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/code-security/getting-started/securing-your-organization#managing-dependency-review). {% endif %}{% endif %}{% ifversion ghec %}En el caso de los repositorios internos y privados que pertenezcan a una organización, puedes habilitar la revisión de dependencias si habilitas la gráfica de dependencias y después la {% data variables.product.prodname_advanced_security %} (ver a continuación). {% elsif ghes or ghae %}La revisión de dependencias está disponible cuando se habilita la gráfica de dependencias de {% data variables.location.product_location %} y, también, la {% data variables.product.prodname_advanced_security %} de la organización (consulta a continuación).{% endif %}

{% ifversion fpt or ghec or ghes %}
## Administrar las {% data variables.product.prodname_dependabot_security_updates %}

En el caso de cualquier repositorio que utilice las {% data variables.product.prodname_dependabot_alerts %}, puedes habilitar las {% data variables.product.prodname_dependabot_security_updates %} para levantar solicitudes de cambio con actualizaciones de seguridad cuando se detectan las vulnerabilidades. También puedes habilitar o inhabilitar las {% data variables.product.prodname_dependabot_security_updates %} para todos los repositorios a lo largo de tu organización.

1. Haga clic en la foto del perfil y después en **Organizaciones**.
2. Haga clic en **Configuración** junto a la organización.
3. Haga clic en **Seguridad y análisis**.
4. Haga clic en **Habilitar todo** o **Deshabilitar todo** junto a {% data variables.product.prodname_dependabot_security_updates %}.
5. Opcionalmente, seleccione **Habilitar automáticamente para los nuevos repositorios**. 

Para más información, vea "[Acerca de {% data variables.product.prodname_dependabot_security_updates %}](/code-security/supply-chain-security/about-dependabot-security-updates)" y "[Administración de la configuración de seguridad y análisis para la organización](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)".

## Administrar las {% data variables.product.prodname_dependabot_version_updates %}

Puedes habilitar el {% data variables.product.prodname_dependabot %} para levantar automáticamente las solicitudes de cambios para mantener tus dependencias actualizadas. Para más información, vea "[Acerca de {% data variables.product.prodname_dependabot_version_updates %}](/code-security/supply-chain-security/about-dependabot-version-updates)".

Para habilitar {% data variables.product.prodname_dependabot_version_updates %}, debe crear un archivo de configuración *dependabot.yml*. Para más información, vea "[Configuración de las actualizaciones de la versión de {% data variables.product.prodname_dependabot %}](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/enabling-and-disabling-dependabot-version-updates)".

{% endif %}

{% ifversion ghes or ghae or ghec %}
## Admnistrar la {% data variables.product.prodname_GH_advanced_security %}

{% ifversion ghes or ghec %} Si la {% ifversion ghec %}organización es propiedad de una empresa que{% else %}empresa{% endif %} tiene una licencia de {% data variables.product.prodname_advanced_security %}, puede habilitar o deshabilitar características de{% data variables.product.prodname_advanced_security %}.
{% elsif ghae %} Puede habilitar o deshabilitar características de {% data variables.product.prodname_advanced_security %}.
{% endif %}

1. Haga clic en la foto del perfil y después en **Organizaciones**.
2. Haga clic en **Configuración** junto a la organización.
3. Haga clic en **Seguridad y análisis**.
4. Haga clic en **Habilitar todo** o **Deshabilitar todo** junto a {% data variables.product.prodname_GH_advanced_security %}.
5. Opcionalmente, seleccione **Habilitar automáticamente para los nuevos repositorios privados**. 

Para más información, vea "[Acerca de {% data variables.product.prodname_GH_advanced_security %}](/github/getting-started-with-github/about-github-advanced-security)" y "[Administración de la configuración de seguridad y análisis para la organización](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)".
{% endif %}
## Configurar el {% data variables.product.prodname_secret_scanning %}

Las {% data variables.product.prodname_secret_scanning_caps %} son una característica de la {% data variables.product.prodname_advanced_security %} que escanea los repositorios en busca de secretos que se hayan almacenado de forma no segura.

{% ifversion fpt or ghec %}Las {% data variables.product.prodname_secret_scanning_caps %} ya se encuentran habilitadas en todos los repositorios públicos. Las organizaciones que usan {% data variables.product.prodname_ghe_cloud %} con {% data variables.product.prodname_advanced_security %} además pueden habilitar {% data variables.product.prodname_secret_scanning %} para repositorios privados e internos.{% endif %} {% ifversion fpt %}Para más información, vea la [documentación de {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/code-security/getting-started/securing-your-organization#configuring-secret-scanning). {% endif %}

{% ifversion ghes or ghae %}Las {% data variables.product.prodname_secret_scanning_caps %} se encuentran disponibles si tu empresa utiliza la {% data variables.product.prodname_advanced_security %}.{% endif %}

{% ifversion not fpt %} Puede habilitar o deshabilitar {% data variables.product.prodname_secret_scanning %} para todos los repositorios de la organización que tengan {% data variables.product.prodname_advanced_security %} habilitado.

1. Haga clic en la foto del perfil y después en **Organizaciones**.
2. Haga clic en **Configuración** junto a la organización.
3. Haga clic en **Seguridad y análisis**.
4. Haga clic en **Habilitar todo** o **Deshabilitar todo** junto a {% data variables.product.prodname_secret_scanning_caps %} ({% data variables.product.prodname_GH_advanced_security %} repositories only).
5. Opcionalmente, seleccione **Habilitar automáticamente para los repositorios privados agregados a {% data variables.product.prodname_advanced_security %}** . 

Para más información, vea "[Administración de la configuración de seguridad y análisis para la organización](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)".
{% endif %}

## Configuración de {% data variables.product.prodname_code_scanning %}

El {% data variables.product.prodname_code_scanning_capc %} es una característica de {% data variables.product.prodname_advanced_security %} que analiza el código en busca de vulnerabilidades y errores.

{% ifversion fpt or ghec %}El {% data variables.product.prodname_code_scanning_capc %} se encuentra disponible para todos los repositorios públicos. Las organizaciones que utilizan {% data variables.product.prodname_ghe_cloud %} con {% data variables.product.prodname_advanced_security %} pueden utilizar adicionalmente el {% data variables.product.prodname_code_scanning %} para los repositorios privados e internos.{% else %}{% data variables.product.prodname_code_scanning_capc %} está disponible si tu empres autiliza {% data variables.product.prodname_advanced_security %}.{% endif %}

El {% data variables.product.prodname_code_scanning_capc %} se configura a nivel de repositorio. Para más información, vea "[Configuración de {% data variables.product.prodname_code_scanning %} para un repositorio](/code-security/secure-coding/setting-up-code-scanning-for-a-repository)".

## Pasos siguientes
Puedes ver y administrar las alertas de las características de seguridad para abordar dependencias y vulnerabilidades en tu código. Para obtener más información, consulta {% ifversion fpt or ghes or ghec %} "[Visualización y actualización de {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts)",{% endif %} {% ifversion fpt or ghec or ghes %}"[Administración de solicitudes de incorporación de cambios para actualizaciones de dependencias](/code-security/supply-chain-security/managing-pull-requests-for-dependency-updates)", {% endif %}"[Administración de {% data variables.product.prodname_code_scanning %} para el repositorio](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository)" y "[Administración de alertas de {% data variables.product.prodname_secret_scanning %}](/code-security/secret-security/managing-alerts-from-secret-scanning)".

{% ifversion fpt or ghec %}Si tienes una vulnerabilidad de seguridad, puedes crear una asesoría de seguridad para debatir y resolver dicha vulnerabilidad en privado. Para más información, vea "[Acerca de {% data variables.product.prodname_security_advisories %}](/code-security/security-advisories/about-github-security-advisories)" y "[Creación de un aviso de seguridad](/code-security/security-advisories/creating-a-security-advisory)".
{% endif %}

{% ifversion ghes or ghec or ghae %}Tú puedes{% elsif fpt %}Las organizaciones que utilizan pueden{% data variables.product.prodname_ghe_cloud %}{% endif %} visualizar, filtrar y ordenar las alertas de seguridad de los repositorios {% ifversion ghes or ghec or ghae %}de tu{% elsif fpt %}de su{% endif %} organización en la información general sobre seguridad. Para obtener más información, consulta {% ifversion ghes or ghec or ghae %} "[Acerca de la información general sobre seguridad](/code-security/security-overview/about-the-security-overview)."{% elsif fpt %} "[Acerca de la información general sobre seguridad](/enterprise-cloud@latest/code-security/security-overview/about-the-security-overview)" en la documentación de {% data variables.product.prodname_ghe_cloud %}.{% endif %}

{% ifversion ghec %}
## Información adicional

"[Acceso a los informes de cumplimiento de la organización](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/accessing-compliance-reports-for-your-organization)" {% endif %}
