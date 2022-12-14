---
title: Mise à l’échelle automatique avec des exécuteurs auto-hébergés
shortTitle: Autoscale self-hosted runners
intro: Vous pouvez mettre automatiquement à l’échelle vos exécuteurs autohébergés en réponse aux événements de webhook.
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: overview
ms.openlocfilehash: 2fe0c197ac122ea9cd976c2718a492bd80c073fe
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107556'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## À propos de la mise à l’échelle automatique

Vous pouvez augmenter ou diminuer automatiquement le nombre d’exécuteurs auto-hébergés dans votre environnement en réponse aux événements de webhook que vous recevez avec une étiquette particulière. Par exemple, vous pouvez créer une automatisation qui ajoute un nouvel exécuteur auto-hébergé chaque fois que vous recevez un événement webhook [`workflow_job`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#workflow_job) avec l’activité [`queued`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#workflow_job), ce qui vous informe qu’un nouveau travail est prêt à être traité. La charge utile de webhook inclut des données d’étiquette, afin que vous puissiez identifier le type d’exécuteur que le travail demande. Une fois le travail terminé, vous pouvez créer une automatisation qui supprime l’exécuteur en réponse à l’activité `workflow_job` [`completed`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#workflow_job). 

## Solutions de mise à l’échelle automatique recommandées

{% data variables.product.prodname_dotcom %} recommande deux projets open source que vous pouvez utiliser pour la mise à l’échelle automatique de vos exécuteurs, et s’associe étroitement à eux. Une solution ou les deux peuvent être adaptées, en fonction de vos besoins. 

Les dépôts suivants ont des instructions détaillées pour configurer les outils de mise à l’échelle automatique suivants : 

- [actions-runner-controller/actions-runner-controller](https://github.com/actions-runner-controller/actions-runner-controller) – Un contrôleur Kubernetes pour les exécuteurs auto-hébergés {% data variables.product.prodname_actions %}.
- [philips-labs/terraform-aws-github-runner](https://github.com/philips-labs/terraform-aws-github-runner) – Un module Terraform pour les exécuteurs {% data variables.product.prodname_actions %} évolutifs sur Amazon Web Services.

Chaque solution comporte certaines spécificités qui peuvent être importantes à prendre en compte :

| **Caractéristiques** | **actions-runner-controller** | **terraform-aws-github-runner** |
| :--- | :--- | :--- |
| Runtime | Kubernetes | Machines virtuelles Linux et Windows |
| Clouds pris en charge | Azure, Amazon Web Services, Google Cloud Platform, localement | Amazon Web Services |
| Emplacements où les exécuteurs peuvent être mis à l’échelle | Au niveau de la grande entreprise, d’une organisation ou d’un dépôt. Selon l’étiquette d’exécuteur et le groupe d’exécuteurs. | Au niveau d’une organisation ou d’un dépôt. Selon l’étiquette d’exécuteur et le groupe d’exécuteurs. |
| Comment les exécuteurs peuvent être mis à l’échelle | Événements webhook, planifiés, basés sur le tirage (pull) | Événements webhook, planifiées (exécuteurs au niveau de l’organisation uniquement) |

## Utilisation d’exécuteurs éphémères pour la mise à l’échelle automatique

{% data variables.product.prodname_dotcom %} recommande d’implémenter la mise à l’échelle automatique avec des exécuteurs auto-hébergés éphémères. La mise à l’échelle automatique avec des exécuteurs auto-hébergés persistants n’est pas recommandée. Dans certains cas, {% data variables.product.prodname_dotcom %} ne peuvent pas garantir que les travaux ne sont pas affectés aux exécuteurs persistants pendant qu’ils sont arrêtés. Avec les exécuteurs éphémères, cela peut être garanti car {% data variables.product.prodname_dotcom %} affecte un seul travail à un exécuteur.

Cette approche vous permet de gérer vos exécuteurs en tant que systèmes éphémères, car vous pouvez utiliser l’automatisation pour fournir un environnement propre pour chaque travail. Cela permet de limiter l’exposition de toutes les ressources sensibles des travaux précédents, et permet également d’atténuer le risque qu’un exécuteur compromis reçoive de nouveaux travaux.  

Pour ajouter un exécuteur éphémère à votre environnement, incluez le paramètre `--ephemeral` lors de l’inscription de votre exécuteur à l’aide de `config.sh`. Par exemple :

```shell
./config.sh --url https://github.com/octo-org --token example-token --ephemeral
```

Le service {% data variables.product.prodname_actions %} désinscrit automatiquement l’exécuteur une fois qu’il a traité un travail. Vous pouvez ensuite créer votre propre automatisation qui efface l’exécuteur une fois qu’il a été désinscrit.

{% note %}

**Remarque :**  Si un travail est étiqueté pour un certain type d’exécuteur, mais qu’aucun exécuteur de ce type n’est disponible, le travail n’échoue pas immédiatement au moment de la mise en file d’attente. Au lieu de cela, le travail reste en file d’attente jusqu’à ce que la période d’expiration de 24 heures expire.

{% endnote %}

{% ifversion fpt or ghec or ghes > 3.4 or ghae %}

## Contrôle des mises à jour logicielles d’exécuteur sur les exécuteurs auto-hébergés

Par défaut, les exécuteurs auto-hébergés effectuent automatiquement une mise à jour logicielle chaque fois qu’une nouvelle version du logiciel d’exécuteur est disponible.  Si vous utilisez des exécuteurs éphémères dans des conteneurs, cela peut entraîner des mises à jour logicielles répétées lorsqu’une nouvelle version de l’exécuteur est publiée.  La désactivation des mises à jour automatiques vous permet de mettre à jour la version de l’exécuteur sur l’image conteneur directement selon votre propre calendrier.

Pour désactiver les mises à jour logicielles automatiques et installer vous-même des mises à jour logicielles, spécifiez l’indicateur `--disableupdate` lors de l’inscription de votre exécuteur à l’aide de `config.sh`. Par exemple :

```shell
./config.sh --url https://github.com/YOUR-ORGANIZATION --token EXAMPLE-TOKEN --disableupdate
```

Si vous désactivez les mises à jour automatiques, vous devez toujours mettre à jour régulièrement votre version d’exécuteur.  Une nouvelle fonctionnalité dans {% data variables.product.prodname_actions %} nécessite des modifications dans le service {% data variables.product.prodname_actions %} _et_ le logiciel d’exécuteur.  L’exécuteur peut ne pas être en mesure de traiter correctement les travaux qui exploitent de nouvelles fonctionnalités dans {% data variables.product.prodname_actions %} sans mise à jour logicielle.

Si vous désactivez les mises à jour automatiques, vous serez tenu de mettre à jour votre version de l’exécuteur dans les 30 jours suivant la mise à disposition d’une nouvelle version.  Vous souhaiterez peut-être vous abonner aux notifications des nouvelles versions dans le [dépôt `actions/runner`](https://github.com/actions/runner/releases). Pour plus d’informations, consultez « [Configuration des notifications](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/configuring-notifications#about-custom-notifications) ».

Pour obtenir des instructions sur la façon d’installer la dernière version de l’exécuteur, consultez les instructions d’installation de [la dernière version](https://github.com/actions/runner/releases).

{% note %}

**Remarque :** Si vous n’effectuez pas de mise à jour logicielle dans les 30 jours, le service {% data variables.product.prodname_actions %} ne met pas en file d’attente les travaux pour votre exécuteur.  En outre, si une mise à jour de sécurité critique est requise, le service {% data variables.product.prodname_actions %} ne met pas en file d’attente les travaux pour votre exécuteur tant qu’il n’a pas été mis à jour.

{% endnote %}

{% endif %}

## Utilisation de webhooks pour la mise à l’échelle automatique

Vous pouvez créer votre propre environnement de mise à l’échelle automatique à l’aide des charges utiles reçues du webhook [`workflow_job`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#workflow_job). Ce webhook est disponible au niveau du dépôt, de l’organisation et de la grande entreprise, et la charge utile de cet événement contient une clé `action` qui correspond aux étapes du cycle de vie d’un travail de workflow. Par exemple, lorsque les travaux sont `queued`, `in_progress` et `completed`. Vous devez ensuite créer votre propre automatisation de mise à l’échelle en réponse à ces charges utiles de webhook.

- Pour plus d’informations sur le webhook `workflow_job`, consultez « [Événements et charges utiles de webhook](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#workflow_job) ».
- Pour savoir comment utiliser des webhooks, consultez « [Création de webhooks](/developers/webhooks-and-events/webhooks/creating-webhooks) ».

## Exigences relatives à l’authentification

Vous pouvez inscrire et supprimer des exécuteurs auto-hébergés de dépôt ou d’organisation à l’aide de [l’API](/rest/reference/actions#self-hosted-runners). Pour vous authentifier auprès de l’API, votre implémentation de mise à l’échelle automatique peut utiliser un jeton d’accès ou une application {% data variables.product.prodname_dotcom %}. 

Votre jeton d’accès nécessite l’étendue suivante :

- Pour les dépôts privés, utilisez un jeton d’accès avec [l’étendue `repo`](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/#available-scopes).
- Pour les dépôts publics, utilisez un jeton d’accès avec [l’étendue `public_repo`](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/#available-scopes).
- Pour les organisations, utilisez un jeton d’accès avec [l’étendue `admin:org`](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/#available-scopes).

Pour vous authentifier à l’aide d’une application {% data variables.product.prodname_dotcom %}, elle doit être affectée des autorisations suivantes :
- Pour les dépôts, attribuez l’autorisation `administration`.
- Pour les organisations, attribuez l’autorisation `organization_self_hosted_runners`.

Vous pouvez inscrire et supprimer des exécuteurs auto-hébergés au niveau de la grande entreprise à l’aide de [l’API](/rest/reference/actions#self-hosted-runners). Pour vous authentifier auprès de l’API, votre implémentation de mise à l’échelle automatique peut utiliser un jeton d’accès.

Votre jeton d’accès nécessite l’étendue `manage_runners:enterprise`.
