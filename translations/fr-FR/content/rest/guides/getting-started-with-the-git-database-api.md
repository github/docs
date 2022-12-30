---
title: Prise en main de l’API de base de données Git
intro: 'L’API Git Database vous permet de lire et d’écrire des objets Git bruts dans votre base de données Git sur {% data variables.product.product_name %} et de répertorier et de mettre à jour vos références (têtes et étiquettes de branche).'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
shortTitle: Get started - Git Database API
ms.openlocfilehash: b7044e299602de42a2c880df8da4a6f19ef9334b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145131342'
---
## Vue d’ensemble 

Cela vous permet fondamentalement de réimplémenter un grand nombre de fonctionnalités Git sur notre API. En créant des objets bruts directement dans la base de données et en mettant à jour les références de branche, vous pouvez techniquement faire à peu près tout ce que Git peut faire sans avoir installé Git.

Les fonctions de l’API de base de données Git retournent un `409 Conflict` si le dépôt Git est vide ou indisponible.  Un dépôt indisponible signifie généralement que {% data variables.product.product_name %} est en train de créer le dépôt. Pour un dépôt vide, vous pouvez utiliser le point de terminaison « [Créer ou mettre à jour le contenu d’un fichier](/rest/reference/repos#create-or-update-file-contents) » pour créer du contenu et initialiser le dépôt afin de pouvoir utiliser l’API de base de données Git. Contactez {% data variables.contact.contact_support %} si cet état de réponse persiste.

![Vue d’ensemble d’une base de données Git](/assets/images/git-database-overview.png)

Pour plus d’informations sur la base de données d’objets Git, lisez le chapitre [Internes Git](http://git-scm.com/book/en/v1/Git-Internals) du livre Git Pro.

Par exemple, si vous souhaitez valider une modification dans un fichier de votre dépôt, vous devez :

* Obtenir l’objet de validation actuel
* Récupérer l’arborescence vers laquelle il pointe
* Récupérer le contenu de l’objet blob que l’arborescence a pour ce chemin d’accès de fichier particulier
* Modifier le contenu d’une manière ou d’une autre, envoyer un nouvel objet blob avec ce nouveau contenu, et obtenir un SHA de blob en retour
* Publier un nouvel objet d’arborescence avec ce pointeur de chemin d’accès de fichier remplacé par votre nouveau SHA de blob, et obtenir un SHA d’arborescence en retour
* Créer un objet de validation avec le SHA de validation actuel en tant que parent et le nouveau SHA d’arborescence, et récupérer un SHA de validation en retour
* Mettre à jour la référence de votre branche pour qu’elle pointe vers le nouveau SHA de validation

Cela peut sembler complexe, mais c’est en fait assez simple lorsque vous comprenez le modèle et que celui-ci ouvre une tonne de choses que vous pourriez potentiellement faire avec l’API.

## Vérification de la capacité de fusion des demandes de tirage

{% warning %}

**Avertissement !** Évitez de dépendre de l’utilisation directe de Git, ou de [`GET /repos/{owner}/{repo}/git/refs/{ref}`](/rest/reference/git#get-a-reference) pour les mises à jour de références Git `merge`, car ce contenu devient obsolète sans avertissement.

{% endwarning %}

Une API consommatrice doit effectuer explicitement une demande de tirage pour créer une validation de fusion _test_. Une validation de fusion _test_ est créée lorsque vous affichez la demande de tirage dans l’interface utilisateur et que le bouton « Fusionner » s’affiche, ou lorsque vous [obtenez](/rest/reference/pulls#get-a-pull-request), [créez](/rest/reference/pulls#create-a-pull-request) ou [modifiez](/rest/reference/pulls#update-a-pull-request) une demande de tirage à l’aide de l’API REST. Sans cette demande, les références Git `merge` deviendront obsolètes jusqu’au prochain affichage de la demande de tirage.

Si vous utilisez actuellement des méthodes d’interrogation qui produisent des références Git `merge` obsolètes, GitHub recommande d’utiliser les étapes suivantes pour obtenir les dernières modifications de la branche par défaut :

1. Recevez le webhook de demande de tirage.
2. Appelez [`GET /repos/{owner}/{repo}/pulls/{pull_number}`](/rest/reference/pulls#get-a-pull-request) pour démarrer un travail en arrière-plan afin de créer la validation de fusion candidate.
3. Interrogez votre dépôt en utilisant [`GET /repos/{owner}/{repo}/pulls/{pull_number}`](/rest/reference/pulls#get-a-pull-request) pour voir si l’attribut `mergeable` est `true` ou `false`. Vous pouvez utiliser Git directement, ou [`GET /repos/{owner}/{repo}/git/refs/{ref}`](/rest/reference/git#get-a-reference) pour les mises à jour de références Git `merge` uniquement après avoir accompli les étapes précédentes.
