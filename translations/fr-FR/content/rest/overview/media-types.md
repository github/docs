---
title: Types de médias
intro: Découvrez les types de média pour spécifier le format des données que vous souhaitez consommer.
redirect_from:
  - /v3/media
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
ms.openlocfilehash: d93ba31647967f2f3a38dd47c5cc6d8a623c6c6e
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146681124'
---
L’API utilise des types médias personnalisés pour permettre aux consommateurs de choisir le format des données qu’ils souhaitent recevoir. Pour ce faire, ajoutez un ou plusieurs types suivants à l’en-tête `Accept` lorsque vous effectuez une requête. Les types médias sont spécifiques aux ressources, ce qui leur permet de changer de façon indépendante et de prendre en charge des formats que d’autres ressources ne prennent pas en charge.

Tous les types de médias {% data variables.product.product_name %} ressemblent à ceci :

    application/vnd.github.param[+json]

Les types multimédias les plus simples pris en charge par l’API sont les suivants :

    application/vnd.github+json
    application/json

{% note %}

**Remarque :** dans le passé, nous vous recommandons d’inclure `v3` dans votre en-tête `Accept`. Cela n’est plus nécessaire et n’aura aucun impact sur vos demandes d’API.

{% endnote %}

Si vous spécifiez une propriété (comme complet/brut/etc. ci-dessous), placez la après `github` :

    application/vnd.github.raw+json

## Propriétés du corps du commentaire

Le corps d’un commentaire peut être écrit en [GitHub Flavored Markdown][gfm], et les API de [problèmes](/rest/reference/issues), [commentaires de problème](/rest/reference/issues#comments), [commentaires de demande de tirage](/rest/reference/pulls#comments) et [commentaires gist](/rest/reference/gists#comments) acceptent toutes ces mêmes types de médias :

### Brut

    application/vnd.github.raw+json

Retournez le corps Markdown brut. La réponse inclut `body`. Il s’agit de la valeur par défaut si vous ne transmettez aucun type de média spécifique.

### Texte

    application/vnd.github.text+json

Retourne une représentation de texte uniquement du corps Markdown. La réponse inclut `body_text`.

### HTML

    application/vnd.github.html+json

Retournez le code HTML rendu à partir du Markdown du corps. La réponse inclut `body_html`.

### Complète

    application/vnd.github.full+json

Retournez des représentations brutes, textuelles et HTML. La réponse inclut `body`, `body_text` et `body_html` :

## Propriétés d’objet blob Git

Les types multimédias suivants sont autorisés lors de l’[obtention d’un objet blob](/rest/reference/git#get-a-blob) :

### JSON

    application/vnd.github+json
    application/json

Retourne la représentation JSON de l’objet blob avec `content` comme chaîne encodée en base64. Il s’agit de la valeur par défaut si rien n’est passé.

### Brut

    application/vnd.github.raw

Retournez les données brutes de l’objet blob.

## Validations, comparaison des validations et demandes de tirage

L’[API de validation](/rest/reference/repos#commits) et l’[API de demandes de tirage](/rest/reference/pulls) prennent en charge les formats [diff][git-diff] et [patch][git-patch] :

### diff

    application/vnd.github.diff

### patch

    application/vnd.github.patch

### sha

    application/vnd.github.sha

## Contenu d’un référentiel

### Brut

    application/vnd.github.raw

Renvoie le contenu brut d’un fichier. Il s’agit de la valeur par défaut si vous ne transmettez aucun type de média spécifique.

### HTML

    application/vnd.github.html

Pour les fichiers de balisage, comme Markdown ou AsciiDoc, vous pouvez récupérer le code HTML rendu à l’aide du type de média `.html`. Les langages de balisage sont rendus au format HTML à l’aide de notre [bibliothèque de balisage](https://github.com/github/markup) open source.

## Gists

### Brut

    application/vnd.github.raw

Retournez le contenu brut d’un gist. Il s’agit de la valeur par défaut si vous ne transmettez aucun type de média spécifique.

### base64

    application/vnd.github.base64

Le contenu du gist est encodé en base64 avant d’être envoyé. Cela peut être utile si votre gist contient des séquences UTF-8 non valides.

[gfm]:http://github.github.com/github-flavored-markdown/
[git-diff]: http://git-scm.com/docs/git-diff
[git-patch]: http://git-scm.com/docs/git-format-patch
[hypermedia]: /rest#hypermedia
[versions]: /developers/overview/about-githubs-apis
