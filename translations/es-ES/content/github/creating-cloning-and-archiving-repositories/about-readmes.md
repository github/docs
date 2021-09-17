---
title: Acerca de los archivos README
intro: 'Puedes agregar un archivo README a tu repositorio para comentarle a otras personas por qué tu proyecto es útil, qué pueden hacer con tu proyecto y cómo lo pueden usar.'
redirect_from:
  - /articles/section-links-on-readmes-and-blob-pages/
  - /articles/relative-links-in-readmes/
  - /articles/about-readmes
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Repositories
---

### Acerca de los archivos README

Puedes agregar un archivo README a un repositorio para comunicar información importante sobre tu proyecto. Un README, junto con una licencia de repositorio{% if currentVersion == "free-pro-team@latest" %}, lineamientos de contribución y un código de conducta{% elsif enterpriseServerVersions contains currentVersion %} y lineamientos de contribución{% endif %}, comunica las expectativas de tu proyecto y te ayuda a administrar las contribuciones.

Para obtener más información acerca de cómo proporcionar lineamientos para tu proyecto, consulta la sección {% if currentVersion == "free-pro-team@latest" %}"[Agregar un código de conducta para tu proyecto](/communities/setting-up-your-project-for-healthy-contributions/adding-a-code-of-conduct-to-your-project)" y {% endif %}"[Configurar tu proyecto para que tenga contribuciones sanas](/communities/setting-up-your-project-for-healthy-contributions)".

Un archivo README suele ser el primer elemento que verá un visitante cuando entre a tu repositorio. Los archivos README habitualmente incluyen información sobre:
- Qué hace el proyecto.
- Por qué el proyecto es útil.
- Cómo pueden comenzar los usuarios con el proyecto.
- Dónde pueden recibir ayuda los usuarios con tu proyecto
- Quién mantiene y contribuye con el proyecto.

Si colocas tu archivo README en la raíz de tu repositorio, `docs`, o en el directorio oculto `.github`, {% data variables.product.product_name %} lo reconocerá y automáticamente expondrá tu archivo README a los visitantes del repositorio.

![Página principal del repositorio github/scientist y su archivo README](/assets/images/help/repository/repo-with-readme.png)

{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.21" %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21"%}

{% data reusables.profile.profile-readme %}

{% endif %}

![El archivo de README en tu nombre de usuario/repositorio de nombre de usuario](/assets/images/help/repository/username-repo-with-readme.png)

{% endif %}

### Auto-generated table of contents for README files

For the rendered view of any Markdown file in a repository, including README files, {% data variables.product.product_name %} will automatically generate a table of contents based on section headings. You can view the table of contents for a README file by clicking the {% octicon "list-unordered" aria-label="The unordered list icon" %}  menu icon at the top left of the rendered page.

![README with automatically generated TOC](/assets/images/help/repository/readme-automatic-toc.png)

The auto-generated table of contents is enabled by default for all Markdown files in a repository, but you can disable this feature for your repository.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
1. Under "Features", deselect **Table of contents**. ![Automatic TOC setting for repositories](/assets/images/help/repository/readme-automatic-toc-setting.png)

### Enlaces de sección en los archivos README y las páginas blob

{% data reusables.repositories.section-links %}

### Enlaces relativos y rutas con imágenes en los archivos README

{% data reusables.repositories.relative-links %}

### Leer más

- "[Agregar un archivo a un repositorio](/articles/adding-a-file-to-a-repository)"
- 18F's "[Hacer que los archivos README sean de lectura](https://github.com/18F/open-source-guide/blob/18f-pages/pages/making-readmes-readable.md)"
