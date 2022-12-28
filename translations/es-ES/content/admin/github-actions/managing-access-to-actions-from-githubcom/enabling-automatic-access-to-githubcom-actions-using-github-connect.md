---
title: Habilitación del acceso automático a las acciones de GitHub.com mediante GitHub Connect
intro: 'Para permitir que las {% data variables.product.prodname_actions %} en tu empresa utilicen acciones de {% data variables.product.prodname_dotcom_the_website %}, puedes conectar tu instancia empresarial a {% data variables.product.prodname_ghe_cloud %}.'
permissions: 'Enterprise owners can enable access to all {% data variables.product.prodname_dotcom_the_website %} actions.'
redirect_from:
  - /enterprise/admin/github-actions/enabling-automatic-access-to-githubcom-actions-using-github-connect
  - /admin/github-actions/enabling-automatic-access-to-githubcom-actions-using-github-connect
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Actions
  - Enterprise
  - GitHub Connect
shortTitle: Use GitHub Connect for actions
ms.openlocfilehash: e666929288a63dc35ffe98a734918e3495579939
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107265'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Acerca del acceso automática a las acciones de {% data variables.product.prodname_dotcom_the_website %}

De forma predeterminada, los flujos de trabajo de {% data variables.product.prodname_actions %} en {% data variables.product.product_name %} no pueden usar acciones directamente desde {% data variables.product.prodname_dotcom_the_website %} o [{% data variables.product.prodname_marketplace %}](https://github.com/marketplace?type=actions). A fin de que todas las acciones de {% data variables.product.prodname_dotcom_the_website %} estén disponibles para la instancia empresarial, puede utilizar {% data variables.product.prodname_github_connect %} para integrar {% data variables.product.product_name %} con {% data variables.product.prodname_ghe_cloud %}. 

{% data reusables.actions.self-hosted-runner-networking-to-dotcom %}

Como alternativa, si quiere un control más estricto sobre qué acciones se permiten en la empresa, puede descargar y sincronizar las acciones manualmente en la instancia empresarial mediante la herramienta `actions-sync`. Para más información, vea "[Sincronización manual de acciones de {% data variables.product.prodname_dotcom_the_website %}](/enterprise/admin/github-actions/manually-syncing-actions-from-githubcom)".

## Acerca de la resolución para las acciones que utilizan {% data variables.product.prodname_github_connect %}

{% data reusables.actions.github-connect-resolution %}

Si un usuario ya creó una organización y repositorio en tu empresa que empate con un nombre de organización y repositorio en {% data variables.product.prodname_dotcom_the_website %}, el repositorio de tu empresa se utilizará en vez del de {% data variables.product.prodname_dotcom_the_website %}. {% ifversion ghae %}Un usuario malintencionado podría sacar provecho de este comportamiento para ejecutar código como parte de un flujo de trabajo.{% else %}A fin de obtener más información, consulta "[Retirada automática de espacios de nombres para acciones a las que se accede en {% data variables.product.prodname_dotcom_the_website%}](#automatic-retirement-of-namespaces-for-actions-accessed-on-githubcom)".
{% endif %}

## Habilitar el acceso automático a todas las acciones de {% data variables.product.prodname_dotcom_the_website %}

Antes de habilitar el acceso a todas las acciones desde {% data variables.product.prodname_dotcom_the_website %} para tu empresa, debes {% ifversion ghes %}:
- Configura {% data variables.location.product_location %} para utilizar {% data variables.product.prodname_actions %}. Para más información, vea "[Introducción a {% data variables.product.prodname_actions %} para GitHub Enterprise Server](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/getting-started-with-github-actions-for-github-enterprise-server)".
- Habilitar{% else %} habilitar{% endif %} {% data variables.product.prodname_github_connect %}. Para más información, vea "[Administración de {% data variables.product.prodname_github_connect %}](/admin/configuration/configuring-github-connect/managing-github-connect)".

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.github-connect-tab %}
1. En "Los usuarios pueden utilizar acciones de GitHub.com en las ejecuciones de flujo de trabajo", use el menú desplegable y seleccione **Habilitado**.
  ![Menú desplegable para las acciones de GitHub.com en las ejecuciones de flujo de trabajo](/assets/images/enterprise/site-admin-settings/enable-marketplace-actions-drop-down-ae.png)
1. {% data reusables.actions.enterprise-limit-actions-use %}

## Retiro automático de designadores de nombre para las acciones a las cuales se accede en {% data variables.product.prodname_dotcom_the_website %}

Cuando habilitas {% data variables.product.prodname_github_connect %}, los usuarios no ven cambios en el comportamiento de los flujos de trabajo existentes, ya que {% data variables.product.prodname_actions %} busca la {% data variables.location.product_location %} de cada acción antes de revertirse a {% data variables.product.prodname_dotcom_the_website%}. Esto garantiza que cualquier versión personalizada de las acciones que creó tu empresa se utilice preferencialmente en comparación de sus contrapartes en {% data variables.product.prodname_dotcom_the_website%}.

La retirada automática de nombres de espacio para las acciones a las cuales se accede en {% data variables.product.prodname_dotcom_the_website %} bloquea el potencial de un ataque de tipo de persona intermediaria mediante un usuario malintencionado con acceso a {% data variables.location.product_location %}. Cuando una acción de {% data variables.product.prodname_dotcom_the_website %} se utiliza por primera vez, este espacio de nombres se retira en {% data variables.location.product_location %}. Esto bloquea a cualquier usuario que cree una organización y repositorio en tu empresa, los cuales empaten con el nombre de organización y repositorio en {% data variables.product.prodname_dotcom_the_website %}. Esto garantiza que, cuando se ejecute un flujo de trabajo, siempre se ejecute la acción prevista.

Después de utilizar la acción desde {% data variables.product.prodname_dotcom_the_website %}, si quieres crear una acción con el mismo nombre en {% data variables.location.product_location %}, primero tendrás que tener disponible el espacio de nombres para dicha organización y repositorio.

{% data reusables.enterprise_site_admin_settings.access-settings %}
2. En la barra lateral izquierda, en **Administrador del sitio**, haga clic en **Espacios de nombres retirados**.
3. Busca el espacio de nombres que quieras utilizar en {% data variables.location.product_location %} y haz clic en **Anular la retirada**.
   ![Dejar de retirar un espacio de nombres](/assets/images/enterprise/site-admin-settings/unretire-namespace.png)
4. Ve a la organización relevante y crea un repositorio nuevo.

   {% tip %}

   **Sugerencia:** Cuando se deja de retirar un espacio de nombres, debe crear lo antes posible el repositorio nuevo con el mismo nombre. Si un flujo de trabajo llama a la acción asociada de {% data variables.product.prodname_dotcom_the_website %} antes de que crees el repositorio local, el designador de nombre se retirará nuevamente. En el caso de las acciones que se utilizan en los flujos de trabajo que se ejecutan con frecuencia, podrías encontrar que el designador de nombre se retiró nuevamente antes de que tengas tiempo para crear el repositorio local. En este caso, puedes inhabilitar los flujos de trabajo relevantes temporalmente hasta que hayas creado el repositorio nuevo.

   {% endtip %}
