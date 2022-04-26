---
title: Configuring the dependency graph
intro: Puedes permitir que los usuarios identifiquen las dependencias de sus proyectos si habilitas la gráfica de dependencias.
redirect_from:
  - /code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph#enabling-the-dependency-graph
versions:
  fpt: '*'
  ghes: '*'
  ghae: issue-4864
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

{% ifversion fpt or ghec %} ## About configuring the dependency graph {% endif %}
{% ifversion fpt or ghec %}Para generar una gráfica de dependencias, {% data variables.product.product_name %} necesita acceso de solo lectura a los archivos de manifiesto y de bloqueo de un repositorio. La gráfica de dependencias se genera automáticamente para todos los repositorios públicos y puedes elegir habilitarla para los privados. For more information on viewing the dependency graph, see "[Exploring the dependencies of a repository](/github/visualizing-repository-data-with-graphs/exploring-the-dependencies-of-a-repository)."{% endif %}

{% ifversion ghes or ghae %} ## Enabling the dependency graph
{% data reusables.dependabot.ghes-ghae-enabling-dependency-graph %}{% endif %}{% ifversion fpt or ghec %}

### Habilitar e inhabilitar la gráfica de dependencias para un repositorio privado

{% data reusables.dependabot.enabling-disabling-dependency-graph-private-repo %}
{% endif %}

Cuando la gráfica de dependencias se habilita por primera vez, cualquier manifiesto y archivo de bloqueo para los ecosistemas compatibles se pasarán de inmediato. La gráfica se llena en cuestión de minutos habitualmente, pero esto puede tardar más para los repositorios que tengan muchas dependencias. Una vez que se habilita, la gráfica se actualiza automáticamente con cada carga al repositorio{% ifversion fpt or ghec %} y con cada carga a cualquier otro repositorio de la gráfica{% endif %}.

## Leer más

{% ifversion ghec %}- "[Viewing insights for your organization](/organizations/collaborating-with-groups-in-organizations/viewing-insights-for-your-organization)"{% endif %}
- "[Ver las {% data variables.product.prodname_dependabot_alerts %} para las dependencias vulnerables](/github/managing-security-vulnerabilities/viewing-and-updating-vulnerable-dependencies-in-your-repository)"
- "[Solucionar problemas en la detección de dependencias vulnerables](/github/managing-security-vulnerabilities/troubleshooting-the-detection-of-vulnerable-dependencies)"
