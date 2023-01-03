---
title: Configuration de l’authentification et de l’approvisionnement pour votre entreprise à l’aide d’Azure AD
shortTitle: Configure with Azure AD
intro: "Vous pouvez utiliser un locataire dans Azure Active Directory (Azure\_AD) comme fournisseur d’identité (IdP) pour gérer de manière centralisée l’authentification et le provisionnement d’utilisateurs pour {% data variables.location.product_location %}."
permissions: 'Enterprise owners can configure authentication and provisioning for an enterprise on {% data variables.product.product_name %}.'
versions:
  ghae: '*'
  feature: scim-for-ghes
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
  - SSO
redirect_from:
  - /admin/authentication/configuring-authentication-and-provisioning-for-your-enterprise-using-azure-ad
  - /admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/configuring-authentication-and-provisioning-for-your-enterprise-using-azure-ad
  - /admin/identity-and-access-management/configuring-authentication-and-provisioning-with-your-identity-provider/configuring-authentication-and-provisioning-for-your-enterprise-using-azure-ad
ms.openlocfilehash: c0291aab00df0139b0b54eda8ec34b6e20deb19f
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192680'
---
## À propos de l’authentification et de l’approvisionnement d’utilisateurs avec Azure AD

Azure Active Directory (Azure AD) est un service de Microsoft qui vous permet de gérer de manière centralisée les comptes d’utilisateur et d’accéder aux applications web. Pour plus d’informations, consultez [Qu’est-ce qu’Azure Active Directory ?](https://docs.microsoft.com/azure/active-directory/fundamentals/active-directory-whatis) dans Microsoft Docs.

{% data reusables.saml.idp-saml-and-scim-explanation %}

{% data reusables.scim.ghes-beta-note %}

Après avoir activé l’authentification unique SAML et SCIM pour {% data variables.product.product_name %} à l’aide d’Azure AD, vous pouvez effectuer les opérations suivantes à partir de votre locataire Azure AD.

* Affectez l’application {% data variables.product.product_name %} sur Azure AD à un compte d’utilisateur pour créer et accorder automatiquement l’accès à un compte d’utilisateur correspondant sur {% data variables.product.product_name %}.
* Désaffectez l’application {% data variables.product.product_name %} d’un compte d’utilisateur sur Azure AD pour désactiver le compte d’utilisateur correspondant sur {% data variables.product.product_name %}.
* Affectez l’application {% data variables.product.product_name %} à un groupe d’IdP sur Azure AD pour créer et accorder automatiquement l’accès aux comptes d’utilisateur sur {% data variables.product.product_name %} pour tous les membres du groupe d’IdP. De plus, le groupe d’IdP est disponible sur {% data variables.product.product_name %} pour la connexion à une équipe et à son organisation parente.
* Désaffectez l’application {% data variables.product.product_name %} d’un groupe d’IdP pour désactiver les comptes d’utilisateur {% data variables.product.product_name %} de tous les utilisateurs du fournisseur d’identité ayant accès uniquement via ce groupe d’IdP et supprimer les utilisateurs de l’organisation parente. Le groupe d’IdP est déconnecté de toutes les équipes sur {% data variables.product.product_name %}.

Pour plus d’informations sur la gestion des identités et des accès pour votre entreprise sur {% data variables.location.product_location %}, consultez « [Gestion des identités et des accès pour votre entreprise](/admin/authentication/managing-identity-and-access-for-your-enterprise) ».

## Prérequis

- Pour configurer l’authentification et l’approvisionnement d’utilisateurs pour {% data variables.product.product_name %} à l’aide d’Azure AD, vous devez disposer d’un compte et d’un locataire Azure AD. Pour plus d’informations, consultez le [site web Azure AD](https://azure.microsoft.com/free/active-directory) et le [Guide de démarrage rapide : Créer un locataire Azure Active Directory](https://docs.microsoft.com/azure/active-directory/develop/quickstart-create-new-tenant) dans Microsoft Docs.

{%- ifversion scim-for-ghes %}
- {% data reusables.saml.ghes-you-must-configure-saml-sso %} {%- endif %}

- {% data reusables.saml.create-a-machine-user %}

## Configuration de l’authentification et de l’approvisionnement d’utilisateurs avec Azure AD

{% ifversion ghae %}

Dans votre locataire Azure AD, ajoutez l’application pour {% data variables.product.product_name %}, puis configurez le provisionnement.

1. Dans Azure AD, ajoutez le {% data variables.enterprise.ae_azure_ad_app_link %} à votre locataire et configurez l’authentification unique. Pour plus d’informations, consultez [Tutoriel : Intégration de l’authentification unique (SSO) Azure Active Directory à {% data variables.product.product_name %}](https://docs.microsoft.com/azure/active-directory/saas-apps/github-ae-tutorial) dans Microsoft Docs.

1. Dans {% data variables.product.product_name %}, entrez les détails de votre locataire Azure AD.

    - {% data reusables.saml.ae-enable-saml-sso-during-bootstrapping %}

    - Si vous avez déjà configuré l’authentification unique SAML pour {% data variables.location.product_location %} à l’aide d’un autre fournisseur d’identité et que vous souhaitez utiliser Azure AD à la place, vous pouvez modifier votre configuration. Pour plus d’informations, consultez « [Configuration de l’authentification unique SAML pour votre entreprise](/admin/authentication/configuring-saml-single-sign-on-for-your-enterprise#editing-the-saml-sso-configuration) ».

1. Activez l’approvisionnement d’utilisateurs dans {% data variables.product.product_name %} et configurez l’approvisionnement d’utilisateurs dans Azure AD. Pour plus d’informations, consultez « [Configuration de l’approvisionnement d’utilisateurs pour votre entreprise](/admin/authentication/configuring-user-provisioning-for-your-enterprise#enabling-user-provisioning-for-your-enterprise) ».

{% elsif scim-for-ghes %}

1. Configurez l’authentification unique SAML pour {% data variables.location.product_location %}. Pour plus d’informations, consultez « [Configuration de l’authentification unique SAML pour votre entreprise](/admin/identity-and-access-management/using-saml-for-enterprise-iam/configuring-saml-single-sign-on-for-your-enterprise#configuring-saml-sso) ».
1. Configurez le provisionnement d’utilisateurs avec SCIM pour votre instance. Pour plus d’informations, consultez « [Configuration du provisionnement d’utilisateurs avec SCIM pour votre entreprise](/admin/identity-and-access-management/using-saml-for-enterprise-iam/configuring-user-provisioning-with-scim-for-your-enterprise) ».

{% endif %}

## Gestion des propriétaires d’entreprise 

Les étapes permettant de faire d’une personne un propriétaire d’entreprise varient selon si vous utilisez uniquement SAML ou si vous utilisez également SCIM. Pour plus d’informations sur les propriétaires d’entreprise, consultez « [Rôles dans une entreprise](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise) ».

Si vous avez configuré le provisionnement, pour accorder à l’utilisateur la propriété d’entreprise dans {% data variables.product.product_name %}, attribuez le rôle de propriétaire d’entreprise à l’utilisateur dans Azure AD.

Si vous n’avez pas configuré le provisionnement, pour accorder à l’utilisateur la propriété d’entreprise dans {% data variables.product.product_name %}, incluez l’attribut `administrator` dans l’assertion SAML pour le compte d’utilisateur sur le fournisseur d’identité, avec la valeur `true`. Pour plus d’informations sur l’inclusion de l’attribut `administrator` dans la revendication SAML à partir d’Azure AD, consultez [Guide pratique pour personnaliser des revendications émises dans le jeton SAML pour les applications d’entreprise](https://docs.microsoft.com/azure/active-directory/develop/active-directory-saml-claims-customization) dans Microsoft Docs.
