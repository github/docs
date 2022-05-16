---
title: Acerca de la seguridad de la cadena de suministro
intro: '{% data variables.product.product_name %} helps you secure your supply chain, from understanding the dependencies in your environment, to knowing about vulnerabilities in those dependencies{% ifversion fpt or ghec or ghes > 3.2 %}, and patching them{% endif %}.'
miniTocMaxHeadingLevel: 3
shortTitle: Seguridad de la cadena de suministro
redirect_from:
  - /code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies
versions:
  fpt: '*'
  ghes: '*'
  ghae: issue-4864
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

## About supply chain security at GitHub

With the accelerated use of open source, most projects depend on hundreds of open-source dependencies. This poses a security problem: what if the dependencies you're using are vulnerable? You could be putting your users at risk of a supply chain attack. One of the most important things you can do to protect your supply chain is to patch your vulnerabilities.

You add dependencies directly to your supply chain when you specify them in a manifest file or a lockfile. Dependencies can also be included transitively, that is, even if you don’t specify a particular dependency, but a dependency of yours uses it, then you’re also dependent on that dependency.

{% data variables.product.product_name %} ofrece un rango de características que te ayudan a entender las dependencias en tu ambiente{% ifversion ghes < 3.3 or ghae %} y conocer las vulnerabilidades en dichas dependencias{% endif %}{% ifversion fpt or ghec or ghes > 3.2 %}, conocer las vulnerabilidades en dichas dependencias y parcharlas{% endif %}.

The supply chain features on {% data variables.product.product_name %} are:
- **Gráfica de dependencias**
{% ifversion fpt or ghec or ghes > 3.1 or ghae %}- **Dependency review**{% endif %}
- **{% data variables.product.prodname_dependabot_alerts %} **
{% ifversion fpt or ghec or ghes > 3.2 %}- **{% data variables.product.prodname_dependabot_updates %}**
  - **{% data variables.product.prodname_dependabot_security_updates %}**
  - **{% data variables.product.prodname_dependabot_version_updates %}**{% endif %}

The dependency graph is central to supply chain security. The dependency graph identifies all upstream dependencies and public downstream dependents of a repository or package. You can see your repository’s dependencies and some of their properties, like vulnerability information, on the dependency graph for the repository.

{% ifversion fpt or ghec or ghes > 3.1 or ghae %}
Other supply chain features on {% data variables.product.prodname_dotcom %} rely on the information provided by the dependency graph.

- Dependency review uses the dependency graph to identify dependency changes and help you understand the security impact of these changes when you review pull requests.
- El {% data variables.product.prodname_dependabot %} hace referencias de los datos de las dependencias que proporciona la gráfica de dependencias con la lista de las vulnerabilidades publicadas en la {% data variables.product.prodname_advisory_database %}, escanea tus dependencias y genera {% data variables.product.prodname_dependabot_alerts %} cuando se detecta una vulnerabilidad potencial.
{% ifversion fpt or ghec or ghes > 3.2 %}- {% data variables.product.prodname_dependabot_security_updates %} use the dependency graph and  {% data variables.product.prodname_dependabot_alerts %} to help you update dependencies with known vulnerabilities in your repository.

{% data variables.product.prodname_dependabot_version_updates %} don't use the dependency graph and rely on the semantic versioning of dependencies instead. {% data variables.product.prodname_dependabot_version_updates %} help you keep your dependencies updated, even when they don’t have any vulnerabilities.
{% endif %}
{% endif %}

{% ifversion ghes < 3.2 %}
El {% data variables.product.prodname_dependabot %} hace referencias de los datos de las dependencias que proporciona la gráfica de dependencias con la lista de las vulnerabilidades publicadas en la {% data variables.product.prodname_advisory_database %}, escanea tus dependencias y genera {% data variables.product.prodname_dependabot_alerts %} cuando se detecta una vulnerabilidad potencial.
 {% endif %}

## Feature overview

### What is the dependency graph

To generate the dependency graph, {% data variables.product.company_short %} looks at a repository’s explicit dependencies declared in the manifest and lockfiles. When enabled, the dependency graph automatically parses all known package manifest files in the repository, and uses this to construct a graph with known dependency names and versions.

- The dependency graph includes information on your _direct_ dependencies and _transitive_ dependencies.
- The dependency graph is automatically updated when you push a commit to {% data variables.product.company_short %} that changes or adds a supported manifest or lock file to the default branch, and when anyone pushes a change to the repository of one of your dependencies.
- You can see the dependency graph by opening the repository's main page on {% data variables.product.product_name %}, and navigating to the **Insights** tab.

For more information about the dependency graph, see "[About the dependency graph](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph)."

{% ifversion fpt or ghec or ghes > 3.1 or ghae %}
### What is dependency review

Dependency review helps reviewers and contributors understand dependency changes and their security impact in every pull request.

- Dependency review tells you which dependencies were added, removed, or updated, in a pull request. You can use the release dates, popularity of dependencies, and vulnerability information to help you decide whether to accept the change.
- You can see the dependency review for a pull request by showing the rich diff on the **Files Changed** tab.

For more information about dependency review, see "[About dependency review](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review)."

{% endif %}

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

{% data variables.product.prodname_dependabot_alerts %} highlight repositories affected by a newly discovered vulnerability based on the dependency graph and the {% data variables.product.prodname_advisory_database %}, which contains the versions on known vulnerability lists.

- El {% data variables.product.prodname_dependabot %} lleva a cabo un escaneo para detectar las dependencias vulnerables y envía {% data variables.product.prodname_dependabot_alerts %} cuando:
{% ifversion fpt or ghec %}
   - A new vulnerability is added to the {% data variables.product.prodname_advisory_database %}.{% else %}
   - Se sincronizan los datos de las asesorías nuevas en {% data variables.product.product_location %} cada hora desde {% data variables.product.prodname_dotcom_the_website %}. {% data reusables.security-advisory.link-browsing-advisory-db %}{% endif %}
   - The dependency graph for the repository changes.
- {% data variables.product.prodname_dependabot_alerts %} are displayed {% ifversion fpt or ghec or ghes > 3.0 %} on the **Security** tab for the repository and{% endif %} in the repository's dependency graph. La alerta incluye {% ifversion fpt or ghec or ghes > 3.0 %}un enlace al archivo afectado en el proyecto e{% endif %}información sobre una versión corregida.

For more information about {% data variables.product.prodname_dependabot_alerts %}, see "[About alerts for vulnerable dependencies](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-alerts-for-vulnerable-dependencies)."

{% ifversion fpt or ghec or ghes > 3.2 %}
#### What are Dependabot updates

There are two types of {% data variables.product.prodname_dependabot_updates %}: {% data variables.product.prodname_dependabot %} _security_ updates and _version_ updates. {% data variables.product.prodname_dependabot %} generates automatic pull requests to update your dependencies in both cases, but there are several differences.

{% data variables.product.prodname_dependabot_security_updates %}:
 - Triggered by a {% data variables.product.prodname_dependabot %} alert
 - Update dependencies to the minimum version that resolves a known vulnerability
 - Supported for ecosystems the dependency graph supports

{% data variables.product.prodname_dependabot_version_updates %}:
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
- **{% data variables.product.prodname_dependabot_alerts %}**—no se habilita predeterminadamente. {% data variables.product.prodname_dotcom %} detects vulnerable dependencies and displays information in the dependency graph, but does not generate {% data variables.product.prodname_dependabot_alerts %} by default. Repository owners or people with admin access can enable {% data variables.product.prodname_dependabot_alerts %}. You can also enable or disable Dependabot alerts for all repositories owned by your user account or organization. Para obtener más información, consulta la sección "[Administrar los ajustes de seguridad y análisis para tu cuenta de usuario](/account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/managing-security-and-analysis-settings-for-your-user-account)" o "[Administrar lis ajustes de seguridad y análisis para tu organización](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-security-and-analysis-settings-for-your-organization)".

Private repositories:
- **Dependency graph**—not enabled by default. The feature can be enabled by repository administrators. Para obtener más información, consulta la sección "[Explorar las dependencias de un repositorio](/code-security/supply-chain-security/understanding-your-software-supply-chain/exploring-the-dependencies-of-a-repository#enabling-and-disabling-the-dependency-graph-for-a-private-repository)".
{% ifversion fpt %}
- **Dependency review**—available in private repositories owned by organizations that use {% data variables.product.prodname_ghe_cloud %} and have a license for {% data variables.product.prodname_GH_advanced_security %}. Para obtener más información, consulta la [documentación de {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review).
{% elsif ghec %}
- **Dependency review**—available in private repositories owned by organizations provided you have a license for {% data variables.product.prodname_GH_advanced_security %} and the dependency graph enabled. Para obtener más información, consulta las secciones "[Acerca de la {% data variables.product.prodname_GH_advanced_security %}](/get-started/learning-about-github/about-github-advanced-security)" y "[Explorar las dependencias de un repositorio](/code-security/supply-chain-security/understanding-your-software-supply-chain/exploring-the-dependencies-of-a-repository#enabling-and-disabling-the-dependency-graph-for-a-private-repository)"
{% endif %}
- **{% data variables.product.prodname_dependabot_alerts %}**—no se habilita predeterminadamente. Los propietarios de los repositorios privados o las personas con acceso administrativo puede habilitar las {% data variables.product.prodname_dependabot_alerts %} si habilitan la gráfica de dependencias y las {% data variables.product.prodname_dependabot_alerts %} para sus repositorios. También puedes habilitar o inhabilitar las alertas del Dependabot para todos los repositorios que pertenezcan a tu cuenta de usuario u organización. Para obtener más información, consulta la sección "[Administrar los ajustes de seguridad y análisis para tu cuenta de usuario](/account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/managing-security-and-analysis-settings-for-your-user-account)" o "[Administrar lis ajustes de seguridad y análisis para tu organización](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-security-and-analysis-settings-for-your-organization)".

Any repository type:
- **{% data variables.product.prodname_dependabot_security_updates %}**—no se habilita predeterminadamente. Puedes habilitar las {% data variables.product.prodname_dependabot_security_updates %} para cualquier repositorio que utilice {% data variables.product.prodname_dependabot_alerts %} y la gráfica de dependencias. For information about enabling security updates, see "[Configuring {% data variables.product.prodname_dependabot_security_updates %}](/code-security/dependabot/dependabot-security-updates/configuring-dependabot-security-updates)."
- **{% data variables.product.prodname_dependabot_version_updates %}**—no se habilita predeterminadamente. Las personas con permisos de escritura en un repositorio pueden habilitar las {% data variables.product.prodname_dependabot_version_updates %}. For information about enabling version updates, see "[Configuring {% data variables.product.prodname_dependabot_version_updates %}](/code-security/dependabot/dependabot-version-updates/configuring-dependabot-version-updates)."
{% endif %}

{% ifversion ghes or ghae %}
- **Dependency graph** and **{% data variables.product.prodname_dependabot_alerts %}**—not enabled by default. Both features are configured at an enterprise level by the enterprise owner. Para obtener más información, consulta la sección {% ifversion ghes %}"[Habilitar la gráfica de dependencias para tu empresa](/admin/code-security/managing-supply-chain-security-for-your-enterprise/enabling-the-dependency-graph-for-your-enterprise)" y {% endif %}"[Habilitar el {% data variables.product.prodname_dependabot %} para tu empresa](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)".
- **Dependency review**—available when dependency graph is enabled for {% data variables.product.product_location %} and {% data variables.product.prodname_advanced_security %} is enabled for the organization or repository. For more information, see "[About {% data variables.product.prodname_GH_advanced_security %}](/get-started/learning-about-github/about-github-advanced-security)."
{% endif %}
{% ifversion ghes > 3.2 %}
- **{% data variables.product.prodname_dependabot_security_updates %}**—no se habilita predeterminadamente. Puedes habilitar las {% data variables.product.prodname_dependabot_security_updates %} para cualquier repositorio que utilice {% data variables.product.prodname_dependabot_alerts %} y la gráfica de dependencias. Para obtener más información sobre cómo habilitar las actualizaciones de seguridad, consulta la sección "[Configurar las {% data variables.product.prodname_dependabot_security_updates %}](/code-security/dependabot/dependabot-security-updates/configuring-dependabot-security-updates)".
- **{% data variables.product.prodname_dependabot_version_updates %}**—no se habilita predeterminadamente. Las personas con permisos de escritura en un repositorio pueden habilitar las {% data variables.product.prodname_dependabot_version_updates %}. Para obtener más información sobre cómo habilitar las actualizaciones de versión, consulta la sección "[Configurar las {% data variables.product.prodname_dependabot_version_updates %}](/code-security/dependabot/dependabot-version-updates/configuring-dependabot-version-updates)".
{% endif %}
