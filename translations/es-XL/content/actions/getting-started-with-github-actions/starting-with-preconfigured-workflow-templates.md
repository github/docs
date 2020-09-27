---
title: Comenzar con plantillas de flujo de trabajo preconfiguradas
intro: '{{ site.data.variables.product.prodname_dotcom }} ofrece plantillas de flujo de trabajo preconfiguradas para automatizar tu flujo de trabajo o crear un flujo de trabajo de CI para lenguajes y marcos específicos.'
product: '{{ site.data.reusables.gated-features.actions }}'
redirect_from:
  - /actions/automating-your-workflow-with-github-actions/starting-with-preconfigured-workflow-templates
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{{ site.data.reusables.actions.enterprise-beta }}
{{ site.data.reusables.actions.enterprise-github-hosted-runners }}

### Acerca de plantillas de flujo de trabajo

{{ site.data.variables.product.product_name }} analiza tu código y te muestra las plantillas de CI que mejor se ajustan a tu repositorio. Por ejemplo, si tu repositorio contiene un código Node.js, verás sugerencias para los proyectos de Node.js. Puedes usar plantillas de flujo de trabajo como lugar de inicio para crear tu flujo de trabajo personalizado o usarlos tal como están.

Puedes examinar la lista completa de plantillas de CI en el repositorio [actions/starter-workflows](https://github.com/actions/starter-workflows/tree/master/ci). También puedes encontrar plantillas para automatizar tu flujo de trabajo. También puedes encontrar plantillas para automatizar tu flujo de trabajo.

### Agregar tu primera plantilla de flujo de trabajo

Si aún no has agregado un flujo de trabajo a tu repositorio, verás una lista de plantillas de flujo de trabajo para elegir.

{{ site.data.reusables.repositories.navigate-to-repo }}
{{ site.data.reusables.repositories.actions-tab }}
{{ site.data.reusables.repositories.actions-set-up-workflow-template }}

### Agregar plantillas de flujo de trabajo adicionales

Si ya tienes un flujo de trabajo y deseas agregar un nuevo flujo de trabajo de plantilla, puedes navegar hasta las plantillas de flujo de trabajo.

{{ site.data.reusables.repositories.navigate-to-repo }}
{{ site.data.reusables.repositories.actions-tab }}
{{ site.data.reusables.repositories.actions-new-workflow }}
{{ site.data.reusables.repositories.actions-set-up-workflow-template }}
