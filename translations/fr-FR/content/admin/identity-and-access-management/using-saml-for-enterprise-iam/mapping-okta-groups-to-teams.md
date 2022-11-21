---
title: Mappage de groupes Okta aux équipes
shortTitle: Map Okta groups to teams
intro: 'Vous pouvez mapper vos groupes Okta à des équipes sur {% data variables.product.prodname_ghe_managed %} pour ajouter et supprimer automatiquement des membres d’équipe.'
permissions: 'Enterprise owners can configure authentication and provisioning for {% data variables.product.prodname_ghe_managed %}.'
versions:
  ghae: '*'
redirect_from:
  - /admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams
  - /admin/identity-and-access-management/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
  - SSO
ms.openlocfilehash: 43185a1593892086064588ceb593a72b9d93ea3f
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145104865'
---
{% data reusables.saml.okta-ae-sso-beta %}

## À propos du mappage d’équipe

Si vous utilisez Okta en tant que fournisseur d’identité, vous pouvez mapper votre groupe Okta à une équipe dans {% data variables.product.prodname_ghe_managed %}. Les membres du groupe Okta deviennent automatiquement membres de l’équipe {% data variables.product.prodname_ghe_managed %} mappée. Pour configurer ce mappage, vous pouvez configurer l’application « GitHub AE » Okta pour envoyer le groupe et ses membres à {% data variables.product.prodname_ghe_managed %}. Vous pouvez ensuite choisir l’équipe dans {% data variables.product.prodname_ghe_managed %} qui sera mappée au groupe Okta.

## Prérequis

Vous ou votre administrateur Okta devez être un Administrateur général ou un administrateur de rôle privilégié dans Okta.
 
Vous devez activer l’authentification unique SAML avec Okta. Pour plus d’informations, consultez « [Configuration de l’authentification unique SAML pour votre entreprise](/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise) ».

Vous devez vous authentifier auprès de votre compte d’entreprise à l’aide de l’authentification unique SAML et d’Okta. Pour plus d’informations, consultez « [Authentification avec l’authentification unique SAML](/github/authenticating-to-github/authenticating-with-saml-single-sign-on) ».

## Affectation de votre groupe Okta à l’application « GitHub AE »

1. Dans le tableau de bord Okta, ouvrez les paramètres de votre groupe.
1. Cliquez sur **Gérer les applications**.
  ![Ajouter un groupe à l’application](/assets/images/help/saml/okta-ae-group-add-app.png)

1. À droite de « GitHub AE », cliquez sur **Affecter**.

  ![Affecter une application](/assets/images/help/saml/okta-ae-assign-group-to-app.png)

1. Cliquez sur **Done**.

## Envoi du groupe Okta à {% data variables.product.prodname_ghe_managed %}

Lorsque vous envoyez un groupe Okta et mappez le groupe à une équipe, tous les membres du groupe pourront se connecter à {% data variables.product.prodname_ghe_managed %}.

{% data reusables.saml.okta-ae-applications-menu %} {% data reusables.saml.okta-ae-configure-app %}

1. Cliquez sur **Groupes Push**.

  ![Onglet Groupes Push](/assets/images/help/saml/okta-ae-push-groups-tab.png)

1. Sélectionnez le menu déroulant Groupes Push, puis cliquez sur **Rechercher des groupes par nom**.

  ![Bouton Ajouter des groupes](/assets/images/help/saml/okta-ae-push-groups-add.png)

1. Tapez le nom du groupe à envoyer à {% data variables.product.prodname_ghe_managed %}, puis cliquez sur **Enregistrer**.

  ![Ajouter un nom de groupe](/assets/images/help/saml/okta-ae-push-groups-by-name.png)

## Mappage d’une équipe au groupe Okta

Vous pouvez mapper une équipe dans votre entreprise à un groupe Okta que vous avez précédemment envoyé à {% data variables.product.prodname_ghe_managed %}. Les membres du groupe Okta devient automatiquement membres de l’équipe {% data variables.product.prodname_ghe_managed %}. Toutes les modifications suivantes apportées à l’appartenance au groupe Okta sont automatiquement synchronisées avec l’équipe {% data variables.product.prodname_ghe_managed %}.

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.specific_team %} {% data reusables.organizations.team_settings %}
6. Sous « Groupe de fournisseurs d’identité », sélectionnez le menu déroulant, puis cliquez sur un groupe de fournisseurs d’identité.
    ![Menu déroulant pour choisir le groupe de fournisseur d’identité](/assets/images/enterprise/github-ae/teams/choose-an-idp-group.png)
7. Cliquez sur **Save changes**.

## Vérification de l’état de vos équipes mappées

Les propriétaires d’entreprise peuvent utiliser le tableau de bord d’administrateur de site pour vérifier comment les groupes Okta sont mappés aux équipes sur {% data variables.product.prodname_ghe_managed %}.

1. Pour accéder au tableau de bord, dans l’angle supérieur droit de n’importe quelle page, cliquez sur {% octicon "rocket" aria-label="The rocket ship" %}.
  ![Icône de fusée donnant accès aux paramètres d’administration de site](/assets/images/enterprise/site-admin-settings/access-new-settings.png)

1. Dans le volet de gauche, cliquez sur **Groupes externes**.

  ![Ajouter un nom de groupe](/assets/images/help/saml/okta-ae-site-admin-external-groups.png)

1. Pour afficher plus d’informations sur un groupe, dans la liste des groupes externes, cliquez sur un groupe.

  ![Liste de groupes externes](/assets/images/help/saml/okta-ae-site-admin-list-groups.png)

1. Les détails du groupe incluent le nom du groupe Okta, une liste des utilisateurs Okta membres du groupe et l’équipe mappée correspondante sur {% data variables.product.prodname_ghe_managed %}. 

  ![Liste de groupes externes](/assets/images/help/saml/okta-ae-site-admin-group-details.png)

## Affichage des événements du journal d’audit pour les groupes mappés

 Pour surveiller l’activité d’authentification unique pour les groupes mappés, vous pouvez passer en revue les événements suivants dans le journal d’audit de {% data variables.product.prodname_ghe_managed %}.

{% data reusables.saml.external-group-audit-events %}

{% data reusables.saml.external-identity-audit-events %}

Pour plus d’informations, consultez « [Examen du journal d’audit de votre organisation](/organizations/keeping-your-organization-secure/reviewing-the-audit-log-for-your-organization) ».
