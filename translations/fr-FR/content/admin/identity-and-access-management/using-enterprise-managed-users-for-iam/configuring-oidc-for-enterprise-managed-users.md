---
title: Configuration d’OIDC pour les utilisateurs managés par l’entreprise
shortTitle: OIDC for managed users
intro: 'Vous pouvez gérer automatiquement l’accès à votre compte d’entreprise sur {% data variables.product.prodname_dotcom %} en configurant l’authentification unique OpenID Connect (OIDC) et en activant le support de la stratégie d’accès conditionnel (CAP) de votre fournisseur d’identité.'
product: '{% data reusables.gated-features.emus %}'
versions:
  feature: oidc-for-emu
topics:
  - Accounts
  - Authentication
  - Enterprise
  - SSO
ms.openlocfilehash: caa557cb976fb60a59572e1623db6be87efeee54
ms.sourcegitcommit: c562c85cc75ffe1eb4e9595d8adc09ec71697ab1
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/22/2022
ms.locfileid: '148179988'
---
{% data reusables.enterprise-accounts.azure-emu-support-oidc %}

## À propos d’OIDC pour les utilisateurs managés par l’entreprise

Avec {% data variables.product.prodname_emus %}, votre entreprise utilise votre fournisseur d'identité (IdP) pour authentifier tous les membres. Vous pouvez utiliser OpenID Connect (OIDC) pour gérer l’authentification de votre {% data variables.enterprise.prodname_emu_enterprise %}. L’activation de l’authentification unique OIDC est un processus d’installation en un clic avec des certificats managés par {% data variables.product.prodname_dotcom %} et votre fournisseur d’identité.

{% data reusables.enterprise-accounts.emu-cap-validates %} Pour plus d’informations, consultez « [À propos du support de la stratégie d’accès conditionnel de votre fournisseur d’identité](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-support-for-your-idps-conditional-access-policy) ».

Vous pouvez ajuster la durée de vie d’une session et la fréquence à laquelle un {% data variables.enterprise.prodname_managed_user %} doit se réauthentifier avec votre IdP, en modifiant la propriété de stratégie de durée de vie des jetons d’ID émis pour {% data variables.product.prodname_dotcom %} par votre IdP. La durée de vie par défaut est d’une heure. Pour plus d’informations, consultez « [Durées de vie des jetons configurables dans le plateforme d'identités Microsoft](https://docs.microsoft.com/en-us/azure/active-directory/develop/active-directory-configurable-token-lifetimes) » dans la documentation Azure AD.

{% data reusables.enterprise_user_management.SAML-to-OIDC-migration-for-EMU %}

{% data reusables.enterprise-accounts.oidc-gei-warning %}

## Prise en charge des fournisseurs d’identité

Le support d’OIDC est disponible pour les clients utilisant Azure Active Directory (Azure AD). 

Chaque abonné Azure AD ne peut prendre en charge qu’une seule intégration OIDC avec {% data variables.product.prodname_emus %}. Si vous souhaitez connecter Azure AD à plusieurs entreprises sur {% data variables.product.prodname_dotcom %}, utilisez SAML à la place. Pour plus d’informations, consultez « [Configuration de l’authentification unique SAML pour {% data variables.product.prodname_emus %}](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/configuring-saml-single-sign-on-for-enterprise-managed-users) ».

## Configuration d’OIDC pour les utilisateurs managés par l’entreprise

1. Connectez-vous à {% data variables.product.prodname_dotcom_the_website %} comme utilisateur de configuration de votre nouvelle entreprise avec le nom d’utilisateur **@<em>CODE-COURT</em>_admin**.
{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %}
1. Sélectionnez **Exiger l’authentification unique OIDC**.  
   ![Capture d’écran montrant la case à cocher « Exiger l’authentification unique OIDC »](/assets/images/help/enterprises/require-oidc.png)
1. Pour continuer à configurer et être redirigé vers Azure AD, cliquez sur **Enregistrer**.
{% data reusables.enterprise-accounts.emu-azure-admin-consent %} {% data reusables.enterprise-accounts.download-recovery-codes %}

## Activation de l'approvisionnement

Après avoir activé l’authentification unique OIDC, activez l’approvisionnement. Pour plus d’informations, consultez « [Configuration du provisionnement SCIM pour Enterprise Managed Users](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-scim-provisioning-for-enterprise-managed-users) ».
