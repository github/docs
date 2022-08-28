---
title: Asegurar tu repositorio
intro: 'Puedes utilizar varias características de {% data variables.product.prodname_dotcom %} para ayudar a mantener tu repositorio seguro.'
permissions: Repository administrators and organization owners can configure repository security settings.
redirect_from:
  - /github/administering-a-repository/about-securing-your-repository
  - /github/code-security/getting-started/about-securing-your-repository
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.0'
  github-ae: '*'
type: how_to
topics:
  - Repositories
  - Dependencies
  - Vulnerabilities
  - Advanced Security
---

### Introducción
Esta guía te muestra cómo configurar las características de seguridad para un repositorio. Debes ser un administrador de repositorio o propietario de organización para configurar las caracteristicas de seguridad de un repositorio.

Tus necesidades de seguridad son únicas de tu repositorio, así que puede que no necesites habilitar todas las características de seguridad para este. Para obtener más información, consulta la sección "[Características de seguridad de {% data variables.product.prodname_dotcom %}](/code-security/getting-started/github-security-features)".

Algunas características de seguridad solo se encuentran disponibles {% if currentVersion == "free-pro-team@latest" %}para repositorios públicos y para repositorios privados que pertenezcan a organizaciones con {% else %}si tienes {% endif %}una licencia de {% data variables.product.prodname_advanced_security %}. {% data reusables.advanced-security.more-info-ghas %}

### Administrar el acceso a tu repositorio

El primer paso para asegurar un repositorio es configurar quién puede ver y modificar tu código. Para obtener más información, consulta la sección "[Administrar la configuración de los repositorios](/github/administering-a-repository/managing-repository-settings)".

Desde la página principal de tu repositorio, haz clic en **{% octicon "gear" aria-label="The Settings gear" %} Configuración** y luego desplázate hacia abajo, hacia la "Zona de Peligro".

- Para cambiar quién puede ver tu repositorio, haz clic en **Cambiar la visibilidad**. Para obtener más información, consulta la sección "[Configurar la visibilidad de los repositorios](/github/administering-a-repository/setting-repository-visibility)".{% if currentVersion == "free-pro-team@latest" %}
- Puedes cambiar quién puede acceder a tu repositorio y ajustar los permisos, haz clic en **Administrar acceso**. Para obtener más información, consulta la sección "[Administrar los equipos y personas con acceso a tu repositorio](/github/administering-a-repository/managing-teams-and-people-with-access-to-your-repository)".{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == 'github-ae@next' %}
### Configurar una política de seguridad

1. Desde la página principal de tu repositorio, haz clic en **{% octicon "shield" aria-label="The shield symbol" %} Seguridad**.
2. Haz clic en **Política de seguridad**.
3. Haz clic en **Start setup** (Iniciar configuración).
4. Agrega información sobre las versiones compatibles con tu proyecto y de cómo reportar las vulnerabilidades.

Para obtener más información, consulta "[Aumentar la seguridad para tu repositorio](/code-security/getting-started/adding-a-security-policy-to-your-repository)".

{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
### Administrar la gráfica de dependencias

La gráfica de dependencias se genera automáticamente para {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %} todos los repositorios públicos y puedes elegir habilitarla para los repositorios privados.{% else %} todos los repositorios.{% endif %}

1. Desde la página principal de tu repositorio, haz clic en **{% octicon "gear" aria-label="The Settings gear" %} Configuración**.
2. Haz clic en **Análisis & seguridad**.
3. Junto a la gráfica de dependencias, haz clic en **Habilitar** o **Inhabilitar**.

Para obtener más información, consulta la sección "[Explorar las dependencias de un repositorio](/code-security/supply-chain-security/exploring-the-dependencies-of-a-repository#enabling-and-disabling-the-dependency-graph-for-a-private-repository)".

{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
### Administrar las {% data variables.product.prodname_dependabot_alerts %}

Predeterminadamente, {% data variables.product.prodname_dotcom %} detecta vulnerabilidades en repositorios públicos y genera {% data variables.product.prodname_dependabot_alerts %}. Las {% data variables.product.prodname_dependabot_alerts %} también pueden habilitarse para los repositorios privados.

1. Haz clic en tu foto de perfil y luego en **Configuración**.
2. Haz clic en **Análisis & seguridad**.
3. Haz clic en **Habilitar todas** junto a {% data variables.product.prodname_dependabot_alerts %}.

Para obtener más información, consulta las secciones "[Acerca de las alertas para las dependencias vulnerables](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies){% if currentVersion == "free-pro-team@latest" %}" y "[Administrar la configuración de seguridad y análisis para tu cuenta de usuario](/github/setting-up-and-managing-your-github-user-account/managing-security-and-analysis-settings-for-your-user-account){% endif %}".

{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" %}
### Administrar la revisión de dependencias

La revisión de dependencias te permite visualizar los cambios a las dependencias en las solicitudes de cambios antes de que se fusionen en tu repositorio. La revisión de dependencias se encuentra disponible en todos los repositorios públicos y en aquellos que pertenecen a organizaciones con una licencia de {% data variables.product.prodname_advanced_security %} y que tengan habilitada la gráfica de dependencias. Para obtener más información, consulta la sección "[Acerca de la revisión de dependencias](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review)".

{% endif %}

{% if currentVersion == "free-pro-team@latest" %}

### Administrar las {% data variables.product.prodname_dependabot_security_updates %}

En el caso de cualquier repositorio que utilice las {% data variables.product.prodname_dependabot_alerts %}, puedes habilitar las {% data variables.product.prodname_dependabot_security_updates %} para levantar solicitudes de cambio con actualizaciones de seguridad cuando se detectan las vulnerabilidades.

1. Desde la página principal de tu repositorio, haz clic en **{% octicon "gear" aria-label="The Settings gear" %} Configuración**.
2. Haz clic en **Análisis & seguridad**.
3. Junto a {% data variables.product.prodname_dependabot_security_updates %}, haz clic en **Habilitar**.

Para obtener más información, consulta las secciones "[Acerca de las {% data variables.product.prodname_dependabot_security_updates %}](/code-security/supply-chain-security/about-dependabot-security-updates)" y "[Configurar las {% data variables.product.prodname_dependabot_security_updates %}](/code-security/supply-chain-security/configuring-dependabot-security-updates)".

### Administrar las {% data variables.product.prodname_dependabot_version_updates %}

Puedes habilitar el {% data variables.product.prodname_dependabot %} para levantar automáticamente las solicitudes de cambios para mantener tus dependencias actualizadas. Para obtener más información, consulta la sección "[Acerca de las {% data variables.product.prodname_dependabot_version_updates %}](/code-security/supply-chain-security/about-dependabot-version-updates)".

Para habilitar las {% data variables.product.prodname_dependabot_version_updates %}, debes crear un archivo de configuración *dependabot.yml*. Para obtener más información, consulta la sección "[Habilitar e inhabilitar las actualizaciones de versión](/code-security/supply-chain-security/enabling-and-disabling-version-updates)".

{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
### Configurar {% data variables.product.prodname_code_scanning %}

{% data variables.product.prodname_code_scanning_capc %} se encuentra disponible {% if currentVersion == "free-pro-team@latest" %}para todos los repositorios públicos y para los repositorios privados que pertenezcan a organizaciones con{% else %} para repositorios que pertenezcan a organizaciones si tienen{% endif %}una licencia de {% data variables.product.prodname_advanced_security %}.

Puedes configurar el {% data variables.product.prodname_code_scanning %} para que identifique automáticamente las vulnerabilidades y los errores en el código que se almacena en tu repositorio si utilizas un {% data variables.product.prodname_codeql_workflow %} o una herramienta de terceros. Para obtener más información, consulta la sección "[Configurar el {% data variables.product.prodname_code_scanning %} en un repositorio](/code-security/secure-coding/setting-up-code-scanning-for-a-repository)".

### Configurar el {% data variables.product.prodname_secret_scanning %}
{% data variables.product.prodname_secret_scanning_caps %} se encuentra disponible {% if currentVersion == "free-pro-team@latest" %}para todos los repositorios públicos y para los repositorios privados que pertenezcan a organizaciones con{% else %} para repositorios que pertenezcan a organizaciones si tienen{% endif %}una licencia de {% data variables.product.prodname_advanced_security %}.

El {% data variables.product.prodname_secret_scanning_caps %} podría estar habilitado para tu repositorio predeterminadamente dependiendo de la configuración de tu organización.

1. Desde la página principal de tu repositorio, haz clic en **{% octicon "gear" aria-label="The Settings gear" %} Configuración**.
2. Haz clic en **Análisis & seguridad**.
3. Si {% data variables.product.prodname_GH_advanced_security %} no está habilitada previamente, haz clic en **Habilitar**.
4. Junto a {% data variables.product.prodname_secret_scanning_caps %}, haz clic en **Habilitar**.

{% endif %}

### Pasos siguientes
Puedes ver y administrar las alertas de las características de seguridad para abordar dependencias y vulnerabilidades en tu código. Para obtener más información, consulta las secciones {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %} "[Visualizar y actualziar las dependencias vulnerables de tu repositorio](/code-security/supply-chain-security/viewing-and-updating-vulnerable-dependencies-in-your-repository),"{% endif %} {% if currentVersion == "free-pro-team@latest" %}"[Administrar las solicitudes de cambio para las actualizaciones de las dependencias](/code-security/supply-chain-security/managing-pull-requests-for-dependency-updates)," {% endif %}"[Administrar el {% data variables.product.prodname_code_scanning %} para tu repositorio](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository)," y "[Administrar las alertas de {% data variables.product.prodname_secret_scanning %}](/code-security/secret-security/managing-alerts-from-secret-scanning)".

{% if currentVersion == "free-pro-team@latest" %}Si tienes una vulnerabilidad de seguridad, puedes crear una asesoría de seguridad para debatir y resolver dicha vulnerabilidad en privado. Para obtener más información, consulta las secciones "[Acerca de {% data variables.product.prodname_security_advisories %}](/code-security/security-advisories/about-github-security-advisories)" y "[Crear una asesoría de seguridad](/code-security/security-advisories/creating-a-security-advisory)".
{% endif %}
