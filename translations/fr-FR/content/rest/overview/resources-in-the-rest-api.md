---
title: Ressources disponibles dans l’API REST
intro: 'Découvrez comment parcourir les ressources fournies par l’API {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}.'
redirect_from:
  - /rest/initialize-the-repo
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
miniTocMaxHeadingLevel: 3
topics:
  - API
ms.openlocfilehash: c7928ce90b887d6fa3bd5342fc1633b3e30983f1
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192848'
---
{% ifversion api-date-versioning %}
## Version de l'API

Les ressources disponibles peuvent varier selon les versions de l’API REST. Vous devez utiliser l’en-tête `X-GitHub-Api-Version` pour spécifier une version d’API. Pour plus d’informations, consultez « [Versions d’API](/rest/overview/api-versions) ».

{% endif %}

## schéma

{% ifversion fpt or ghec %}Tout l’accès à l’API se fait par HTTPS et{% else %}L’API est accessible{% endif %} à partir de `{% data variables.product.api_url_code %}`.  Toutes les données sont envoyées et reçues au format JSON.

```shell
$ curl -I {% data variables.product.api_url_pre %}/users/octocat/orgs

> HTTP/2 200
> Server: nginx
> Date: Fri, 12 Oct 2012 23:33:14 GMT
> Content-Type: application/json; charset=utf-8
> ETag: "a00049ba79152d03380c34652f2cb612"
> X-GitHub-Media-Type: github.v3
> x-ratelimit-limit: 5000
> x-ratelimit-remaining: 4987
> x-ratelimit-reset: 1350085394{% ifversion ghes %}
> X-GitHub-Enterprise-Version: {{ currentVersion | remove: "enterprise-server@" }}.0{% elsif ghae %}
> X-GitHub-Enterprise-Version: GitHub AE{% endif %}
> Content-Length: 5
> Cache-Control: max-age=0, private, must-revalidate
> X-Content-Type-Options: nosniff
```

Les champs vides sont inclus avec la valeur `null` au lieu d’être omis.

Tous les horodatages sont retournés au format UTC ISO 8601 :

    YYYY-MM-DDTHH:MM:SSZ

Pour plus d’informations sur les fuseaux horaires dans les horodatages, consultez [cette section](#timezones).

### Représentations récapitulatives

Lorsque vous récupérez une liste de ressources, la réponse inclut un _sous-ensemble_ des attributs de cette ressource. Il s’agit de la représentation « récapitulative » de la ressource. (Certains attributs sont coûteux en calcul pour l’API.
Pour des raisons de performances, ils sont exclus de la représentation récapitulative.
Récupérez la représentation « détaillée » pour les obtenir.)

**Exemple :** Lorsque vous demandez la liste des référentiels, vous obtenez la représentation récapitulative de chaque référentiel. Ici, nous récupérons la liste des référentiels appartenant à l’organisation [octokit](https://github.com/octokit) :

    GET /orgs/octokit/repos

### Représentations détaillées

Lorsque vous récupérez une ressource individuelle, la réponse inclut généralement _tous_ les attributs de cette ressource. Il s’agit de la représentation « détaillée » de la ressource. (Notez que l’autorisation influe parfois sur le niveau de détail de la représentation.)

**Exemple :** Lorsque vous demandez un référentiel individuel, vous obtenez sa représentation détaillée. Ici, nous récupérons le référentiel [octokit/octokit.rb](https://github.com/octokit/octokit.rb) :

    GET /repos/octokit/octokit.rb

La documentation fournit un exemple de réponse pour chaque méthode d’API. L’exemple de réponse illustre tous les attributs retournés par cette méthode.

## Authentification

{% ifversion ghae %} Nous vous recommandons de vous authentifier auprès de l’API REST {% data variables.product.product_name %} en créant un jeton OAuth2 par le biais du [flux d’application web](/developers/apps/authorizing-oauth-apps#web-application-flow). {% else %} Il existe deux façons de s’authentifier par le biais de l’API REST {% data variables.product.product_name %}.{% endif %} Les demandes exigeant une authentification retournent `404 Not Found`, au lieu de `403 Forbidden`, dans certains endroits.  Cela permet d’éviter les fuites accidentelles de référentiels privés auprès d’utilisateurs non autorisés.

### Authentification de base

```shell
$ curl -u "username" {% data variables.product.api_url_pre %}
```

### Jeton OAuth2 (envoyé dans un en-tête)

```shell
$ curl -H "Authorization: Bearer OAUTH-TOKEN" {% data variables.product.api_url_pre %}
```

{% note %}

Remarque : GitHub recommande d’envoyer des jetons OAuth à l’aide de l’en-tête d’autorisation.

{% endnote %}

{% note %}

**Remarque :** {% data reusables.getting-started.bearer-vs-token %}

{% endnote %}

[En savoir plus sur OAuth2](/apps/building-oauth-apps/).  Notez que les jetons OAuth2 peuvent être obtenus à l’aide du [flux d’application web](/developers/apps/authorizing-oauth-apps#web-application-flow) pour les applications de production.

{% ifversion fpt or ghes or ghec %}
### Clé/secret OAuth2

{% data reusables.apps.deprecating_auth_with_query_parameters %}

```shell
curl -u my_client_id:my_client_secret '{% data variables.product.api_url_pre %}/user/repos'
```

L’utilisation de `client_id` et de `client_secret` ne permet _pas_ de vous authentifier en tant qu’utilisateur, mais seulement d’identifier votre application OAuth pour augmenter votre limite de débit. Les autorisations sont accordées uniquement aux utilisateurs, et non aux applications. Vous ne récupérerez que les données qu’un utilisateur non authentifié verrait. C’est pourquoi la clé et le secret OAuth2 doivent être utilisés exclusivement dans les scénarios de serveur à serveur. Ne communiquez pas la clé secrète client de votre application OAuth à vos utilisateurs.

{% ifversion ghes %} Vous ne pourrez pas vous authentifier à l’aide de votre clé OAuth2 et de votre secret en mode privé. Toute tentative d’authentification retournera `401 Unauthorized`. Pour plus d’informations, consultez « [Activation du mode privé](/admin/configuration/configuring-your-enterprise/enabling-private-mode) ».
{% endif %} {% endif %}

{% ifversion fpt or ghec %}

[En savoir plus sur la limitation de débit non authentifiée](#increasing-the-unauthenticated-rate-limit-for-oauth-apps).

{% endif %}

### Limite d’échecs de connexion

L’authentification avec des informations d’identification non valides retourne `401 Unauthorized` :

```shell
$ curl -I {% data variables.product.api_url_pre %} -u foo:bar
> HTTP/2 401

> {
>   "message": "Bad credentials",
>   "documentation_url": "{% data variables.product.doc_url_pre %}"
> }
```

En cas de détection de plusieurs demandes comportant des informations d’identification non valides dans un court délai, l’API rejette temporairement toutes les tentatives d’authentification de l’utilisateur (y compris celles qui contiennent des informations d’identification valides) avec `403 Forbidden` :

```shell
$ curl -i {% data variables.product.api_url_pre %} -u {% ifversion fpt or ghae or ghec %}
-u VALID_USERNAME:VALID_TOKEN {% endif %}{% ifversion ghes %}-u VALID_USERNAME:VALID_PASSWORD {% endif %}
> HTTP/2 403
> {
>   "message": "Maximum number of login attempts exceeded. Please try again later.",
>   "documentation_url": "{% data variables.product.doc_url_pre %}"
> }
```

## Paramètres

De nombreuses méthodes API prennent des paramètres facultatifs. Pour les demandes `GET`, tous les paramètres non spécifiés en tant que segment dans le chemin peuvent être transmis sous la forme d’un paramètre de chaîne de requête HTTP :

```shell
$ curl -i "{% data variables.product.api_url_pre %}/repos/vmg/redcarpet/issues?state=closed"
```

Dans cet exemple, les valeurs « vmg » et « redcarpet » sont fournies pour les paramètres `:owner` et `:repo` du chemin alors que `:state` est passé dans la chaîne de requête.

Pour les demandes `POST`, `PATCH`, `PUT` et `DELETE`, les paramètres non inclus dans l’URL doivent être codés en tant que JSON avec le Content-Type « application/json » :

```shell
$ curl -i -u username -d '{"scopes":["repo_deployment"]}' {% data variables.product.api_url_pre %}/authorizations
```

## Point de terminaison racine

Vous pouvez émettre une demande `GET` au point de terminaison racine pour obtenir toutes les catégories de points de terminaison prises en charge par l’API REST :

```shell
$ curl {% ifversion fpt or ghae or ghec %}
-u USERNAME:TOKEN {% endif %}{% ifversion ghes %}-u USERNAME:PASSWORD {% endif %}{% data variables.product.api_url_pre %}
```

## ID de nœud global GraphQL

Pour savoir comment trouver les `node_id` au moyen de l’API REST et les utiliser dans les opérations GraphQL, consultez le guide « [Utilisation des ID de nœud globaux](/graphql/guides/using-global-node-ids) ».

## Erreurs de client

Il existe trois types possibles d’erreurs clientes sur les appels d’API qui reçoivent des corps de demande :

1. L’envoi de JSON non valide entraîne une réponse `400 Bad Request`.

        HTTP/2 400
        Content-Length: 35

        {"message":"Problems parsing JSON"}

2. L’envoi du mauvais type de valeurs JSON entraîne une réponse `400 Bad
   Request`.

        HTTP/2 400
        Content-Length: 40

        {"message":"Body should be a JSON object"}

3. L’envoi de champs non valides entraîne une réponse `422 Unprocessable Entity`.

        HTTP/2 422
        Content-Length: 149

        {
          "message": "Validation Failed",
          "errors": [
            {
              "resource": "Issue",
              "field": "title",
              "code": "missing_field"
            }
          ]
        }

Tous les objets d’erreur possèdent des propriétés de ressource et de champ qui permettent au client d’identifier le problème.  Il existe également un code d’erreur indiquant ce qui est incorrect dans le champ.  Voici les codes d’erreur de validation possibles :

Nom du code d’erreur | Description
-----------|-----------|
`missing` | Une ressource n’existe pas.
`missing_field` | Un champ obligatoire sur une ressource n’a pas été défini.
`invalid` | La mise en forme d’un champ n’est pas valide.  Pour plus d’informations, consultez la documentation.
`already_exists` | Une autre ressource possède la même valeur que ce champ.  Cela peut se produire dans les ressources qui doivent disposer d’une clé unique (par exemple les noms d’étiquette).
`unprocessable` | Les entrées fournies ne sont pas valides.

Les ressources peuvent également envoyer des erreurs de validation personnalisées (où `code` a la valeur `custom`). Les erreurs personnalisées présentent toujours un champ `message` décrivant l’erreur. La plupart des erreurs incluent également un champ `documentation_url` pointant vers un contenu susceptible de vous aider à résoudre l’erreur.

## Redirections HTTP

L’API REST {% data variables.product.product_name %} utilise la redirection HTTP le cas échéant. Les clients doivent partir du principe que toute demande peut entraîner une redirection. La réception d’une redirection HTTP ne constitue *pas* une erreur ; les clients doivent suivre cette redirection. Les réponses de redirection comportent un champ d’en-tête `Location` qui contient l’URI de la ressource à laquelle le client doit répéter les demandes.

Code d’état | Description
-----------|-----------|
`301` | Redirection permanente. L’URI que vous avez utilisé pour effectuer la demande a été remplacé par celui spécifié dans le champ d’en-tête `Location`. Cette demande et toutes les suivantes qui seront envoyées à cette ressource doivent être dirigées vers le nouvel URI.
`302`, `307` | Redirection temporaire. La demande doit être répétée telle quelle dans l’URI spécifié dans le champ d’en-tête `Location`, mais les clients doivent continuer à utiliser l’URI d’origine pour les demandes futures.

D’autres codes d’état de redirection peuvent être utilisés conformément à la spécification HTTP 1.1.

## Verbes HTTP

Dans la mesure du possible, l’API REST {% data variables.product.product_name %} s’efforce d’utiliser les verbes HTTP appropriés pour chaque action. Notez que les verbes HTTP respectent la casse.

Verbe | Description
-----|-----------
`HEAD` | Peut être émis sur n’importe quelle ressource pour obtenir uniquement les informations d’en-tête HTTP.
`GET` | Utilisé pour récupérer des ressources.
`POST` | Utilisé pour créer des ressources.
`PATCH` | Utilisé pour mettre à jour des ressources avec des données JSON partielles. Par exemple, une ressource Issue comporte des attributs `title` et `body`. Une demande `PATCH` peut accepter un ou plusieurs attributs pour mettre à jour la ressource.
`PUT` | Utilisé pour remplacer des ressources ou des collections. Pour les demandes `PUT` dépourvues d’attribut `body`, veillez à définir l’en-tête `Content-Length` sur zéro.
`DELETE` |Utilisé pour supprimer des ressources.

## Hypermédia

Toutes les ressources peuvent comporter une ou plusieurs propriétés `*_url` liées à d’autres ressources.  Ces propriétés visent à fournir des URL explicites afin d’éviter aux clients d’API appropriés d’avoir à construire des URL eux-mêmes.  Il est vivement recommandé aux clients d’API de les utiliser.  Cela facilite les mises à niveau futures de l’API pour les développeurs.  Toutes les URL doivent représenter des modèles d’URI [RFC 6570][rfc] appropriés.

Vous pouvez ensuite développer ces modèles à l’aide de la gemme [uri_template][uri] ou d’un objet similaire :

    >> tmpl = URITemplate.new('/notifications{?since,all,participating}')
    >> tmpl.expand
    => "/notifications"

    >> tmpl.expand all: 1
    => "/notifications?all=1"

    >> tmpl.expand all: 1, participating: 1
    => "/notifications?all=1&participating=1"

[rfc]: https://datatracker.ietf.org/doc/html/rfc6570
[uri]: https://github.com/hannesg/uri_template

## Pagination

Lorsqu’une réponse de l’API REST inclut de nombreux résultats, {% data variables.product.company_short %} les pagine et en retourne une partie. Vous pouvez utiliser l’en-tête de lien de la réponse pour demander des pages de données supplémentaires. Si un point de terminaison prend en charge le paramètre de requête `per_page`, vous pouvez contrôler le nombre de résultats retournés sur une page. Pour plus d’informations sur la pagination, consultez « [Utilisation de la pagination dans l’API REST](/rest/guides/using-pagination-in-the-rest-api) ».

## Délais d'attente

Si {% data variables.product.prodname_dotcom %} prend plus de 10 secondes pour traiter une demande d’API, {% data variables.product.prodname_dotcom %} met fin à la demande et vous recevrez une réponse d’expiration du délai d’attente semblable à la suivante :

```json
{
    "message": "Server Error"
}
```

{% data variables.product.product_name %} se réserve le droit de modifier le délai d’expiration pour protéger la vitesse et la fiabilité de l’API.

## Limitation du débit

Les limites de débit varient selon les types de demandes d’API envoyés à {% data variables.location.product_location %}. 

En outre, l’API de recherche présente des limites dédiées. Pour plus d’informations, consultez « [Recherche](/rest/reference/search#rate-limit) » dans la documentation de l’API REST.

{% data reusables.enterprise.rate_limit %}

{% data reusables.rest-api.always-check-your-limit %}

### Demandes provenant de comptes personnels

Les demandes d’API directes que vous authentifiez avec un {% data variables.product.pat_generic %} sont des demandes d’utilisateur à serveur. Une application OAuth ou une application GitHub peut également effectuer une demande d’utilisateur à serveur en votre nom après avoir autorisé l’application. Pour plus d’informations, consultez « [Création d’un {% data variables.product.pat_generic %}](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) », « [Autorisation des applications OAuth](/authentication/keeping-your-account-and-data-secure/authorizing-oauth-apps) » et « [Autorisation des applications GitHub](/authentication/keeping-your-account-and-data-secure/authorizing-github-apps) ».

{% data variables.product.product_name %} associe toutes les demandes d’utilisateur à serveur à l’utilisateur authentifié. Dans le cas des applications OAuth et GitHub, il s’agit de l’utilisateur qui a autorisé l’application. Toutes les demandes d’utilisateur à serveur sont comptabilisées par rapport à la limite de débit de l’utilisateur authentifié.

{% data reusables.apps.user-to-server-rate-limits %}

{% ifversion fpt or ghec %}

{% data reusables.apps.user-to-server-rate-limits-ghec %}

{% ifversion fpt or ghec or ghes %}

Pour les demandes non authentifiées, la limite de débit autorise jusqu’à 60 demandes par heure. Les demandes non authentifiées sont associées à l’adresse IP d’origine, et non à la personne qui les effectue.

{% endif %}

{% endif %}

### Demandes provenant d’applications GitHub

Les demandes d’une application GitHub peuvent être des demandes d’utilisateur à serveur ou de serveur à serveur. Pour plus d’informations sur les limites de débit des applications GitHub, consultez « [Limites de débit des applications GitHub](/developers/apps/building-github-apps/rate-limits-for-github-apps) ». 

### Demandes provenant de GitHub Actions

Vous pouvez utiliser le jeton `GITHUB_TOKEN` intégré pour authentifier les demandes dans des flux de travail GitHub Actions. Pour plus d’informations, consultez « [Authentification automatique par jeton](/actions/security-guides/automatic-token-authentication) ».

Avec `GITHUB_TOKEN`, la limite de débit s’élève à 1 000 demandes par heure et par dépôt.{% ifversion fpt or ghec %} Pour les demandes adressées à des ressources appartenant à un compte d’entreprise sur {% data variables.location.product_location %}, la limite de débit de {% data variables.product.prodname_ghe_cloud %} s’applique, soit 15 000 demandes par heure et par dépôt.{% endif %}

### Vérification de l’état de la limite de débit

L’API Limite de débit et les en-têtes HTTP d’une réponse font autorité concernant le nombre actuel d’appels d’API disponibles à tout moment pour vous ou votre application.

#### API Limite de débit

Vous pouvez utiliser l’API Limite de débit pour vérifier l’état de votre limite de débit sans avoir à atteindre la limite actuelle. Pour plus d’informations, consultez « [Limite de débit](/rest/reference/rate-limit) ».

#### En-têtes HTTP de limite de débit

Les en-têtes HTTP retournés d’une demande d’API indiquent l’état de la limite de débit actuelle :

```shell
$ curl -I {% data variables.product.api_url_pre %}/users/octocat
> HTTP/2 200
> Date: Mon, 01 Jul 2013 17:27:06 GMT
> x-ratelimit-limit: 60
> x-ratelimit-remaining: 56
> x-ratelimit-used: 4
> x-ratelimit-reset: 1372700873
```

Nom de l’en-tête | Description
-----------|-----------|
`x-ratelimit-limit` | Nombre maximal de demandes autorisées par heure.
`x-ratelimit-remaining` | Nombre de demandes restantes dans la fenêtre de limite de débit actuelle.
`x-ratelimit-used` | Nombre de demandes que vous avez faites dans la fenêtre de limite de débit actuelle.
`x-ratelimit-reset` | Heure à laquelle la fenêtre de limite de débit actuelle se réinitialise en [secondes d’époque UTC](http://en.wikipedia.org/wiki/Unix_time).

Si vous avez besoin de l’heure dans un autre format, il est possible d’effectuer l’opération dans n’importe quel langage de programmation moderne. Dans le cas, par exemple, où vous ouvrez la console sur votre navigateur web, vous pouvez facilement obtenir l’heure de réinitialisation en tant qu’objet JavaScript Date.

``` javascript
new Date(1372700873 * 1000)
// => Mon Jul 01 2013 13:47:53 GMT-0400 (EDT)
```

Si vous dépassez la limite de débit, une réponse d’erreur est retournée :

```shell
> HTTP/2 403
> Date: Tue, 20 Aug 2013 14:50:41 GMT
> x-ratelimit-limit: 60
> x-ratelimit-remaining: 0
> x-ratelimit-used: 60
> x-ratelimit-reset: 1377013266

> {
>    "message": "API rate limit exceeded for xxx.xxx.xxx.xxx. (But here's the good news: Authenticated requests get a higher rate limit. Check out the documentation for more details.)",
>    "documentation_url": "{% data variables.product.doc_url_pre %}/overview/resources-in-the-rest-api#rate-limiting"
> }
```

### Augmentation de la limite de débit non authentifié des applications OAuth

Si votre application OAuth doit effectuer des appels non authentifiés avec une limite de débit plus élevée, vous pouvez transmettre l’ID client et le secret de votre application avant l’itinéraire du point de terminaison.

```shell
$ curl -u my_client_id:my_client_secret -I {% data variables.product.api_url_pre %}/user/repos
> HTTP/2 200
> Date: Mon, 01 Jul 2013 17:27:06 GMT
> x-ratelimit-limit: 5000
> x-ratelimit-remaining: 4966
> x-ratelimit-used: 34
> x-ratelimit-reset: 1372700873
```

{% note %}

**Remarque :** Ne partagez jamais votre secret client avec quiconque. Ne l’incluez pas dans le code du navigateur côté client. Utilisez la méthode indiquée ici uniquement pour les appels de serveur à serveur.

{% endnote %}

### Respect de la limite de débit

Si vous dépassez votre limite de débit en utilisant une authentification de base ou OAuth, vous avez de grandes chances de résoudre le problème en mettant en cache les réponses de l’API et en utilisant des [demandes conditionnelles](#conditional-requests).

### Limites de débit secondaires

Pour fournir un service de qualité sur {% data variables.product.product_name %}, des limites de débit supplémentaires peuvent s’appliquer à certaines actions en cas d’utilisation de l’API. Par exemple, le fait d’utiliser l’API pour créer rapidement du contenu, réaliser des interrogations agressives au lieu d’utiliser des webhooks, effectuer plusieurs demandes simultanées ou demander à plusieurs reprises des données coûteuses en calcul peut entraîner une limitation de débit secondaire.

Les limites de débit secondaires ne sont pas destinées à interférer avec l’utilisation légitime de l’API. Vos limites normales de débit doivent constituer la seule limite que vous ciblez. Pour vous assurer d’adopter le bon comportement vis-à-vis de l’API, consultez nos [Recommandations de meilleures pratiques](/guides/best-practices-for-integrators/).

Si votre application déclenche cette limite de débit, vous recevez une réponse informative :

```shell
> HTTP/2 403
> Content-Type: application/json; charset=utf-8
> Connection: close

> {
>   "message": "You have exceeded a secondary rate limit and have been temporarily blocked from content creation. Please retry your request again later.",
>   "documentation_url": "{% data variables.product.doc_url_pre %}/overview/resources-in-the-rest-api#secondary-rate-limits"
> }
```

{% ifversion fpt or ghec %}

## Agent utilisateur requis

Toutes les demandes d’API DOIVENT inclure un en-tête `User-Agent` valide. Les demandes sans en-tête `User-Agent` sont rejetées. Nous vous demandons d’utiliser votre nom d’utilisateur {% data variables.product.product_name %} ou le nom de votre application comme valeur d’en-tête `User-Agent`. Cela nous permet de vous contacter en cas de problème.

Voici un exemple :

```shell
User-Agent: Awesome-Octocat-App
```

cURL envoie par défaut un en-tête `User-Agent` valide. Si vous fournissez un en-tête `User-Agent` non valide avec cURL (ou un autre client), vous recevez une réponse `403 Forbidden` :

```shell
$ curl -IH 'User-Agent: ' {% data variables.product.api_url_pre %}/meta
> HTTP/1.0 403 Forbidden
> Connection: close
> Content-Type: text/html

> Request forbidden by administrative rules.
> Please make sure your request has a User-Agent header.
> Check  for other possible causes.
```

{% endif %}

## Demandes conditionnelles

La plupart des réponses retournent un en-tête `ETag`. De nombreuses réponses renvoient également un en-tête `Last-Modified`. Vous pouvez utiliser les valeurs de ces en-têtes pour effectuer des demandes ultérieures à ces ressources à l’aide respectivement de l’en-tête `If-None-Match` et de l’en-tête `If-Modified-Since`. Si la ressource n’a pas changé, le serveur retourne `304 Not Modified`.

{% ifversion fpt or ghec %}

{% tip %}

**Remarque** : La création d’une demande conditionnelle et la réception d’une réponse 304 ne comptent pas par rapport à votre [limite de débit](#rate-limiting). Nous vous encourageons donc à l’utiliser chaque fois que cela est possible.

{% endtip %}

{% endif %}

```shell
$ curl -I {% data variables.product.api_url_pre %}/user
> HTTP/2 200
> Cache-Control: private, max-age=60
> ETag: "644b5b0155e6404a9cc4bd9d8b1ae730"
> Last-Modified: Thu, 05 Jul 2012 15:31:30 GMT
> Vary: Accept, Authorization, Cookie
> x-ratelimit-limit: 5000
> x-ratelimit-remaining: 4996
> x-ratelimit-reset: 1372700873

$ curl -I {% data variables.product.api_url_pre %}/user -H 'If-None-Match: "644b5b0155e6404a9cc4bd9d8b1ae730"'
> HTTP/2 304
> Cache-Control: private, max-age=60
> ETag: "644b5b0155e6404a9cc4bd9d8b1ae730"
> Last-Modified: Thu, 05 Jul 2012 15:31:30 GMT
> Vary: Accept, Authorization, Cookie
> x-ratelimit-limit: 5000
> x-ratelimit-remaining: 4996
> x-ratelimit-reset: 1372700873

$ curl -I {% data variables.product.api_url_pre %}/user -H "If-Modified-Since: Thu, 05 Jul 2012 15:31:30 GMT"
> HTTP/2 304
> Cache-Control: private, max-age=60
> Last-Modified: Thu, 05 Jul 2012 15:31:30 GMT
> Vary: Accept, Authorization, Cookie
> x-ratelimit-limit: 5000
> x-ratelimit-remaining: 4996
> x-ratelimit-reset: 1372700873
```

## Partage des ressources cross-origin

L’API prend en charge le partage de ressources CORS (Cross-Origin Resource Sharing) pour les demandes AJAX de toute origine.
Vous pouvez lire la [recommandation CORS W3C](http://www.w3.org/TR/cors/) ou [cette introduction](https://code.google.com/archive/p/html5security/wikis/CrossOriginRequestSecurity.wiki) du guide de sécurité HTML 5.

Voici un exemple de demande envoyée par un navigateur qui atteint `http://example.com` :

```shell
$ curl -I {% data variables.product.api_url_pre %} -H "Origin: http://example.com"
HTTP/2 302
Access-Control-Allow-Origin: *
Access-Control-Expose-Headers: ETag, Link, X-GitHub-OTP, x-ratelimit-limit, x-ratelimit-remaining, x-ratelimit-reset, X-OAuth-Scopes, X-Accepted-OAuth-Scopes, X-Poll-Interval
```

Voici à quoi ressemble la demande préliminaire CORS :

```shell
$ curl -I {% data variables.product.api_url_pre %} -H "Origin: http://example.com" -X OPTIONS
HTTP/2 204
Access-Control-Allow-Origin: *
Access-Control-Allow-Headers: Authorization, Content-Type, If-Match, If-Modified-Since, If-None-Match, If-Unmodified-Since, X-GitHub-OTP, X-Requested-With
Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE
Access-Control-Expose-Headers: ETag, Link, X-GitHub-OTP, x-ratelimit-limit, x-ratelimit-remaining, x-ratelimit-reset, X-OAuth-Scopes, X-Accepted-OAuth-Scopes, X-Poll-Interval
Access-Control-Max-Age: 86400
```

## Rappels JSON-P

Vous pouvez envoyer un paramètre `?callback` à n’importe quel appel GET pour que les résultats s’encapsulent dans une fonction JSON.  Cette technique est généralement utilisée lorsque les navigateurs doivent incorporer du contenu {% data variables.product.product_name %} dans des pages web en contournant des problèmes interdomaines.  La réponse inclut la même sortie de données que l’API classique, ainsi que les informations d’en-tête HTTP pertinentes.

```shell
$ curl {% data variables.product.api_url_pre %}?callback=foo

> /**/foo({
>   "meta": {
>     "status": 200,
>     "x-ratelimit-limit": "5000",
>     "x-ratelimit-remaining": "4966",
>     "x-ratelimit-reset": "1372700873",
>     "Link": [ // pagination headers and other links
>       ["{% data variables.product.api_url_pre %}?page=2", {"rel": "next"}]
>     ]
>   },
>   "data": {
>     // the data
>   }
> })
```

Vous pouvez écrire un gestionnaire JavaScript pour traiter le rappel. Voici un exemple minimal que vous pouvez essayer :

    <html>
    <head>
    <script type="text/javascript">
    function foo(response) {
      var meta = response.meta;
      var data = response.data;
      console.log(meta);
      console.log(data);
    }

    var script = document.createElement('script');
    script.src = '{% data variables.product.api_url_code %}?callback=foo';

    document.getElementsByTagName('head')[0].appendChild(script);
    </script>
    </head>

    <body>
      <p>Open up your browser's console.</p>
    </body>
    </html>

Tous les en-têtes possèdent la même valeur de chaîne que les en-têtes HTTP, à une exception notable : Link.  Les en-têtes Link, préanalysés automatiquement, se présentent sous la forme d’un tableau de tuples `[url, options]`.

Prenons l’exemple du lien suivant :

    Link: <url1>; rel="next", <url2>; rel="foo"; bar="baz"

Il se présente ainsi dans la sortie de rappel :

```json
{
  "Link": [
    [
      "url1",
      {
        "rel": "next"
      }
    ],
    [
      "url2",
      {
        "rel": "foo",
        "bar": "baz"
      }
    ]
  ]
}
```

## Fuseaux horaires

Certaines demandes qui créent de nouvelles données (par exemple une validation) vous permettent de fournir des informations de fuseau horaire lorsque vous spécifiez ou générez des horodatages. Nous appliquons les règles suivantes, par ordre de priorité, pour déterminer les informations de fuseau horaire de ces appels d’API.

* [Indication explicite d’un horodatage ISO 8601 avec des informations de fuseau horaire](#explicitly-providing-an-iso-8601-timestamp-with-timezone-information)
* [Utilisation de l’en-tête `Time-Zone`](#using-the-time-zone-header)
* [Utilisation du dernier fuseau horaire connu pour l’utilisateur](#using-the-last-known-timezone-for-the-user)
* [Application de la valeur par défaut UTC sans autres informations de fuseau horaire](#defaulting-to-utc-without-other-timezone-information)

Notez que ces règles s’appliquent uniquement aux données transmises à l’API, et non aux données retournées par celle-ci. Comme il est mentionné dans « [Schéma](#schema) », les horodatages retournés par l’API sont au format UTC ISO 8601.

### Indication explicite d’un horodatage ISO 8601 avec des informations de fuseau horaire

Dans le cas des appels d’API qui autorisent la spécification d’un horodatage, nous utilisons cet horodatage précis. Prenons par exemple [l’API Validations](/rest/reference/git#commits).

Ces horodatages se présentent ainsi : `2014-02-27T15:05:06+01:00`. Pour savoir comment ces horodatages peuvent être spécifiés, consultez également [cet exemple](/rest/reference/git#example-input).

### Utilisation de l’en-tête `Time-Zone`

Il est possible de fournir un en-tête `Time-Zone` qui définit un fuseau horaire en fonction de la [liste des noms de la base de données Olson](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).

```shell
$ curl -H "Time-Zone: Europe/Amsterdam" -X POST {% data variables.product.api_url_pre %}/repos/github/linguist/contents/new_file.md
```

Cela signifie qu’un horodatage est généré pour le moment où l’appel d’API est effectué dans le fuseau horaire défini par cet en-tête. Par exemple, [l’API Contenus](/rest/reference/repos#contents) génère une validation Git pour chaque ajout ou modification et utilise l’heure actuelle comme horodatage. Cet en-tête détermine le fuseau horaire utilisé pour générer cet horodatage actuel.

### Utilisation du dernier fuseau horaire connu pour l’utilisateur

Si aucun en-tête `Time-Zone` n’est spécifié lorsque vous effectuez un appel authentifié à l’API, le fuseau horaire utilisé est le dernier fuseau connu de l’utilisateur authentifié. Il est mis à jour chaque fois que vous parcourez le site web {% data variables.product.product_name %}.

### Application de la valeur par défaut UTC sans autres informations de fuseau horaire

Si la procédure ci-dessus ne produit aucune information, c’est le fuseau horaire UTC qui est utilisé pour créer la validation Git.
