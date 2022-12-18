---
title: Suppression d’un membre de votre entreprise
intro: Vous pouvez supprimer un membre de toutes les organisations dont est propriétaire votre entreprise.
permissions: Enterprise owners can remove an enterprise member from the enterprise.
versions:
  feature: remove-enterprise-members
type: how_to
topics:
  - Enterprise
shortTitle: Remove member
ms.openlocfilehash: c3090cd49c2c2e8089093dc01ddeb7b69ae39416
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/09/2022
ms.locfileid: '147717988'
---
## À propos de la suppression de membres d’entreprise

Quand vous supprimez un membre de votre entreprise, il est supprimé de toutes les organisations appartenant à votre entreprise.

Si le membre d’entreprise que vous supprimez est le dernier propriétaire d’une organisation appartenant à votre entreprise, vous devenez propriétaire de cette organisation.

Si votre entreprise ou l’une des organisations lui appartenant utilise un fournisseur d’identité (IdP) pour gérer l’appartenance à l’organisation, le membre peut être de nouveau ajouté à l’organisation par l’IdP. Veillez également à apporter les modifications nécessaires dans votre IdP.

## Suppression d’un membre de votre entreprise

{% note %}

**Remarque :** Si un membre d’entreprise utilise {% data variables.product.prodname_ghe_server %} uniquement et non {% data variables.product.prodname_ghe_cloud %}, vous ne pouvez pas le supprimer de cette façon.

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.people-tab %}
1. À droite de la personne que vous souhaitez supprimer, sélectionnez le menu déroulant sous {% octicon "gear" aria-label="The gear icon" %} et cliquez sur **Supprimer de l’entreprise**.

   ![Capture d’écran de l’option « Supprimer de l’entreprise » pour un membre d’entreprise](/assets/images/help/business-accounts/remove-member.png)
