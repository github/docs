---
title: Migration d’applications OAuth vers des applications GitHub
intro: 'Découvrez les avantages de la migration de votre {% data variables.product.prodname_oauth_app %} vers une {% data variables.product.prodname_github_app %} et comment migrer une {% data variables.product.prodname_oauth_app %} qui n’est pas répertoriée sur {% data variables.product.prodname_marketplace %}. '
redirect_from:
  - /apps/migrating-oauth-apps-to-github-apps
  - /developers/apps/migrating-oauth-apps-to-github-apps
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
shortTitle: Migrate from OAuth Apps
ms.openlocfilehash: 4fea258cc9677401d8212634fdcc04abf22724c9
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147081031'
---
Cet article fournit des instructions aux intégrateurs existants qui envisagent de migrer d’une application OAuth vers une application GitHub.

## Raisons de basculer vers des applications GitHub

Les [applications GitHub](/apps/) constituent le mode d’intégration à GitHub officiellement recommandé, car elles offrent de nombreux avantages par rapport à une intégration OAuth pure :

- Des [autorisations affinées](/apps/differences-between-apps/#requesting-permission-levels-for-resources) ciblent les informations spécifiques auxquelles une application GitHub peut accéder, ce qui permet une utilisation plus large de l’application par les personnes et organisations grâce à des stratégies de sécurité, par rapport aux applications OAuth, qui de leur côté ne peuvent pas être limitées par des autorisations.
- Des [jetons à courte durée de vie](/apps/differences-between-apps/#token-based-identification) fournissent une méthode d’authentification plus sécurisée que les jetons OAuth. Un jeton OAuth n’expire pas tant que la personne qui a autorisé l’application OAuth ne révoque pas le jeton. Les applications GitHub utilisent des jetons qui expirent rapidement, créant ainsi une fenêtre de temps beaucoup plus restreinte pour l’utilisation de jetons compromis.
- Des [webhooks intégrés et centralisés](/apps/differences-between-apps/#webhooks) reçoivent des événements pour tous les dépôts et organisations auxquels l’application peut accéder. À l’inverse, les applications OAuth nécessite la configuration d’un webhook pour chaque dépôt et organisation accessibles à l’utilisateur.
- Les [comptes de bot](/apps/differences-between-apps/#machine-vs-bot-accounts) ne consomment pas de siège {% data variables.product.product_name %} et restent installés même lorsque la personne qui a initialement installé l’application quitte l’organisation.
- La prise en charge intégrée d’OAuth est quand même disponible pour les applications GitHub en utilisant des [points de terminaison utilisateur à serveur](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/).
- Les [limites de débit des API](/apps/building-github-apps/understanding-rate-limits-for-github-apps/) dédiées pour les comptes de bot se mettent à l’échelle avec votre intégration.
- Les propriétaires de dépôts peuvent [installer des applications GitHub](/apps/differences-between-apps/#who-can-install-github-apps-and-authorize-oauth-apps) sur des dépôts d’organisation. Si la configuration d’une application GitHub dispose d’autorisations qui demandent certaines ressources d’une organisation, le propriétaire de l’organisation doit approuver l’installation.
- Un support de la communauté open source est disponible par le biais de [bibliothèques Octokit](/rest/overview/libraries) et d’autres frameworks comme [Probot](https://probot.github.io/).
- Les intégrateurs qui créent des applications GitHub ont la possibilité d’adopter un accès plus précoce aux API.

## Conversion d’une application OAuth en application GitHub

Ces instructions partent du principe que vous disposez d’une application OAuth inscrite{% ifversion fpt or ghec %} listée ou non sur la Place de marché GitHub{% endif %}. En règle générale, vous avez besoin de suivre ces étapes :

1. [Passer en revue les points de terminaison d’API disponibles pour les applications GitHub](#review-the-available-api-endpoints-for-github-apps)
1. [Concevoir le maintien dans les limites de débit des API](#design-to-stay-within-api-rate-limits)
1. [Inscrire une nouvelle application GitHub](#register-a-new-github-app)
1. [Déterminer les autorisations exigées par votre application](#determine-the-permissions-your-app-requires)
1. [S’abonner à des webhooks](#subscribe-to-webhooks)
1. [Comprendre les différents méthodes d’authentification](#understand-the-different-methods-of-authentication)
1. [Inviter des utilisateurs à installer votre application GitHub sur des dépôts](#direct-users-to-install-your-github-app-on-repositories)
1. [Supprimer tous les hooks de dépôt inutiles](#remove-any-unnecessary-repository-hooks)
1. [Encourager les utilisateurs à révoquer l’accès à votre application OAuth](#encourage-users-to-revoke-access-to-your-oauth-app)
1. [Supprimer l’application OAuth](#delete-the-oauth-app)

### Passer en revue les points de terminaison d’API disponibles pour les applications GitHub

Bien que la majorité des points de terminaison d’[API REST](/rest) et des requêtes [GraphQL](/graphql) soient aujourd’hui disponibles pour les applications GitHub, nous sommes encore en train d’activer certains points de terminaison. Passez en revue les [points de terminaison REST disponibles](/rest/overview/endpoints-available-for-github-apps) pour vérifier que ceux dont vous avez besoin sont compatibles avec les applications GitHub. Notez que certains points de terminaison d’API activés pour les applications GitHub permettent à l’application d’agir au nom de l’utilisateur. Consultez « [Requêtes utilisateur à serveur](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#user-to-server-requests) » pour obtenir la liste des points de terminaison qui permettent à une application GitHub de s’authentifier en tant qu’utilisateur.

Nous vous recommandons de parcourir la liste des points de terminaison d’API dont vous avez besoin le plus tôt possible. Indiquez au support s’il existe un point de terminaison dont vous avez besoin qui n’est pas encore activé pour {% data variables.product.prodname_github_apps %}.

### Concevoir le maintien dans les limites de débit des API

Les applications GitHub utilisent des [règles pour les limites de débit](/apps/building-github-apps/understanding-rate-limits-for-github-apps/) qui peuvent augmenter en fonction du nombre de dépôts et d’utilisateurs dans l’organisation. Une application GitHub peut également utiliser des [requêtes conditionnelles](/rest/overview/resources-in-the-rest-api#conditional-requests) ou regrouper des requêtes à l’aide de l’[API GraphQL](/graphql).

### Inscrire une nouvelle application GitHub

Une fois que vous avez pris la décision de passer à des applications GitHub, vous avez besoin de [créer une application GitHub](/apps/building-github-apps/).

### Déterminer les autorisations exigées par votre application

Quand vous inscrivez votre application GitHub, vous avez besoin de sélectionner les autorisations exigées par chaque point de terminaison utilisé dans le code de votre application. Consultez « [Autorisations d’une application GitHub](/rest/reference/permissions-required-for-github-apps) » pour obtenir la liste des autorisations nécessaires pour chaque point de terminaison disponible pour les applications GitHub.

Dans les paramètres de votre application GitHub, vous pouvez spécifier si votre application a besoin d’un accès `No Access`, `Read-only` ou `Read & Write` pour chaque type d’autorisation. Les autorisations affinées permettent à votre application d’obtenir un accès ciblé au sous-ensemble de données dont vous avez besoin. Nous vous recommandons de spécifier le plus petit ensemble d’autorisations possible pour fournir les fonctionnalités souhaitées.

### S’abonner à des webhooks

Une fois que vous avez créé une application GitHub et sélectionné ses autorisations, vous pouvez sélectionner les événements de webhook auxquels vous voulez vous abonner. Consultez « [Modification des autorisations d’une application GitHub](/apps/managing-github-apps/editing-a-github-app-s-permissions/) » pour découvrir comment vous abonner à des webhooks.

### Comprendre les différents méthodes d’authentification

Les applications GitHub utilisent principalement une authentification basée sur un jeton qui expire dans un bref délai, afin de fournir un niveau de sécurité plus élevé qu’un jeton OAuth qui n’expire jamais. Il est important de comprendre les différentes méthodes d’authentification à votre disposition et de savoir quand les utiliser :

* Un jeton **JSON Web Token (JWT)** [s’authentifie en tant qu’application GitHub](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app). Par exemple, vous pouvez vous authentifier avec un **JWT** pour extraire les détails d’installation de l’application ou échanger le **JWT** avec un **jeton d’accès d’installation**.
* Un **jeton d’accès d’installation** [s’authentifie en tant qu’installation spécifique de votre application GitHub](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation) (également appelées requêtes serveur à serveur). Par exemple, vous pouvez vous authentifier avec un **jeton d’accès d’installation** pour ouvrir un problème ou fournir des commentaires sur une demande de tirage (pull request).
* Un **jeton d’accès OAuth** peut [s’authentifier en tant qu’utilisateur de votre application GitHub](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#identifying-users-on-your-site) (également appelé requêtes utilisateur à serveur). Par exemple, vous pouvez utiliser un jeton d’accès OAuth pour vous authentifier en tant qu’utilisateur quand une application GitHub a besoin de vérifier l’identité d’un utilisateur ou d’agir en son nom.

Le scénario le plus courant consiste à s’authentifier en tant qu’installation spécifique à l’aide d’un **jeton d’accès d’installation**.

### Inviter des utilisateurs à installer votre application GitHub sur des dépôts

Une fois que vous avez effectué la transition d’une application OAuth vers une application GitHub, vous avez besoin d’informer des utilisateurs que l’application GitHub est disponible à l’installation. Par exemple, vous pouvez inclure un lien d’installation de l’application GitHub dans une bannière d’invite à l’action à l’intérieur de votre application. Pour faciliter la transition, vous pouvez utiliser des paramètres de requête pour identifier le compte d’utilisateur ou d’organisation qui parcourt le flux d’installation de votre application GitHub et pré-sélectionner tous les dépôts auxquels votre application OAuth avait accès. Ainsi, les utilisateurs peuvent facilement installer votre application GitHub sur les dépôts auxquels vous avez déjà accès.

#### Paramètres de requête

| Nom | Description |
|------|-------------|
| `suggested_target_id` | **Obligatoire** : ID de l’utilisateur ou de l’organisation qui installe votre application GitHub. |
| `repository_ids[]` | Tableau des ID de dépôt. En cas d’omission, nous sélectionnons tous les dépôts. Le nombre maximal de dépôts pouvant être pré-sélectionnés s’élève à 100. |

#### Exemple d’URL
```
https://github.com/apps/YOUR_APP_NAME/installations/new/permissions?suggested_target_id=ID_OF_USER_OR_ORG&repository_ids[]=REPO_A_ID&repository_ids[]=REPO_B_ID
```

Vous avez besoin de remplacer `YOUR_APP_NAME` par le nom de votre application GitHub, `ID_OF_USER_OR_ORG` par l’ID de votre utilisateur ou organisation cible et d’inclure jusqu’à 100 ID de dépôt (`REPO_A_ID`et `REPO_B_ID`). Pour obtenir la liste des dépôts auxquels votre application OAuth a accès, utilisez les points de terminaison [Lister les dépôts de l’utilisateur authentifié](/rest/reference/repos#list-repositories-for-the-authenticated-user) et [Lister les dépôts d’une organisation](/rest/reference/repos#list-organization-repositories).

### Supprimer tous les hooks de dépôt inutiles

Une fois que votre application GitHub a été installée sur un dépôt, vous devez supprimer tous les webhooks inutiles qui ont été créés par votre application OAuth héritée. Si les deux applications sont installées sur un dépôt, des fonctionnalités risquent d’être dupliquées pour l’utilisateur. Pour supprimer des webhooks, vous pouvez écouter le [webhook `installation_repositories`](/webhooks/event-payloads/#installation_repositories) avec l’action `repositories_added` et [Supprimer un webhook de dépôt](/rest/reference/webhooks#delete-a-repository-webhook) sur ces dépôts créés par votre application OAuth.

### Encourager les utilisateurs à révoquer l’accès à votre application OAuth

Au fur et à mesure que la base d’installation de votre application GitHub augmente, envisagez d’encourager vos utilisateurs à révoquer l’accès à l’intégration OAuth héritée. Pour plus d’informations, consultez « [Autorisation des applications OAuth](/github/authenticating-to-github/keeping-your-account-and-data-secure/authorizing-oauth-apps) ».

### Supprimer l’application OAuth

Pour éviter toute violation des informations d’identification de l’application OAuth, envisagez de la supprimer. Cette action révoque aussi toutes les autorisations restantes de l’application OAuth. Pour plus d’informations, consultez « [Suppression d’une application OAuth](/developers/apps/managing-oauth-apps/deleting-an-oauth-app) ».
