---
title: Transferir la propiedad de la organización
intro: 'Para hacer que alguna otra persona sea propietaria de una cuenta de organización, puedes agregar un propietario nuevo{% ifversion fpt or ghec %}, asegurar que la información de facturación esté actualizada{% endif %} y luego eliminarte de la cuenta.'
redirect_from:
  - /articles/needs-polish-how-do-i-give-ownership-to-an-organization-to-someone-else
  - /articles/transferring-organization-ownership
  - /github/setting-up-and-managing-organizations-and-teams/transferring-organization-ownership
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Transfer ownership
ms.openlocfilehash: 2605af47d008eff7ee786d80f64142a267676ee1
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '145069638'
---
{% ifversion ghec %} {% note %}

**Nota:** {% data reusables.enterprise-accounts.invite-organization %}

{% endnote %}{% endif %}

1. Si es el único miembro con privilegios de *propietario*, conceda el rol de propietario a otro miembro de la organización. Para más información, vea "[Designación de un propietario de la organización](/organizations/managing-peoples-access-to-your-organization-with-roles/maintaining-ownership-continuity-for-your-organization#appointing-an-organization-owner)".
2. Póngase en contacto con el nuevo propietario y asegúrese de que puede [acceder a la configuración de la organización](/articles/accessing-your-organization-s-settings).
{% ifversion fpt or ghec %}
3. Si actualmente es responsable del pago de GitHub en la organización, el nuevo propietario o un [administrador de facturación](/articles/adding-a-billing-manager-to-your-organization/) también tendrá que actualizar la información de pago de la organización. Para más información, vea "[Adición o edición de un método de pago](/articles/adding-or-editing-a-payment-method)".

  {% warning %}

  **Advertencia**: Al eliminarse de la organización **no** se actualiza la información de facturación archivada para la cuenta de la organización. El propietario nuevo o un gerente de facturación debe actualizar la información de facturación archivada para eliminar tu información de tarjeta de crédito o de PayPal.

  {% endwarning %}

{% endif %}
4. [Quítese](/articles/removing-yourself-from-an-organization) de la organización.
