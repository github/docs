---
title: Descargar tu licencia de GitHub Enterprise
intro: 'Puedes descargar una copia de tu archivo de licencia para {% data variables.product.prodname_ghe_server %}.'
permissions: 'Enterprise owners can download license files for {% data variables.product.prodname_ghe_server %}.'
versions:
  ghec: '*'
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Licensing
shortTitle: Download your license
ms.openlocfilehash: eed588e2580558280e2e11639f0904b5f9fcf118
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '145091609'
---
## Acerca de los archivos de licencia para {% data variables.product.prodname_enterprise %}

Después de comprar o mejorar una licencia de {% data variables.product.prodname_enterprise %} desde {% data variables.contact.contact_enterprise_sales %}, debes descargar tu archivo de licencia nuevo. Para más información sobre las licencias de {% data variables.product.prodname_enterprise %}, vea "[Acerca de las licencias de {% data variables.product.prodname_enterprise %}](/billing/managing-your-license-for-github-enterprise/about-licenses-for-github-enterprise)".

{% data reusables.enterprise-licensing.contact-sales-for-renewals-or-seats %}

## Descargar tu licencia desde {% data variables.product.prodname_dotcom_the_website %}

Debes tener una cuenta empresarial en {% data variables.product.prodname_dotcom_the_website %} para descargar tu licencia de {% data variables.product.prodname_dotcom_the_website %}. Para más información, vea "[Acerca de las cuentas de empresa](/enterprise-cloud@latest/admin/overview/about-enterprise-accounts){% ifversion ghes %}" en la documentación de {% data variables.product.prodname_ghe_cloud %}.{% elsif ghec %}".{% endif %}

{% data reusables.enterprise-accounts.access-enterprise-on-dotcom %} {% data reusables.enterprise-accounts.settings-tab %}
1. En la barra lateral izquierda, haga clic en **Licencias de empresa**.
  ![Pestaña "Licencias de empresa" en la barra lateral de configuración de la cuenta de empresa](/assets/images/help/enterprises/enterprise-licensing-tab.png)
1. En "Instancias de Enterprise Server", haga clic en {% octicon "download" aria-label="The download icon" %} para descargar el archivo de licencia.
  ![Descarga de la licencia de GitHub Enterprise Server](/assets/images/help/business-accounts/download-ghes-license.png)

Después de que descargas tu archivo de licencia, puedes cargar el archivo a {% data variables.product.product_location_enterprise %} para validar tu aplicación. Para más información, vea {% ifversion ghec %}"[Carga de una nueva licencia a {% data variables.product.prodname_ghe_server %}](/enterprise-server/billing/managing-your-license-for-github-enterprise/uploading-a-new-license-to-github-enterprise-server)" en la documentación de {% data variables.product.prodname_ghe_server %}.{% elsif ghes %}"[Carga de una nueva licencia a {% data variables.product.prodname_ghe_server %}](/enterprise-server/billing/managing-your-license-for-github-enterprise/uploading-a-new-license-to-github-enterprise-server)".{% endif %}

## Descargar tu licencia si no tienes una cuenta empresarial en {% data variables.product.prodname_dotcom_the_website %}

Si no tiene una cuenta de empresa en {% data variables.product.prodname_dotcom_the_website %}, o bien si no está seguro de ello, puede descargar la licencia de {% data variables.product.prodname_ghe_server %} en el [sitio web de {% data variables.product.prodname_enterprise %}](https://enterprise.github.com/download).

Si tienes cualquier pregunta sobre cómo descargar tu licencia, contacta a {% data variables.contact.contact_enterprise_sales %}.
