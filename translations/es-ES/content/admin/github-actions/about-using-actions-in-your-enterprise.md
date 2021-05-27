---
title: Acerca de utilizar las acciones en tu empresa
intro: '{% data variables.product.product_name %} incluye la mayoría de las acciones de autoría de {% data variables.product.prodname_dotcom %}, y tiene opciones para habilitar el acceso a otras acciones de {% data variables.product.prodname_dotcom_the_website %} y de {% data variables.product.prodname_marketplace %}.'
redirect_from:
  - /enterprise/admin/github-actions/about-using-githubcom-actions-on-github-enterprise-server
  - /admin/github-actions/about-using-githubcom-actions-on-github-enterprise-server
  - /admin/github-actions/about-using-actions-on-github-enterprise-server
versions:
  enterprise-server: '>=2.22'
  github-ae: next
type: overview
topics:
  - Actions
  - Enterprise
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

Los flujos de trabajo de {% data variables.product.prodname_actions %} pueden utilizar _acciones_, las cuales son tareas individuales que puedes combinar para crear jobs y personalizar tu flujo de trabajo. Puedes crear tus propias acciones, o utilizar y personalizar a quellas que comparte la comunidad de {% data variables.product.prodname_dotcom %}.

{% data reusables.actions.enterprise-no-internet-actions %}

### Acciones oficiales que se incluyen en tu instancia empresarial

La mayoría de las acciones oficiales de autoría de {% data variables.product.prodname_dotcom %} se agrupan automáticamente con {% data variables.product.product_name %} y se capturan en un punto en el tiempo desde {% data variables.product.prodname_marketplace %}.

Las acciones agrupadas oficiales incluyen a `actions/checkout`, `actions/upload-artifact`, `actions/download-artifact`, `actions/labeler`, y varias acciones de `actions/setup-`, entre otras. Para ver todas las acciones oficiales que se incluyen en tu instancia empresarial, navega hasta la organización `actions` en tu instancia: <code>https://<em>HOSTNAME</em>/actions</code>.

Cada acción es un repositorio en la organización `actions` y cada repositorio de acción incluye las etiquetas, ramas y SHA de confirmación necesarios que tu flujo de trabajo puede utilizar para referenciar la acción. Para obtener más información sobre cómo actualizar las acciones oficiales empaquetadas, consulta la sección "[Utilizar la versión más reciente de las acciones oficiales incluídas](/admin/github-actions/using-the-latest-version-of-the-official-bundled-actions)".

{% note %}

**Nota:** Cuando utilices acciones de configuración (tales como `actions/setup-LANGUAGE`) en {% data variables.product.product_name %} con ejecutores auto-hospedados, podrías necesitar configurar el caché de las herramientas en los ejecutores que no tengan acceso a internet. Para obtener más información, consulta la sección "[ Configurar el caché de herramientas en ejecutores auto-hospedados sin acceso a internet](/enterprise/admin/github-actions/setting-up-the-tool-cache-on-self-hosted-runners-without-internet-access)".

{% endnote %}

### Configurar el acceso a las acciones en {% data variables.product.prodname_dotcom_the_website %}

Si los usuarios de tu empresa necesitan acceso a otras acciones desde {% data variables.product.prodname_dotcom_the_website %} o {% data variables.product.prodname_marketplace %}, hay algunas cuantas opciones de configuración.

El acercamiento recomendado es habilitar el acceso automático a todas las acciones desde {% data variables.product.prodname_dotcom_the_website %}. Puedes hacer esto si utilizas {% data variables.product.prodname_github_connect %} para integrar a {% data variables.product.product_name %} con {% data variables.product.prodname_ghe_cloud %}. Para obtener más información, consulta la sección "[Habilitar el acceso automático a las acciones de {% data variables.product.prodname_dotcom_the_website %} utilizando {% data variables.product.prodname_github_connect %}](/enterprise/admin/github-actions/enabling-automatic-access-to-githubcom-actions-using-github-connect)". {% data reusables.actions.enterprise-limit-actions-use %}

Como alternativa, si quieres tener un control más estricto sobre qué acciones se permiten en tu empresa, puedes descargar y sincronizar las acciones manualmente en tu instancia empresarial utilizando la herramienta `actions-sync`. Para obtener más información, consulta la sección "[Sincronizar acciones manualmente desde {% data variables.product.prodname_dotcom_the_website %}](/enterprise/admin/github-actions/manually-syncing-actions-from-githubcom)".
