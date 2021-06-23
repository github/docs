---
title: Agregar una insignia de estado de flujo de trabajo
intro: Puedes mostrar una insignia de estado en tu repositorio para indicar el estado de tus flujos de trabajo.
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

{% data reusables.repositories.actions-workflow-status-badge-into %}

Referencias el flujo de trabajo por el nombre de tu archivo de flujo de trabajo.

```
https://github.com/<OWNER>/<REPOSITORY>/actions/workflows/<WORKFLOW_FILE>/badge.svg
```
### Usar el nombre de archivo del flujo de trabajo

Este ejemplo de Markdown agrega una credencial de estado para un flujo de trabajo con la ruta de archivo `.github/workflows/main.yml`. El `OWNER` del repositorio es la organización `github` y el nombre del `REPOSITORY` es `docs`.

```markdown
![flujo de trabajo de ejemplo](https://github.com/github/docs/actions/workflows/main.yml/badge.svg)
```

### Utilizar el parámetro `branch`

Este ejemplo de Markdown añade un distintivo de estado para una rama con el nombre `feature-1`.

```markdown
![example branch parameter](https://github.com/github/docs/actions/workflows/main.yml/badge.svg?branch=feature-1)
```

### Utilizar el parámetro `event`

Este ejemplo de Markdown agrega un distintivo que muestra el estado de las ejecuciones de flujo de trabajo activadas por el evento `pull_request`.

```markdown
![example event parameter](https://github.com/github/docs/actions/workflows/main.yml/badge.svg?event=pull_request)
```
