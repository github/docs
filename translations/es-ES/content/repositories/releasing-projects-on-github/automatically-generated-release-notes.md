---
title: Notas de lanzamiento generadas automáticamente
intro: Puedes generar notas de lanzamiento automáticamente para tus lanzamientos de GitHub
permissions: Repository collaborators and people with write access to a repository can generate and customize automated release notes for a release.
versions:
  fpt: '*'
topics:
  - Repositories
shortTitle: Notas de lanzamiento automatizadas
---

{% note %}

**Nota:**{% data reusables.repositories.auto-gen-release-public-beta %}

{% endnote %}

## Acerca de las notas de lanzamiento generadas automáticamente

Las notas de lanzamiento generadas automáticamente proporcionan una alternativa de automatización para escribir notas de lanzamiento manualmente para tus lanzamientos de {% data variables.product.prodname_dotcom %}. Con las notas de lanzamiento generadas automáticamente, puedes generar rápidamente un resumen del contenido de un lanzamiento. También puedes personalizar tus notas de lanzamiento automatizadas, utilizando etiquetas para crear categorías personalizadas para organizar las solicitudes de cambio que quieras incluir y excluyendo ciertas etiquetas y usuarios para que no aparezcan en la salida.

## Crear notas de lanzamiento generadas automáticamente para un lanzamiento nuevo

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.releases %}
3. Haz clic en **Borrador de un nuevo lanzamiento**. ![Botón Borrador de lanzamientos](/assets/images/help/releases/draft_release_button.png)
4. {% ifversion fpt %}Haz clic en **Elige una etiqueta** y teclea {% else %}Teclea{% endif %} un número de versión para tu lanzamiento. Como alternativa, selecciona una etiqueta existente.
  {% ifversion fpt %}
  ![Ingresa una etiqueta](/assets/images/help/releases/releases-tag-create.png)
5. Si estás creando una etiqueta nueva, haz clic en **Crear etiqueta nueva**. ![Confirma si quieres crear una etiqueta nueva](/assets/images/help/releases/releases-tag-create-confirm.png)
  {% else %}
  ![Versión de lanzamientos con etiquetas](/assets/images/enterprise/releases/releases-tag-version.png)
{% endif %}
6. Si creaste una etiqueta nueva, utiliza el menú desplegable para seleccionar la rama que contiene el proyecto que quieres lanzar.
  {% ifversion fpt %}![Elige una rama](/assets/images/help/releases/releases-choose-branch.png)
  {% else %}![Rama de lanzamientos con etiquetas](/assets/images/enterprise/releases/releases-tag-branch.png)
  {% endif %}
7. En la caja de texto de descripción que se encuentra en la esquina superior derecha, haz clic en **Autogenerar notas de lanzamiento**. ![Autogenerar notas de lanzamiento](/assets/images/help/releases/auto-generate-release-notes.png)
8. Verifica las notas generadas para garantizar que incluyan toda (y únicamente) la información que quieras incluir.
9. Opcionalmente, para incluir los archivos binarios tales como programas compilados en tu lanzamiento, arrastra y suelta o selecciona manualmente los archivos en la caja de binarios. ![Proporcionar un DMG con el lanzamiento](/assets/images/help/releases/releases_adding_binary.gif)
10. Para notificar a los usuarios que el lanzamiento no está listo para producción y puede ser inestable, selecciona **Esto es un pre-lanzamiento**. ![Casilla de verificación para marcar un lanzamiento como prelanzamiento](/assets/images/help/releases/prerelease_checkbox.png)
{%- ifversion fpt %}
11. Opcionalmente, selecciona **Crear un debate para este lanzamiento** y luego, selecciona el menú desplegable de **Categoría** y haz clic en aquella que describa el debate de dicho lanzamiento. ![Casilla de verificación para crear un debate de lanzamiento y menú desplegable para elegir una categoría](/assets/images/help/releases/create-release-discussion.png)
{%- endif %}
12. Si estás listo para publicitar tu lanzamiento, haz clic en **Publicar lanzamiento**. Para seguir trabajando luego en el lanzamiento, haz clic en **Guardar borrador**. ![Botones Publicar lanzamiento y Borrador de lanzamiento](/assets/images/help/releases/release_buttons.png)


## Crear una plantilla para las notas de lanzamiento generadas automáticamente

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.files.add-file %}
3. En el campo de nombre de archivo, teclea `.github/release.yml` para crear el archivo `release.yml` en el directorio `.github`. ![Crear archivo nuevo](/assets/images/help/releases/release-yml.png)
4. En el archivo, especifica las etiquetas y los autores de la solicitud de cambios a los cuales quieras excluir de este lanzamiento. También puedes crear categorías nuevas y listar las etiquetas de la solicitud de cambios que se deben incluir en cada una de ellas. Para obtener más información, consulta la sección "[Administrar etiquetas](/issues/using-labels-and-milestones-to-track-work/managing-labels)".

## Ejemplo de configuración

{% raw %}
**release.yml**
```yaml{:copy}
# release.yml

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

## Sintaxis de las plantillas de lanzamiento

| Parámetro    | Descripción                                                                                                                                                                                                     | Requerido                                                                                         | Valor                                                                                           |
|:------------ |:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |:------------------------------------------------------------------------------------------------- |:----------------------------------------------------------------------------------------------- |
| `changelog`  | Define el contenido dentro de esta como la plantilla personalizada para tus notas de lanzamiento.                                                                                                               | Requerido.                                                                                        | No se aceptó ningún valor.                                                                      |
| `exclude`    | Crea una categoría de solicitudes de cambio a excluirse del lanzamiento. Puede configurarse en el nivel superior de la bitácora de cambios a aplicar a todas las categorías o a la que se aplicó por categoría. | Opcional                                                                                          | No se aceptó ningún valor.                                                                      |
| `authors`    | Especifica los autores que se deben excluir del lanzamiento.                                                                                                                                                    | Opcional para la categoría `exclude`.                                                             | Acepta los nombres de usuario y bots como valores.                                              |
| `categories` | Define el contenido anidado como categorías personalizadas para que se incluya en la plantilla.                                                                                                                 | Opcional                                                                                          | No se aceptó ningún valor.                                                                      |
| `title`      | Crea una categoría ndividual.                                                                                                                                                                                   | Se requiere si existe el parámetro `categories`.                                                  | Toma el nombre de la categoría como su valor.                                                   |
| `labels`     | Especifica las etiquetas que utilizará la categoría envolvente.                                                                                                                                                 | Se requiere si existe el parámetro `categories`, el cual es opcional para el parámetro `exclude`. | Acepta cualquier etiqueta, ya sea que existan actualmente o que estén planeadas para el futuro. |
| `"*"`        | Catchall para cualquier solicitud de cambios que no se incluya dentro de alguna de las categorías *anteriores*. Si se utiliza, se debe agregar al final del archivo.                                            | Opcional                                                                                          | No se aceptó ningún valor.                                                                      |
