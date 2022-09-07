---
title: Agregar una insignia de estado de flujo de trabajo
intro: Puedes mostrar una insignia de estado en tu repositorio para indicar el estado de tus flujos de trabajo.
redirect_from:
  - /actions/managing-workflow-runs/adding-a-workflow-status-badge
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Agregar una insignia de estado
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

{% note %}

**Nota**: No se puede acceder a las insignias de flujo de trabajo desde el exterior hacia un repositorio privado, así que no tendrás que embeberlas ni enlazarlas desde un sitio externo.

{% endnote %}

{% data reusables.repositories.actions-workflow-status-badge-intro %}


Para agregar una insignia de estado de flujo de trabajo a tu archivo `README.md`, primero encuentra la URL de la insignia de estado que te gustaría mostrar. Luego, puedes utilizar lenguaje de marcado para mostrar la insignia como imagen en tu archivo `README.md`. Para obtener más información sobre el marcado de imagen en el lenguaje de marcado, consulta la sección "[Escritura básica y sintaxis de formato](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#images)".

## Usar el nombre de archivo del flujo de trabajo

Puedes compilar la URL para una insignia de estado de flujo de trabajo utilizando el nombre del archivo de flujo de trabajo:

```
{% ifversion fpt or ghec %}https://github.com{% else %}<HOSTNAME>{% endif %}/<OWNER>/<REPOSITORY>/actions/workflows/<WORKFLOW_FILE>/badge.svg
```

Para mostrar la insignia de estado de flujo de trabajo en tu archivo `README.md`, utiliza el lenguaje de marcado para embeber imágenes. Para obtener más información sobre el marcado de imagen en el lenguaje de marcado, consulta la sección "[Escritura básica y sintaxis de formato](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#images)".

Por ejemplo, agrega el siguiente lenguaje de marcado a tu archivo `README.md` para agregar una insignia de estado para un flujo de trabajo con la ruta de archivo `.github/workflows/main.yml`. El `OWNER` del repositorio es la organización `github` y el nombre del `REPOSITORY` es `docs`.

```markdown
![flujo de trabajo de ejemplo](https://github.com/github/docs/actions/workflows/main.yml/badge.svg)
```

## Utilizar el parámetro `branch`

Para mostrar el estado de una ejecución de flujo de trabajo para una rama específica, agrega `?branch=<BRANCH_NAME>` al final de la URL de la insignia de estado.

Por ejemplo, agrega el siguiente lenguaje de marcado a tu archivo `README.md` para mostrar una insignia de estado para una rama con el nombre `feature-1`.

```markdown
![example branch parameter](https://github.com/github/docs/actions/workflows/main.yml/badge.svg?branch=feature-1)
```

## Utilizar el parámetro `event`

Para mostrar el estado de las ejecuciones de flujo de trabajo que se activan con el evento `push`, agrega `?event=push` al final de la URL de la insignia de estado.

Por ejemplo, agrega el siguiente lenguaje de marcado a tu archivo `README.md` para mostrar la insignia con el estado de las ejecuciones de flujo de trabajo que activa el evento `push`, lo cual te mostrará el estado de la compilación para el estado actual de dicha rama.

```markdown
![example event parameter](https://github.com/github/docs/actions/workflows/main.yml/badge.svg?event=push)
```
