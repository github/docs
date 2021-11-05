---
title: Asegurar tu organización
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
shortTitle: Asegurar tu organización
---

## Introducción
Esta guía te muestra cómo configurar las características de seguridad para una organización. Las necesidades de seguridad de tu organización son únicas y puede que no necesites habilitar cada una de las características de seguridad. Para obtener más información, consulta la sección "[Características de seguridad de {% data variables.product.prodname_dotcom %}](/code-security/getting-started/github-security-features)".

Some security features are only available {% ifversion fpt or ghec %}for public repositories, and for private repositories owned by organizations with {% else %}if you have {% endif %}an {% data variables.product.prodname_advanced_security %} license. {% data reusables.advanced-security.more-info-ghas %}

## Administrar el acceso a tu organización

You can use roles to control what actions people can take in your organization. {% if security-managers %}For example, you can assign the security manager role to a team to give them the ability to manage security settings across your organization, as well as read access to all repositories.{% endif %} For more information, see "[Roles in an organization](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)."

{% ifversion fpt or ghes > 3.0 or ghae-next or ghec %}

## Crear una política de seguridad predeterminada

Puedes crear una política de seguridad predeterminada que se mostrará en cualquier repositorio público de tu organización que no tenga su propia política de seguridad. Para obtener más información, consulta "[Crear un archivo de salud predeterminado para la comunidad](/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file)."

{% endif %}

{% ifversion fpt or ghes > 2.22 or ghae-issue-4864 or ghec %}
## Administrar las {% data variables.product.prodname_dependabot_alerts %} y la gráfica de dependencias

{% ifversion fpt or ghec %}By default, {% data variables.product.prodname_dotcom %} detects vulnerabilities in public repositories and generates {% data variables.product.prodname_dependabot_alerts %} and a dependency graph. Puedes habilitar o inhabilitar las {% data variables.product.prodname_dependabot_alerts %} y la gráfica de dependencias para todos los repositorios privados que pertenezcan a tu organización.

1. Haz clic en tu foto de perfil y luego en **Organizaciones**.
2. Haz clic en **Configuración** junto a tu organización.
3. Haz clic en **Análisis & seguridad**.
4. Haz clic en **Habilitar todo** o en **Inhabilitar todo** junto a la característica que quieras administrar.
5. Opcionalmente, selecciona **Habilitar automáticamente para los repositorios nuevos**.
{% endif %}

{% data reusables.dependabot.dependabot-alerts-beta %}
{% data reusables.dependabot.dependabot-alerts-dependency-graph-enterprise %}

Para obtener más información, consulta las secciones "[Acerca de las alertas para las dependencias vulnerables](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)," "[Explorar las dependencias de un repositorio](/code-security/supply-chain-security/exploring-the-dependencies-of-a-repository#enabling-and-disabling-the-dependency-graph-for-a-private-repository)," y "[Administrar la configuración de seguridad y análisis para tu organización](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)".
{% endif %}

{% ifversion fpt or ghes > 3.1 or ghae-issue-4864 or ghec %}

## Administrar la revisión de dependencias

La revisión de dependencias te permite visualizar los cambios a las dependencias en las solicitudes de cambios antes de que se fusionen con tus repositorios.
{% ifversion fpt or ghec %}Dependency review is available in all public repositories. Para los repositorios internos y privados, requieres una licencia para {% data variables.product.prodname_advanced_security %}. Para habilitar la revisión de dependencias de una organización, habilita la gráfica de dependencias y la {% data variables.product.prodname_advanced_security %}.
{% elsif ghes or ghae %}La revisión de dependencias se encuentra disponible cuando se habilite la gráfica de dependencias para {% data variables.product.product_location %} y también la {% data variables.product.prodname_advanced_security %} para la organización (consulta a continuación).{% endif %}
Para obtener más información, consulta la sección "[Acerca de la revisión de dependencias](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review)".

{% endif %}

{% ifversion fpt or ghec %}
## Administrar las {% data variables.product.prodname_dependabot_security_updates %}

En el caso de cualquier repositorio que utilice las {% data variables.product.prodname_dependabot_alerts %}, puedes habilitar las {% data variables.product.prodname_dependabot_security_updates %} para levantar solicitudes de cambio con actualizaciones de seguridad cuando se detectan las vulnerabilidades. También puedes habilitar o inhabilitar las {% data variables.product.prodname_dependabot_security_updates %} para todos los repositorios a lo largo de tu organización.

1. Haz clic en tu foto de perfil y luego en **Organizaciones**.
2. Haz clic en **Configuración** junto a tu organización.
3. Haz clic en **Análisis & seguridad**.
4. Haz clic en **Habilitar todas** or en **Inhabilitar todas** junto a {% data variables.product.prodname_dependabot_security_updates %}.
5. Opcionalmente, selecciona **Habilitar automáticamente para los repositorios nuevos**.

Para obtener más información, consulta las secciones "[Acerca de {% data variables.product.prodname_dependabot_security_updates %}](/code-security/supply-chain-security/about-dependabot-security-updates)" y "[Administrar la configuración de análisis y seguridad para tu organización](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)".

## Administrar las {% data variables.product.prodname_dependabot_version_updates %}

Puedes habilitar el {% data variables.product.prodname_dependabot %} para levantar automáticamente las solicitudes de cambios para mantener tus dependencias actualizadas. Para obtener más información, consulta la sección "[Acerca de las {% data variables.product.prodname_dependabot_version_updates %}](/code-security/supply-chain-security/about-dependabot-version-updates)".

Para habilitar las {% data variables.product.prodname_dependabot_version_updates %}, debes crear un archivo de configuración *dependabot.yml*. Para obtener más información, consulta la sección "[Habilitar e inhabilitar las actualizaciones de versión](/code-security/supply-chain-security/enabling-and-disabling-version-updates)".

{% endif %}

{% ifversion fpt or ghes > 2.22 or ghae or ghec %}
## Admnistrar la {% data variables.product.prodname_GH_advanced_security %}

{% ifversion fpt or ghes > 2.22 or ghec %}
Si tu organización cuenta con una licencia de {% data variables.product.prodname_advanced_security %}, puedes habilitar o inhabilitar las características de la {% data variables.product.prodname_advanced_security %}.
{% elsif ghae %}
Puedes habilitar o inhabilitar las características de la {% data variables.product.prodname_advanced_security %}.
{% endif %}

1. Haz clic en tu foto de perfil y luego en **Organizaciones**.
2. Haz clic en **Configuración** junto a tu organización.
3. Haz clic en **Análisis & seguridad**.
4. Haz clic en **Habilitar todas** or en **Inhabilitar todas** junto a {% data variables.product.prodname_GH_advanced_security %}.
5. Opcionalmente, selecciona **Habilitar automáticamente para los repositorios privados nuevos**.

Para obtener más información, consulta la sección "[Acerca de {% data variables.product.prodname_GH_advanced_security %}](/github/getting-started-with-github/about-github-advanced-security)" y "[Administrar la configuración de análisis y seguridad para tu organización](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)".

## Configurar el {% data variables.product.prodname_secret_scanning %}
{% data variables.product.prodname_secret_scanning_caps %} is available {% ifversion fpt or ghec %}for all public repositories, and for private repositories owned by organizations with {% else %}if you have {% endif %}an {% data variables.product.prodname_advanced_security %} license.

Puedes habilitar o inhabilitar el {% data variables.product.prodname_secret_scanning %} para todos los repositorios a lo largo de tu organización que tengan habilitada la {% data variables.product.prodname_advanced_security %}.

1. Haz clic en tu foto de perfil y luego en **Organizaciones**.
2. Haz clic en **Configuración** junto a tu organización.
3. Haz clic en **Análisis & seguridad**.
4. Haz clic en **Habilitar todo** o en **Inhabilitar todo** junto a {% data variables.product.prodname_secret_scanning_caps %} (solo para repositorios de la {% data variables.product.prodname_GH_advanced_security %}).
5. Opcionalmente, selecciona **Habilitar automáticamente para los repositorios privados que se agregan a la {% data variables.product.prodname_advanced_security %}**.

Para obtener más información, consulta la sección "[Administrar la configuración de seguridad y análisis para tu organización](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)".

{% endif %}

## Pasos siguientes
{% ifversion fpt or ghes > 3.1 or ghae-next or ghec %}You can view, filter, and sort security alerts for repositories owned by your organization in the security overview. Para obtener más información, consulta la sección "[Acerca del resumen de seguridad](/code-security/security-overview/about-the-security-overview)".{% endif %}

Puedes ver y administrar las alertas de las características de seguridad para abordar dependencias y vulnerabilidades en tu código. For more information, see {% ifversion fpt or ghes > 2.22 or ghec %} "[Viewing and updating vulnerable dependencies in your repository](/code-security/supply-chain-security/viewing-and-updating-vulnerable-dependencies-in-your-repository),"{% endif %} {% ifversion fpt or ghec %}"[Managing pull requests for dependency updates](/code-security/supply-chain-security/managing-pull-requests-for-dependency-updates)," {% endif %}"[Managing {% data variables.product.prodname_code_scanning %} for your repository](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository)," and "[Managing alerts from {% data variables.product.prodname_secret_scanning %}](/code-security/secret-security/managing-alerts-from-secret-scanning)."

{% ifversion fpt or ghec %}If you have a security vulnerability, you can create a security advisory to privately discuss and fix the vulnerability. Para obtener más información, consulta las secciones "[Acerca de {% data variables.product.prodname_security_advisories %}](/code-security/security-advisories/about-github-security-advisories)" y "[Crear una asesoría de seguridad](/code-security/security-advisories/creating-a-security-advisory)".
{% endif %}
