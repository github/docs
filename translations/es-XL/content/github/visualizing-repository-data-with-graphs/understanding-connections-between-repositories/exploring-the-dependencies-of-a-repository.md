---
title: Explorar las dependencias de un repositorio
intro: 'Al utilizar la gráfica de dependencias, puedes ver los paquetes de los cuales depende tu proyecto {% if currentVersion == "free-pro-team@latest" %} y los repositorios que dependen de él{% endif %}. Adicionalmente, puedes ver cualquier vulnerabilidad que se detecte en sus dependencias.'
redirect_from:
  - /github/visualizing-repository-data-with-graphs/exploring-the-dependencies-of-a-repository
versions:
  enterprise-server: <=2.22
topics:
  - Repositories
---
### Visualizar la gráfica de dependencias

{% data reusables.repositories.enable-security-alerts %}

La gráfica de dependencias muestra las dependencias{% if currentVersion == "free-pro-team@latest" %} y los dependientes{% endif %} de tu repositorio. Para obtener más información acerca de la detección de dependencias y de cuáles ecosistemas son compatibles, consulta la sección [Acerca de la gráfica de dependencias](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)".

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}
{% data reusables.repositories.click-dependency-graph %}{% if currentVersion == "free-pro-team@latest" %}
4. Opcionalmente, debajo de "Gráfica de dependencias", da clic en **Dependientes**. ![Dependents tab on the dependency graph page](/assets/images/help/graphs/dependency-graph-dependents-tab.png){% endif %}

#### Vista de dependencias

{% if currentVersion == "free-pro-team@latest" %}
Las dependencias se agrupan por ecosistema. Puedes expandir una dependencia para ver a su vez sus dependencias. Para las dependencias en repositorios públicos hospedadas en {% data variables.product.product_name %}, también puedes dar clic en una de ellas para ver el repositorio. Las dependencias en los repositorios privados, paquetes privados, o archivos no reconocidos se muestran en texto simple.

Si se han detectado vulnerabilidades en el repositorio, estas se muestran en la parte superior de la vista para los usuarios con acceso a {% data variables.product.prodname_dependabot_alerts %}.

![Gráfico de dependencias](/assets/images/help/graphs/dependencies_graph.png)

{% endif %}

{% if currentVersion != "free-pro-team@latest" and currentVersion ver_gt "enterprise-server@2.21" %}
Se listará cualquier dependencia directa e indirecta que se especifique en los archivos de bloqueo o de manifiesto del repositorio, agrupadas por ecosistema. If vulnerabilities have been detected in the repository, these are shown at the top of the view for users with access to {% data variables.product.prodname_dependabot_short %} alerts.

{% note %}

**Nota:** {% data variables.product.prodname_ghe_server %} no llena la vista de **Dependientes**.

{% endnote %}

![Gráfico de dependencias](/assets/images/help/graphs/dependencies_graph_server.png)

{% note %}

**Nota:** {% data variables.product.prodname_ghe_server %} no llena la vista de **Dependientes**.

{% endnote %}

{% endif %}

{% if currentVersion != "free-pro-team@latest" and currentVersion ver_lt "enterprise-server@2.22" %}
Se listará cualquier dependencia directa e indirecta que se especifique en los archivos de bloqueo o de manifiesto del repositorio, agrupadas por ecosistema. Si se detectan vulnerabilidades en el repositorio, estas se mostrarán en la parte superior de la vista para los usuarios con acceso a las alertas de seguridad.

{% note %}

**Nota:** {% data variables.product.prodname_ghe_server %} no llena la vista de **Dependientes**.

{% endnote %}

![Gráfico de dependencias](/assets/images/help/graphs/dependencies_graph_server.png)

{% note %}

**Nota:** {% data variables.product.prodname_ghe_server %} no llena la vista de **Dependientes**.

{% endnote %}

{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
#### Vista de dependientes

Para los repositorios públicos, la vista de dependientes muestra cómo otros repositorios utilizan este repositorio. Para mostrar únicamente los repositorios que contienen una biblioteca en un administrador de paquetes, da cilc en **CANTIDAD de paquetes** inmediatamente sobre la lista de repositorios dependientes. La cantidad de dependientes es aproximada y podría no siempre empatar con los dependientes listados.

![Gráfico de dependencias](/assets/images/help/graphs/dependents_graph.png)

### Habilitar e inhabilitar la gráfica de dependencias para un repositorio privado

Los administradores del repositorio pueden habilitar o inhabilitar la gráfica de dependencias para los repositorios privados.

También puedes habilitar o inhabilitar la gráfica de dependencias para todos los repositorios que pertenecen a tu cuenta de usuario u organización. Para obtener más información, consulta la sección "[Administrar la seguridad y la configuración de análisis para tu cuenta de usuario" o la sección](/github/setting-up-and-managing-your-github-user-account/managing-security-and-analysis-settings-for-your-user-account)"[Administrar la configuración de seguridad y análisis para tu organización](/github/setting-up-and-managing-organizations-and-teams/managing-security-and-analysis-settings-for-your-organization)".

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-security-and-analysis %}
4. Lee los mensajes sobre el otorgar acceso de solo lectura a {% data variables.product.product_name %} para los datos del repositorio para así habilitar la gráfica de dependencias, posteriormente, da clic en **Habilitar** junto a "Gráfica de Dependencias". ![Botón de "Habilitar" para la gráfica de dependencias](/assets/images/help/repository/dependency-graph-enable-button.png)

Puedes inhabilitar la gráfica de dependencias en cualquier momento si das clic en **Inhabilitar** junto a "Gráfica de Dependencias" en la pestaña de Seguridad & análisis.
{% endif %}

### Solución de problemas del gráfico de dependencias

Si tu gráfica de dependencias está vacía, puede que haya un problema con el archivo que contiene tus dependencias. Revisa el archivo para asegurarte de que tiene el formato correcto para el tipo de archivo.

{% if currentVersion == "free-pro-team@latest" %}
Si este archivo tiene el formato correcto, entonces revisa su tamaño. La gráfica de dependencias ignora los archivos individuales de manifiesto y de bloqueo que pesen más de 0.5 Mb, a menos de que seas un usuario de {% data variables.product.prodname_enterprise %}. Este procesa hasta 20 archivos de manifiesto o de bloqueo por repositorio predeterminadamente, así que puedes dividir las dependencias en archivos más pequeños en los subdirectorios del repositorio.{% endif %}

Si un archivo de manifiesto o de bloqueo no se procesa, sus dependencias se omiten de la gráfica de dependencias y no podrán verificar si hay dependencias vulnerables.

### Leer más

- "[Acerca de la gráfica de dependencias](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)"{% if currentVersion == "free-pro-team@latest" %}
- "[Viewing insights for your organization](/github/setting-up-and-managing-organizations-and-teams/viewing-insights-for-your-organization)"
- "[Ver y actualizar las dependencias vulnerables en tu repositorio](/github/managing-security-vulnerabilities/viewing-and-updating-vulnerable-dependencies-in-your-repository)"
- "[Entender cómo {% data variables.product.product_name %} utiliza y protege tus datos](/github/understanding-how-github-uses-and-protects-your-data)"
{% endif %}
