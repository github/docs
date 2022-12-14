---
title: Gestion de la synchronisation des équipes pour votre organisation
intro: 'Vous pouvez activer et désactiver la synchronisation d’équipe entre votre fournisseur d’identité (IdP) et votre organisation sur {% data variables.product.product_name %}.'
redirect_from:
  - /articles/synchronizing-teams-between-your-identity-provider-and-github
  - /github/setting-up-and-managing-organizations-and-teams/synchronizing-teams-between-your-identity-provider-and-github
  - /github/articles/synchronizing-teams-between-okta-and-github
  - /github/setting-up-and-managing-organizations-and-teams/managing-team-synchronization-for-your-organization
permissions: Organization owners can manage team synchronization for an organization.
miniTocMaxHeadingLevel: 3
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Manage team synchronization
ms.openlocfilehash: 027669f75f3671394503e5036b8f6c86351697cf
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147093149'
---
{% data reusables.enterprise-accounts.emu-scim-note %}

## À propos de la synchronisation d’équipe

Vous pouvez activer la synchronisation d’équipe entre votre fournisseur d’identité et {% data variables.product.product_name %} pour permettre aux propriétaires de l’organisation et aux gestionnaires d’équipe de connecter les équipes de votre organisation à des groupes de fournisseurs d’identité.

{% data reusables.identity-and-permissions.about-team-sync %}

{% data reusables.saml.ghec-only %}

{% data reusables.identity-and-permissions.supported-idps-team-sync %}

{% data reusables.identity-and-permissions.sync-team-with-idp-group %}

Vous pouvez aussi activer la synchronisation d’équipe pour les organisations appartenant à un compte d’entreprise. Pour plus d’informations, consultez « [Gestion de la synchronisation des équipes dans votre entreprise](/enterprise-cloud@latest/admin/authentication/managing-identity-and-access-for-your-enterprise/managing-team-synchronization-for-organizations-in-your-enterprise) ».

{% data reusables.enterprise-accounts.team-sync-override %}

{% data reusables.identity-and-permissions.team-sync-usage-limits %}

## Activation de la synchronisation d’équipe

Les étapes permettant d’activer la synchronisation d’équipe dépendent du fournisseur d’identité que vous voulez utiliser. Des prérequis s’appliquent à chaque fournisseur d’identité pour activer la synchronisation d’équipe. Chaque fournisseur d’identité a des prérequis supplémentaires.

### Prérequis

{% data reusables.identity-and-permissions.team-sync-required-permissions %}

Vous devez activer l’authentification unique SAML pour votre organisation et votre fournisseur d’identité pris en charge. Pour plus d’informations, consultez « [Application de l’authentification unique SAML pour votre organisation](/articles/enforcing-saml-single-sign-on-for-your-organization) ».

Vous devez disposer d’une identité SAML liée. Pour créer une identité liée, vous devez vous authentifier auprès de votre organisation en utilisant l’authentification unique SAML et le fournisseur d’identité pris en charge au moins une fois. Pour plus d’informations, consultez « [Authentification avec l’authentification unique SAML](/articles/authenticating-with-saml-single-sign-on) ».

Vos paramètres SAML **doivent** contenir une URL de fournisseur d’identité valide pour le champ **Émetteur**. 

![Champ Émetteur SAML](/assets/images/help/saml/saml_issuer.png)



### Activation de la synchronisation d’équipe pour Azure AD

{% data reusables.identity-and-permissions.team-sync-azure-permissions %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security %} {% data reusables.identity-and-permissions.team-sync-confirm-saml %} {% data reusables.identity-and-permissions.enable-team-sync-azure %} {% data reusables.identity-and-permissions.team-sync-confirm %}
6. Passez en revue les informations du locataire du fournisseur d’identité que vous voulez connecter à votre organisation, puis cliquez sur **Approuver**.
  ![Demande en attente pour activer la synchronisation d’équipe sur un locataire de fournisseur d’identité spécifique avec l’option d’approbation ou d’annulation de la demande](/assets/images/help/teams/approve-team-synchronization.png)

### Activation de la synchronisation d’équipe pour Okta

La synchronisation d’équipe Okta nécessite que SAML et SCIM avec Okta aient déjà été configurés pour votre organisation.

Pour éviter les erreurs de synchronisation d’équipe potentielles avec Okta, nous vous recommandons de vérifier que les identités liées SCIM sont correctement configurées pour tous les membres de votre organisation qui sont membres de vos groupes Okta choisis avant d’activer la synchronisation d’équipe sur {% data variables.product.prodname_dotcom %}. 

Si un membre de l’organisation n’a pas d’identité SCIM liée, la synchronisation d’équipe ne fonctionnera pas comme prévu, et l’utilisateur peut ne pas être ajouté ou supprimé des équipes comme prévu. Si une identité liée SCIM est manquante pour un de ces utilisateurs, vous devez les reprovisionner.

Pour obtenir de l’aide sur le provisionnement des utilisateurs pour lesquels une identité liée SCIM est manquante, consultez « [Résolution des problèmes de gestion des identités et des accès pour votre organisation](/organizations/managing-saml-single-sign-on-for-your-organization/troubleshooting-identity-and-access-management-for-your-organization) ».

{% data reusables.identity-and-permissions.team-sync-okta-requirements %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security %} {% data reusables.identity-and-permissions.team-sync-confirm-saml %} {% data reusables.identity-and-permissions.team-sync-confirm-scim %}
1. Envisagez d’appliquer SAML dans votre organisation pour garantir que les membres de l’organisation lient leurs identités SAML et SCIM. Pour plus d’informations, consultez « [Application de l’authentification unique SAML pour votre organisation](/organizations/managing-saml-single-sign-on-for-your-organization/enforcing-saml-single-sign-on-for-your-organization) ».
{% data reusables.identity-and-permissions.enable-team-sync-okta %}
7. Sous le nom de votre organisation, entrez un jeton SSWS valide et l’URL vers votre instance Okta.
  ![Activer la synchronisation d’équipe - Formulaire d’organisation Okta](/assets/images/help/teams/confirm-team-synchronization-okta-organization.png)
6. Passez en revue les informations du locataire du fournisseur d’identité que vous voulez connecter à votre organisation, puis cliquez sur **Créer**.
  ![Activer la synchronisation d’équipe - Bouton Créer](/assets/images/help/teams/confirm-team-synchronization-okta.png)

## Désactivation de la synchronisation d’équipe

{% data reusables.identity-and-permissions.team-sync-disable %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security %}
5. Sous « Synchronisation d’équipe », cliquez sur **Désactiver la synchronisation d’équipe**.
  ![Désactiver la synchronisation d’équipe](/assets/images/help/teams/disable-team-synchronization.png)
