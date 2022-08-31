---
title: Acerca de utilizar las acciones en tu empresa
intro: '{% data variables.product.product_name %} incluye la mayoría de las acciones de autoría de {% data variables.product.prodname_dotcom %}, y tiene opciones para habilitar el acceso a otras acciones de {% data variables.product.prodname_dotcom_the_website %} y de {% data variables.product.prodname_marketplace %}.'
redirect_from:
  - /enterprise/admin/github-actions/about-using-githubcom-actions-on-github-enterprise-server
  - /admin/github-actions/about-using-githubcom-actions-on-github-enterprise-server
  - /admin/github-actions/about-using-actions-on-github-enterprise-server
  - /admin/github-actions/about-using-actions-in-your-enterprise
versions:
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Actions
  - Enterprise
shortTitle: Acerca de las acciones en tu empresa
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## Acerca de las acciones en {% data variables.product.product_name %}

Los flujos de trabajo de {% data variables.product.prodname_actions %} pueden utilizar _acciones_, las cuales son tareas individuales que puedes combinar para crear jobs y personalizar tu flujo de trabajo. Puedes crear tus propias acciones, o utilizar y personalizar a quellas que comparte la comunidad de {% data variables.product.prodname_dotcom %}.

{% data reusables.actions.enterprise-no-internet-actions %} Puedes restringir a tus desarrolladores para que utilicen las acciones que se almacenan en {% data variables.product.product_location %}, las cuales incluyen a la mayoría de las que hace {% data variables.product.company_short %}, así como cualquiera que creen tus desarrolladores. Como alternativa, para permitir que los desarrolladores se beneficien de todo el ecosistema de acciones que crean los líderes de la industria y la comunidad de código abierto, puedes configurar el acceso a otras acciones desde {% data variables.product.prodname_dotcom_the_website %}.

Te recomendamos permitir el acceso automático a todas las acciones desde {% data variables.product.prodname_dotcom_the_website %}. {% ifversion ghes %}Sin embargo, esto necesita que {% data variables.product.product_name %} realice conexiones salientes a {% data variables.product.prodname_dotcom_the_website %}. Si no quieres permitir estas conexiones, o{% else %}Si{% endif %} quieres tener un mayor control sobre qué acciones se utilizan en tu empresa, puedes sincronizar las acciones específicas manualmente desde {% data variables.product.prodname_dotcom_the_website %}.

## Acciones oficiales que se incluyen en tu instancia empresarial

{% data reusables.actions.actions-bundled-with-ghes %}

El paquete de acciones oficiales incluye las siguientes, entre otras.
- `actions/checkout`
- `actions/upload-artifact`
- `actions/download-artifact`
- `actions/labeler`
- Varias acciones de `actions/setup-`

Para ver todas las acciones oficiales que se incluyen en tu instancia empresarial, navega hasta la organización `actions` en tu instancia: <code>https://<em>HOSTNAME</em>/actions</code>.

No se necesita ninguna conexión entre {% data variables.product.product_location %} y {% data variables.product.prodname_dotcom_the_website %} para utilizar estas acciones.

Cada acción es un repositorio en la organización `actions` y cada repositorio de acción incluye las etiquetas, ramas y SHA de confirmación necesarios que tu flujo de trabajo puede utilizar para referenciar la acción. Para obtener más información sobre cómo actualizar las acciones oficiales empaquetadas, consulta la sección "[Utilizar la versión más reciente de las acciones oficiales incluídas](/admin/github-actions/using-the-latest-version-of-the-official-bundled-actions)".

{% note %}

**Notas:**
- Cuando utilices acciones de configuración, (tales como `actions/setup-LANGUAGE`) en {% data variables.product.product_name %} con ejecutores auto-hospedados, tal vez necesites configurar el caché de las herramientas en los ejecutores que no tienen acceso a internet. Para obtener más información, consulta la sección "[ Configurar el caché de herramientas en ejecutores auto-hospedados sin acceso a internet](/enterprise/admin/github-actions/setting-up-the-tool-cache-on-self-hosted-runners-without-internet-access)".
- Cuando se actualiza {% data variables.product.product_name %}, las acciones empaquetadas se reemplazan automáticamente con las versiones predeterminadas del paquete de mejora.

{% endnote %}

## Configurar el acceso a las acciones en {% data variables.product.prodname_dotcom_the_website %}

{% data reusables.actions.access-actions-on-dotcom %}

El acercamiento recomendado es habilitar el acceso automático a todas las acciones desde {% data variables.product.prodname_dotcom_the_website %}. Puedes hacer esto si utilizas {% data variables.product.prodname_github_connect %} para integrar a {% data variables.product.product_name %} con {% data variables.product.prodname_ghe_cloud %}. Para obtener más información, consulta la sección "[Habilitar el acceso automático a las acciones de {% data variables.product.prodname_dotcom_the_website %} utilizando {% data variables.product.prodname_github_connect %}](/enterprise/admin/github-actions/enabling-automatic-access-to-githubcom-actions-using-github-connect)".

{% ifversion ghes %}
{% note %}

**Nota:** Antes de que puedas configurar el acceso a las acciones en {% data variables.product.prodname_dotcom_the_website %}, deberás configurar a {% data variables.product.product_location %} para que utilice {% data variables.product.prodname_actions %}. Para obtener más información, consulta la sección "[Iniciar con las {% data variables.product.prodname_actions %} para GitHub Enterprise Server](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/getting-started-with-github-actions-for-github-enterprise-server)".


{% endnote %}
{% endif %}

{% data reusables.actions.self-hosted-runner-networking-to-dotcom %}

{% data reusables.actions.enterprise-limit-actions-use %}

Como alternativa, si quieres tener un control más estricto de qué acciones se permiten en tu empresa o si no quieres permitir conexiones salientes a {% data variables.product.prodname_dotcom_the_website %}, puedes descargar y sincronizar las acciones manualmente a tu instancia empresarial utilizando la herramienta de `actions-sync`. Para obtener más información, consulta la sección "[Sincronizar acciones manualmente desde {% data variables.product.prodname_dotcom_the_website %}](/enterprise/admin/github-actions/manually-syncing-actions-from-githubcom)".
