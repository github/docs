---
title: Visualización del uso de GitHub Codespaces
shortTitle: Viewing your usage
intro: 'Puedes ver las horas de proceso y almacenamiento que utilizan los {% data variables.product.prodname_github_codespaces %}.'
versions:
  fpt: '*'
  ghec: '*'
type: overview
topics:
  - Codespaces
  - Billing
redirect_from:
  - /billing/managing-billing-for-github-codespaces/viewing-your-codespaces-usage
ms.openlocfilehash: 67e29ee71b1881ee2ae6e9ca872fd7969f86afca
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158745'
---
## Visualización del uso de {% data variables.product.prodname_github_codespaces %} para la cuenta personal

Puedes ver la cantidad de uso incluida en su cuenta personal que has usado hasta ahora en el ciclo de facturación mensual actual. Si has configurado un método de pago, establecido un límite de gasto y has usado todo el uso incluido, también puedes comprobar la factura del mes actual.

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.billing_plans %}
1. En "{% data variables.product.prodname_codespaces %}", puedes ver cuántas horas del uso de núcleo del proceso de {% data variables.product.prodname_github_codespaces %} y los GB-meses de almacenamiento que has usado hasta ahora en el mes de facturación actual.

   ![Captura de pantalla de la vista inicial del uso personal](/assets/images/help/codespaces/view-personal-usage-collapsed.png)

   Para obtener información sobre "horas del uso de núcleos" y "GB-meses", consulta "[Acerca de la facturación de {% data variables.product.prodname_github_codespaces %}](/enterprise-cloud@latest/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces)".

1. Opcionalmente, haz clic en **Horas de uso** y **Almacenamiento** para ver más detalles.

   ![Captura de pantalla de la vista expandida del uso personal](/assets/images/help/codespaces/view-personal-usage-expanded.png)

   En la columna **Incluido** se muestra el número de horas de uso de núcleos de proceso, o GB-meses de almacenamiento, incluidos gratis con tu cuenta, que has usado hasta ahora. La columna **Pago** muestra cuántas horas de uso de núcleo facturadas o GB-meses de almacenamiento has usado. Las cifras actualizan una vez cada hora.

   En la captura de pantalla anterior, se ha usado toda la cuota de almacenamiento incluido para el mes. Cuando hayas usado todo el uso de proceso o el almacenamiento incluidos (lo que se alcance primero), debes configurar un método de pago y un límite de gasto para seguir usando {% data variables.product.prodname_github_codespaces %} durante el mes de facturación actual. Para obtener más información, consulta "[Adición o edición de un método de pago](/enterprise-cloud@latest/billing/managing-your-github-billing-settings/adding-or-editing-a-payment-method)" y "[Administración de límites de gasto de {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/managing-the-spending-limit-for-github-codespaces#managing-the-github-codespaces-spending-limit-for-your-personal-account)".

{% data reusables.codespaces.usage-report-download %}

## Visualización del uso de {% data variables.product.prodname_github_codespaces %} para la cuenta de la organización

Los propietarios de la organización y los administradores de facturación pueden ver el uso de {% data variables.product.prodname_github_codespaces %} de la organización.

{% data reusables.organizations.billing-settings %}
1. En "{% data variables.product.prodname_codespaces %}", consulta los detalles de las horas de proceso y el almacenamiento usados hasta ahora.

   ![Captura de pantalla de los detalles de uso y almacenamiento de proceso](/assets/images/help/billing/codespaces-compute-storage.png)

   También puedes ver y actualizar el límite de gasto actual. Para más información, consulta "[Administración de los límites de gasto para {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/managing-the-spending-limit-for-github-codespaces)".

   {% note %}

   **Notas**: 
   * Los costos que se muestran aquí son los costos acumulados en el periodo de facturación mensual actual. Los costos medidos de {% data variables.product.prodname_github_codespaces %} que se muestran en esta página se restablecen a cero al principio de cada periodo de facturación mensual. Los costos pendientes de los meses anteriores no se muestran.
   * Las cifras de esta página se actualizan cada hora.

   {% endnote %}

{% data reusables.codespaces.usage-report-download %}

{% ifversion ghec %}
## Visualización del uso de {% data variables.product.prodname_codespaces %} para la cuenta de empresa

Los propietarios de empresas y los administradores de facturación pueden ver el uso de {% data variables.product.prodname_github_codespaces %} para una cuenta de empresa.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.billing-tab %}
1. En "Uso mensual de {% data variables.product.prodname_codespaces %}", puedes ver los detalles de uso de cada organización en tu cuenta empresarial.
{% data reusables.codespaces.usage-report-download %} {% endif %}

## Información adicional

- "[Enumeración de codespaces en la organización](/codespaces/managing-codespaces-for-your-organization/listing-the-codespaces-in-your-organization)"
