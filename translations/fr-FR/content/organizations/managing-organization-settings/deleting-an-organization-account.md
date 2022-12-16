---
title: Supprimer un compte d’organisation
intro: "Quand vous supprimez une organisation, tous les dépôts, les duplications (fork) de dépôts privés, les wikis, les problèmes, les demandes de tirage (pull request) et les pages de projet ou d’organisation sont également supprimés. {% ifversion fpt or ghec %}Votre facturation se termine et, après 90\_jours, le nom de l’organisation est utilisable sur un nouveau compte d’utilisateur ou d’organisation.{% endif %}"
redirect_from:
  - /articles/deleting-an-organization-account
  - /github/setting-up-and-managing-organizations-and-teams/deleting-an-organization-account
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Delete organization
ms.openlocfilehash: e923dcf7fb9135243c5bfe0e68a310719e87ef2e
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145101466'
---
{% ifversion fpt or ghec %} {% tip %}

**Conseil** : Si vous voulez annuler votre abonnement payant, vous pouvez [passer votre organisation à la version {% data variables.product.prodname_free_team %}](/articles/downgrading-your-github-subscription) au lieu de supprimer l’organisation et son contenu.

{% endtip %}

{% endif %}

## 1. Sauvegarder le contenu de votre organisation

{% ifversion not ghes %} Une fois que vous avez supprimé une organisation, {% data variables.product.company_short %} **ne peut pas restaurer votre contenu**. Par conséquent, avant{% else %}Before{% endif %} de supprimer votre organisation, vérifiez que vous disposez d’une copie de tous les dépôts, wikis, problèmes et tableaux de projet du compte.

{% ifversion ghes %} {% note %}

**Remarque :** Si nécessaire, un administrateur de site {% data variables.product.product_location %} peut être réussir à restaurer partiellement une organisation supprimée. Pour plus d’informations, consultez « [Restauration d’une organisation supprimée](/admin/user-management/managing-organizations-in-your-enterprise/restoring-a-deleted-organization) ».

{% endnote %} {% endif %}

## 2. Supprimer l’organisation

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
4. Dans la partie inférieure de la page des paramètres de l’organisation, cliquez sur **Supprimer cette organisation**.
   ![Bouton Supprimer cette organisation](/assets/images/help/settings/settings-organization-delete.png)
