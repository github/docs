---
title: Rechercher
intro: 'L’API Recherche vous permet de rechercher des éléments spécifiques sur {% data variables.product.product_name %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
redirect_from:
  - /rest/reference/search
ms.openlocfilehash: 71f21fc712f7c2121b780d79d20eb9615ad82c90
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147110360'
---
## À propos de l’API Recherche

L’API Recherche vous aide à rechercher l’élément spécifique que vous souhaitez trouver. Par exemple, vous pouvez trouver un utilisateur ou un fichier spécifique dans un référentiel. Pensez-y comme vous le feriez en effectuant une recherche sur Google. Il est conçu pour vous aider à trouver le résultat que vous recherchez (ou peut-être les quelques résultats que vous recherchez). Tout comme la recherche sur Google, vous souhaitez parfois voir quelques pages de résultats de recherche afin que vous puissiez trouver l’élément qui répond le mieux à vos besoins. Pour répondre à ce besoin, l’API de recherche {% data variables.product.product_name %} fournit **jusqu’à 1 000 résultats pour chaque recherche**.

Vous pouvez affiner votre recherche à l’aide de requêtes. Pour en savoir plus sur la syntaxe de requête de recherche, consultez « [Construction d’une requête de recherche](/rest/reference/search#constructing-a-search-query) ».

### Classement des résultats de recherche

Sauf si une autre option de tri est fournie en tant que paramètre de requête, les résultats sont triés par correspondance optimale dans l’ordre décroissant. Plusieurs facteurs sont combinés pour faire émerger l’élément le plus pertinent en haut de la liste des résultats.

### Limite du taux

{% data reusables.enterprise.rate_limit %}

L’API Recherche a une limite de débit personnalisée. Pour les requêtes utilisant [l’authentification de base](/rest#authentication), [OAuth](/rest#authentication) ou [un ID et un secret client](/rest#increasing-the-unauthenticated-rate-limit-for-oauth-applications), vous pouvez effectuer jusqu’à 30 requêtes par minute. Pour les requêtes non authentifiées, la limite de débit vous permet de faire jusqu’à 10 requêtes par minute.

Consultez la [documentation sur la limite de débit](/rest/reference/rate-limit) pour plus d’informations sur la détermination de l’état actuel de votre limite de débit.

### Construction d’une requête de recherche

Chaque point de terminaison de l’API de recherche utilise des [paramètres de requête](https://en.wikipedia.org/wiki/Query_string) pour effectuer des recherches sur {% data variables.product.product_name %}. Consultez le point de terminaison individuel de l’API Recherche pour obtenir un exemple qui inclut les paramètres de point de terminaison et de requête.

Une requête peut contenir n’importe quelle combinaison de qualificateurs de recherche pris en charge sur {% data variables.product.product_name %}. Le format de la requête de recherche est :

```
SEARCH_KEYWORD_1 SEARCH_KEYWORD_N QUALIFIER_1 QUALIFIER_N
```

Par exemple, si vous souhaitez rechercher tous les _référentiels_ détenus par `defunkt` contenant le mot `GitHub` et `Octocat` dans le fichier README, vous utiliserez la requête suivante avec le point de terminaison des _référentiels de recherche_ :

```
GitHub Octocat in:readme user:defunkt
```

**Remarque :** Veillez à utiliser votre encodeur HTML préféré pour votre langage pour construire vos chaînes de requête. Par exemple :
```javascript
// JavaScript
const queryString = 'q=' + encodeURIComponent('GitHub Octocat in:readme user:defunkt');
```

Consultez « [Recherche sur GitHub](/search-github/searching-on-github) » pour obtenir la liste complète des qualificateurs disponibles, leur format et un exemple de leur utilisation. Pour plus d’informations sur l’utilisation d’opérateurs pour correspondre à des quantités, des dates ou des exclusions spécifiques, consultez « [Présentation de la syntaxe de recherche](/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax/) ».

### Limitations relatives à la longueur des requêtes

L’API Recherche ne prend pas en charge les requêtes qui :
- sont de plus de 256 caractères (y compris les opérateurs ou les qualificateurs).
- ont plus de cinq opérateurs `AND`, `OR` ou `NOT`.

Ces requêtes de recherche retournent un message d’erreur « Échec de validation ».

### Délais d’expiration et résultats incomplets

Pour que l’API de recherche soit rapide pour tout le monde, nous limitons la durée pendant laquelle une requête individuelle peut s’exécuter. Pour les requêtes qui [dépassent la limite de temps](https://developer.github.com/changes/2014-04-07-understanding-search-results-and-potential-timeouts/), l’API retourne les correspondances qui ont déjà été trouvées avant le délai d’expiration, et la réponse a la propriété `incomplete_results` définie sur `true`.

Atteindre un délai d’expiration ne signifie pas nécessairement que les résultats de la recherche sont incomplets.
D’autres résultats ont peut-être été trouvés, mais peut-être pas.

### Erreurs d’accès ou résultats de recherche manquants

Vous devez vous authentifier et avoir accès aux référentiels dans vos requêtes de recherche, sinon vous verrez une erreur `422 Unprocessable Entry` avec un message « Échec de validation ». Par exemple, votre recherche échoue si votre requête inclut des qualificateurs `repo:`, `user:` ou `org:` qui demandent des ressources auxquelles vous n’avez pas accès lorsque vous vous connectez à {% data variables.product.prodname_dotcom %}.

Lorsque votre requête de recherche demande plusieurs ressources, la réponse contient uniquement les ressources auxquelles vous avez accès et ne fournit **pas** de message d’erreur indiquant les ressources qui n’ont pas été retournées.

Par exemple, si votre requête recherche les référentiels `octocat/test` et `codertocat/test`, mais que vous n’avez accès qu’à `octocat/test`, votre réponse affiche les résultats de recherche pour `octocat/test` et rien pour `codertocat/test`. Ce comportement imite le fonctionnement de la recherche sur {% data variables.product.prodname_dotcom %}.

### Métadonnées de correspondance de texte

Sur GitHub, vous pouvez utiliser le contexte fourni par des extraits de code et des mises en surbrillance dans les résultats de recherche. L’API Recherche offre des métadonnées supplémentaires qui vous permettent de mettre en surbrillance les termes de recherche correspondants lors de l’affichage des résultats de recherche.

![code-snippet-highlighting](/assets/images/text-match-search-api.png)

Les requêtes peuvent choisir de recevoir ces fragments de texte dans la réponse, et chaque fragment est accompagné de décalages numériques identifiant l’emplacement exact de chaque terme de recherche correspondant.

Pour obtenir ces métadonnées dans vos résultats de recherche, spécifiez le type de média `text-match` dans votre en-tête `Accept`.

```shell
application/vnd.github.text-match+json
```

Lorsque vous fournissez le type de média `text-match`, vous recevez une clé supplémentaire dans la charge utile JSON appelée `text_matches`, qui fournit des informations sur la position de vos termes de recherche dans le texte et le `property` qui inclut le terme de recherche. Dans le tableau `text_matches`, chaque objet inclut les attributs suivants :

Nom | Description
-----|-----------|
`object_url` | URL de la ressource qui contient une propriété de chaîne correspondant à l’un des termes de recherche.
`object_type` | Nom du type de ressource qui existe à l’`object_url` donnée.
`property` | Nom d’une propriété de la ressource qui existe à `object_url`. Cette propriété est une chaîne qui correspond à l’un des termes de recherche. (Dans le JSON retourné à partir de `object_url`, le contenu complet du fichier `fragment` se trouve dans la propriété avec ce nom.)
`fragment` | Sous-ensemble de la valeur de `property`. Il s’agit du fragment de texte qui correspond à un ou plusieurs termes de recherche.
`matches` | Tableau d’un ou de plusieurs termes de recherche présents dans `fragment`. Les indices (c’est-à-dire les « décalages ») sont relatifs au fragment. (Ils ne sont pas relatifs au contenu _complet_ de `property`.)

#### Exemple

À l’aide de cURL et de [l’exemple de recherche de problème](#search-issues-and-pull-requests) ci-dessus, notre requête d’API ressemble à ceci :

``` shell
curl -H 'Accept: application/vnd.github.text-match+json' \
'{% data variables.product.api_url_pre %}/search/issues?q=windows+label:bug \
+language:python+state:open&sort=created&order=asc'
```

La réponse inclut un tableau `text_matches` pour chaque résultat de recherche. Dans le JSON ci-dessous, nous avons deux objets dans le tableau `text_matches`.

La première correspondance de texte s’est produite dans la propriété `body` du problème. Nous voyons un fragment de texte du corps du problème. Le terme de recherche (`windows`) apparaît deux fois dans ce fragment, et nous avons les indices pour chaque occurrence.

La deuxième correspondance de texte s’est produite dans la propriété `body` de l’un des commentaires du problème. Nous avons l’URL du commentaire du problème. Et bien sûr, nous voyons un fragment de texte du corps du commentaire. Le terme de recherche (`windows`) apparaît une fois dans ce fragment.

```json
{
  "text_matches": [
    {
      "object_url": "https://api.github.com/repositories/215335/issues/132",
      "object_type": "Issue",
      "property": "body",
      "fragment": "comprehensive windows font I know of).\n\nIf we can find a commonly
      distributed windows font that supports them then no problem (we can use html
      font tags) but otherwise the '(21)' style is probably better.\n",
      "matches": [
        {
          "text": "windows",
          "indices": [
            14,
            21
          ]
        },
        {
          "text": "windows",
          "indices": [
            78,
            85
          ]
        }
      ]
    },
    {
      "object_url": "https://api.github.com/repositories/215335/issues/comments/25688",
      "object_type": "IssueComment",
      "property": "body",
      "fragment": " right after that are a bit broken IMHO :). I suppose we could
      have some hack that maxes out at whatever the font does...\n\nI'll check
      what the state of play is on Windows.\n",
      "matches": [
        {
          "text": "Windows",
          "indices": [
            163,
            170
          ]
        }
      ]
    }
  ]
}
```
