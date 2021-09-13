---
title: Explorar las dependencias de un repositorio
intro: 'Al utilizar la gráfica de dependencias, puedes ver los paquetes de los cuales depende tu proyecto{% if currentVersion == "free-pro-team@latest" %} y los repositorios que dependen de él{% endif %}. Adicionalmente, puedes ver cualquier vulnerabilidad que se detecte en sus dependencias.'
versions:
  enterprise-server: <=2.22
topics:
  - Repositories
redirect_from:
  - /github/visualizing-repository-data-with-graphs/exploring-the-dependencies-of-a-repository
---

<!--See /content/code-security/supply-chain-security/exploring-the-dependencies-of-a-repository for the latest version of this article -->

### Visualizar la gráfica de dependencias

{% data reusables.repositories.enable-security-alerts %}

La gráfica de dependencias muestra las dependencias de tu repositorio. Para obtener más información acerca de la detección de dependencias y de cuáles ecosistemas son compatibles, consulta la sección [Acerca de la gráfica de dependencias](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)".

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}
{% data reusables.repositories.click-dependency-graph %}

#### Vista de dependencias

{% if enterpriseServerVersions contains currentVersion and currentVersion ver_gt "enterprise-server@2.21" %}
Se listará cualquier dependencia directa e indirecta que se especifique en los archivos de bloqueo o de manifiesto del repositorio, agrupadas por ecosistema. Si se han detectado vulnerabilidades en el repositorio, estas se muestran en la parte superior de la vista para los usuarios con acceso a {% data variables.product.prodname_dependabot_alerts %}.

![Gráfico de dependencias](/assets/images/help/graphs/dependencies_graph_server.png)

{% note %}

**Nota:** {% data variables.product.prodname_ghe_server %} no llena la vista de **Dependientes**.

{% endnote %}

{% endif %}

{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.22" %}
Se listará cualquier dependencia directa e indirecta que se especifique en los archivos de bloqueo o de manifiesto del repositorio, agrupadas por ecosistema. Si se detectan vulnerabilidades en el repositorio, estas se mostrarán en la parte superior de la vista para los usuarios con acceso a las alertas de seguridad.

![Gráfico de dependencias](/assets/images/help/graphs/dependencies_graph_server.png)

{% note %}

**Nota:** {% data variables.product.prodname_ghe_server %} no llena la vista de **Dependientes**.

{% endnote %}

{% endif %}

### Solución de problemas del gráfico de dependencias

Si tu gráfica de dependencias está vacía, puede que haya un problema con el archivo que contiene tus dependencias. Revisa el archivo para asegurarte de que tiene el formato correcto para el tipo de archivo.

Si un archivo de manifiesto o de bloqueo no se procesa, sus dependencias se omiten de la gráfica de dependencias y no podrán verificar si hay dependencias vulnerables.
