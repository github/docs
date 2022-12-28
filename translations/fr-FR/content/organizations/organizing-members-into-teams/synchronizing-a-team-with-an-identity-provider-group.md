---
title: Synchronisation d’une équipe avec un groupe de fournisseurs d’identité
intro: 'Vous pouvez synchroniser une équipe {% data variables.product.product_name %} avec un groupe de fournisseur d’identité pris en charge pour ajouter et supprimer automatiquement les membres de l’équipe.'
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/synchronizing-a-team-with-an-identity-provider-group
permissions: 'Organization owners and team maintainers can synchronize a {% data variables.product.prodname_dotcom %} team with an IdP group.'
versions:
  ghae: '*'
  ghec: '*'
  feature: scim-for-ghes
topics:
  - Organizations
  - Teams
shortTitle: Synchronize with an IdP
ms.openlocfilehash: c4ea8dc13eee674b962108ba52c71e67e8462b87
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106980'
---
{% data reusables.enterprise-accounts.emu-scim-note %}

## À propos de la synchronisation d’équipe

{% data reusables.identity-and-permissions.about-team-sync %}

{% ifversion ghec %}Vous pouvez connecter jusqu’à cinq groupes de fournisseurs d’identité à une équipe {% data variables.product.product_name %}.{% elsif ghae %}Vous pouvez connecter une équipe sur {% data variables.product.product_name %} à un groupe de fournisseurs d’identité. Tous les utilisateurs du groupe sont automatiquement ajoutés à l’équipe ainsi qu’à l’organisation parente en tant que membres. Lorsque vous déconnectez un groupe d’une équipe, les utilisateurs qui sont devenus membres de l’organisation via l’appartenance à l’équipe sont supprimés de l’organisation.{% endif %} Vous pouvez affecter un groupe de fournisseurs d’identité à plusieurs équipes {% data variables.product.product_name %}.

{% ifversion ghec %}La synchronisation d’équipe ne prend pas en charge les groupes de fournisseurs d’identité comptant plus de 5 000 membres.{% endif %}

Une fois qu’une équipe {% data variables.product.prodname_dotcom %} est connectée à un groupe de fournisseurs d’identité, votre administrateur de fournisseur d’identité doit apporter des modifications d’appartenance à l’équipe via le fournisseur d’identité. Vous ne pouvez pas gérer l’appartenance à l’équipe sur {% data variables.product.product_name %}{% ifversion ghec %} ou à l’aide de l’API{% endif %}.

{% ifversion ghec %}{% data reusables.enterprise-accounts.team-sync-override %}{% endif %}

{% ifversion ghec %}Toutes les modifications de l’appartenance à l’équipe effectuées via votre fournisseur d’identité apparaissent dans le journal d’audit sur {% data variables.product.product_name %} en tant modifications apportées par le bot de synchronisation d’équipe. Votre fournisseur d’identité envoie les données d’appartenance à l’équipe à {% data variables.product.prodname_dotcom %} une fois par heure.
La connexion d’une équipe à un groupe de fournisseurs d’identité peut avoir pour effet de supprimer certains membres de l’équipe. Pour plus d’informations, consultez « [Conditions requises pour les membres d’équipes synchronisées](#requirements-for-members-of-synchronized-teams) ».
{% endif %}

{% ifversion ghae %} Quand l’appartenance au groupe change sur votre fournisseur d’identité, celui-ci envoie une demande SCIM avec les modifications de {% data variables.product.product_name %} selon la planification déterminée par votre fournisseur d’identité. Toutes les demandes de modification de l’appartenance à l’équipe ou à l’organisation {% data variables.product.prodname_dotcom %} sont inscrites dans le journal d’audit comme des modifications apportées par le compte utilisé pour configurer l’approvisionnement d’utilisateurs. Pour plus d’informations sur ce compte, consultez « [Configuration de l’approvisionnement d’utilisateurs pour votre entreprise](/admin/authentication/configuring-user-provisioning-for-your-enterprise) ». Pour plus d’informations sur les planifications de demandes SCIM, consultez « [Vérifier l’état de l’approvisionnement des utilisateurs](https://docs.microsoft.com/en-us/azure/active-directory/app-provisioning/application-provisioning-when-will-provisioning-finish-specific-user) » dans les Microsoft Docs.{% endif %}

Des équipes parentes ne peuvent pas se synchroniser avec des groupes de fournisseurs d’identité. Si l’équipe que vous souhaitez connecter à un groupe de fournisseurs d’identité est une équipe parente, nous vous recommandons de créer une équipe ou de supprimer les relations imbriquées qui font de votre équipe une équipe parente. Pour plus d’informations, consultez « [À propos des équipes](/articles/about-teams#nested-teams) », « [Création d’une équipe](/organizations/organizing-members-into-teams/creating-a-team) » et « [Déplacement d’une équipe dans la hiérarchie de votre organisation](/articles/moving-a-team-in-your-organizations-hierarchy) ».

Pour gérer l’accès au dépôt pour toute équipe {% data variables.product.prodname_dotcom %}, y compris les équipes connectées à un groupe de fournisseurs d’identité, vous devez apporter des modifications avec {% data variables.product.product_name %}. Pour plus d’informations, consultez « [À propos des équipes](/articles/about-teams) » et « [Gestion de l’accès d’une équipe au dépôt d’une organisation](/articles/managing-team-access-to-an-organization-repository) ». 

{% ifversion ghec %}Vous pouvez également gérer la synchronisation d’équipe avec l’API. Pour plus d’informations, consultez « [Synchronisation d’équipe](/rest/reference/teams#team-sync) ».{% endif %}

{% ifversion ghec %}
## Conditions requises pour les membres d’équipes synchronisées

Une fois que vous avez connecté une équipe à un groupe de fournisseurs d’identité, la synchronisation d’équipe ajoute chaque membre du groupe IdP à l’équipe correspondante sur {% data variables.product.product_name %} uniquement si :
- La personne est membre de l’organisation sur {% data variables.product.product_name %}.
- La personne s’est déjà connectée avec son compte personnel sur {% data variables.product.product_name %}, et authentifiée auprès du compte d’organisation ou d’entreprise via une authentification unique SAML au moins une fois.
- L’identité SSO de la personne est membre du groupe de fournisseurs d’identité.  

Les équipes ou membres de groupe existants qui ne répondent pas à ces critères sont automatiquement supprimés de l’équipe sur {% data variables.product.product_name %} et perdent l’accès aux dépôts. La révocation de l’identité liée d’un utilisateur a également pour effet de supprimer l’utilisateur de toute équipe mappée aux groupes de fournisseur d’identité. Pour plus d’informations, consultez « [Affichage et gestion de l’accès SAML d’un membre à votre organisation](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization#viewing-and-revoking-a-linked-identity) » et « [Visualisation et gestion de l’accès SAML d’un utilisateur à votre entreprise](/enterprise-cloud@latest/admin/user-management/managing-users-in-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise#viewing-and-revoking-a-linked-identity) ».

Un membre d’équipe supprimé peut être rajouté automatiquement à une équipe une fois qu’il s’est authentifié auprès du compte d’organisation ou d’entreprise à l’aide de SSO, et est déplacé vers le groupe de fournisseurs d’identité connecté.

Pour éviter toute suppression involontaire de membres d’équipe, nous vous recommandons d’appliquer une SSO SAML dans votre compte d’organisation ou d’entreprise, en créant de nouvelles équipes pour synchroniser les données d’appartenance, et en vérifiant l’appartenance au groupe de fournisseurs d’identité avant de synchroniser des équipes existantes. Pour plus d’informations, consultez « [Application d’une authentification unique SAML pour votre organisation](/articles/enforcing-saml-single-sign-on-for-your-organization) » et « [Configuration d’une authentification unique (SSO) SAML pour votre entreprise](/enterprise-cloud@latest/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise) ».

{% endif %}

## Prérequis

{% ifversion ghec %} Avant de pouvoir connecter une équipe {% data variables.product.product_name %} avec un groupe de fournisseurs d’identité, un propriétaire d’organisation ou d’entreprise doit activer la synchronisation d’équipe pour votre compte d’organisation ou d’entreprise. Pour plus d’informations, consultez « [Gestion de la synchronisation d’équipe pour votre organisation](/organizations/managing-saml-single-sign-on-for-your-organization/managing-team-synchronization-for-your-organization) » et « [Gestion de la synchronisation d’équipe pour les organisations dans votre compte d’entreprise](/enterprise-cloud@latest/admin/authentication/managing-identity-and-access-for-your-enterprise/managing-team-synchronization-for-organizations-in-your-enterprise) ».

Pour éviter toute suppression involontaire de membres d’équipe, visitez le portail d’administration de votre fournisseur d’identité, et vérifiez que chaque membre de l’équipe actuelle se trouve également dans les groupes de fournisseurs d’identité que vous souhaitez connecter à cette équipe. Si vous n’avez pas accès à votre fournisseur d’identité, vous pouvez contacter l’administrateur de votre fournisseur d’identité.

Vous devez vous authentifier à l’aide d’une SSO SAML. Pour plus d’informations, consultez « [Authentification avec l’authentification unique SAML](/articles/authenticating-with-saml-single-sign-on) ».

{% elsif ghae %} Pour pouvoir connecter une équipe {% data variables.product.product_name %} avec un groupe de fournisseurs d’identité, vous devez d’abord configurer le provisionnement d’utilisateurs pour {% data variables.location.product_location %} en utilisant un SCIM (System for Cross-domain Identity Management) pris en charge. Pour plus d’informations, consultez « [Configuration de l’approvisionnement d’utilisateurs pour votre entreprise](/admin/authentication/configuring-user-provisioning-for-your-enterprise) ».

Une fois l’approvisionnement d’utilisateurs pour {% data variables.product.product_name %} configuré à l’aide de SCIM, vous pouvez affecter l’application {% data variables.product.product_name %} à chaque groupe de fournisseurs d’identité que vous souhaitez utiliser sur {% data variables.product.product_name %}. Pour plus d’informations, consultez [Configurer le provisionnement automatique d’utilisateurs sur GitHub AE](https://docs.microsoft.com/en-us/azure/active-directory/saas-apps/github-ae-provisioning-tutorial#step-5-configure-automatic-user-provisioning-to-github-ae) dans Microsoft Docs.

{% elsif scim-for-ghes %} Vous devez configurer le provisionnement d’utilisateurs avec SCIM pour {% data variables.location.product_location %}. Pour plus d’informations, consultez « [Configuration du provisionnement d’utilisateurs avec SCIM pour votre entreprise](/admin/identity-and-access-management/using-saml-for-enterprise-iam/configuring-user-provisioning-with-scim-for-your-enterprise) ».

{% data reusables.scim.ghes-beta-note %} {% endif %}

## Connexion d’un groupe de fournisseurs d’identité à une équipe

Lorsque vous connectez un groupe de fournisseurs d’identité à une équipe {% data variables.product.product_name %}, tous les utilisateurs membres du groupe sont automatiquement ajoutés à l’équipe. {% ifversion ghae %}Tous les utilisateurs qui n’étaient pas déjà membres de l’organisation parente sont également ajoutés à l’organisation.{% endif %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.specific_team %} {% data reusables.organizations.team_settings %} {% ifversion ghec %}
6. Sous « Groupes de fournisseurs d’identité », utilisez le menu déroulant, puis sélectionnez jusqu’à 5 groupes de fournisseurs d’identité.
    ![Menu déroulant pour choisir le groupe de fournisseurs d’identité](/assets/images/help/teams/choose-an-idp-group.png){% elsif ghae %}
6. Sous « Groupe de fournisseurs d’identité », utilisez le menu déroulant, puis sélectionnez un groupe de fournisseurs d’identité dans la liste.
    ![Menu déroulant pour choisir un groupe de fournisseurs d’identité](/assets/images/enterprise/github-ae/teams/choose-an-idp-group.png){% endif %}
7. Cliquez sur **Save changes**.

## Déconnexion d’un groupe de fournisseurs d’identité d’une équipe

Si vous déconnectez un groupe de fournisseurs d’identité d’une équipe {% data variables.product.prodname_dotcom %}, les membres de l’équipe qui ont été affectés à l’équipe {% data variables.product.prodname_dotcom %} via le groupe de fournisseurs d’identité sont supprimés de l’équipe. {% ifversion ghae %} Tous les utilisateurs qui étaient membres de l’organisation parente uniquement en raison de cette connexion d’équipe sont également supprimés de l’organisation.{% endif %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.specific_team %} {% data reusables.organizations.team_settings %} {% ifversion ghec %}
6. Si vous le souhaitez, sous « Groupes de fournisseurs d’identité », à droite du groupe de fournisseurs d’identité que vous souhaitez déconnecter, cliquez sur {% octicon "x" aria-label="X symbol" %}. 
    ![Désélectionner un groupe de fournisseurs d’identité connecté dans l’équipe GitHub](/assets/images/help/teams/unselect-idp-group.png){% elsif ghae %}
6. Si vous le souhaitez, sous « Groupe de fournisseurs d’identité », à droite du groupe de fournisseurs d’identité que vous souhaitez déconnecter, cliquez sur {% octicon "x" aria-label="X symbol" %}. 
    ![Désélectionner un groupe de fournisseurs d’identité connecté dans l’équipe GitHub](/assets/images/enterprise/github-ae/teams/unselect-idp-group.png){% endif %}
7. Cliquez sur **Save changes**.
