---
title: À propos de l’authentification auprès de GitHub
intro: 'Vous pouvez accéder de manière sécurisée aux ressources de votre compte en vous authentifiant auprès de {% data variables.product.product_name %}, en utilisant différentes informations d’identification selon l’endroit où vous vous authentifiez.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
redirect_from:
  - /github/authenticating-to-github/about-authentication-to-github
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/about-authentication-to-github
shortTitle: Authentication to GitHub
ms.openlocfilehash: d40d3e18c75c2e5d8f16ebbb4fd9b6fdf03e2a73
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/09/2022
ms.locfileid: '147718092'
---
## À propos de l’authentification auprès de {% data variables.product.prodname_dotcom %}

Pour maintenir votre compte sécurisé, vous devez vous authentifier avant de pouvoir accéder à{% ifversion not ghae %} certaines{% endif %} des ressources sur {% data variables.product.product_name %}. Quand vous vous authentifiez auprès de {% data variables.product.product_name %}, vous fournissez ou confirmez des informations d’identification qui vous sont propres pour prouver que vous êtes exactement qui vous déclarez être.

Vous pouvez accéder à vos ressources dans {% data variables.product.product_name %} de différentes façons : dans le navigateur, avec {% data variables.product.prodname_desktop %} ou une autre application de bureau, avec l’API ou par le biais de la ligne de commande. Chaque façon d’accéder à {% data variables.product.product_name %} prend en charge différents modes d’authentification.
{%- ifversion not fpt %}
- Votre fournisseur d’identité (IdP){% endif %}{% ifversion not ghae %}
- Nom d’utilisateur et mot de passe avec authentification à 2 facteurs{% endif %}
- Jeton d’accès personnel
- Clé SSH

## Authentification dans votre navigateur

{% ifversion ghae %}

Vous pouvez vous authentifier auprès de {% data variables.product.product_name %} dans votre navigateur à l’aide de votre IdP. Pour plus d’informations, consultez « [À propos de l’authentification à l’aide de l’authentification unique SAML](/github/authenticating-to-github/about-authentication-with-saml-single-sign-on) ».

{% else %}

{% ifversion fpt or ghec %}

Si vous êtes membre d’une {% data variables.product.prodname_emu_enterprise %}, vous vous authentifierez auprès de {% data variables.product.product_name %} dans votre navigateur à l’aide de votre IdP. Pour plus d’informations, consultez « [Authentification en tant qu’utilisateur managé](/enterprise-cloud@latest/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users#authenticating-as-a-managed-user){% ifversion fpt %} » dans la documentation {% data variables.product.prodname_ghe_cloud %}.{% else %} ».{% endif %} 

Si vous n’êtes pas membre d’une {% data variables.product.prodname_emu_enterprise %}, vous vous authentifierez à l’aide de vos nom d’utilisateur et mot de passe {% data variables.product.prodname_dotcom_the_website %}. Vous avez également la possibilité d’utiliser l’authentification à 2 facteurs et l’authentification unique SAML, qui peuvent être requises par les propriétaires d’entreprise et d’organisation.

{% else %}

Vous pouvez vous authentifier auprès de {% data variables.product.product_name %} dans votre navigateur de plusieurs façons.

{% endif %}

- **Nom d’utilisateur et mot de passe uniquement**
    - Vous créez un mot de passe lors de la création de votre compte sur {% data variables.product.product_name %}. Nous vous recommandons d’utiliser un gestionnaire de mots de passe pour générer un mot de passe aléatoire et unique. Pour plus d’informations, consultez « [Création d’un mot de passe fort](/github/authenticating-to-github/creating-a-strong-password) ».{% ifversion fpt or ghec %}
  - Si vous n’avez pas activé 2FA, {% data variables.product.product_name %} demande une vérification supplémentaire lors de votre première connexion avec un appareil non reconnu, tel qu’un nouveau profil de navigateur, un navigateur dans lequel les cookies ont été supprimés ou un nouvel ordinateur.

   Après avoir indiqué votre nom d’utilisateur et votre mot de passe, vous êtes invité à fournir un code de vérification que nous vous enverrons par e-mail. Si vous avez installé l’application {% data variables.product.prodname_mobile %}, vous recevrez une notification. Pour plus d’informations, consultez « [{% data variables.product.prodname_mobile %}](/get-started/using-github/github-mobile) ».{% endif %}
- **Authentification à 2 facteurs (TFA)** (recommandée)
    - Si vous activez 2FA, après avoir correctement entré votre nom d’utilisateur et votre mot de passe, nous vous inviterons également à fournir un code généré par une application de mot de passe à temps unique (TOTP) sur votre appareil mobile{% ifversion fpt or ghec %} ou envoyé sous forme de message texte (SMS){% endif %}. Pour plus d’informations, consultez « [Accès à {% data variables.product.prodname_dotcom %} avec l’authentification à 2 facteurs](/github/authenticating-to-github/accessing-github-using-two-factor-authentication#providing-a-2fa-code-when-signing-in-to-the-website) ».
    - En plus de l’authentification avec une application TOTP{% ifversion fpt or ghec %} ou un message texte{% endif %}, vous pouvez ajouter une autre méthode d’authentification avec {% ifversion fpt or ghec %}{% data variables.product.prodname_mobile %} ou {% endif %} une clé de sécurité à l’aide de WebAuthn. Pour plus d’informations, consultez {% ifversion fpt or ghec %}« [Configuration de l’authentification à 2 facteurs avec {% data variables.product.prodname_mobile %}](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication#configuring-two-factor-authentication-using-github-mobile) » et {% endif %}« [Configuration de l’authentification à 2 facteurs avec une clé de sécurité](/github/authenticating-to-github/configuring-two-factor-authentication#configuring-two-factor-authentication-using-a-security-key) ».{% ifversion ghes %}
- **Authentification externe**
  - Votre administrateur de site peut configurer {% data variables.product.product_location %} de manière à utiliser l’authentification externe plutôt qu’un nom d’utilisateur et un mot de passe. Pour plus d’informations, consultez « [Méthodes d’authentification externe](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise#external-authentication) ».{% endif %}{% ifversion fpt or ghec %}
- **Authentification unique SAML**
  - Avant d’accéder aux ressources appartenant à un compte d’organisation ou d’entreprise utilisant l’authentification unique SAML, vous serez peut-être amené à vous authentifier via un fournisseur d’identité. Pour plus d’informations, consultez « [À propos de l’authentification avec l’authentification unique SAML](/authentication/authenticating-with-saml-single-sign-on/about-authentication-with-saml-single-sign-on){% ifversion fpt %} » dans la documentation {% data variables.product.prodname_ghe_cloud %}.{% else %}."{% endif %}{% endif %}

{% endif %}

## Authentification avec {% data variables.product.prodname_desktop %}
Vous pouvez vous authentifier avec {% data variables.product.prodname_desktop %} à l’aide de votre navigateur. Pour plus d’informations, consultez « [Authentification auprès de {% data variables.product.prodname_dotcom %}](/desktop/getting-started-with-github-desktop/authenticating-to-github) ».

## Authentification avec l’API

Vous pouvez vous authentifier avec l’API de différentes façons.

- **Jetons d’accès personnels**
    - Dans certaines situations, par exemple pour des tests, vous pouvez utiliser un jeton d’accès personnel pour accéder à l’API. L’utilisation d’un jeton d’accès personnel vous permet de révoquer l’accès à tout moment. Pour plus d’informations, consultez « [Création d’un jeton d’accès personnel](/github/authenticating-to-github/creating-a-personal-access-token) ».
- **Flux d’application web**
    - Pour les applications OAuth en production, vous devez vous authentifier à l’aide du flux d’application web. Pour plus d’informations, consultez « [Autorisation des applications OAuth](/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow) ».
- **Applications GitHub**
    - Pour les applications GitHub en production, vous devez vous authentifier pour le compte de l’installation de l’application. Pour plus d’informations, consultez « [Authentification avec des {% data variables.product.prodname_github_apps %}](/apps/building-github-apps/authenticating-with-github-apps/) ».

## Authentification avec la ligne de commande

Vous pouvez accéder aux dépôts sur {% data variables.product.product_name %} à partir de la ligne de commande de deux façons, HTTPS et SSH, chacune ayant sa propre méthode d’authentification. La méthode d’authentification diffère selon que vous choisissez une URL distante SSH ou HTTPS quand vous clonez le dépôt. Pour plus d’informations sur la façon d’accéder, consultez « [À propos des dépôts distants](/github/getting-started-with-github/about-remote-repositories) ».

### HTTPS

Vous pouvez utiliser tous les dépôts sur {% data variables.product.product_name %} sur HTTPS, même si vous êtes derrière un pare-feu ou un proxy.

Si vous vous authentifiez avec {% data variables.product.prodname_cli %}, vous pouvez vous authentifier avec un jeton d’accès personnel ou par le biais du navigateur web. Pour plus d’informations sur l’authentification avec {% data variables.product.prodname_cli %}, consultez [`gh auth login`](https://cli.github.com/manual/gh_auth_login).

Si vous vous authentifiez sans {% data variables.product.prodname_cli %}, vous devez vous authentifier avec un jeton d’accès personnel. {% data reusables.user-settings.password-authentication-deprecation %} Chaque fois que vous utilisez Git pour vous authentifier auprès de {% data variables.product.product_name %}, vous êtes invité à entrer vos informations d’identification pour vous authentifier auprès de {% data variables.product.product_name %}, sauf si vous les mettez en cache avec un [gestionnaire d’informations d’identification](/github/getting-started-with-github/caching-your-github-credentials-in-git).

### SSH

Vous pouvez utiliser tous les dépôts sur {% data variables.product.product_name %} sur SSH, bien que les pare-feux et proxys puissent refuser les connexions SSH.

Si vous vous authentifiez avec {% data variables.product.prodname_cli %}, l’interface de ligne de commande trouve des clés publiques SSH sur votre ordinateur et vous invite à en sélectionner une à charger. Si {% data variables.product.prodname_cli %} ne trouve pas de clé publique SSH à charger, il peut générer une nouvelle paire de clés publique-privée SSH et charger la clé publique sur votre compte sur {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}. Ensuite, vous pouvez vous authentifier avec un jeton d’accès personnel ou par le biais du navigateur web. Pour plus d’informations sur l’authentification avec {% data variables.product.prodname_cli %}, consultez [`gh auth login`](https://cli.github.com/manual/gh_auth_login).

Si vous vous authentifiez sans {% data variables.product.prodname_cli %}, vous devez générer une nouvelle paire de clés publique-privée SSH sur votre ordinateur local et ajouter la clé publique à votre compte sur {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}. Pour plus d’informations, consultez « [Génération d’une nouvelle clé SSH et ajout de celle-ci à ssh-agent](/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) ». Chaque fois que vous utilisez Git pour vous authentifier auprès de {% data variables.product.product_name %}, vous êtes invité à entrer votre phrase secrète de clé SSH, sauf si vous avez [stocké la clé](/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#adding-your-ssh-key-to-the-ssh-agent).

{% ifversion fpt or ghec %}
### Autorisation de l’authentification unique SAML

Pour utiliser un jeton d’accès personnel ou une clé SSH afin d’accéder aux ressources appartenant à une organisation qui utilise l’authentification unique SAML, vous devez également autoriser le jeton personnel ou la clé SSH. Pour plus d’informations, consultez « [Autorisation d’un jeton d’accès personnel à utiliser avec l’authentification unique SAML](/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on) » ou « [Autorisation d’une clé SSH à utiliser avec l’authentification unique SAML](/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on/authorizing-an-ssh-key-for-use-with-saml-single-sign-on){% ifversion fpt %} » dans la documentation {% data variables.product.prodname_ghe_cloud %}.{% else %} ».{% endif %}{% endif %}

## Formats de jeton de {% data variables.product.company_short %}

{% data variables.product.company_short %} émet des jetons avec un préfixe indiquant le type de jeton.

| Type de jeton | Préfixe | Plus d’informations |
| :- | :- | :- |
| Jeton d’accès personnel | `ghp_` | « [Création d’un jeton d’accès personnel](/github/authenticating-to-github/creating-a-personal-access-token) » |
| Jeton d’accès OAuth | `gho_` | « [Autorisation des {% data variables.product.prodname_oauth_apps %}](/developers/apps/authorizing-oauth-apps) » |
| Jeton d’utilisateur à serveur pour une {% data variables.product.prodname_github_app %} | `ghu_` | « [Identification et autorisation des utilisateurs pour des {% data variables.product.prodname_github_apps %}](/developers/apps/identifying-and-authorizing-users-for-github-apps) » |
| Jeton de serveur à serveur pour une {% data variables.product.prodname_github_app %} | `ghs_` | « [Authentification avec des {% data variables.product.prodname_github_apps %}](/developers/apps/authenticating-with-github-apps#authenticating-as-an-installation) » |
| Jeton d’actualisation pour une {% data variables.product.prodname_github_app %} | `ghr_` | « [Actualisation de jetons d’accès d’utilisateur à serveur](/developers/apps/refreshing-user-to-server-access-tokens) » |

