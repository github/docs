---
title: Crear una página 404 personalizada para tu sitio de Páginas de GitHub
intro: Puedes mostrar una página personalizada de error 404 cuando se intente acceder a páginas que no existen en tu sitio.
redirect_from:
  - /articles/custom-404-pages/
  - /articles/creating-a-custom-404-page-for-your-github-pages-site
  - /github/working-with-github-pages/creating-a-custom-404-page-for-your-github-pages-site
product: '{% data reusables.gated-features.pages %}'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - páginas
---

{% data reusables.pages.navigate-site-repo %}
{% data reusables.pages.navigate-publishing-source %}
{% data reusables.files.add-file %}
3. En el campo para el nombre de archivo, escribe `404.html` o `404.md`. ![Campo File name (Nombre de archivo)](/assets/images/help/pages/404-file-name.png)
4. Si denominaste tu archivo `404.md`, agrega el siguiente texto preliminar de YAML al comienzo del archivo:
  ```yaml
  ---
  permalink: /404.html
  ---
  ```
5. Debajo del texto preliminar de YAML, si aparece, agrega el contenido que quieras mostrar en tu página 404.
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose-commit-email %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_new_file %}

### Leer más

- [Texto preliminar](http://jekyllrb.com/docs/frontmatter) en la documentación de Jekyll
