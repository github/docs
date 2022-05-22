---
title: Visualizar los lanzamientos y etiquetas de tu repositorio
intro: 'Puedes ver el historial cronológico de tu repositorio por lanzamiento, nombre o número de versión de la etiqueta.'
redirect_from:
  - /articles/working-with-tags/
  - /articles/viewing-your-repositorys-tags
  - /github/administering-a-repository/viewing-your-repositorys-tags
  - /github/administering-a-repository/viewing-your-repositorys-releases-and-tags
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Repositories
---
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
{% tip %}

**Tip**: You can also view a release using the {% data variables.product.prodname_cli %}. For more information, see "[`gh release view`](https://cli.github.com/manual/gh_release_view)" in the {% data variables.product.prodname_cli %} documentation.

{% endtip %}
{% endif %}

### Visualizar lanzamientos

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.releases %}
2. En la parte superior de la página de lanzamientos, da clic en **Lanzamientos**.

### Visualizar etiquetas

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.releases %}
2. En la parte superior de la página de lanzamiento, haz clic en **Tags** (Etiqueta). ![Página de etiquetas](/assets/images/help/releases/tags-list.png)

### Leer más

- "[Firmar etiquetas](/articles/signing-tags)"
