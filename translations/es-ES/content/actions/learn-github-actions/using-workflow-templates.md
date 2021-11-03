---
title: Utilizar plantillas de flujo de trabajo
shortTitle: Utilizar plantillas
intro: '{% data variables.product.product_name %} proporciona plantillas de flujo de trabajo para varios lenguajes y herramientas.'
redirect_from:
  - /articles/setting-up-continuous-integration-using-github-actions
  - /github/automating-your-workflow-with-github-actions/setting-up-continuous-integration-using-github-actions
  - /actions/automating-your-workflow-with-github-actions/setting-up-continuous-integration-using-github-actions
  - /actions/building-and-testing-code-with-continuous-integration/setting-up-continuous-integration-using-github-actions
  - /actions/guides/setting-up-continuous-integration-using-workflow-templates
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
{% data reusables.actions.ae-beta %}

## Acerca de plantillas de flujo de trabajo

{% data variables.product.product_name %} ofrece plantillas de flujo de trabajo para diversos lenguajes y herramientas. Cuando configuras flujos de trabajo en tu repositorio, {% data variables.product.product_name %} analiza el código en tu repositorio y recomienda flujos de trabajo con base en el lenguaje y marco de trabajo de este. Por ejemplo, si utilizas [Node.js](https://nodejs.org/en/), {% data variables.product.product_name %} te sugerirá un archivo de plantilla que instala tus paquetes de Node.js y ejecuta tus pruebas.

También puedes crear tus propias plantillas de flujo de trabajo para compartirlas con tu organización. Para obtener más información, consulta la sección "[Crear plantillas de flujo de trabajo ](/actions/learn-github-actions/creating-workflow-templates)".

## Utilizar plantillas de flujo de trabajo

Cualquiera con permiso de escritura en un repositorio puede configurar flujos de trabajo de {% data variables.product.prodname_actions %} para IC/DC u otras automatizaciones.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
1. Si ya tienes un flujo de trabajo en tu repositorio, haz clic en **Flujo de trabajo nuevo**.
1. Encuentra la plantilla que quieras utilizar y luego haz clic en **Configurar este flujo de trabajo**.
1. Si la plantilla de flujo de trabajo contiene comentarios que detallan pasos de configuración adicional, sigue estos pasos.
1. Algunas plantillas de flujo de trabajo utilizan secretos. Por ejemplo, {% raw %}`${{ secrets.npm_token }}`{% endraw %}. Si la plantilla de flujo de trabajo utiliza un secreto, almacena el valor que se describe en el nombre del secreto como un secreto en tu repositorio. Para obtener más información, consulta "[Secretos cifrados](/actions/reference/encrypted-secrets)".
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
