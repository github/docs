---
title: Notas de lanzamiento generadas automáticamente
intro: Puedes generar notas de lanzamiento automáticamente para tus lanzamientos de GitHub
permissions: Repository collaborators and people with write access to a repository can generate and customize automated release notes for a release.
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>3.3'
  ghae: issue-4974
topics:
  - Repositories
shortTitle: Notas de lanzamiento automatizadas
communityRedirect:
  name: Provide GitHub Feedback
  href: 'https://github.com/github/feedback/discussions/categories/general-feedback'
---

## Acerca de las notas de lanzamiento generadas automáticamente

Las notas de lanzamiento generadas automáticamente proporcionan una alternativa de automatización para escribir notas de lanzamiento manualmente para tus lanzamientos de {% data variables.product.prodname_dotcom %}. Con las notas de lanzamiento generadas automáticamente, puedes generar rápidamente un resumen del contenido de un lanzamiento. Las notas de lanzamiento generadas automáticamente incluyen una lista de solicitudes de cambio fusionadas, una lista de contribuyentes al lanzamiento y un enlace a una bitácora de cambios completa.

También puedes personalizar tus notas de lanzamiento automatizadas, utilizando etiquetas para crear categorías personalizadas para organizar las solicitudes de cambio que quieras incluir y excluyendo ciertas etiquetas y usuarios para que no aparezcan en la salida.

## Crear notas de lanzamiento generadas automáticamente para un lanzamiento nuevo

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.releases %}
3. Haz clic en **Borrador de un nuevo lanzamiento**. ![Botón Borrador de lanzamientos](/assets/images/help/releases/draft_release_button.png)
4. {% ifversion fpt or ghec %}Haz clic en **Elige una etiqueta** y teclea {% else %}Teclea{% endif %} un número de versión para tu lanzamiento. Como alternativa, selecciona una etiqueta existente.
  {% ifversion fpt or ghec %}
  ![Ingresa una etiqueta](/assets/images/help/releases/releases-tag-create.png)
5. Si estás creando una etiqueta nueva, haz clic en **Crear etiqueta nueva**. ![Confirma si quieres crear una etiqueta nueva](/assets/images/help/releases/releases-tag-create-confirm.png)
  {% else %}
  ![Versión de lanzamientos con etiquetas](/assets/images/enterprise/releases/releases-tag-version.png)
{% endif %}
6. Si creaste una etiqueta nueva, utiliza el menú desplegable para seleccionar la rama que contiene el proyecto que quieres lanzar.
  {% ifversion fpt or ghec %}![Elige una rama](/assets/images/help/releases/releases-choose-branch.png)
  {% else %}![Rama de lanzamientos con etiquetas](/assets/images/enterprise/releases/releases-tag-branch.png)
  {% endif %}
{%- data reusables.releases.previous-release-tag %}
7. En la esquina derecha de la caja de texto de descripción, haz clic en {% ifversion previous-release-tag %}**Generar notas de lanzamiento**{% else %}**Auto generar notas de lanzamiento**{% endif %}.{% ifversion previous-release-tag %}![Generate release notes](/assets/images/help/releases/generate-release-notes.png){% else %}![Auto-generate release notes](/assets/images/enterprise/3.5/releases/auto-generate-release-notes.png){% endif %}
8. Verifica las notas generadas para garantizar que incluyan toda (y únicamente) la información que quieras incluir.
9. Opcionalmente, para incluir los archivos binarios tales como programas compilados en tu lanzamiento, arrastra y suelta o selecciona manualmente los archivos en la caja de binarios. ![Proporcionar un DMG con el lanzamiento](/assets/images/help/releases/releases_adding_binary.gif)
10. Para notificar a los usuarios que el lanzamiento no está listo para producción y puede ser inestable, selecciona **Esto es un pre-lanzamiento**. ![Casilla de verificación para marcar un lanzamiento como prelanzamiento](/assets/images/help/releases/prerelease_checkbox.png)
{%- ifversion fpt or ghec %}
11. Opcionalmente, selecciona **Crear un debate para este lanzamiento** y luego, selecciona el menú desplegable de **Categoría** y haz clic en aquella que describa el debate de dicho lanzamiento. ![Casilla de verificación para crear un debate de lanzamiento y menú desplegable para elegir una categoría](/assets/images/help/releases/create-release-discussion.png)
{%- endif %}
12. Si estás listo para publicitar tu lanzamiento, haz clic en **Publicar lanzamiento**. Para seguir trabajando luego en el lanzamiento, haz clic en **Guardar borrador**. ![Botones Publicar lanzamiento y Borrador de lanzamiento](/assets/images/help/releases/release_buttons.png)


## Configurar las notas de lanzamiento generadas automáticamente

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.files.add-file %}
3. En el campo de nombre de archivo, teclea `.github/release.yml` para crear el archivo `release.yml` en el directorio `.github`. ![Crear archivo nuevo](/assets/images/help/releases/release-yml.png)
4. En el archivo, el utilizar las opciones de configuración siguientes, especificarán en YAML las etiquetas de solicitudes de cambio y los autores que quieras excluir de este lanzamiento. También puedes crear categorías nuevas y listar las etiquetas de la solicitud de cambios que se deben incluir en cada una de ellas.

### Opciones de configuración

| Parámetro                                 | Descripción                                                                                                                                                                                                  |
|:----------------------------------------- |:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `changelog.exclude.labels`                | Una lista de etiquetas que excluyen una solicitud de cambios para que no aparezca en las notas de lanzamiento.                                                                                               |
| `changelog.exclude.authors`               | Una lista de manejos de inicio de sesión de usuarios o bots cuyas solicitudes de cambio deben excluirse de las notas de lanzamiento.                                                                         |
| `changelog.categories[*].title`           | **Requerido.** El título de una categoría de cambios en las notas de lanzamiento.                                                                                                                            |
| `changelog.categories[*].labels`          | **Requerido.** Las etiquetas que califican a una solicitud de cambios para esta categoría. Utiliza `*` como un comodín para solicitudes de cambio que no empataron con ninguna de las categorías anteriores. |
| `changelog.categories[*].exclude.labels`  | Una lista de etiquetas que excluye una solicitud de cambio para que no aparezca en esta categoría.                                                                                                           |
| `changelog.categories[*].exclude.authors` | Una lista de manejos de inicio de sesión de usuarios o bots cuyas solicitudes de cambio deben excluirse de esta categoría.                                                                                   |

### Ejemplo de configuración

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

## Leer más

- "[Administrar etiquetas](/issues/using-labels-and-milestones-to-track-work/managing-labels)" 
