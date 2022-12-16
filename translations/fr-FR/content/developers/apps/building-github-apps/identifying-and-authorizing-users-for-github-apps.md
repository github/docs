---
title: Identification et autorisation des utilisateurs pour les applications GitHub
intro: '{% data reusables.shortdesc.identifying_and_authorizing_github_apps %}'
redirect_from:
  - /early-access/integrations/user-identification-authorization
  - /apps/building-integrations/setting-up-and-registering-github-apps/identifying-users-for-github-apps
  - /apps/building-github-apps/identifying-and-authorizing-users-for-github-apps
  - /developers/apps/identifying-and-authorizing-users-for-github-apps
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
shortTitle: Identify & authorize users
ms.openlocfilehash: 302e7a25931c3af2957dae7a67e0ca080fc5bd50
ms.sourcegitcommit: f54d01e643f994ce48f0774dbc680ad77dd6193f
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/10/2022
ms.locfileid: '148160579'
---
{% data reusables.pre-release-program.expiring-user-access-tokens %}

Quand votre application GitHub agit au nom d’un utilisateur, elle effectue des requêtes utilisateur à serveur. Ces requêtes doivent être autorisées à l’aide du jeton d’accès d’un utilisateur. Les requêtes utilisateur à serveur incluent la demande de données pour un utilisateur, par exemple l’identification des dépôts à afficher pour un utilisateur particulier. Ces requêtes incluent également les actions déclenchées par un utilisateur, par exemple l’exécution d’une build.

{% data reusables.apps.expiring_user_authorization_tokens %}

## Identification des utilisateurs sur votre site

Pour autoriser les utilisateurs des applications standard qui s’exécutent dans le navigateur, utilisez le [flux d’application web](#web-application-flow).

Pour autoriser les utilisateurs à accéder aux applications sans périphérique de contrôle et sans accès direct au navigateur, par exemple les outils CLI ou les gestionnaires d’informations d’identification Git, utilisez le [flux d’appareil](#device-flow). Le flux d’appareil utilise le [type d’autorisation d’appareil](https://tools.ietf.org/html/rfc8628) OAuth 2.0.

## Flux d’application web

Avec le flux d’application web, le processus d’identification des utilisateurs sur votre site est le suivant :

1. Les utilisateurs sont redirigés pour fournir leur identité GitHub
2. Les utilisateurs sont redirigés vers votre site par GitHub
3. Votre application GitHub accède à l’API avec le jeton d’accès de l’utilisateur

Si vous sélectionnez **Demander l’autorisation utilisateur (OAuth) durant l’installation** au moment de la création ou de la modification de votre application, l’étape 1 est effectuée durant l’installation de l’application. Pour plus d’informations, consultez « [Autorisation des utilisateurs durant l’installation](/apps/installing-github-apps/#authorizing-users-during-installation) ».

### 1. Demander l’identité GitHub d’un utilisateur
Redirigez l’utilisateur vers l’URL suivante dans son navigateur :

    GET {% data variables.product.oauth_host_code %}/login/oauth/authorize

Quand votre application GitHub spécifie un paramètre `login`, elle invite les utilisateurs à indiquer un compte spécifique qui leur permettra de se connecter et d’autoriser votre application.

#### Paramètres

Nom | Type | Description
-----|------|------------
`client_id` | `string` | **Obligatoire.** ID client de votre application GitHub. Vous pouvez le trouver dans les [Paramètres d’application GitHub](https://github.com/settings/apps) quand vous sélectionnez votre application. **Remarque :** L’ID d’application et l’ID client ne sont pas les mêmes, et ne sont pas interchangeables.
`redirect_uri` | `string` | URL de votre application où les utilisateurs sont redirigés après l’autorisation. Elle doit correspondre exactement à {% ifversion fpt or ghes or ghec %} l’une des URL que vous avez fournies en tant qu’**URL de rappel** {% else %} l’URL que vous avez fournie dans le champ **URL de rappel d’autorisation utilisateur**{% endif %} au moment de la configuration de votre application GitHub, et ne peut contenir aucun paramètre supplémentaire.
`state` | `string` | Doit contenir une chaîne aléatoire pour la protection contre les attaques par falsification et peut contenir d’autres données arbitraires.
`login` | `string` | Suggère un compte spécifique à utiliser pour la connexion et l’autorisation de l’application.
`allow_signup` | `string` | Indique si les utilisateurs non authentifiés se voient offrir ou non la possibilité de s’inscrire à {% data variables.product.prodname_dotcom %} durant le flux OAuth. Par défaut, il s’agit de `true`. Utilisez `false` quand une stratégie interdit les inscriptions.

{% note %}

**Remarque :** Vous n’avez pas besoin de fournir d’étendues dans votre demande d’autorisation. Contrairement au protocole OAuth classique, le jeton d’autorisation est limité aux autorisations associées à votre application GitHub et à celles de l’utilisateur.

{% endnote %}

### 2. Les utilisateurs sont redirigés vers votre site par GitHub

Si l’utilisateur accepte votre requête, GitHub effectue une redirection vers votre site avec un `code` temporaire dans un paramètre de code ainsi que l’état que vous avez fourni à l’étape précédente dans un paramètre `state`. Si les états ne correspondent pas, cela signifie que la requête a été créée par un tiers et que le processus doit être abandonné.

{% note %}

**Remarque :** Si vous sélectionnez **Demander l’autorisation utilisateur (OAuth) durant l’installation** au moment de la création ou de la modification de votre application, GitHub retourne un `code` temporaire que vous devez échanger contre un jeton d’accès. Le paramètre `state` n’est pas retourné quand GitHub lance le flux OAuth durant l’installation de l’application.

{% endnote %}

Échangez ce `code` contre un jeton d’accès.  Quand les jetons ayant un délai d’expiration sont activés, le jeton d’accès expire après 8 heures, et le jeton d’actualisation 6 mois. Chaque fois que vous actualisez le jeton, vous obtenez un nouveau jeton d’actualisation. Pour plus d’informations, consultez « [Actualisation des jetons d’accès utilisateur à serveur](/developers/apps/refreshing-user-to-server-access-tokens) ».

Les jetons d’accès utilisateur ayant un délai d’expiration sont une fonctionnalité facultative et sujette à changement. Pour activer la fonctionnalité d’expiration des jetons d’accès utilisateur à serveur, consultez « [Activation des fonctionnalités facultatives pour les applications](/developers/apps/activating-optional-features-for-apps) ».

Envoyez une requête au point de terminaison suivant pour recevoir un jeton d’accès :

    POST {% data variables.product.oauth_host_code %}/login/oauth/access_token

#### Paramètres

Nom | Type | Description
-----|------|------------
`client_id` | `string` | **Obligatoire.** ID client de votre application GitHub.
`client_secret` | `string`   | **Obligatoire.** Secret client de votre application GitHub.
`code` | `string`   | **Obligatoire.** Code que vous avez reçu en réponse à l’étape 1.
`redirect_uri` | `string` | URL de votre application où les utilisateurs sont redirigés après l’autorisation. Elle doit correspondre exactement à {% ifversion fpt or ghes or ghec %} l’une des URL que vous avez fournies en tant qu’**URL de rappel** {% else %} l’URL que vous avez fournie dans le champ **URL de rappel d’autorisation utilisateur**{% endif %} au moment de la configuration de votre application GitHub, et ne peut contenir aucun paramètre supplémentaire.

#### response

Par défaut, la réponse prend la forme suivante. Les paramètres de réponse `expires_in`, `refresh_token` et `refresh_token_expires_in` sont retournés uniquement quand vous activez les jetons d’accès utilisateur à serveur ayant un délai d’expiration.

```json
{
  "access_token": "ghu_16C7e42F292c6912E7710c838347Ae178B4a",
  "expires_in": 28800,
  "refresh_token": "ghr_1B4a2e77838347a7E420ce178F2E7c6912E169246c34E1ccbF66C46812d16D5B1A9Dc86A1498",
  "refresh_token_expires_in": 15811200,
  "scope": "",
  "token_type": "bearer"
}
```

### 3. Votre application GitHub accède à l’API avec le jeton d’accès de l’utilisateur

Le jeton d’accès de l’utilisateur permet à l’application GitHub d’effectuer des requêtes auprès de l’API au nom d’un utilisateur.

    Authorization: Bearer OAUTH-TOKEN
    GET {% data variables.product.api_url_code %}/user

Par exemple, avec curl, vous pouvez définir l’en-tête d’autorisation comme ceci :

```shell
curl -H "Authorization: Bearer OAUTH-TOKEN" {% data variables.product.api_url_pre %}/user
```

## Flux d’appareil

{% note %}

**Remarque :** Le flux d’appareil est en version bêta publique et est susceptible de changer.

{% endnote %}

Le flux d’appareil vous permet d’autoriser des utilisateurs pour une application sans périphérique de contrôle, par exemple un outil CLI ou un gestionnaire d’informations d’identification Git.

{% ifversion device-flow-is-opt-in %}Avant de pouvoir utiliser le flux d’appareil pour identifier et autoriser des utilisateurs, vous devez d’abord l’activer dans les paramètres de votre application. Pour plus d’informations sur l’activation du flux d’appareil, consultez « [Modification d’une application GitHub](/developers/apps/managing-github-apps/modifying-a-github-app) ». {% endif %}Pour plus d’informations sur l’autorisation des utilisateurs à l’aide du flux d’appareil, consultez « [Autorisation des applications OAuth](/developers/apps/authorizing-oauth-apps#device-flow) ».

## Vérifier les ressources de l’installation auxquelles un utilisateur peut accéder

Une fois que vous disposez d’un jeton OAuth pour un utilisateur, vous pouvez vérifier les installations auxquelles cet utilisateur peut accéder.

    Authorization: Bearer OAUTH-TOKEN
    GET /user/installations

Vous pouvez également vérifier quels sont les dépôts accessibles à un utilisateur pour une installation.

    Authorization: Bearer OAUTH-TOKEN
    GET /user/installations/:installation_id/repositories

Pour plus d’informations, consultez [Lister les installations d’applications accessibles au jeton d’accès utilisateur](/rest/apps#list-app-installations-accessible-to-the-user-access-token) et [Lister les dépôts accessibles au jeton d’accès utilisateur](/rest/apps#list-repositories-accessible-to-the-user-access-token).

## Gestion d’une autorisation d’application GitHub révoquée

Si un utilisateur révoque son autorisation pour une application GitHub, l’application reçoit le webhook [`github_app_authorization`](/webhooks/event-payloads/#github_app_authorization) par défaut. Les applications GitHub ne peuvent pas se désabonner de cet événement. {% data reusables.webhooks.authorization_event %}

## Autorisations au niveau de l’utilisateur

Vous pouvez ajouter des autorisations au niveau de l’utilisateur à votre application GitHub pour accéder aux ressources utilisateur (par exemple les e-mails des utilisateurs). Ces autorisations sont octroyées par des utilisateurs individuels dans le cadre du [flux d’autorisation utilisateur](#identifying-users-on-your-site). Les autorisations au niveau de l’utilisateur diffèrent des [autorisations au niveau du dépôt et de l’organisation](/rest/overview/permissions-required-for-github-apps), qui sont octroyées au moment de l’installation dans un compte d’organisation ou personnel.

Vous pouvez sélectionner des autorisations au niveau de l’utilisateur dans les paramètres de votre application GitHub, dans la section **Autorisations utilisateur** de la page **Autorisations et webhooks**. Pour plus d’informations sur la sélection des autorisations, consultez « [Modification des autorisations d’une application GitHub](/apps/managing-github-apps/editing-a-github-app-s-permissions/) ».

Quand un utilisateur installe votre application dans son compte, l’invite d’installation liste les autorisations au niveau de l’utilisateur demandées par votre application, et explique que l’application peut demander ces autorisations à des utilisateurs individuels.

Dans la mesure où les autorisations au niveau de l’utilisateur sont octroyées individuellement, vous pouvez les ajouter à votre application existante sans demander aux utilisateurs d’effectuer une mise à niveau. Toutefois, vous devez faire passer les utilisateurs existants par le flux d’autorisation utilisateur afin d’activer la nouvelle autorisation, et d’obtenir un nouveau jeton utilisateur à serveur pour ces requêtes.

## Requêtes utilisateur à serveur

Bien que la majeure partie des interactions de votre API doive se produire via des jetons d’accès d’installation serveur à serveur, certains points de terminaison vous permettent d’effectuer des actions via l’API à l’aide d’un jeton d’accès utilisateur. Votre application peut effectuer les requêtes suivantes à l’aide des points de terminaison [GraphQL](/graphql) ou [REST](/rest).

### Points de terminaison pris en charge

{% ifversion fpt or ghec %}
#### Exécuteurs Actions

* [Lister les exécuteurs d’un dépôt](/rest/actions#list-runner-applications-for-a-repository)
* [Lister les exécuteurs autohébergés d’un dépôt](/rest/actions#list-self-hosted-runners-for-a-repository)
* [Obtenir l’exécuteur autohébergé d’un dépôt](/rest/actions#get-a-self-hosted-runner-for-a-repository)
* [Supprimer l’exécuteur autohébergé d’un dépôt](/rest/actions#delete-a-self-hosted-runner-from-a-repository)
* [Créer un jeton d’inscription pour un dépôt](/rest/actions#create-a-registration-token-for-a-repository)
* [Créer un jeton de suppression pour un dépôt](/rest/actions#create-a-remove-token-for-a-repository)
* [Lister les exécuteurs d’une organisation](/rest/actions#list-runner-applications-for-an-organization)
* [Lister les exécuteurs autohébergés d’une organisation](/rest/actions#list-self-hosted-runners-for-an-organization)
* [Obtenir l’exécuteur autohébergé d’une organisation](/rest/actions#get-a-self-hosted-runner-for-an-organization)
* [Supprimer l’exécuteur autohébergé d’une organisation](/rest/actions#delete-a-self-hosted-runner-from-an-organization)
* [Créer un jeton d’inscription pour une organisation](/rest/actions#create-a-registration-token-for-an-organization)
* [Créer un jeton de suppression pour une organisation](/rest/actions#create-a-remove-token-for-an-organization)

#### Secrets Actions

* [Obtenir une clé publique de dépôt](/rest/actions#get-a-repository-public-key)
* [Lister les secrets d’un dépôt](/rest/actions#list-repository-secrets)
* [Obtenir un secret de dépôt](/rest/actions#get-a-repository-secret)
* [Créer ou mettre à jour un secret de dépôt](/rest/actions#create-or-update-a-repository-secret)
* [Supprimer un secret de dépôt](/rest/actions#delete-a-repository-secret)
* [Obtenir une clé publique d’organisation](/rest/actions#get-an-organization-public-key)
* [Lister les secrets de l’organisation](/rest/actions#list-organization-secrets)
* [Obtenir un secret d’organisation](/rest/actions#get-an-organization-secret)
* [Créer ou mettre à jour un secret d’organisation](/rest/actions#create-or-update-an-organization-secret)
* [Lister les dépôts sélectionnés pour un secret d’organisation](/rest/actions#list-selected-repositories-for-an-organization-secret)
* [Définir les dépôts sélectionnés pour un secret d’organisation](/rest/actions#set-selected-repositories-for-an-organization-secret)
* [Ajouter le dépôt sélectionné à un secret d’organisation](/rest/actions#add-selected-repository-to-an-organization-secret)
* [Supprimer le dépôt sélectionné d’un secret d’organisation](/rest/actions#remove-selected-repository-from-an-organization-secret)
* [Supprimer un secret d’organisation](/rest/actions#delete-an-organization-secret) {% endif %}

{% ifversion fpt or ghec %}
#### Artifacts

* [Lister les artefacts d’un dépôt](/rest/actions#list-artifacts-for-a-repository)
* [Lister les artefacts d’exécution de workflow](/rest/actions#list-workflow-run-artifacts)
* [Obtenir un artefact](/rest/actions#get-an-artifact)
* [Supprimer un artefact](/rest/actions#delete-an-artifact)
* [Télécharger un artefact](/rest/actions#download-an-artifact) {% endif %}

#### Exécutions de vérifications

* [Créer une exécution de vérifications](/rest/checks#create-a-check-run)
* [Obtenir une exécution de vérifications](/rest/checks#get-a-check-run)
* [Mettre à jour une exécution de vérifications](/rest/checks#update-a-check-run)
* [Lister les annotations d’exécution de vérifications](/rest/checks#list-check-run-annotations)
* [Lister les exécutions de vérifications dans une suite de vérifications](/rest/checks#list-check-runs-in-a-check-suite)
* [Lister les exécutions de vérifications pour une référence Git](/rest/checks#list-check-runs-for-a-git-reference)

#### Suites de vérifications

* [Créer une suite de vérifications](/rest/checks#create-a-check-suite)
* [Obtenir une suite de vérifications](/rest/checks#get-a-check-suite)
* [Redemander une suite de vérifications](/rest/checks#rerequest-a-check-suite)
* [Mettre à jour les préférences du dépôt pour les suites de vérifications](/rest/checks#update-repository-preferences-for-check-suites)
* [Lister les suite de vérifications pour une référence Git](/rest/checks#list-check-suites-for-a-git-reference)

#### Codes de conduite

* [Obtenir tous les codes de conduite](/rest/codes-of-conduct#get-all-codes-of-conduct)
* [Obtenir un code de conduite](/rest/codes-of-conduct#get-a-code-of-conduct)

#### États de déploiement

* [Lister les états de déploiement](/rest/deployments#list-deployment-statuses)
* [Créer un état de déploiement](/rest/deployments#create-a-deployment-status)
* [Obtenir un état de déploiement](/rest/deployments#get-a-deployment-status)

#### Déploiements

* [Lister les déploiements](/rest/deployments#list-deployments)
* [Créer un déploiement](/rest/deployments#create-a-deployment)
* [Obtenir un déploiement](/rest/deployments#get-a-deployment)
* [Supprimer un déploiement](/rest/deployments#delete-a-deployment)

#### Événements

* [Lister les événements publics d’un réseau de dépôts](/rest/activity#list-public-events-for-a-network-of-repositories)
* [Lister les événements d’organisation publics](/rest/activity#list-public-organization-events)

#### Flux

* [Obtenir des flux](/rest/activity#get-feeds)

#### Objets blob Git

* [Créer un objet blob](/rest/git#create-a-blob)
* [Obtenir un objet blob](/rest/git#get-a-blob)

#### Validations Git

* [Créer un commit](/rest/git#create-a-commit)
* [Obtenir un commit](/rest/git#get-a-commit)

#### Références Git

* [Créer une référence](/rest/git#create-a-reference)
* [Obtenir une référence](/rest/git#get-a-reference)
* [Lister les références correspondantes](/rest/git#list-matching-references)
* [Mettre à jour une référence](/rest/git#update-a-reference)
* [Supprimer une référence](/rest/git#delete-a-reference)

#### Étiquettes Git

* [Créer un objet d’étiquette](/rest/git#create-a-tag-object)
* [Obtenir une balise](/rest/git#get-a-tag)

#### Arborescences Git

* [Créer une arborescence](/rest/git#create-a-tree)
* [Obtenir une arborescence](/rest/git#get-a-tree)

#### Modèles gitignore

* [Obtenir tous les modèles gitignore](/rest/gitignore#get-all-gitignore-templates)
* [Obtenir un modèle gitignore](/rest/gitignore#get-a-gitignore-template)

#### Installations

* [Lister les dépôts accessibles au jeton d’accès utilisateur](/rest/apps#list-repositories-accessible-to-the-user-access-token)

{% ifversion fpt or ghec %}
#### Limites d’interaction

* [Obtenir les restrictions d’interaction pour une organisation](/rest/interactions#get-interaction-restrictions-for-an-organization)
* [Définir les restrictions d’interaction pour une organisation](/rest/interactions#set-interaction-restrictions-for-an-organization)
* [Supprimer les restrictions d’interaction pour une organisation](/rest/interactions#remove-interaction-restrictions-for-an-organization)
* [Obtenir les restrictions d’interaction pour un dépôt](/rest/interactions#get-interaction-restrictions-for-a-repository)
* [Définir les restrictions d’interaction pour un dépôt](/rest/interactions#set-interaction-restrictions-for-a-repository)
* [Supprimer les restrictions d’interaction pour un dépôt](/rest/interactions#remove-interaction-restrictions-for-a-repository) {% endif %}

#### Personnes responsables d’un problème

* [Ajouter les personnes responsables à un problème](/rest/issues#add-assignees-to-an-issue)
* [Supprimer les personnes responsables d’un problème](/rest/issues#remove-assignees-from-an-issue)

#### Commentaires de problème

* [Lister les commentaires de problème](/rest/issues#list-issue-comments)
* [Créer un commentaire de problème](/rest/issues#create-an-issue-comment)
* [Lister les commentaires de problème pour un dépôt](/rest/issues#list-issue-comments-for-a-repository)
* [Obtenir un commentaire de problème](/rest/issues#get-an-issue-comment)
* [Mettre à jour un commentaire de problème](/rest/issues#update-an-issue-comment)
* [Supprimer un commentaire de problème](/rest/issues#delete-an-issue-comment)

#### Événements de problème

* [Lister les événement de problème](/rest/issues#list-issue-events)

#### Chronologie de problème

* [Lister les événements de la chronologie d’un problème](/rest/issues#list-timeline-events-for-an-issue)

#### Problèmes

* [Lister les problèmes affectés à l’utilisateur authentifié](/rest/issues#list-issues-assigned-to-the-authenticated-user)
* [Lister les personnes responsables](/rest/issues#list-assignees)
* [Vérifier si un utilisateur peut être affecté](/rest/issues#check-if-a-user-can-be-assigned)
* [Lister les problèmes d’un dépôt](/rest/issues#list-repository-issues)
* [Créer un problème](/rest/issues#create-an-issue)
* [Obtenir un problème](/rest/issues#get-an-issue)
* [Mettre à jour un problème](/rest/issues#update-an-issue)
* [Verrouiller un problème](/rest/issues#lock-an-issue)
* [Déverrouiller un problème](/rest/issues#unlock-an-issue)

{% ifversion fpt or ghec %}
#### travaux

* [Obtenir un travail pour une exécution de workflow](/rest/actions#get-a-job-for-a-workflow-run)
* [Télécharger les journaux de travail pour une exécution de workflow](/rest/actions#download-job-logs-for-a-workflow-run)
* [Lister les travaux d’une exécution de workflow](/rest/actions#list-jobs-for-a-workflow-run) {% endif %}

#### Étiquettes

* [Lister les étiquettes d’un problème](/rest/issues#list-labels-for-an-issue)
* [Ajouter des étiquettes à un problème](/rest/issues#add-labels-to-an-issue)
* [Définir les étiquettes d’un problème](/rest/issues#set-labels-for-an-issue)
* [Supprimer toutes les étiquettes d’un problème](/rest/issues#remove-all-labels-from-an-issue)
* [Supprimer une étiquette d’un problème](/rest/issues#remove-a-label-from-an-issue)
* [Lister les étiquettes d’un dépôt](/rest/issues#list-labels-for-a-repository)
* [Créer une étiquette](/rest/issues#create-a-label)
* [Obtenir une étiquette](/rest/issues#get-a-label)
* [Mettre à jour une étiquette](/rest/issues#update-a-label)
* [Supprimer une étiquette](/rest/issues#delete-a-label)
* [Obtenir les étiquettes de chaque problème dans un jalon](/rest/issues#list-labels-for-issues-in-a-milestone)

#### Licences

* [Obtenir toutes les licences couramment utilisées](/rest/licenses#get-all-commonly-used-licenses)
* [Obtenir une licence](/rest/licenses#get-a-license)

#### Markdown

* [Afficher un document Markdown](/rest/markdown#render-a-markdown-document)
* [Afficher un document Markdown en mode brut](/rest/markdown#render-a-markdown-document-in-raw-mode)

#### Meta

* [Méta](/rest/meta#meta)

#### Étapes majeures

* [Lister les jalons](/rest/issues#list-milestones)
* [Créer un jalon](/rest/issues#create-a-milestone)
* [Obtenir un jalon](/rest/issues#get-a-milestone)
* [Mettre à jour un jalon](/rest/issues#update-a-milestone)
* [Supprimer un jalon](/rest/issues#delete-a-milestone)

#### Crochets d’organisation

* [Lister les webhooks d’organisation](/rest/orgs#webhooks/#list-organization-webhooks)
* [Créer un webhook d’organisation](/rest/orgs#webhooks/#create-an-organization-webhook)
* [Obtenir un webhook d’organisation](/rest/orgs#webhooks/#get-an-organization-webhook)
* [Mettre à jour un webhook d’organisation](/rest/orgs#webhooks/#update-an-organization-webhook)
* [Supprimer un webhook d’organisation](/rest/orgs#webhooks/#delete-an-organization-webhook)
* [Effectuer un test ping sur un webhook d’organisation](/rest/orgs#webhooks/#ping-an-organization-webhook)

{% ifversion fpt or ghec %}
#### Invitations à rejoindre une organisation

* [Lister les invitations à rejoindre une organisation en attente](/rest/orgs#list-pending-organization-invitations)
* [Créer une invitation à rejoindre une organisation](/rest/orgs#create-an-organization-invitation)
* [Lister les équipes associées à une invitation à rejoindre une organisation](/rest/orgs#list-organization-invitation-teams) {% endif %}

#### Membres de l’organisation

* [Lister les membres de l’organisation](/rest/orgs#list-organization-members)
* [Vérifier l’état de l’appartenance d’un utilisateur à une organisation](/rest/orgs#check-organization-membership-for-a-user)
* [Supprimer un membre de l’organisation](/rest/orgs#remove-an-organization-member)
* [Obtenir l’état de l’appartenance d’un utilisateur à une organisation](/rest/orgs#get-organization-membership-for-a-user)
* [Définir l’état de l’appartenance d’un utilisateur à une organisation](/rest/orgs#set-organization-membership-for-a-user)
* [Supprimer l’appartenance d’un utilisateur à une organisation](/rest/orgs#remove-organization-membership-for-a-user)
* [Lister les membres publics de l’organisation](/rest/orgs#list-public-organization-members)
* [Vérifier si l’appartenance d’un utilisateur à une organisation est publique](/rest/orgs#check-public-organization-membership-for-a-user)
* [Définir l’appartenance de l’utilisateur authentifié à une organisation comme étant publique](/rest/orgs#set-public-organization-membership-for-the-authenticated-user)
* [Supprimer l’appartenance publique de l’utilisateur authentifié à une organisation](/rest/orgs#remove-public-organization-membership-for-the-authenticated-user)

#### Collaborateurs externes de l’organisation

* [Lister les collaborateurs externes d’une organisation](/rest/orgs#list-outside-collaborators-for-an-organization)
* [Convertir un membre de l’organisation en collaborateur externe](/rest/orgs#convert-an-organization-member-to-outside-collaborator)
* [Supprimer un collaborateur externe d’une organisation](/rest/orgs#remove-outside-collaborator-from-an-organization)

{% ifversion ghes %}
#### Crochets de préréception d’une organisation

* [Lister les crochets de préréception d’une organisation](/enterprise/user/rest/reference/enterprise-admin#list-pre-receive-hooks-for-an-organization)
* [Obtenir un crochet de préréception pour une organisation](/enterprise/user/rest/reference/enterprise-admin#get-a-pre-receive-hook-for-an-organization)
* [Mettre à jour l’application d’un crochet de préréception pour une organisation](/enterprise/user/rest/reference/enterprise-admin#update-pre-receive-hook-enforcement-for-an-organization)
* [Supprimer l’application d’un crochet de préréception pour une organisation](/enterprise/user/rest/reference/enterprise-admin#remove-pre-receive-hook-enforcement-for-an-organization) {% endif %}

#### Projets d’équipe de l’organisation

* [Lister les projets d’équipe](/rest/teams#list-team-projects)
* [Vérifier les autorisations de l’équipe pour un projet](/rest/teams#check-team-permissions-for-a-project)
* [Ajouter ou mettre à jour les autorisations de projet d’équipe](/rest/teams#add-or-update-team-project-permissions)
* [Supprimer un projet d’une équipe](/rest/teams#remove-a-project-from-a-team)

#### Dépôts d’équipe de l’organisation

* [Lister les dépôts d’équipe](/rest/teams#list-team-repositories)
* [Vérifier les autorisations de l’équipe pour un dépôt](/rest/teams#check-team-permissions-for-a-repository)
* [Ajouter ou mettre à jour les autorisations de dépôt d’équipe](/rest/teams#add-or-update-team-repository-permissions)
* [Supprimer un dépôt d’une équipe](/rest/teams#remove-a-repository-from-a-team)

{% ifversion fpt or ghec %}
#### Synchronisation des équipes de l’organisation

* [Lister les groupes IdP d’une équipe](/rest/teams#list-idp-groups-for-a-team)
* [Créer ou mettre à jour les connexions de groupes IdP](/rest/teams#create-or-update-idp-group-connections)
* [Lister les groupes IdP d’une organisation](/rest/teams#list-idp-groups-for-an-organization) {% endif %}

#### Équipes de l’organisation

* [Lister les équipes](/rest/teams#list-teams)
* [Créer une équipe](/rest/teams#create-a-team)
* [Obtenir une équipe par son nom](/rest/teams#get-a-team-by-name)
* [Mettre à jour une équipe](/rest/teams#update-a-team)
* [Supprimer une équipe](/rest/teams#delete-a-team) {% ifversion fpt or ghec %}
* [Lister les invitations à rejoindre une équipe en attente](/rest/teams#list-pending-team-invitations) {% endif %}
* [Lister les membres d’équipe](/rest/teams#list-team-members)
* [Obtenir l’état de l’appartenance d’un utilisateur à une équipe](/rest/teams#get-team-membership-for-a-user)
* [Ajouter ou mettre à jour l’état de l’appartenance d’un utilisateur à une équipe](/rest/teams#add-or-update-team-membership-for-a-user)
* [Supprimer l’appartenance d’un utilisateur à une équipe](/rest/teams#remove-team-membership-for-a-user)
* [Lister les équipes enfants](/rest/teams#list-child-teams)
* [Lister les équipes de l’utilisateur authentifié](/rest/teams#list-teams-for-the-authenticated-user)

#### Organisations

* [Afficher la liste des organisations](/rest/orgs#list-organizations)
* [Obtenir une organisation](/rest/orgs#get-an-organization)
* [Mettre à jour une organisation](/rest/orgs#update-an-organization)
* [Lister les états d’appartenance aux organisations pour l’utilisateur authentifié](/rest/orgs#list-organization-memberships-for-the-authenticated-user)
* [Obtenir l’état d’appartenance à une organisation pour l’utilisateur authentifié](/rest/orgs#get-an-organization-membership-for-the-authenticated-user)
* [Mettre à jour l’état d’appartenance à une organisation pour l’utilisateur authentifié](/rest/orgs#update-an-organization-membership-for-the-authenticated-user)
* [Lister les organisations de l’utilisateur authentifié](/rest/orgs#list-organizations-for-the-authenticated-user)
* [Lister les organisations d’un utilisateur](/rest/orgs#list-organizations-for-a-user)

{% ifversion fpt or ghec %}
#### Autorisations relatives aux informations d’identification pour les organisations

* [Lister les autorisations SSO SAML d’une organisation](/rest/orgs#list-saml-sso-authorizations-for-an-organization)
* [Supprimer une autorisation SSO SAML pour une organisation](/rest/orgs#remove-a-saml-sso-authorization-for-an-organization) {% endif %}

{% ifversion fpt or ghec %}
#### SCIM pour les organisations

* [Lister les identités provisionnées SCIM](/rest/scim#list-scim-provisioned-identities)
* [Provisionner et inviter un utilisateur SCIM](/rest/scim#provision-and-invite-a-scim-user)
* [Obtenir les informations de provisionnement SCIM d’un utilisateur](/rest/scim#get-scim-provisioning-information-for-a-user)
* [Définir les informations SCIM d’un utilisateur provisionné](/rest/scim#set-scim-information-for-a-provisioned-user)
* [Mettre à jour un attribut pour un utilisateur SCIM](/rest/scim#update-an-attribute-for-a-scim-user)
* [Supprimer un utilisateur SCIM d’une organisation](/rest/scim#delete-a-scim-user-from-an-organization) {% endif %}

{% ifversion fpt or ghec %}
#### Importations de code source

* [Obtenir l’état d’une importation](/rest/migrations#get-an-import-status)
* [Démarrer une importation](/rest/migrations#start-an-import)
* [Mettre à jour une importation](/rest/migrations#update-an-import)
* [Annuler une importation](/rest/migrations#cancel-an-import)
* [Obtenir les auteurs de commits](/rest/migrations#get-commit-authors)
* [Mapper un auteur de commit](/rest/migrations#map-a-commit-author)
* [Obtenir des fichiers volumineux](/rest/migrations#get-large-files)
* [Mettre à jour la préférence LFS Git](/rest/migrations#update-git-lfs-preference) {% endif %}

#### Collaborateurs de projet

* [Lister les collaborateurs de projet](/rest/projects#list-project-collaborators)
* [Ajouter un collaborateur de projet](/rest/projects#add-project-collaborator)
* [Supprimer un collaborateur de projet](/rest/projects#remove-project-collaborator)
* [Obtenir une autorisation d’accès au projet pour un utilisateur](/rest/projects#get-project-permission-for-a-user)

#### Projets

* [Lister les projets d’une organisation](/rest/projects#list-organization-projects)
* [Créer un projet d’organisation](/rest/projects#create-an-organization-project)
* [Obtenir un projet](/rest/projects#get-a-project)
* [Mettre à jour un projet](/rest/projects#update-a-project)
* [Supprimer un projet](/rest/projects#delete-a-project)
* [Lister les colonne de projet](/rest/projects#list-project-columns)
* [Créer une colonne de projet](/rest/projects#create-a-project-column)
* [Obtenir une colonne de projet](/rest/projects#get-a-project-column)
* [Mettre à jour une colonne de projet](/rest/projects#update-a-project-column)
* [Supprimer une colonne de projet](/rest/projects#delete-a-project-column)
* [Lister les cartes de projet](/rest/projects#list-project-cards)
* [Créer une carte de projet](/rest/projects#create-a-project-card)
* [Déplacer une colonne de projet](/rest/projects#move-a-project-column)
* [Obtenir une carte de projet](/rest/projects#get-a-project-card)
* [Mettre à jour une carte de projet](/rest/projects#update-a-project-card)
* [Supprimer une carte de projet](/rest/projects#delete-a-project-card)
* [Déplacer une carte de projet](/rest/projects#move-a-project-card)
* [Lister les projets d’un dépôt](/rest/projects#list-repository-projects)
* [Créer un projet de dépôt](/rest/projects#create-a-repository-project)

#### Commentaires de tirage

* [Lister les commentaires de revue d’une demande de tirage](/rest/pulls#list-review-comments-on-a-pull-request)
* [Créer un commentaire de revue pour une demande de tirage](/rest/pulls#create-a-review-comment-for-a-pull-request)
* [Lister les commentaires de revue dans un dépôt](/rest/pulls#list-review-comments-in-a-repository)
* [Obtenir un commentaire de revue pour une demande de tirage](/rest/pulls#get-a-review-comment-for-a-pull-request)
* [Mettre à jour un commentaire de revue pour une demande de tirage](/rest/pulls#update-a-review-comment-for-a-pull-request)
* [Supprimer un commentaire de revue pour une demande de tirage](/rest/pulls#delete-a-review-comment-for-a-pull-request)

#### Événements de revue de demande de tirage

* [Ignorer une revue pour une demande de tirage](/rest/pulls#dismiss-a-review-for-a-pull-request)
* [Envoyer une revue pour une demande de tirage](/rest/pulls#submit-a-review-for-a-pull-request)

#### Demandes de revue de demande de tirage

* [Lister les réviseurs demandés pour une demande de tirage](/rest/pulls#list-requested-reviewers-for-a-pull-request)
* [Réviseurs demandés pour une demande de tirage](/rest/pulls#request-reviewers-for-a-pull-request)
* [Supprimer les réviseurs demandés d’une demande de tirage](/rest/pulls#remove-requested-reviewers-from-a-pull-request)

#### Revues de demande de tirage

* [Lister les revues d’une demande de tirage](/rest/pulls#list-reviews-for-a-pull-request)
* [Créer une revue pour une demande de tirage](/rest/pulls#create-a-review-for-a-pull-request)
* [Obtenir une revue pour une demande de tirage](/rest/pulls#get-a-review-for-a-pull-request)
* [Mettre à jour une revue pour une demande de tirage](/rest/pulls#update-a-review-for-a-pull-request)
* [Lister les commentaires d’une revue de demande de tirage](/rest/pulls#list-comments-for-a-pull-request-review)

#### Tirages

* [Lister les demandes de tirage](/rest/pulls#list-pull-requests)
* [Créer une demande de tirage](/rest/pulls#create-a-pull-request)
* [Obtenir une demande de tirage](/rest/pulls#get-a-pull-request)
* [Mettre à jour une demande de tirage](/rest/pulls#update-a-pull-request)
* [Lister les commits d’une demande de tirage](/rest/pulls#list-commits-on-a-pull-request)
* [Lister les fichiers de demandes de tirage](/rest/pulls#list-pull-requests-files)
* [Vérifier si une demande de tirage a été fusionnée](/rest/pulls#check-if-a-pull-request-has-been-merged)
* [Fusionner une demande de tirage (bouton Fusionner)](/rest/pulls#merge-a-pull-request)

#### Réactions

* [Supprimer une réaction](/rest/reactions)
* [Lister les réactions à un commentaire de commit](/rest/reactions#list-reactions-for-a-commit-comment)
* [Créer une réaction à un commentaire de commit](/rest/reactions#create-reaction-for-a-commit-comment)
* [Lister les réactions à un problème](/rest/reactions#list-reactions-for-an-issue)
* [Créer une réaction à un problème](/rest/reactions#create-reaction-for-an-issue)
* [Lister les réactions à un commentaire de problème](/rest/reactions#list-reactions-for-an-issue-comment)
* [Créer une réaction à un commentaire de problème](/rest/reactions#create-reaction-for-an-issue-comment)
* [Lister les réactions à un commentaire de revue de demande de tirage](/rest/reactions#list-reactions-for-a-pull-request-review-comment)
* [Créer une réaction à un commentaire de revue de demande de tirage](/rest/reactions#create-reaction-for-a-pull-request-review-comment)
* [Lister les réactions à un commentaire de discussion d’équipe](/rest/reactions#list-reactions-for-a-team-discussion-comment)
* [Créer une réaction à un commentaire de discussion d’équipe](/rest/reactions#create-reaction-for-a-team-discussion-comment)
* [Lister les réactions à une discussion d’équipe](/rest/reactions#list-reactions-for-a-team-discussion)
* [Créer une réaction à une discussion d’équipe](/rest/reactions#create-reaction-for-a-team-discussion)
* [Supprimer une réaction à un commentaire de commit](/rest/reactions#delete-a-commit-comment-reaction)
* [Supprimer une réaction à un problème](/rest/reactions#delete-an-issue-reaction)
* [Supprimer une réaction à un commentaire de commit](/rest/reactions#delete-an-issue-comment-reaction)
* [Supprimer une réaction à un commentaire de demande de tirage](/rest/reactions#delete-a-pull-request-comment-reaction)
* [Supprimer une réaction à une discussion d’équipe](/rest/reactions#delete-team-discussion-reaction)
* [Supprimer une réaction à un commentaire de discussion d’équipe](/rest/reactions#delete-team-discussion-comment-reaction)

#### Référentiels

* [Lister les dépôts d’une organisation](/rest/repos#list-organization-repositories)
* [Créer un dépôt pour l’utilisateur authentifié](/rest/repos#create-a-repository-for-the-authenticated-user)
* [Obtenir un dépôt](/rest/repos#get-a-repository)
* [Mettre à jour un dépôt](/rest/repos#update-a-repository)
* [Supprimer un dépôt](/rest/repos#delete-a-repository)
* [Comparer deux commits](/rest/commits#compare-two-commits)
* [Lister les contributeurs d’un dépôt](/rest/repos#list-repository-contributors)
* [Lister les duplications](/rest/repos#list-forks)
* [Créer une duplication](/rest/repos#create-a-fork)
* [Lister les langages d’un dépôt](/rest/repos#list-repository-languages)
* [Lister les étiquettes d’un dépôt](/rest/repos#list-repository-tags)
* [Lister les équipes d’un dépôt](/rest/repos#list-repository-teams)
* [Transférer un dépôt](/rest/repos#transfer-a-repository)
* [Lister les dépôts publics](/rest/repos#list-public-repositories)
* [Lister les dépôts de l’utilisateur authentifié](/rest/repos#list-repositories-for-the-authenticated-user)
* [Lister les dépôts d’un utilisateur](/rest/repos#list-repositories-for-a-user)
* [Créer un dépôt à l’aide d’un modèle de dépôt](/rest/repos#create-repository-using-a-repository-template)

#### Activité d’un dépôt

* [Lister les personnes qui mettent une étoile](/rest/activity#list-stargazers)
* [Lister les personnes qui surveillent l’activité](/rest/activity#list-watchers)
* [Lister les dépôts auxquels un utilisateur a mis une étoile](/rest/activity#list-repositories-starred-by-a-user)
* [Vérifier si l’utilisateur authentifié a mis une étoile au dépôt](/rest/activity#check-if-a-repository-is-starred-by-the-authenticated-user)
* [Mettre une étoile à un dépôt pour l’utilisateur authentifié](/rest/activity#star-a-repository-for-the-authenticated-user)
* [Enlever une étoile à un dépôt pour l’utilisateur authentifié](/rest/activity#unstar-a-repository-for-the-authenticated-user)
* [Lister les dépôts placés en surveillance par un utilisateur](/rest/activity#list-repositories-watched-by-a-user)

{% ifversion fpt or ghec %}
#### Correctifs de sécurité automatisés pour un dépôt

* [Activer les correctifs de sécurité automatisés](/rest/repos#enable-automated-security-fixes)
* [Désactiver les correctifs de sécurité automatisés](/rest/repos#disable-automated-security-fixes) {% endif %}

#### Branches d’un dépôt

* [Lister les branches](/rest/branches#list-branches)
* [Obtenir une branche](/rest/branches#get-a-branch)
* [Obtenir la protection des branches](/rest/branches#get-branch-protection)
* [Mettre à jour la protection des branches](/rest/branches#update-branch-protection)
* [Supprimer la protection des branches](/rest/branches#delete-branch-protection)
* [Obtenir la protection des branches d’administration](/rest/branches#get-admin-branch-protection)
* [Définir la protection des branches d’administration](/rest/branches#set-admin-branch-protection)
* [Supprimer la protection des branches d’administration](/rest/branches#delete-admin-branch-protection)
* [Obtenir la protection des revues de demandes de tirage](/rest/branches#get-pull-request-review-protection)
* [Mettre à jour la protection des revues de demandes de tirage](/rest/branches#update-pull-request-review-protection)
* [Supprimer la protection des revues de demandes de tirage](/rest/branches#delete-pull-request-review-protection)
* [Obtenir la protection des signatures de commit](/rest/branches#get-commit-signature-protection)
* [Créer la protection des signatures de commit](/rest/branches#create-commit-signature-protection)
* [Supprimer la protection des signatures de commit](/rest/branches#delete-commit-signature-protection)
* [Obtenir la protection des vérifications d’état](/rest/branches#get-status-checks-protection)
* [Mettre à jour la protection des vérifications d’état](/rest/branches#update-status-check-protection)
* [Supprimer la protection des vérifications d’état](/rest/branches#remove-status-check-protection)
* [Obtenir tous les contextes de vérification d’état](/rest/branches#get-all-status-check-contexts)
* [Ajouter des contextes de vérification d’état](/rest/branches#add-status-check-contexts)
* [Définir des contextes de vérification d’état](/rest/branches#set-status-check-contexts)
* [Supprimer des contextes de vérification d’état](/rest/branches#remove-status-check-contexts)
* [Obtenir des restrictions d’accès](/rest/branches#get-access-restrictions)
* [Supprimer des restrictions d’accès](/rest/branches#delete-access-restrictions)
* [Lister les équipes ayant accès à la branche protégée](/rest/repos#list-teams-with-access-to-the-protected-branch)
* [Ajouter des restrictions d’accès pour une équipe](/rest/branches#add-team-access-restrictions)
* [Définir des restrictions d’accès pour une équipe](/rest/branches#set-team-access-restrictions)
* [Supprimer des restrictions d’accès pour une équipe](/rest/branches#remove-team-access-restrictions)
* [Lister les restrictions d’accès utilisateur de la branche protégée](/rest/repos#list-users-with-access-to-the-protected-branch)
* [Ajouter des restrictions d’accès utilisateur](/rest/branches#add-user-access-restrictions)
* [Définir des restrictions d’accès utilisateur](/rest/branches#set-user-access-restrictions)
* [Supprimer des restrictions d’accès utilisateur](/rest/branches#remove-user-access-restrictions)
* [Fusionner une branche](/rest/branches#merge-a-branch)

#### Collaborateurs d’un dépôt

* [Lister les collaborateurs d’un dépôt](/rest/collaborators#list-repository-collaborators)
* [Vérifier si un utilisateur est un collaborateur de dépôt](/rest/collaborators#check-if-a-user-is-a-repository-collaborator)
* [Ajouter un collaborateur de dépôt](/rest/collaborators#add-a-repository-collaborator)
* [Supprimer un collaborateur de dépôt](/rest/collaborators#remove-a-repository-collaborator)
* [Obtenir des autorisations d’accès au dépôt pour un utilisateur](/rest/collaborators#get-repository-permissions-for-a-user)

#### Commentaires de commit d’un dépôt

* [Lister les commentaires de commit pour un dépôt](/rest/commits#list-commit-comments-for-a-repository)
* [Obtenir un commentaire de commit](/rest/commits#get-a-commit-comment)
* [Mettre à jour un commentaire de commit](/rest/commits#update-a-commit-comment)
* [Supprimer un commentaire de commit](/rest/commits#delete-a-commit-comment)
* [Lister les commentaires de commit](/rest/commits#list-commit-comments)
* [Créer un commentaire de commit](/rest/commits#create-a-commit-comment)

#### Commits d’un dépôt

* [Lister les commits](/rest/commits#list-commits)
* [Obtenir un commit](/rest/commits#get-a-commit)
* [Lister les branches du commit head](/rest/commits#list-branches-for-head-commit)
* [Lister les demandes de tirage associées à un commit](/rest/repos#list-pull-requests-associated-with-commit)

#### Communauté d’un dépôt

* [Obtenir le code de conduite d’un dépôt](/rest/codes-of-conduct#get-the-code-of-conduct-for-a-repository) {% ifversion fpt or ghec %}
* [Obtenir les métriques du profil de la communauté](/rest/metrics#get-community-profile-metrics) {% endif %}

#### Contenu d’un dépôt

* [Télécharger l’archive d’un dépôt](/rest/repos#download-a-repository-archive)
* [Obtenir le contenu d’un dépôt](/rest/repos#get-repository-content)
* [Créer ou mettre à jour le contenu d’un fichier](/rest/repos#create-or-update-file-contents)
* [Supprimer un fichier](/rest/repos#delete-a-file)
* [Obtenir un fichier README de dépôt](/rest/repos#get-a-repository-readme)
* [Obtenir la licence d’un dépôt](/rest/licenses#get-the-license-for-a-repository)

#### Dispatch des événements d’un dépôt

* [Créer un événement de dispatch d’un dépôt](/rest/repos#create-a-repository-dispatch-event)

#### Crochets d’un dépôt

* [Lister les webhooks d’un dépôt](/rest/webhooks#list-repository-webhooks)
* [Créer le webhook d’un dépôt](/rest/webhooks#create-a-repository-webhook)
* [Obtenir le webhook d’un dépôt](/rest/webhooks#get-a-repository-webhook)
* [Mettre à jour le webhook d’un dépôt](/rest/webhooks#update-a-repository-webhook)
* [Supprimer le webhook d’un dépôt](/rest/webhooks#delete-a-repository-webhook)
* [Effectuer un test ping sur le webhook d’un dépôt](/rest/webhooks#ping-a-repository-webhook)
* [Tester le webhook de poussée vers le dépôt](/rest/repos#test-the-push-repository-webhook)

#### Invitations à un dépôt

* [Lister les invitation à un dépôt](/rest/collaborators#list-repository-invitations)
* [Mettre à jour l’invitation à un dépôt](/rest/collaborators#update-a-repository-invitation)
* [Supprimer l’invitation à un dépôt](/rest/collaborators#delete-a-repository-invitation)
* [Lister les invitations à un dépôt pour l’utilisateur authentifié](/rest/collaborators#list-repository-invitations-for-the-authenticated-user)
* [Accepter une invitation à un dépôt](/rest/collaborators#accept-a-repository-invitation)
* [Décliner une invitation à un dépôt](/rest/collaborators#decline-a-repository-invitation)

#### Clés d’un dépôt

* [Lister les clé de déploiement](/rest/deployments#list-deploy-keys)
* [Créer une clé de déploiement](/rest/deployments#create-a-deploy-key)
* [Obtenir une clé de déploiement](/rest/deployments#get-a-deploy-key)
* [Supprimer une clé de déploiement](/rest/deployments#delete-a-deploy-key)

#### Pages d’un dépôt

* [Obtenir un site GitHub Pages](/rest/pages#get-a-github-pages-site)
* [Créer un site GitHub Pages](/rest/pages#create-a-github-pages-site)
* [Mettre à jour des informations sur un site GitHub Pages](/rest/pages#update-information-about-a-github-pages-site)
* [Supprimer un site GitHub Pages](/rest/pages#delete-a-github-pages-site)
* [Lister les builds GitHub Pages](/rest/pages#list-github-pages-builds)
* [Demander une build GitHub Pages](/rest/pages#request-a-github-pages-build)
* [Obtenir une build GitHub Pages](/rest/pages#get-github-pages-build)
* [Obtenir la dernière build GitHub Pages](/rest/pages#get-latest-pages-build)

{% ifversion ghes %}
#### Crochets de préréception d’un dépôt

* [Lister les crochets de préréception d’un dépôt](/enterprise/user/rest/enterprise-admin#list-pre-receive-hooks-for-a-repository)
* [Obtenir un crochet de préréception pour un dépôt](/enterprise/user/rest/enterprise-admin#get-a-pre-receive-hook-for-a-repository)
* [Mettre à jour l’application d’un crochet de préréception pour un dépôt](/enterprise/user/rest/enterprise-admin#update-pre-receive-hook-enforcement-for-a-repository)
* [Supprimer l’application d’un crochet de préréception pour un dépôt](/enterprise/user/rest/enterprise-admin#remove-pre-receive-hook-enforcement-for-a-repository) {% endif %}

#### Mises en production d’un dépôt

* [Répertorier les versions](/rest/repos#list-releases)
* [Créer une mise en production](/rest/repos#create-a-release)
* [Obtenir une mise en production](/rest/repos#get-a-release)
* [Mettre à jour une mise en production](/rest/repos#update-a-release)
* [Supprimer une mise en production](/rest/repos#delete-a-release)
* [Lister les ressources de mise en production](/rest/repos#list-release-assets)
* [Obtenir une ressource de mise en production](/rest/repos#get-a-release-asset)
* [Mettre à jour une ressource de mise en production](/rest/repos#update-a-release-asset)
* [Supprimer une ressource de mise en production](/rest/repos#delete-a-release-asset)
* [Obtenir la dernière mise en production](/rest/repos#get-the-latest-release)
* [Obtenir une mise en production par le nom d’étiquette](/rest/repos#get-a-release-by-tag-name)

#### Statistiques d’un dépôt

* [Obtenir l’activité de commit hebdomadaire](/rest/metrics#get-the-weekly-commit-activity)
* [Obtenir la dernière année de l’activité de commit](/rest/metrics#get-the-last-year-of-commit-activity)
* [Obtenir l’activité de commit de tous les contributeurs](/rest/metrics#get-all-contributor-commit-activity)
* [Obtenir le nombre de commits hebdomadaires](/rest/metrics#get-the-weekly-commit-count)
* [Obtenir le nombre de commits horaires pour chaque jour](/rest/metrics#get-the-hourly-commit-count-for-each-day)

{% ifversion fpt or ghec %}
#### Alertes de vulnérabilité d’un dépôt

* [Activer les alertes de vulnérabilité](/rest/repos#enable-vulnerability-alerts)
* [Désactiver les alertes de vulnérabilité](/rest/repos#disable-vulnerability-alerts) {% endif %}

#### Root

* [Point de terminaison racine](/rest#root-endpoint)
* [Emojis](/rest/emojis#emojis)
* [Obtenir l’état de la limite de débit pour l’utilisateur authentifié](/rest/rate-limit#get-rate-limit-status-for-the-authenticated-user)

#### Rechercher

* [Rechercher du code](/rest/search#search-code)
* [Rechercher des commits](/rest/search#search-commits)
* [Rechercher des étiquettes](/rest/search#search-labels)
* [Rechercher des dépôts](/rest/search#search-repositories)
* [Rechercher des sujets](/rest/search#search-topics)
* [Rechercher des utilisateurs](/rest/search#search-users)

#### États

* [Obtenir l’état combiné d’une référence spécifique](/rest/commits#get-the-combined-status-for-a-specific-reference)
* [Lister les états de commit d’une référence](/rest/commits#list-commit-statuses-for-a-reference)
* [Créer un état de commit](/rest/commits#create-a-commit-status)

#### Discussions d’équipe

* [Lister les discussions](/rest/teams#list-discussions)
* [Créer une discussion](/rest/teams#create-a-discussion)
* [Obtenir une discussion](/rest/teams#get-a-discussion)
* [Mettre à jour une discussion](/rest/teams#update-a-discussion)
* [Supprimer une discussion](/rest/teams#delete-a-discussion)
* [Lister les commentaires de discussion](/rest/teams#list-discussion-comments)
* [Créer un commentaire de discussion](/rest/teams#create-a-discussion-comment)
* [Obtenir un commentaire de discussion](/rest/teams#get-a-discussion-comment)
* [Mettre à jour un commentaire de discussion](/rest/teams#update-a-discussion-comment)
* [Supprimer un commentaire de discussion](/rest/teams#delete-a-discussion-comment)

#### Rubriques

* [Obtenir tous les sujets d’un dépôt](/rest/repos#get-all-repository-topics)
* [Remplacer tous les sujets d’un dépôt](/rest/repos#replace-all-repository-topics)

{% ifversion fpt or ghec %}
#### Trafic

* [Obtenir les clones d’un dépôt](/rest/metrics#get-repository-clones)
* [Obtenir les principaux chemins de référence](/rest/metrics#get-top-referral-paths)
* [Obtenir les principales sources de référence](/rest/metrics#get-top-referral-sources)
* [Obtenir les vues de page](/rest/metrics#get-page-views) {% endif %}

{% ifversion fpt or ghec %}
#### Blocage d’utilisateurs

* [Lister les utilisateurs bloqués par l’utilisateur authentifié](/rest/users#list-users-blocked-by-the-authenticated-user)
* [Vérifier si un utilisateur est bloqué par l’utilisateur authentifié](/rest/users#check-if-a-user-is-blocked-by-the-authenticated-user)
* [Lister les utilisateurs bloqués par une organisation](/rest/orgs#list-users-blocked-by-an-organization)
* [Vérifier si un utilisateur est bloqué par une organisation](/rest/orgs#check-if-a-user-is-blocked-by-an-organization)
* [Bloquer l’accès d’un utilisateur à votre organisation](/rest/orgs#block-a-user-from-an-organization)
* [Débloquer l’accès d’un utilisateur à votre organisation](/rest/orgs#unblock-a-user-from-an-organization)
* [Bloquer un utilisateur](/rest/users#block-a-user)
* [Débloquer l’accès d’un utilisateur](/rest/users#unblock-a-user) {% endif %}

{% ifversion fpt or ghes or ghec %}
#### E-mails utilisateur

{% ifversion fpt or ghec %}
* [Définir la visibilité de l’e-mail principal de l’utilisateur authentifié](/rest/users#set-primary-email-visibility-for-the-authenticated-user) {% endif %}
* [Lister les adresses e-mail de l’utilisateur authentifié](/rest/users#list-email-addresses-for-the-authenticated-user)
* [Ajouter une ou plusieurs adresses e-mail](/rest/users#add-an-email-address-for-the-authenticated-user)
* [Supprimer une ou plusieurs adresses e-mail](/rest/users#delete-an-email-address-for-the-authenticated-user)
* [Lister les adresses e-mail publiques de l’utilisateur authentifié](/rest/users#list-public-email-addresses-for-the-authenticated-user) {% endif %}

#### Abonnés d’un utilisateur

* [Lister les abonnés d’un utilisateur](/rest/users#list-followers-of-a-user)
* [Lister les personnes qu’un utilisateur suit](/rest/users#list-the-people-a-user-follows)
* [Vérifier si une personne est suivie par l’utilisateur authentifié](/rest/users#check-if-a-person-is-followed-by-the-authenticated-user)
* [Suivre un utilisateur](/rest/users#follow-a-user)
* [Ne plus suivre un utilisateur](/rest/users#unfollow-a-user)
* [Vérifier si un utilisateur suit un autre utilisateur](/rest/users#check-if-a-user-follows-another-user)

#### Clés GPG d’un l’utilisateur

* [Lister les clés GPG de l’utilisateur authentifié](/rest/users#list-gpg-keys-for-the-authenticated-user)
* [Créer une clé GPG pour l’utilisateur authentifié](/rest/users#create-a-gpg-key-for-the-authenticated-user)
* [Obtenir une clé GPG pour l’utilisateur authentifié](/rest/users#get-a-gpg-key-for-the-authenticated-user)
* [Supprimer une clé GPG pour l’utilisateur authentifié](/rest/users#delete-a-gpg-key-for-the-authenticated-user)
* [Lister les clés GPG d’un utilisateur](/rest/users#list-gpg-keys-for-a-user)

#### Clés publiques de l’utilisateur

* [Lister les clés SSH publiques de l’utilisateur authentifié](/rest/users#list-public-ssh-keys-for-the-authenticated-user)
* [Créer une clé SSH publique pour l’utilisateur authentifié](/rest/users#create-a-public-ssh-key-for-the-authenticated-user)
* [Obtenir une clé SSH publique pour l’utilisateur authentifié](/rest/users#get-a-public-ssh-key-for-the-authenticated-user)
* [Supprimer une clé SSH publique pour l’utilisateur authentifié](/rest/users#delete-a-public-ssh-key-for-the-authenticated-user)
* [Lister les clés publiques d’un utilisateur](/rest/users#list-public-keys-for-a-user)

#### Utilisateurs

* [Obtenir l’utilisateur authentifié](/rest/users#get-the-authenticated-user)
* [Lister les installations d’application accessibles au jeton d’accès utilisateur](/rest/apps#list-app-installations-accessible-to-the-user-access-token) {% ifversion fpt or ghec %}
* [Lister les abonnements de l’utilisateur authentifié](/rest/apps#list-subscriptions-for-the-authenticated-user) {% endif %}
* [Répertorier les utilisateurs](/rest/users#list-users)
* [Obtenir un utilisateur](/rest/users#get-a-user)

{% ifversion fpt or ghec %}
#### Exécutions de workflow

* [Lister les exécutions de workflow pour un dépôt](/rest/actions#list-workflow-runs-for-a-repository)
* [Obtenir une exécution de workflow](/rest/actions#get-a-workflow-run)
* [Annuler une exécution de workflow](/rest/actions#cancel-a-workflow-run)
* [Télécharger les journaux d’exécution de workflow](/rest/actions#download-workflow-run-logs)
* [Supprimer les journaux d’exécution de workflow](/rest/actions#delete-workflow-run-logs)
* [Réexécuter un workflow](/rest/actions#re-run-a-workflow)
* [Lister les exécutions de workflow](/rest/actions#list-workflow-runs)
* [Obtenir l’utilisation d’une exécution de workflow](/rest/actions#get-workflow-run-usage) {% endif %}

{% ifversion fpt or ghec %}
#### Workflows

* [Lister les workflows d’un dépôt](/rest/actions#list-repository-workflows)
* [Obtenir un workflow](/rest/actions#get-a-workflow)
* [Obtenir l’utilisation d’un workflow](/rest/actions#get-workflow-usage) {% endif %}

## Pour aller plus loin

- « [À propos de l’authentification auprès de {% data variables.product.prodname_dotcom %}](/github/authenticating-to-github/about-authentication-to-github#githubs-token-formats) »

