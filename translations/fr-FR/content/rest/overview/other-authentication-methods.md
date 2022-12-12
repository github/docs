---
title: Autres méthodes d’authentification
intro: Vous pouvez utiliser l’authentification de base pour les tests dans un environnement hors production.
redirect_from:
  - /v3/auth
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
shortTitle: Other authentication methods
ms.openlocfilehash: a979c5e688f6f6942a56c9cff55386bb72a92e57
ms.sourcegitcommit: f392aa98511e0889d96af2e4a56e67f8adfb025f
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/18/2022
ms.locfileid: '148172716'
---
{% ifversion fpt or ghes or ghec %} Bien que l’API fournisse plusieurs méthodes d’authentification, nous vous recommandons vivement d’utiliser [OAuth](/apps/building-integrations/setting-up-and-registering-oauth-apps/) pour les applications de production. Les autres méthodes fournies sont destinées à être utilisées pour des scripts ou des tests (c’est-à-dire des cas où une OAuth complète serait exagérée). Les applications tierces qui s’appuient sur {% data variables.product.product_name %} pour l’authentification ne doivent pas demander ou collecter d’informations d’identification {% data variables.product.product_name %}.
Au lieu de cela, elles doivent utiliser le [flux web OAuth](/apps/building-oauth-apps/authorizing-oauth-apps/).

{% endif %}

{% ifversion ghae %}

Pour l’authentification, nous vous recommandons d’utiliser des jetons [OAuth](/apps/building-integrations/setting-up-and-registering-oauth-apps/), comme un {% data variables.product.pat_generic %} via le [flux web OAuth](/apps/building-oauth-apps/authorizing-oauth-apps/).

{% endif %}

## Authentification de base

L’API prend en charge l’authentification de base telle que définie dans la norme [RFC2617](http://www.ietf.org/rfc/rfc2617.txt) à quelques différences près.
La principale différence est que la norme RFC exige que les demandes non authentifiées reçoivent des réponses `401 Unauthorized`. Dans de nombreux emplacement, cela divulguerait l’existence de données utilisateur. Au lieu de cela, l’API {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} envoie la réponse `404 Not Found`.
Cela peut occasionner des problèmes pour les bibliothèques HTTP qui supposent une réponse `401 Unauthorized`. La solution consiste à créer manuellement l’en-tête `Authorization`.

### Via {% data variables.product.pat_generic %}

Nous vous recommandons d’utiliser les {% ifversion pat-v2%}{% data variables.product.pat_v2 %}{% else %}{% data variables.product.pat_generic %}{% endif %} pour vous authentifier auprès de l’API GitHub.

```shell
$ curl -u USERNAME:TOKEN {% data variables.product.api_url_pre %}/user
```

Cette approche est utile si vos outils prennent uniquement en charge une authentification de base, mais que vous souhaitez tirer parti des fonctionnalités de sécurité de {% data variables.product.pat_generic %}.

{% ifversion not ghae %}
### Via un nom d’utilisateur et un mot de passe

{% ifversion fpt or ghec %} {% note %}

**Remarque :** {% data variables.product.prodname_dotcom %} a cessé l’authentification par mot de passe auprès de l’API depuis le 13 novembre 2020 pour tous les comptes {% data variables.product.prodname_dotcom_the_website %}, y compris ceux sur un plan {% data variables.product.prodname_free_user %}, {% data variables.product.prodname_pro %}, {% data variables.product.prodname_team %} ou {% data variables.product.prodname_ghe_cloud %}. Vous devez maintenant vous authentifier auprès de l’API {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} avec un jeton d’API, comme un jeton d’accès OAuth, un jeton d’accès d’installation d’application GitHub ou {% data variables.product.pat_generic %} selon ce que vous devez faire avec le jeton. Pour plus d’informations, consultez « [Résolution des problèmes](/rest/overview/troubleshooting#basic-authentication-errors) ».
 
{% endnote %} {% else %}

Pour utiliser l’authentification de base avec l’API {% data variables.product.product_name %}, envoyez simplement le nom d’utilisateur et le mot de passe associés au compte.

Par exemple, si vous accédez à l’API via [cURL][curl], la commande suivante vous authentifie si vous remplacez `<username>` par votre nom d’utilisateur {% data variables.product.product_name %}.
(cURL vous invite à entrer le mot de passe.)

```shell
$ curl -u USERNAME {% data variables.product.api_url_pre %}/user
```
Si vous avec un authentification à deux facteurs activée, veillez à comprendre comment [utiliser une authentification à deux facteurs](/rest/overview/other-authentication-methods#working-with-two-factor-authentication).
{% endif %} {% endif %}

{% ifversion fpt or ghec %}
### Authentification pour SSO SAML

{% note %}

**Remarque :** les intégrations et les applications OAuth qui génèrent des jetons pour le compte d’autres sont automatiquement autorisées.

{% endnote %}

{% note %}

**Remarque :** {% data reusables.getting-started.bearer-vs-token %}

{% endnote %}

Si vous utilisez l’API pour accéder à une organisation qui applique l’authentification unique [SSO SAML][saml-sso], vous devez créer un {% data variables.product.pat_generic %} et [autoriser le jeton][allowlist] pour cette organisation. Visitez l’URL spécifiée dans `X-GitHub-SSO` afin d’autoriser le jeton pour l’organisation.

```shell
$ curl -v -H "Authorization: Bearer TOKEN" {% data variables.product.api_url_pre %}/repos/octodocs-test/test

> X-GitHub-SSO: required; url=https://github.com/orgs/octodocs-test/sso?authorization_request=AZSCKtL4U8yX1H3sCQIVnVgmjmon5fWxks5YrqhJgah0b2tlbl9pZM4EuMz4
{
  "message": "Resource protected by organization SAML enforcement. You must grant your personal token access to this organization.",
  "documentation_url": "https://docs.github.com"
}
```

Lors d’une demande de données susceptibles de provenir de plusieurs organisations (par exemple [demande d’une liste de problèmes créés par l’utilisateur][user-issues]), l’en-tête `X-GitHub-SSO` indique quelles organisations exigent que vous autorisiez votre {% data variables.product.pat_generic %} :

```shell
$ curl -v -H "Authorization: Bearer TOKEN" {% data variables.product.api_url_pre %}/user/issues

> X-GitHub-SSO: partial-results; organizations=21955855,20582480
```

La valeur `organizations` est une liste d’ID d’organisation séparés par des virgules pour les organisations exigeant une autorisation de votre {% data variables.product.pat_generic %}.
{% endif %}

{% ifversion fpt or ghes or ghec %}
## Utilisation d’une authentification à deux facteurs

Quand l’authentification à deux facteurs est activée, [l’authentification de base](#basic-authentication) pour _la plupart_ des points de terminaison dans l’API REST nécessite l’utilisation d’un {% data variables.product.pat_generic %}{% ifversion ghes %} ou d’un jeton OAuth au lieu de votre nom d’utilisateur et de votre mot de passe{% endif %}.

Vous pouvez générer un nouveau {% data variables.product.pat_generic %} {% ifversion fpt or ghec %}à l’aide des [{% data variables.product.product_name %} developer settings](https://github.com/settings/tokens/new){% endif %}{% ifversion ghes %} ou avec le point de terminaison « [Créer une autorisation][/rest/reference/oauth-authorizations#create-a-new-authorization] » dans l’API d’autorisations OAuth pour générer un nouveau jeton {% endif %}. Pour plus d’informations, consultez « [Création d’un {% data variables.product.pat_generic %} pour la ligne de commande](/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line) ». Ensuite, vous utilisez ces jetons pour [vous authentifier à l’aide d’un jeton OAuth][oauth-auth] auprès de l’API {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}.{% ifversion ghes %} La seule fois où vous devez vous authentifier avec vos nom d’utilisateur et mot de passe est quand vous créez votre jeton OAuth ou utilisez l’API d’autorisations OAuth.{% endif %}

{% endif %}

{% ifversion ghes %}
### Utilisation de l’API d’autorisations OAuth avec une authentification à deux facteurs

Lorsque vous effectuez des appels à l’API d’autorisations OAuth, l’authentification de base exige que vous utilisiez un mot de passe à usage unique (OTP) et vos nom d’utilisateur et mot de passe au lieu de jetons. Lorsque vous tentez de vous authentifier auprès de l’API d’autorisations OAuth, le serveur répond avec un message `401 Unauthorized` et l’un de ces en-têtes pour vous informer que vous avez besoin d’un code d’authentification à deux facteurs :

`X-GitHub-OTP: required; SMS` ou `X-GitHub-OTP: required; app`.  

Cet en-tête vous indique comment votre compte reçoit ses codes d’authentification à deux facteurs. Selon la façon dont vous configurez votre compte, vous allez recevoir vos codes OTP via SMS, ou utiliser une application telle que Google Authenticator ou 1Password. Pour plus d’informations, consultez « [Configuration de l’authentification à 2 facteurs](/articles/configuring-two-factor-authentication) ». Passez le mot de passe à usage unique dans l’en-tête :

```shell
$ curl --request POST \
  --url https://api.github.com/authorizations \
  --header 'authorization: Basic PASSWORD' \
  --header 'content-type: application/json' \
  --header 'x-github-otp: OTP' \
  --data '{"scopes": ["public_repo"], "note": "test"}'
```
{% endif %}

[curl]: http://curl.haxx.se/
[oauth-auth]: /rest/overview/resources-in-the-rest-api#authentication
[personal-access-tokens]: /articles/creating-a-personal-access-token-for-the-command-line
[saml-sso]: /articles/about-identity-and-access-management-with-saml-single-sign-on
[saml-sso-tokens]: https://github.com/settings/tokens
[allowlist]: /github/authenticating-to-github/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on
[user-issues]: /rest/reference/issues#list-issues-assigned-to-the-authenticated-user
