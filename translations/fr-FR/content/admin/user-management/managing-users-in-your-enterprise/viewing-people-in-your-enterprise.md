---
title: Visualisation des personnes dans votre entreprise
intro: 'Pour auditer l’accès aux ressources dont est propriétaire l’entreprise ou l’utilisation des licences utilisateur, les propriétaires d’entreprise peuvent examiner chaque administrateur et membre de l’entreprise.'
permissions: Enterprise owners can view the people in an enterprise.
redirect_from:
  - /github/setting-up-and-managing-your-enterprise-account/viewing-people-in-your-enterprise-account
  - /articles/viewing-people-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/viewing-people-in-your-enterprise
  - /github/setting-up-and-managing-your-enterprise/managing-users-in-your-enterprise/viewing-people-in-your-enterprise
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Enterprise
shortTitle: View people in your enterprise
ms.openlocfilehash: cd68b098a363ba0775ec4891a555759bbd81adb2
ms.sourcegitcommit: ec712c0fd32e7fe2f74c2b6d5da95f700dfd8111
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148110384'
---
## À propos de la liste des personnes au sein de votre entreprise

Pour auditer l’accès aux ressources de votre entreprise et gérer l’utilisation des licences, vous pouvez afficher la liste de toutes les personnes qui ont accès à votre entreprise. 

Vous pouvez voir l’ensemble actuel des membres et administrateurs de l’entreprise{% ifversion ghec %}, ainsi que les invitations en attente à devenir membre et administrateur{% endif %}. Pour faciliter l’utilisation de ces informations, vous pouvez effectuer une recherche dans les listes et filtrer celles-ci.

{% ifversion ghec %}

Si {% data variables.product.prodname_github_connect %} est configuré pour votre entreprise, lorsque vous filtrez une liste de personnes de votre entreprise, les limitations suivantes s’appliquent.

- Le filtre pour l’état d’authentification à deux facteurs (2FA) n’affiche pas les personnes qui disposent uniquement d’un compte sur une instance {% data variables.product.prodname_ghe_server %}.
- Si vous combinez le filtre pour les comptes sur les instances {% data variables.product.prodname_ghe_server %} avec le filtre pour les organisations ou l’état 2FA, vous ne verrez aucun résultat.

Pour plus d’informations sur {% data variables.product.prodname_github_connect %}, consultez les articles suivants.

- « [À propos de {% data variables.product.prodname_github_connect %}](/enterprise-server/admin/configuration/configuring-github-connect/about-github-connect) » dans la documentation de {% data variables.product.prodname_ghe_server %}
- « [À propos de {% data variables.product.prodname_github_connect %}](/github-ae@latest/admin/configuration/configuring-github-connect/about-github-connect) » dans la documentation sur {% data variables.product.prodname_ghe_managed %}

{% endif %}

{% ifversion enterprise-member-csv %} Vous pouvez également exporter les informations d’appartenance de votre entreprise. Pour plus d’informations, consultez « [Exportation des informations d’appartenance de votre entreprise](/admin/user-management/managing-users-in-your-enterprise/exporting-membership-information-for-your-enterprise) ».
{% endif %}

## Affichage des administrateurs de l’entreprise

Vous pouvez examiner l’ensemble des propriétaires{% ifversion ghec %} et des gestionnaires de facturation{% endif %} de votre entreprise.{% ifversion enterprise-membership-view-improvements %} Vous pouvez voir des informations utiles sur chaque administrateur{% ifversion ghec %} et filtrer la liste par rôle{% endif %}.{% endif %} Vous pouvez retrouver une personne spécifique en recherchant son nom d’utilisateur ou son nom d’affichage.

{% ifversion ghes > 3.5 %} Les propriétaires d’entreprise dont les comptes sont suspendus sont inclus dans la liste des administrateurs d’entreprise et sont identifiés comme suspendus. Vous devriez envisager de rétrograder les propriétaires suspendus que vous voyez. Pour plus d’informations, consultez « [Promotion ou rétrogradation d’un administrateur de site](/admin/user-management/managing-users-in-your-enterprise/promoting-or-demoting-a-site-administrator#demoting-a-site-administrator-from-the-enterprise-settings) ».
{% endif %}

{% ifversion not ghae %} Vous pouvez également supprimer un administrateur. Pour plus d’informations, consultez Consultez « [Inviter des personnes à gérer votre entreprise](/admin/user-management/managing-users-in-your-enterprise/inviting-people-to-manage-your-enterprise#removing-an-enterprise-administrator-from-your-enterprise-account) ».
{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.people-tab %} {% data reusables.enterprise-accounts.administrators-tab %}

## Affichage des membres {% ifversion enterprise-membership-view-improvements %}{% else %}et des collaborateurs externes{% endif %}

Vous pouvez afficher l’ensemble des membres {% ifversion enterprise-membership-view-improvements %}{% else %}ou des collaborateurs externes{% endif %} actuels de votre entreprise. Vous pouvez voir des informations utiles sur chaque compte, et filtrer la liste de diverses manières, par exemple, par rôle. Vous pouvez trouver une personne spécifique en effectuant une recherche sur son nom d’utilisateur ou son nom d’affichage.

Vous pouvez afficher des informations supplémentaires sur l’accès de la personne à votre entreprise, telles que les organisations auxquelles la personne appartient, en cliquant sur son nom.

{% ifversion remove-enterprise-members %} Vous pouvez aussi supprimer n’importe quel membre de l’entreprise de toutes les organisations dont elle est propriétaire. Pour plus d’informations, consultez « [Suppression d’un membre de votre entreprise](/admin/user-management/managing-users-in-your-enterprise/removing-a-member-from-your-enterprise) ».
{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.people-tab %}{% ifversion enterprise-membership-view-improvements %}{% else %}
1. Si vous le souhaitez, vous pouvez voir une liste des collaborateurs externes plutôt que la liste des membres en cliquant sur **Collaborateurs externes**.

   ![Onglet Collaborateurs externes sur la page des membres de l’entreprise](/assets/images/help/business-accounts/outside-collaborators-tab.png){% endif %}

{% ifversion enterprise-membership-view-improvements %}
## Affichage des collaborateurs externes

Vous pouvez voir tous les collaborateurs externes actuels de votre entreprise. Vous pouvez voir des informations utiles sur chaque collaborateur, et filtrer la liste de diverses manières, par exemple, par organisation. Vous pouvez trouver un collaborateur spécifique en recherchant son nom d’utilisateur ou son nom d’affichage.

Vous pouvez afficher des informations supplémentaires sur l’accès de la personne à votre entreprise, telles que la liste de tous les dépôts auxquels le collaborateur à accès, en cliquant sur son nom.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.people-tab %}
1. Sous « Personnes », cliquez sur **Collaborateurs externes**.

  ![Onglet Collaborateurs externes dans la barre latérale des paramètres d’entreprise]{% ifversion ghec%}(/assets/images/help/business-accounts/outside-collaborators-tab-sidebar-dotcom.png){% else %}(/assets/images/help/business-accounts/outside-collaborators-tab-sidebar-dotcom.png){% endif %}
  
{% endif %}

{% ifversion ghec %}
## Affichage d’invitations en attente

Vous pouvez voir toutes les invitations en attente à devenir membre, administrateur ou collaborateur externe de votre entreprise. Vous pouvez filtrer la liste de diverses manières, par exemple par organisation. Vous pouvez trouver une personne spécifique en effectuant une recherche sur son nom d’utilisateur ou son nom d’affichage.

Dans la liste des membres en attente, pour tout compte individuel, vous pouvez annuler toutes les invitations à rejoindre des organisations appartenant à votre entreprise. Cela n’annule pas les invitations à devenir administrateur d’entreprise ou collaborateur externe. 

{% note %}

**Remarque :** si une invitation a été approvisionnée via SCIM, vous devez annuler l’invitation via votre fournisseur d’identité (IdP), plutôt que sur {% data variables.product.prodname_dotcom %}.

{% endnote %}

Si vous utilisez {% data variables.product.prodname_vss_ghe %}, la liste des invitations en attente inclut tous les abonnés {% data variables.product.prodname_vs %} qui n’ont rejoint aucune de vos organisations sur {% data variables.product.prodname_dotcom %}, même si l’abonné n’a pas d’invitation en attente à rejoindre une organisation. Pour plus d’informations sur la façon d’obtenir que les abonnés {% data variables.product.prodname_vs %} aient accès à {% data variables.product.prodname_enterprise %}, consultez « [Configuration de {% data variables.product.prodname_vss_ghe %}](/billing/managing-licenses-for-visual-studio-subscriptions-with-github-enterprise/setting-up-visual-studio-subscriptions-with-github-enterprise) ».

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.people-tab %}
1. Sous « Personnes », cliquez sur **Invitations en attente**.

   ![Capture d’écran de l’onglet « Invitations en attente » dans la barre latérale](/assets/images/help/enterprises/pending-invitations-tab.png)
1. Si vous le souhaitez, pour annuler toutes les invitations d’un compte à rejoindre des organisations appartenant à votre entreprise, à droite du compte, cliquez sur {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}, puis cliquez sur **Annuler l’invitation**.

   ![Capture d’écran du bouton « Annuler l’invitation »](/assets/images/help/enterprises/cancel-enterprise-member-invitation.png)
1. Si vous le souhaitez, pour afficher les invitations en attente d’administrateurs d’entreprise ou de collaborateurs externes, sous « Membres en attente », cliquez sur **Administrateurs** ou **Collaborateurs externes**.

   ![Capture d’écran des onglets « Membres », « Administrateurs » et « Collaborateurs externes »](/assets/images/help/enterprises/pending-invitations-type-tabs.png)

## Visualisation des membres suspendus dans une {% data variables.enterprise.prodname_emu_enterprise %}

Si votre entreprise utilise la fonctionnalité {% data variables.product.prodname_emus %}, vous pouvez voir les utilisateurs suspendus. Les utilisateurs suspendus sont des membres qui ont été déprovisionnés après avoir été désattribués de l’application {% data variables.product.prodname_emu_idp_application %} ou supprimés du fournisseur d’identité. Pour plus d’informations, consultez « [À propos d’{% data variables.product.prodname_emus %}](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/about-enterprise-managed-users) ».

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.people-tab %}
1. Pour voir la liste des membres suspendus, cliquez sur **Suspendus** au-dessus de la liste des membres actifs.
  ![Capture d’écran montrant l’option « Suspendu »](/assets/images/help/enterprises/view-suspended-members.png)

{% endif %}

## Visualisation des utilisateurs inactifs

Vous pouvez voir la liste complète des utilisateurs inactifs {% ifversion ghes or ghae %} qui n’ont pas été suspendus et {% endif %}qui ne sont pas administrateurs de site. {% data reusables.enterprise-accounts.dormant-user-activity-threshold %} Pour plus d’informations, consultez « [Gestion des utilisateurs inactifs](/admin/user-management/managing-users-in-your-enterprise/managing-dormant-users) ».

{% ifversion filter-by-enterprise-member-type %}
## Filtrage par type de membre{% ifversion ghec %} dans une {% data variables.enterprise.prodname_emu_enterprise %}{% endif %}

{% ifversion ghec %}Si votre entreprise utilise la fonctionnalité {% data variables.product.prodname_emus %}, vous{% elsif ghes or ghae %}Vous{% endif %} pouvez filtrer la liste des membres d’une organisation par type pour déterminer si les appartenances sont gérées via un IdP (fournisseur d’identité) ou directement. Les appartenances gérées via un IdP ont été ajoutées via un groupe d’IdP, et le groupe d’IdP a été connecté à une équipe au sein de l’organisation. Les appartenances gérées directement ont été ajoutées manuellement à l’organisation. La façon dont une appartenance est gérée dans une organisation détermine la façon dont elle doit être supprimée. Vous pouvez utiliser ce filtre pour déterminer la façon dont les membres ont été ajoutés à une organisation, afin de savoir comment les supprimer.{% ifversion ghec %} Pour plus d’informations, consultez « [À propos de la fonctionnalité {% data variables.product.prodname_emus %}](/enterprise-cloud@latest/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/about-enterprise-managed-users#about-organization-membership-management) ».{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %}
1. Sous « Organisations », dans la barre de recherche, commencez à taper le nom de l’organisation jusqu’à ce que celle-ci apparaisse dans les résultats de la recherche. Cliquez ensuite sur le nom de l’organisation.
   ![Capture d’écran du champ de recherche pour les organisations](/assets/images/help/enterprises/organization-search.png)
1. Sous le nom de l’organisation, cliquez sur {% octicon "person" aria-label="The Person icon" %} **Personnes**.
   ![Capture d’écran de l’onglet Personnes](/assets/images/help/enterprises/emu-organization-people-tab.png)
1. Au-dessus de la liste des membres, cliquez sur **Type**, puis sélectionnez le type de membre à afficher.
   ![Capture d’écran du bouton « Type »](/assets/images/help/enterprises/filter-by-member-type.png)

{% endif %}

{% ifversion ghec or ghes %}
## Affichage des membres dont l’adresse e-mail n’est pas issue d’un domaine vérifié

Vous pouvez afficher la liste des membres de votre entreprise dont le compte d’utilisateur n’est pas associé à une adresse e-mail issue d’un domaine vérifié sur {% data variables.product.prodname_dotcom_the_website %}.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.verified-domains-tab %}
1. Sous « Préférences de notification », cliquez sur le lien {% octicon "eye" aria-label="The github eye icon" %} **Afficher les membres de l’entreprise sans e-mail de domaine approuvé ou vérifié**.
{% endif %}

## Pour aller plus loin

- « [Rôles dans une entreprise](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise) »
