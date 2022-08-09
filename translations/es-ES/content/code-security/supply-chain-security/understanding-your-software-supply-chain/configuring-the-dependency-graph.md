---
title: Configuring the dependency graph
intro: Puedes permitir que los usuarios identifiquen las dependencias de sus proyectos si habilitas la gráfica de dependencias.
redirect_from:
  - /code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph#enabling-the-dependency-graph
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Dependency graph
  - Dependencies
  - Repositories
shortTitle: Configure dependency graph
---

## Acerca del gráfico de dependencias

{% data reusables.dependabot.about-the-dependency-graph %}

Para obtener más información, consulta la sección "[Acerca de la gráfica de dependencias](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph)".

{% ifversion fpt or ghec %}
## About configuring the dependency graph
To generate a dependency graph, {% data variables.product.product_name %} needs read-only access to the dependency manifest and lock files for a repository. La gráfica de dependencias se genera automáticamente para todos los repositorios públicos y puedes elegir habilitarla para los privados. For more information on viewing the dependency graph, see "[Exploring the dependencies of a repository](/github/visualizing-repository-data-with-graphs/exploring-the-dependencies-of-a-repository)."

{% data reusables.dependency-submission.dependency-submission-link %}
{% endif %}

{% ifversion ghes %} ## Enabling the dependency graph
{% data reusables.dependabot.ghes-ghae-enabling-dependency-graph %}{% endif %}{% ifversion fpt or ghec %}

### Habilitar e inhabilitar la gráfica de dependencias para un repositorio privado

{% data reusables.dependabot.enabling-disabling-dependency-graph-private-repo %}
{% endif %}

Cuando la gráfica de dependencias se habilita por primera vez, cualquier manifiesto y archivo de bloqueo para los ecosistemas compatibles se pasarán de inmediato. La gráfica se llena en cuestión de minutos habitualmente, pero esto puede tardar más para los repositorios que tengan muchas dependencias. Una vez que se habilita, la gráfica se actualiza automáticamente con cada carga al repositorio{% ifversion fpt or ghec %} y con cada carga a cualquier otro repositorio de la gráfica{% endif %}.

{% ifversion ghes %}
{% ifversion dependency-submission-api %}{% data reusables.dependency-submission.dependency-submission-link %}{% endif %}
{% endif %}

## Leer más

{% ifversion ghec %}- "[Viewing insights for your organization](/organizations/collaborating-with-groups-in-organizations/viewing-insights-for-your-organization)"{% endif %}
- "[Ver y actualizar{% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts)"
- "[Solucionar problemas en la detección de dependencias vulnerables](/github/managing-security-vulnerabilities/troubleshooting-the-detection-of-vulnerable-dependencies)"
