---
title: Utilizar los ejecutores hospedados en AE en un flujo de trabajo
intro: 'Puedes utilizar etiquetas para mandar jobs a una agrupación de {% data variables.actions.hosted_runner %}.'
versions:
  github-ae: '*'
---

{% data reusables.actions.ae-beta %}

### Utilizar {% data variables.actions.hosted_runner %} en un flujo de trabajo

Las etiquetas te permiten enviar jobs de flujo de trabajo a cualquier {% data variables.actions.hosted_runner %} que las incluya. Puedes tanto utilizar las etiquetas predeterminadas como crear las tuyas propias.

### Utilizar etiquetas predeterminadas para enrutar jobs

Un {% data variables.actions.hosted_runner %} recibe una etiqueta cuando se agrega a las {% data variables.product.prodname_actions %}. La etiqueta se utiliza para indicar dónde se asignó.

Puedes utilizar el YAML de tu flujo de trabajo para enviar jobs a una agrupación específica de {% data variables.actions.hosted_runner %}. Este ejemplo demuestra cómo configurar un flujo de trabajo para que se ejecute en una etiqueta llamada `AE-runner-for-CI`:

```yaml
runs-on: [AE-runner-for-CI]
```

Para obtener más información, consulta "[Sintaxis de flujo de trabajo para {% data variables.product.prodname_actions %}](/github/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idruns-on)."

### Utilizar etiquetas personalizadas para enrutar jobs

Puedes crear etiquetas personalizadas y asignarlas a tus {% data variables.actions.hosted_runner %} en cualquier momento. Las etiquetas personalizadas te permiten mandar jobs a tipos particulares de ejecutores con base en cómo se etiquetan.

Por ejemplo, si tienes un job que necesita un paquete de software específico, puedes crear una etiqueta personalizada que se llame `octocat` y asignarla a los ejecutores que tienen instalado el paquete. Un {% data variables.actions.hosted_runner %} que empate con todas las etiquetas asignadas serán entonces elegible para ejecutar el job.

Este ejemplo muestra un job que utiliza etiquetas múltiples:

```yaml
runs-on: [AE-runner-for-CI, octocat, linux]
```

Estas etiquetas operan acumulativamente, para que las etiquetas de un {% data variables.actions.hosted_runner %} deban empatar con todas ellas para que pueda ser elegible para procesar el job.
