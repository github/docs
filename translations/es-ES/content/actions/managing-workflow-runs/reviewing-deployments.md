---
title: Revisar los despliegues
intro: Puedes aprobar o rechazar jobs que estén esperando una revisión.
product: '{% data reusables.gated-features.environments %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.1'
  github-ae: '*'
---

{% data reusables.actions.environments-beta %}
{% data reusables.actions.ae-beta %}

### Acerca de las revisiones requeridas en los flujos de trabajo

Los jobs que referencian un ambiente configurado con revisores requeridos esperarán por una aprobación antes de comenzar. Mientras que un job espera su revisión, tendrá un estado de "Waiting". Si un job no se aprueba dentro de 30 días, la ejecución del flujo de trabajo se cancelará automáticamente.

For more information about environments and required approvals, see "[Environments](/actions/reference/environments)."{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@next" or currentVersion ver_gt "enterprise-server@3.1" %} For information about how to review deployments with the REST API, see "[Workflow Runs](/rest/reference/actions#workflow-runs)."{% endif %}

### Aprobar o rechazar un job

1. Navega a la ejecución de flujo de trabajo que requiere revisión. Para obtener más información acerca de navegar a una ejecución de flujo de trabajo, consulta la sección "[Visualizar el historial de la ejecución del flujo de trabajo](/actions/managing-workflow-runs/viewing-workflow-run-history)".
2. Da clic en **Revisar despliegues**. ![Revisar despliegues](/assets/images/actions-review-deployments.png)
3. Selecciona el(los) ambiente(s) para aprobar o rechazar. Opcionalmente, deja un comentario. ![Aprobar despliegues](/assets/images/actions-approve-deployments.png)
4. Aprueba o rechaza:
   - Para aprobar el job, da clic en **Aprobar y desplegar**. Una vez que el job se apruebe (y que cualquier otra regla de protección del ambiente haya pasado), el job procederá. En este punto, el job puede acceder a cualquier secreto que esté almacenado en el ambiente.
   - Para rechazar el job, da clic en **Rechazar**. Si se rechaza un job, el flujo de trabajo fallará.
