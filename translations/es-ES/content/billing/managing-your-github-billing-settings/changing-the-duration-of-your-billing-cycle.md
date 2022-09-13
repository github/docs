---
title: Cambiar la duración de tu ciclo de facturación
intro: Puedes pagar la suscripción de tu cuenta y otras características y productos remunerados en un ciclo de facturación mensual o anual.
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/changing-the-duration-of-your-billing-cycle
  - /articles/monthly-and-yearly-billing
  - /articles/switching-between-monthly-and-yearly-billing-for-your-personal-account
  - /articles/switching-between-monthly-and-yearly-billing-for-your-organization
  - /articles/changing-the-duration-of-your-billing-cycle
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-your-github-billing-settings/changing-the-duration-of-your-billing-cycle
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Organizations
  - Repositories
  - User account
shortTitle: Billing cycle
ms.openlocfilehash: 164b0192f1b055b95ad83fc2845e9af59058b6a7
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '145091627'
---
Al cambiar la duración de tu ciclo de facturación, tu suscripción a {% data variables.product.prodname_dotcom %}, junto con otras características y productos remunerados, se moverán al nuevo ciclo de facturación en tu próxima fecha de facturación.

## Cambiar la duración del ciclo de facturación de tu cuenta personal

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.billing_plans %} {% data reusables.dotcom_billing.change_plan_duration %} {% data reusables.dotcom_billing.confirm_duration_change %}

## Cambiar la duración del ciclo de facturación de tu organización

{% data reusables.dotcom_billing.org-billing-perms %}

### Cambiar la duración de una suscripción por usuario

{% data reusables.organizations.billing-settings %} {% data reusables.dotcom_billing.change_plan_duration %} {% data reusables.dotcom_billing.confirm_duration_change %}

### Cambiar la duración de un plan heredado por repositorio

{% data reusables.organizations.billing-settings %}
4. En "Información general de facturación", haga clic en **Cambiar plan**.
  ![Botón para cambiar el plan del resumen de facturación](/assets/images/help/billing/billing_overview_change_plan.png)
5. En la esquina superior derecha, haga clic en **Cambiar a facturación mensual** o **Cambiar a facturación anual**.
  ![Sección de información de facturación](/assets/images/help/billing/settings_billing_organization_plans_switch_to_yearly.png)
