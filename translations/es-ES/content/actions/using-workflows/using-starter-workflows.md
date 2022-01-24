---
title: Utilizar flujos de trabajo iniciales
intro: '{% data variables.product.product_name %} provides starter workflows for a variety of languages and tooling.'
redirect_from:
  - /articles/setting-up-continuous-integration-using-github-actions
  - /github/automating-your-workflow-with-github-actions/setting-up-continuous-integration-using-github-actions
  - /actions/automating-your-workflow-with-github-actions/setting-up-continuous-integration-using-github-actions
  - /actions/building-and-testing-code-with-continuous-integration/setting-up-continuous-integration-using-github-actions
  - /actions/guides/setting-up-continuous-integration-using-workflow-templates
  - /actions/learn-github-actions/using-workflow-templates
  - /actions/learn-github-actions/using-starter-workflows
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Workflows
  - CI
  - CD
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## About starter workflows

{% data variables.product.product_name %} offers starter workflows for a variety of languages and tooling. Cuando configuras flujos de trabajo en tu repositorio, {% data variables.product.product_name %} analiza el código en tu repositorio y recomienda flujos de trabajo con base en el lenguaje y marco de trabajo de este. Por ejemplo, si utilizas [Node.js](https://nodejs.org/en/), {% data variables.product.product_name %} sugerirá un archivo de flujo de trabajo inicial que instale tus paquetes de Node.js y ejecute tus pruebas.{% if actions-starter-template-ui %} Puedes buscar y filtrar para encontrar flujos de trabajo inicial relevantes.{% endif %}

You can also create your own starter workflow to share with your organization. These starter workflows will appear alongside the {% data variables.product.product_name %}-provided starter workflows. Para obtener más información, consulta la sección "[Crear flujos de trabajo iniciales para tu organización](/actions/learn-github-actions/creating-starter-workflows-for-your-organization)".

## Utilizar flujos de trabajo iniciales

Anyone with write permission to a repository can set up {% data variables.product.prodname_actions %} starter workflows for CI/CD or other automation.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
1. Si ya tienes un flujo de trabajo en tu repositorio, haz clic en **Flujo de trabajo nuevo**.
1. Encuentra el flujo de trabajo inicial que quieras utilizar y luego haz clic en **Configurar este flujo de trabajo**.{% if actions-starter-template-ui %} Para ayudarte a encontrar el flujo de trabajo inicial que quieres, puedes buscar palabras clave o filtrar por categoría.{% endif %}
1. If the starter workflow contains comments detailing additional setup steps, follow these steps. Many of the starter workflow have corresponding guides. Para obtener más información, consulta [las guías de {% data variables.product.prodname_actions %}](/actions/guides).
1. Some starter workflows use secrets. Por ejemplo, {% raw %}`${{ secrets.npm_token }}`{% endraw %}. If the starter workflow uses a secret, store the value described in the secret name as a secret in your repository. Para obtener más información, consulta "[Secretos cifrados](/actions/reference/encrypted-secrets)".
1. Opcionalmente, haz cambios adicionales. Por ejemplo, puede que quieras cambiar el valor de `on` para que este cambie cuando se ejecute el flujo de trabajo.
1. Haz clic en **Iniciar confirmación**.
1. Escribe un mensaje de confirmación y decide si lo quieres confirmar directamente en la rama predeterminada o si quieres abrir una solicitud de cambios.

## Leer más

- "[Acerca de la integración continua](/articles/about-continuous-integration)"
- "[Administrar las ejecuciones de flujos de trabajo](/actions/managing-workflow-runs)"
- "[Acerca del monitoreo y la solución de problemas](/actions/monitoring-and-troubleshooting-workflows/about-monitoring-and-troubleshooting)"
- "[Aprende sobre las {% data variables.product.prodname_actions %}](/actions/learn-github-actions)"
{% ifversion fpt or ghec %}
- "[Administrar la facturación de {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions)"
{% endif %}
