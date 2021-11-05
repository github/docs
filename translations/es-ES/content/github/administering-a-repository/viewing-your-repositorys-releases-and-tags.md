---
title: Visualizar los lanzamientos y etiquetas de tu repositorio
intro: 'Puedes ver el historial cronológico de tu repositorio por lanzamiento, nombre o número de versión de la etiqueta.'
redirect_from:
  - /articles/working-with-tags/
  - /articles/viewing-your-repositorys-tags
  - /github/administering-a-repository/viewing-your-repositorys-tags
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Repositories
---

{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
{% tip %}

**Tip**: También puedes ver un lanzamientos utilizando el {% data variables.product.prodname_cli %}. Para obtener más información, consulta la sección "[`gh release view`](https://cli.github.com/manual/gh_release_view)" en la documentación de {% data variables.product.prodname_cli %}.

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
