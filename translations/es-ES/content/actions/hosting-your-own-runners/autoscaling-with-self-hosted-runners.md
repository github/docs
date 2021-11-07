---
title: Autoescalar con ejecutores auto-hospedados
intro: Puedes escalar tus ejecutores auto-hospedados automáticamente en respuesta a eventos de webhook.
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>3.2'
type: overview
---

{% data reusables.actions.ae-self-hosted-runners-notice %}
{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

## Acerca del autoescalamiento

Puedes incrementar o decrementar la cantidad de ejecutores auto-hospedados en tu ambiente automáticamente como respuesta a los eventos de webhook que recibes con una etiqueta particular. Por ejemplo, puedes crear una automatización que agregue un ejecutor auto-hospedado cada vez que recibes un [`workflow_job`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#workflow_job) evento de webhook con la actividad de [`queued`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#workflow_job), el cual te notifica que hay un job nuevo listo para procesarse. La carga útil de un webhook incluye datos de etiqueta, así que puedes identificar el tipo de ejecutor que está solicitando el job. Una vez que haya terminado un job, puedes crear una automatización que elimine el ejecutor en respuesta a la actividad [`completed`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#workflow_job) del `workflow_job`.

## Recommended autoscaling solutions

{% data variables.product.prodname_dotcom %} recommends and partners closely with two open source projects that you can use for autoscaling your runners. One or both solutions may be suitable, based on your needs.

The following repositories have detailed instructions for setting up these autoscalers:

- [actions-runner-controller/actions-runner-controller](https://github.com/actions-runner-controller/actions-runner-controller) - A Kubernetes controller for {% data variables.product.prodname_actions %} self-hosted runnners.
- [philips-labs/terraform-aws-github-runner](https://github.com/philips-labs/terraform-aws-github-runner) - A Terraform module for scalable {% data variables.product.prodname_actions %} runners on Amazon Web Services.

Each solution has certain specifics that may be important to consider:

| **Características**            | **actions-runner-controller**                                                      | **terraform-aws-github-runner**                                       |
|:------------------------------ |:---------------------------------------------------------------------------------- |:--------------------------------------------------------------------- |
| Tiempo de ejecución            | Kubernetes                                                                         | Linux and Windows VMs                                                 |
| Supported Clouds               | Azure, Amazon Web Services, Google Cloud Platform, on-premises                     | Amazon Web Services                                                   |
| Where runners can be scaled    | Enterprise, organization, and repository levels. By runner label and runner group. | Organization and repository levels. By runner label and runner group. |
| Pull-based autoscaling support | Sí                                                                                 | No                                                                    |

## Utilizar ejecutores efímeros para autoescalar

{% data variables.product.prodname_dotcom %} recomienda implementar el autoescalamiento con ejecutores auto-hospedados efímeros; no se recomienda autoescalar con ejecutores auto-hospedados persistentes. En casos específicos, {% data variables.product.prodname_dotcom %} no puede garantizar que los jobs no se asignen a los ejecutores persistentes mientras están cerrados. Con los ejecutores efímeros, esto puede garantizarse, ya que {% data variables.product.prodname_dotcom %} solo asigna un job a un ejecutor.

Este acercamiento te permite administrar tus ejecutores como sistemas efímeros, ya que puedes utilizar la automatización para proporcionar un ambiente limpio para cada job. Esto ayuda a limitar la exposición de cualquier recurso sensible de los jobs anteriores y también ayuda a mitigar el riesgo de un ejecutor puesto en riesgo que esté recibiendo jobs nuevos.

Para agregar un ejecutor efímero a tu ambiente, incluye el parámetro `--ephemeral` cuando registres tu ejecutor utilizando `config.sh`. Por ejemplo:

```
$ ./config.sh --url https://github.com/octo-org --token example-token --ephemeral
```

El servicio de {% data variables.product.prodname_actions %} entonces quitará el registro del ejecutor automáticamente después de que haya procesado un job. Entonces podrás crear tu propia automatización que elimine el ejecutor después de que se desregistró.

{% note %}

**Nota:**  Si un job se etiqueta por algún tipo de ejecutor, pero no hay ninguno disponible que empate con este tipo, dicho job no fallará inmediatamente en el momento de ponerse en cola. En vez de esto, el job permanecerá en cola hasta que venza el tiempo límite de 24 horas.

{% endnote %}

## Utilizar webhooks para autoescalar

Puedes crear tu propio ambiente de autoescalamiento utilizando cargas útiles que recibas del webhook de [`workflow_job`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#workflow_job). Este webhook está disponible en los niveles de repositorio, organización y empresa y la carga útil de este evento contiene una clave de `action` que corresponde a las etapas del ciclo de vida de un job de un flujo de trabajo; por ejemplo, cuando los jobs se ponen como `queued`, `in_progress`, y `completed`. Entonces debes crear tu propia automatización de escalamiento en respuesta a estas cargas útiles de webhook.

- Para obtener más información sobre el webhook de `workflow_job`, consulta la sección de "[Eventos y cargas útiles de los webhooks](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#workflow_job)".
- Para aprender cómo trabajar con los webhooks, consulta la sección "[Crear webhooks](/developers/webhooks-and-events/webhooks/creating-webhooks)".

## Requisitos de autenticación

You can register and delete repository and organization self-hosted runners using [the API](/rest/reference/actions#self-hosted-runners). Para autenticarte en la API, tu implementación de auto-escalamiento puede utilizar un token de acceso o una app de {% data variables.product.prodname_dotcom %}.

Tu token de acceso necesitará el siguiente alcance:

- Para los repositorios privados, utiliza un token de acceso con el [alcance de `repo`](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/#available-scopes).
- Para los repositorios públicos, utiliza un token de acceso con el [alcance de `public_repo`](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/#available-scopes).

Para autenticarte utilizando una App de {% data variables.product.prodname_dotcom %}, se le debe asignar los siguientes permisos:
- Para los repositorios, asigna el permiso de `administration`.
- Para las organizaciones, asigna el permiso de `organization_self_hosted_runners`.

You can register and delete enterprise self-hosted runners using [the API](/rest/reference/enterprise-admin#github-actions). To authenticate to the API, your autoscaling implementation can use an access token.

Your access token will requite the `manage_runners:enterprise` scope.
