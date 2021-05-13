---
title: Crear un repositorio desde una plantilla
intro: Puedes generar un nuevo repositorio con la misma estructura de directorio y los mismos archivos que un repositorio existente.
redirect_from:
  - /articles/creating-a-repository-from-a-template
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Repositories
---

### About repository templates

Cualquier usuario con permisos de lectura para un repositorio de plantillas puede crear un repositorio a partir de esa plantilla. Para obtener más información, consulta "[Crear un repositorio de plantilla](/articles/creating-a-template-repository)".

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
{% tip %}

**Tip**: You can also create a repository from a template using the {% data variables.product.prodname_cli %}. For more information, see "[`gh repo create`](https://cli.github.com/manual/gh_repo_create)" in the {% data variables.product.product_location %} documentation.

{% endtip %}
{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" %}
Puedes elegir incluir la estructura de directorio y archivos únicamente desde la rama predeterminada del repositorio plantilla o incluir todas las ramas.
{% endif %}

Crear un repositorio a partir de una plantilla es similar a bifurcar un repositorio, pero existen algunas diferencias importantes:
- Una nueva bifurcación incluye todo el historial de confirmaciones del repositorio padre, mientras que un repositorio creado a partir de una plantilla comienza con una única confirmación.
- Las confirmaciones en una bifurcación no aparecen en tu gráfico de contribuciones, mientras que las confirmaciones en un repositorio creado a partir de una plantilla sí se muestran en tu gráfico de contribuciones.
- Una bifurcación puede ser una forma temporaria de contribuir código a un proyecto existente, mientras que crear un repositorio a partir de una plantilla permite iniciar rápidamente un proyecto nuevo.

Para obtener más información acerca de las bifurcaciones, consulta "[Acerca de las bifurcaciones](/articles/about-forks)".

### Crear un repositorio desde una plantilla

{% data reusables.repositories.navigate-to-repo %}
2. Sobre la lista, haz clic en **Usar esta plantilla**. ![Botón Use this template button (Usar esta plantilla)](/assets/images/help/repository/use-this-template-button.png)
{% data reusables.repositories.owner-drop-down %}
{% data reusables.repositories.repo-name %}
{% data reusables.repositories.choose-repo-visibility %}{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" %}
6. De manera opcional, para incluir la estructura de directorio y los archivos de todas las ramas en la plantilla, y no únicamente aquellos de la rama predeterminada, selecciona **Incluir todas las ramas**. ![Include all branches checkbox](/assets/images/help/repository/include-all-branches.png){% endif %}
{% data reusables.repositories.select-marketplace-apps %}
8. Haz clic en **Crear un repositorio a partir de una plantilla**.
