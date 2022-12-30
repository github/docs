---
title: Acerca de utilizar las acciones en tu empresa
intro: '{% data variables.product.product_name %} incluye la mayoría de las acciones creadas por {% data variables.product.prodname_dotcom %} y tiene opciones para habilitar el acceso a otras acciones de {% data variables.product.prodname_dotcom_the_website %} y {% data variables.product.prodname_marketplace %}.'
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
shortTitle: About actions in your enterprise
ms.openlocfilehash: 2e18b932548aa7ad9b65c090b6a5418762bcb501
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '146139012'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Acerca de las acciones en {% data variables.product.product_name %}

Los flujos de trabajo de {% data variables.product.prodname_actions %} pueden usar _acciones_, que son tareas individuales que puede combinar para crear trabajos y personalizar el flujo de trabajo. Puedes crear tus propias acciones, o utilizar y personalizar a quellas que comparte la comunidad de {% data variables.product.prodname_dotcom %}.

{% data reusables.actions.enterprise-no-internet-actions %} Puedes restringir a tus desarrolladores para que utilicen las acciones que se almacenan en {% data variables.product.product_location %}, las cuales incluyen a la mayoría de las que hace {% data variables.product.company_short %}, así como cualquiera que creen tus desarrolladores. Como alternativa, para permitir que los desarrolladores se beneficien de todo el ecosistema de acciones que crean los líderes de la industria y la comunidad de código abierto, puedes configurar el acceso a otras acciones desde {% data variables.product.prodname_dotcom_the_website %}. 

Te recomendamos permitir el acceso automático a todas las acciones desde {% data variables.product.prodname_dotcom_the_website %}. {% ifversion ghes %}Sin embargo, esto necesita que {% data variables.product.product_name %} realice conexiones salientes a {% data variables.product.prodname_dotcom_the_website %}. Si no quieres permitir estas conexiones, o{% else %}Si{% endif %} quieres tener un mayor control sobre qué acciones se utilizan en tu empresa, puedes sincronizar las acciones específicas manualmente desde {% data variables.product.prodname_dotcom_the_website %}.

## Acciones oficiales que se incluyen en tu instancia empresarial

{% data reusables.actions.actions-bundled-with-ghes %}

El paquete de acciones oficiales incluye las siguientes, entre otras.
- `actions/checkout`
- `actions/upload-artifact`
- `actions/download-artifact`
- `actions/labeler`
- Varias acciones `actions/setup-`

Para ver todas las acciones oficiales incluidas en la instancia de la empresa, vaya a la organización de `actions` en la instancia: <code>https://<em>HOSTNAME</em>/actions</code>.

No se necesita ninguna conexión entre {% data variables.product.product_location %} y {% data variables.product.prodname_dotcom_the_website %} para utilizar estas acciones.

Cada acción es un repositorio en la organización de `actions` y cada repositorio de acción incluye las etiquetas, ramas y SHA de confirmación necesarios que los flujos de trabajo pueden usar para hacer referencia a la acción. Para obtener información sobre cómo actualizar las acciones oficiales agrupadas, vea "[Uso de la versión más reciente de las acciones agrupadas oficiales](/admin/github-actions/using-the-latest-version-of-the-official-bundled-actions)".

{% note %}

**Notas:** 
- Cuando use acciones de configuración, (como `actions/setup-LANGUAGE`) en {% data variables.product.product_name %} con ejecutores autohospedados, es posible que necesite configurar la caché de herramientas en los ejecutores que no tienen acceso a Internet. Para más información, vea "[Configuración de la caché de herramientas en ejecutores autohospedados sin acceso a Internet](/enterprise/admin/github-actions/setting-up-the-tool-cache-on-self-hosted-runners-without-internet-access)".
- Cuando se actualiza {% data variables.product.product_name %}, las acciones agrupadas se reemplazan automáticamente por las versiones predeterminadas del paquete de actualización.

{% endnote %}

## Configurar el acceso a las acciones en {% data variables.product.prodname_dotcom_the_website %}

{% data reusables.actions.access-actions-on-dotcom %}

El acercamiento recomendado es habilitar el acceso automático a todas las acciones desde {% data variables.product.prodname_dotcom_the_website %}. Puede hacer esto si usa {% data variables.product.prodname_github_connect %} para integrar {% data variables.product.product_name %} con {% data variables.product.prodname_ghe_cloud %}. Para más información, vea "[Habilitación del acceso automático a las acciones de {% data variables.product.prodname_dotcom_the_website %} mediante {% data variables.product.prodname_github_connect %}](/enterprise/admin/github-actions/enabling-automatic-access-to-githubcom-actions-using-github-connect)". 

{% ifversion ghes %} {% note %}

**Nota:** Antes de poder configurar el acceso a las acciones de {% data variables.product.prodname_dotcom_the_website %}, tendrá que configurar {% data variables.product.product_location %} para que use {% data variables.product.prodname_actions %}. Para más información, vea "[Introducción a {% data variables.product.prodname_actions %} para GitHub Enterprise Server](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/getting-started-with-github-actions-for-github-enterprise-server)".


{% endnote %} {% endif %}

{% data reusables.actions.self-hosted-runner-networking-to-dotcom %}

{% data reusables.actions.enterprise-limit-actions-use %}

Como alternativa, si quiere tener un control más estricto de qué acciones se permiten en la empresa, o bien si no quiere permitir conexiones salientes a {% data variables.product.prodname_dotcom_the_website %}, puede descargar manualmente las acciones y sincronizarlas con la instancia empresarial mediante la herramienta `actions-sync`. Para más información, vea "[Sincronización manual de acciones de {% data variables.product.prodname_dotcom_the_website %}](/enterprise/admin/github-actions/manually-syncing-actions-from-githubcom)".
