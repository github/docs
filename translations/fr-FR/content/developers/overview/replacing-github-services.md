---
title: Remplacement des services GitHub
intro: 'Si vous vous basez toujours sur les services {% data variables.product.prodname_dotcom %} dépréciés, apprenez à migrer vos hooks de service vers des webhooks.'
redirect_from:
  - /guides/replacing-github-services
  - /v3/guides/automating-deployments-to-integrators
  - /v3/guides/replacing-github-services
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - API
ms.openlocfilehash: ddbe9552b1520f2238e531afca06e449ba2f2ff8
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145102806'
---
Nous avons déprécié les services GitHub en faveur de l’intégration des webhooks. Ce guide vous aide à passer des services GitHub aux webhooks. Pour plus d’informations sur cette annonce, consultez le [billet de blog](https://developer.github.com/changes/2018-10-01-denying-new-github-services).

{% note %}

Pour remplacer le service de messagerie, vous pouvez maintenant commencer à utiliser des notifications par e-mail pour les poussées dans votre dépôt. Consultez « [À propos des notifications par e-mail pour les poussées dans votre dépôt](/github/receiving-notifications-about-activity-on-github/about-email-notifications-for-pushes-to-your-repository/) » pour savoir comment configurer les notifications de commit par e-mail.

{% endnote %}

## Chronologie de dépréciation

- **1er octobre 2018** : GitHub a arrêté d’autoriser les utilisateurs à installer des services. Nous avons supprimé les services GitHub de l’interface utilisateur GitHub.com.
- **29 janvier 2019** : pour remplacer le service de messagerie, vous pouvez maintenant commencer à utiliser des notifications par e-mail pour les poussées dans votre dépôt. Consultez « [À propos des notifications par e-mail pour les poussées dans votre dépôt](/github/receiving-notifications-about-activity-on-github/about-email-notifications-for-pushes-to-your-repository/) » pour savoir comment configurer les notifications de commit par e-mail.
- **31 janvier 2019** : GitHub cesse de fournir les événements des services installés sur GitHub.com.

## Arrière-plan des services GitHub

Les services GitHub (parfois appelé « crochets de service ») constituent la méthode héritée d’intégration selon laquelle GitHub hébergeait une partie des services de notre intégrateur dans [le dépôt `github-services`](https://github.com/github/github-services). Les actions effectuées sur GitHub déclenchent ces services, et vous pouvez les utiliser à leur tour pour déclencher des actions en dehors de GitHub.

{% ifversion ghes %}
## Recherche de dépôts qui utilisent des services GitHub
Nous fournissons un script de ligne de commande pour vous permettre d’identifier les dépôts sur votre appliance qui utilisent des services GitHub. Pour plus d’informations, consultez [ghe-legacy-github-services-report](/enterprise/{{currentVersion}}/admin/articles/command-line-utilities/#ghe-legacy-github-services-report). {% endif %}

## Services GitHub et webhooks

Les principales différences entre les services GitHub et les webhooks sont les suivantes :
- **Configuration** : les services GitHub ont des options de configuration propres à chaque service, tandis que les webhooks sont simplement configurés en spécifiant une URL et un ensemble d’événements.
- **Logique personnalisée** : les services GitHub peuvent avoir une logique personnalisée pour répondre avec plusieurs actions dans le cadre du traitement d’un même événement, tandis que les webhooks n’ont pas de logique personnalisée.
- **Types de requêtes** : les services GitHub peuvent effectuer des requêtes HTTP et non-HTTP, tandis que les webhooks peuvent uniquement effectuer des requêtes HTTP.

## Remplacement des services par des webhooks

Pour remplacer les services GitHub par des webhooks :

1. Identifiez les événements de webhook pertinents auxquels vous devez vous abonner dans [cette liste](/webhooks/#events).

2. Changez votre configuration en fonction de votre utilisation actuelle des services GitHub :

   - **Applications GitHub** : mettez à jour les autorisations de votre application et les événements souscrits afin de configurer votre application pour qu’elle reçoive les événements de webhook appropriés.
   - **Applications OAuth** : demandez la ou les étendues `repo_hook` et/ou `org_hook` afin de gérer les événements appropriés pour le compte des utilisateurs.
   - **Fournisseurs de services GitHub** : demandez aux utilisateurs de configurer manuellement un webhook avec les événements appropriés et de vous l’envoyer, ou créez une application pour gérer cette fonctionnalité. Pour plus d’informations, consultez « [À propos des applications](/apps/about-apps/) ».

3. Déplacez une configuration supplémentaire extérieure à GitHub. Certains services GitHub nécessitent une configuration personnalisée supplémentaire dans la page de configuration de GitHub. Si c’est le cas de votre service, vous devez déplacer cette fonctionnalité dans votre application, ou utiliser des applications GitHub ou OAuth en fonction des besoins.

## Prise en charge de {% data variables.product.prodname_ghe_server %}

- **{% data variables.product.prodname_ghe_server %} 2.17** : {% data variables.product.prodname_ghe_server %} version 2.17 et ultérieure n’autorise plus les administrateurs à installer des services. Les administrateurs peuvent encore modifier les crochets de service existants et recevoir des crochets de service dans {% data variables.product.prodname_ghe_server %} version 2.17 à 2.19. Pour remplacer le service de messagerie, vous pouvez utiliser des notifications par e-mail pour les poussées dans votre dépôts dans {% data variables.product.prodname_ghe_server %} 2.17 et versions ultérieures. Consultez [ce billet de blog](https://developer.github.com/changes/2019-01-29-life-after-github-services) pour en savoir plus.
- **{% data variables.product.prodname_ghe_server %} 2.20** : {% data variables.product.prodname_ghe_server %} version 2.20 et ultérieure cesse de remettre l’ensemble des événements des services installés.

La version 2.17 de {% data variables.product.prodname_ghe_server %} est la première version qui n’autorise pas les administrateurs à installer des services GitHub. Nous prenons en charge seulement les services GitHub existants jusqu’à la version 2.20 de {% data variables.product.prodname_ghe_server %}. Nous acceptons également tous les patchs critiques de votre service GitHub s’exécutant sur {% data variables.product.prodname_ghe_server %} jusqu’au 1er octobre 2019.

## Migration avec notre aide

[Contactez-nous](https://github.com/contact?form%5Bsubject%5D=GitHub+Services+Deprecation) si vous avez des questions.

Globalement, le processus de migration implique généralement :
  - Identification d’où est quand votre produit utilise les services GitHub.
  - Identification des événements de webhook correspondants que vous devez configurer pour passer aux webhooks.
  - Implémentation de la conception avec des [{% data variables.product.prodname_oauth_apps %}](/apps/building-oauth-apps/) ou des [{% data variables.product.prodname_github_apps %}. Les {% data variables.product.prodname_github_apps %}](/apps/building-github-apps/) sont préférées. Pour en savoir plus sur la raison pour laquelle les {% data variables.product.prodname_github_apps %} sont préférées, consultez « [Raisons de passer aux {% data variables.product.prodname_github_apps %}](/apps/migrating-oauth-apps-to-github-apps/#reasons-for-switching-to-github-apps) ».
