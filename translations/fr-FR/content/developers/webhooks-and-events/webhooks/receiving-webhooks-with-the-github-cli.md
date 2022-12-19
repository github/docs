---
title: "Réception de webhooks avec l’interface\_CLI GitHub"
intro: 'Vous pouvez utiliser l’{% data variables.product.prodname_cli %} pour tester des webhooks dans votre environnement de développement sans la complexité associées au transfert de port ou à des outils tiers.'
versions:
  feature: cli-webhook-forwarding
topics:
  - Webhooks
shortTitle: Receiving webhooks with the GitHub CLI
ms.openlocfilehash: 11bc5b476a191a61594cb73f1e6ce1be5bb6cf9b
ms.sourcegitcommit: d82f268a6f0236d1f4d2bf3d049974ada0170402
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/10/2022
ms.locfileid: '148160663'
---
## À propos de la réception de webhooks avec l’{% data variables.product.prodname_cli %}

{% note %}

**Remarque** : La réception de webhooks avec l’{% data variables.product.prodname_cli %} est actuellement en version bêta publique limitée et est sujette à modifications. Pour vous inscrire à la version bêta, répondez à la [discussion](https://github.com/orgs/community/discussions/38261) de notre communauté GitHub. Vous ne serez peut-être pas ajouté immédiatement. Vous recevrez une notification par e-mail une fois que vous aurez été ajouté à la version bêta.

{% endnote %}

Lorsque vous apportez des modifications à votre code d’intégration, l’exécution du code dans un environnement local vous permet d’effectuer des tests et des itérations rapidement sans déployer le code. Vous pouvez utiliser l’{% data variables.product.prodname_cli %} pour transférer des webhooks vers votre environnement local.

{% note %}

**Remarque :** Le transfert de webhooks dans l’{% data variables.product.prodname_cli %} fonctionne uniquement avec les webhooks de dépôt et d’organisation. Si vous souhaitez tester localement des webhooks de parrainage, d’application GitHub, d’entreprise ou de la Place de marché, vous devez le faire manuellement. Pour plus d’informations, consultez « [Création de webhooks](/developers/webhooks-and-events/webhooks/creating-webhooks) ».

{% endnote %}

## Réception de webhooks avec l’{% data variables.product.prodname_cli %}

{% data reusables.cli.cli-learn-more %}

1. Pour installer l’extension {% data variables.product.prodname_cli %} afin d’activer le transfert de webhooks, utilisez la sous-commande `extension install`. 

   ```sh
   gh extension install cli/gh-webhook
   ```


1. Démarrez votre application localement, puis notez l’URL où elle s’attend à recevoir des webhooks. Ce guide suppose que votre application écoute les événements de webhook à l’adresse `http://localhost:3000/webhook`.

1. Pour configurer des webhooks à remettre à votre application, exécutez la sous-commande `webhook forward`. Remplacez `REPOSITORY` par le nom de votre dépôt. Par exemple : `monalisa/octocat`. Remplacez `EVENTS` par une liste séparée par des virgules des événements que vous souhaitez recevoir. Par exemple : `issues,pull_request`. Remplacez `URL` par l’URL locale où votre application s’attend à recevoir des webhooks. Par exemple : `"http://localhost:3000/webhook"`.  Pour écouter des webhooks d’organisation plutôt que des webhooks de dépôt, remplacez l’indicateur `--repo` par l’indicateur `--org`. Par exemple, `--org="octo-org"`.


   ```sh
   gh webhook forward --repo=REPOSITORY --events=EVENTS --url=URL
   ```

  Laissez la commande s’exécuter en arrière-plan. Elle recevra tous les événements spécifiés pour le dépôt indiqué et les transfère à votre gestionnaire de webhooks en cours d’exécution à l’URL spécifiée.
