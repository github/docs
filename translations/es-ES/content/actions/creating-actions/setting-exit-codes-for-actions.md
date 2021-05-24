---
title: Configurar códigos de salida para acciones
shortTitle: Configurar códigos de salida
intro: 'Puedes usar códigos de salida para establecer el estado de una acción. {% data variables.product.prodname_dotcom %} muestra los estados para indicar las acciones que se pasan o fallan.'
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /actions/building-actions/setting-exit-codes-for-actions
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
type: how_to
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

### Acerca de los códigos de salida

{% data variables.product.prodname_dotcom %} utiliza el código de salida para configurar el estado de verificación de ejecución de las acciones, el cual puede ser `success` o `failure`.

| Estado de salida                                              | Estado de ejecución de verificación | Descripción                                                                                                                                                                                                                                                      |
| ------------------------------------------------------------- | ----------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `0`                                                           | `success`                           | La acción se completó con éxito y pueden comenzar otras tareas que dependen de ella.                                                                                                                                                                             |
| Valor diferente a zero (cualquier número entero que no sea 0) | `failure`                           | Cualquier otro código de salida indica que la acción fracasó. Cuando una acción fracasa, todas las acciones simultáneas se cancelan y las acciones futuras se omiten. La ejecución de verificación y el conjunto de verificaciones obtienen un estado `failure`. |

### Establecer un código de salida fallida en una acción JavaScript

Si vas a crear una acción JavaScript, puedes usar el paquete del kit de herramientas [`@actions/core`](https://github.com/actions/toolkit/tree/main/packages/core) para registrar un mensaje y establecer un código de salida fallida. Por ejemplo:

```javascript
try {
  // something
} catch (error) {
  core.setFailed(error.message);
}
```

Para obtener más información, consulta "[Crear una acción JavaScript](/articles/creating-a-javascript-action)".

### Establecer un código de salida fallida en una acción de contenedor Docker

Si vas a crear una acción de contenedor Docker, puedes establecer un código de salida fallida en tu script `entrypoint.sh`. Por ejemplo:

```
if <condition> ; then
  echo "Game over!"
  exit 1
fi
```

Para obtener más información, consulta "[Crear una acción de contenedor Docker](/articles/creating-a-docker-container-action)".
