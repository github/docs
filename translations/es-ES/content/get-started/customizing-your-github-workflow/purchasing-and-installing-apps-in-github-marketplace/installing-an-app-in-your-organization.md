---
title: Instalar una app en tu organización
intro: 'Puedes instalar apps desde {% data variables.product.prodname_marketplace %} para utilizar en tu organización.'
redirect_from:
  - /articles/installing-an-app-in-your-organization
  - /github/customizing-your-github-workflow/installing-an-app-in-your-organization
  - /github/customizing-your-github-workflow/purchasing-and-installing-apps-in-github-marketplace/installing-an-app-in-your-organization
versions:
  fpt: '*'
  ghec: '*'
shortTitle: Install app organization
ms.openlocfilehash: bf64ee38839197262852d07c024c72a0742d0e6e
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '145119482'
---
{% data reusables.marketplace.marketplace-apps-only %}

{% data reusables.marketplace.marketplace-org-perms %}

Si eliges un plan pago, pagarás tu suscripción a la app en la fecha de facturación actual de tu organización usando el método de pago existente de tu organización.

{% data reusables.marketplace.free-trials %}

## Instalar una {% data variables.product.prodname_github_app %} en tu organización

{% data reusables.marketplace.visit-marketplace %} {% data reusables.marketplace.browse-to-app %} {% data reusables.marketplace.choose-plan %} {% data reusables.marketplace.install-buy %} {% data reusables.marketplace.confirm-install-account-org %} {% data reusables.marketplace.add-payment-method-org %} {% data reusables.marketplace.complete-order-begin-installation %}
8. Si la aplicación requiere acceso a los repositorios, decida si le dará acceso a la aplicación a todos sus repositorios o solo a algunos, luego seleccione **All repositories** (Todos los repositorios) o **Only select repositories** (Solo repositorios seleccionados).
  ![Botones de radio con opciones para instalar una aplicación en todos los repositorios o solo en algunos](/assets/images/help/marketplace/marketplace-choose-repo-install-option.png) {% data reusables.marketplace.select-installation-repos %} {% data reusables.marketplace.review-app-perms-install %}

## Instalar una {% data variables.product.prodname_oauth_app %} en tu organización

{% data reusables.saml.saml-session-oauth %}

{% data reusables.marketplace.visit-marketplace %} {% data reusables.marketplace.browse-to-app %} {% data reusables.marketplace.choose-plan %} {% data reusables.marketplace.install-buy %} {% data reusables.marketplace.confirm-install-account-org %} {% data reusables.marketplace.add-payment-method-org %} {% data reusables.marketplace.complete-order-begin-installation %}
8. Revise la información acerca del acceso de la aplicación a su cuenta personal, a sus organizaciones y a los datos, luego haga clic en **Authorize application** (Autorizar aplicación).

## Información adicional

- "[Actualizar el método de pago de tu organización](/articles/updating-your-organization-s-payment-method)"
- "[Instalar una app en tu cuenta personal](/articles/installing-an-app-in-your-personal-account)"
