---
title: Asegurar tu repositorio
intro: 'Puedes utilizar varias características de {% data variables.product.prodname_dotcom %} para ayudar a mantener tu repositorio seguro.'
permissions: Repository administrators and organization owners can configure repository security settings.
redirect_from:
  - /github/administering-a-repository/about-securing-your-repository
  - /github/code-security/getting-started/about-securing-your-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Repositories
  - Dependencies
  - Vulnerabilities
  - Advanced Security
shortTitle: Secure your repository
ms.openlocfilehash: adab3ab8944ebd4945d30d7e886d91f0a31ca545
ms.sourcegitcommit: b617c4a7a1e4bf2de3987a86e0eb217d7031490f
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/11/2022
ms.locfileid: '148161187'
---
## Introducción
Esta guía te muestra cómo configurar las características de seguridad para un repositorio. Debes ser un administrador de repositorio o propietario de organización para configurar las caracteristicas de seguridad de un repositorio.

Tus necesidades de seguridad son únicas de tu repositorio, así que puede que no necesites habilitar todas las características de seguridad para este. Para obtener más información, consulte "[Características de seguridad de {% data variables.product.prodname_dotcom %}](/code-security/getting-started/github-security-features)".

{% data reusables.advanced-security.security-feature-availability %}

## Administrar el acceso a tu repositorio

El primer paso para asegurar un repositorio es configurar quién puede ver y modificar tu código. Para obtener más información, consulte "[Administración de la configuración de un repositorio](/github/administering-a-repository/managing-repository-settings)".

Desde la página principal del repositorio, haga clic en **{% octicon "gear" aria-label="The Settings gear" %}Settings** y, a continuación, desplácese hasta "Danger Zone."

- Para cambiar quién puede ver el repositorio, haga clic en **Change visibility**. Para obtener más información, consulta "[Configuración de la visibilidad del repositorio](/github/administering-a-repository/setting-repository-visibility)".{% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %}
- Para cambiar quién puede acceder al repositorio y ajustar los permisos, haga clic en **Manage access**. Para obtener más información, consulte "[Administración de equipos y personas con acceso al repositorio](/github/administering-a-repository/managing-teams-and-people-with-access-to-your-repository)".{% endif %}

## Configurar una política de seguridad

1. Desde la página principal del repositorio, haga clic en **{% octicon "shield" aria-label="The shield symbol" %} Security**.
2. Haga clic en **Security policy**.
3. Haga clic en **Iniciar configuración**.
4. Agrega información sobre las versiones compatibles con tu proyecto y de cómo reportar las vulnerabilidades.

Para más información, vea "[Adición de una directiva de seguridad al repositorio](/code-security/getting-started/adding-a-security-policy-to-your-repository)".

## Administrar la gráfica de dependencias

{% ifversion fpt or ghec %} El gráfico de dependencias se genera automáticamente para todos los repositorios públicos, y puede elegir habilitarlo también para los privados. Esta interpreta los archivos de bloqueo y de manifiesto en un repositorio para identificar las dependencias.

1. Desde la página principal del repositorio, haga clic en **{% octicon "gear" aria-label="The Settings gear" %} Settings**.
2. Haga clic en **Security & analysis**.
3. Junto al gráfico de dependencias, haga clic en **Enable** o **Disable**.
{% endif %}

{% data reusables.dependabot.dependabot-alerts-dependency-graph-enterprise %}

Para obtener más información, consulte "[Exploración de las dependencias de un repositorio](/code-security/supply-chain-security/exploring-the-dependencies-of-a-repository#enabling-and-disabling-the-dependency-graph-for-a-private-repository)".

## Administrar las {% data variables.product.prodname_dependabot_alerts %}

Las {% data variables.product.prodname_dependabot_alerts %} se generan cuando {% data variables.product.prodname_dotcom %} identifica una dependencia que presenta una vulnerabilidad en la gráfica de dependencias. {% ifversion fpt or ghec %}Puedes habilitar las {% data variables.product.prodname_dependabot_alerts %} para cualquier repositorio.{% endif %}

{% ifversion fpt or ghec %}
1. Haga clic en la foto de perfil y, a continuación, en **Settings**.
2. Haga clic en **Security & analysis**.
3. Haga clic en **Enable all** junto a {% data variables.product.prodname_dependabot_alerts %}.
{% endif %}

{% data reusables.dependabot.dependabot-alerts-beta %} {% data reusables.dependabot.dependabot-alerts-dependency-graph-enterprise %}

Para obtener más información, consulta "[Acerca de {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies){% ifversion fpt or ghec %}" y "[Administración de la configuración de seguridad y análisis de tu cuenta personal](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/managing-security-and-analysis-settings-for-your-personal-account){% endif %}."

## Administrar la revisión de dependencias

La revisión de dependencias te permite visualizar los cambios a las dependencias en las solicitudes de cambios antes de que se fusionen con tus repositorios. Para obtener más información, consulte "[Acerca de la revisión de dependencias](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review)".

La revisión de dependencias es una característica de la {% data variables.product.prodname_GH_advanced_security %}. {% ifversion fpt or ghec %}La revisión de dependencias ya se habilitó en todos los repositorios públicos. {% ifversion fpt %}Las organizaciones que utilizan {% data variables.product.prodname_ghe_cloud %} con {% data variables.product.prodname_advanced_security %} pueden habilitar la revisión de dependencias para repositorios internos y privados adicionalmente. Para obtener más información, consulte la [documentación de {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/code-security/getting-started/securing-your-repository#managing-dependency-review). {% endif %}{% endif %}{% ifversion ghec or ghes or ghae %}Para habilitar la revisión de dependencias para un repositorio {% ifversion ghec %}privado o interno{% endif %}, asegúrate de que la gráfica de dependencias se encuentre habilitada y habilita la {% data variables.product.prodname_GH_advanced_security %}. 

1. Desde la página principal del repositorio, haga clic en **{% octicon "gear" aria-label="The Settings gear" %}Settings**.
2. Haga clic en **Security & analysis**.
3. {% ifversion ghec %}Si el gráfico de dependencias aún no está habilitado, haga clic en **Enable**.{% elsif ghes or ghae %}Compruebe que su empresa tenga configurado el gráfico de dependencias.{% endif %}
4. If {% data variables.product.prodname_GH_advanced_security %} aún no está habilitado, haga clic en **Enable**.

{% endif %}

{% ifversion fpt or ghec or ghes %}

## Administrar las {% data variables.product.prodname_dependabot_security_updates %}

En el caso de cualquier repositorio que utilice las {% data variables.product.prodname_dependabot_alerts %}, puedes habilitar las {% data variables.product.prodname_dependabot_security_updates %} para levantar solicitudes de cambio con actualizaciones de seguridad cuando se detectan las vulnerabilidades.

1. Desde la página principal del repositorio, haga clic en **{% octicon "gear" aria-label="The Settings gear" %}Settings**.
2. Haga clic en **Security & analysis**.
3. Junto a {% data variables.product.prodname_dependabot_security_updates %}, haga clic en **Enable**.

Para obtener más información, consulte "[Acerca de {% data variables.product.prodname_dependabot_security_updates %}](/code-security/supply-chain-security/about-dependabot-security-updates)" y "[Configuración de {% data variables.product.prodname_dependabot_security_updates %}](/code-security/supply-chain-security/configuring-dependabot-security-updates)."

## Administrar las {% data variables.product.prodname_dependabot_version_updates %}

Puedes habilitar el {% data variables.product.prodname_dependabot %} para levantar automáticamente las solicitudes de cambios para mantener tus dependencias actualizadas. Para más información, vea "[Acerca de {% data variables.product.prodname_dependabot_version_updates %}](/code-security/supply-chain-security/about-dependabot-version-updates)".

{% ifversion dependabot-settings-update-37 %}
1. Desde la página principal del repositorio, haga clic en **{% octicon "gear" aria-label="The Settings gear" %} Settings**.
2. Haga clic en **Security & analysis**.
3. Junto a {% data variables.product.prodname_dependabot_version_updates %}, haz clic en **Habilitar** para crear un archivo de configuración *dependabot.yml* básico.
4. Especifica las dependencias para actualizar y subir el archivo al repositorio. Para obtener más información, consulta "[Configuración de las actualizaciones de versiones de Dependabot](/code-security/dependabot/dependabot-version-updates/configuring-dependabot-version-updates#enabling-dependabot-version-updates)".

{% else %} Para habilitar {% data variables.product.prodname_dependabot_version_updates %}, debes crear un archivo de configuración *dependabot.yml*. Para más información, vea "[Configuración de las actualizaciones de la versión de {% data variables.product.prodname_dependabot %}](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/enabling-and-disabling-dependabot-version-updates)".
{% endif %}

{% endif %}

## Configuración de {% data variables.product.prodname_code_scanning %}

Puedes configurar el {% data variables.product.prodname_code_scanning %} para que identifique automáticamente las vulnerabilidades y los errores en el código que se almacena en tu repositorio si utilizas un {% data variables.code-scanning.codeql_workflow %} o una herramienta de terceros. Para obtener más información, consulte "[Configuración de {% data variables.product.prodname_code_scanning %} para un repositorio](/code-security/secure-coding/setting-up-code-scanning-for-a-repository)".

El {% data variables.product.prodname_code_scanning_capc %} se encuentra disponible {% ifversion fpt or ghec %}para todos los repositorios públicos y para los privados que pertenezcan a las organizaciones que son parte de una empresa que cuente con licencia para {% else %}para repositorios que pertenezcan a organizaciones si tu empresa utiliza{% endif %}{% data variables.product.prodname_GH_advanced_security %}.

## Configurar el {% data variables.product.prodname_secret_scanning %}

El {% data variables.product.prodname_secret_scanning_caps %} se {% ifversion fpt or ghec %}habilita en todos los repositorios y se encuentra disponible para aquellos privados que pertenezcan a organizaciones que sean parte de una empresa que cuente con una licencia para{% else %}disponible para repositorios que pertenezcan a organizaciones si tu empresa utiliza{% endif %}{% data variables.product.prodname_GH_advanced_security %}. {% ifversion fpt %}Para obtener más información, consulte la documentación de [{% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/code-security/getting-started/securing-your-repository#configuring-secret-scanning).{% else %}{% data variables.product.prodname_secret_scanning_caps %} puede estar ya habilitado en su repositorio, en función de la configuración de la organización.

1. Desde la página principal del repositorio, haga clic en **{% octicon "gear" aria-label="The Settings gear" %}Settings**.
2. Haga clic en **Security & analysis**.
3. If {% data variables.product.prodname_GH_advanced_security %} aún no está habilitado, haga clic en **Enable**.
4. Haga clic en **Enable** junto a {% data variables.product.prodname_secret_scanning_caps %}. {% endif %}

## Pasos siguientes
Puedes ver y administrar las alertas de las características de seguridad para abordar dependencias y vulnerabilidades en tu código. Para obtener más información, consulta {% ifversion fpt or ghes or ghec %} "[Visualización y actualización de {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts)",{% endif %} {% ifversion fpt or ghec or ghes %}"[Administración de solicitudes de incorporación de cambios para actualizaciones de dependencias](/code-security/supply-chain-security/managing-pull-requests-for-dependency-updates)", {% endif %}"[Administración de {% data variables.product.prodname_code_scanning %} para el repositorio](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository)" y "[Administración de alertas de {% data variables.product.prodname_secret_scanning %}](/code-security/secret-security/managing-alerts-from-secret-scanning)".

{% ifversion fpt or ghec %}Si tienes una vulnerabilidad de seguridad, puedes crear una asesoría de seguridad para debatir y resolver dicha vulnerabilidad en privado. Para obtener más información, consulta "[Acerca de las asesorías de seguridad de repositorio](/code-security/security-advisories/about-github-security-advisories)" y "[Creación de una asesoría de seguridad](/code-security/security-advisories/creating-a-security-advisory)".
{% endif %}
