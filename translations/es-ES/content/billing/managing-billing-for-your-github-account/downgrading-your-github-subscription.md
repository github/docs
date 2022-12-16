---
title: Bajar de categoría tu suscripción de GitHub
intro: 'Puedes bajar tu suscripción de nivel en cualquier tipo de cuenta de {% data variables.location.product_location %} y en cualquier momento.'
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/downgrading-your-github-subscription
  - /articles/downgrading-your-personal-account-s-billing-plan
  - /articles/how-do-i-cancel-my-account
  - /articles/downgrading-a-user-account-to-free
  - /articles/removing-paid-seats-from-your-organization
  - /articles/downgrading-your-organization-s-paid-seats
  - /articles/downgrading-your-organization-s-billing-plan
  - /articles/downgrading-an-organization-with-per-seat-pricing-to-free
  - /articles/downgrading-an-organization-with-per-repository-pricing-to-free
  - /articles/downgrading-your-organization-to-free
  - /articles/downgrading-your-organization-from-the-business-plan-to-the-team-plan
  - /articles/downgrading-your-organization-from-github-business-cloud-to-the-team-plan
  - /articles/downgrading-your-github-billing-plan
  - /articles/downgrading-your-github-subscription
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-your-github-account/downgrading-your-github-subscription
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Accounts
  - Downgrades
  - Organizations
  - Repositories
  - User account
shortTitle: Downgrade subscription
ms.openlocfilehash: e302fb715fc2937c7ed056b813b073a66a7cc1fa
ms.sourcegitcommit: fdc4466e89467a7b13239e26c6042dc1428946b6
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/14/2022
ms.locfileid: '148163788'
---
## Bajar de nivel tu suscripción de {% data variables.product.product_name %}

Cuando bajas de nivel tu suscripción de cuenta personal o de organización, los cambios de precios y características toman efecto en la fecha de facturación siguiente. Los cambios a tu suscripción de cuenta personal u organización no afectan a las suscripciones o pagos de otras características pagadas de {% data variables.product.prodname_dotcom %}. Para obtener más información, consulte "[¿Cómo afecta el cambio a una categoría inferior o superior al proceso de facturación?](/articles/how-does-upgrading-or-downgrading-affect-the-billing-process)".

## Bajar de categoría la suscripción de tu cuenta personal

Si bajas de nivel tu cuenta personal desde {% data variables.product.prodname_pro %} a {% data variables.product.prodname_free_user %}, ésta perderá acceso a las herramientas avanzadas de revisión de código en los repositorios privados. {% data reusables.gated-features.more-info %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.billing_plans %}
1. En "Current plan", use la lista desplegable **Edit** y haga clic en **Downgrade to Free**.
  ![Botón Downgrade to free](/assets/images/help/billing/downgrade-to-free.png)
5. Lee la información sobre las características a las que tu cuenta personal ya no tendrá acceso en la próxima fecha de facturación y, después, haz clic en **Entiendo. Continuar para bajar de nivel**.
  ![Botón para continuar con el cambio a una categoría inferior](/assets/images/help/billing/continue-with-downgrade.png)

Si publicaste un sitio de {% data variables.product.prodname_pages %} en un repositorio privado y añadiste un dominio personalizado, retira o actualiza tus registros de DNS antes de bajarlo de nivel desde {% data variables.product.prodname_pro %} a {% data variables.product.prodname_free_user %}, para evitar el riesgo de que te ganen el dominio. Para obtener más información, consulte "[Administración de un dominio personalizado para el sitio de {% data variables.product.prodname_pages %}](/articles/managing-a-custom-domain-for-your-github-pages-site)".

## Bajar de nivel tu suscripción de orgnización

{% data reusables.dotcom_billing.org-billing-perms %}

Si bajas tu organización de nivel desde {% data variables.product.prodname_team %} a {% data variables.product.prodname_free_team %} para organizaciones, la cuenta perderá acceso a las herramientas de administración y colaboración para equipos.

Si bajas a tu organización de nivel desde {% data variables.product.prodname_ghe_cloud %} a {% data variables.product.prodname_team %} o {% data variables.product.prodname_free_team %}, la cuenta perderá acceso a los controles avanzados de seguridad, cumplimiento y despliegue. {% data reusables.gated-features.more-info %}



{% note %}

**Notas:** 
  - Si tu organización pertenece a una cuenta empresarial, la facturación no se podrá administrar en el nivel de la organización. Para bajar de categoría, primero debes quitar la organización de la cuenta de empresa. Para obtener más información, consulta "[Eliminación de las organizaciones de tu empresa](/enterprise-cloud@latest/admin/user-management/managing-organizations-in-your-enterprise/removing-organizations-from-your-enterprise)".
  - Si actualmente estás probando {% data variables.product.prodname_ghe_cloud %} y no compras {% data variables.product.prodname_enterprise %} antes de que termine la evaluación gratuita, la organización bajará de categoría automáticamente a {% data variables.product.prodname_free_team %} o a {% data variables.product.prodname_team %}. Para obtener más información, consulte "[Configuración de una evaluación gratuita de {% data variables.product.prodname_ghe_cloud %}](/get-started/signing-up-for-github/setting-up-a-trial-of-github-enterprise-cloud#finishing-your-trial)".

{% endnote %}

{% data reusables.organizations.billing-settings %}
1. En "Current plan", use la lista desplegable **Edit** y haga clic en la opción de disminución de categoría que desee.
  ![Downgrade button](/assets/images/help/billing/downgrade-option-button.png) {% data reusables.dotcom_billing.confirm_cancel_org_plan %}

## Bajar de nivel la suscripción de una organización con precios tradicionales por repositorio

{% data reusables.dotcom_billing.org-billing-perms %}

{% data reusables.dotcom_billing.switch-legacy-billing %} Para obtener más información, consulte "[Cambiar la organización de una tarifa por repositorios a una tarifa por usuarios](/billing/managing-billing-for-your-github-account/upgrading-your-github-subscription#switching-your-organization-from-per-repository-to-per-user-pricing)."

{% data reusables.organizations.billing-settings %}
5. En "Subscriptions", seleccione la lista desplegable "Edit" y haga clic en **Edit plan**.
    ![Menú desplegable Edit Plan](/assets/images/help/billing/edit-plan-dropdown.png)
1. En "Billing/Plans", junto al plan que desea cambiar, haga clic en **Downgrade**.
    ![Botón Downgrade](/assets/images/help/billing/downgrade-plan-option-button.png)
1. Escriba el motivo por el que va a disminuir la categoría de su cuenta y, a continuación, haga clic en **Downgrade plan**.
    ![Cuadro de texto para escribir el motivo de la disminución de categoría y botón Downgrade](/assets/images/help/billing/downgrade-plan-button.png)

## Eliminar asientos pagos de tu organización

Para reducir el número de asientos pagos que usa tu organización, puedes eliminar miembros de tu organización o convertirlos en colaboradores externos y darles acceso únicamente a los repositorios públicos. Para más información, consulte:
- "[Eliminar a un miembro de la organización](/articles/removing-a-member-from-your-organization)"
- "[Convertir un miembro de la organización en un colaborador externo](/articles/converting-an-organization-member-to-an-outside-collaborator)"
- "[Administración del acceso de un individuo a un repositorio de la organización](/articles/managing-an-individual-s-access-to-an-organization-repository)"

{% data reusables.organizations.billing-settings %}
1. En "Current plan", use la lista desplegable **Edit** y haga clic en **Remove seats**.
  ![menú desplegable remove seats](/assets/images/help/billing/remove-seats-dropdown.png)
1. En "Eliminar asientos" selecciona el número de asientos pagos de la categoría a la que deseas bajar.
  ![opción remove seats](/assets/images/help/billing/remove-seats-amount.png)
1. Revise la información sobre el nuevo pago en la siguiente fecha de facturación y, a continuación, haga clic en **Remove seats**.
  ![botón remove seats](/assets/images/help/billing/remove-seats-button.png)

## Información adicional

- "[Productos de {% data variables.product.prodname_dotcom %}](/articles/github-s-products)"
- "[¿Cómo afecta el cambio a una versión posterior o anterior al proceso de facturación?](/articles/how-does-upgrading-or-downgrading-affect-the-billing-process)"
- "[Acerca de la facturación en {% data variables.product.prodname_dotcom %}](/articles/about-billing-on-github)"
- "[Acerca de los precios por usuario](/articles/about-per-user-pricing)"
