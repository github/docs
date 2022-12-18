---
title: Administración del límite de gasto para GitHub Codespaces
intro: 'Puedes configurar un límite de gastos para el uso de {% data variables.product.prodname_github_codespaces %}.'
shortTitle: Spending limit
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Enterprise
  - Organizations
  - Spending limits
  - User account
  - Billing
redirect_from:
  - /billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces
  - /billing/managing-billing-for-github-codespaces/managing-spending-limits-for-github-codespaces
ms.openlocfilehash: 87dd5204bb41ddaef911562cfb4662125e04139a
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/09/2022
ms.locfileid: '148160360'
---
## Acerca del límite de gasto de {% data variables.product.prodname_github_codespaces %}

{% data reusables.codespaces.codespaces-free-for-personal-intro %} Para obtener más información, consulta "[Acerca de la facturación de {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces)".

{% data reusables.codespaces.codespaces-spending-limit-requirement %} {% data reusables.codespaces.codespaces-monthly-billing %} 

Una vez que hayas llegado a tu límite de gasto, ya no podrás crear codespaces ni tampoco iniciar los existentes. Los codespaces existentes que todavía se estén ejecutando se apagarán en breve, pero no se te cobrará por el uso después de haber alcanzado el límite de gasto.

{% ifversion ghec %}
## Utilizar tu suscripción de Azure
Si compraste {% data variables.product.prodname_enterprise %} mediante un Contrato Enterprise de Microsoft, puedes conectar tu ID de Suscripción de Azure a tu cuenta empresarial para habilitar y pagar por el uso de {% data variables.product.prodname_github_codespaces %}. Para más información, vea "[Conexión de una suscripción de Azure a la empresa](/billing/managing-billing-for-your-github-account/connecting-an-azure-subscription-to-your-enterprise)".
{% endif %}

## Administración del límite de gasto de {% data variables.product.prodname_github_codespaces %} para tu cuenta personal

Puedes establecer un límite de gasto de {% data variables.product.prodname_github_codespaces %} para tu propia cuenta personal.

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.billing_plans %} {% data reusables.dotcom_billing.manage-spending-limit %} {% data reusables.codespaces.monthly-spending-limit-codespaces %} {% data reusables.dotcom_billing.update-spending-limit %}

## Administración del límite de gasto de {% data variables.product.prodname_github_codespaces %} para la cuenta de la organización

Los propietarios de las organizaciones y los administradores de facturación pueden administrar el límite de gasto de {% data variables.product.prodname_github_codespaces %} para una organización.

{% note %}

**Nota**: Las organizaciones que pertenecen a una cuenta empresarial no pueden especificar su propio límite de gasto, ya que este se especifica en la configuración de la empresa.

{% endnote %}

{% data reusables.organizations.billing-settings %} {% data reusables.dotcom_billing.manage-spending-limit %} {% data reusables.codespaces.monthly-spending-limit-codespaces %} {% data reusables.dotcom_billing.update-spending-limit %}

{% ifversion ghec %}
## Administración del límite de gasto de {% data variables.product.prodname_github_codespaces %} para la cuenta empresarial

Los propietarios de empresas y los gerentes de facturación pueden administrar el límite de gasto de {% data variables.product.prodname_github_codespaces %} para una cuenta empresarial.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.billing-tab %}
1. Haz clic en **Límite de gasto**.

   ![Pestaña Límite de gasto](/assets/images/help/settings/spending-limit-tab-enterprise.png)

{% data reusables.codespaces.monthly-spending-limit-codespaces %} {% data reusables.dotcom_billing.update-spending-limit %} {% endif %}

## Exportar cambios cuando llegaste a tu límite de gastos

{% data reusables.codespaces.exporting-changes %}

## Administrar las notificaciones de uso y límite de gastos

Las notificaciones por correo electrónico se envían a los propietarios de las cuentas y gerentes de facturación cuando el límite de gasto llega al 75 %, 90 % y 100% del límite de gasto de una cuenta. 

Para desactivar estas notificaciones en cualquier momento, ves a la parte inferior de la página "Facturación & planes/Límites de gasto mensual" y desactiva la casilla **Alertas de límites de gasto**.

Solo para cuentas personales, también puedes optar por desactivar las notificaciones por correo electrónico que se envían cuando hayas usado el 75 %, el 90 % y el 100 % del uso gratuito incluido en tu cuenta personal. Para ello, desactiva la casilla **Alertas de recursos incluidos**.

![Captura de pantalla de los ajustes de notificaciones de facturación por correo electrónico](/assets/images/help/codespaces/codespaces-spending-limit-notifications.png)

## Lecturas adicionales

- "[Restricción del acceso a los tipos de máquina](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types)"
- "[Administración del costo para {% data variables.product.prodname_github_codespaces %} en la organización](/codespaces/managing-codespaces-for-your-organization/managing-the-cost-of-github-codespaces-in-your-organization)"
