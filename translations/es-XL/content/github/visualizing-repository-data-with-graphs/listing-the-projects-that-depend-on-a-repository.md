---
title: Detallar los proyectos que dependen de un repositorio
intro: Puedes ver los paquetes y proyectos que dependen de un repositorio en el gráfico de dependencias.
redirect_from:
  - /articles/listing-the-projects-that-depend-on-a-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### Acerca del gráfico de dependencias
El gráfico de dependencias contiene datos sobre los paquetes y las aplicaciones. Los paquetes son repositorios que contienen una biblioteca en un administrador de paquetes, mientras que las aplicaciones son repositorios que dependen del repositorio seleccionado. La lista de aplicaciones en el gráfico de dependencias está clasificada por el proyecto más reciente que depende del repositorio.

El gráfico de dependencias contiene datos para los siguientes lenguajes:

- RubyGems
- NPM
- PyPI
- Maven (pom.xml únicamente)
- Nuget

{% data reusables.repositories.enable-security-alerts %}

{% note %}

**Nota:** Los conteos de dependencias son aproximados y puede que no coincidan con las dependencias detalladas.

{% endnote %}

![Gráfico de dependencias](/assets/images/help/graphs/dependents_graph.png)

### Acceder al gráfico de dependencias

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}
{% data reusables.repositories.click-dependency-graph %}
4. En "Dependency graph" (Gráfico de dependencias), haz clic en **Dependents** (Dependencias). ![Pestaña Dependents (Dependencias) de la página del gráfico de dependencias](/assets/images/help/graphs/dependency-graph-dependents-tab.png)

### Leer más

- "[Detallar los paquetes de los que depende un repositorio](/articles/listing-the-packages-that-a-repository-depends-on)"{% if currentVersion == "free-pro-team@latest" %}
- "[Ver la información de tu organización](/articles/viewing-insights-for-your-organization)"{% endif %}
