---
title: Configuration du provisionnement d’utilisateurs avec SCIM pour votre entreprise
shortTitle: Configure user provisioning
intro: 'Vous pouvez configurer SCIM (System for Cross-domain Identity Management) pour {% ifversion scim-for-ghes %}{% data variables.location.product_location %}{% elsif ghae %}{% data variables.product.product_name %}{% endif %}, qui provisionne automatiquement les comptes d’utilisateur lorsque vous affectez l’application pour {% ifversion scim-for-ghes %}votre instance{% elsif ghae %}{% data variables.product.product_name %}{% endif %} à un utilisateur sur votre fournisseur d’identité (IdP).'
permissions: '{% ifversion scim-for-ghes %}Site administrators{% elsif ghae %}Enterprise owners{% endif %} can configure user provisioning for {% ifversion scim-for-ghes %}a {% data variables.product.product_name %} instance{% elsif ghae %}an enterprise on {% data variables.product.product_name %}{% endif %}.'
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
  - /admin/authentication/configuring-user-provisioning-for-your-enterprise
  - /admin/identity-and-access-management/managing-iam-for-your-enterprise/configuring-user-provisioning-for-your-enterprise
  - /admin/identity-and-access-management/using-saml-for-enterprise-iam/configuring-user-provisioning-for-your-enterprise
ms.openlocfilehash: c330d8e375522901d2738b581a897d42d30d628e
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108496'
---
{% data reusables.scim.ghes-beta-note %}

## À propos du provisionnement d’utilisateurs pour {% data variables.product.product_name %}

{% ifversion ghae %}

{% data reusables.saml.ae-uses-saml-sso %} Pour plus d’informations, consultez « [Configuration de l’authentification unique SAML pour votre entreprise](/admin/authentication/configuring-saml-single-sign-on-for-your-enterprise) ».

{% endif %}

{% ifversion scim-for-ghes %}Si vous utilisez l’authentification unique SAML pour {% data variables.location.product_location %}, vous{% elsif ghae %}Vous{% endif %} pouvez configurer SCIM pour automatiquement créer ou suspendre des comptes d’utilisateur et accorder l’accès{% ifversion scim-for-ghes %} à votre instance{% elsif ghae %} pour {% data variables.product.product_name %}{% endif %} quand vous affectez ou désaffectez l’application sur votre IdP. Pour plus d’informations sur SCIM, consultez [System for Cross-domain Identity Management : Protocole (RFC 7644)](https://tools.ietf.org/html/rfc7644) sur le site web de l’IETF.

Si vous ne configurez pas le provisionnement d’utilisateurs avec SCIM, votre fournisseur d’identité ne communique pas automatiquement avec {% data variables.product.product_name %} vous affectez l’application ou annulez son affectation à un utilisateur. Sans SCIM, {% data variables.product.product_name %} crée un compte d’utilisateur à l’aide du provisionnement juste-à-temps (JIT) SAML la première fois que quelqu’un accède à {% data variables.product.product_name %} et se connecte en s’authentifiant via votre fournisseur d’identité.

La configuration du provisionnement permet à votre IdP de communiquer avec {% data variables.location.product_location %} quand vous affectez ou désaffectez l’application pour {% data variables.product.product_name %} à un utilisateur sur votre IdP. Quand vous affectez l’application, votre IdP invite {% data variables.location.product_location %} à créer un compte et à envoyer un e-mail d’intégration à l’utilisateur. Quand vous annulez l’affectation de l’application, votre fournisseur d’identité communique avec {% data variables.product.product_name %} pour invalider toutes les sessions SAML et désactiver le compte du membre.

Pour configurer le provisionnement pour votre entreprise, vous devez activer le provisionnement sur {% data variables.product.product_name %}, puis installer et configurer une application de provisionnement sur votre fournisseur d’identité.

{% ifversion scim-for-ghes %}

L’application de provisionnement sur votre IdP communique avec {% data variables.product.product_name %} à l’aide de l’API SCIM. Pour plus d’informations, consultez « [SCIM](/rest/enterprise-admin/scim) » dans la documentation de l’API REST.

{% endif %}

## À propos des identités et des revendications

Une fois qu’un administrateur idP a accordé à une personne l’accès à {% data variables.location.product_location %}, l’utilisateur peut s’authentifier via l’idP pour accéder à {% data variables.product.product_name %} à l’aide de l’authentification unique SAML.

Pendant l’authentification, {% ifversion scim-for-ghes %}l’instance{% elsif ghae %}{% data variables.product.product_name %}{% endif %} tente d’associer l’utilisateur à une identité SAML. Par défaut, {% ifversion scim-for-ghes %}l’instance{% elsif ghae %}{% data variables.product.product_name %}{% endif %} compare la revendication `NameID` de l’IdP au nom d’utilisateur du compte. {% data variables.product.product_name %} standardise la valeur de `NameID` pour la comparaison. Pour plus d’informations sur la standardisation des noms d’utilisateur, consultez « [Considérations relatives au nom d’utilisateur pour l’authentification externe](/admin/identity-and-access-management/managing-iam-for-your-enterprise/username-considerations-for-external-authentication#about-username-normalization) ».

S’il n’existe aucun nom d’utilisateur correspondant sur l’instance, celle-ci crée un nouveau compte pour l’utilisateur. S’il existe un compte avec un nom d’utilisateur correspondant sur l’instance, l’utilisateur se connecte au compte.{% ifversion scim-for-ghes %} {% data variables.product.product_name %} compare la revendication de l’IdP à tous les comptes de l’instance, que les comptes utilisent l’authentification intégrée ou soient déjà associés à une identité SAML.{% endif %}

{% ifversion scim-for-ghes %}

Lors de l’utilisation de l’authentification unique SAML, un administrateur de site peut configurer des attributs utilisateur personnalisés pour l’instance. Un attribut de nom d’utilisateur personnalisé permet à l’instance d’utiliser une valeur de l’IdP autre que `NameID`. {% data variables.product.product_name %} respecte ce mappage lorsque SCIM est configuré. Pour plus d’informations sur le mappage d’attributs utilisateur, consultez « [Configuration de l’authentification unique SAML pour votre entreprise](/admin/identity-and-access-management/using-saml-for-enterprise-iam/configuring-saml-single-sign-on-for-your-enterprise#configuring-saml-sso) ».

{% endif %}

Si {% data variables.product.product_name %} identifie correctement un utilisateur de l’IdP, mais que les détails du compte tels que l’adresse e-mail, le prénom ou le nom ne correspondent pas, l’instance met à jour les détails avec les valeurs de l’IdP.

## Fournisseurs d’identité pris en charge

Les IdP suivants prennent en charge le provisionnement d’utilisateurs avec SCIM pour {% data variables.product.product_name %}.

{% data reusables.saml.okta-ae-sso-beta %}

{% data reusables.github-ae.saml-idp-table %}

{% data reusables.scim.ghes-scim-beta-note %}

{% data reusables.scim.ghes-scim-idp-table %}

{% ifversion ghae %} Pour les IdP qui prennent en charge le mappage d’équipe, vous pouvez affecter ou désaffecter l’application pour {% data variables.product.product_name %} aux groupes d’utilisateurs de votre IdP. Ces groupes sont ensuite disponibles pour que les propriétaires d’organisation et les responsables d’équipe dans {% data variables.location.product_location %} les mappent aux équipes {% data variables.product.product_name %}. Pour plus d’informations, consultez « [Mappage de groupes Okta à des équipes](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams) ».
{% endif %}

## Prérequis

{% ifversion ghae %}

- Vous devez configurer l’authentification unique SAML lorsque vous initialisez {% data variables.product.product_name %}. Pour plus d’informations, consultez « [Initialisation de {% data variables.product.prodname_ghe_managed %}](/admin/configuration/initializing-github-ae) ».

{% elsif scim-for-ghes %}

- {% data reusables.saml.ghes-you-must-configure-saml-sso %}

- Vous devez autoriser l’authentification intégrée pour les utilisateurs qui n’ont pas de compte sur votre IdP. Pour plus d’informations, consultez « [Autorisation de l’authentification intégrée pour les utilisateurs en dehors de votre fournisseur](/admin/identity-and-access-management/managing-iam-for-your-enterprise/allowing-built-in-authentication-for-users-outside-your-provider) ».

- Votre IdP doit prendre en charge les appels SCIM à un fournisseur de services (SP).

{% endif %}

- Vous devez disposer d’un accès administratif sur votre fournisseur d’identité pour configurer l’application pour le provisionnement d’utilisateurs pour {% data variables.product.product_name %}.

## Activation du provisionnement d’utilisateurs pour votre entreprise

{% ifversion scim-for-ghes %}

Pour effectuer des actions de provisionnement sur votre instance, vous allez créer un compte d’utilisateur d’ordinateur dédié et promouvoir le compte en propriétaire d’entreprise.

Une fois que vous avez activé SCIM sur une instance {% data variables.product.product_name %}, tous les comptes d’utilisateur sont suspendus. Si vous accordez à l’utilisateur l’accès à votre instance à partir de votre IdP et que l’utilisateur s’authentifie correctement, le compte de l’utilisateur n’est plus suspendu.

{% endif %}

{%- ifversion ghae %}
1. Une fois connecté à {% data variables.location.product_location %} en tant que propriétaire d’entreprise, créez un {% data variables.product.pat_v1 %} avec l’étendue **admin:enterprise**. Pour plus d’informations, consultez « [Création d’un {% data variables.product.pat_generic %}](/github/authenticating-to-github/creating-a-personal-access-token) ».
  {% note %}

  **Remarques**:
    - Pour créer le {% data variables.product.pat_generic %}, nous vous recommandons d’utiliser le compte pour le premier propriétaire d’entreprise que vous avez créé lors de l’initialisation. Pour plus d’informations, consultez « [Initialisation de {% data variables.product.prodname_ghe_managed %}](/admin/configuration/initializing-github-ae) ».
    - Vous aurez besoin de ce {% data variables.product.pat_generic %} pour configurer l’application pour SCIM sur votre IdP. Stockez le jeton en toute sécurité dans un gestionnaire de mots de passe jusqu’à ce que vous ayez besoin du jeton plus loin dans ces instructions.

  {% endnote %} {% warning %}

  **Avertissement** : Si le compte d’utilisateur du propriétaire d’entreprise qui crée le {% data variables.product.pat_generic %} est désactivé ou déprovisionné, votre IdP ne provisionne et ne déprovisionne plus automatiquement les comptes d’utilisateur de votre entreprise. Un autre propriétaire d’entreprise doit créer un nouveau {% data variables.product.pat_generic %} et reconfigurer le provisionnement sur l’IdP.

  {% endwarning %} {%- elsif scim-for-ghes %}
1. Créez un compte d’utilisateur d’ordinateur dédié pour effectuer des actions de provisionnement sur votre instance. Pour plus d’informations, consultez « [Autorisation de l’authentification intégrée pour les utilisateurs en dehors de votre fournisseur](/admin/identity-and-access-management/managing-iam-for-your-enterprise/allowing-built-in-authentication-for-users-outside-your-provider#inviting-users-outside-your-provider-to-authenticate-to-your-instance) ».
1. Promouvez le compte d’utilisateur dédié en propriétaire d’entreprise. Pour plus d’informations, consultez « [Inviter des personnes à gérer votre entreprise](/admin/user-management/managing-users-in-your-enterprise/inviting-people-to-manage-your-enterprise#adding-an-enterprise-administrator-to-your-enterprise-account) ».
1. Connectez-vous à votre instance en tant que nouveau propriétaire d’entreprise.
1. Créez un {% data variables.product.pat_v1 %} avec l’étendue **admin:enterprise**. Pour plus d’informations, consultez « [Création d’un {% data variables.product.pat_generic %}](/github/authenticating-to-github/creating-a-personal-access-token) ».

   {% note %}

   **Remarque** : Vous aurez besoin de ce {% data variables.product.pat_generic %} pour tester la configuration SCIM et configurer l’application pour SCIM sur votre IdP. Stockez le jeton en toute sécurité dans un gestionnaire de mots de passe jusqu’à ce que vous ayez besoin du jeton plus loin dans ces instructions.

   {% endnote %} {% data reusables.enterprise_installation.ssh-into-instance %}
1. Pour activer SCIM, exécutez les commandes fournies par votre gestionnaire de comptes sur {% data variables.contact.contact_enterprise_sales %}.
{% data reusables.enterprise_site_admin_settings.wait-for-configuration-run %}
1. Pour vérifier que SCIM est opérationnel, exécutez les commandes suivantes. Remplacez _PAT FROM STEP 3_ et _YOUR INSTANCE’S HOSTNAME_ par les vraies valeurs.

   ```shell
   $ GHES_PAT="PAT FROM STEP 3"
   $ GHES_HOSTNAME="YOUR INSTANCE'S HOSTNAME"
   $ curl --location --request GET 'https://$GHES_HOSTNAME/api/v3/scim/v2/Users' \
       --header 'Content-Type: application/scim' \
       --header 'Authorization: Bearer $GHES_PAT'
   ```
   
   La commande doit retourner un tableau vide.
{%- endif %} {%- ifversion ghae %} {% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %}
1. Sous « Provisionnement d’utilisateurs SCIM », sélectionnez **Exiger le provisionnement d’utilisateurs SCIM**.
  ![Case à cocher pour « Exiger le provisionnement d’utilisateurs SCIM » dans les paramètres de sécurité d’entreprise](/assets/images/help/enterprises/settings-require-scim-user-provisioning.png)
1. Cliquez sur **Enregistrer**.
  ![Bouton Enregistrer sous « Exiger le provisionnement d’utilisateurs SCIM » dans les paramètres de sécurité d’entreprise](/assets/images/help/enterprises/settings-scim-save.png) {%- endif %}
1. Configurez le provisionnement d’utilisateurs dans l’application pour {% data variables.product.product_name %} sur votre fournisseur d’identité.

  {%- ifversion ghae %} Les IdP suivants fournissent de la documentation sur la configuration du provisionnement pour {% data variables.product.product_name %}. Si votre fournisseur d’identité n’est pas listé, contactez votre fournisseur d’identité pour demander la prise en charge pour {% data variables.product.product_name %}.
  {%- elsif scim-for-ghes %} {% data variables.product.company_short %} fournit une documentation pour la configuration du provisionnement pour les IdP suivants.{% endif %}

  | Fournisseur d’identité | Plus d’informations |
  | :- | :- |
  | Azure AD | {% ifversion ghae %}[Tutoriel : Configurer {% data variables.product.prodname_ghe_managed %} pour le provisionnement automatique d’utilisateurs](https://docs.microsoft.com/azure/active-directory/saas-apps/github-ae-provisioning-tutorial) dans Microsoft Docs. {% endif %}Pour configurer Azure AD pour {% data variables.product.product_name %}, consultez « [Configuration de l’authentification et du provisionnement pour votre entreprise avec Azure AD](/admin/identity-and-access-management/using-saml-for-enterprise-iam/configuring-authentication-and-provisioning-for-your-enterprise-using-azure-ad) ». |
| Okta | {% ifversion ghae %}(bêta){% endif %} Pour configurer Okta pour {% data variables.product.product_name %}, consultez « [Configuration de l’authentification et du provisionnement pour votre entreprise à l’aide d’Okta](/admin/identity-and-access-management/using-saml-for-enterprise-iam/configuring-authentication-and-provisioning-for-your-enterprise-using-okta) ». |

  L’application sur votre IdP nécessite deux valeurs pour provisionner ou déprovisionner des comptes d’utilisateur sur {% data variables.location.product_location %}.

  | Valeur | Autres noms | Description | Exemple |
  | :- | :- | :- | :- |
  | URL | URL de locataire | URL de l’API de provisionnement SCIM pour votre entreprise sur {% data variables.product.prodname_ghe_managed %} | <nobr><code>{% data variables.product.api_url_pre %}/scim/v2</nobr></code> |
  | Secret partagé | {% data variables.product.pat_generic_caps %}, jeton secret | Jeton pour l’application sur votre fournisseur d’identité pour effectuer des tâches de provisionnement au nom d’un propriétaire d’entreprise | {% data variables.product.pat_generic_caps %} que vous avez créé à l’étape {% ifversion ghae %}1{% elsif scim-for-ghes %}4{% endif %} |
