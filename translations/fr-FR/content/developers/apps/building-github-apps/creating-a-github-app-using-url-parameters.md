---
title: Création d’une application GitHub à l’aide de paramètres d’URL
intro: 'Vous pouvez présélectionner les paramètres d’une nouvelle {% data variables.product.prodname_github_app %} à l’aide des [paramètres de requête](https://en.wikipedia.org/wiki/Query_string) de l’URL pour définir rapidement la configuration de la nouvelle {% data variables.product.prodname_github_app %}.'
redirect_from:
  - /apps/building-github-apps/creating-github-apps-using-url-parameters
  - /developers/apps/creating-a-github-app-using-url-parameters
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
shortTitle: App creation query parameters
ms.openlocfilehash: 94622bfc2de9ba991758a6d1e465d8eb3d770a5f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147064026'
---
## À propos des paramètres d’URL de l’{% data variables.product.prodname_github_app %}

Vous pouvez ajouter des paramètres de requête à ces URL pour présélectionner la configuration d’une {% data variables.product.prodname_github_app %} dans un compte personnel ou d’organisation :

* **Compte personnel :** `{% data variables.product.oauth_host_code %}/settings/apps/new`
* **Compte d’organisation :** `{% data variables.product.oauth_host_code %}/organizations/:org/settings/apps/new`

La personne qui crée l’application peut modifier les valeurs présélectionnées à partir de la page d’inscription de l’{% data variables.product.prodname_github_app %} avant de l’envoyer. Si vous n’incluez pas les paramètres obligatoires dans la chaîne de requête de l’URL, par exemple `name`, la personne qui crée l’application devra entrer une valeur avant de l’envoyer.

Dans le cas des applications qui nécessitent un secret pour sécuriser leur webhook, la valeur du secret doit être définie dans le formulaire par la personne qui crée l’application, et non à l’aide des paramètres de requête. Pour plus d’informations, consultez « [Sécurisation de vos webhooks](/developers/webhooks-and-events/webhooks/securing-your-webhooks) ».

L’URL suivante crée une application publique appelée `octocat-github-app` avec une URL de rappel et une description préconfigurées. Cette URL sélectionne également les autorisations d’accès en lecture et en écriture pour `checks`, s’abonne aux événements de webhook `check_run` et `check_suite`, puis sélectionne l’option permettant de demander l’autorisation de l’utilisateur (OAuth) durant l’installation :

```text
{% data variables.product.oauth_host_code %}/settings/apps/new?name=octocat-github-app&description=An%20Octocat%20App&callback_urls[]=https://example.com&request_oauth_on_install=true&public=true&checks=write&events[]=check_run&events[]=check_suite
```

La liste complète des paramètres de requête, des autorisations et des événements disponibles est listée dans les sections ci-dessous.

## Paramètres de configuration de l’{% data variables.product.prodname_github_app %}

 Nom | Type | Description
-----|------|-------------
`name` | `string` | Nom de l’{% data variables.product.prodname_github_app %}. Donnez un nom clair et succinct à votre application. Votre application ne peut pas avoir le même nom qu’un utilisateur GitHub existant, sauf s’il s’agit de votre propre nom d’utilisateur ou d’organisation. Une version avec slug du nom de votre application s’affiche dans l’interface utilisateur quand votre intégration effectue une action.
`description` | `string` | Description de l’{% data variables.product.prodname_github_app %}.
`url` | `string` | URL complète de la page d’accueil du site web de votre {% data variables.product.prodname_github_app %}.
`callback_urls` | `array of strings` | URL complète de redirection, une fois qu’une personne a autorisé une installation. Vous pouvez fournir jusqu’à 10 URL de rappel. Ces URL sont utilisées si votre application doit identifier et autoriser les requêtes utilisateur à serveur. Par exemple : `callback_urls[]=https://example.com&callback_urls[]=https://example-2.com`.
`request_oauth_on_install` | `boolean` | Si votre application autorise les utilisateurs à l’aide du flux OAuth, vous pouvez affecter la valeur `true` à cette option pour permettre aux utilisateurs d’autoriser l’application quand ils l’installent, et ainsi de sauter une étape. Si vous sélectionnez cette option, `setup_url` cesse d’être disponible, et les utilisateurs sont redirigés vers votre `callback_url` après l’installation de l’application.
`setup_url` | `string` | URL complète de redirection une fois qu’une personne a installé l’{% data variables.product.prodname_github_app %}, si l’application nécessite une configuration supplémentaire après l’installation.
`setup_on_update` | `boolean` | Affectez-lui la valeur `true` pour rediriger les utilisateurs vers l’URL de configuration quand les installations ont été mises à jour, par exemple après l’ajout ou la suppression de dépôts.
`public` | `boolean` | Affectez-lui la valeur `true` quand votre {% data variables.product.prodname_github_app %} est accessible au public, ou la valeur `false` quand elle est uniquement accessible au propriétaire de l’application.
`webhook_active` | `boolean` | Affectez-lui la valeur `false` pour désactiver le webhook. Le webhook est activé par défaut.
`webhook_url` | `string` | URL complète à laquelle vous souhaitez envoyer les charges utiles des événements de webhook.
{% ifversion ghae %}`webhook_secret` | `string` | Vous pouvez spécifier un secret pour sécuriser vos webhooks. Pour plus d’informations, consultez « [Sécurisation de vos webhooks](/webhooks/securing/) ».
{% endif %}`events` | `array of strings` | Événements de webhook. Certains événements de webhook nécessitent des autorisations `read` ou `write` sur une ressource pour que vous puissiez sélectionner l’événement au moment de l’inscription d’une nouvelle {% data variables.product.prodname_github_app %}. Pour connaître les événements disponibles et les autorisations nécessaires, consultez la section « [Événements de webhook de l’{% data variables.product.prodname_github_app %}](#github-app-webhook-events) ». Vous pouvez sélectionner plusieurs événements dans une chaîne de requête. Par exemple `events[]=public&events[]=label`.{% ifversion ghes < 3.4 %}
`domain` | `string` | URL d’une référence de contenu.{% endif %}
`single_file_name` | `string` | Il s’agit d’une autorisation à étendue limitée, qui permet à l’application d’accéder à un seul fichier dans n’importe quel dépôt. Quand vous affectez à l’autorisation `single_file` la valeur `read` ou `write`, ce champ fournit le chemin du fichier unique que votre {% data variables.product.prodname_github_app %} va gérer. {% ifversion fpt or ghes or ghec %} Si vous avez besoin de gérer plusieurs fichiers, consultez `single_file_paths` ci-dessous. {% endif %}{% ifversion fpt or ghes or ghec %}
`single_file_paths` | `array of strings` | Cela permet à l’application d’accéder au maximum à dix fichiers spécifiques dans un dépôt. Quand vous affectez à l’autorisation `single_file` la valeur `read` ou `write`, ce tableau peut stocker les chemins de dix fichiers au maximum que votre {% data variables.product.prodname_github_app %} va gérer. Ces fichiers reçoivent tous la même autorisation définie par `single_file`. Ils n’ont pas d’autorisations individuelles distinctes. Quand deux fichiers ou plus sont configurés, l’API retourne `multiple_single_files=true`, sinon elle retourne `multiple_single_files=false`.{% endif %}

## Autorisations de l’{% data variables.product.prodname_github_app %}

Vous pouvez sélectionner des autorisations dans une chaîne de requête en utilisant le nom d’autorisation figurant dans le tableau suivant en tant que nom de paramètre de requête, et le type d’autorisation en tant que valeur de requête. Par exemple, pour sélectionner les autorisations `Read & write` dans l’interface utilisateur pour `contents`, votre chaîne de requête doit inclure `&contents=write`. Pour sélectionner les autorisations `Read-only` dans l’interface utilisateur pour `blocking`, votre chaîne de requête doit inclure `&blocking=read`. Si vous souhaitez sélectionner `no-access` dans l’interface utilisateur pour `checks`, votre chaîne de requête ne doit pas inclure l’autorisation `checks`.

Autorisation | Description
---------- | -----------
[`administration`](/rest/reference/permissions-required-for-github-apps/#permission-on-administration) | Octroie l’accès à différents points de terminaison pour l’administration de l’organisation et du dépôt. Il peut s’agir de l’une des valeurs suivantes : `none`, `read` ou `write`.{% ifversion fpt or ghec %}
[`blocking`](/rest/reference/permissions-required-for-github-apps/#permission-on-blocking) | Octroie l’accès à l’[API de blocage des utilisateurs](/rest/reference/users#blocking). Il peut s’agir de l’une des valeurs suivantes : `none`, `read` ou `write`.{% endif %}
[`checks`](/rest/reference/permissions-required-for-github-apps/#permission-on-checks) | Octroie l’accès à l’[API des vérifications](/rest/reference/checks). Il peut s’agir de l’une des valeurs suivantes : `none`, `read` ou `write`.{% ifversion ghes < 3.4 %}
`content_references` | Octroie l’accès au point de terminaison « [Créer une pièce jointe de contenu](/rest/reference/apps#create-a-content-attachment) ». Il peut s’agir de l’une des valeurs suivantes : `none`, `read` ou `write`.{% endif %}
[`contents`](/rest/reference/permissions-required-for-github-apps/#permission-on-contents) |  Octroie l’accès à divers points de terminaison qui vous permettent de modifier le contenu du dépôt. Il peut s’agir de l’une des valeurs suivantes : `none`, `read` ou `write`.
[`deployments`](/rest/reference/permissions-required-for-github-apps/#permission-on-deployments) | Octroie l’accès à l’[API des déploiement](/rest/reference/repos#deployments). Il peut s’agir de l’une des valeurs suivantes : `none`, `read` ou `write`.{% ifversion fpt or ghes or ghec %}
[`emails`](/rest/reference/permissions-required-for-github-apps/#permission-on-emails) | Octroie l’accès à l’[API des e-mails](/rest/reference/users#emails). Il peut s’agir de l’une des valeurs suivantes : `none`, `read` ou `write`.{% endif %}
[`followers`](/rest/reference/permissions-required-for-github-apps/#permission-on-followers) | Octroie l’accès à l’[API des abonné](/rest/reference/users#followers). Il peut s’agir de l’une des valeurs suivantes : `none`, `read` ou `write`.
[`gpg_keys`](/rest/reference/permissions-required-for-github-apps/#permission-on-gpg-keys) | Octroie l’accès à l’[API des clés GPG](/rest/reference/users#gpg-keys). Il peut s’agir de l’une des valeurs suivantes : `none`, `read` ou `write`.
[`issues`](/rest/reference/permissions-required-for-github-apps/#permission-on-issues) | Octroie l’accès à l’[API des problèmes](/rest/reference/issues). Il peut s’agir de l’une des valeurs suivantes : `none`, `read` ou `write`.
[`keys`](/rest/reference/permissions-required-for-github-apps/#permission-on-keys) | Octroie l’accès à l’[API des clés publiques](/rest/reference/users#keys). Il peut s’agir de l’une des valeurs suivantes : `none`, `read` ou `write`.
[`members`](/rest/reference/permissions-required-for-github-apps/#permission-on-members) |  Octroie l’accès à la gestion des membres d’une organisation. Il peut s’agir de l’une des valeurs suivantes : `none`, `read` ou `write`.{% ifversion fpt or ghec %}
[`metadata`](/rest/reference/permissions-required-for-github-apps/#metadata-permissions) | Octroie l’accès aux points de terminaison en lecture seule qui n’entraînent pas de fuite de données sensibles. Peut être `read` ou `none`. La valeur par défaut est `read` quand vous définissez une autorisation, ou `none` quand vous ne spécifiez aucune autorisation pour l’{% data variables.product.prodname_github_app %}.
[`organization_administration`](/rest/reference/permissions-required-for-github-apps/#permission-on-organization-administration) | Octroie l’accès au point de terminaison « [Mettre à jour une organisation](/rest/reference/orgs#update-an-organization) » et à l’[API des restrictions d’interaction de l’organisation](/rest/reference/interactions#set-interaction-restrictions-for-an-organization). Il peut s’agir de l’une des valeurs suivantes : `none`, `read` ou `write`.{% endif %}
[`organization_hooks`](/rest/reference/permissions-required-for-github-apps/#permission-on-organization-hooks) | Octroie l’accès à l’[API des webhooks d’organisation](/rest/reference/orgs#webhooks/). Il peut s’agir de l’une des valeurs suivantes : `none`, `read` ou `write`.
`organization_plan` | Octroie l’accès à l’obtention d’informations sur le plan d’une organisation à l’aide du point de terminaison « [Obtenir une organisation](/rest/reference/orgs#get-an-organization) ». Il peut s’agir de l’une des valeurs suivantes : `none` ou `read`.
[`organization_projects`](/rest/reference/permissions-required-for-github-apps/#permission-on-organization-projects) |  Octroie l’accès à l’[API des projets](/rest/reference/projects). Il peut s’agir de l’une des valeurs suivantes : `none`, `read`, `write` ou `admin`.{% ifversion fpt or ghec %}
[`organization_user_blocking`](/rest/reference/permissions-required-for-github-apps/#permission-on-organization-projects) | Octroie l’accès à l’[API de blocage des utilisateurs pour une organisation](/rest/reference/orgs#blocking). Il peut s’agir de l’une des valeurs suivantes : `none`, `read` ou `write`.{% endif %}
[`pages`](/rest/reference/permissions-required-for-github-apps/#permission-on-pages) | Octroie l’accès à l’[API de GitHub Pages](/rest/reference/repos#pages). Il peut s’agir de l’une des valeurs suivantes : `none`, `read` ou `write`.
`plan` | Octroie l’accès à l’obtention d’informations sur le plan GitHub d’un utilisateur à l’aide du point de terminaison « [Obtenir un utilisateur](/rest/reference/users#get-a-user) ». Il peut s’agir de l’une des valeurs suivantes : `none` ou `read`.
[`pull_requests`](/rest/reference/permissions-required-for-github-apps/#permission-on-pull-requests) | Octroie l’accès à divers points de terminaison de demande de tirage. Il peut s’agir de l’une des valeurs suivantes : `none`, `read` ou `write`.
[`repository_hooks`](/rest/reference/permissions-required-for-github-apps/#permission-on-repository-hooks) | Octroie l’accès à l’[API des webhooks de dépôt](/rest/reference/repos#hooks). Il peut s’agir de l’une des valeurs suivantes : `none`, `read` ou `write`.
[`repository_projects`](/rest/reference/permissions-required-for-github-apps/#permission-on-repository-projects) |  Octroie l’accès à l’[API des projets](/rest/reference/projects). Il peut s’agir de l’une des valeurs suivantes : `none`, `read`, `write` ou `admin`.{% ifversion ghes or ghec %}
[`secret_scanning_alerts`](/rest/reference/permissions-required-for-github-apps/#permission-on-secret-scanning-alerts) |  Octroie l’accès à l’[API d’analyse des secrets](/rest/reference/secret-scanning). Il peut s’agir de l’une des valeurs suivantes : `none`, `read` ou `write`.{% endif %}{% ifversion fpt or ghes or ghec %}
[`security_events`](/rest/reference/permissions-required-for-github-apps/#permission-on-security-events) |  Octroie l’accès à l’[API d’analyse du code](/rest/reference/code-scanning/). Il peut s’agir de l’une des valeurs suivantes : `none`, `read` ou `write`.{% endif %}
[`single_file`](/rest/reference/permissions-required-for-github-apps/#permission-on-single-file) | Octroie l’accès à l’[API de contenu](/rest/reference/repos#contents). Il peut s’agir de l’une des valeurs suivantes : `none`, `read` ou `write`.
[`starring`](/rest/reference/permissions-required-for-github-apps/#permission-on-starring) | Octroie l’accès à l’[API d’attribution d’étoiles](/rest/reference/activity#starring). Il peut s’agir de l’une des valeurs suivantes : `none`, `read` ou `write`.
[`statuses`](/rest/reference/permissions-required-for-github-apps/#permission-on-statuses) | Octroie l’accès à l’[API des états](/rest/reference/commits#commit-statuses). Il peut s’agir de l’une des valeurs suivantes : `none`, `read` ou `write`.
[`team_discussions`](/rest/reference/permissions-required-for-github-apps/#permission-on-team-discussions) | Octroie l’accès à l’[API des discussions d’équipe](/rest/reference/teams#discussions) et à l’[API des commentaires de discussion d’équipe](/rest/reference/teams#discussion-comments). Peut avoir l’une des valeurs suivantes : `none`, `read` ou `write`.
`vulnerability_alerts`| Octroie l’accès à la réception d’{% data variables.product.prodname_dependabot_alerts %} dans un référentiel. Pour en savoir plus, consultez « [À propos des {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts) ». Il peut s’agir de l’une des valeurs suivantes : `none` ou `read`.
`watching` | Octroie l’accès permettant de lister et de changer les dépôts auxquels un utilisateur est abonné. Il peut s’agir de l’une des valeurs suivantes : `none`, `read` ou `write`.

## Événements de webhook de l’{% data variables.product.prodname_github_app %}

Nom de l’événement de webhook | Autorisation requise | Description
------------------ | ------------------- | -----------
[`check_run`](/webhooks/event-payloads/#check_run) |`checks` | {% data reusables.webhooks.check_run_short_desc %}
[`check_suite`](/webhooks/event-payloads/#check_suite) |`checks` | {% data reusables.webhooks.check_suite_short_desc %}
[`commit_comment`](/webhooks/event-payloads/#commit_comment) | `contents` | {% data reusables.webhooks.commit_comment_short_desc %}{% ifversion ghes < 3.4 %}
[`content_reference`](/webhooks/event-payloads/#content_reference) |`content_references` | {% data reusables.webhooks.content_reference_short_desc %}{% endif %}
[`create`](/webhooks/event-payloads/#create) | `contents` | {% data reusables.webhooks.create_short_desc %}
[`delete`](/webhooks/event-payloads/#delete) | `contents` | {% data reusables.webhooks.delete_short_desc %}
[`deployment`](/webhooks/event-payloads/#deployment) | `deployments` | {% data reusables.webhooks.deployment_short_desc %}
[`deployment_status`](/webhooks/event-payloads/#deployment_status) | `deployments` | {% data reusables.webhooks.deployment_status_short_desc %}
[`fork`](/webhooks/event-payloads/#fork) | `contents` | {% data reusables.webhooks.fork_short_desc %}
[`gollum`](/webhooks/event-payloads/#gollum) | `contents` | {% data reusables.webhooks.gollum_short_desc %}
[`issues`](/webhooks/event-payloads/#issues) | `issues` | {% data reusables.webhooks.issues_short_desc %}
[`issue_comment`](/webhooks/event-payloads/#issue_comment) | `issues` | {% data reusables.webhooks.issue_comment_short_desc %}
[`label`](/webhooks/event-payloads/#label) | `metadata` | {% data reusables.webhooks.label_short_desc %}
[`member`](/webhooks/event-payloads/#member) | `members` | {% data reusables.webhooks.member_short_desc %}
[`membership`](/webhooks/event-payloads/#membership) | `members` | {% data reusables.webhooks.membership_short_desc %}
[`milestone`](/webhooks/event-payloads/#milestone) | `pull_request` | {% data reusables.webhooks.milestone_short_desc %}{% ifversion fpt or ghec %}
[`org_block`](/webhooks/event-payloads/#org_block) | `organization_administration` | {% data reusables.webhooks.org_block_short_desc %}{% endif %}
[`organization`](/webhooks/event-payloads/#organization) | `members` | {% data reusables.webhooks.organization_short_desc %}
[`page_build`](/webhooks/event-payloads/#page_build) | `pages` | {% data reusables.webhooks.page_build_short_desc %}
[`project`](/webhooks/event-payloads/#project) | `repository_projects` ou `organization_projects` | {% data reusables.webhooks.project_short_desc %}
[`project_card`](/webhooks/event-payloads/#project_card) | `repository_projects` ou `organization_projects` | {% data reusables.webhooks.project_card_short_desc %}
[`project_column`](/webhooks/event-payloads/#project_column) | `repository_projects` ou `organization_projects` | {% data reusables.webhooks.project_column_short_desc %}
[`public`](/webhooks/event-payloads/#public) | `metadata` | {% data reusables.webhooks.public_short_desc %}
[`pull_request`](/webhooks/event-payloads/#pull_request) | `pull_requests` | {% data reusables.webhooks.pull_request_short_desc %}
[`pull_request_review`](/webhooks/event-payloads/#pull_request_review) | `pull_request` | {% data reusables.webhooks.pull_request_review_short_desc %}
[`pull_request_review_comment`](/webhooks/event-payloads/#pull_request_review_comment) | `pull_request` | {% data reusables.webhooks.pull_request_review_comment_short_desc %}
[`pull_request_review_thread`](/webhooks/event-payloads/#pull_request_review_thread) | `pull_request` | {% data reusables.webhooks.pull_request_review_thread_short_desc %}
[`push`](/webhooks/event-payloads/#push) | `contents` | {% data reusables.webhooks.push_short_desc %}
[`release`](/webhooks/event-payloads/#release) | `contents` | {% data reusables.webhooks.release_short_desc %}
[`repository`](/webhooks/event-payloads/#repository) |`metadata` | {% data reusables.webhooks.repository_short_desc %}{% ifversion fpt or ghec %}
[`repository_dispatch`](/webhooks/event-payloads/#repository_dispatch) | `contents` | Permet aux intégrateurs utilisant GitHub Actions de déclencher des événements personnalisés.{% endif %}
[`status`](/webhooks/event-payloads/#status) | `statuses` | {% data reusables.webhooks.status_short_desc %}
[`team`](/webhooks/event-payloads/#team) | `members` | {% data reusables.webhooks.team_short_desc %}
[`team_add`](/webhooks/event-payloads/#team_add) | `members` | {% data reusables.webhooks.team_add_short_desc %}
[`watch`](/webhooks/event-payloads/#watch) | `metadata` | {% data reusables.webhooks.watch_short_desc %}
