---
title: 'À propos d’{% data variables.product.prodname_emus %}'
shortTitle: About managed users
intro: 'Vous pouvez gérer de manière centralisée l’identité et l’accès des membres de votre entreprise sur {% data variables.product.prodname_dotcom %} à partir de votre fournisseur d’identité.'
redirect_from:
  - /early-access/github/articles/get-started-with-managed-users-for-your-enterprise
  - /github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users
  - /admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users
  - /admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/about-enterprise-managed-users
  - /admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/about-enterprise-managed-users
versions:
  ghec: '*'
type: overview
topics:
  - Accounts
  - Authentication
  - Enterprise
  - SSO
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 82a8b8c29ea38d57f0481146f2a857c2dcba8413
ms.sourcegitcommit: d82f268a6f0236d1f4d2bf3d049974ada0170402
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/10/2022
ms.locfileid: '148160727'
---
## À propos d’{% data variables.product.prodname_emus %}

Avec {% data variables.product.prodname_emus %}, vous pouvez contrôler les comptes d’utilisateur de vos membres d’entreprise par le biais de votre fournisseur d’identité (IdP). Les utilisateurs attribués à l’application {% data variables.product.prodname_emu_idp_application %} dans votre IdP sont provisionnés comme nouveaux comptes d’utilisateur dans {% data variables.product.prodname_dotcom %} et ajoutés à votre entreprise. Vous contrôlez les noms d’utilisateur, les données de profil, l’appartenance aux équipes et l’accès aux référentiels à partir de votre IdP.

Dans votre IdP, vous pouvez donner à chaque {% data variables.enterprise.prodname_managed_user %} le rôle utilisateur, propriétaire d’entreprise ou gestionnaire de facturation. Les {% data variables.enterprise.prodname_managed_users_caps %} peuvent posséder des organisations au sein de votre entreprise et ajouter d’autres {% data variables.enterprise.prodname_managed_users %} aux organisations et aux équipes qui y sont incluses. Pour plus d’informations, consultez « [Rôles dans une entreprise](/github/setting-up-and-managing-your-enterprise/managing-users-in-your-enterprise/roles-in-an-enterprise) » et « [À propos des organisations](/organizations/collaborating-with-groups-in-organizations/about-organizations) ».

{% ifversion oidc-for-emu %}

{% data reusables.enterprise-accounts.emu-cap-validates %} Pour plus d’informations, consultez « [À propos du support de la stratégie d’accès conditionnel de votre fournisseur d’identité](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-support-for-your-idps-conditional-access-policy) ».

{% endif %}

Vous pouvez accorder l’accès aux {% data variables.enterprise.prodname_managed_users %} et la capacité à contribuer aux dépôts de votre entreprise, mais les {% data variables.enterprise.prodname_managed_users %} ne peuvent pas créer de contenu public ni collaborer avec d’autres utilisateurs, organisations et entreprises sur le reste de {% data variables.product.prodname_dotcom %}. Pour plus d’informations, consultez « [Capacités et restrictions des {% data variables.enterprise.prodname_managed_users %}](#abilities-and-restrictions-of-enterprise-managed-users) ».

Les noms d’utilisateur des {% data variables.enterprise.prodname_managed_users %} de votre entreprise et leurs informations de profil telles que les noms d’affichage et les adresses e-mail sont définis par le biais de votre IdP et ne peuvent pas être modifiés par les utilisateurs eux-mêmes. Pour plus d’informations, consultez « [Noms d’utilisateur et informations de profil](#usernames-and-profile-information) ».

Les propriétaires d’entreprise peuvent auditer toutes les actions des {% data variables.enterprise.prodname_managed_users %} sur {% data variables.product.prodname_dotcom %}. Pour plus d’informations, consultez « [Événements du journal d’audit pour votre entreprise](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise#about-audit-log-events-for-your-enterprise) ».

Pour utiliser {% data variables.product.prodname_emus %}, vous avez besoin d’un type distinct de compte d’entreprise avec {% data variables.product.prodname_emus %} activé. Pour plus d’informations sur la création de ce compte, consultez « [À propos des entreprises avec des utilisateurs managés](#about-enterprises-with-managed-users) ».

{% note %}

**Remarque :** il existe plusieurs options pour la gestion des identités et des accès avec {% data variables.product.prodname_ghe_cloud %}, et {% data variables.product.prodname_emus %} n’est pas la meilleure solution pour chaque client. Pour plus d’informations sur la question de savoir si {% data variables.product.prodname_emus %} convient à votre entreprise, consultez « [À propos de l’authentification pour votre entreprise](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise#identifying-the-best-authentication-method-for-your-enterprise) ».

{% endnote %}

## À propos de la gestion des appartenances à l’organisation

Vous pouvez gérer manuellement les appartenances à l’organisation ou vous pouvez mettre à jour les appartenances automatiquement à l’aide de groupes d’IdP. Pour gérer les appartenances à l’organisation par le biais de votre IdP, les membres doivent être ajoutés à un groupe d’IdP et le groupe d’IdP doit être connecté à une équipe de l’organisation. Pour plus d’informations sur la gestion automatique des appartenances aux organisations et aux équipes, consultez « [Gestion des appartenances aux équipes avec des groupes de fournisseurs d’identité](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/managing-team-memberships-with-identity-provider-groups) ».

La façon dont un membre est ajouté à une organisation appartenant à votre entreprise (via des groupes d’IdP ou manuellement) détermine comment il doit être supprimé d’une organisation. 

- Si un membre a été ajouté à une organisation manuellement, vous devez le supprimer manuellement. S’il est désattribué de l’application {% data variables.product.prodname_emu_idp_application %} sur votre IdP, il sera suspendu mais pas supprimé de l’organisation.
- Si un utilisateur est devenu membre d’une organisation parce qu’il a été ajouté à des groupes d’IdP mappés à une ou plusieurs équipes de l’organisation, sa suppression de _tous_ les groupes d’IdP mappés associés à l’organisation le supprimera de l’organisation.

Pour découvrir comment un membre a été ajouté à une organisation, vous pouvez filtrer sur la liste des membres par type. Pour plus d’informations, consultez « [Visualisation des personnes dans votre entreprise](/admin/user-management/managing-users-in-your-enterprise/viewing-people-in-your-enterprise#filtering-by-member-type-in-an-enterprise-with-managed-users) ».

## Prise en charge des fournisseurs d’identité

{% data variables.product.prodname_emus %} prend en charge les fournisseurs d’identité {% ifversion oidc-for-emu %} et les méthodes d’authentification suivants :

|                                  | SAML                                          | OIDC (bêta)                                   |
|----------------------------------|-----------------------------------------------|-----------------------------------------------|
| Azure Active Directory           | {% octicon "check" aria-label="Check icon" %} | {% octicon "check" aria-label="Check icon" %} |
| Okta                             | {% octicon "check" aria-label="Check icon" %} |                                               |
{% else %} :

{% data reusables.enterprise-accounts.emu-supported-idps %}

{% endif %}

## Capacités et restrictions des {% data variables.enterprise.prodname_managed_users %}

Les {% data variables.enterprise.prodname_managed_users_caps %} peuvent contribuer uniquement aux dépôts privés et internes à leurs entreprises et aux dépôts privés appartenant à leur compte d’utilisateur. Les {% data variables.enterprise.prodname_managed_users_caps %} ont un accès en lecture seule à la large communauté {% data variables.product.prodname_dotcom %}. Ces restrictions de visibilité et d’accès pour les utilisateurs et le contenu s’appliquent à toutes les requêtes, y compris les requêtes d’API.

* Les {% data variables.enterprise.prodname_managed_users_caps %} ne peuvent pas être invités dans les organisations ou les dépôts extérieurs à l’entreprise. Les {% data variables.enterprise.prodname_managed_users %} ne peuvent pas non plus être invités dans d’autres entreprises. 
* Les collaborateurs externes ne sont pas pris en charge par {% data variables.product.prodname_emus %}.
* Les {% data variables.enterprise.prodname_managed_users_caps %} ne peuvent pas créer de problèmes ou de demandes de tirage dans des dépôts hors de l’entreprise, ni les commenter ou y ajouter des réactions, ni les surveiller, les dupliquer ou leur ajouter une étoile.
* Les {% data variables.enterprise.prodname_managed_users_caps %} peuvent voir tous les dépôts publics sur {% data variables.product.prodname_dotcom_the_website %}, mais ne peuvent pas pousser (push) de code sur des dépôts hors de l’entreprise.
* Seuls les autres membres de l’entreprise peuvent voir les {% data variables.enterprise.prodname_managed_users_caps %} et le contenu qu’ils créent. 
* Les {% data variables.enterprise.prodname_managed_users_caps %} ne peuvent pas suivre les utilisateurs externes à l’entreprise.
* Les {% data variables.enterprise.prodname_managed_users_caps %} ne peuvent pas créer de Gist ni en commenter.
* Les {% data variables.enterprise.prodname_managed_users_caps %} ne peuvent pas créer de workflows de démarrage pour {% data variables.product.prodname_actions %}.
* Les {% data variables.enterprise.prodname_managed_users_caps %} ne peuvent pas installer {% data variables.product.prodname_github_apps %} sur leurs comptes d’utilisateur.
* Les autres utilisateurs de {% data variables.product.prodname_dotcom %} ne peuvent pas voir, mentionner ou inviter à collaborer un {% data variables.enterprise.prodname_managed_user %}.
* Vous pouvez choisir si les {% data variables.enterprise.prodname_managed_users %} peuvent créer des dépôts appartenant à leurs comptes d’utilisateur. Pour plus d’informations, consultez « [Application de stratégies de gestion des dépôts dans votre entreprise](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-repository-creation) ».
* Si vous autorisez les {% data variables.enterprise.prodname_managed_users %} à créer des dépôts appartenant à leurs comptes d’utilisateur, ils ne peuvent avoir que des dépôts privés et peuvent uniquement inviter d’autres membres de l’entreprise à collaborer sur leurs dépôts appartenant aux utilisateurs.
* {% data reusables.enterprise-accounts.emu-forks %}
* Seuls des dépôts privés et internes peuvent être créés dans les organisations appartenant à une {% data variables.enterprise.prodname_emu_enterprise %}, en fonction des paramètres de visibilité des dépôts de l’entreprise et des organisations. 
* Les {% data variables.enterprise.prodname_managed_users_caps %} sont limités dans leur utilisation de {% data variables.product.prodname_pages %}. Pour plus d’informations, consultez « [À propos de {% data variables.product.prodname_pages %}](/pages/getting-started-with-github-pages/about-github-pages#limitations-for-enterprise-managed-users) ».
* {% data reusables.copilot.emus-cannot-use-copilot %}

## Bien démarrer avec {% data variables.product.prodname_emus %}

Pour que vos développeurs puissent utiliser {% data variables.product.prodname_ghe_cloud %} avec {% data variables.product.prodname_emus %}, vous devez suivre une série d’étapes de configuration.

1. Pour utiliser {% data variables.product.prodname_emus %}, vous avez besoin d’un type distinct de compte d’entreprise avec {% data variables.product.prodname_emus %} activé. Pour essayer {% data variables.product.prodname_emus %} ou pour discuter des options de migration à partir de votre entreprise existante, contactez l’[équipe commerciale {% data variables.product.prodname_dotcom %}](https://enterprise.github.com/contact).
  
  Votre contact de l’équipe commerciale GitHub vous aidera à créer votre {% data variables.enterprise.prodname_emu_enterprise %}. Vous devrez fournir l’adresse e-mail de l’utilisateur qui configurera votre entreprise et un code court qui sera utilisé comme suffixe pour les noms d’utilisateur de vos membres d’entreprise. {% data reusables.enterprise-accounts.emu-shortcode %} Pour plus d’informations, consultez « [Noms d’utilisateur et informations de profil](#usernames-and-profile-information) ».
  
2. Après avoir créé votre entreprise, vous recevrez un e-mail de {% data variables.product.prodname_dotcom %} vous invitant à choisir un mot de passe pour l’utilisateur de configuration de votre entreprise, qui sera le premier propriétaire de l’entreprise. Utilisez une fenêtre de navigation privée pour la définition du mot de passe. L’utilisateur de configuration est utilisé uniquement pour la configuration de l’authentification unique et l’intégration de l’approvisionnement SCIM pour l’entreprise. Après l’authentification unique réussie, il n’aura plus accès à l’administration du compte d’entreprise. Le nom d’utilisateur de l’utilisateur de configuration est le code court de votre entreprise avec le suffixe `_admin`. 
  
  {% note %}
  
  {% data reusables.enterprise-accounts.emu-password-reset-session %}
  
  {% endnote %}
  
3. Une fois que vous vous êtes connecté en tant qu’utilisateur de configuration, nous vous recommandons d’activer l’authentification à 2 facteurs. Pour plus d’informations, consultez « [Configuration de l’authentification à 2 facteurs](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication) ».

1. Pour démarrer, configurez {% ifversion oidc-for-emu %}comment vos membres s’authentifieront. Si vous utilisez Azure Active Directory comme fournisseur d’identité, vous pouvez choisir entre OpenID Connect (OIDC) et Security Assertion Markup Language (SAML). Les deux options offrent une expérience de connexion transparente pour vos membres, mais seule l’OIDC inclut la prise en charge des stratégies d’accès conditionnel (CAP). Si vous utilisez Okta comme fournisseur d’identité, vous pouvez utiliser SAML pour authentifier vos membres.{% else %} Authentification unique SAML pour votre entreprise. Pour plus d’informations, consultez « [Configuration de l’authentification unique SAML pour les utilisateurs managés Enterprise](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-saml-single-sign-on-for-enterprise-managed-users) ».{% endif %}
  
  {% ifversion oidc-for-emu %}
  
  Pour démarrer, lisez le guide relatif à la méthode d’authentification choisie.
  
    - « [Configuration d’OIDC pour les utilisateurs managés Enterprise](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/configuring-oidc-for-enterprise-managed-users) ».
    - « [Configuration de l’authentification unique SAML pour les utilisateurs managés Enterprise](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-saml-single-sign-on-for-enterprise-managed-users) ».
  
  {% endif %}
  
4. Une fois que vous avez configuré l’authentification unique, vous pouvez configurer l’approvisionnement SCIM. SCIM est le moyen qu’utilise votre fournisseur d’identité pour créer {% data variables.enterprise.prodname_managed_users %} sur {% data variables.product.prodname_dotcom_the_website %}. Pour plus d’informations sur la configuration de l’approvisionnement SCIM, consultez « [Configuration de l’approvisionnement SCIM pour les utilisateurs managés Enterprise](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-scim-provisioning-for-enterprise-managed-users) ».
  
5. Une fois l’authentification et le provisionnement configurés, vous pouvez commencer à gérer l’appartenance à l’organisation pour vos {% data variables.enterprise.prodname_managed_users %} en synchronisant les groupes d’IdP avec les équipes. Pour plus d’informations, consultez « [Gestion des appartenances aux équipes avec les groupes d’un fournisseur d’identité](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/managing-team-memberships-with-identity-provider-groups) ».

Si les membres de votre entreprise doivent utiliser une station de travail pour contribuer aux dépôts sur {% data variables.location.product_location %} à la fois à partir d’un {% data variables.enterprise.prodname_managed_user %} et d’un compte personnel, vous pouvez fournir un support. Pour plus d’informations, consultez « [Support des développeurs avec plusieurs comptes d’utilisateur sur {% data variables.product.prodname_dotcom_the_website %}](#supporting-developers-with-multiple-user-accounts-on-githubcom) ».

## Authentification comme {% data variables.enterprise.prodname_managed_user %}

Les {% data variables.enterprise.prodname_managed_users_caps %} doivent s’authentifier par le biais de leur fournisseur d’identité. Pour s’authentifier, un {% data variables.enterprise.prodname_managed_user %} peut accéder au portail d’application de son IdP ou utiliser la page de connexion sur {% data variables.product.prodname_dotcom_the_website %}. 

Par défaut, lorsqu’un utilisateur non authentifié tente d’accéder à une entreprise qui utilise {% data variables.product.prodname_emus %}, {% data variables.product.company_short %} affiche une erreur 404. Un propriétaire d’entreprise peut éventuellement activer les redirections automatiques vers l’authentification unique (SSO) au lieu de l’erreur 404. Pour plus d’informations, consultez « [Application de stratégies pour les paramètres de sécurité dans votre entreprise](/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-sso-for-unauthenticated-users) ».

{% data reusables.enterprise-accounts.about-recovery-codes %} Pour plus d’informations, consultez « [Gestion des codes de récupération pour votre entreprise](/admin/identity-and-access-management/managing-recovery-codes-for-your-enterprise) ».

### Authentification comme {% data variables.enterprise.prodname_managed_user %} via {% data variables.product.prodname_dotcom_the_website %}

1. Accédez à [https://github.com/login](https://github.com/login).
1. Dans la zone de texte « Nom d’utilisateur ou adresse e-mail », entrez votre nom d’utilisateur avec le trait de soulignement et le code court.
  ![Capture d’écran montrant le formulaire de connexion](/assets/images/help/enterprises/emu-login-username.png) Quand le formulaire reconnaît votre nom d’utilisateur, il est mis à jour. Vous n’avez pas besoin d’entrer votre mot de passe dans ce formulaire.
1. Pour continuer et utiliser votre fournisseur d’identité, cliquez sur **Se connecter avec un fournisseur d’identité**.
  ![Capture d’écran montrant le bouton « Se connecter avec un fournisseur d’identité »](/assets/images/help/enterprises/emu-login-submit.png)

## Noms d’utilisateur et informations de profil

{% data variables.product.product_name %} crée automatiquement un nom d’utilisateur pour chaque personne en normalisant un identificateur fourni par votre fournisseur d’identité. Pour plus d’informations, consultez « [Considérations relatives au nom d’utilisateur pour l’authentification externe](/admin/identity-and-access-management/managing-iam-for-your-enterprise/username-considerations-for-external-authentication) ».

Un conflit peut se produire lors de l’approvisionnement des utilisateurs si les parties uniques de l’identificateur fournies par votre fournisseur d’identité sont supprimées lors de la normalisation. Si vous ne parvenez pas à provisionner un utilisateur en raison d’un conflit de nom d’utilisateur, vous devez modifier le nom d’utilisateur fourni par votre IdP. Pour plus d’informations, consultez « [Résolution des problèmes de nom d’utilisateur](/admin/identity-and-access-management/managing-iam-for-your-enterprise/username-considerations-for-external-authentication#resolving-username-problems) ».

{% data reusables.enterprise-accounts.emu-only-emails-within-the-enterprise-can-conflict %} 

Le nom de profil et l’adresse e-mail d’un {% data variables.enterprise.prodname_managed_user %} sont également fournis par l’IdP. Les {% data variables.enterprise.prodname_managed_users_caps %} ne peuvent pas changer leur nom de profil ou leur adresse e-mail sur {% data variables.product.prodname_dotcom %} et l’IdP peut uniquement fournir une seule adresse e-mail.

## Support des développeurs avec plusieurs comptes d’utilisateur sur {% data variables.location.product_location %}

Les personnes de votre équipe peuvent avoir besoin de contribuer aux ressources sur {% data variables.location.product_location %} qui se trouvent en dehors de votre {% data variables.enterprise.prodname_emu_enterprise %}. Par exemple, vous pouvez envisager de gérer une entreprise distincte pour les projets open source de votre entreprise. Étant donné qu’un {% data variables.enterprise.prodname_managed_user %} ne peut pas contribuer à des ressources publiques, les utilisateurs doivent gérer un compte personnel distinct pour ce travail.

Les personnes qui doivent contribuer à partir de deux comptes d’utilisateur sur {% data variables.location.product_location %} à l’aide d’une seule station de travail peuvent configurer Git pour simplifier le processus. Pour plus d’informations, consultez « [Gestion de plusieurs comptes](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-your-personal-account/managing-multiple-accounts) ».
