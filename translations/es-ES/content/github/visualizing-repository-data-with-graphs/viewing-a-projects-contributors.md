---
title: Ver los colaboradores de un proyecto
intro: 'Puedes ver tanto quién contribuyó con las confirmaciones en un repositorio{% if currentVersion == "free-pro-team@latest" %}, como sus dependencias{% endif %}.'
redirect_from:
  - /articles/i-don-t-see-myself-in-the-contributions-graph/
  - /articles/viewing-contribution-activity-in-a-repository/
  - /articles/viewing-a-projects-contributors
product: '{% data reusables.gated-features.repository-insights %}'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - repositories
---

### Acerca de los colaboradores

Puedes ver los 100 colaboradores principales de un repositorio{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}, incluyendo los coautores de las confirmaciones,{% endif %} en la gráfica de colaboradores. Las confirmaciones de fusión y las confirmaciones vacías no se cuentan en las contribuciones para este gráfico.

{% if currentVersion == "free-pro-team@latest" %}
También puedes ver una lista de personas que han contribuido con las dependencias de Python del proyecto. Para acceder a esta lista de colaboradores de la comunidad, visita `https://github.com/REPO-OWNER/REPO-NAME/community_contributors`.
{% endif %}

### Acceder al gráfico de colaboradores

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}
3. En la barra lateral izquierda, haz clic en **Contributors (Colaboradores)**. ![Pestaña de colaboradores](/assets/images/help/graphs/contributors_tab.png)
4. Como alternativa, para ver colaboradores durante un período de tiempo específico, haz clic, después arrastra hasta que se selecciona el período de tiempo. ![Rango de tiempo seleccionado en el gráfico de colaboradores](/assets/images/help/graphs/repo_contributors_click_drag_graph.png)

### Resolución de problemas con colaboradores

Si no apareces en el gráfico de colaboradores de un repositorio, puede deberse a que:
- No eres uno de los 100 colaboradores principales.
- Tus confirmaciones no se han fusionado en la rama por defecto.
- La dirección de correo electrónico que utilizaste para crear las confirmaciones no está conectada a tu cuenta en {% data variables.product.product_name %}.

{% tip %}

**Tip:** Para listar todos los colaboradores de una confirmación en un repositorio, consulta la sección "[Repositorios](/rest/reference/repos#list-contributors)".

{% endtip %}

Si todas tus confirmaciones en el repositorio están en ramas que no son por defecto, no estarás en el gráfico de colaboradores. Por ejemplo, las confirmaciones en la rama `gh-pages` no están incluidas en el gráfico excepto que `gh-pages` sea la rama por defecto del repositorio. Para que tus confirmaciones se fusionen en la rama por defecto, puedes crear una solicitud de extracción. Para obtener más información, consulta "[Acerca de las solicitudes de extracción](/articles/about-pull-requests)."

Si la dirección de correo electrónico que utilizaste para crear las confirmaciones no está conectada a tu cuenta en {% data variables.product.product_name %}, tus confirmaciones no se enlazarán a ésta, y no aparecerás en la gráfica de colaboradores. Para obtener más información, consulta la sección "[Configurar tu dirección de correo electrónico de confirmaciones](/articles/setting-your-commit-email-address){% if currentVersion != "github-ae@latest" %}" y "[Agregar una dirección de correo electrónico a tu cuenta de {% data variables.product.product_name %}](/articles/adding-an-email-address-to-your-github-account){% endif %}".
