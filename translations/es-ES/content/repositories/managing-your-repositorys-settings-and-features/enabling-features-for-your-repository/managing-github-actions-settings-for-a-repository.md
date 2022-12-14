---
title: Administrar los ajustes de las GitHub Actions de un repositorio
intro: 'Puedes inhabilitar o configurar las {% data variables.product.prodname_actions %} en un repositorio específico.'
redirect_from:
  - /github/administering-a-repository/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-repository
  - /github/administering-a-repository/managing-repository-settings/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-repository
  - /github/administering-a-repository/disabling-or-limiting-github-actions-for-a-repository
  - /github/administering-a-repository/managing-repository-settings/disabling-or-limiting-github-actions-for-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Actions
  - Permissions
  - Pull requests
shortTitle: Manage GitHub Actions settings
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 80bce0a3f43ccac75215bd738922dc5d79868793
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147061140'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Acerca de los permisos de {% data variables.product.prodname_actions %} para tu repositorio

{% data reusables.actions.disabling-github-actions %} Para más información sobre {% data variables.product.prodname_actions %}, consulte "[Acerca de {% data variables.product.prodname_actions %}](/actions/getting-started-with-github-actions/about-github-actions)".

Puedes habilitar {% data variables.product.prodname_actions %} para tu repositorio. {% data reusables.actions.enabled-actions-description %} Puede deshabilitar {% data variables.product.prodname_actions %} totalmente para su repositorio. {% data reusables.actions.disabled-actions-description %}

Como alternativa, puedes habilitar {% data variables.product.prodname_actions %} en el repositorio, pero limitar las acciones {% ifversion actions-workflow-policy %}y los flujos de trabajo reutilizables{% endif %} que puede ejecutar un flujo de trabajo.

## Administrar los permisos de {% data variables.product.prodname_actions %} para tu repositorio

Puedes deshabilitar {% data variables.product.prodname_actions %} para un repositorio, o bien establecer una directiva que configure las acciones{% ifversion actions-workflow-policy %} y los flujos de trabajo reutilizables{% endif %} que se pueden usar en el repositorio.

{% note %}

**Nota:** Es posible que no pueda administrar estos ajustes si su organización tiene una directiva que lo invalide o la administra una empresa que tiene una directiva que lo invalide. Para obtener más información, consulte "[Deshabilitar o limitar {% data variables.product.prodname_actions %} en su organización](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization)" o "[Aplicación de directivas para {% data variables.product.prodname_actions %} en su empresa](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-github-actions-policies-for-your-enterprise)".

{% endnote %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.settings-sidebar-actions-general %}
1. Selecciona una opción debajo de "Permisos de las acciones".

   {% indented_data_reference reusables.actions.actions-use-policy-settings spaces=3 %}

   {% ifversion actions-workflow-policy %} ![Establecimiento de directiva de acciones para este repositorio](/assets/images/help/repository/actions-policy-with-workflows.png) {%- else %} ![Establecimiento de directiva de acciones para este repositorio](/assets/images/help/repository/actions-policy.png) {%- endif %}
1. Haga clic en **Save**(Guardar).

{% data reusables.actions.allow-specific-actions-intro %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.settings-sidebar-actions-general %}
1. En "Actions permissions", seleccione {% data reusables.actions.policy-label-for-select-actions-workflows %} y agregue las acciones necesarias a la lista.

   {% ifversion actions-workflow-policy%} ![Incorporación de acciones y flujos de trabajo reutilizables a la lista de permitidos](/assets/images/help/repository/actions-policy-allow-list-with-workflows.png) {%- elsif ghes %} ![Incorporación de acciones a la lista de permitidos](/assets/images/help/repository/actions-policy-allow-list.png) {%- else %} ![Incorporación de acciones a la lista de permitidos](/assets/images/enterprise/github-ae/repository/actions-policy-allow-list.png) {%- endif %}
1. Haga clic en **Save**(Guardar).

{% ifversion fpt or ghec %}
## Control de los cambios desde las bifurcaciones hasta los flujos de trabajo en repositorios públicos

{% data reusables.actions.workflow-run-approve-public-fork %}

Puedes configurar este comportamiento para un repositorio si utilizas el siguiente procedimiento. El modificar este ajuste anula la configuración que se haya hecho a nviel organizacional o empresarial.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.settings-sidebar-actions-general %} {% data reusables.actions.workflows-from-public-fork-setting %}

{% data reusables.actions.workflow-run-approve-link %} {% endif %}

## Habilitación de flujos de trabajo para bifurcaciones de repositorios privados

{% data reusables.actions.private-repository-forks-overview %}

Si se inhabilita una política para una {% ifversion ghec or ghae or ghes %}empresa u{% endif %} organización, esta no puede habilitarse para un repositorio.

{% data reusables.actions.private-repository-forks-options %}

### Configuración de la directiva de bifurcación para un repositorio privado

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.settings-sidebar-actions-general %} {% data reusables.actions.private-repository-forks-configure %}

## Establecimiento de los permisos de `GITHUB_TOKEN` para el repositorio

{% data reusables.actions.workflow-permissions-intro %}

Los permisos predeterminados también pueden configurarse en los ajustes de la organización. Si tu repositorio pertenece a una organización y se ha seleccionado un valor predeterminado más restrictivo en la configuración de la organización, la misma opción se selecciona en tu configuración de repositorio y la opción permisiva se deshabilita.

{% data reusables.actions.workflow-permissions-modifying %}

### Configuración de los permisos de `GITHUB_TOKEN` predeterminados

{% ifversion allow-actions-to-approve-pr-with-ent-repo %} De manera predeterminada, cuando creas un repositorio en tu cuenta personal, `GITHUB_TOKEN` solo tiene acción para el ámbito `contents`. Si creas un nuevo repositorio en una organización, el parámetro se hereda de lo que se ha configurado en los parámetros de la organización.
{% endif %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.settings-sidebar-actions-general %}
1. En "Permisos de flujo de trabajo", elige si quieres que `GITHUB_TOKEN` tenga acceso de lectura y escritura para todos los ámbitos, o simplemente acceso de lectura para el ámbito `contents`.

   ![Configurar los permisos del GITHUB_TOKEN para este repositorio](/assets/images/help/settings/actions-workflow-permissions-repository{% ifversion allow-actions-to-approve-pr-with-ent-repo %}-with-pr-approval{% endif %}.png)

1. Haga clic en **Save** (Guardar) para aplicar los valores.

{% ifversion allow-actions-to-approve-pr-with-ent-repo %}
### Impedir la creación o aprobación de solicitudes de incorporación de cambios por parte de {% data variables.product.prodname_actions %}

{% data reusables.actions.workflow-pr-approval-permissions-intro %}

De forma predeterminada, al crear un nuevo repositorio en tu cuenta personal, los flujos de trabajo no pueden crear ni aprobar solicitudes de incorporación de cambios. Si creas un nuevo repositorio en una organización, el parámetro se hereda de lo que se ha configurado en los parámetros de la organización.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.settings-sidebar-actions-general %}
1. En "Permisos de flujo de trabajo", usa la opción **Permitir que Acciones de GitHub cree y apruebe solicitudes de incorporación de cambios** para configurar si `GITHUB_TOKEN` puede crear y aprobar solicitudes de incorporación de cambios.

   ![Configurar los permisos del GITHUB_TOKEN para este repositorio](/assets/images/help/settings/actions-workflow-permissions-repository-with-pr-approval.png)
1. Haga clic en **Save** para aplicar los valores.
{% endif %}

{% ifversion ghes > 3.3 or ghae-issue-4757 or ghec %}
## Permitir el acceso a los componentes en un repositorio interno

Los miembros de tu empresa pueden utilizar repositorios internos para trabajar en proyectos sin compartir información públicamente. Para obtener más información, consulte "[Acerca de los repositorios](/repositories/creating-and-managing-repositories/about-repositories#about-internal-repositories)".

Puedes usar los pasos que se describen a continuación para configurar si se puede acceder a {% ifversion internal-actions%}las acciones y {% endif %}los flujos de trabajo en un repositorio interno desde fuera del repositorio.{% ifversion internal-actions %} Para más información, consulta "[Uso compartido de acciones y flujos de trabajo con su empresa](/actions/creating-actions/sharing-actions-and-workflows-with-your-enterprise)". Como alternativa, puedes utilizar la API de REST para configurar u obtener detalles del nivel de acceso. Para obtener más información, consulte "[Obtener el nivel de acceso para los flujos de trabajo fuera del repositorio](/rest/reference/actions#get-the-level-of-access-for-workflows-outside-of-the-repository#get-the-level-of-access-for-workflows-outside-of-the-repository)" y "[Establecer el nivel de acceso para los flujos de trabajo fuera del repositorio](/rest/reference/actions#get-the-level-of-access-for-workflows-outside-of-the-repository#set-the-level-of-access-for-workflows-outside-of-the-repository)". {% endif %}

1. En {% data variables.product.prodname_dotcom %}, navega hasta la página principal del repositorio interno.
1. Debajo del nombre del repositorio, haga clic en {% octicon "gear" aria-label="The gear icon" %} **Settings**.
{% data reusables.repositories.settings-sidebar-actions-general %}
1. En **Access**, elija una de las opciones de configuración de acceso:

   {% ifversion ghes > 3.4 or ghae-issue-6090 or ghec %}![Configurar el acceso a los componentes de las acciones](/assets/images/help/settings/actions-access-settings.png){% else %}![Configurar el acceso a los componentes de las acciones](/assets/images/enterprise/3.4/actions-access-settings.png){% endif %}

   * **Not accessible**: los flujos de trabajo de otros repositorios no pueden acceder a este repositorio.
   * **Accessible from repositories in the 'ORGANIZATION NAME' organization**: {% ifversion ghes > 3.4 or ghae-issue-6090 or ghec %}Los flujos de trabajo de otros repositorios que sean parte de la organización 'ORGANIZATION NAME' pueden acceder a las acciones y los flujos de trabajo de este repositorio. Se permite el acceso solo desde los repositorios internos o privados.{% else %}Los flujos de trabajo en otros repositorios pueden utilizar flujos de trabajo en este si son parte de la misma organización y su visibilidad es privada o interna.{% endif %}
   * **Accessible from repositories in the 'ENTERPRISE NAME' enterprise**: {% ifversion ghes > 3.4 or ghae-issue-6090 or ghec %}Los flujos de trabajo de otros repositorios que sean parte de la empresa 'ENTERPRISE NAME' pueden acceder a las acciones y los flujos de trabajo de este repositorio. Se permite el acceso únicamente desde los repositorios internos o privados.{% else %}Los flujos de trabajo en otros repositorios pueden utilizar aquellos en este repositorio si son parte de la misma empresa y su visibilidad es privada o interna.{% endif %}
1. Haga clic en **Save** para aplicar los valores.
{% endif %}

## Configurar el periodo de retención de los artefactos y bitácoras de las {% data variables.product.prodname_actions %} en tu repositorio

Puedes configurar el periodo de retenciòn para los artefactos de las {% data variables.product.prodname_actions %} y las bitàcoras en tu repositorio.

{% data reusables.actions.about-artifact-log-retention %}

Tambièn puedes definir un periodo de retenciòn personalizado para un artefacto especìfico que haya creado un flujo de trabajo. Para obtener más información, consulte "[Establecimiento del período de retención para un artefacto](/actions/managing-workflow-runs/removing-workflow-artifacts#setting-the-retention-period-for-an-artifact)".

## Configurar el periodo de retenciòn para un repositorio

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.settings-sidebar-actions-general %} {% data reusables.actions.change-retention-period-for-artifacts-logs  %}

{% ifversion actions-cache-policy-apis %}

## Configurar el almacenamiento en caché de un repositorio

{% data reusables.actions.cache-default-size %} Sin embargo, es posible que estos tamaños predeterminados sean diferentes si un propietario de empresa los ha cambiado. {% data reusables.actions.cache-eviction-process %}

Puedes establecer un tamaño de almacenamiento en caché total para el repositorio hasta el tamaño máximo que permite la configuración de directiva de empresa.

La configuración del repositorio para el almacenamiento en caché {% data variables.product.prodname_actions %} solo puede modificarse actualmente mediante la API REST:

* Para ver el límite de almacenamiento en caché actual de un repositorio, consulta "[Obtener la política de uso de caché de Acciones de GitHub para un repositorio](/rest/actions/cache#get-github-actions-cache-usage-policy-for-a-repository)".
* Para cambiar el límite de almacenamiento en caché de un repositorio, consulta "[Establecer la política de uso de caché de Acciones de GitHub para un repositorio](/rest/actions/cache#set-github-actions-cache-usage-policy-for-a-repository)".

{% data reusables.actions.cache-no-org-policy %}

{% endif %}
