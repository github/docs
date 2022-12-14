---
title: À propos d’Enterprise Managed Users
shortTitle: About managed users
intro: You can centrally manage identity and access for your enterprise members on {% data variables.product.prodname_dotcom %} from your identity provider.
product: '{% data reusables.gated-features.emus %}'
redirect_from:
- /early-access/github/articles/get-started-with-managed-users-for-your-enterprise
- /github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users
- /admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users
- /admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/about-enterprise-managed-users
versions:
  ghec: '*'
type: overview
topics:
- Accounts
- Authentication
- Enterprise
- SSO
ms.openlocfilehash: 9ca2be64f3806cf8b7b449ea64532c5ae2b17782
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 05/17/2022
ms.locfileid: "145104898"
---
## <a name="about--data-variablesproductprodname_emus-"></a>À propos d’{% data variables.product.prodname_emus %}

Avec {% data variables.product.prodname_emus %}, vous pouvez contrôler les comptes d’utilisateur de vos membres d’entreprise par le biais de votre fournisseur d’identité (IdP). Vous pouvez simplifier l’authentification avec l’authentification unique (SSO) SAML et provisionner, mettre à jour et déprovisionner des comptes d’utilisateur pour vos membres d’entreprise. Les utilisateurs attribués à l’application {% data variables.product.prodname_emu_idp_application %} dans votre IdP sont provisionnés comme nouveaux comptes d’utilisateur dans {% data variables.product.prodname_dotcom %} et ajoutés à votre entreprise. Vous contrôlez les noms d’utilisateur, les données de profil, l’appartenance aux équipes et l’accès aux dépôts à partir de votre IdP.

Dans votre IdP, vous pouvez donner à chaque {% data variables.product.prodname_managed_user %} le rôle utilisateur, propriétaire d’entreprise ou gestionnaire de facturation. Les {% data variables.product.prodname_managed_users_caps %} peuvent posséder des organisations au sein de votre entreprise et ajouter d’autres {% data variables.product.prodname_managed_users %} aux organisations et aux équipes qui y sont incluses. Pour plus d’informations, consultez « [Rôles dans une entreprise](/github/setting-up-and-managing-your-enterprise/managing-users-in-your-enterprise/roles-in-an-enterprise) » et « [À propos des organisations](/organizations/collaborating-with-groups-in-organizations/about-organizations) ».

L’appartenance aux organisations peut être gérée manuellement ou mise à jour automatiquement, car les {% data variables.product.prodname_managed_users %} sont ajoutés aux groupes IdP connectés à des équipes au sein de l’organisation. Quand un {% data variables.product.prodname_managed_user %} est ajouté manuellement à une organisation, si son attribution à l’application {% data variables.product.prodname_emu_idp_application %} sur votre IdP est annulée, il sera suspendu mais pas supprimé de l’organisation. Pour plus d’informations sur la gestion automatique de l’appartenance aux organisations et aux équipes, consultez « [Gestion des appartenances aux équipes avec des groupes de fournisseurs d’identité](/github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/managing-team-memberships-with-identity-provider-groups) ».

Vous pouvez accorder aux {% data variables.product.prodname_managed_users %} l’accès aux dépôts de votre entreprise et la possibilité d’y contribuer, mais les {% data variables.product.prodname_managed_users %} ne peuvent pas créer de contenu public ni collaborer avec d’autres utilisateurs, organisations et entreprises sur le reste de {% data variables.product.prodname_dotcom %}. Les {% data variables.product.prodname_managed_users %} provisionnés pour votre entreprise ne peuvent pas être invités aux organisations ou dépôts en dehors de l’entreprise et les {% data variables.product.prodname_managed_users %} ne peuvent pas être invités à d’autres entreprises. Les collaborateurs externes ne sont pas pris en charge par {% data variables.product.prodname_emus %}.

Les noms d’utilisateur des {% data variables.product.prodname_managed_users %} de votre entreprise et leurs informations de profil telles que les noms d’affichage et les adresses e-mail sont définis par le biais de votre IdP et ne peuvent pas être modifiés par les utilisateurs eux-mêmes. Pour plus d’informations, consultez « [Noms d’utilisateur et informations de profil](#usernames-and-profile-information) ».

{% data reusables.enterprise-accounts.emu-forks %}

Les propriétaires d’entreprise peuvent auditer toutes les actions des {% data variables.product.prodname_managed_users %} sur {% data variables.product.prodname_dotcom %}.

Pour utiliser {% data variables.product.prodname_emus %}, vous avez besoin d’un type distinct de compte d’entreprise avec {% data variables.product.prodname_emus %} activé. Pour plus d’informations sur la création de ce compte, consultez « [À propos des entreprises avec des utilisateurs managés](#about-enterprises-with-managed-users) ».


## <a name="identity-provider-support"></a>Prise en charge des fournisseurs d’identité

{% data variables.product.prodname_emus %} prend en charge les IdP suivants :

{% data reusables.enterprise-accounts.emu-supported-idps %}

## <a name="abilities-and-restrictions-of--data-variablesproductprodname_managed_users-"></a>Capacités et restrictions des {% data variables.product.prodname_managed_users %}

Les {% data variables.product.prodname_managed_users_caps %} peuvent contribuer uniquement aux dépôts privés et internes à leurs entreprises et aux dépôts privés appartenant à leur compte d’utilisateur. Les {% data variables.product.prodname_managed_users_caps %} ont un accès en lecture seule à la vaste communauté {% data variables.product.prodname_dotcom %}. Ces restrictions de visibilité et d’accès pour les utilisateurs et le contenu s’appliquent à toutes les requêtes, y compris les requêtes d’API.

* Les {% data variables.product.prodname_managed_users_caps %} ne peuvent pas créer de problèmes ou de demandes de tirage (pull request) dans des dépôts hors de l’entreprise, ni les commenter ou y ajouter des réactions, ni les surveiller, les dupliquer (fork) ou leur ajouter une étoile.
* Les {% data variables.product.prodname_managed_users_caps %} peuvent voir tous les dépôts publics sur {% data variables.product.prodname_dotcom_the_website %}, mais ne peuvent pas pousser (push) de code sur des dépôts hors de l’entreprise.
* Les {% data variables.product.prodname_managed_users_caps %} et le contenu qu’ils créent ne sont visibles que pour les autres membres de l’entreprise. 
* Les données {% data variables.product.prodname_managed_users_caps %} ne peuvent pas suivre des utilisateurs hors de l’entreprise.
* Les {% data variables.product.prodname_managed_users_caps %} ne peuvent pas créer de Gist ni en commenter.
* Les {% data variables.product.prodname_managed_users_caps %} ne peuvent pas installer {% data variables.product.prodname_github_apps %} sur leurs comptes d’utilisateur.
* Les autres utilisateurs de {% data variables.product.prodname_dotcom %} ne peuvent pas voir, mentionner ou inviter à collaborer un {% data variables.product.prodname_managed_user %}.
* Les {% data variables.product.prodname_managed_users_caps %} peuvent posséder des dépôts privés uniquement et les {% data variables.product.prodname_managed_users %} peuvent inviter uniquement d’autres membres de l’entreprise à collaborer sur les dépôts qu’ils possèdent.
* Seuls des dépôts privés et internes peuvent être créés dans les organisations appartenant à une {% data variables.product.prodname_emu_enterprise %}, en fonction des paramètres de visibilité des dépôts de l’entreprise et des organisations. 
* Les {% data variables.product.prodname_managed_users_caps %} sont limitées dans leur utilisation de {% data variables.product.prodname_pages %}. Pour plus d’informations, consultez « [À propos de {% data variables.product.prodname_pages %}](/pages/getting-started-with-github-pages/about-github-pages#limitations-for-enterprise-managed-users) ».

## <a name="about-enterprises-with-managed-users"></a>À propos des entreprises avec des utilisateurs managés

Pour utiliser {% data variables.product.prodname_emus %}, vous avez besoin d’un type distinct de compte d’entreprise avec {% data variables.product.prodname_emus %} activé. Pour essayer {% data variables.product.prodname_emus %} ou pour discuter des options de migration à partir de votre entreprise existante, contactez l’[équipe commerciale {% data variables.product.prodname_dotcom %}](https://enterprise.github.com/contact).

Votre contact de l’équipe commerciale GitHub vous aidera à créer votre {% data variables.product.prodname_emu_enterprise %}. Vous devrez fournir l’adresse e-mail de l’utilisateur qui configurera votre entreprise et un code court qui sera utilisé comme suffixe pour les noms d’utilisateur de vos membres d’entreprise. {% data reusables.enterprise-accounts.emu-shortcode %} Pour plus d’informations, consultez « [Noms d’utilisateur et informations de profil](#usernames-and-profile-information) ».

Après avoir créé votre entreprise, vous recevrez un e-mail de {% data variables.product.prodname_dotcom %} vous invitant à choisir un mot de passe pour l’utilisateur de configuration de votre entreprise, qui sera le premier propriétaire de l’entreprise. Utilisez une fenêtre de navigation privée pour la définition du mot de passe. L’utilisateur de configuration est utilisé uniquement pour la configuration de l’authentification unique SAML et l’intégration du provisionnement SCIM pour l’entreprise. Après l’activation de SAML, il n’aura plus accès à l’administration du compte d’entreprise.

Le nom d’utilisateur de l’utilisateur de configuration est le code court de votre entreprise avec le suffixe `_admin`. Après vous être connecté à votre utilisateur de configuration, vous pouvez commencer en configurant l’authentification unique SAML pour votre entreprise. Pour plus d’informations, consultez « [Configuration de l’authentification unique SAML pour Enterprise Managed Users](/github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/configuring-saml-single-sign-on-for-enterprise-managed-users) ».

{% note %}

{% data reusables.enterprise-accounts.emu-password-reset-session %}

{% endnote %}

## <a name="authenticating-as-a--data-variablesproductprodname_managed_user-"></a>Authentification comme {% data variables.product.prodname_managed_user %}

Les {% data variables.product.prodname_managed_users_caps %} doivent s’authentifier par le biais de leur fournisseur d’identité. Pour s’authentifier, un {% data variables.product.prodname_managed_user %} peut visiter le portail d’application de son IdP ou utiliser la page de connexion sur {% data variables.product.prodname_dotcom_the_website %}.

{% data reusables.enterprise-accounts.about-recovery-codes %} Pour plus d’informations, consultez « [Gestion des codes de récupération pour votre entreprise](/admin/identity-and-access-management/managing-recovery-codes-for-your-enterprise) ».

### <a name="authenticating-as-a--data-variablesproductprodname_managed_user--via--data-variablesproductprodname_dotcom_the_website-"></a>Authentification comme {% data variables.product.prodname_managed_user %} sur {% data variables.product.prodname_dotcom_the_website %}

1. Accédez à [https://github.com/login](https://github.com/login).
1. Dans la zone de texte « Nom d’utilisateur ou adresse e-mail », entrez votre nom d’utilisateur avec le trait de soulignement et le code court.
  ![Capture d’écran montrant le formulaire de connexion](/assets/images/help/enterprises/emu-login-username.png) Quand le formulaire reconnaît votre nom d’utilisateur, il est mis à jour. Vous n’avez pas besoin d’entrer votre mot de passe dans ce formulaire.
1. Pour continuer et utiliser votre fournisseur d’identité, cliquez sur **Se connecter avec un fournisseur d’identité**.
  ![Capture d’écran montrant le bouton « Se connecter avec un fournisseur d’identité »](/assets/images/help/enterprises/emu-login-submit.png)

## <a name="usernames-and-profile-information"></a>Noms d’utilisateur et informations de profil

{% data variables.product.product_name %} crée automatiquement un nom d’utilisateur pour chaque personne en normalisant un identificateur fourni par votre fournisseur d’identité. Pour plus d’informations, consultez « [Considérations relatives au nom d’utilisateur pour l’authentification externe](/admin/identity-and-access-management/managing-iam-for-your-enterprise/username-considerations-for-external-authentication) ».

Un conflit peut se produire lors de l’approvisionnement des utilisateurs si les parties uniques de l’identificateur fournies par votre fournisseur d’identité sont supprimées lors de la normalisation. Si vous ne parvenez pas à provisionner un utilisateur en raison d’un conflit de nom d’utilisateur, vous devez modifier le nom d’utilisateur fourni par votre IdP. Pour plus d’informations, consultez « [Résolution des conflits de nom d’utilisateur](/admin/identity-and-access-management/managing-iam-for-your-enterprise/username-considerations-for-external-authentication#resolving-username-conflicts) ».

Le nom de profil et l’adresse e-mail d’un {% data variables.product.prodname_managed_user %} sont également fournis par l’IdP. Les {% data variables.product.prodname_managed_users_caps %} ne peuvent pas modifier leur nom de profil ou leur adresse e-mail sur {% data variables.product.prodname_dotcom %}.
