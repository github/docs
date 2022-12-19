---
title: Dépannage
intro: Découvrez comment résoudre les problèmes les plus courants rencontrés dans l’API REST.
redirect_from:
  - /v3/troubleshooting
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
ms.openlocfilehash: c696f18d89ffe7d9c9c7c13eda933285502132ae
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192832'
---
Si vous rencontrez des anomalies dans l’API, voici une liste de solutions à certains des problèmes que vous pouvez rencontrer.

{% ifversion api-date-versioning %}

## Erreur `400` pour une version d’API non prise en charge

Vous devez utiliser l’en-tête `X-GitHub-Api-Version` pour spécifier une version d’API. Par exemple :

```shell
$ curl {% data reusables.rest-api.version-header %} https://api.github.com/zen
```

Si vous spécifiez une version qui n’existe pas, vous recevez une erreur `400`.

Pour plus d’informations, consultez « [Versions d’API](/rest/overview/api-versions) ».

{% endif %}

## Erreur `404` concernant un dépôt existant

En règle générale, nous envoyons une erreur `404` lorsque votre client n’est pas authentifié correctement.
Vous vous attendriez plutôt à voir une erreur `403 Forbidden` dans ces cas-là. Toutefois, étant donné que nous ne voulons fournir _aucune_ information sur les dépôts privés, l’API retournera une erreur `404` à la place.

Pour résoudre ce problème, vérifiez que [vous vous authentifiez correctement](/guides/getting-started/), que [votre jeton d’accès OAuth comprend les étendues nécessaires](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/), que les [restrictions relatives aux applications tierces][oap-guide] ne bloquent pas l’accès et que le [jeton n’a pas expiré ni été révoqué](/github/authenticating-to-github/keeping-your-account-and-data-secure/token-expiration-and-revocation).

## Tous les résultats ne sont pas retournés

La plupart des appels d’API qui accèdent à une liste de ressources (_par exemple_, les utilisateurs, les problèmes, _etc._ ) prennent en charge la pagination. Si vous effectuez des demandes et que vous recevez un ensemble incomplet de résultats, il est probable que vous ne voyiez que la première page. Vous devrez demander les pages restantes afin d’obtenir plus de résultats.

Il est important de *ne pas* essayer de deviner le format de l’URL de pagination. Tous les appels d’API n’utilisent pas la même structure. Au lieu de cela, extrayez les informations de pagination de l’en-tête de lien, qui sont retournées avec chaque demande. Pour plus d’informations sur la pagination, consultez « [Utilisation de la pagination dans l’API REST](/rest/guides/using-pagination-in-the-rest-api) ».

[oap-guide]: https://developer.github.com/changes/2015-01-19-an-integrators-guide-to-organization-application-policies/

{% ifversion fpt or ghec %}
## Erreurs d’authentification de base

Le 13 novembre 2020, l’authentification par nom d’utilisateur et mot de passe a été dépréciée pour l’API REST et l’API OAuth Authorizations, et ne fonctionne plus.

### Utilisation de `username`/`password` pour l’authentification de base

Si vous utilisez `username` et `password` pour les appels d’API, ceux-ci ne pourront plus s’authentifier. Par exemple :

```bash
curl -u my_user:my_password https://api.github.com/user/repos
```

Utilisez plutôt un [{% data variables.product.pat_generic %}](/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line) lorsque vous testez des points de terminaison ou développez en local :

```bash
curl -H 'Authorization: Bearer my_access_token' https://api.github.com/user/repos
```

Pour les applications OAuth, vous devez utiliser le [flux d’application web](/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow) afin de générer un jeton OAuth à utiliser dans l’en-tête de l’appel d’API :

```bash
curl -H 'Authorization: Bearer my-oauth-token' https://api.github.com/user/repos
```

## Délais d'attente

Si {% data variables.product.product_name %} prend plus de 10 secondes pour traiter une demande d’API, {% data variables.product.product_name %} mettra fin à la demande et vous recevrez une réponse de délai expiré.

{% endif %}
