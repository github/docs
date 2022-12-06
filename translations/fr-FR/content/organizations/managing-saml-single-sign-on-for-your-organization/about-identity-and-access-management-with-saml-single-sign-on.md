---
title: À propos de la gestion des identités et des accès avec l’authentification unique SAML
intro: 'Si vous gérez de façon centralisée les identités et les applications de vos utilisateurs avec un fournisseur d’identité, vous pouvez configurer l’authentification unique SAML (Security Assertion Markup Language) pour protéger les ressources de votre organisation sur {% data variables.product.prodname_dotcom %}.'
redirect_from:
  - /articles/about-identity-and-access-management-with-saml-single-sign-on
  - /github/setting-up-and-managing-organizations-and-teams/about-identity-and-access-management-with-saml-single-sign-on
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: IAM with SAML SSO
ms.openlocfilehash: 63ed023c1ca5d52ea7b06f5fd485c5e0b34c9750
ms.sourcegitcommit: 6b649e03ca2fef38c9ebbeec92102219849380e2
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/31/2022
ms.locfileid: '148120616'
---
{% data reusables.saml.ghec-only %}

## À propos de l’authentification unique (SSO) SAML

{% data reusables.saml.dotcom-saml-explanation %}

{% data reusables.saml.saml-accounts %}

{% data reusables.saml.resources-without-sso %}

{% data reusables.saml.outside-collaborators-exemption %}

Des propriétaires d’organisation peuvent appliquer une authentification unique (SSO) SAML pour une organisation individuelle, ou des propriétaires d’entreprise peuvent appliquer une SSO SAML pour toutes les organisations dans un compte d’entreprise. Pour plus d’informations, consultez « [Configuration de l’authentification unique SAML pour votre entreprise](/enterprise-cloud@latest/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise) ».

Avant d’activer un SSO SAML pour votre organisation, vous devez connecter votre fournisseur d’identité à votre organisation. Pour plus d’informations, consultez « [Connexion de votre fournisseur d’identité à votre organisation](/organizations/managing-saml-single-sign-on-for-your-organization/connecting-your-identity-provider-to-your-organization) ».

Pour une organisation, la SSO SAML peut être désactivée, activée mais pas appliquée ou activée et appliquée. Une fois que vous avez activé une SSO SAML pour votre organisation et que les membres de celle-ci s’authentifient correctement auprès de votre fournisseur d’identité, vous pouvez appliquer la configuration de la SSO SAML. Pour plus d’informations sur l’application de la SSO SAML pour votre organisation {% data variables.product.prodname_dotcom %}, consultez « [Application d’une authentification unique SAML pour votre organisation](/articles/enforcing-saml-single-sign-on-for-your-organization) ».

Les membres doivent régulièrement s’authentifier auprès de votre fournisseur d’identité pour accéder aux ressources de votre organisation. La durée de cette période de connexion est spécifiée par votre fournisseur d’identité. Elle est généralement de 24 heures. Cette exigence de connexion périodique limite la durée d’accès et oblige vos utilisateurs à s’identifier à nouveau pour continuer.

Pour accéder aux ressources protégées de l’organisation en utilisant l’API et Git sur la ligne de commande, vos utilisateurs doivent s’autoriser et s’authentifier avec un {% data variables.product.pat_generic %} ou une clé SSH. Pour plus d’informations, consultez « [Autorisation d’un {% data variables.product.pat_generic %} à utiliser avec l’authentification unique SAML](/github/authenticating-to-github/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on) » et « [Autorisation d’une clé SSH à utiliser avec l’authentification unique SAML](/github/authenticating-to-github/authorizing-an-ssh-key-for-use-with-saml-single-sign-on) ».

La première fois qu’un membre utilise l’authentification unique SAML pour accéder à votre organisation, {% data variables.product.prodname_dotcom %} crée automatiquement un enregistrement qui lie votre organisation, le compte du membre sur {% data variables.location.product_location %} et le compte du membre sur votre fournisseur d’identité. Vous pouvez aussi visualiser et révoquer l’identité SAML liée, les sessions actives et les informations d’identification autorisées pour les membres de votre compte d’organisation ou d’entreprise. Pour plus d’informations, consultez « [Affichage et gestion de l’accès SAML d’un membre à votre organisation](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization) » et « [Visualisation et gestion de l’accès SAML d’un utilisateur à votre entreprise](/enterprise-cloud@latest/admin/user-management/managing-users-in-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise) ».

Si des membres sont connectés avec une session SSO SAML quand ils créent un dépôt, la visibilité par défaut de celui-ci est privée. Sinon, la visibilité par défaut est publique. Pour plus d’informations sur la visibilité des dépôts, consultez « [À propos des dépôts](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility) ».

Les membres de l’organisation doivent également disposer d’une session SAML active pour autoriser une {% data variables.product.prodname_oauth_app %}. Vous pouvez vous soustraire à cette exigence en contactant {% data variables.contact.contact_support %}. {% data variables.product.product_name %} ne recommande pas de se soustraire à cette exigence, ce qui exposerait votre organisation à un risque accru de prises de contrôle de compte et de perte potentielle de données.

{% data reusables.saml.saml-single-logout-not-supported %}

## Services SAML pris en charge

{% data reusables.saml.saml-supported-idps %}

Certains fournisseurs d’identité prennent en charge l’approvisionnement de l’accès à une organisation {% data variables.product.prodname_dotcom %} via SCIM. Pour plus d’informations, consultez « [À propos de SCIM pour les organisations](/organizations/managing-saml-single-sign-on-for-your-organization/about-scim-for-organizations) ».

{% data reusables.scim.enterprise-account-scim %} 

## Ajout de membres à une organisation à l’aide d’une SSO SAML

Une fois que vous avez activé l’authentification unique SAML, vous pouvez ajouter de nouveaux membres à votre organisation de plusieurs manières. Des propriétaires d’organisation peuvent inviter de nouveaux membres sur {% data variables.product.product_name %} manuellement ou à l’aide de l’API. Pour plus d’informations, consultez « [Invitation d’utilisateurs à rejoindre votre organisation](/articles/inviting-users-to-join-your-organization) » et « [Membres](/rest/reference/orgs#add-or-update-organization-membership) ».

Pour provisionner de nouveaux utilisateurs sans invitation du propriétaire d’une organisation, vous pouvez utiliser l’URL `https://github.com/orgs/ORGANIZATION/sso/sign_up`, en remplaçant _ORGANIZATION_ par le nom de votre organisation. Par exemple, vous pouvez configurer votre fournisseur d’identité de manière à ce que toute personne ayant accès à celui-ci puisse cliquer sur un lien dans son tableau de bord pour rejoindre votre organisation {% data variables.product.prodname_dotcom %} .

{% note %}

**Remarque :** le provisionnement de nouveaux utilisateurs via `https://github.com/orgs/ORGANIZATION/sso/sign_up` est pris en charge uniquement lorsque l’authentification unique SAML est configurée au niveau de l’organisation. Il n’est pas pris en charge quand l’authentification unique SAML est configurée au niveau du compte d’entreprise. Pour plus d’informations sur l’authentification unique SAML pour les comptes d’entreprise, consultez « [À propos de SAML pour la gestion des identités et des accès d’entreprise](/admin/identity-and-access-management/using-saml-for-enterprise-iam/about-saml-for-enterprise-iam) ».

{% endnote %}

Si votre fournisseur d’identité prend en charge SCIM, {% data variables.product.prodname_dotcom %} peut inviter automatiquement des membres à rejoindre votre organisation lorsque vous leur donnez accès sur votre fournisseur d’identité. Si vous supprimez l’accès d’un membre à votre organisation {% data variables.product.prodname_dotcom %} sur votre fournisseur d’identité SAML, le membre est automatiquement supprimé de l’organisation {% data variables.product.prodname_dotcom %}. Pour plus d’informations, consultez « [À propos de SCIM pour les organisations](/organizations/managing-saml-single-sign-on-for-your-organization/about-scim-for-organizations) ».

{% data reusables.organizations.team-synchronization %}

{% data reusables.saml.saml-single-logout-not-supported %}

## Pour aller plus loin

- « [Référence de configuration SAML](/admin/identity-and-access-management/using-saml-for-enterprise-iam/saml-configuration-reference) »
- « [À propos de l’authentification à deux facteurs et de l’authentification unique SAML](/articles/about-two-factor-authentication-and-saml-single-sign-on) »
- « [À propos de l’authentification à l’aide de l’authentification unique SAML](/github/authenticating-to-github/about-authentication-with-saml-single-sign-on) »
