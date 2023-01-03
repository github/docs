---
title: Agrega ejecutores auto-hospedados
intro: 'Puede agregar un ejecutor autohospedado a un repositorio, una organización o una empresa.'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/adding-self-hosted-runners
  - /actions/automating-your-workflow-with-github-actions/adding-self-hosted-runners
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
shortTitle: Add self-hosted runners
ms.openlocfilehash: c58fbc6ac67fe1466458888eb0c55f58483dac6c
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109968'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

Puede agregar un ejecutor autohospedado a un repositorio, una organización o una empresa.

So eres un administrador de alguna organización o empresa, podría que quisieras agregar tus ejecutores auto-hospedados a nivel organizacional o empresarial. Este acercamiento hace que el ejecutor esté disponible para múltiples repositorios en tu organización o empresa y también te permite administrar tus ejecutores en un solo lugar.

Para obtener información sobre los sistemas operativos compatibles con los ejecutores autohospedados o sobre el uso de ejecutores autohospedados con un servidor proxy, consulte "[Acerca de los ejecutores autohospedados](/github/automating-your-workflow-with-github-actions/about-self-hosted-runners)".

{% ifversion not ghae %} {% warning %}

**Advertencia:** {% data reusables.actions.self-hosted-runner-security %}

Para más información, consulte [Seguridad del ejecutor autohospedado con repositorios públicos](/github/automating-your-workflow-with-github-actions/about-self-hosted-runners#self-hosted-runner-security-with-public-repositories).

{% endwarning %} {% endif %}

{% ifversion fpt or ghec or ghes %}

Puedes configurar la automatización para escalar la cantidad de ejecutores auto-hospedados. Para más información, consulte "[Escalado automático con ejecutores autohospedados](/actions/hosting-your-own-runners/autoscaling-with-self-hosted-runners)".

{% endif %}

## Requisitos previos

{% data reusables.actions.self-hosted-runners-prerequisites %}

## Agregar un ejecutor auto-hospedado a un repositorio

Puedes agregar ejecutores auto-hospedados a un solo repositorio. Para agregar un ejecutor auto-hospedado a un repositorio de usuario, debes ser el dueño del mismo. Para los repositorios organizacionales, debes ser el propietario de la organización o tener acceso de administrador a éste. Para obtener información sobre cómo agregar un ejecutor autohospedado con la API REST, consulte "[Ejecutores autohospedados](/rest/reference/actions#self-hosted-runners)".

{% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %} {% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.settings-sidebar-actions-runners %}
1. Haga clic en **New self-hosted runner** (Nuevo ejecutor autohospedado).
{% data reusables.actions.self-hosted-runner-configure %} {% elsif ghae or ghes < 3.4 %} {% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.settings-sidebar-actions-runners %}
1. En {% ifversion ghes or ghae or ghec %}"Ejecutores"{% else %}"Ejecutores autohospedados"{% endif %}, haz clic en **Agregar ejecutor**.
{% data reusables.actions.self-hosted-runner-configure %} {% endif %} {% data reusables.actions.self-hosted-runner-check-installation-success %}

Para obtener más detalles, consulte "[Supervisión y solución de problemas de ejecutores autohospedados](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners)".

## Agregar un ejecutor auto-hospedado a una organización

Puedes agregar ejecutores auto-hospedados a nivel organizacional, en donde se podrán utilizar para procesar jobs para varios repositorios en una organización. Para agregar un ejecutor auto-hospedado a una organización, debes ser el dueño de la misma. Para obtener información sobre cómo agregar un ejecutor autohospedado con la API REST, consulte "[Ejecutores autohospedados](/rest/reference/actions#self-hosted-runners)".

{% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %} {% data reusables.organizations.navigate-to-org %} {% data reusables.organizations.org_settings %} {% data reusables.organizations.settings-sidebar-actions-runners %} {% ifversion actions-hosted-runners %}1. Haz clic en **Nuevo ejecutor** y, a continuación, en **Nuevo ejecutor autohospedado**. {% else %} 1. Haz clic en **Nuevo ejecutor**.{% endif %} {% data reusables.actions.self-hosted-runner-configure %} {% elsif ghae or ghes < 3.4 %} {% data reusables.organizations.navigate-to-org %} {% data reusables.organizations.org_settings %} {% data reusables.organizations.settings-sidebar-actions-runners %}
1. En {% ifversion ghes or ghae %}"Ejecutores", haz clic en **Agregar nuevo** y, después, en **Nuevo ejecutor**.{% endif %} {% data reusables.actions.self-hosted-runner-configure %} {% endif %} {% data reusables.actions.self-hosted-runner-check-installation-success %}

Para obtener más detalles, consulte "[Supervisión y solución de problemas de ejecutores autohospedados](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners)".

{% data reusables.actions.self-hosted-runner-public-repo-access %}

## Agregar un ejecutor auto-hospedado a una empresa

{% ifversion fpt %}Si utilizas {% data variables.product.prodname_ghe_cloud %}, puedes{% elsif ghec or ghes or ghae %}Puedes{% endif %} agregar ejecutores auto-hospedados a una empresa en donde estos pueden asignarse a varias organizaciones. Los administradores de la organización podrán controlar entonces qué repositorios pueden utilizarlo. {% ifversion fpt %}Para obtener más información, consulte la [documentación de {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/actions/hosting-your-own-runners/adding-self-hosted-runners#adding-a-self-hosted-runner-to-an-enterprise).{% endif %}

{% ifversion ghec or ghes or ghae %} Los nuevos ejecutores se asignan al grupo predeterminado. Puedes modificar el grupo del ejecutor después de que lo hayas registrado. Para más información, vea "[Administración del acceso a los ejecutores autohospedados](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#moving-a-self-hosted-runner-to-a-group)".

{% ifversion ghec or ghes > 3.3 or ghae > 3.3 %}

Para agregar un ejecutor auto-hospedado a una empresa, debes ser el propietario de la misma. Para obtener más información sobre cómo agregar un ejecutor autohospedado con la API REST, consulte los puntos de conexión empresariales en la [API REST de {% data variables.product.prodname_actions %}](/rest/reference/actions#self-hosted-runners).

{% endif %}

{% data reusables.actions.self-hosted-runner-add-to-enterprise %}

{% data reusables.actions.self-hosted-runner-check-installation-success %}

Para obtener más detalles, consulte "[Supervisión y solución de problemas de ejecutores autohospedados](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners)".

{% data reusables.actions.self-hosted-runner-public-repo-access %}

### Hacer que los ejecutores empresariales estén disponibles para los repositorios

Predeterminadamente, los ejecutores en un grupo de ejecutores auto hospedados "Predeterminado" de una empresa se encontrarán disponibles para todas las organizaciones de ésta, pero no así para todos los repositorios en cada una de las organizaciones.

Para que un grupo de ejecutores auto-hospedados a nivel empresarial se encuentre disponible para el repositorio de una organización, podría que necesites cambiar la configuración heredada de dicha organización para que el grupo de ejecutores pueda poner el ejecutor disponible para sus repositorios.

Para obtener más información sobre cómo cambiar la configuración de acceso de un grupo de ejecutores, consulte "[Administración del acceso a los ejecutores autohospedados mediante grupos](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#changing-the-access-policy-of-a-self-hosted-runner-group)".
{% endif %}

{% ifversion ghec or ghes or ghae %}

## Información adicional

- "[Introducción a los ejecutores autohospedados para la empresa](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-self-hosted-runners-for-your-enterprise)"

{% endif %}
