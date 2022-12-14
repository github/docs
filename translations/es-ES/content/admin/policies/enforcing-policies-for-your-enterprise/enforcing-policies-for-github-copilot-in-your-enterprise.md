---
title: Aplicación de directivas de GitHub Copilot en tu empresa
intro: 'Puedes aplicar directivas de {% data variables.product.prodname_copilot_for_business %} dentro de las organizaciones de tu empresa o permitir que puedan configurarse directivas en cada organización.'
permissions: 'Enterprise owners can enforce policies for {% data variables.product.prodname_copilot_for_business %} in an enterprise.'
product: '{% data reusables.gated-features.copilot-billing %}'
versions:
  ghec: '*'
type: how_to
topics:
  - Copilot
  - Enterprise
  - Organizations
  - Policies
shortTitle: GitHub Copilot policies
ms.openlocfilehash: f87fa318a6390c9e254c3c115638325b8bfc474a
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193441'
---
## Acerca de las directivas de {% data variables.product.prodname_copilot %} en la empresa

{% data reusables.copilot.about-copilot %}

Puedes aplicar directivas de {% data variables.product.prodname_copilot_for_business %} dentro de las organizaciones de tu empresa o permitir que puedan configurarse directivas en cada organización. 

Si configuras una suscripción de {% data variables.product.prodname_copilot_for_business %}, puedes conceder y revocar el acceso a {% data variables.product.prodname_copilot %} a organizaciones de tu empresa. Cuando se concede acceso a una organización a {% data variables.product.prodname_copilot %}, los administradores de esa organización pueden conceder acceso a sus usuarios y equipos. Para obtener más información, consulta [Configuración de {% data variables.product.prodname_copilot %} en tu organización](/copilot/configuring-github-copilot/configuring-github-copilot-settings-in-your-organization).

Las suscripciones de {% data variables.product.prodname_copilot_for_business %} se facturan mensualmente en función del número de puestos de {% data variables.product.prodname_copilot %} asignados a los usuarios de la empresa. Para obtener más información, consulta [Precios de {% data variables.product.prodname_copilot %} para {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/billing/managing-billing-for-github-copilot/about-billing-for-github-copilot#github-copilot-pricing-for-github-enterprise-cloud).

En {% data variables.product.prodname_copilot %} se incluye un filtro que detecta sugerencias de código que coinciden con el código público en {% data variables.product.prodname_dotcom %}. {% data variables.product.prodname_copilot_for_business %} te permite elegir si habilitar o deshabilitar el filtro en el nivel de empresa, o permitir que los administradores de una organización decidan esto en el nivel de organización Cuando el filtro está habilitado, {% data variables.product.prodname_copilot %} comprueba las sugerencias de código con su código circundante de aproximadamente 150 caracteres en el código público de los datos {% data variables.product.prodname_dotcom %}. Si hay una coincidencia o una coincidencia aproximada, la sugerencia no se mostrará.

## Aplicación de una directiva para administrar el uso de {% data variables.product.prodname_copilot_for_business %} en la empresa 

{% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.copilot-tab %}
1. En "Administrar el acceso de la organización a {% data variables.product.prodname_copilot %}", configure el acceso de tu suscripción de {% data variables.product.prodname_copilot %}. 
    - Para deshabilitar {% data variables.product.prodname_copilot %} en todas las organizaciones de tu empresa, selecciona **Deshabilitado**.
    - Para habilitar {% data variables.product.prodname_copilot %} en todas las organizaciones de tu empresa, tanto actuales como futuras, selecciona **Permitir en todas las organizaciones**.
    - Para habilitar {% data variables.product.prodname_copilot %} en organizaciones concretas, selecciona **Permitir en organizaciones específicas**.
    
    ![Captura de pantalla de las opciones de configuración de acceso de la organización de {% data variables.product.prodname_copilot %}](/assets/images/help/copilot/manage-org-access-enterprise.png)
    
1. Si has seleccionado **Permitir en organizaciones específicas**, selecciona las organizaciones en las que quieras habilitar {% data variables.product.prodname_copilot %}. También puedes seleccionar las organizaciones en las que quieras deshabilitar el acceso a {% data variables.product.prodname_copilot %}.
    - Haz clic en **Establecer permisos de organización** y selecciona **Habilitar** o **Deshabilitar** para conceder o denegar el acceso a {% data variables.product.prodname_copilot %} a las organizaciones especificadas.

    ![Captura de pantalla de la configuración de permisos habilitados o deshabilitados de {% data variables.product.prodname_copilot %}](/assets/images/help/copilot/set-org-permissions-enterprise.png)
   
1. Haga clic en **Guardar cambios**.
  
   ![Captura de pantalla de la opción para guardar los permisos de la organización de {% data variables.product.prodname_copilot %}](/assets/images/help/copilot/save-org-settings-enterprise.png)

## Aplicación de una directiva para administrar el uso de sugerencias de {% data variables.product.prodname_copilot %} que coinciden con código público de tu empresa

{% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.copilot-tab %}
1. En "Sugerencias que coinciden con código público", haz clic en el menú desplegable y selecciona la directiva que quieras aplicar.
    - Para permitir las sugerencias de {% data variables.product.prodname_copilot %} que coinciden con código público, selecciona **Permitido**.
    - Para bloquear las sugerencias de {% data variables.product.prodname_copilot %} que coinciden con código público, selecciona **Bloqueado**.
    - Para permitir que cada una de las organizaciones establezca su propia directiva de uso de sugerencias de {% data variables.product.prodname_copilot %} que coinciden con código público, selecciona **Sin directiva (dejar que cada organización decida)** .
    
    ![Captura de pantalla de configuración de sugerencias de {% data variables.product.prodname_copilot %} que coinciden con código público](/assets/images/help/copilot/duplication-detection-enterprise-dropdown.png)

## Información adicional

- [Declaración de privacidad de {% data variables.product.prodname_copilot_for_business %}](/free-pro-team@latest/site-policy/privacy-policies/github-copilot-for-business-privacy-statement)
