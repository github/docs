---
title: Autorisation des applications OAuth
intro: '{% data reusables.shortdesc.authorizing_oauth_apps %}'
redirect_from:
  - /apps/building-integrations/setting-up-and-registering-oauth-apps/about-authorization-options-for-oauth-apps
  - /apps/building-integrations/setting-up-and-registering-oauth-apps/directing-users-to-review-their-access
  - /apps/building-integrations/setting-up-and-registering-oauth-apps/creating-multiple-tokens-for-oauth-apps
  - /v3/oauth
  - /apps/building-oauth-apps/authorization-options-for-oauth-apps
  - /apps/building-oauth-apps/authorizing-oauth-apps
  - /developers/apps/authorizing-oauth-apps
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - OAuth Apps
ms.openlocfilehash: d35b65add4259df72d9ae8b179829a148abd7174
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106708'
---
L’implémentation d’OAuth de {% data variables.product.product_name %} prend en charge les types d’autorisation standard suivants : l’[autorisation via un code](https://tools.ietf.org/html/rfc6749#section-4.1) et l’[autorisation d’appareil](https://tools.ietf.org/html/rfc8628) OAuth 2.0 destinée aux applications qui n’ont pas accès à un navigateur web.

Si vous souhaitez ignorer l’autorisation de votre application de manière standard, par exemple durant le test de votre application, vous pouvez utiliser le [flux d’application non web](#non-web-application-flow).

Pour autoriser votre application OAuth, déterminez le flux d’autorisation qui correspond le mieux à votre application.

- [flux d’application web](#web-application-flow) : permet d’accorder des autorisations aux utilisateurs pour les applications OAuth standard qui s’exécutent dans le navigateur. (Le [type d’autorisation implicite](https://tools.ietf.org/html/rfc6749#section-4.2) n’est pas pris en charge.)
- [flux d’appareil](#device-flow) : utilisé pour les applications sans périphérique de contrôle, par exemple les outils CLI.

## Flux d’application web

{% note %}

**Remarque :** Si vous créez une application GitHub, vous pouvez toujours utiliser le flux d’application web OAuth. Toutefois, la configuration présente certaines différences importantes. Pour plus d’informations, consultez « [Identification et autorisation des utilisateurs pour les applications GitHub](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/) ».

{% endnote %}

Le flux d’application web permettant d’autoriser les utilisateurs pour votre application est le suivant :

1. Les utilisateurs sont redirigés pour fournir leur identité GitHub
2. Les utilisateurs sont redirigés vers votre site par GitHub
3. Votre application accède à l’API avec le jeton d’accès de l’utilisateur

### 1. Demander l’identité GitHub d’un utilisateur

    GET {% data variables.product.oauth_host_code %}/login/oauth/authorize

Quand votre application GitHub spécifie un paramètre `login`, elle invite les utilisateurs à indiquer un compte spécifique qui leur permettra de se connecter et d’autoriser votre application.

#### Paramètres

Nom | Type | Description
-----|------|--------------
`client_id`|`string` | **Requis**. ID client que vous avez reçu de GitHub quand vous vous êtes {% ifversion fpt or ghec %}[inscrit](https://github.com/settings/applications/new){% else %}inscrit{% endif %}.
`redirect_uri`|`string` | URL de votre application où les utilisateurs sont redirigés après l’autorisation. Consultez les détails ci-dessous sur les [URL de redirection](#redirect-urls).
`login` | `string` | Suggère un compte spécifique à utiliser pour la connexion et l’autorisation de l’application.
`scope`|`string` | Liste d’[étendues](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/) délimitées par des espaces. En l’absence d’indication, la valeur par défaut de `scope` est une liste vide, si les utilisateurs n’ont autorisé aucune étendue pour l’application. Quand les utilisateurs disposent d’étendues d’autorisation pour l’application, ils ne voient pas s’afficher la page d’autorisation OAuth comportant la liste des étendues. À la place, cette étape du flux s’effectue automatiquement avec l’ensemble des étendues que l’utilisateur a autorisées pour l’application. Par exemple, si un utilisateur a déjà effectué le flux web à deux reprises et s’il a autorisé un jeton avec l’étendue `user` ainsi qu’un autre jeton avec l’étendue `repo`, un troisième flux web qui ne fournit pas de `scope` reçoit un jeton avec l’étendue `user` et l’étendue `repo`.
`state` | `string` | {% data reusables.apps.state_description %}
`allow_signup`|`string` | Indique si les utilisateurs non authentifiés se voient offrir ou non la possibilité de s’inscrire à GitHub durant le flux OAuth. Par défaut, il s’agit de `true`. Utilisez `false` quand une stratégie interdit les inscriptions.

### 2. Les utilisateurs sont redirigés vers votre site par GitHub

Si l’utilisateur accepte votre requête, {% data variables.product.product_name %} est redirigé vers votre site avec un `code` temporaire dans un paramètre de code ainsi que l’état que vous avez fourni à l’étape précédente dans un paramètre `state`. Le code temporaire expire après 10 minutes. Si les états ne correspondent pas, un tiers créé la requête, et vous devez abandonner le processus.

Échangez ce `code` contre un jeton d’accès :

    POST {% data variables.product.oauth_host_code %}/login/oauth/access_token

#### Paramètres

Nom | Type | Description
-----|------|--------------
`client_id` | `string` | **Obligatoire.** ID client que vous avez reçu de {% data variables.product.product_name %} pour votre {% data variables.product.prodname_oauth_app %}.
`client_secret` | `string` | **Obligatoire.** Secret client que vous avez reçu de {% data variables.product.product_name %} pour votre {% data variables.product.prodname_oauth_app %}.
`code` | `string` | **Obligatoire.** Code que vous avez reçu en réponse à l’étape 1.
`redirect_uri` | `string` | URL de votre application où les utilisateurs sont redirigés après l’autorisation.

#### response

Par défaut, la réponse prend la forme suivante :

```
access_token=gho_16C7e42F292c6912E7710c838347Ae178B4a&scope=repo%2Cgist&token_type=bearer
```

{% data reusables.apps.oauth-auth-vary-response %}

```json
Accept: application/json
{
  "access_token":"gho_16C7e42F292c6912E7710c838347Ae178B4a",
  "scope":"repo,gist",
  "token_type":"bearer"
}
```

```xml
Accept: application/xml
<OAuth>
  <token_type>bearer</token_type>
  <scope>repo,gist</scope>
  <access_token>gho_16C7e42F292c6912E7710c838347Ae178B4a</access_token>
</OAuth>
```

### 3. Utiliser le jeton d’accès pour accéder à l’API

Le jeton d’accès vous permet d’envoyer des requêtes à l’API au nom d’un utilisateur.

    Authorization: Bearer OAUTH-TOKEN
    GET {% data variables.product.api_url_code %}/user

Par exemple, avec curl, vous pouvez définir l’en-tête d’autorisation comme ceci :

```shell
curl -H "Authorization: Bearer OAUTH-TOKEN" {% data variables.product.api_url_pre %}/user
```

## Flux d’appareil

{% note %}

**Remarque :** Le flux d’appareil est en version bêta publique et est susceptible de changer.

{% endnote %}

Le flux d’appareil vous permet d’autoriser des utilisateurs pour une application sans périphérique de contrôle, par exemple un outil CLI ou un gestionnaire d’informations d’identification Git.

{% ifversion device-flow-is-opt-in %}

Avant de pouvoir utiliser le flux d’appareil pour autoriser et identifier des utilisateurs, vous devez d’abord l’activer dans les paramètres de votre application. Pour plus d’informations sur l’activation du flux d’appareil dans votre application, consultez « [Modification d’une application OAuth](/developers/apps/managing-oauth-apps/modifying-an-oauth-app) » pour les applications OAuth, et « [Modification d’une application GitHub](/developers/apps/managing-github-apps/modifying-a-github-app) » pour les applications GitHub.

{% endif %}

### Vue d’ensemble du flux d’appareil

1. Votre application demande les codes de vérification d’appareil et d’utilisateur, puis obtient l’URL d’autorisation où l’utilisateur doit entrer le code de vérification d’utilisateur.
2. L’application invite l’utilisateur à entrer un code de vérification d’utilisateur dans {% data variables.product.device_authorization_url %}.
3.  L’application interroge l’état de l’authentification de l’utilisateur. Une fois que l’utilisateur a autorisé l’appareil, l’application peut effectuer des appels d’API avec un nouveau jeton d’accès.

### Étape 1 : L’application demande les codes de vérification d’appareil et d’utilisateur à GitHub

    POST {% data variables.product.oauth_host_code %}/login/device/code

Votre application doit demander un code de vérification d’utilisateur et une URL de vérification. Tous deux permettront à l’application d’inviter l’utilisateur à s’authentifier à l’étape suivante. Cette requête retourne également un code de vérification d’appareil que l’application doit utiliser pour recevoir un jeton d’accès et vérifier l’état de l’authentification de l’utilisateur.

#### Paramètres d’entrée

Nom | Type | Description
-----|------|--------------
`client_id` | `string` | **Obligatoire.** ID client que vous avez reçu de {% data variables.product.product_name %} pour votre application.
`scope` | `string` | Étendue à laquelle votre application demande l’accès.

#### response

Par défaut, la réponse prend la forme suivante :

```
device_code=3584d83530557fdd1f46af8289938c8ef79f9dc5&expires_in=900&interval=5&user_code=WDJB-MJHT&verification_uri=https%3A%2F%{% data variables.product.product_url %}%2Flogin%2Fdevice
```

{% data reusables.apps.oauth-auth-vary-response %}

```json
Accept: application/json
{
  "device_code": "3584d83530557fdd1f46af8289938c8ef79f9dc5",
  "user_code": "WDJB-MJHT",
  "verification_uri": "{% data variables.product.oauth_host_code %}/login/device",
  "expires_in": 900,
  "interval": 5
}
```

```xml
Accept: application/xml
<OAuth>
  <device_code>3584d83530557fdd1f46af8289938c8ef79f9dc5</device_code>
  <user_code>WDJB-MJHT</user_code>
  <verification_uri>{% data variables.product.oauth_host_code %}/login/device</verification_uri>
  <expires_in>900</expires_in>
  <interval>5</interval>
</OAuth>
```

#### Paramètres de réponse

Nom | Type | Description
-----|------|--------------
`device_code` | `string` | Le code de vérification d’appareil comporte 40 caractères et sert à vérifier l’appareil.
`user_code` | `string` | Le code de vérification d’utilisateur s’affiche sur l’appareil pour permettre à l’utilisateur d’entrer ce code dans un navigateur. Il s’agit d’un code qui comporte 8 caractères avec un trait d’union au milieu.
`verification_uri` | `string` | URL de vérification où les utilisateurs doivent entrer le `user_code` : {% data variables.product.device_authorization_url %}.
`expires_in` | `integer`| Nombre de secondes avant l’expiration de `device_code` et `user_code`. La valeur par défaut est égale à 900 secondes (15 minutes).
`interval` | `integer` | Nombre minimal de secondes qui doivent s’écouler avant que vous ne puissiez effectuer une nouvelle demande de jeton d’accès (`POST {% data variables.product.oauth_host_code %}/login/oauth/access_token`) pour autoriser l’appareil. Par exemple, si l’intervalle est égal à 5, vous ne pouvez pas effectuer de nouvelle requête avant 5 secondes. Si vous effectuez plusieurs requêtes en 5 secondes, vous atteignez la limite de débit et recevez une erreur `slow_down`.

### Étape 2 : Inviter l’utilisateur à entrer le code utilisateur dans un navigateur

Votre appareil affiche le code de vérification d’utilisateur et invite l’utilisateur à entrer ce code dans {% data variables.product.device_authorization_url %}.

  ![Champ permettant d’entrer le code de vérification de l’utilisateur affiché sur votre appareil](/assets/images/github-apps/device_authorization_page_for_user_code.png)

### Étape 3 : L’application interroge GitHub pour vérifier si l’utilisateur a autorisé l’appareil

    POST {% data variables.product.oauth_host_code %}/login/oauth/access_token

Votre application effectue des demandes d’autorisation d’appareil qui interrogent `POST {% data variables.product.oauth_host_code %}/login/oauth/access_token`, jusqu’à ce que les codes de vérification d’appareil et d’utilisateur expirent, ou jusqu’à ce que l’utilisateur parvienne à autoriser l’application avec un code utilisateur valide. L’application doit utiliser l’interrogation minimale `interval` récupérée à l’étape 1 pour éviter les erreurs de limite de débit. Pour plus d’informations, consultez « [Limites de débit pour le flux d’appareil](#rate-limits-for-the-device-flow) ».

L’utilisateur doit entrer un code valide dans un délai de 15 minutes (ou 900 secondes). Après 15 minutes, vous devez demander un nouveau code d’autorisation d’appareil avec `POST {% data variables.product.oauth_host_code %}/login/device/code`.

Une fois que l’utilisateur a effectué l’autorisation, l’application reçoit un jeton d’accès qui permet d’envoyer des requêtes à l’API au nom d’un utilisateur.

#### Paramètres d'entrée

Nom | Type | Description
-----|------|--------------
`client_id` | `string` | **Obligatoire.** ID client que vous avez reçu de {% data variables.product.product_name %} pour votre {% data variables.product.prodname_oauth_app %}.
`device_code` | `string` | **Obligatoire.** Code de vérification d’appareil que vous avez reçu à la suite de la requête `POST {% data variables.product.oauth_host_code %}/login/device/code`.
`grant_type` | `string` | **Obligatoire.** Le type d’autorisation doit être `urn:ietf:params:oauth:grant-type:device_code`.

#### response

Par défaut, la réponse prend la forme suivante :

```
access_token=gho_16C7e42F292c6912E7710c838347Ae178B4a&token_type=bearer&scope=repo%2Cgist
```

{% data reusables.apps.oauth-auth-vary-response %}

```json
Accept: application/json
{
 "access_token": "gho_16C7e42F292c6912E7710c838347Ae178B4a",
  "token_type": "bearer",
  "scope": "repo,gist"
}
```

```xml
Accept: application/xml
<OAuth>
  <access_token>gho_16C7e42F292c6912E7710c838347Ae178B4a</access_token>
  <token_type>bearer</token_type>
  <scope>gist,repo</scope>
</OAuth>
```

### Limites de débit pour le flux d’appareil

Quand un utilisateur envoie le code de vérification dans le navigateur, le débit est limité à 50 envois par heure et par application.

Si vous effectuez plusieurs demandes de jeton d’accès (`POST {% data variables.product.oauth_host_code %}/login/oauth/access_token`) sans respecter le délai d’exécution minimal nécessaire entre les demandes (ou `interval`), vous atteignez la limite de débit et recevez une réponse d’erreur `slow_down`. La réponse d’erreur `slow_down` ajoute 5 secondes au dernier `interval`. Pour plus d’informations, consultez les [codes d’erreurs du flux d’appareil](#errors-for-the-device-flow).

### Codes d’erreur du flux d’appareil

| Code d'erreur | Description |
|----|----|
| `authorization_pending`| Cette erreur se produit quand la demande d’autorisation est en attente et que l’utilisateur n’a pas encore entré le code utilisateur. L’application doit continuer à interroger la requête `POST {% data variables.product.oauth_host_code %}/login/oauth/access_token` sans dépasser la valeur de [`interval`](#response-parameters), ce qui nécessite un nombre minimal de secondes entre chaque requête. |
| `slow_down` | Quand vous recevez l’erreur `slow_down`, 5 secondes supplémentaires sont ajoutées au `interval` ou au délai d’exécution minimal nécessaire entre vos requêtes à l’aide de `POST {% data variables.product.oauth_host_code %}/login/oauth/access_token`. Par exemple, si l’intervalle de démarrage nécessite au moins 5 secondes entre les requêtes et si vous obtenez une réponse d’erreur `slow_down`, vous devez attendre au moins 10 secondes avant d’effectuer une nouvelle requête pour un jeton d’accès OAuth. La réponse d’erreur inclut le nouveau `interval` à utiliser.
| `expired_token` | Si le code d’appareil a expiré, l’erreur `token_expired` s’affiche. Vous devez effectuer une nouvelle requête pour l’obtention d’un code d’appareil.
| `unsupported_grant_type` | Le type d’autorisation doit être `urn:ietf:params:oauth:grant-type:device_code` et doit être inclus en tant que paramètre d’entrée quand vous interrogez la demande de jeton OAuth `POST {% data variables.product.oauth_host_code %}/login/oauth/access_token`.
| `incorrect_client_credentials` | Pour le flux d’appareil, vous devez passer l’ID client de votre application, que vous trouverez dans la page des paramètres de l’application. Le `client_secret` n’est pas nécessaire pour le flux d’appareil.
| `incorrect_device_code` | Le device_code fourni n’est pas valide.
| `access_denied` | Quand un utilisateur clique sur Annuler pendant le processus d’autorisation, vous recevez une erreur `access_denied`, et l’utilisateur ne peut plus réutiliser le code de vérification.{% ifversion device-flow-is-opt-in %}
| `device_flow_disabled` | Le flux d’appareil n’a pas été activé dans les paramètres de l’application. Pour plus d’informations, consultez « [Flux d’appareil](#device-flow) ».{% endif %}

Pour plus d’informations, consultez « [Type d’autorisation d’appareil OAuth 2.0](https://tools.ietf.org/html/rfc8628#section-3.5) ».

## Flux d’application non-web

L’authentification non-web est disponible pour des situations limitées, par exemple les tests. Si nécessaire, vous pouvez utiliser [l’authentification de base](/rest/overview/other-authentication-methods#basic-authentication) pour créer un {% data variables.product.pat_generic %} en utilisant la [page de paramètres des {% data variables.product.pat_generic %}s](/articles/creating-an-access-token-for-command-line-use). Cette technique permet à l’utilisateur de révoquer l’accès à tout moment.

{% ifversion fpt or ghes or ghec %} {% note %}

**Remarque :** Quand vous utilisez le flux d’application non-web pour créer un jeton OAuth2, veillez à bien comprendre le [fonctionnement de l’authentification à 2 facteurs](/rest/overview/other-authentication-methods#working-with-two-factor-authentication), si celle-ci est activée pour vous ou vos utilisateurs.

{% endnote %} {% endif %}

## URL de redirection

Le paramètre `redirect_uri` est facultatif. S’il est omis, GitHub redirige les utilisateurs vers l’URL de rappel configurée dans les paramètres d’application OAuth. S’il est fourni, l’hôte (à l’exclusion des sous-domaines) et le port de l’URL de redirection doivent correspondre exactement à l’URL de rappel. Le chemin de l’URL de redirection doit référencer un sous-répertoire de l’URL de rappel.

    CALLBACK: http://example.com/path

    GOOD: http://example.com/path
    GOOD: http://example.com/path/subdir/other
    GOOD: http://oauth.example.com/path
    GOOD: http://oauth.example.com/path/subdir/other
    BAD:  http://example.com/bar
    BAD:  http://example.com/
    BAD:  http://example.com:8080/path
    BAD:  http://oauth.example.com:8080/path
    BAD:  http://example.org

### URL de redirection de bouclage

Le paramètre facultatif `redirect_uri` peut également être utilisé pour les URL de bouclage. Si l’application spécifie une URL de bouclage et un port, une fois l’application autorisée, les utilisateurs sont redirigés vers l’URL et le port fournis. `redirect_uri` n’a pas besoin de correspondre au port spécifié dans l’URL de rappel pour l’application.

Pour l’URL de rappel `http://127.0.0.1/path`, vous pouvez utiliser ce `redirect_uri` :

```
http://127.0.0.1:1234/path
```

Notez qu’OAuth RFC [recommande de ne pas utiliser `localhost`](https://datatracker.ietf.org/doc/html/rfc8252#section-7.3), mais d’utiliser à la place le littéral de bouclage `127.0.0.1` ou l’adresse IPv6 `::1`.

## Création de plusieurs jetons pour les applications OAuth

Vous pouvez créer plusieurs jetons pour une combinaison utilisateur/application/étendue en réponse à des cas d’usage spécifiques.

Cela est utile si votre application OAuth prend en charge un workflow qui utilise GitHub pour la connexion et nécessite uniquement des informations utilisateur de base. Un autre workflow peut nécessiter l’accès aux dépôts privés d’un utilisateur. Avec plusieurs jetons, votre application OAuth peut effectuer le flux web pour chaque cas d’usage, en demandant uniquement les étendues nécessaires. Si un utilisateur se sert de votre application uniquement pour se connecter, il n’est jamais tenu d’octroyer à l’application OAuth l’accès à ses dépôts privés.

{% data reusables.apps.oauth-token-limit %}

{% data reusables.apps.deletes_ssh_keys %}

## Redirection des utilisateurs pour la vérification de leur accès

Vous pouvez créer un lien vers les informations d’autorisation d’une application OAuth pour que les utilisateurs puissent vérifier et révoquer leurs autorisations d’application.

Pour créer ce lien, vous avez besoin du `client_id` d’application OAuth que vous avez reçu de GitHub au moment de l’inscription de l’application.

```
{% data variables.product.oauth_host_code %}/settings/connections/applications/:client_id
```

{% tip %}

**Conseil** : Pour en savoir plus sur les ressources auxquelles un utilisateur a accès via votre application OAuth, consultez « [Découverte des ressources pour un utilisateur](/rest/guides/discovering-resources-for-a-user) ».

{% endtip %}

## Dépannage

* « [Résolution des problèmes de demande d’autorisation](/apps/managing-oauth-apps/troubleshooting-authorization-request-errors) »
* « [Résolution des problèmes de demande de jeton d’accès pour l’application OAuth](/apps/managing-oauth-apps/troubleshooting-oauth-app-access-token-request-errors) »
* « [Erreurs de flux d’appareils](#error-codes-for-the-device-flow) »
* « [Expiration et révocation des jetons](/github/authenticating-to-github/keeping-your-account-and-data-secure/token-expiration-and-revocation) »

## Pour aller plus loin

- « [À propos de l’authentification auprès de {% data variables.product.prodname_dotcom %}](/github/authenticating-to-github/about-authentication-to-github) »
