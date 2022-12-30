---
title: Ajout d’un gestionnaire de facturation à votre organisation
intro: 'Un *gestionnaire de facturation* est un utilisateur qui gère les paramètres de facturation de votre organisation, tels que la mise à jour des informations de paiement. C’est une option intéressante si les membres habituels de votre organisation n’ont généralement pas accès aux ressources de facturation.'
redirect_from:
  - /articles/adding-a-billing-manager-to-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/adding-a-billing-manager-to-your-organization
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
  - Billing
shortTitle: Add a billing manager
ms.openlocfilehash: f7b4e6d17ff0e6680fdf9509b467f314b1a9e4ec
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145106209'
---
Les membres de l’équipe Propriétaires de votre organisation peuvent accorder des autorisations de *gestionnaire de facturation* à des personnes. Une fois qu’une personne accepte son invitation à devenir responsable de facturation pour votre organisation, elle peut inviter d’autres personnes à être des gestionnaires de facturation.

{% note %}

**Remarque :** Les responsables de facturation n’utilisent pas de licences payantes dans l’abonnement de votre organisation.

{% endnote %}

## Autorisations pour les gestionnaires de facturation

Les gestionnaires de facturation peuvent :

- Mettre à niveau ou rétrograder le compte
- Ajouter, mettre à jour ou supprimer des modes de paiement
- Visualiser l’historique des paiements
- Télécharger des reçus
- Visualiser, inviter et supprimer des gestionnaires de facturation
- Démarrer, modifier ou annuler des parrainages

En outre, tous les responsables de facturation recevront les reçus de facturation par e-mail à la date de facturation de l’organisation.

Les responsables de facturation **ne peuvent pas** :

- Créer ou accéder à des dépôts dans vos organisations
- Voir les membres privés de votre organisation
- Être vus dans la liste des membres de l’organisation
- Acheter, modifier ou annuler des abonnements pour des applications {% data variables.product.prodname_marketplace %}

{% tip %}

**Conseil :** Si votre organisation [exige que les membres, les responsables de facturation et les collaborateurs externes utilisent l’authentification à deux facteurs](/articles/requiring-two-factor-authentication-in-your-organization), l’utilisateur doit activer l’authentification à deux facteurs avant de pouvoir accepter votre invitation pour devenir responsable de facturation pour l’organisation.

{% endtip %}

## Invitation d’un responsable de facturation

{% ifversion ghec %} {% note %}

**Remarque :** Si votre organisation appartient à un compte d’entreprise, vous ne pouvez pas inviter des responsables de facturation au niveau de l’organisation. Pour plus d’informations, consultez « [À propos des comptes d’entreprise](/admin/overview/about-enterprise-accounts) ».

{% endnote %} {% endif %}

La personne invitée recevra un e-mail d’invitation lui demandant de devenir responsable de facturation pour votre organisation. Une fois que la personne invitée clique sur le lien d’acceptation dans son e-mail d’invitation, elle est automatiquement ajoutée à l’organisation en tant que responsable de facturation. S’ils n’ont pas encore de compte GitHub, ils sont dirigés vers une page leur permettant de s’inscrire pour un compte, et ils sont automatiquement ajoutés à l’organisation en tant que gestionnaire de facturation après avoir créé ce compte.

{% data reusables.organizations.billing-settings %}
1. Sous « Gestion de la facturation », en regard de « Gestionnaires de facturation », cliquez sur **Ajouter**.
  ![Inviter un gestionnaire de facturation](/assets/images/help/billing/settings_billing_managers_list.png)
6. Tapez le nom d’utilisateur ou l’adresse e-mail de la personne que vous souhaitez ajouter, puis cliquez sur **Envoyer une invitation**.
  ![Page Inviter un gestionnaire de facturation](/assets/images/help/billing/billing_manager_invite.png)

## Pour aller plus loin

- « [Inviter une personne à gérer votre entreprise](/enterprise-cloud@latest/admin/user-management/managing-users-in-your-enterprise/inviting-people-to-manage-your-enterprise) »{% ifversion fpt %} dans la documentation {% data variables.product.prodname_ghe_cloud %}{% endif %}
