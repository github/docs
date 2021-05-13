---
title: Ver los colaboradores de un proyecto
intro: 'Puedes ver quién aportó confirmaciones a un repositorio{% if currentVersion == "free-pro-team@latest" %} y sus dependencias{% endif %}.'
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
  - Repositories
---

### Acerca de los colaboradores

Puedes ver hasta 100 colaboradores de un repositorio{% if currentVersion != "free-pro-team@latest" %}, incluidos los coautores de confirmaciones,{% endif %} en el gráfico de colaboradores. Las confirmaciones de fusión y las confirmaciones vacías no se cuentan en las contribuciones para este gráfico.

{% if currentVersion == "free-pro-team@latest" %}
You can also see a list of people who have contributed to the project's Python dependencies. Para acceder a esta lista de colaboradores de la comunidad, visita `https://github.com/REPO-OWNER/REPO-NAME/community_contributors`.
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
- La dirección de correo electrónico que utilizaste como el autor de las confirmaciones no se ha agregado a tu cuenta {% data variables.product.product_name %}.

{% tip %}

**Tip:** Para listar todos los colaboradores de una confirmación en un repositorio, consulta la sección "[Repositorios](/v3/repos/#list-contributors)".

{% endtip %}

Si todas tus confirmaciones en el repositorio están en ramas que no son por defecto, no estarás en el gráfico de colaboradores. Por ejemplo, las confirmaciones en la rama `gh-pages` no están incluidas en el gráfico excepto que `gh-pages` sea la rama por defecto del repositorio. Para que tus confirmaciones se fusionen en la rama por defecto, puedes crear una solicitud de extracción. Para obtener más información, consulta "[Acerca de las solicitudes de extracción](/articles/about-pull-requests)."

Si la dirección de correo electrónico que utilizaste como el autor de las confirmaciones no se ha agregado a tu cuenta {% data variables.product.product_name %}, tus confirmaciones no se vincularán a tu cuenta y no aparecerás en el gráfico de colaboradores. Para obtener más información, consulta "[Configurar tu dirección de correo electrónico de confirmación](/articles/setting-your-commit-email-address)" y "[Agregar una dirección de correo electrónico a tu cuenta {% data variables.product.product_name %}](/articles/adding-an-email-address-to-your-github-account)."
