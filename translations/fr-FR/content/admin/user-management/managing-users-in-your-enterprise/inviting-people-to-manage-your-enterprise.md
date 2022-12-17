---
title: Inviter des personnes à gérer votre entreprise
intro: 'Vous pouvez {% ifversion ghec %}inviter des personnes à devenir propriétaires d’entreprise ou gestionnaires de facturation pour{% elsif ghes %}ajouter des propriétaires d’entreprise à{% endif %} votre compte d’entreprise. Vous pouvez aussi supprimer les propriétaires d’entreprise {% ifversion ghec %}ou les gestionnaires de facturation {% endif %}qui n’ont plus besoin d’accéder au compte d’entreprise.'
permissions: 'Enterprise owners can {% ifversion ghec %}invite other people to become{% elsif ghes %}add{% endif %} additional enterprise administrators.'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/managing-users-in-your-enterprise/inviting-people-to-manage-your-enterprise
  - /github/setting-up-and-managing-your-enterprise-account/inviting-people-to-manage-your-enterprise-account
  - /articles/inviting-people-to-collaborate-in-your-business-account
  - /articles/inviting-people-to-manage-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/inviting-people-to-manage-your-enterprise
versions:
  ghec: '*'
  ghes: '*'
type: how_to
topics:
  - Administrator
  - Enterprise
  - User account
shortTitle: Invite people to manage
ms.openlocfilehash: 7cdbee6f1b37a8300f3523712c6e0dda4293af74
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146180446'
---
## À propos des utilisateurs qui peuvent gérer votre compte d’entreprise

{% data reusables.enterprise-accounts.enterprise-administrators %} Pour plus d’informations, consultez « [Rôles dans une entreprise](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise) ».

{% ifversion ghes %}

Si vous souhaitez gérer les propriétaires et les gestionnaires de facturation d’un compte d’entreprise sur {% data variables.product.prodname_dotcom_the_website %}, consultez « [Inviter des personnes à gérer votre entreprise](/enterprise-cloud@latest/admin/user-management/managing-users-in-your-enterprise/inviting-people-to-manage-your-enterprise) » dans la documentation {% data variables.product.prodname_ghe_cloud %}.

{% endif %}

{% ifversion ghec %}

Si votre entreprise utilise {% data variables.product.prodname_emus %}, les propriétaires d’entreprise ne peuvent être ajoutés ou supprimés que par le biais de votre fournisseur d’identité. Pour plus d’informations, consultez « [À propos d’{% data variables.product.prodname_emus %}](/enterprise-cloud@latest/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users) ».

{% endif %}

{% tip %}

**Conseil :** Pour plus d’informations sur la gestion des utilisateurs au sein d’une organisation appartenant à votre compte d’entreprise, consultez « [Gestion de l’appartenance à votre organisation](/articles/managing-membership-in-your-organization) » et [« Gestion de l’accès des personnes à votre organisation avec des rôles](/articles/managing-peoples-access-to-your-organization-with-roles) ».

{% endtip %}

## {% ifversion ghec %}Invitation{% elsif ghes %}Ajout{% endif %} d’un administrateur d’entreprise à votre compte d’entreprise

{% ifversion ghec %} Quand vous invitez une personne à rejoindre le compte d’entreprise, elle doit accepter l’invitation envoyée par e-mail pour pouvoir accéder au compte d’entreprise. Les invitations en attente expirent au bout de 7 jours. {% endif %}

{% ifversion enterprise-membership-view-improvements %} Vous pouvez voir toutes les invitations en attente pour devenir administrateur de votre compte d’entreprise. Pour plus d’informations, consultez « [Visualisation des personnes dans votre entreprise](/admin/user-management/managing-users-in-your-enterprise/viewing-people-in-your-enterprise#viewing-pending-invitations) ».
{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.people-tab %} {% data reusables.enterprise-accounts.administrators-tab %}
1. Au-dessus de la liste des administrateurs, cliquez sur {% ifversion ghec %}**Inviter un administrateur**{% elsif ghes %}**Ajouter un propriétaire**{% endif %}.
  {% ifversion ghec %} ![Bouton « Inviter un administrateur » au-dessus de la liste des propriétaires d’entreprise](/assets/images/help/business-accounts/invite-admin-button.png) {% elsif ghes %} ![Bouton « Ajouter un propriétaire » au-dessus de la liste des propriétaires d’entreprise](/assets/images/help/business-accounts/add-owner-button.png) {% endif %}
1. Tapez le nom d’utilisateur, le nom complet ou l’adresse e-mail de la personne que vous souhaitez inviter à devenir administrateur d’entreprise, puis sélectionnez la personne appropriée dans les résultats.
  ![Boîte modale avec un champ de saisie pour le nom d’utilisateur, le nom complet ou l’adresse e-mail d’une personne et bouton Inviter](/assets/images/help/business-accounts/invite-admins-modal-button.png){% ifversion ghec %}
1. Sélectionnez **Propriétaire** ou **Gestionnaire de facturation**.
  ![Boîte modale avec choix du rôle](/assets/images/help/business-accounts/invite-admins-roles.png)
1. Cliquez sur **Send Invitation**.
  ![Bouton Envoyer une invitation](/assets/images/help/business-accounts/invite-admins-send-invitation.png){% endif %}{% ifversion ghes %}
1. Cliquez sur **Add**.
  ![Bouton « Ajouter »](/assets/images/help/business-accounts/add-administrator-add-button.png) {% endif %}

## Suppression d’un administrateur d’entreprise de votre compte d’entreprise

Seuls les propriétaires d’entreprise peuvent supprimer d’autres administrateurs d’entreprise du compte d’entreprise.

{% ifversion ghec %} Si l’administrateur que vous souhaitez supprimer est membre d’une organisation appartenant à l’entreprise, vous pouvez choisir **Convertir en membre**, ce qui supprimera son rôle d’administration, mais conservera ses appartenances à l’organisation, ou **Supprimer de l’entreprise**, ce qui supprimera à la fois son rôle administratif et ses appartenances à l’organisation.
{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.people-tab %} {% data reusables.enterprise-accounts.administrators-tab %}
1. En regard du nom d’utilisateur de la personne que vous souhaitez supprimer, cliquez sur {% octicon "gear" aria-label="The Settings gear" %}, puis sur {% ifversion ghes %}**Supprimer le propriétaire**{% elsif ghec %}**Convertir en membre** ou **Supprimer de l’entreprise**{% endif %}.
  {% ifversion ghec %} ![Icône d’engrenage Paramètres avec option de menu pour supprimer un administrateur d’entreprise](/assets/images/help/business-accounts/remove-admin.png) {% elsif ghes %} ![Icône d’engrenage Paramètres avec option de menu pour supprimer un administrateur d’entreprise](/assets/images/help/business-accounts/ghes-remove-owner.png) {% endif %}
1. Lisez la confirmation, puis cliquez sur {% ifversion ghes %}**Supprimer le propriétaire**{% elsif ghec %}**Oui, convertir NOM D’UTILISATEUR en membre**{% endif %}.
