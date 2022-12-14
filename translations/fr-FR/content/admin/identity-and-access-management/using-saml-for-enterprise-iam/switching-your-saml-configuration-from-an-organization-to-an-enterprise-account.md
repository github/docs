---
title: Basculement de votre configuration SAML d’une organisation à un compte d’entreprise
intro: Découvrez des considérations spéciales et les bonnes pratiques pour remplacer une configuration SAML au niveau de l’organisation par une configuration SAML au niveau de l’entreprise.
permissions: Enterprise owners can configure SAML single sign-on for an enterprise account.
versions:
  ghec: '*'
topics:
  - Authentication
  - Enterprise
  - Organizations
type: how_to
shortTitle: From organization to enterprise
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/configuring-identity-and-access-management-for-your-enterprise-account/switching-your-saml-configuration-from-an-organization-to-an-enterprise-account
  - /admin/authentication/managing-identity-and-access-for-your-enterprise/switching-your-saml-configuration-from-an-organization-to-an-enterprise-account
  - /admin/identity-and-access-management/managing-iam-for-your-enterprise/switching-your-saml-configuration-from-an-organization-to-an-enterprise-account
ms.openlocfilehash: 0fa75185767984db574fc12a9e84404d5da9e002
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145102902'
---
## À propos de l’authentification unique SAML pour les comptes d’entreprise

{% data reusables.saml.dotcom-saml-explanation %} {% data reusables.saml.about-saml-enterprise-accounts %}

{% data reusables.saml.switching-from-org-to-enterprise %} 

Lorsque vous configurez l’authentification unique SAML au niveau de l’organisation, chaque organisation doit être configurée avec un locataire SSO unique dans votre fournisseur d’identité, ce qui signifie que vos membres sont associés à un enregistrement d’identité SAML unique pour chaque organisation avec laquelle ils ont réussi à s’authentifier. Si vous configurez l’authentification unique SAML pour votre compte d’entreprise à la place, chaque membre d’entreprise aura une identité SAML utilisée pour toutes les organisations appartenant au compte d’entreprise.

Une fois que vous avez configuré l’authentification unique SAML pour votre compte d’entreprise, la nouvelle configuration remplace toutes les configurations d’authentification unique SAML existantes pour les organisations appartenant au compte d’entreprise.

Les membres d’entreprise ne sont pas avertis lorsqu’un propriétaire d’entreprise active SAML pour le compte d’entreprise. Si l’authentification unique SAML était précédemment appliquée au niveau de l’organisation, les membres ne doivent pas voir une différence majeure lorsqu’ils accèdent directement aux ressources de l’organisation. Les membres continuent d’être invités à s’authentifier via SAML. Si les membres accèdent aux ressources de l’organisation via leur tableau de bord de fournisseur d’identité, ils doivent cliquer sur la nouvelle vignette de l’application au niveau de l’entreprise, au lieu de l’ancienne vignette de l’application au niveau de l’organisation. Les membres pourront ensuite choisir l’organisation à laquelle accéder. 

Tous les jetons d’accès personnels (PAT), les clés SSH, les {% data variables.product.prodname_oauth_apps %} et les {% data variables.product.prodname_github_apps %} qui étaient précédemment autorisés pour l’organisation continuent d’être autorisés pour l’organisation. Toutefois, les membres doivent autoriser les jetons PAT, les clés SSH, les {% data variables.product.prodname_oauth_apps %} et les {% data variables.product.prodname_github_apps %} qui n’ont jamais été autorisés à être utilisés avec l’authentification unique SAML pour l’organisation.

Le provisionnement SCIM n’est actuellement pas pris en charge lorsque l’authentification unique SAML est configurée pour un compte d’entreprise. Si vous utilisez actuellement SCIM pour une organisation appartenant à votre compte d’entreprise, vous perdrez cette fonctionnalité lors du passage à une configuration au niveau de l’entreprise.

Vous n’êtes pas obligé de supprimer les configurations SAML au niveau de l’organisation avant de configurer l’authentification unique SAML pour votre compte d’entreprise, mais vous pouvez envisager de le faire. Si SAML est désactivé pour le compte d’entreprise à l’avenir, toutes les configurations SAML restantes au niveau de l’organisation prendront effet. La suppression des configurations au niveau de l’organisation peut empêcher des problèmes inattendus à l’avenir.

## Basculement de votre configuration SAML d’une organisation à un compte d’entreprise

1. Appliquez l’authentification unique SAML pour votre compte d’entreprise, en vous assurant que tous les membres de l’organisation sont affectés ou se voient attribuer l’accès à l’application de fournisseur d’identité utilisée pour le compte d’entreprise. Pour plus d’informations, consultez « [Configuration de l’authentification unique SAML pour votre entreprise](/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise) ».
1. Si vous le souhaitez, supprimez toute configuration SAML existante pour les organisations appartenant au compte d’entreprise. Pour vous aider à décider s’il faut ou non supprimer les configurations, consultez « [À propos de l’authentification unique SAML pour les comptes d’entreprise](#about-saml-single-sign-on-for-enterprise-accounts) ».
1. Si vous avez maintenu en place des configurations SAML au niveau de l’organisation, pour éviter toute confusion, envisagez de masquer la vignette pour les applications au niveau de l’organisation dans votre fournisseur d’identité.
1. Conseillez les membres de votre entreprise au sujet de la modification.
   -  Les membres ne pourront plus accéder à leur organisation en cliquant sur l’application SAML de l’organisation dans le tableau de bord du fournisseur d’identité. Ils devront utiliser la nouvelle application configurée pour le compte d’entreprise.
   - Les membres devront autoriser les jetons PAT ou les clés SSH qui n’étaient pas précédemment autorisées à être utilisées avec l’authentification unique SAML pour leur organisation. Pour plus d’informations, consultez « [Autorisation d’un jeton d’accès personnel à utiliser avec l’authentification unique SAML](/github/authenticating-to-github/authenticating-with-saml-single-sign-on/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on) » ou « [Autorisation d’une clé SSH pour l’utiliser avec l’authentification unique SAML](/github/authenticating-to-github/authenticating-with-saml-single-sign-on/authorizing-an-ssh-key-for-use-with-saml-single-sign-on) ».
   - Les membres peuvent avoir besoin d’autoriser à nouveau les {% data variables.product.prodname_oauth_apps %} qui étaient précédemment autorisées pour l’organisation. Pour plus d’informations, consultez « [À propos de l’authentification à l’aide de l’authentification unique SAML](/github/authenticating-to-github/authenticating-with-saml-single-sign-on/about-authentication-with-saml-single-sign-on#about-oauth-apps-github-apps-and-saml-sso) ».
