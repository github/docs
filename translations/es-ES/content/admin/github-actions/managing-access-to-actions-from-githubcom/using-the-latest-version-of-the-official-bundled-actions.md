---
title: Utilizar la última versión de las acciones empaquetadas oficiales
intro: 'Puedes actualizar las acciones que vienen en paquete para tu empresa o utilizarlas directamente desde {% data variables.product.prodname_dotcom_the_website %}.'
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Actions
  - Enterprise
  - GitHub Connect
redirect_from:
  - /admin/github-actions/using-the-latest-version-of-the-official-bundled-actions
shortTitle: Use the latest bundled actions
ms.openlocfilehash: a86c731602bc39cc35fbff823ebdbfbdf2dec2c9
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107033'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

Tu instancia empresarial incluye varias acciones integradas que puedes utilizar en tus flujos de trabajo. Para más información sobre las acciones agrupadas, vea "[Acciones oficiales agrupadas con la instancia de empresa](/admin/github-actions/about-using-actions-in-your-enterprise#official-actions-bundled-with-your-enterprise-instance)".

Estas acciones agrupadas son una instantánea en un momento dado de las acciones oficiales que se encuentran en https://github.com/actions, por lo que podría haber versiones nuevas disponibles de ellas. Puede usar la herramienta `actions-sync` para actualizar estas acciones, o bien configurar {% data variables.product.prodname_github_connect %} para permitir el acceso a las acciones más recientes en {% data variables.product.prodname_dotcom_the_website %}. Estas opciones se describen en las secciones siguientes.

## Uso de `actions-sync` para actualizar las acciones agrupadas

Para actualizar las acciones agrupadas, puede usar la herramienta `actions-sync` a fin de actualizar la instantánea. Para más información sobre el uso de `actions-sync`, vea "[Sincronización manual de acciones de {% data variables.product.prodname_dotcom_the_website %}](/admin/github-actions/manually-syncing-actions-from-githubcom)".

## Utilizar {% data variables.product.prodname_github_connect %} para acceder a las últimas acciones

Puedes utilizar {% data variables.product.prodname_github_connect %} para permitir que {% data variables.product.product_name %} utilice acciones desde {% data variables.product.prodname_dotcom_the_website %}. Para más información, vea "[Habilitación del acceso automático a las acciones de {% data variables.product.prodname_dotcom_the_website %} mediante {% data variables.product.prodname_github_connect %}](/admin/github-actions/enabling-automatic-access-to-githubcom-actions-using-github-connect)".

Una vez que se configura {% data variables.product.prodname_github_connect %}, puede usar la versión más reciente de una acción si elimina su repositorio local en la organización `actions` de la instancia. Por ejemplo, si en la instancia de la empresa se usa `v1` de la acción `actions/checkout` y tiene que usar `{% data reusables.actions.action-checkout %}` que no está disponible en la instancia de la empresa, siga estos pasos para poder usar la acción `checkout` más reciente de {% data variables.product.prodname_dotcom_the_website %}:

1. Desde una cuenta de propietario de empresa en {% data variables.product.product_name %}, vaya al repositorio que quiera eliminar de la organización de *acciones* (en este ejemplo `checkout`).
1. De manera predeterminada, los administradores de sitio no son los propietarios de la organización de *acciones* agrupadas. A fin de obtener el acceso necesario para eliminar el repositorio `checkout`, debe usar las herramientas de administración del sitio. Haz clic en {% octicon "rocket" aria-label="The rocket ship" %} en la esquina superior derecha de cualquier página de este repositorio.
  ![Ícono de cohete para acceder a los valores de administración del sitio](/assets/images/enterprise/site-admin-settings/access-new-settings.png)
1. Haga clic en {% octicon "shield-lock" %} **Seguridad** para ver la información general de seguridad del repositorio.
  ![Encabezado de seguridad del repositorio](/assets/images/enterprise/site-admin-settings/access-repo-security-info.png)
1. En "Acceso con privilegios", haga clic en **Desbloquear**.
  ![Botón Desbloquear](/assets/images/enterprise/site-admin-settings/unlock-priviledged-repo-access.png)
1. En **Motivo**, escriba un motivo para desbloquear el repositorio y, después, haga clic en **Desbloquear**.
  ![Cuadro de diálogo Confirmación](/assets/images/enterprise/site-admin-settings/confirm-unlock-repo-access.png)
1. Ahora que el repositorio se ha desbloqueado, puede salir de las páginas de administración del sitio y elimina el repositorio dentro de la organización `actions`. En la parte superior de la página, haga clic en el nombre del repositorio, en este ejemplo **checkout**, para volver a la página de resumen.
  ![Vínculo del nombre de repositorio](/assets/images/enterprise/site-admin-settings/display-repository-admin-summary.png)
1. En "Información del repositorio", haga clic en **Ver código** para salir de las páginas de administración del sitio y mostrar el repositorio `checkout`.
1. Elimine el repositorio `checkout` dentro de la organización `actions`. Para obtener información sobre cómo eliminar un repositorio, vea "[Eliminación de un repositorio](/github/administering-a-repository/deleting-a-repository)".
  ![Vínculo para ver el código](/assets/images/enterprise/site-admin-settings/exit-admin-page-for-repository.png)
1. Configure el código YAML del flujo de trabajo para que use `{% data reusables.actions.action-checkout %}`.
1. Cada vez que se ejecuta el flujo de trabajo, el ejecutor usará la versión especificada de `actions/checkout` de {% data variables.product.prodname_dotcom_the_website %}.

   {% note %}

   **Nota:** La primera vez que se usa la acción `checkout` desde {% data variables.product.prodname_dotcom_the_website %}, el espacio de nombres `actions/checkout` se retira automáticamente en {% data variables.location.product_location %}. Si alguna vez quieres revertir a utilizar una copia local de la acción, primero necesitas eliminar el designador de nombre de la jubilación. Para más información, vea "[Retiro automático de espacios de nombres para las acciones a las que se accede en {% data variables.product.prodname_dotcom_the_website%}](/admin/github-actions/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect#automatic-retirement-of-namespaces-for-actions-accessed-on-githubcom)".

   {% endnote %}
