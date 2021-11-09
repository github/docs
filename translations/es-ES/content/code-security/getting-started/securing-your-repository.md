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
shortTitle: Asegurar tu repositorio
---

## Introducción
Esta guía te muestra cómo configurar las características de seguridad para un repositorio. Debes ser un administrador de repositorio o propietario de organización para configurar las caracteristicas de seguridad de un repositorio.

Tus necesidades de seguridad son únicas de tu repositorio, así que puede que no necesites habilitar todas las características de seguridad para este. Para obtener más información, consulta la sección "[Características de seguridad de {% data variables.product.prodname_dotcom %}](/code-security/getting-started/github-security-features)".

Some security features are only available {% ifversion fpt or ghec %}for public repositories, and for private repositories owned by organizations with {% else %}if you have {% endif %}an {% data variables.product.prodname_advanced_security %} license. {% data reusables.advanced-security.more-info-ghas %}

## Administrar el acceso a tu repositorio

El primer paso para asegurar un repositorio es configurar quién puede ver y modificar tu código. Para obtener más información, consulta la sección "[Administrar la configuración de los repositorios](/github/administering-a-repository/managing-repository-settings)".

Desde la página principal de tu repositorio, haz clic en **{% octicon "gear" aria-label="The Settings gear" %} Configuración** y luego desplázate hacia abajo, hacia la "Zona de Peligro".

- Para cambiar quién puede ver tu repositorio, haz clic en **Cambiar la visibilidad**. Para obtener más información, consulta la sección "[Configurar la visibilidad de los repositorios](/github/administering-a-repository/setting-repository-visibility)".{% ifversion fpt or ghec %}
- Puedes cambiar quién puede acceder a tu repositorio y ajustar los permisos, haz clic en **Administrar acceso**. Para obtener más información, consulta la sección "[Administrar los equipos y personas con acceso a tu repositorio](/github/administering-a-repository/managing-teams-and-people-with-access-to-your-repository)".{% endif %}

{% ifversion fpt or ghes > 3.0 or ghae-next or ghec %}
## Configurar una política de seguridad

1. Desde la página principal de tu repositorio, haz clic en **{% octicon "shield" aria-label="The shield symbol" %} Seguridad**.
2. Haz clic en **Política de seguridad**.
3. Haz clic en **Start setup** (Iniciar configuración).
4. Agrega información sobre las versiones compatibles con tu proyecto y de cómo reportar las vulnerabilidades.

Para obtener más información, consulta "[Aumentar la seguridad para tu repositorio](/code-security/getting-started/adding-a-security-policy-to-your-repository)".

{% endif %}

{% ifversion fpt or ghes or ghae-issue-4864 or ghec %}
## Administrar la gráfica de dependencias

{% ifversion fpt or ghec %}
Una vez que hayas [habilitado la gráfica de dependencias](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph#enabling-the-dependency-graph), esta se generará automáticamente para todos los repositorios públicos y podrás elegir habilitarla para los repositorios privados.

1. Desde la página principal de tu repositorio, haz clic en **{% octicon "gear" aria-label="The Settings gear" %} Configuración**.
2. Haz clic en **Análisis & seguridad**.
3. Junto a la gráfica de dependencias, haz clic en **Habilitar** o **Inhabilitar**.
{% endif %}

{% data reusables.dependabot.dependabot-alerts-dependency-graph-enterprise %}

Para obtener más información, consulta la sección "[Explorar las dependencias de un repositorio](/code-security/supply-chain-security/exploring-the-dependencies-of-a-repository#enabling-and-disabling-the-dependency-graph-for-a-private-repository)".

{% endif %}

{% ifversion fpt or ghes or ghae-issue-4864 or ghec %}
## Administrar las {% data variables.product.prodname_dependabot_alerts %}

{% ifversion fpt or ghec %}Predeterminadamente, {% data variables.product.prodname_dotcom %} detecta vulnerabilidades en repositorios públicos y genera {% data variables.product.prodname_dependabot_alerts %}. Las {% data variables.product.prodname_dependabot_alerts %} también pueden habilitarse para los repositorios privados.

1. Haz clic en tu foto de perfil y luego en **Configuración**.
2. Haz clic en **Análisis & seguridad**.
3. Haz clic en **Habilitar todas** junto a {% data variables.product.prodname_dependabot_alerts %}.
{% endif %}

{% data reusables.dependabot.dependabot-alerts-beta %}
{% data reusables.dependabot.dependabot-alerts-dependency-graph-enterprise %}

Para obtener más información, consulta las secciones "[Acerca de las alertas para las dependencias vulnerables](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies){% ifversion fpt or ghec %}" y "[Administrar la configuración de seguridad y análisis para tu cuenta de usuario](/github/setting-up-and-managing-your-github-user-account/managing-security-and-analysis-settings-for-your-user-account){% endif %}".

{% endif %}

{% ifversion fpt or ghes > 3.1 or ghae-issue-4864 or ghec %}
## Administrar la revisión de dependencias

La revisión de dependencias te permite visualizar los cambios a las dependencias en las solicitudes de cambios antes de que se fusionen con tus repositorios.
{%- ifversion fpt %}La revisión de dependencias está disponible en todos los repositorios públicos. Para los repositorios internos y privados, requieres una licencia para {% data variables.product.prodname_advanced_security %}. Para habilitar la revisión de dependencias de un repositorio, habilita la gráfica de dependencias y la {% data variables.product.prodname_advanced_security %}.
{%- elsif ghes or ghae %}La revisión de dependencias se encuentra disponible cuando se habilite la gráfica de dependencias para {% data variables.product.product_location %} y también la {% data variables.product.prodname_advanced_security %} para la el repositorio (consulta a continuación).{% endif %}
Para obtener más información, consulta la sección "[Acerca de la revisión de dependencias](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review)".

{% endif %}

{% ifversion fpt or ghec %}

## Administrar las {% data variables.product.prodname_dependabot_security_updates %}

En el caso de cualquier repositorio que utilice las {% data variables.product.prodname_dependabot_alerts %}, puedes habilitar las {% data variables.product.prodname_dependabot_security_updates %} para levantar solicitudes de cambio con actualizaciones de seguridad cuando se detectan las vulnerabilidades.

1. Desde la página principal de tu repositorio, haz clic en **{% octicon "gear" aria-label="The Settings gear" %} Configuración**.
2. Haz clic en **Análisis & seguridad**.
3. Junto a {% data variables.product.prodname_dependabot_security_updates %}, haz clic en **Habilitar**.

Para obtener más información, consulta las secciones "[Acerca de las {% data variables.product.prodname_dependabot_security_updates %}](/code-security/supply-chain-security/about-dependabot-security-updates)" y "[Configurar las {% data variables.product.prodname_dependabot_security_updates %}](/code-security/supply-chain-security/configuring-dependabot-security-updates)".

## Administrar las {% data variables.product.prodname_dependabot_version_updates %}

Puedes habilitar el {% data variables.product.prodname_dependabot %} para levantar automáticamente las solicitudes de cambios para mantener tus dependencias actualizadas. Para obtener más información, consulta la sección "[Acerca de las {% data variables.product.prodname_dependabot_version_updates %}](/code-security/supply-chain-security/about-dependabot-version-updates)".

Para habilitar las {% data variables.product.prodname_dependabot_version_updates %}, debes crear un archivo de configuración *dependabot.yml*. Para obtener más información, consulta la sección "[Habilitar e inhabilitar las actualizaciones de versión](/code-security/supply-chain-security/enabling-and-disabling-version-updates)".

{% endif %}

## Configurar {% data variables.product.prodname_code_scanning %}

{% data variables.product.prodname_code_scanning_capc %} se encuentra disponible {% ifversion fpt or ghec %}para todos los repositorios públicos y para los repositorios privados que pertenezcan a organizaciones con{% else %} para repositorios que pertenezcan a organizaciones si tienen{% endif %}una licencia de {% data variables.product.prodname_advanced_security %}.

Puedes configurar el {% data variables.product.prodname_code_scanning %} para que identifique automáticamente las vulnerabilidades y los errores en el código que se almacena en tu repositorio si utilizas un {% data variables.product.prodname_codeql_workflow %} o una herramienta de terceros. Para obtener más información, consulta la sección "[Configurar el {% data variables.product.prodname_code_scanning %} en un repositorio](/code-security/secure-coding/setting-up-code-scanning-for-a-repository)".

## Configurar el {% data variables.product.prodname_secret_scanning %}
{% data variables.product.prodname_secret_scanning_caps %} se encuentra disponible {% ifversion fpt or ghec %}para todos los repositorios públicos y para los repositorios privados que pertenezcan a organizaciones con{% else %} para repositorios que pertenezcan a organizaciones si tienen{% endif %}una licencia de {% data variables.product.prodname_advanced_security %}.

El {% data variables.product.prodname_secret_scanning_caps %} podría estar habilitado para tu repositorio predeterminadamente dependiendo de la configuración de tu organización.

1. Desde la página principal de tu repositorio, haz clic en **{% octicon "gear" aria-label="The Settings gear" %} Configuración**.
2. Haz clic en **Análisis & seguridad**.
3. Si {% data variables.product.prodname_GH_advanced_security %} no está habilitada previamente, haz clic en **Habilitar**.
4. Junto a {% data variables.product.prodname_secret_scanning_caps %}, haz clic en **Habilitar**.

## Pasos siguientes
Puedes ver y administrar las alertas de las características de seguridad para abordar dependencias y vulnerabilidades en tu código. For more information, see {% ifversion fpt or ghes or ghec %} "[Viewing and updating vulnerable dependencies in your repository](/code-security/supply-chain-security/viewing-and-updating-vulnerable-dependencies-in-your-repository),"{% endif %} {% ifversion fpt or ghec %}"[Managing pull requests for dependency updates](/code-security/supply-chain-security/managing-pull-requests-for-dependency-updates)," {% endif %}"[Managing {% data variables.product.prodname_code_scanning %} for your repository](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository)," and "[Managing alerts from {% data variables.product.prodname_secret_scanning %}](/code-security/secret-security/managing-alerts-from-secret-scanning)."

{% ifversion fpt or ghec %}If you have a security vulnerability, you can create a security advisory to privately discuss and fix the vulnerability. Para obtener más información, consulta las secciones "[Acerca de {% data variables.product.prodname_security_advisories %}](/code-security/security-advisories/about-github-security-advisories)" y "[Crear una asesoría de seguridad](/code-security/security-advisories/creating-a-security-advisory)".
{% endif %}
