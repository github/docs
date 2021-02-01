---
title: Configurar la integración contínua utilizando plantillas de flujo de trabajo
shortTitle: Configurar la IC utilizando plantillas
intro: Puedes configurar una integración continua para tu proyecto mediante el uso de una plantilla de flujo de trabajo que coincida con el idioma y las herramientas que deseas utilizar.
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /articles/setting-up-continuous-integration-using-github-actions
  - /github/automating-your-workflow-with-github-actions/setting-up-continuous-integration-using-github-actions
  - /actions/automating-your-workflow-with-github-actions/setting-up-continuous-integration-using-github-actions
  - /actions/building-and-testing-code-with-continuous-integration/setting-up-continuous-integration-using-github-actions
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
type: 'tutorial'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

Cualquier persona con permiso de escritura en un repositorio puede configurar la integración continua (CI) utilizando {% data variables.product.prodname_actions %}.

Una vez que hayas configurado la IC, puedes personalizar el flujo de trabajo para satisfacer tus necesidades.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
1. Busca la plantilla que coincida con el idioma y las herramientas que deseas utilizar; a continuación, haz clic en **Configurar este flujo de trabajo**. ![Configurar el botón de flujo de trabajo](/assets/images/help/repository/setup-workflow-button.png)
5. Haz clic en **Iniciar confirmación**. ![Botón Start commit (Iniciar confirmación)](/assets/images/help/repository/start-commit.png)
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_new_file %}

Una vez que se hace una inserción en tu repositorio, puedes seguir el estado y los registros detallados de tu flujo de trabajo de integración continua ejecutado en {% data variables.product.prodname_dotcom %} y recibir notificaciones personalizadas. Para obtener más información, consulta la sección "[Configurar notificaciones](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#github-actions-notification-options)" y "[Administrar una ejecución de flujo de trabajo](/articles/managing-a-workflow-run)".

{% data reusables.repositories.actions-workflow-status-badge-into %}

Para obtener más información, consulta la sección "[Aprende sobre {% data variables.product.prodname_actions %}](/actions/learn-github-actions)".

### Further reading

- "[Acerca de la integración continua](/articles/about-continuous-integration)"
- "[Administrar una ejecución de flujo de trabajo](/articles/managing-a-workflow-run)"
{% if currentVersion == "free-pro-team@latest" %}
- "[Administrar la facturación de {% data variables.product.prodname_actions %}](/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions)"
{% endif %}
