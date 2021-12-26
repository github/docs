---
title: Utilizar las acciones en GitHub AE
intro: '{% data variables.product.prodname_ghe_managed %} incluye la mayoría de las acciones que crea {% data variables.product.prodname_dotcom %}.'
versions:
  github-ae: '*'
redirect_from:
  - /admin/github-actions/using-actions-in-github-ae
---

{% data reusables.actions.ae-beta %}

Los flujos de trabajo de {% data variables.product.prodname_actions %} pueden utilizar _acciones_, las cuales son tareas individuales que puedes combinar para crear jobs y personalizar tu flujo de trabajo. Puedes crear tus propias acciones, o utilizar y personalizar a quellas que comparte la comunidad de {% data variables.product.prodname_dotcom %}.

### Las acciones oficiales en conjunto con {% data variables.product.prodname_ghe_managed %}

La mayoría de las acciones oficiales de autoría de {% data variables.product.prodname_dotcom %} se agrupan automáticamente con {% data variables.product.prodname_ghe_managed %} y se capturan en un punto en el tiempo desde {% data variables.product.prodname_marketplace %}. Cuando tu instancia de {% data variables.product.prodname_ghe_managed %} se actualiza, las acciones oficiales conjuntas también lo hacen.

Las acciones agrupadas oficiales incluyen a `actions/checkout`, `actions/upload-artifact`, `actions/download-artifact`, `actions/labeler`, y varias acciones de `actions/setup-`, entre otras. Para ver cuáles de las acciones oficiales se incluyen, busca las siguientes organizaciones en tu instancia:
- <code>https://<em>HOSTNAME</em>/actions</code>
- <code>https://<em>HOSTNAME</em>/github</code>

Los archivos de cada acción se mantienen en un repositorio en las organizaciones `actions` y `github`. Cada repositorio de estas acciones incluye las etiquetas, ramas y SHA de confirmación necesarios que tu flujo de trabajo puede utilizar para referenciar a la acción.
