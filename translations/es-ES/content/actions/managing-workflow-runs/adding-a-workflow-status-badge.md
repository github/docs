---
title: Agregar una insignia de estado de flujo de trabajo
intro: Puedes mostrar una insignia de estado en tu repositorio para indicar el estado de tus flujos de trabajo.
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

{% data reusables.repositories.actions-workflow-status-badge-into %}

Si tu flujo de trabajo usa la palabra clave `Nombre`, debes hacer referencia al flujo de trabajo por nombre. Si el nombre de tu flujo de trabajo contiene un espacio en blanco, deberás reemplazar el espacio con la cadena que codifica la URL `%20`. Para obtener más información sobre la palabra clave `name` (nombre), consulta "[Sintaxis de flujo de trabajo para {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions#name)".

```
https://github.com/<OWNER>/<REPOSITORY>/workflows/<WORKFLOW_NAME>/badge.svg
```

Como alternativa, si tu flujo de trabajo no tiene un `Nombre`, debes hacer referencia al archivo de flujo de trabajo usando la ruta del archivo en relación con el directorio raíz del repositorio.

{% note %}

**Nota:** Hacer referencia al archivo de flujo de trabajo mediante la ruta del archivo no funciona si el flujo de trabajo tiene un `Nombre`.

{% endnote %}

```
https://github.com/<OWNER>/<REPOSITORY>/workflows/<WORKFLOW_FILE_PATH>/badge.svg
```

### Utilizar un nombre de flujo de trabajo

Este ejemplo de Markdown agrega una credencial de estado para un flujo de trabajo con el nombre "Greet Everyone". El `PROPIETARIO` del repositorio es la organización `actions` y el nombre del `REPOSITORIO` es `hello-world`.

```
![example workflow name](https://github.com/actions/hello-world/workflows/Greet%20Everyone/badge.svg)
```

### Utilizar una ruta de archivo de flujo de trabajo

Este ejemplo de Markdown agrega una credencial de estado para un flujo de trabajo con la ruta de archivo `.github/workflows/main.yml`. El `PROPIETARIO` del repositorio es la organización `actions` y el nombre del `REPOSITORIO` es `hello-world`.

```
![example workflow file path](https://github.com/actions/hello-world/workflows/.github/workflows/main.yml/badge.svg)
```

### Utilizar el parámetro `branch`

Este ejemplo de Markdown añade un distintivo de estado para una rama con el nombre `feature-1`.

```
![example branch parameter](https://github.com/actions/hello-world/workflows/Greet%20Everyone/badge.svg?branch=feature-1)
```

### Utilizar el parámetro `event`

Este ejemplo de Markdown agrega un distintivo que muestra el estado de las ejecuciones de flujo de trabajo activadas por el evento `pull_request`.

```
![example event parameter](https://github.com/actions/hello-world/workflows/Greet%20Everyone/badge.svg?event=pull_request)
```
