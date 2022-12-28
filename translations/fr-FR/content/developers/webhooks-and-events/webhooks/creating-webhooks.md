---
title: Création de webhooks
intro: 'Apprenez à créer un webhook en choisissant les événements que votre webhook écoutera sur {% data variables.product.prodname_dotcom %} et à configurer un serveur pour recevoir et gérer la charge utile du webhook.'
redirect_from:
  - /webhooks/creating
  - /developers/webhooks-and-events/creating-webhooks
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Webhooks
ms.openlocfilehash: ced763e71ecc9f99d8dd5037dcdb6d87cfdba91d
ms.sourcegitcommit: 6b1c6174d0df40c90edfd7526496baabb1dd159d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/04/2022
ms.locfileid: '148132970'
---
Maintenant que nous avons vu les [concepts de base des webhooks][webhooks-overview], voyons le processus de création de notre propre intégration basée sur un webhook. Dans ce tutoriel, nous créons un webhook de dépôt chargé de lister la popularité de notre dépôt, en fonction du nombre de problèmes qu’il reçoit par jour.

La création d’un webhook se déroule en deux étapes. Vous devez d’abord configurer les événements que votre webhook doit écouter. Ensuite, vous configurez votre serveur pour recevoir et gérer la charge utile.


{% data reusables.webhooks.webhooks-rest-api-links %}

## Exposition de localhost sur Internet

Dans le cadre de ce tutoriel, nous allons utiliser un serveur local pour recevoir les événements de webhook {% data variables.product.prodname_dotcom %}. 

Tout d’abord, nous devons exposer notre environnement de développement local sur Internet afin que {% data variables.product.prodname_dotcom %} puisse fournir des événements. Pour ce faire, nous allons utiliser [`ngrok`](https://ngrok.com).

{% ifversion cli-webhook-forwarding %} {% note %}

**Remarque :** Vous pouvez également utiliser le transfert de webhook pour configurer votre environnement local afin de recevoir des webhooks. Pour plus d’informations, consultez « [Réception de webhooks avec l’interface CLI GitHub](/developers/webhooks-and-events/webhooks/receiving-webhooks-with-the-github-cli) ».

{% endnote %} {% endif %}

`ngrok` est disponible gratuitement pour tous les principaux systèmes d’exploitation. Pour plus d’informations, consultez la [page de téléchargement de `ngrok`](https://ngrok.com/download).

Après l’installation de `ngrok`, vous pouvez exposer votre localhost en exécutant `./ngrok http 4567` sur la ligne de commande. `4567` est le numéro de port sur lequel notre serveur écoute les messages. Vous devez voir une ligne qui ressemble à ceci :

```shell
$ Forwarding  http://7e9ea9dc.ngrok.io -> 127.0.0.1:4567
```

Notez l’URL `*.ngrok.io`. Nous l’utilisons pour configurer notre webhook.

## Configuration d’un webhook

Vous pouvez installer des webhooks sur une organisation ou sur un dépôt spécifique.

Pour configurer un webhook, accédez à la page de paramètres de votre dépôt ou organisation. À partir de là, cliquez sur **Webhooks**, puis **Ajouter un webhook**.

Vous pouvez aussi choisir de créer et gérer un webhook [avec l’API Webhooks][webhook-api].

Les webhooks nécessitent quelques options de configuration avant de pouvoir être utilisés. Nous examinons chacun de ces paramètres ci-dessous.

## URL de la charge utile

{% data reusables.webhooks.payload_url %}

Comme nous développons localement dans le cadre de notre tutoriel, nous la définissons sur l’URL `*.ngrok.io`, suivie de `/payload`. Par exemple : `http://7e9ea9dc.ngrok.io/payload`.

## Type de contenu

{% data reusables.webhooks.content_type %} Pour ce tutoriel, le type de contenu par défaut `application/json` convient.

## Secret

{% data reusables.webhooks.secret %}

## Vérification SSL

{% data reusables.webhooks.webhooks_ssl %}

## Actif

Par défaut, la livraison de webhook est « Active ». Vous pouvez choisir de désactiver la livraison des charges utiles de webhook en désélectionnant « Active ».

## Événements

Les événements sont au cœur des webhooks. Ces webhooks se déclenchent chaque fois qu’une certaine action est effectuée sur le dépôt, que l’URL de charge utile de votre serveur intercepte et à partir de laquelle elle exécute une action.

Pour voir la liste complète des événements de webhook et savoir quand ils s’exécutent, consultez la [documentation de référence de l’API Webhooks][hooks-api].

Comme notre webhook traite les problèmes dans un dépôt, nous cliquons sur **Me permettre de sélectionner des événements individuels**, puis **Problèmes**. Sélectionnez **Active** pour recevoir les événements liés aux problèmes concernant les webhooks déclenchés. Vous pouvez également sélectionner tous les événements en utilisant l’option par défaut.

Quand vous avez fini, cliquez sur **Ajouter un webhook**. 

Maintenant que vous avez créé le webhook, vous pouvez configurer le serveur local pour tester le webhook. Consultez [Configuration de votre serveur](/webhooks/configuring/) pour savoir comment faire.

### Événement générique

Pour configurer un webhook pour tous les événements, utilisez le caractère générique (`*`) afin de spécifier les événements de webhook. Quand vous ajoutez l’événement générique, nous remplaçons tous les événements existants que vous avez configurés par l’événement générique et vous envoyons des charges utiles pour tous les événements pris en charge. Vous obtenez également automatiquement tous les nouveaux événements ajoutés par la suite.

[webhooks-overview]: /webhooks/
[webhook-api]: /rest/reference/repos#hooks
[hooks-api]: /webhooks/#events
