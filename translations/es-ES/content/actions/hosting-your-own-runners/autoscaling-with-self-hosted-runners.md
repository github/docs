---
title: Autoescalar con ejecutores auto-hospedados
shortTitle: Autoscale self-hosted runners
intro: Puedes escalar tus ejecutores auto-hospedados automáticamente en respuesta a eventos de webhook.
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: overview
ms.openlocfilehash: 2fe0c197ac122ea9cd976c2718a492bd80c073fe
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107561'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Acerca del autoescalamiento

Puedes incrementar o decrementar la cantidad de ejecutores auto-hospedados en tu ambiente automáticamente como respuesta a los eventos de webhook que recibes con una etiqueta particular. Por ejemplo, puede crear una automatización que agregue un nuevo ejecutor autohospedado cada vez que reciba un evento de webhook de [`workflow_job`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#workflow_job) con la actividad [`queued`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#workflow_job), que le notifica que hay un nuevo trabajo listo para su procesamiento. La carga útil de un webhook incluye datos de etiqueta, así que puedes identificar el tipo de ejecutor que está solicitando el job. Una vez finalizado el trabajo, puede crear una automatización que quite el ejecutor en respuesta a la actividad `workflow_job`[`completed`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#workflow_job). 

## Soluciones de autoescalamiento recomendadas

{% data variables.product.prodname_dotcom %} recomienda tener a los socios de cerca con dos proyectos de código abierto que puedas utilizar para autoescalar tus ejectures. Una o ambas soluciones podrían ser adecuadas de acuerdo con tus necesidades. 

Los siguientes repositorios tienen instrucciones detalladas para configurar estos autoescaladores: 

- [actions-runner-controller/actions-runner-controller](https://github.com/actions-runner-controller/actions-runner-controller): un controlador de Kubernetes para ejecutores autohospedados de {% data variables.product.prodname_actions %}.
- [philips-labs/terraform-aws-github-runner](https://github.com/philips-labs/terraform-aws-github-runner): un módulo de Terraform para ejecutores escalables de {% data variables.product.prodname_actions %} en Amazon Web Services.

Cada solución tiene especificaciones particulares que podría ser importante considerar:

| **Características** | **actions-runner-controller** | **terraform-aws-github-runner** |
| :--- | :--- | :--- |
| Tiempo de ejecución | Kubernetes | MV Linux y Windows |
| Nubes compatibles | Azure, Amazon Web Services, Google Cloud Platform, en las instalaciones | Amazon Web Services |
| Cuando los ejecutores pueden escalarse | Niveles de empresa, organización y repositorio. Por etiqueta y grupo de ejecutor. | Niveles de organización y repositorio. Por etiqueta y grupo de ejecutor. |
| Cómo pueden escalarse los ejecutores | Eventos de webhook, Programados, Basados en extracciones | Eventos de Webhook, Programados (únicamente ejecutores a nivel de organización) |

## Utilizar ejecutores efímeros para autoescalar

{% data variables.product.prodname_dotcom %} recomienda implementar el autoescalamiento con ejecutores auto-hospedados efímeros; no se recomienda autoescalar con ejecutores auto-hospedados persistentes. En casos específicos, {% data variables.product.prodname_dotcom %} no puede garantizar que los jobs no se asignen a los ejecutores persistentes mientras están cerrados. Con los ejecutores efímeros, esto puede garantizarse, ya que {% data variables.product.prodname_dotcom %} solo asigna un job a un ejecutor.

Este acercamiento te permite administrar tus ejecutores como sistemas efímeros, ya que puedes utilizar la automatización para proporcionar un ambiente limpio para cada job. Esto ayuda a limitar la exposición de cualquier recurso sensible de los jobs anteriores y también ayuda a mitigar el riesgo de un ejecutor puesto en riesgo que esté recibiendo jobs nuevos.  

Para agregar un ejecutor efímero a su entorno, incluya el parámetro `--ephemeral` al registrar el ejecutor mediante `config.sh`. Por ejemplo:

```shell
./config.sh --url https://github.com/octo-org --token example-token --ephemeral
```

El servicio de {% data variables.product.prodname_actions %} entonces quitará el registro del ejecutor automáticamente después de que haya procesado un job. Entonces podrás crear tu propia automatización que elimine el ejecutor después de que se desregistró.

{% note %}

**Nota:** Si un trabajo se etiqueta para algún tipo de ejecutor, pero no hay ninguno disponible que coincida con esas características, el trabajo no fallará inmediatamente en el momento de ponerse en cola. En vez de esto, el job permanecerá en cola hasta que venza el tiempo límite de 24 horas.

{% endnote %}

{% ifversion fpt or ghec or ghes > 3.4 or ghae %}

## Controlar la actualizaciones de software ejecutor en ejecutores auto-hospedados

Predeterminadamente, los ejecutores auto-hospedados realizan una actualización de software cuando una versión nueva del software ejecutor esté disponible.  Si usas ejecutores efímeros en contenedores, esto podría ocasionar que existieran actualizaciones de software repetidas cuando se lance una versión nueva del ejecutor.  El apagar las actualizaciones automáticas te permite actualizar la versión del ejecutor directamente en la imagen del contenedor en tu propia programación de tiempos.

Para desactivar las actualizaciones automáticas de software e instalar las actualizaciones de software usted mismo, especifique la marca `--disableupdate` al registrar el ejecutor mediante `config.sh`. Por ejemplo:

```shell
./config.sh --url https://github.com/YOUR-ORGANIZATION --token EXAMPLE-TOKEN --disableupdate
```

Si inhabilitas las actualizaciones automáticas, aún debes actualizar tu versión de ejecutor con frecuencia.  La nueva funcionalidad de {% data variables.product.prodname_actions %} requiere cambios tanto en el servicio de {% data variables.product.prodname_actions %} _como_ en el software del ejecutor.  El ejecutor podría no ser capaz procesar correctamente los jobs que toman ventaja de las características nuevas en {% data variables.product.prodname_actions %} sin una actualización de sfotware.

Si inhabilitas las actualizaciones automáticas, necesitarás actualizar la versión de tu ejecutor en los siguientes 30 días después de que una versión nueva esté disponible.  Es posible que desee suscribirse a las notificaciones para las versiones del [`actions/runner` repositorio](https://github.com/actions/runner/releases). Para obtener más información, consulte "[Configuración de notificaciones](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/configuring-notifications#about-custom-notifications)".

Para saber cómo instalar la versión más reciente del ejecutor, consulte las instrucciones de instalación de [la versión más reciente](https://github.com/actions/runner/releases).

{% note %}

**Nota:** Si no ejecuta una actualización de software en los 30 días posteriores, el servicio de {% data variables.product.prodname_actions %} no pondrá los trabajos en cola para el ejecutor.  Adicionalmente, si se requiere una actualización de seguridad crítica, el servicio de las {% data variables.product.prodname_actions %} no pondrá jobs en cola para tu ejecutor sino hasta que este se actualice.

{% endnote %}

{% endif %}

## Utilizar webhooks para autoescalar

Puede crear su propio entorno de escalado automático mediante cargas recibidas desde el webhook [`workflow_job`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#workflow_job). Este webhook está disponible en los niveles de repositorio, organización y empresa, y la carga de este evento contiene una clave `action` que corresponde a las fases del ciclo de vida de un trabajo de flujo de trabajo; por ejemplo, cuando los trabajos son `queued`, `in_progress` y `completed`. Entonces debes crear tu propia automatización de escalamiento en respuesta a estas cargas útiles de webhook.

- Para obtener más información sobre el webhook `workflow_job`, consulte "[Eventos y cargas útiles de un webhook](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#workflow_job)".
- Para aprender a trabajar con webhooks, consulte "[Creación de webhooks](/developers/webhooks-and-events/webhooks/creating-webhooks)".

## Requisitos de autenticación

Puede registrar y eliminar los ejecutores autohospedados del repositorio y la organización mediante [la API](/rest/reference/actions#self-hosted-runners). Para autenticarte en la API, tu implementación de auto-escalamiento puede utilizar un token de acceso o una app de {% data variables.product.prodname_dotcom %}. 

Tu token de acceso necesitará el siguiente alcance:

- En el caso de los repositorios privados, use un token de acceso con el [alcance `repo`](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/#available-scopes) .
- En el caso de los repositorios públicos, use un token de acceso con el [alcance `public_repo`](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/#available-scopes) .
- En el caso de las organizaciones, use un token de acceso con el [alcance `admin:org`](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/#available-scopes) .

Para autenticarte utilizando una App de {% data variables.product.prodname_dotcom %}, se le debe asignar los siguientes permisos:
- En el caso de los repositorios, asigne el permiso `administration`.
- En el caso de las organizaciones, asigne el permiso `organization_self_hosted_runners`.

Puede registrar y eliminar ejecutores autohospedados empresariales mediante [la API](/rest/reference/actions#self-hosted-runners). Para autenticarte en la API, tu implementación de autoescalamiento puede utilizar un token de acceso.

El token de acceso requerirá el alcance `manage_runners:enterprise`.
