---
title: Autoescalar con ejecutores auto-hospedados
intro: Puedes escalar tus ejecutores auto-hospedados automáticamente en respuesta a eventos de webhook.
versions:
  free-pro-team: '*'
  enterprise-server: '>3.2'
type: overview
---

{% data reusables.actions.ae-self-hosted-runners-notice %}
{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## Acerca del autoescalamiento

You can automatically increase or decrease the number of self-hosted runners in your environment in response to the webhook events you receive with a particular label. For example, you can create automation that adds a new self-hosted runner each time you receive a [`workflow_job`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#workflow_job) webhook event with the  [`queued`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#workflow_job) activity, which notifies you that a new job is ready for processing. The webhook payload includes label data, so you can identify the type of runner the job is requesting. Once the job has finished, you can then create automation that removes the runner in response to the `workflow_job` [`completed`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#workflow_job) activity.

## Utilizar ejecutores efímeros para autoescalar

{% data variables.product.prodname_dotcom %} recommends implementing autoscaling with ephemeral self-hosted runners; autoscaling with persistent self-hosted runners is not recommended. In certain cases, {% data variables.product.prodname_dotcom %} cannot guarantee that jobs are not assigned to persistent runners while they are shut down. With ephemeral runners, this can be guaranteed because {% data variables.product.prodname_dotcom %} only assigns one job to a runner.

This approach allows you to manage your runners as ephemeral systems, since you can use automation to provide a clean environment for each job. This helps limit the exposure of any sensitive resources from previous jobs, and also helps mitigate the risk of a compromised runner receiving new jobs.

To add an ephemeral runner to your environment, include the `--ephemeral` parameter when registering your runner using `config.sh`. Por ejemplo:

```
$ ./config.sh --url https://github.com/octo-org --token example-token --ephemeral
```

The {% data variables.product.prodname_actions %} service will then automatically de-register the runner after it has processed one job. You can then create your own automation that wipes the runner after it has been de-registered.

{% note %}

**Note:**  If a job is labeled for a certain type of runner, but none matching that type are available, the job does not immediately fail at the time of queueing. Instead, the job will remain queued until the 24 hour timeout period expires.

{% endnote %}

## Utilizar webhooks para autoescalar

You can create your own autoscaling environment by using payloads received from the [`workflow_job`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#workflow_job) webhook. This webhook is available at the repository, organization, and enterprise levels, and the payload for this event contains an `action` key that corresponds to the stages of a workflow job's life-cycle; for example when jobs are `queued`, `in_progress`, and `completed`. You must then create your own scaling automation in response to these webhook payloads.

- Para obtener más información sobre el webhook de `workflow_job`, consulta la sección de "[Eventos y cargas útiles de los webhooks](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#workflow_job)".
- Para aprender cómo trabajar con los webhooks, consulta la sección "[Crear webhooks](/developers/webhooks-and-events/webhooks/creating-webhooks)".

## Requisitos de autenticación

You can register and delete self-hosted runners using [the API](/rest/reference/actions#self-hosted-runners). To authenticate to the API, your autoscaling implementation can use an access token or a {% data variables.product.prodname_dotcom %} app.

Your access token will require the following scope:

- Para los repositorios privados, utiliza un token de acceso con el [alcance de `repo`](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/#available-scopes).
- Para los repositorios públicos, utiliza un token de acceso con el [alcance de `public_repo`](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/#available-scopes).

To  authenticate using a {% data variables.product.prodname_dotcom %} App, it must be assigned the following permissions:
- Para los repositorios, asigna el permiso de `administration`.
- Para las organizaciones, asigna el permiso de `organization_self_hosted_runners`.
