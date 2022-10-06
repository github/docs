---
title: "Implementación de GitHub\_AE"
intro: 'Puedes implementar {% data variables.product.product_name %} en una región de Azure.'
versions:
  ghae: '*'
topics:
  - Accounts
  - Enterprise
type: how_to
shortTitle: Deploy GitHub AE
redirect_from:
  - /get-started/signing-up-for-github/setting-up-a-trial-of-github-ae
ms.openlocfilehash: af6def26a15a1ccad2625677d9db57b2a1907850
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/09/2022
ms.locfileid: '147614371'
---
## Acerca de la implementación de {% data variables.product.product_name %}

{% data reusables.github-ae.github-ae-enables-you %} Para más información, vea "[Acerca de {% data variables.product.prodname_ghe_managed %}](/admin/overview/about-github-ae)".

Después de comprar o iniciar una prueba de {% data variables.product.product_name %}, puede implementar {% data variables.product.product_name %} en una región de Azure disponible. En esta guía se hace referencia al recurso de Azure que contiene la implementación de {% data variables.product.product_name %} como cuenta de {% data variables.product.product_name %}. Usará Azure Portal en [https://portal.azure.com](https://portal.azure.com) para implementar la cuenta de {% data variables.product.product_name %}.

## Prerrequisitos

Debe tener permiso a fin de realizar la operación `/register/action` para el proveedor de recursos en Azure. El permiso se incluye en los roles `Contributor` y `Owner`. Para más información, vea [Tipos y proveedores de recursos de Azure](https://docs.microsoft.com/en-us/azure/azure-resource-manager/management/resource-providers-and-types#register-resource-provider) en la documentación de Microsoft.

## Implementación de {% data variables.product.product_name %} con {% data variables.actions.azure_portal %}

{% data variables.actions.azure_portal %} le permite implementar la cuenta de {% data variables.product.product_name %} en el grupo de recursos de Azure.

1. Haga clic en uno de los dos vínculos siguientes para comenzar la implementación de {% data variables.product.product_name %}. El vínculo que use depende de la nube de Azure en la que planea implementar {% data variables.product.product_name %}. Para más información sobre Azure Government, vea [¿Qué es Azure Government?](https://docs.microsoft.com/en-us/azure/azure-government/documentation-government-welcome) en la documentación de Microsoft.
   
   - [Implementación de {% data variables.product.product_name %} en Azure Commercial](https://aka.ms/create-github-ae-instance)
   - [Implementación de {% data variables.product.product_name %} en Azure Government](https://aka.ms/create-github-ae-instance-gov)
1. Para comenzar el proceso de agregar una cuenta nueva de {% data variables.product.product_name %}, haga clic en **Crear cuenta de GitHub AE**.
1. Complete los campos "Detalles del proyecto" y "Detalles de la instancia".
    ![Resultado de la búsqueda de {% data variables.actions.azure_portal %}](/assets/images/azure/github-ae-azure-portal-form.png)
    - **Nombre de cuenta:** nombre de host de la empresa
    - **Nombre de usuario del administrador:** nombre de usuario del propietario inicial de la empresa que se creará en {% data variables.product.product_name %}
    - **Correo electrónico del administrador:** dirección de correo electrónico que recibirá la información de inicio de sesión.
1. Para revisar un resumen de los cambios propuestos, haga clic en **Revisar y crear**.
1. Una vez que se complete el proceso de validación, haga clic en **Crear**.

En la dirección de correo electrónico que ha escrito antes recibirá instrucciones sobre cómo acceder a la empresa. Después de tener acceso, puede empezar mediante los pasos de configuración iniciales. Para más información, vea "[Inicialización de {% data variables.product.product_name %}](/admin/configuration/initializing-github-ae)".

{% note %}

**Nota:** Las actualizaciones de software para la implementación de {% data variables.product.product_name %} se realizan mediante {% data variables.product.prodname_dotcom %}. Para más información, vea "[Acerca de las actualizaciones a nuevas versiones](/admin/overview/about-upgrades-to-new-releases)".

{% endnote %}

## Navegación a la empresa

Puede usar {% data variables.actions.azure_portal %} para ir a la implementación de {% data variables.product.product_name %}. En la lista resultante se incluyen todas las implementaciones de {% data variables.product.product_name %} en la región de Azure.

1. En el panel izquierdo de {% data variables.actions.azure_portal %}, haga clic en **Todos los recursos**.
1. En los filtros disponibles, haga clic en **Todos los tipos** y, después, anule la selección de **Seleccionar todo** y seleccione **GitHub AE**: ![Resultado de la búsqueda de {% data variables.actions.azure_portal %}](/assets/images/azure/github-ae-azure-portal-type-filter.png)

## Pasos siguientes

- Una vez que se aprovisione la implementación, el siguiente paso consiste en inicializar {% data variables.product.product_name %}. Para más información, vea "[Inicialización de {% data variables.product.product_name %}](/github-ae@latest/admin/configuration/configuring-your-enterprise/initializing-github-ae)".
- Si va a probar {% data variables.product.product_name %}, puede actualizar a una licencia completa en cualquier momento durante el período de prueba si se pone en contacto con {% data variables.contact.contact_enterprise_sales %}. Si el último día de la prueba todavía no ha realiza la actualización, la implementación se elimina de forma automática. Si necesita más tiempo para evaluar {% data variables.product.product_name %}, póngase en contacto con {% data variables.contact.contact_enterprise_sales %} para solicitar una extensión.

## Información adicional 

- "[Habilitación de las características de {% data variables.product.prodname_advanced_security %} en {% data variables.product.product_name %}](/github/getting-started-with-github/about-github-advanced-security#enabling-advanced-security-features-on-github-ae)"
- "[Notas de la versión de {% data variables.product.product_name %}](/github-ae@latest/admin/overview/github-ae-release-notes)" 
