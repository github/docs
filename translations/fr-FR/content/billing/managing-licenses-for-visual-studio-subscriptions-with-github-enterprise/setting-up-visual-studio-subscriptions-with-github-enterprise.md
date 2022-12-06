---
title: Configuration des abonnements Visual Studio avec GitHub Enterprise
intro: 'L’abonnement de votre équipe à {% data variables.product.prodname_vs %} peut également fournir l’accès à {% data variables.product.prodname_enterprise %}.'
versions:
  ghec: '*'
type: how_to
topics:
  - Enterprise
  - Licensing
shortTitle: Set up
ms.openlocfilehash: ae030de637593aa723a5d2990485881ae30b333c
ms.sourcegitcommit: 6b649e03ca2fef38c9ebbeec92102219849380e2
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/31/2022
ms.locfileid: '148120624'
---
## À propos de la configuration de {% data variables.visual_studio.prodname_vss_ghe %}

{% data reusables.enterprise-accounts.vss-ghe-description %} Pour plus d’informations, consultez « [À propos de {% data variables.visual_studio.prodname_vss_ghe %}](/billing/managing-licenses-for-visual-studio-subscriptions-with-github-enterprise/about-visual-studio-subscriptions-with-github-enterprise) ».

Ce guide montre comment votre équipe peut procurer à des abonnés {% data variables.product.prodname_vs %} les licences nécessaires pour démarrer avec {% data variables.product.prodname_enterprise %}.

Si vous préférez une vidéo, vous pouvez regarder [Configurer vos licences {% data variables.product.prodname_enterprise %} avec des abonnements {% data variables.product.prodname_vs %}](https://www.youtube.com/watch?v=P_zBgp_BE_I) sur le canal YouTube de Microsoft Visual Studio.

## Rôles pour {% data variables.visual_studio.prodname_vss_ghe %}

Avant de configurer {% data variables.visual_studio.prodname_vss_ghe %}, il est important de comprendre les rôles de cette offre combinée.

| Role | Service | Description | Informations complémentaires |
| :- | :- | :- | :- |
| **Administrateur des abonnements** | Abonnement {% data variables.product.prodname_vs %} | Personne qui affecte des licences pour l’abonnement {% data variables.product.prodname_vs %} | [Vue d’ensemble des responsabilités d’administrateur](https://docs.microsoft.com/en-us/visualstudio/subscriptions/admin-responsibilities) dans Microsoft Docs |
| **Abonné** | Abonnement {% data variables.product.prodname_vs %} | Personne qui utilise une licence pour l’abonnement {% data variables.product.prodname_vs %} | [Documentation sur les Abonnements Visual Studio](https://docs.microsoft.com/en-us/visualstudio/subscriptions/) dans Microsoft Docs |
| **Propriétaire d’entreprise** | {% data variables.product.prodname_dotcom %} | Utilisateur disposant d’un compte personnel qui est administrateur d’une entreprise sur {% data variables.location.product_location %} | « [Rôles dans une entreprise](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise#enterprise-owner) » |
| **Propriétaire de l'organisation** | {% data variables.product.prodname_dotcom %} | Utilisateur disposant d’un compte personnel qui est propriétaire d’une organisation dans l’entreprise de votre équipe sur {% data variables.location.product_location %} | « [Rôles dans une organisation](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization#organization-owners) » |
| **Membre d’entreprise** | {% data variables.product.prodname_dotcom %} | Utilisateur disposant d’un compte personnel qui est membre d’une entreprise sur {% data variables.location.product_location %} | « [Rôles dans une entreprise](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise#enterprise-members) »  |

## Prérequis

- L’abonnement {% data variables.product.prodname_vs %} de votre équipe doit inclure {% data variables.product.prodname_enterprise %}. Pour plus d’informations, consultez [Abonnements {% data variables.product.prodname_vs %} et avantages](https://visualstudio.microsoft.com/subscriptions/) sur le site web {% data variables.product.prodname_vs %} et [Vue d’ensemble des responsabilités d’administrateur](https://docs.microsoft.com/en-us/visualstudio/subscriptions/admin-responsibilities) dans Microsoft Docs.
 
 - Votre équipe doit avoir une entreprise sur {% data variables.location.product_location %}. Si vous ne savez pas si votre équipe dispose d’une entreprise, contactez votre administrateur {% data variables.product.prodname_dotcom %}. Si vous ne savez pas qui au sein de votre équipe est responsable de {% data variables.product.prodname_dotcom %}, contactez l’{% data variables.contact.contact_enterprise_sales %}. Pour plus d’informations, consultez « [À propos des comptes d’entreprise](/admin/overview/about-enterprise-accounts) ».

## Configuration de {% data variables.visual_studio.prodname_vss_ghe %}

Pour configurer {% data variables.visual_studio.prodname_vss_ghe %}, les membres de votre équipe doivent procéder comme suit.

Une même personne pourrait effectuer les tâches en ayant tous les rôles, mais vous devriez peut-être coordonner les tâches si plusieurs personnes sont impliquées. Pour plus d’informations, consultez « [Rôles pour {% data variables.visual_studio.prodname_vss_ghe %}](#roles-for-visual-studio-subscriptions-with-github-enterprise) ».

1. Un propriétaire d’entreprise doit créer au moins une organisation dans votre entreprise sur {% data variables.location.product_location %}. Pour plus d’informations, consultez « [Ajout d’organisations à votre entreprise](/admin/user-management/managing-organizations-in-your-enterprise/adding-organizations-to-your-enterprise) ».

1. L’administrateur des abonnements doit attribuer une licence pour {% data variables.product.prodname_vs %} à un abonné dans {% data variables.visual_studio.prodname_vss_admin_portal_with_url %}. Pour plus d’informations, consultez [Vue d’ensemble du portail d’administration des abonnements {% data variables.product.prodname_vs %}](https://docs.microsoft.com/en-us/visualstudio/subscriptions/using-admin-portal) et [Affecter des licences {% data variables.product.prodname_vs %} dans le portail d’administration des abonnements {% data variables.product.prodname_vs %}](https://docs.microsoft.com/en-us/visualstudio/subscriptions/assign-license) dans Microsoft Docs.

1. Si l’administrateur des abonnements a attribué des licences aux abonnés dans {% data variables.product.prodname_vs %} avant d’ajouter {% data variables.product.prodname_enterprise %} à l’abonnement, il peut déplacer les abonnés vers l’offre combinée dans le portail d’administration {% data variables.product.prodname_vs %}. Pour plus d’informations, consultez [Gérer les abonnements {% data variables.product.prodname_vs %} avec {% data variables.product.prodname_enterprise %}](https://docs.microsoft.com/en-us/visualstudio/subscriptions/assign-github#moving-to-visual-studio-with-github-enterprise) dans Microsoft Docs.

1. Si l’administrateur des abonnements n’a pas désactivé les notifications par e-mail, l’abonné reçoit deux e-mails de confirmation. Pour plus d’informations, consultez [Abonnements {% data variables.product.prodname_vs %} avec {% data variables.product.prodname_enterprise %}](https://docs.microsoft.com/en-us/visualstudio/subscriptions/access-github#what-is-the-visual-studio-subscription-with-github-enterprise-setup-process) dans Microsoft Docs.

1. Un propriétaire d’organisation doit inviter l’abonné à rejoindre l’organisation sur {% data variables.location.product_location %} à partir de l’étape 1. L’abonné peut accepter l’invitation avec un compte personnel existant sur {% data variables.product.prodname_dotcom_the_website %} ou créer un nouveau compte. Une fois que l’abonné a rejoint l’organisation, il devient membre d’entreprise. Pour plus d’informations, consultez « [Invitation d’utilisateurs à rejoindre votre organisation](/organizations/managing-membership-in-your-organization/inviting-users-to-join-your-organization) ».

   {% tip %}

   **Conseils** :

   - Même si ce n’est pas obligatoire, nous recommandons que le propriétaire d’organisation envoie une invitation à l’adresse e-mail utilisée pour le nom d’utilisateur principal (UPN) de l’abonné. Quand l’adresse e-mail sur {% data variables.location.product_location %} correspond à l’UPN de l’abonné, vous pouvez vous assurer qu’une autre entreprise ne revendique pas la licence de l’abonné.
   - Si l’abonné accepte l’invitation à rejoindre l’organisation avec un compte personnel existant sur {% data variables.location.product_location %}, nous recommandons qu’il ajoute l’adresse e-mail qu’il utilise pour {% data variables.product.prodname_vs %} à son compte personnel sur {% data variables.location.product_location %}. Pour plus d’informations, consultez « [Ajout d’une adresse e-mail à votre compte {% data variables.product.prodname_dotcom %}](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/adding-an-email-address-to-your-github-account) ».
   - Si le propriétaire d’organisation doit inviter un grand nombre d’abonnés, un script peut accélérer le processus. Pour plus d’informations, consultez l’[exemple de script PowerShell](https://github.com/github/platform-samples/blob/master/api/powershell/invite_members_to_org.ps1) dans le dépôt `github/platform-samples`.

    {% endtip %}

Une fois que {% data variables.visual_studio.prodname_vss_ghe %} est configuré pour des abonnés dans votre équipe, les propriétaires d’entreprise peuvent consulter les informations de licence sur {% data variables.location.product_location %}. Pour plus d’informations, consultez « [Affichage de l’abonnement et de l’utilisation pour votre compte d’entreprise](/billing/managing-billing-for-your-github-account/viewing-the-subscription-and-usage-for-your-enterprise-account) ».

## Pour aller plus loin

- « [Bien démarrer avec {% data variables.product.prodname_ghe_cloud %}](/get-started/onboarding/getting-started-with-github-enterprise-cloud) »
