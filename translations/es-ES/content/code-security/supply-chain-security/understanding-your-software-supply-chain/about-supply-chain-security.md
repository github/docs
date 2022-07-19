---
title: Acerca de la seguridad de la cadena de suministro
intro: '{% data variables.product.product_name %} te ayuda a asegurar tu cadena de suministro, desde entender las dependencias en tu ambiente hasta conocer las vulnerabilidades en dichas dependencias{% ifversion fpt or ghec or ghes > 3.2 %} y parcharlas{% endif %}.'
miniTocMaxHeadingLevel: 3
shortTitle: Seguridad de la cadena de suministro
redirect_from:
  - /code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Advanced Security
  - Dependency review
  - Dependency graph
  - Vulnerabilities
  - Dependencies
  - Pull requests
  - Repositories
---

## Acerca de la seguridad de la cadena de suministro en GitHub

Con el uso acelerado del código abierto, la mayoría de los proyectos dependen de cientos de dependencias de código abierto. Esto representa un problema de seguridad: ¿Qué pasa si las dependencias que estás utilizando son vulnerables? Podrías estár poniendo a tus usuarios en riego de un ataque a la cadena de suministro. Una de las cosas más importantes que puedes hacer para proteger a tu cadena de suministro es parchar tus dependencias vulnerables{% ifversion GH-advisory-db-supports-malware %} y reemplazar cualqueir malware{% endif %}.

Puedes agregar dependencias directamente a tu cadena de suministro cuando las especificas en un archivo de bloqueo o de manifiesto. Las dependencias también se pueden incluir transitoriamiente, es decir, incluso si no especificas una dependencia en particual, pero una de tus dependencias la utiliza y por lo tanto también dependes de ella.

{% data variables.product.product_name %} ofrece un rango de características que te ayudan a entender las dependencias en tu ambiente{% ifversion ghes < 3.3 or ghae %} y conocer las vulnerabilidades en dichas dependencias{% endif %}{% ifversion fpt or ghec or ghes > 3.2 %}, conocer las vulnerabilidades en dichas dependencias y parcharlas{% endif %}.

Las características de la cadena de suministro en {% data variables.product.product_name %} son:
- **Gráfica de dependencias**
- **Revisión de dependencias**
- **{% data variables.product.prodname_dependabot_alerts %} **
{% ifversion fpt or ghec or ghes > 3.2 %}- **{% data variables.product.prodname_dependabot_updates %}**
  - **{% data variables.product.prodname_dependabot_security_updates %}**
  - **{% data variables.product.prodname_dependabot_version_updates %}**{% endif %}

La gráfica de dependencias es central para la seguridad de la cadena de suministro. La gráfica de dependencias identifica todas las dependencias en nivel ascendente y lso dependientes en niveles descendientes públicos de un repositorio o paquete. Puedes ver las dependencias de tu repositorio y algunas de sus propiedades, como la información sobre las vulnerabilidades, en la gráfica de dependencias del repositorio.

Otras características de la cadena de suministro en {% data variables.product.prodname_dotcom %} dependen de la información que proporciona la gráfica de dependencias.

- La revisión de dependencias utiliza la gráfica de dependencias para identificar los cambios en las dependencias y ayudarte a entender el impacto de seguridad de estos cambios cuando revisas las soliciutudes de cambios.
- El {% data variables.product.prodname_dependabot %} hace referencias cruzadas de los datos de las dependencias que proporciona la gráfica de dependencias con la lista de asesorías publicada en la {% data variables.product.prodname_advisory_database %}, escanea tus dependencias y genera {% data variables.product.prodname_dependabot_alerts %} cuando se detecta una vulnerabilidad {% ifversion GH-advisory-db-supports-malware %}o malware{% endif %}potencial.
{% ifversion fpt or ghec or ghes > 3.2 %}- Las {% data variables.product.prodname_dependabot_security_updates %} utilizan la gráfica de dependencias y las {% data variables.product.prodname_dependabot_alerts %} para ayudarte a actualizar las dependencias con vulnerabilidades conocidas en tu repositorio.

Las {% data variables.product.prodname_dependabot_version_updates %} no utilizan la gráfica de dependencias y dependen del versionamiento semántio de las dependencias en su lugar. Las {% data variables.product.prodname_dependabot_version_updates %} te ayudan a mantener tus dependencias actualizadas, incluso cuando no tienen ninguna vulnerabilidad.
{% endif %}

{% ifversion fpt or ghec or ghes %}
Para encontrar una guía de mejores prácticas en la seguridad de la cadena de suministro de extremo a extremo, incluyendo la protección de cuetnas personales, código y procesos de compilación, cosulta la sección "[Asegurar tu cadena de suminsitro de extremo a extremo](/code-security/supply-chain-security/end-to-end-supply-chain/end-to-end-supply-chain-overview)".
{% endif %}

## Resumen de características

### ¿Qué es la gráfica de dependencias?

Para generar la gráfica de dependencias, {% data variables.product.company_short %} toma las dependencias explícitas de un repositorio, las cuale se declaran en los archivos de bloqueo y de manifiesto. Cuando se habilita, la gráfica de dependencias analiza automáticamente todos los archivos de manifiesto de paquetes conocidos en el repositorio y los utiliza para construir una gráfica con nombres y versiones de las dependencias conocidas.

- The dependency graph includes information on your _direct_ dependencies and _transitive_ dependencies.
- The dependency graph is automatically updated when you push a commit to {% data variables.product.company_short %} that changes or adds a supported manifest or lock file to the default branch, and when anyone pushes a change to the repository of one of your dependencies.
- You can see the dependency graph by opening the repository's main page on {% data variables.product.product_name %}, and navigating to the **Insights** tab.

{% ifversion dependency-submission-api %}
{% data reusables.dependency-submission.dependency-submission-link %}
{% endif %}

For more information about the dependency graph, see "[About the dependency graph](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph)."

### What is dependency review

Dependency review helps reviewers and contributors understand dependency changes and their security impact in every pull request.

- Dependency review tells you which dependencies were added, removed, or updated, in a pull request. You can use the release dates, popularity of dependencies, and vulnerability information to help you decide whether to accept the change.
- You can see the dependency review for a pull request by showing the rich diff on the **Files Changed** tab.

Para obtener más información sobre la revisión de dependencias, consulta la sección "[Acerca de la revisión de dependencias](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review)".

### What is Dependabot

{% data variables.product.prodname_dependabot %} mantiene actualizadas tus dependencias informándote de cualquier vulnerabilidad de seguridad en ellas{% ifversion fpt or ghec or ghes > 3.2 or ghae %}, y abre solicitudes de cambios automáticamente para actualizarlas a la siguiente versión segura disponible cuando se activa una alerta del {% data variables.product.prodname_dependabot %} o a la versión más actual cuando se publica un lanzamiento{% else %} para que puedas actualziarla.{% endif %}.

{% ifversion fpt or ghec or ghes > 3.2 %}
The term "{% data variables.product.prodname_dependabot %}" encompasses the following features:
- {% data variables.product.prodname_dependabot_alerts %}—Displayed notification on the **Security** tab for the repository, and in the repository's dependency graph. La alerta incluye un enlace al archivo afectado en el proyecto e información acerca de la versión arreglada.
- {% data variables.product.prodname_dependabot_updates %}:
   - {% data variables.product.prodname_dependabot_security_updates %}—Triggered updates to upgrade your dependencies to a secure version when an alert is triggered.
   - {% data variables.product.prodname_dependabot_version_updates %}—Scheduled updates to keep your dependencies up to date with the latest version.
{% endif %}

#### What are Dependabot alerts

{% data variables.product.prodname_dependabot_alerts %} highlight repositories affected by a newly discovered vulnerability based on the dependency graph and the {% data variables.product.prodname_advisory_database %}, which contains advisories for known vulnerabilities{% ifversion GH-advisory-db-supports-malware %} and malware{% endif %}.

- {% data variables.product.prodname_dependabot %} performs a scan to detect insecure dependencies and sends {% data variables.product.prodname_dependabot_alerts %} when:
{% ifversion fpt or ghec %}
   - A new advisory is added to the {% data variables.product.prodname_advisory_database %}.{% else %}
   - Se sincronizan los datos de las asesorías nuevas en {% data variables.product.product_location %} cada hora desde {% data variables.product.prodname_dotcom_the_website %}. {% data reusables.security-advisory.link-browsing-advisory-db %}{% endif %}
   - The dependency graph for the repository changes.
- {% data variables.product.prodname_dependabot_alerts %} are displayed {% ifversion fpt or ghec or ghes %} on the **Security** tab for the repository and{% endif %} in the repository's dependency graph. La alerta incluye {% ifversion fpt or ghec or ghes %}un enlace al archivo afectado en el proyecto e{% endif %}información sobre una versión corregida.

Para obtener más información, consulta la sección "[Acerca de{% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-alerts-for-vulnerable-dependencies)".

{% ifversion fpt or ghec or ghes > 3.2 %}
#### What are Dependabot updates

There are two types of {% data variables.product.prodname_dependabot_updates %}: {% data variables.product.prodname_dependabot %} _security_ updates and _version_ updates. {% data variables.product.prodname_dependabot %} generates automatic pull requests to update your dependencies in both cases, but there are several differences.

{% data variables.product.prodname_dependabot_security_updates %}:
 - Triggered by a {% data variables.product.prodname_dependabot %} alert
 - Update dependencies to the minimum version that resolves a known vulnerability
 - Supported for ecosystems the dependency graph supports
 - Does not require a configuration file, but you can use one to override the default behavior

{% data variables.product.prodname_dependabot_version_updates %}:
 - Requires a configuration file
 - Run on a schedule you configure
 - Update dependencies to the latest version that matches the configuration
 - Supported for a different group of ecosystems

Para obtener más información sobre las {% data variables.product.prodname_dependabot_updates %}, consulta las secciones "[Acerca de las {% data variables.product.prodname_dependabot_security_updates %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-dependabot-security-updates)" y "[Acerca de las {% data variables.product.prodname_dependabot_version_updates %}](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/about-dependabot-version-updates)".
{% endif %}

## Feature availability

{% ifversion fpt or ghec %}

Public repositories:
- **Dependency graph**—enabled by default and cannot be disabled.
- **Dependency review**—enabled by default and cannot be disabled.
- **{% data variables.product.prodname_dependabot_alerts %}**—no se habilita predeterminadamente. {% data variables.product.prodname_dotcom %} detects insecure dependencies and displays information in the dependency graph, but does not generate {% data variables.product.prodname_dependabot_alerts %} by default. Repository owners or people with admin access can enable {% data variables.product.prodname_dependabot_alerts %}. También puedes habilitar o inhabilitar las alertas del Dependabot para todos los repositorios que pertenezcan a tu cuenta de usuario u organización. Para obtener más información, consulta la sección "[Administrar los ajustes de análisis y seguridad para tu cuenta de usuario](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/managing-security-and-analysis-settings-for-your-personal-account)" o "[Administrar el análisis y seguridad para tu organización](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-security-and-analysis-settings-for-your-organization)".

Private repositories:
- **Dependency graph**—not enabled by default. The feature can be enabled by repository administrators. Para obtener más información, consulta la sección "[Explorar las dependencias de un repositorio](/code-security/supply-chain-security/understanding-your-software-supply-chain/exploring-the-dependencies-of-a-repository#enabling-and-disabling-the-dependency-graph-for-a-private-repository)".
{% ifversion fpt %}
- **Dependency review**—available in private repositories owned by organizations that use {% data variables.product.prodname_ghe_cloud %} and have a license for {% data variables.product.prodname_GH_advanced_security %}. Para obtener más información, consulta la [documentación de {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review).
{% elsif ghec %}
- **Dependency review**—available in private repositories owned by organizations provided you have a license for {% data variables.product.prodname_GH_advanced_security %} and the dependency graph enabled. Para obtener más información, consulta las secciones "[Acerca de la {% data variables.product.prodname_GH_advanced_security %}](/get-started/learning-about-github/about-github-advanced-security)" y "[Explorar las dependencias de un repositorio](/code-security/supply-chain-security/understanding-your-software-supply-chain/exploring-the-dependencies-of-a-repository#enabling-and-disabling-the-dependency-graph-for-a-private-repository)"
{% endif %}
- **{% data variables.product.prodname_dependabot_alerts %}**—no se habilita predeterminadamente. Los propietarios de los repositorios privados o las personas con acceso administrativo puede habilitar las {% data variables.product.prodname_dependabot_alerts %} si habilitan la gráfica de dependencias y las {% data variables.product.prodname_dependabot_alerts %} para sus repositorios. También puedes habilitar o inhabilitar las alertas del Dependabot para todos los repositorios que pertenezcan a tu cuenta de usuario u organización. Para obtener más información, consulta la sección "[Administrar los ajustes de análisis y seguridad para tu cuenta de usuario](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/managing-security-and-analysis-settings-for-your-personal-account)" o "[Administrar el análisis y seguridad para tu organización](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-security-and-analysis-settings-for-your-organization)".

Any repository type:
- **{% data variables.product.prodname_dependabot_security_updates %}**—no se habilita predeterminadamente. Puedes habilitar las {% data variables.product.prodname_dependabot_security_updates %} para cualquier repositorio que utilice {% data variables.product.prodname_dependabot_alerts %} y la gráfica de dependencias. Para obtener más información sobre cómo habilitar las actualizaciones de seguridad, consulta la sección "[Configurar las {% data variables.product.prodname_dependabot_security_updates %}](/code-security/dependabot/dependabot-security-updates/configuring-dependabot-security-updates)".
- **{% data variables.product.prodname_dependabot_version_updates %}**—no se habilita predeterminadamente. Las personas con permisos de escritura en un repositorio pueden habilitar las {% data variables.product.prodname_dependabot_version_updates %}. Para obtener más información sobre cómo habilitar las actualizaciones de versión, consulta la sección "[Configurar las {% data variables.product.prodname_dependabot_version_updates %}](/code-security/dependabot/dependabot-version-updates/configuring-dependabot-version-updates)".
{% endif %}

{% ifversion ghes or ghae %}
- **Dependency graph** and **{% data variables.product.prodname_dependabot_alerts %}**—not enabled by default. Both features are configured at an enterprise level by the enterprise owner. Para obtener más información, consulta la sección {% ifversion ghes %}"[Habilitar la gráfica de dependencias para tu empresa](/admin/code-security/managing-supply-chain-security-for-your-enterprise/enabling-the-dependency-graph-for-your-enterprise)" y {% endif %}"[Habilitar el {% data variables.product.prodname_dependabot %} para tu empresa](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)".
- **Dependency review**—available when dependency graph is enabled for {% data variables.product.product_location %} and {% data variables.product.prodname_advanced_security %} is enabled for the organization or repository. Para obtener más información, consulta la sección "[Acerca de la {% data variables.product.prodname_GH_advanced_security %}](/get-started/learning-about-github/about-github-advanced-security)".
{% endif %}
{% ifversion ghes > 3.2 %}
- **{% data variables.product.prodname_dependabot_security_updates %}**—no se habilita predeterminadamente. Puedes habilitar las {% data variables.product.prodname_dependabot_security_updates %} para cualquier repositorio que utilice {% data variables.product.prodname_dependabot_alerts %} y la gráfica de dependencias. Para obtener más información sobre cómo habilitar las actualizaciones de seguridad, consulta la sección "[Configurar las {% data variables.product.prodname_dependabot_security_updates %}](/code-security/dependabot/dependabot-security-updates/configuring-dependabot-security-updates)".
- **{% data variables.product.prodname_dependabot_version_updates %}**—no se habilita predeterminadamente. Las personas con permisos de escritura en un repositorio pueden habilitar las {% data variables.product.prodname_dependabot_version_updates %}. Para obtener más información sobre cómo habilitar las actualizaciones de versión, consulta la sección "[Configurar las {% data variables.product.prodname_dependabot_version_updates %}](/code-security/dependabot/dependabot-version-updates/configuring-dependabot-version-updates)".
{% endif %}
