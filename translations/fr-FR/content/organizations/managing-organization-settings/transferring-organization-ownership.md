---
title: Transfert de propriété d’une organisation
intro: 'Pour rendre quelqu’un d’autre propriétaire d’un compte d’organisation, vous devez ajouter un nouveau propriétaire{% ifversion fpt or ghec %}, vérifier que les informations de facturation sont mises à jour{% endif %} et vous supprimer du compte.'
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
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145066604'
---
{% ifversion ghec %} {% note %}

**Remarque :** {% data reusables.enterprise-accounts.invite-organization %}

{% endnote %}{% endif %}

1. Si vous êtes le seul membre avec des privilèges de *propriétaire*, attribuez à un autre membre d’organisation le rôle de propriétaire. Pour plus d’informations, consultez « [Désignation d’un propriétaire d’organisation](/organizations/managing-peoples-access-to-your-organization-with-roles/maintaining-ownership-continuity-for-your-organization#appointing-an-organization-owner) ».
2. Contactez le nouveau propriétaire et vérifiez qu’il a [accès aux paramètres de l’organisation](/articles/accessing-your-organization-s-settings).
{% ifversion fpt or ghec %}
3. Si vous êtes actuellement responsable du paiement de GitHub dans votre organisation, vous devez également demander au nouveau propriétaire ou à un [responsable de facturation](/articles/adding-a-billing-manager-to-your-organization/) de mettre à jour les informations de paiement de l’organisation. Pour plus d’informations, consultez « [Ajout ou modification d’un mode de paiement](/articles/adding-or-editing-a-payment-method) ».

  {% warning %}

  **Avertissement** : Quand vous vous supprimez de l’organisation, les informations de facturation enregistrées pour le compte d’organisation **ne sont pas** mises à jour. Le nouveau propriétaire ou un responsable de facturation doit mettre à jour les informations de facturation enregistrées pour supprimer votre carte de crédit ou vos informations PayPal.

  {% endwarning %}

{% endif %}
4. [Supprimez-vous](/articles/removing-yourself-from-an-organization) de l’organisation.
