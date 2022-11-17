---
title: Suppression d’un membre de votre organisation
intro: 'Si les membres de votre organisation n’ont plus besoin d’accéder aux référentiels appartenant à l’organisation, vous pouvez les supprimer de l’organisation.'
redirect_from:
  - /articles/removing-a-member-from-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/removing-a-member-from-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Remove a member
permissions: Organization owners can remove members from an organization.
ms.openlocfilehash: 4266172bc2bae6fb95506b98309533919309ccfc
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147064697'
---
{% ifversion fpt or ghec %}

{% warning %}

**Avertissement :** Lorsque vous supprimez des membres d’une organisation :
- Le nombre de licences payantes n’est pas automatiquement diminué. Pour payer moins de licences après avoir supprimé des utilisateurs de votre organisation, suivez les étapes décrites dans « [Diminuer les sièges payants de votre organisation](/articles/downgrading-your-organization-s-paid-seats) ».
- Les membres supprimés perdent l’accès aux duplications (forks) privées des dépôts privés de votre organisation, mais ils peuvent conserver des copies locales. Toutefois, ils ne peuvent pas synchroniser leurs copies locales avec les dépôts de votre organisation. Leurs duplications privées peuvent être restaurées si l’utilisateur est [rétabli comme membre de l’organisation](/articles/reinstating-a-former-member-of-your-organization) dans les trois mois suivant sa suppression de l’organisation. Enfin, vous êtes chargé de veiller à ce que les personnes qui ont perdu l’accès à un dépôt suppriment l’ensemble des informations confidentielles ou droits de propriété intellectuelle.
- Lorsque les référentiels privés sont dupliqués vers d’autres organisations, ces organisations peuvent contrôler l’accès au réseau de duplications. Cela signifie que les utilisateurs peuvent conserver l’accès aux duplications même après avoir perdu l’accès à l’organisation d’origine, car ils auront toujours un accès explicite via une duplication. {%- ifversion ghec %}
-  Les membres supprimés perdent également l’accès aux duplications privées des dépôts internes de votre organisation s’ils ne sont pas membres d’une autre organisation appartenant au même compte d’entreprise. Pour plus d’informations, consultez « [À propos des comptes d’entreprise](/admin/overview/about-enterprise-accounts) ».
{%- endif %}
- Toutes les invitations d’organisation qui ont été envoyées par un membre supprimé et qui n’ont pas été acceptées sont annulées et rendues inaccessibles.

{% endwarning %}

{% else %}

{% warning %}

**Avertissement :** Lorsque vous supprimez des membres d’une organisation :
 - Les membres supprimés perdent l’accès aux duplications (forks) privées des dépôts privés de votre organisation, mais ils peuvent conserver des copies locales. Toutefois, ils ne peuvent pas synchroniser leurs copies locales avec les dépôts de votre organisation. Leurs duplications privées peuvent être restaurées si l’utilisateur est [rétabli comme membre de l’organisation](/articles/reinstating-a-former-member-of-your-organization) dans les trois mois suivant sa suppression de l’organisation. Enfin, vous êtes chargé de veiller à ce que les personnes qui ont perdu l’accès à un dépôt suppriment l’ensemble des informations confidentielles ou droits de propriété intellectuelle.
- Les membres supprimés perdent également l’accès aux duplications privées des dépôts internes de votre organisation s’ils ne sont pas membres d’une autre organisation dans votre entreprise.
 - Toutes les invitations d’organisation qui ont été envoyées par les membres supprimés et qui n’ont pas été acceptées sont annulées et rendues inaccessibles.

{% endwarning %}

{% endif %}

{% ifversion fpt or ghec %}

Pour aider la personne que vous supprimez de votre organisation durant la phase de transition et vous assurer avec elle qu’elle supprime les informations confidentielles ou les droits de propriété intellectuelle, nous vous recommandons de partager une check-list des bonnes pratiques en cas de départ de votre organisation. Pour obtenir un exemple, consultez « [Bonnes pratiques pour quitter votre entreprise](/articles/best-practices-for-leaving-your-company/) ».

{% endif %}

{% data reusables.organizations.data_saved_for_reinstating_a_former_org_member %}

## Révocation de l’appartenance de l’utilisateur

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %}
4. Sélectionnez le ou les membres que vous souhaitez supprimer de l’organisation.
  ![Liste de membres avec deux membres sélectionnés](/assets/images/help/teams/list-of-members-selected-bulk.png)
5. Au-dessus de la liste des membres, utilisez le menu déroulant et cliquez sur **Supprimer de l’organisation**.
  ![Menu déroulant avec l’option de suppression de membres](/assets/images/help/teams/user-bulk-management-options.png)
6. Vérifiez la sélection du ou des membres qui vont être supprimés de l’organisation, puis cliquez sur **Supprimer les membres**.
  ![Liste des membres qui seront supprimés et bouton Supprimer les membres](/assets/images/help/teams/confirm-remove-members-bulk.png)

## Pour aller plus loin

- « [Suppression de membres d’une organisation dans une équipe](/articles/removing-organization-members-from-a-team) »{% ifversion remove-enterprise-members %}
- « [Suppression d’un membre de votre entreprise](/admin/user-management/managing-users-in-your-enterprise/removing-a-member-from-your-enterprise)"{% endif %}
