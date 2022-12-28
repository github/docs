---
title: Notas de lanzamiento generadas automáticamente
intro: Puedes generar notas de lanzamiento automáticamente para tus lanzamientos de GitHub
permissions: Repository collaborators and people with write access to a repository can generate and customize automated release notes for a release.
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>3.3'
  ghae: '>= 3.4'
topics:
  - Repositories
shortTitle: Automated release notes
communityRedirect:
  name: Provide GitHub Feedback
  href: 'https://github.com/orgs/community/discussions/categories/general'
ms.openlocfilehash: aee951e6f57492240b5baf8870578409945aefdc
ms.sourcegitcommit: 1a77ceb9e20c002173dda983db9405bcd5be254a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/29/2022
ms.locfileid: '148185198'
---
## Acerca de las notas de lanzamiento generadas automáticamente

Las notas de lanzamiento generadas automáticamente proporcionan una alternativa de automatización para escribir notas de lanzamiento manualmente para tus lanzamientos de {% data variables.product.prodname_dotcom %}. Con las notas de lanzamiento generadas automáticamente, puedes generar rápidamente un resumen del contenido de un lanzamiento. Las notas de la versión generadas automáticamente incluyen una lista de solicitudes de incorporación de cambios combinadas, una lista de colaboradores para la versión y un vínculo a un registro de cambios completo.

También puedes personalizar tus notas de lanzamiento automatizadas, utilizando etiquetas para crear categorías personalizadas para organizar las solicitudes de cambio que quieras incluir y excluyendo ciertas etiquetas y usuarios para que no aparezcan en la salida.

## Crear notas de lanzamiento generadas automáticamente para un lanzamiento nuevo

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.releases %}
3. Haga clic en **Draft a new release** (Borrador de una nueva versión).
   ![Botón de borrador de versiones](/assets/images/help/releases/draft_release_button.png)
4. {% ifversion fpt or ghec %}Haga clic en **Choose a tag** (Elegir una etiqueta) y escriba {% else %}Escriba{% endif %} un número para la versión. Como alternativa, selecciona una etiqueta existente.
  {% ifversion fpt or ghec %} ![Escriba una etiqueta](/assets/images/help/releases/releases-tag-create.png)
5. Si va a crear una etiqueta, haga clic en **Create new tag** (Crear etiqueta).
![Confirme que quiere crear una etiqueta](/assets/images/help/releases/releases-tag-create-confirm.png) {% else %} ![Versiones etiquetadas de la versión](/assets/images/enterprise/releases/releases-tag-version.png) {% endif %}
6. Si creaste una etiqueta nueva, utiliza el menú desplegable para seleccionar la rama que contiene el proyecto que quieres lanzar.
  {% ifversion fpt or ghec %}![Elegir una rama](/assets/images/help/releases/releases-choose-branch.png) {% else %}![Rama con etiqueta de versiones](/assets/images/enterprise/releases/releases-tag-branch.png) {% endif %} {%- data reusables.releases.previous-release-tag %}
7. En la parte superior derecha del cuadro de texto de descripción, haz clic en {% ifversion previous-release-tag %}**Generar notas de la versión**{% else %}**Generar automáticamente notas de la versión**{% endif %}. {% ifversion previous-release-tag %} ![Generar notas de la versión](/assets/images/help/releases/generate-release-notes.png){% else %} ![Generar automáticamente notas de la versión](/assets/images/enterprise/3.5/releases/auto-generate-release-notes.png){% endif %}
8. Verifica las notas generadas para garantizar que incluyan toda (y únicamente) la información que quieras incluir.
9. Opcionalmente, para incluir los archivos binarios tales como programas compilados en tu lanzamiento, arrastra y suelta o selecciona manualmente los archivos en la caja de binarios.
   ![Inclusión de un DMG con la versión](/assets/images/help/releases/releases_adding_binary.gif)
10. Para notificar a los usuarios que la versión no está lista para producción y puede ser inestable, seleccione **Es una versión preliminar**.
   ![Casilla para marcar una versión como versión preliminar](/assets/images/help/releases/prerelease_checkbox.png) {%- ifversion fpt or ghec %}
11. Opcionalmente, seleccione **Create a discussion for this release** (Crear un debate para esta versión), después, seleccione el menú desplegable **Category** (Categoría) y haga clic en una categoría para el debate de la versión.
  ![Casilla para crear un debate de versión y menú desplegable para elegir una categoría](/assets/images/help/releases/create-release-discussion.png) {%- endif %}
12. Si está listo para publicar la versión, haga clic en **Publish release** (Publicar versión). Para trabajar después en la versión, haga clic en **Save draft** (Guardar borrador).
   ![Botones para publicar la versión y guardar un borrador](/assets/images/help/releases/release_buttons.png)


## Configurar las notas de lanzamiento generadas automáticamente

{% data reusables.repositories.navigate-to-repo %} {% data reusables.files.add-file %}
3. En el campo nombre de archivo, escriba `.github/release.yml` para crear el archivo `release.yml` en el directorio `.github`.
  ![Crear un nuevo archivo](/assets/images/help/releases/release-yml.png)
4. En el archivo, el utilizar las opciones de configuración siguientes, especificarán en YAML las etiquetas de solicitudes de cambio y los autores que quieras excluir de este lanzamiento. También puedes crear categorías nuevas y listar las etiquetas de la solicitud de cambios que se deben incluir en cada una de ellas.

### Opciones de configuración

| Parámetro | Descripción |
| :- | :- |
| `changelog.exclude.labels` | Una lista de etiquetas que excluyen una solicitud de cambios para que no aparezca en las notas de lanzamiento. |
| `changelog.exclude.authors` | Una lista de manejos de inicio de sesión de usuarios o bots cuyas solicitudes de cambio deben excluirse de las notas de lanzamiento. |
| `changelog.categories[*].title` | **Obligatorio.** El título de una categoría de cambios en las notas de la versión. |
| `changelog.categories[*].labels`| **Obligatorio.** Las etiquetas que califican una solicitud de incorporación de cambios para esta categoría. Use `*` como comodín para las solicitudes de incorporación de cambios que no encajen en ninguna de las categorías anteriores. |
| `changelog.categories[*].exclude.labels` | Una lista de etiquetas que excluye una solicitud de cambio para que no aparezca en esta categoría. |
| `changelog.categories[*].exclude.authors` | Una lista de manejos de inicio de sesión de usuarios o bots cuyas solicitudes de cambio deben excluirse de esta categoría. |

### Configuraciones de ejemplo

Configuración de un repositorio que etiqueta las versiones de semver

{% raw %}
```yaml{:copy}
# .github/release.yml

changelog:
  exclude:
    labels:
      - ignore-for-release
    authors:
      - octocat
  categories:
    - title: Breaking Changes 🛠
      labels:
        - Semver-Major
        - breaking-change
    - title: Exciting New Features 🎉
      labels:
        - Semver-Minor
        - enhancement
    - title: Other Changes
      labels:
        - "*"
```
{% endraw %}

Configuración de un repositorio que no etiqueta las solicitudes de incorporación de cambios, pero donde queremos separar solicitudes de incorporación de cambios automatizadas de {% data variables.product.prodname_dependabot %} en las notas la versión (`labels: '*'` es necesario para mostrar una categoría catchall)

{% raw %}
```yaml{:copy}
# .github/release.yml

changelog:
  categories:
    - title: 🏕 Features
      labels:
        - '*'
      exclude:
        labels:
          - dependencies
    - title: 👒 Dependencies
      labels:
        - dependencies
```
{% endraw %}

## Información adicional

- "[Administración de etiquetas](/issues/using-labels-and-milestones-to-track-work/managing-labels)" 
