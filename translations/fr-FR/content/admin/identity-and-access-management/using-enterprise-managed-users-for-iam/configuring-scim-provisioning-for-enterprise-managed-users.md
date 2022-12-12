---
title: Configuration du provisionnement SCIM pour Enterprise Managed Users
shortTitle: Provisioning managed users
intro: Vous pouvez configurer votre fournisseur d’identité pour approvisionner de nouveaux utilisateurs et gérer leur appartenance à votre entreprise et à vos équipes.
product: '{% data reusables.gated-features.emus %}'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/configuring-scim-provisioning-for-enterprise-managed-users
  - /admin/authentication/managing-your-enterprise-users-with-your-identity-provider/configuring-scim-provisioning-for-enterprise-managed-users
  - /admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-scim-provisioning-for-enterprise-managed-users
  - /admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/configuring-scim-provisioning-for-enterprise-managed-users
versions:
  ghec: '*'
topics:
  - Accounts
  - Enterprise
ms.openlocfilehash: 3cf1f917f0bfd0e02a1b712958f8d72a041b7281
ms.sourcegitcommit: d82f268a6f0236d1f4d2bf3d049974ada0170402
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/10/2022
ms.locfileid: '148160695'
---
## À propos du provisionnement pour {% data variables.product.prodname_emus %}

Vous devez configurer le provisionnement pour {% data variables.product.prodname_emus %} afin de créer, gérer et désactiver des comptes d’utilisateur pour vos membres d’entreprise. 

Une fois que vous avez configuré le provisionnement pour {% data variables.product.prodname_emus %}, les utilisateurs attribués à l’application {% data variables.product.prodname_emu_idp_application %} dans votre fournisseur d’identité sont provisionnés comme nouveaux {% data variables.enterprise.prodname_managed_users %} sur {% data variables.product.prodname_dotcom %} via SCIM, et les {% data variables.enterprise.prodname_managed_users %} sont ajoutés à votre entreprise. Si vous attribuez un groupe à l’application, tous les utilisateurs du groupe sont provisionnés comme nouveaux {% data variables.enterprise.prodname_managed_users %}.

Quand vous mettez à jour les informations associées à l’identité d’un utilisateur sur votre IdP, celui-ci met à jour le compte d’utilisateur sur {% data variables.product.prodname_dotcom_the_website %}. Quand vous annulez l’attribution de l’utilisateur à l’application {% data variables.product.prodname_emu_idp_application %} ou que vous désactivez un compte d’utilisateur sur votre IdP, votre IdP communique avec {% data variables.product.prodname_dotcom %} pour invalider toutes les sessions et désactiver le compte du membre. Les informations du compte désactivé sont conservées et le nom d’utilisateur est remplacé par un hachage du nom d’utilisateur d’origine avec le code court en suffixe. Si vous réattribuez un utilisateur à l’application {% data variables.product.prodname_emu_idp_application %} ou réactivez son compte sur votre IdP, l’{% data variables.enterprise.prodname_managed_user %} sur {% data variables.product.prodname_dotcom %} est réactivé et le nom d’utilisateur restauré.

Les groupes de votre IdP peuvent être utilisés pour la gestion de l’appartenance aux équipes dans les organisations de votre entreprise, ce qui vous permet de configurer l’accès aux dépôts et les autorisations correspondantes par le biais de votre IdP. Pour plus d’informations, consultez « [Gestion des appartenances aux équipes avec les groupes d’un fournisseur d’identité](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/managing-team-memberships-with-identity-provider-groups) ».

## Prérequis

Pour pouvoir configurer le provisionnement pour {% data variables.product.prodname_emus %}, vous devez configurer l’authentification unique SAML{% ifversion oidc-for-emu %} ou OIDC{% endif %}. {% ifversion oidc-for-emu %}

- Pour plus d’informations sur la configuration d’OIDC, consultez « [Configuration d’OIDC pour les utilisateurs gérés par l’entreprise](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/configuring-oidc-for-enterprise-managed-users) »
- {% endif %}Pour plus d’informations sur la configuration de SAML, consultez « [Configuration de l’authentification unique SAML pour Enterprise Managed Users](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-saml-single-sign-on-for-enterprise-managed-users) ».

## Création d’un {% data variables.product.pat_generic %}

Pour configurer le provisionnement pour votre {% data variables.enterprise.prodname_emu_enterprise %}, vous avez besoin d’un {% data variables.product.pat_v1 %} avec l’étendue **admin:enterprise** appartenant à l’utilisateur de configuration.

{% warning %}

**Avertissement :** Si le jeton expire ou si un utilisateur provisionné crée le jeton, le provisionnement SCIM peut cesser de fonctionner de manière inattendue. Veillez à créer le jeton en étant connecté comme utilisateur de configuration et à ce que l’expiration du jeton soit définie sur « Pas d’expiration ».

{% endwarning %}

1. Connectez-vous à {% data variables.product.prodname_dotcom_the_website %} comme utilisateur de configuration de votre nouvelle entreprise avec le nom d’utilisateur **@<em>CODE-COURT</em>_admin**.
{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.developer_settings %} {% data reusables.user-settings.personal_access_tokens %} {% data reusables.user-settings.generate_new_token %}
1. Sous **Note**, donnez à votre jeton un nom descriptif.
   ![Capture d’écran montrant le nom du jeton](/assets/images/help/enterprises/emu-pat-name.png)
1. Sélectionnez le menu déroulant **Expiration**, puis cliquez sur **Pas d’expiration**.
   ![Capture d’écran montrant l’expiration du jeton définie sur Pas d’expiration](/assets/images/help/enterprises/emu-pat-no-expiration.png)
1. Sélectionnez l’étendue **admin:enterprise**.
   ![Capture d’écran montrant l’étendue admin:enterprise](/assets/images/help/enterprises/enterprise-pat-scope.png)
1. Cliquez sur **Générer un jeton**.
   ![Bouton Générer un jeton](/assets/images/help/settings/generate_token.png)
1. Pour copier le jeton dans le Presse-papiers, cliquez sur {% octicon "paste" aria-label="The copy icon" %}.
   ![Jeton nouvellement créé](/assets/images/help/settings/personal_access_tokens.png)
2. Pour enregistrer le jeton en vue d’une utilisation ultérieure, stockez le nouveau jeton de manière sécurisée dans un gestionnaire de mots de passe.

## Configuration du provisionnement pour {% data variables.product.prodname_emus %}

Après avoir créé votre {% data variables.product.pat_generic %} et l’avoir stocké en lieu sûr, vous pouvez configurer le provisionnement sur votre fournisseur d’identité. 

{% data reusables.scim.emu-scim-rate-limit %}

Pour configurer l’approvisionnement, suivez le lien approprié du tableau ci-dessous.

| Fournisseur d’identité | Méthode d’authentification unique | Plus d’informations | |---||||{% ifversion oidc-for-emu %} | Azure AD | OIDC | [Tutoriel : Configurer GitHub Enterprise Managed User (OIDC) pour l’approvisionnement automatique d’utilisateurs](https://docs.microsoft.com/azure/active-directory/saas-apps/github-enterprise-managed-user-oidc-provisioning-tutorial) dans la documentation Azure AD |{% endif %} | Azure AD | SAML | [Tutoriel : Configurer GitHub Enterprise Managed User pour l’approvisionnement automatique d’utilisateurs](https://docs.microsoft.com/en-us/azure/active-directory/saas-apps/github-enterprise-managed-user-provisioning-tutorial) dans la documentation Azure AD | | Okta | SAML | [Configuration du provisionnement SCIM pour les utilisateurs gérés Enterprise avec Okta](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-scim-provisioning-for-enterprise-managed-users-with-okta) |

{% note %}

**Remarque :** Azure AD ne prend pas en charge le provisionnement de groupes imbriqués. Pour plus d’informations, consultez [Fonctionnement de l’approvisionnement d’applications dans Azure Active Directory](https://learn.microsoft.com/en-us/azure/active-directory/app-provisioning/how-provisioning-works#assignment-based-scoping).

{% endnote %}
