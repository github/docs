---
title: Introducción a los ejecutores autohospedados para la empresa
shortTitle: Self-hosted runners
intro: 'Puedes configurar una máquina ejecutora para la empresa de modo que los desarrolladores puedan empezar a automatizar los flujos de trabajo con {% data variables.product.prodname_actions %}.'
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
permissions: 'Enterprise owners can configure policies for {% data variables.product.prodname_actions %} and add self-hosted runners to the enterprise.'
type: quick_start
topics:
  - Actions
  - Enterprise
  - Fundamentals
ms.openlocfilehash: e369c7bf3a9da15cd4e0ee43f54815e89ab4b45a
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106625'
---
## Acerca de los ejecutores autohospedados para {% data variables.product.prodname_actions %}

{% data reusables.actions.about-actions-for-enterprises %} Si deseas más información, consulta "[Acerca de {% data variables.product.prodname_actions %} para empresas](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/about-github-actions-for-enterprises)."

Con {% data variables.product.prodname_actions %}, los desarrolladores pueden escribir y combinar tareas individuales, denominadas acciones, para crear flujos de trabajo personalizados. {% ifversion ghes or ghae %}Para habilitar {% data variables.product.prodname_actions %} para {% ifversion ghae %}tu empresa{% elsif ghes %} {% data variables.location.product_location %}{% endif %}, debes hospedar por lo menos un equipo para ejecutar trabajos.{% endif %} {% ifversion ghec %}Puedes hospedar tu propio equipo ejecutor para ejecutar trabajos y este{% elsif ghes or ghae %}Este{% endif %} equipo se denomina como un ejecutor auto-hospedado. {% data reusables.actions.self-hosted-runner-locations %} {% data reusables.actions.self-hosted-runner-architecture %} {% ifversion ghec %}Todos los ejecutores{% elsif ghes or ghae %}autohospedados{% endif %} pueden ejecutar Linux, Windows o macOS. Para más información, consulte [Seguridad del ejecutor autohospedado con repositorios públicos](/actions/hosting-your-own-runners/about-self-hosted-runners).

{% ifversion ghec %}

También puedes usar máquinas ejecutoras que hospeda {% data variables.product.company_short %}. En esta guía, no se abordan los ejecutores que hospeda {% data variables.product.company_short %}. Para más información, consulta "[Acerca de los ejecutores que hospeda {% data variables.product.company_short %}](/actions/using-github-hosted-runners/about-github-hosted-runners)".

{% endif %}

En esta guía, se muestra cómo puedes aplicar un enfoque de administración centralizada a los ejecutores autohospedados para {% data variables.product.prodname_actions %} en tu empresa. En la guía, completarás las tareas siguientes.

1. Configurar una directiva limitada para restringir las acciones{% ifversion actions-workflow-policy %} y los flujos de trabajo reutilizables{% endif %} que se pueden ejecutar en tu empresa
1. Implementar un ejecutor autohospedado para la empresa
1. Crear un grupo para administrar el acceso a los ejecutores que están disponibles para la empresa
1. De manera opcional, restringir aún más los repositorios que pueden utilizar el ejecutor
1. De manera opcional, crear herramientas personalizadas para escalar automáticamente los ejecutores autohospedados

También encontrarás información adicional sobre cómo supervisar y proteger los ejecutores autohospedados,{% ifversion ghes or ghae %} cómo acceder a las acciones desde {% data variables.product.prodname_dotcom_the_website %}{% endif %} y cómo personalizar el software en las máquinas ejecutoras.

Cuando finalices la guía, los {% ifversion ghec or ghae %}miembros de la empresa{% elsif ghes %}usuarios de {% data variables.location.product_location %}{% endif %} podrán ejecutar trabajos de flujo de trabajo desde {% data variables.product.prodname_actions %} en un equipo ejecutor autohospedado.

## Requisitos previos

{% data reusables.actions.self-hosted-runners-prerequisites %}

- La empresa debe ser propietaria de al menos una organización. Para más información, consulta "[Acerca de las organizaciones](/organizations/collaborating-with-groups-in-organizations/about-organizations)" y "[Creación de una organización desde cero](/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch)".

## 1. Configura directivas para {% data variables.product.prodname_actions %}

En primer lugar, habilita {% data variables.product.prodname_actions %} para todas las organizaciones y configura una directiva para restringir las acciones{% ifversion actions-workflow-policy %} y los flujos de trabajo reutilizables{% endif %} que se pueden ejecutar {% ifversion ghec or ghae%}dentro de la empresa en {% data variables.product.product_name %}{% elsif ghes %}en {% data variables.location.product_location %}{% endif %}. De manera opcional, los propietarios de las organizaciones pueden restringir aún más estas directivas para cada organización.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.actions-tab %}
1. En "Directivas", selecciona **Habilitar para todas las organizaciones**.
   
   ![Captura de pantalla de la directiva "Habilitar para todas las organizaciones" para {% data variables.product.prodname_actions %}](/assets/images/help/settings/actions-policy-enable-for-all-organizations.png)
1. Selecciona {% data reusables.actions.policy-label-for-select-actions-workflows %} y **Permitir las acciones que crea GitHub** para permitir las acciones locales{% ifversion actions-workflow-policy %} y los flujos de trabajo reutilizables{% endif %}, además de las acciones que crea {% data variables.product.company_short %}.

   {% ifversion actions-workflow-policy %} ![Captura de pantalla de "Permitir las acciones seleccionadas" y "Permitir las acciones que crea {% data variables.product.company_short %}" para {% data variables.product.prodname_actions %}](/assets/images/help/settings/actions-policy-allow-select-actions-and-actions-from-github-with-workflows.png) {%- else %} ![Captura de pantalla de "Permitir las acciones seleccionadas" y "Permitir las acciones que crea {% data variables.product.company_short %}" para {% data variables.product.prodname_actions %}](/assets/images/help/settings/actions-policy-allow-select-actions-and-actions-from-github.png) {%- endif %}
1. Haga clic en **Save**(Guardar).

Puedes configurar directivas adicionales para restringir las acciones disponibles para {% ifversion ghec or ghae %}miembros de la empresa{% elsif ghes %}usuarios de {% data variables.location.product_location %}{% endif %}. Para más información, vea "[Aplicación de directivas para {% data variables.product.prodname_actions %} en la empresa](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#allowing-select-actions-to-run)".

## 2. Implementa el ejecutor autohospedado para tu empresa

A continuación, agrega un ejecutor autohospedado a la empresa. {% data variables.product.product_name %} te guiará a través de la instalación del software necesario en la máquina ejecutora. Después de implementar el ejecutor, puedes comprobar la conectividad entre el equipo ejecutor y {%ifversion ghec or ghae %}la empresa{% elsif ghes %}{% data variables.location.product_location %}{% endif %}.

### Incorporación de un ejecutor autohospedado

{% data reusables.actions.self-hosted-runner-add-to-enterprise %}

{% data reusables.actions.self-hosted-runner-check-installation-success %}

## 3. Administra el acceso al ejecutor autohospedado mediante un grupo

Puedes crear un grupo de ejecutores para administrar el acceso al ejecutor que agregaste a la empresa. Usarás el grupo para elegir las organizaciones que pueden ejecutar trabajos desde {% data variables.product.prodname_actions %} en el ejecutor.

{% data variables.product.product_name %} agrega todos los ejecutores nuevos a un grupo. Los ejecutores solo pueden estar en un grupo a la vez. De manera predeterminada, {% data variables.product.product_name %} agrega ejecutores nuevos al grupo "Predeterminado".

{% data reusables.actions.runner-groups-add-to-enterprise-first-steps %}
1. Si deseas elegir una directiva para el acceso de la organización, en "Acceso de organización", selecciona el menú desplegable **Acceso de organización** y haz clic en **Organizaciones seleccionadas**.
1. A la derecha del menú desplegable con la directiva de acceso de organización, haz clic en {% octicon "gear" aria-label="The Gear icon" %}.
1. Selecciona las organizaciones a las que deseas conceder acceso al grupo de ejecutores.
{%- ifversion ghec or ghes %}
1. De manera opcional, para permitir repositorios públicos en las organizaciones seleccionadas para usar ejecutores en el grupo, selecciona **Permitir repositorios públicos**.

   {% warning %}

   **Advertencia**:

   {% indented_data_reference reusables.actions.self-hosted-runner-security spaces=3 %}

   Para más información, consulte [Seguridad del ejecutor autohospedado con repositorios públicos](/actions/hosting-your-own-runners/about-self-hosted-runners#self-hosted-runner-security-with-public-repositories).

   {% endwarning %} {%- endif %} {% data reusables.actions.create-runner-group %} {%- ifversion ghec or ghes > 3.3 or ghae > 3.3 %}
1. Haz clic en la pestaña "Ejecutores".
1. En la lista de ejecutores, haz clic en el ejecutor que implementaste en la sección anterior.
1. Haga clic en **Editar**.
1. Haz clic en **Grupos de ejecutores {% octicon "gear" aria-label="The Gear icon" %}** .
1. En la lista de grupos de ejecutores, haz clic en el nombre del grupo que creaste anteriormente.
1. Haz clic en **Guardar** para mover el ejecutor al grupo.
{%- elsif ghes < 3.4 or ghae %}
1. A la derecha de "Predeterminado", haz clic en el número de ejecutores en el grupo para mostrar los ejecutores.
1. Selecciona el ejecutor que implementaste.
1. A la derecha de "Grupos de ejecutores", selecciona el menú desplegable **Mover al grupo** y haz clic en el grupo que creaste anteriormente.
{%- endif %}

Implementaste un ejecutor autohospedado que puede ejecutar trabajos desde {% data variables.product.prodname_actions %} en las organizaciones que especificaste.

## 4. Restringe aún más el acceso al ejecutor autohospedado

De manera opcional, los propietarios de las organizaciones pueden restringir aún más la directiva de acceso del grupo de ejecutores que creaste. Por ejemplo, el propietario de una organización podría permitir que solo ciertos repositorios de la organización utilicen el grupo de ejecutores.

Para más información, vea "[Administración del acceso a ejecutores autohospedados mediante grupos](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#changing-the-access-policy-of-a-self-hosted-runner-group)".

## 5. Escala automáticamente los ejecutores autohospedados

De manera opcional, puedes crear herramientas personalizadas para escalar automáticamente los ejecutores autohospedados para {% ifversion ghec or ghae %}la empresa{% elsif ghes %}{% data variables.location.product_location %}{% endif %}. Por ejemplo, las herramientas pueden responder a eventos de webhook de {% data variables.location.product_location %} para escalar automáticamente un clúster de equipos ejecutores. Para obtener más información, consulte "[Escalado automático con ejecutores autohospedados](/actions/hosting-your-own-runners/autoscaling-with-self-hosted-runners)".

## Pasos siguientes

- Puedes supervisar ejecutores autohospedados y solucionar problemas comunes. Para más información, vea "[Supervisión y solución de problemas de ejecutores autohospedados](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners)".

- {% data variables.product.company_short %} te recomienda revisar las consideraciones de seguridad para las máquinas ejecutoras autohospedadas. Para obtener más información, consulte "[Protección de seguridad de {% data variables.product.prodname_actions %}](/actions/security-guides/security-hardening-for-github-actions#hardening-for-self-hosted-runners)".

- {% ifversion ghec %}Si utilizas {% data variables.product.prodname_ghe_server %} o {% data variables.product.prodname_ghe_managed %}, puedes{% elsif ghes or ghae %}Puedes{% endif %} sincronizar manualmente los repositorios de {% data variables.product.prodname_dotcom_the_website %} que contengan acciones hacia tu empresa en {% ifversion ghes or ghae %}{% data variables.product.product_name %}{% elsif ghec %}{% data variables.product.prodname_ghe_server %} o {% data variables.product.prodname_ghe_managed %}{% endif %}. De manera alternativa, puedes permitir que los miembros de la empresa accedan automáticamente a acciones de {% data variables.product.prodname_dotcom_the_website %} mediante {% data variables.product.prodname_github_connect %}. Para obtener más información, vea lo siguiente.

   {%- ifversion ghes or ghae %}
   - "[Sincronización manual de acciones de {% data variables.product.prodname_dotcom_the_website %}](/admin/github-actions/managing-access-to-actions-from-githubcom/manually-syncing-actions-from-githubcom)"
   - "[Habilitación del acceso automático a las acciones de {% data variables.product.prodname_dotcom_the_website %} mediante {% data variables.product.prodname_github_connect %}](/admin/github-actions/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect)" {%- elsif ghec %}
   - "Sincronización manual de acciones de {% data variables.product.prodname_dotcom_the_website %}" en la documentación de [{% data variables.product.prodname_ghe_server %}](/enterprise-server@latest//admin/github-actions/managing-access-to-actions-from-githubcom/manually-syncing-actions-from-githubcom) o de [{% data variables.product.prodname_ghe_managed %}](/github-ae@latest//admin/github-actions/managing-access-to-actions-from-githubcom/manually-syncing-actions-from-githubcom)
   - "Habilitación del acceso automático a acciones de {% data variables.product.prodname_dotcom_the_website %} mediante {% data variables.product.prodname_github_connect %}" en la documentación de [{% data variables.product.prodname_ghe_server %}](/enterprise-server@latest/admin/github-actions/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect) o de [{% data variables.product.prodname_ghe_managed %}](/github-ae@latest//admin/github-actions/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect){%- endif %}

- Puedes personalizar el software disponible en las máquinas ejecutoras autohospedadas, o bien configurar los ejecutores para que ejecuten software similar a los ejecutores que hospeda {% data variables.product.company_short %}{% ifversion ghes or ghae %} disponibles para los clientes que utilizan {% data variables.product.prodname_dotcom_the_website %}{% endif %}. El software que impulsa las máquinas ejecutoras para {% data variables.product.prodname_actions %} es de código abierto. Para más información, consulta los repositorios [`actions/runner`](https://github.com/actions/runner) y [`actions/runner-images`](https://github.com/actions/runner-images).

## Información adicional

- "[Configuración de la aplicación ejecutora autohospedada como servicio](/actions/hosting-your-own-runners/configuring-the-self-hosted-runner-application-as-a-service)"
- "[Uso de los ejecutores autohospedados en un flujo de trabajo](/actions/hosting-your-own-runners/using-self-hosted-runners-in-a-workflow)"
