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
ms.openlocfilehash: 146f1a33eb4de224625b9603b27d2f383e55c54d
ms.sourcegitcommit: c2aa10a61db44ee111c09565b6114dd5c97b6e2e
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/14/2022
ms.locfileid: '148163340'
---
## Acerca de los archivos README

{% data reusables.repositories.about-READMEs %}

Para obtener más información sobre cómo proporcionar instrucciones para el proyecto, consulta {% ifversion fpt or ghec %}"[Adición de un código de conducta al proyecto](/communities/setting-up-your-project-for-healthy-contributions/adding-a-code-of-conduct-to-your-project)" y {% endif %}"[Configuración del proyecto para contribuciones correctas](/communities/setting-up-your-project-for-healthy-contributions)".

Un archivo README suele ser el primer elemento que verá un visitante cuando entre a tu repositorio. Los archivos README habitualmente incluyen información sobre:
- Qué hace el proyecto.
- Por qué el proyecto es útil.
- Cómo pueden comenzar los usuarios con el proyecto.
- Dónde pueden recibir ayuda los usuarios con tu proyecto
- Quién mantiene y contribuye con el proyecto.

Si colocas tu archivo README en el directorio `.github`, raíz o `docs` oculto de tu repositorio, {% data variables.product.product_name %} lo reconocerá y automáticamente expondrá tu archivo README a los visitantes del repositorio.

Si un repositorio contiene más de un archivo README, el archivo que se muestra se elige de las ubicaciones en el siguiente orden: el directorio `.github`, luego el directorio raíz del repositorio y finalmente el directorio `docs`.

![Página principal del repositorio github/scientist y su archivo README](/assets/images/help/repository/repo-with-readme.png)

{% ifversion fpt or ghes or ghec %}

{% data reusables.profile.profile-readme %}

{% endif %}

![El archivo de README en tu nombre de usuario/repositorio de nombre de usuario](/assets/images/help/repository/username-repo-with-readme.png)

## Índice auto-generado de los archivos README

Para la versión interpretada de cualquier archivo de lenguaje de marcado en un repositorio, incluyendo los archivos README, {% data variables.product.product_name %} generará un índice automáticamente con base en los encabezados de sección. Puedes ver el índice de un archivo README si haces clic en el icono de menú {% octicon "list-unordered" aria-label="The unordered list icon" %} en la parte superior izquierda de la página interpretada.

![README con TOC generado automáticamente](/assets/images/help/repository/readme-automatic-toc.png)

## Enlaces de sección en los archivos README y las páginas blob

{% data reusables.repositories.section-links %}

## Enlaces relativos y rutas con imágenes en los archivos README

{% data reusables.repositories.relative-links %}

## Wikis

Un archivo README debe contener solo la información necesaria para que los desarrolladores comiencen a hacer contribuciones en tu proyecto. La documentación más grande es mejor para los wikis. Para obtener más información, consulta "[Acerca de las wikis](/communities/documenting-your-project-with-wikis/about-wikis)".

## Información adicional

- "[Agregar un archivo a un repositorio](/articles/adding-a-file-to-a-repository)"
- 18F's "[Convertir en legible archivos READMEs](https://github.com/18F/open-source-guide/blob/18f-pages/pages/making-readmes-readable.md)" {%- ifversion fpt or ghec %} 
- "[Adición de un distintivo "Abrir en GitHub Codespaces"](/codespaces/setting-up-your-project-for-codespaces/adding-a-codespaces-badge)" {%- endif %}   
