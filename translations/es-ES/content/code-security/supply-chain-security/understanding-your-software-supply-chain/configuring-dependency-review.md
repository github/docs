---
title: Configuring dependency review
intro: You can use dependency review to catch vulnerabilities before they are added to your project.
shortTitle: Configure dependency review
versions:
  fpt: '*'
  ghes: '>= 3.2'
  ghae: issue-4864
  ghec: '*'
type: how_to
topics:
  - Advanced Security
  - Dependency review
  - Vulnerabilities
  - Dependencies
  - Pull requests
---

{% data reusables.dependency-review.beta %}

## Acerca de la revisión de dependencias

{% data reusables.dependency-review.feature-overview %}

Para obtener más información, consulta las secciones "[Acerca de la revisión de dependencias](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review)" y "[revisar los cambios a las dependencias en una solicitud de cambios](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-dependency-changes-in-a-pull-request)".

## About configuring dependency review

{% ifversion fpt %}
La revisión de dependencias está disponible en todos los repositorios públicos con todos los productos y no puede inhabilitarse. Dependency review is available in private repositories owned by organizations that use GitHub Enterprise Cloud and have a license for [{% data variables.product.prodname_GH_advanced_security %}](/get-started/learning-about-github/about-github-advanced-security). Para obtener más información, consulta la [documentación de {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/code-security/supply-chain-security/understanding-your-software-supply-chain/configuring-dependency-review).

{% elsif ghec %}
La revisión de dependencias se incluye en {% data variables.product.product_name %} para los repositorios públicos. To use dependency review in private repositories owned by organizations, you must have a license for [{% data variables.product.prodname_GH_advanced_security %}](/get-started/learning-about-github/about-github-advanced-security) and have the dependency graph enabled.

{% data reusables.dependabot.enabling-disabling-dependency-graph-private-repo %}
1. If "{% data variables.product.prodname_GH_advanced_security %}" is not enabled, click **Enable** next to the feature. ![Screenshot of GitHub Advanced Security feature with "Enable" button emphasized](/assets/images/help/security/enable-ghas-private-repo.png)

{% elsif ghes or ghae %}
La revisión de dependencias se encuentra disponible cuando se habilita la gráfica de dependencias de {% data variables.product.product_location %} y cuando se habilita la {% data variables.product.prodname_advanced_security %} para la organización o el repositorio. Para obtener más información, consulta la sección "[Habilitar la {% data variables.product.prodname_GH_advanced_security %} en tu empresa](/admin/code-security/managing-github-advanced-security-for-your-enterprise/enabling-github-advanced-security-for-your-enterprise)".

### Checking if the dependency graph is enabled


{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-code-security-and-analysis %}
1. Under "Configure security and analysis features", check if the dependency graph is enabled.
1. If dependency graph is enabled, click **Enable** next to "{% data variables.product.prodname_GH_advanced_security %}" to enable {% data variables.product.prodname_advanced_security %}, including dependency review. El botón de habilitar está inhabilitado si tu empresa no tiene licencias disponibles para la {% data variables.product.prodname_advanced_security %}.{% ifversion ghes < 3.3 %} ![Screenshot of "Code security and analysis" features"](/assets/images/enterprise/3.2/repository/code-security-and-analysis-enable-ghas-3.2.png){% endif %}{% ifversion ghes > 3.2 %} ![Screenshot of "Code security and analysis" features"](/assets/images/enterprise/3.4/repository/code-security-and-analysis-enable-ghas-3.4.png){% endif %}
{% endif %}
