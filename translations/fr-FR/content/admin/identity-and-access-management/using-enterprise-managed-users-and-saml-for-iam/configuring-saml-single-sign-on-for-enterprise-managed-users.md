---
title: Configuration de l’authentification unique SAML pour Enterprise Managed Users
shortTitle: SAML for managed users
intro: You can automatically manage access to your enterprise account on {% data variables.product.prodname_dotcom %} by configuring Security Assertion Markup Language (SAML) single sign-on (SSO).
product: '{% data reusables.gated-features.emus %}'
redirect_from:
- /github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/configuring-saml-single-sign-on-for-enterprise-managed-users
- /admin/authentication/managing-your-enterprise-users-with-your-identity-provider/configuring-saml-single-sign-on-for-enterprise-managed-users
- /admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-saml-single-sign-on-for-enterprise-managed-users
versions:
  ghec: '*'
type: tutorial
topics:
- Authentication
- Enterprise
- SSO
ms.openlocfilehash: fc932d913cb104f4555e4151620469769b4ef99a
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 05/17/2022
ms.locfileid: "145106749"
---
## <a name="about-saml-single-sign-on-for--data-variablesproductprodname_emus-"></a>À propos de l’authentification unique SAML pour {% data variables.product.prodname_emus %}

Avec {% data variables.product.prodname_emus %}, votre entreprise utilise l’authentification unique SAML pour authentifier tous les membres. Au lieu de se connecter à {% data variables.product.prodname_dotcom %} avec un nom d’utilisateur et un mot de passe {% data variables.product.prodname_dotcom %}, les membres de votre entreprise se connectent par le biais de votre IdP.

{% data variables.product.prodname_emus %} prend en charge les IdP suivants :

{% data reusables.enterprise-accounts.emu-supported-idps %}

Nous vous recommandons de stocker vos codes de récupération après avoir configuré l’authentification unique SAML pour pouvoir récupérer l’accès à votre entreprise en cas d’indisponibilité de votre fournisseur d’identité.

{% note %}

**Remarque :** Quand l’authentification unique SAML est activée, le seul paramètre que vous pouvez mettre à jour sur {% data variables.product.prodname_dotcom %} pour votre configuration SAML existante est le certificat SAML. Si vous devez mettre à jour l’URL de connexion ou l’émetteur, vous devez d’abord désactiver l’authentification unique SAML, puis la reconfigurer avec les nouveaux paramètres.

{% endnote %}

## <a name="configuring-saml-single-sign-on-for--data-variablesproductprodname_emus-"></a>Configuration de l’authentification unique SAML pour {% data variables.product.prodname_emus %}

Afin de configurer l’authentification unique SAML pour votre {% data variables.product.prodname_emu_enterprise %}, vous devez configurer une application sur votre fournisseur d’identité, puis configurer votre entreprise sur GitHub.com. Après avoir configuré l’authentification unique SAML, vous pouvez configurer le provisionnement d’utilisateur. 

Pour installer et configurer l’application {% data variables.product.prodname_emu_idp_application %} sur votre fournisseur d’identité, vous devez disposer d’un locataire et d’un accès administratif sur un fournisseur d’identité pris en charge.

{% note %}

{% data reusables.enterprise-accounts.emu-password-reset-session %}

{% endnote %}

1. [Configuration de votre fournisseur d’identité](#configuring-your-identity-provider)
2. [Configuration de votre entreprise](#configuring-your-enterprise)
3. [Activation de l'approvisionnement](#enabling-provisioning)

### <a name="configuring-your-identity-provider"></a>Configuration de votre fournisseur d’identité

Pour configurer votre fournisseur d’identité, suivez les instructions fournies par ce dernier pour la configuration de l’application {% data variables.product.prodname_emu_idp_application %} sur votre fournisseur d’identité.

1. Pour installer l’application {% data variables.product.prodname_emu_idp_application %}, cliquez sur le lien correspondant à votre fournisseur d’identité ci-dessous :

     - [Application {% data variables.product.prodname_emu_idp_application %} sur Azure Active Directory](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/aad.githubenterprisemanageduser?tab=Overview)
     - [Application {% data variables.product.prodname_emu_idp_application %} sur Okta](https://www.okta.com/integrations/github-enterprise-managed-user)

1. Pour configurer l’application {% data variables.product.prodname_emu_idp_application %} et votre fournisseur d’identité, cliquez sur le lien ci-dessous et suivez les instructions fournies par votre fournisseur d’identité :

     - [Tutoriel : Azure Active Directory pour {% data variables.product.prodname_emus %}](https://docs.microsoft.com/en-us/azure/active-directory/saas-apps/github-enterprise-managed-user-tutorial)
     - [Documentation Okta pour {% data variables.product.prodname_emus %}](https://saml-doc.okta.com/SAML_Docs/How-to-Configure-SAML-2.0-for-GitHub-Enterprise-Managed-User.html)

1. Pour pouvoir tester et configurer votre entreprise, affectez-vous ou affectez l’utilisateur qui configurera l’authentification unique SAML sur {% data variables.product.prodname_dotcom %} à l’application {% data variables.product.prodname_emu_idp_application %} sur votre fournisseur d’identité.

1. Pour pouvoir continuer à configurer votre entreprise sur {% data variables.product.prodname_dotcom %}, recherchez les informations suivantes sur l’application que vous avez installée sur votre fournisseur d’identité et notez-les :

    | Valeur | Autres noms | Description |
    | :- | :- | :- |
    | URL de connexion IdP | URL de connexion, URL de l’IdP | URL de l’application sur votre IdP |
    | URL d’identificateur de l’IdP | Émetteur | Identificateur de l’IdP utilisé auprès des fournisseurs de services pour l’authentification SAML |
    | Certificat de signature, encodé en Base64 | Certificat public | Certificat public utilisé par le fournisseur d’identité pour signer les demandes d’authentification |

### <a name="configuring-your-enterprise"></a>Configuration de votre entreprise

Après avoir installé et configuré l’application {% data variables.product.prodname_emu_idp_application %} sur votre fournisseur d’identité, vous pouvez configurer votre entreprise. 

1. Connectez-vous à {% data variables.product.prodname_dotcom_the_website %} comme utilisateur de configuration de votre nouvelle entreprise avec le nom d’utilisateur **@<em>CODE-COURT</em>_admin**.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %}

1. Sous « Authentification unique SAML », sélectionnez **Exiger l’authentification SAML**.
  ![Case à cocher pour activer l’authentification unique SAML](/assets/images/help/business-accounts/enable-saml-auth-enterprise.png)

1. Sous **URL de connexion**, tapez le point de terminaison HTTPS de votre fournisseur d’identité pour les demandes d’authentification unique, que vous avez noté au moment de la configuration de votre fournisseur d’identité.
![Champ de l’URL vers laquelle les membres seront transférés au moment de la connexion](/assets/images/help/saml/saml_sign_on_url_business.png)

1. Sous **Émetteur**, tapez l’URL de votre émetteur SAML, que vous avez notée au moment de la configuration de votre fournisseur d’identité, pour vérifier l’authenticité des messages envoyés.
![Champ du nom de l’émetteur SAML](/assets/images/help/saml/saml_issuer.png)

1. Sous **Certificat public**, collez le certificat que vous avez noté au moment de la configuration de votre fournisseur d’identité pour vérifier les réponses SAML.
![Champ du certificat public de votre fournisseur d’identité](/assets/images/help/saml/saml_public_certificate.png)

1. Pour vérifier l’intégrité des demandes de votre émetteur SAML, cliquez sur {% octicon "pencil" aria-label="The edit icon" %}. Ensuite, dans les listes déroulantes « Méthode de signature » et « Méthode Digest », choisissez l’algorithme de hachage utilisé par votre émetteur SAML.
![Listes déroulantes pour les algorithmes de hachage des méthodes de signature et Digest utilisés par votre émetteur SAML](/assets/images/help/saml/saml_hashing_method.png)

1. Avant d’activer l’authentification unique SAML pour votre entreprise, pour vérifier que les informations que vous avez entrées sont correctes, cliquez sur **Tester la configuration SAML**. ![Bouton pour tester la configuration SAML avant de l’appliquer](/assets/images/help/saml/saml_test.png)

1. Cliquez sur **Enregistrer**.

    {% note %}

    **Remarque :** Quand vous exigez l’authentification unique SAML pour votre entreprise, l’utilisateur de configuration n’a plus accès à l’entreprise, mais reste connecté à GitHub. Seuls les {% data variables.product.prodname_managed_users %} provisionnés par votre fournisseur d’identité auront accès à l’entreprise.

    {% endnote %}

{% data reusables.enterprise-accounts.download-recovery-codes %}


### <a name="enabling-provisioning"></a>Activation de l'approvisionnement

Après avoir activé l’authentification unique SAML, activez le provisionnement. Pour plus d’informations, consultez « [Configuration du provisionnement SCIM pour Enterprise Managed Users](/github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/configuring-scim-provisioning-for-enterprise-managed-users) ».

