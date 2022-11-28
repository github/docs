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
ms.openlocfilehash: bfd93814b11066d6da2d87a2e1f0a8bd5461e93f
ms.sourcegitcommit: ced661bdffebd0f96f6f76db109fbe31983448ba
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/16/2022
ms.locfileid: '148167059'
---
## À propos de l’authentification et de l’approvisionnement d’utilisateurs avec Azure AD

Azure Active Directory (Azure AD) est un service de Microsoft qui vous permet de gérer de manière centralisée les comptes d’utilisateur et d’accéder aux applications web. Pour plus d’informations, consultez [Qu’est-ce qu’Azure Active Directory ?](https://docs.microsoft.com/azure/active-directory/fundamentals/active-directory-whatis) dans Microsoft Docs.

Pour gérer l’identité et l’accès pour {% data variables.product.product_name %}, vous pouvez utiliser un locataire Azure AD comme fournisseur d’identité SAML pour l’authentification. Vous pouvez également configurer Azure AD pour provisionner automatiquement des comptes et accéder à l’appartenance avec SCIM, ce qui vous permet de créer des utilisateurs {% data variables.product.product_name %} et de gérer l’appartenance à l’équipe et à l’organisation à partir de votre locataire Azure AD.

{% data reusables.scim.ghes-beta-note %}

Après avoir activé l’authentification unique SAML et SCIM pour {% data variables.product.product_name %} à l’aide d’Azure AD, vous pouvez effectuer les opérations suivantes à partir de votre locataire Azure AD.

* Affectez l’application {% data variables.product.product_name %} sur Azure AD à un compte d’utilisateur pour créer et accorder automatiquement l’accès à un compte d’utilisateur correspondant sur {% data variables.product.product_name %}.
* Désaffectez l’application {% data variables.product.product_name %} d’un compte d’utilisateur sur Azure AD pour désactiver le compte d’utilisateur correspondant sur {% data variables.product.product_name %}.
* Affectez l’application {% data variables.product.product_name %} à un groupe d’IdP sur Azure AD pour créer et accorder automatiquement l’accès aux comptes d’utilisateur sur {% data variables.product.product_name %} pour tous les membres du groupe d’IdP. De plus, le groupe d’IdP est disponible sur {% data variables.product.product_name %} pour la connexion à une équipe et à son organisation parente.
* Désaffectez l’application {% data variables.product.product_name %} d’un groupe d’IdP pour désactiver les comptes d’utilisateur {% data variables.product.product_name %} de tous les utilisateurs du fournisseur d’identité ayant accès uniquement via ce groupe d’IdP et supprimer les utilisateurs de l’organisation parente. Le groupe d’IdP est déconnecté de toutes les équipes sur {% data variables.product.product_name %}.

Pour plus d’informations sur la gestion des identités et des accès pour votre entreprise sur {% data variables.location.product_location %}, consultez « [Gestion des identités et des accès pour votre entreprise](/admin/authentication/managing-identity-and-access-for-your-enterprise) ». Pour plus d’informations sur la synchronisation des équipes avec des groupes IdP, consultez « [Synchronisation d’une équipe avec un groupe de fournisseurs d’identité](/organizations/organizing-members-into-teams/synchronizing-a-team-with-an-identity-provider-group) ».

## Prérequis

- Pour configurer l’authentification et l’approvisionnement d’utilisateurs pour {% data variables.product.product_name %} à l’aide d’Azure AD, vous devez disposer d’un compte et d’un locataire Azure AD. Pour plus d’informations, consultez le [site web Azure AD](https://azure.microsoft.com/free/active-directory) et le [Guide de démarrage rapide : Créer un locataire Azure Active Directory](https://docs.microsoft.com/azure/active-directory/develop/quickstart-create-new-tenant) dans Microsoft Docs.

{%- ifversion scim-for-ghes %}
- {% data reusables.saml.ghes-you-must-configure-saml-sso %} {%- endif %}

- {% data reusables.saml.create-a-machine-user %}

## Configuration de l’authentification et de l’approvisionnement d’utilisateurs avec Azure AD

Dans votre locataire Azure AD, ajoutez l’application pour {% data variables.product.product_name %}, puis configurez le provisionnement.

{% ifversion ghae %}

1. Dans Azure AD, ajoutez le {% data variables.enterprise.ae_azure_ad_app_link %} à votre locataire et configurez l’authentification unique. Pour plus d’informations, consultez [Tutoriel : Intégration de l’authentification unique (SSO) Azure Active Directory à {% data variables.product.product_name %}](https://docs.microsoft.com/azure/active-directory/saas-apps/github-ae-tutorial) dans Microsoft Docs.

1. Dans {% data variables.product.product_name %}, entrez les détails de votre locataire Azure AD.

    - {% data reusables.saml.ae-enable-saml-sso-during-bootstrapping %}

    - Si vous avez déjà configuré l’authentification unique SAML pour {% data variables.location.product_location %} à l’aide d’un autre fournisseur d’identité et que vous souhaitez utiliser Azure AD à la place, vous pouvez modifier votre configuration. Pour plus d’informations, consultez « [Configuration de l’authentification unique SAML pour votre entreprise](/admin/authentication/configuring-saml-single-sign-on-for-your-enterprise#editing-the-saml-sso-configuration) ».

1. Activez l’approvisionnement d’utilisateurs dans {% data variables.product.product_name %} et configurez l’approvisionnement d’utilisateurs dans Azure AD. Pour plus d’informations, consultez « [Configuration de l’approvisionnement d’utilisateurs pour votre entreprise](/admin/authentication/configuring-user-provisioning-for-your-enterprise#enabling-user-provisioning-for-your-enterprise) ».

{% elsif scim-for-ghes %}

1. Dans le locataire Azure AD, dans la barre latérale gauche, cliquez sur **Provisionnement**.

1. Sous « URL du locataire », tapez l’URL complète du point de terminaison pour SCIM sur {% data variables.location.product_location %}. Pour plus d’informations, consultez « [SCIM](/rest/enterprise-admin/scim#scim-endpoint-urls) » dans la documentation de l’API REST.

1. Sous « Jeton secret », tapez le {% data variables.product.pat_v1 %} que vous avez créé à l’étape 4 de la « [Configuration du provisionnement d’utilisateurs avec SCIM pour votre entreprise](/admin/identity-and-access-management/using-saml-for-enterprise-iam/configuring-user-provisioning-with-scim-for-your-enterprise#enabling-user-provisioning-for-your-enterprise) ».

1. Pour être sûr de réussir la connexion entre Azure AD et {% data variables.location.product_location %}, cliquez sur **Tester la connexion**.

1. Une fois la connexion établie, en haut de la page, cliquez sur **Enregistrer**.

{% endif %}

1. Affectez un propriétaire d’entreprise pour {% data variables.product.product_name %} dans Azure AD. Le processus que vous devez suivre varie selon que vous avez ou non configuré le provisionnement. Pour plus d’informations sur les propriétaires d’entreprise, consultez « [Rôles dans une entreprise](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise#enterprise-owners) ».
   - Si vous avez configuré le provisionnement, pour accorder à l’utilisateur la propriété d’entreprise dans {% data variables.product.product_name %}, attribuez le rôle de propriétaire d’entreprise à l’utilisateur dans Azure AD.
   - Si vous n’avez pas configuré le provisionnement, pour accorder à l’utilisateur la propriété d’entreprise dans {% data variables.product.product_name %}, incluez l’attribut `administrator` dans l’assertion SAML pour le compte d’utilisateur sur le fournisseur d’identité, avec la valeur `true`. Pour plus d’informations sur l’inclusion de l’attribut `administrator` dans la revendication SAML à partir d’Azure AD, consultez [Guide pratique pour personnaliser des revendications émises dans le jeton SAML pour les applications d’entreprise](https://docs.microsoft.com/azure/active-directory/develop/active-directory-saml-claims-customization) dans Microsoft Docs.
