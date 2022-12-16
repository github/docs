---
title: Migration de SAML vers OIDC
shortTitle: Migrating from SAML to OIDC
intro: 'Si vous utilisez SAML afin d’authentifier les membres de votre {% data variables.enterprise.prodname_emu_enterprise %}, vous pouvez migrer vers OIDC (OpenID Connect) et bénéficier de la prise en charge de la stratégie d’accès conditionnel pour votre IdP.'
product: '{% data reusables.gated-features.emus %}'
versions:
  feature: oidc-for-emu
topics:
  - Accounts
  - Authentication
  - Enterprise
  - SSO
ms.openlocfilehash: 36c93c94bfda1d0ebc951b0a8325691afa0199bb
ms.sourcegitcommit: c562c85cc75ffe1eb4e9595d8adc09ec71697ab1
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/22/2022
ms.locfileid: '148180044'
---
{% data reusables.enterprise-accounts.azure-emu-support-oidc %}

## À propos de la migration de votre {% data variables.enterprise.prodname_emu_enterprise %} de SAML vers OIDC

Si votre {% data variables.enterprise.prodname_emu_enterprise %} utilise l’authentification SSO SAML pour s’authentifier auprès d’Azure Active Directory (Azure AD), vous pouvez migrer vers OIDC. {% data reusables.enterprise-accounts.emu-cap-validates %}

Quand vous migrez de SAML vers OIDC, les {% data variables.enterprise.prodname_managed_users %} et les groupes qui ont été provisionnés pour SAML mais qui ne sont pas provisionnés par l’application {% data variables.product.prodname_emu_idp_oidc_application %} voient « (SAML) » ajouté à leur nom d’affichage.

Si vous débutez sur {% data variables.product.prodname_emus %} et si vous n’avez pas encore configuré l’authentification pour votre entreprise, vous n’avez pas besoin d’effectuer de migration. Vous pouvez configurer immédiatement l’authentification unique OIDC. Pour plus d’informations, consultez « [Configuration d’OIDC pour Enterprise Managed Users](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/configuring-oidc-for-enterprise-managed-users) ».

## Migration de votre entreprise

{% note %}

**Remarque :** Pour vous connecter en tant qu’utilisateur de configuration, vous avez besoin d’un code de récupération. Si vous n’avez pas encore vos codes de récupération, vous pouvez accéder à ces derniers pendant que vous êtes connecté en tant que propriétaire d’entreprise. Pour plus d’informations, consultez « [Téléchargement des codes de récupération de votre compte d’entreprise pour l’authentification unique](/admin/identity-and-access-management/managing-recovery-codes-for-your-enterprise/downloading-your-enterprise-accounts-single-sign-on-recovery-codes) ».

{% endnote %}

1. Avant de commencer la migration, connectez-vous à Azure et désactivez le provisionnement dans l’application {% data variables.product.prodname_emu_idp_application %} existante.
1. Si vous utilisez des [stratégies d’emplacement réseau d’accès conditionnel (CA)](https://docs.microsoft.com/en-us/azure/active-directory/conditional-access/location-condition) dans Azure AD et que vous utilisez actuellement une liste d’adresses IP autorisées avec votre compte d’entreprise ou l’une des organisations détenues par le compte d’entreprise sur {% data variables.product.prodname_dotcom_the_website %}, désactivez les listes d’adresses IP autorisées. Pour plus d’informations, consultez « [Application des paramètres de sécurité dans votre entreprise](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-allowed-ip-addresses-for-organizations-in-your-enterprise) » et « [Gestion des adresses IP autorisées pour votre organisation](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-allowed-ip-addresses-for-your-organization) ».
1.  Connectez-vous à {% data variables.product.prodname_dotcom_the_website %} en tant qu’utilisateur de configuration de votre entreprise avec le nom d’utilisateur **@<em>SHORT-CODE</em>_admin**. 
1. Quand vous êtes invité à accéder à votre fournisseur d’identité, cliquez sur **Utiliser un code de récupération**, puis connectez-vous à l’aide de l’un des codes de récupération de votre entreprise.
{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %}
1. Au bas de la page, à côté de « Migrer vers l’authentification unique OpenID Connect », cliquez sur **Configurer avec Azure**.  
   {% warning %} 

   **Avertissement** : La migration peut prendre jusqu’à une heure. Il est important qu’aucun utilisateur ne soit provisionné durant la migration. Vous pouvez vérifier si la migration est toujours en cours en retournant à la page des paramètres de sécurité de votre entreprise. Si la case « Exiger l’authentification SAML » est toujours cochée, cela signifie que la migration n’est pas finie.

   {% endwarning %}

   ![Capture d’écran montrant le bouton « Configurer avec Azure »](/assets/images/help/enterprises/saml-to-oidc-button.png)
1. Lisez les deux avertissements, puis cliquez pour continuer.
{% data reusables.enterprise-accounts.emu-azure-admin-consent %}
1. Dans un nouvel onglet ou une nouvelle fenêtre, pendant que vous êtes connecté en tant qu’utilisateur de configuration sur {% data variables.product.prodname_dotcom_the_website %}, créez un {% data variables.product.pat_v1 %} avec l’étendue **admin:enterprise** et l’option **Aucune expiration**, puis copiez-le dans le Presse-papiers. Pour plus d’informations sur la création d’un nouveau jeton, consultez « [Création d’un {% data variables.product.pat_generic %}](/github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/configuring-scim-provisioning-for-enterprise-managed-users#creating-a-personal-access-token) ».
1. Dans le portail Azure, dans les paramètres de l’application {% data variables.product.prodname_emu_idp_oidc_application %}, sous « URL de locataire », tapez `https://api.github.com/scim/v2/enterprises/YOUR_ENTERPRISE`, en remplaçant VOTRE_ENTREPRISE par le nom de votre compte d’entreprise.  
   
   Par exemple, si l’URL de votre compte d’entreprise est `https://github.com/enterprises/octo-corp`, le nom du compte d’entreprise est `octo-corp`.
1. Sous « Jeton secret », collez le {% data variables.product.pat_v1 %} que vous avez créé avec l’étendue **admin:enterprise**.
1. Pour tester la configuration, cliquez sur **Tester la connexion**.
1. Pour enregistrer vos changements, en haut du formulaire, cliquez sur **Enregistrer**.
1. Dans le portail Azure, copiez les utilisateurs et les groupes de l’ancienne application {% data variables.product.prodname_emu_idp_application %} vers la nouvelle application {% data variables.product.prodname_emu_idp_oidc_application %}.
1. Testez votre configuration en provisionnant un seul nouvel utilisateur.
1. Si votre test réussit, démarrez le provisionnement pour tous les utilisateurs en cliquant sur **Démarrer le provisionnement**.
