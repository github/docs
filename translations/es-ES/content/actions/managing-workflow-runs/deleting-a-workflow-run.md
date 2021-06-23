---
title: Borrar una ejecución de flujo de trabajo
intro: Puedes borrar una ejecución de flujo de trabajo que se haya completado o que tenga más de dos semanas de antigüedad.
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

{% data reusables.repositories.permissions-statement-write %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
1. Para eliminar una ejecución de flujo de trabajo, utiliza el menú desplegable de {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} y selecciona **Borrar una ejecución de flujo de trabajo**.

    ![Borrar una ejecución de flujo de trabajo](/assets/images/help/settings/workflow-delete-run.png)
2. Revisa el mensaje de confirmación y da clic en **Sí, borrar esta ejecución de flujo de trabajo permanentemente**.

    ![Borrar una confirmación de ejecución de flujo de trabajo](/assets/images/help/settings/workflow-delete-run-confirmation.png)
