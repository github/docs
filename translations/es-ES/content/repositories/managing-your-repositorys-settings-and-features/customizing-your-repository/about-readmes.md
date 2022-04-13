---
title: Acerca de los archivos README
intro: 'Puedes agregar un archivo README a tu repositorio para comentarle a otras personas por qué tu proyecto es útil, qué pueden hacer con tu proyecto y cómo lo pueden usar.'
redirect_from:
  - /articles/section-links-on-readmes-and-blob-pages
  - /articles/relative-links-in-readmes
  - /articles/about-readmes
  - /github/creating-cloning-and-archiving-repositories/about-readmes
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-readmes
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
---

## Acerca de los archivos README

Puedes agregar un archivo README a un repositorio para comunicar información importante sobre tu proyecto. El contar con un README, en conjunto con una licencia de repositorio{% ifversion fpt or ghes > 3.2 or ghae-issue-4651 or ghec %}, archivo de citas{% endif %}{% ifversion fpt or ghec %}, lineamientos de contribución y código de conducta{% elsif ghes %} y lineamientos de contribución{% endif %}, comunica las expectativas de tu proyecto y te ayuda a administrar las contribuciones.

Para obtener más información acerca de cómo proporcionar lineamientos para tu proyecto, consulta la sección {% ifversion fpt or ghec %}"[Agregar un código de conducta para tu proyecto](/communities/setting-up-your-project-for-healthy-contributions/adding-a-code-of-conduct-to-your-project)" y {% endif %}"[Configurar tu proyecto para que tenga contribuciones sanas](/communities/setting-up-your-project-for-healthy-contributions)".

Un archivo README suele ser el primer elemento que verá un visitante cuando entre a tu repositorio. Los archivos README habitualmente incluyen información sobre:
- Qué hace el proyecto.
- Por qué el proyecto es útil.
- Cómo pueden comenzar los usuarios con el proyecto.
- Dónde pueden recibir ayuda los usuarios con tu proyecto
- Quién mantiene y contribuye con el proyecto.

If you put your README file in your repository's hidden `.github`, root, or `docs` directory, {% data variables.product.product_name %} will recognize and automatically surface your README to repository visitors.

If a repository contains more than one README file, then the file shown is chosen from locations in the following order: the `.github` directory, then the repository's root directory, and finally the `docs` directory.

![Página principal del repositorio github/scientist y su archivo README](/assets/images/help/repository/repo-with-readme.png)

{% ifversion fpt or ghes or ghec %}

{% data reusables.profile.profile-readme %}

{% endif %}

![El archivo de README en tu nombre de usuario/repositorio de nombre de usuario](/assets/images/help/repository/username-repo-with-readme.png)

{% ifversion fpt or ghae or ghes > 3.1 or ghec %}

## Índice auto-generado de los archivos README

Para la versión interpretada de cualquier archivo de lenguaje de marcado en un repositorio, incluyendo los archivos README, {% data variables.product.product_name %} generará un índice automáticamente con base en los encabezados de sección. Puedes ver el índice de un archivo README si haces clic en el icono de menú {% octicon "list-unordered" aria-label="The unordered list icon" %} en la parte superior izquierda de la página interpretada.

![README con TOC generado automáticamente](/assets/images/help/repository/readme-automatic-toc.png)

{% endif %}

## Enlaces de sección en los archivos README y las páginas blob

{% data reusables.repositories.section-links %}

## Enlaces relativos y rutas con imágenes en los archivos README

{% data reusables.repositories.relative-links %}

## Wikis

Un archivo README debe contener solo la información necesaria para que los desarrolladores comiencen a hacer contribuciones en tu proyecto. La documentación más grande es mejor para los wikis. Para obtener más información, consulta la sección "[Acerca de los wikis](/communities/documenting-your-project-with-wikis/about-wikis)".

## Leer más

- "[Agregar un archivo a un repositorio](/articles/adding-a-file-to-a-repository)"
- 18F's "[Hacer que los archivos README sean de lectura](https://github.com/18F/open-source-guide/blob/18f-pages/pages/making-readmes-readable.md)"
