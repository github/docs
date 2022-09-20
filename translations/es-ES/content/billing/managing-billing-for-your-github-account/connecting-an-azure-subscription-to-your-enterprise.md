---
title: Conectar una suscripción de Azure a tu empresa
intro: 'Puedes utilizar tu Contrato Enterprise de Microsoft para habilitar {% data variables.product.prodname_actions %}, {% data variables.product.prodname_registry %} y {% data variables.product.prodname_github_codespaces %} y pagar por su uso.'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/managing-your-enterprise-account/connecting-an-azure-subscription-to-your-enterprise
  - /github/setting-up-and-managing-billing-and-payments-on-github/connecting-an-azure-subscription-to-your-enterprise
  - /github/setting-up-and-managing-your-enterprise/connecting-an-azure-subscription-to-your-enterprise
versions:
  ghec: '*'
shortTitle: Connect an Azure subscription
ms.openlocfilehash: a5473ff19e403eb21242982e005663d1c8ac5962
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147110886'
---
## Acerca de las suscripciones a Azure y de {% data variables.product.product_name %}

{% data reusables.enterprise-accounts.billing-microsoft-ea-overview %} Para obtener más información, consulta "[Acerca de la facturación para {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions/about-billing-for-github-actions) y "[Acerca de la facturación para {% data variables.product.prodname_registry %}](/billing/managing-billing-for-github-packages/about-billing-for-github-packages)".

{% note %}

**Nota:** Si la cuenta empresarial tiene un Contrato Enterprise de Microsoft, la conexión de una suscripción de Azure es la única forma de usar {% data variables.product.prodname_actions %} y {% data variables.product.prodname_registry %} más allá de las cantidades que se incluyen o incluso simplemente de usar {% data variables.product.prodname_codespaces %}.

{% endnote %}

Una vez que conectes una suscripción de Azure, también puedes administrar tus límites de gasto.

- "[Administración del límite de gasto para {% data variables.product.prodname_registry %}](/billing/managing-billing-for-github-packages/managing-your-spending-limit-for-github-packages)"
- "[Administración del límite de gasto para {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions/managing-your-spending-limit-for-github-actions)"
- "[Administración del límite de gasto para {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces)"

## Conectar tu suscripción de Azure con tu cuenta empresarial

Para conectar tu suscripción de Azure, debes tener permisos de propietario para la suscripción.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.billing-tab %} {% data reusables.enterprise-accounts.payment-information-tab %}
1. En "Información de pago", haz clic en **Agregar suscripción de Azure**.
1. Para iniciar sesión en tu cuenta de Microsoft, sigue las indicaciones.
1. Revisa la indicación de "Permisos solicitados". Si aceptas los términos, haz clic en **Aceptar**.
1. Debajo de "Selecciona una suscripción", selecciona la ID de Suscripción de Azure que quieras conectar a tu empresa.

   {% note %}

   **Nota:** La validación de permisos de suscripción de {% data variables.product.company_short %} solicita acceso de solo lectura para mostrar la lista de suscripciones disponibles. Para seleccionar una suscripción de Azure, debes ser el propietario de los permisos a la suscripción. Si el inquilino predeterminado no cuenta con los permisos correctos, puede que necesites especificar una ID de inquilino diferente. Para obtener más información, consulta [Plataforma de identidad de Microsoft y flujo de código de autorización de OAuth 2.0](https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow#request-an-authorization-code) en Microsoft Docs.

   {% endnote %}
1. Haga clic en **Conectar**.

## Desconectar tu suscripción de Azure de tu cuenta empresarial

Después de que desconectas tu suscripción de Azure de tu cuenta empresarial, tu uso ya no podrá exceder las cantidades que se incluyen en tu plan.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.billing-tab %} {% data reusables.enterprise-accounts.payment-information-tab %}
1. En "Suscripción de Azure", a la derecha del identificador de suscripción que quieres desconectar, haz clic en **{% octicon "trash" aria-label="The trash icon" %}** .
1. Revisa la solicitud y, a continuación, haz clic en **Quitar**.
