---
title: Création d’une application GitHub à partir d’un manifeste
intro: 'Un manifeste d’application GitHub est une application GitHub préconfigurée que vous pouvez partager avec toute personne souhaitant utiliser votre application dans ses dépôts personnels. Le flux de manifeste permet à une personne de créer, d’installer et de commencer rapidement à étendre une application GitHub sans avoir à inscrire l’application ou à connecter l’inscription au code d’application hébergé.'
redirect_from:
  - /apps/building-github-apps/creating-github-apps-from-a-manifest
  - /developers/apps/creating-a-github-app-from-a-manifest
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
shortTitle: App creation manifest flow
ms.openlocfilehash: 9ff6fa93e0f31de16e6ee2d96f1d7665742151d3
ms.sourcegitcommit: 6bd8fe6d49214743f82fa2dc71847c241f140c87
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/07/2022
ms.locfileid: '148135710'
---
## À propos des manifestes d’application GitHub

Quand une personne crée une application GitHub à partir d’un manifeste, il lui suffit de suivre une URL et de nommer l’application. Le manifeste inclut les autorisations, les événements et l’URL de webhook nécessaires pour inscrire automatiquement l’application. Le flux de manifeste crée l’inscription d’application GitHub, puis récupère le secret du webhook, la clé privée (fichier PEM) ainsi que l’ID d’application GitHub de l’application. La personne qui crée l’application à partir du manifeste est propriétaire de l’application. Elle peut [modifier les paramètres de configuration de l’application](/apps/managing-github-apps/modifying-a-github-app/), supprimer l’application ou la transférer à une autre personne sur GitHub.

Vous pouvez utiliser [Probot](https://probot.github.io/) pour bien démarrer avec les manifestes d’application GitHub ou pour voir un exemple d’implémentation. Pour en savoir plus, consultez « [Utilisation de Probot pour implémenter le flux de manifeste de l’application GitHub](#using-probot-to-implement-the-github-app-manifest-flow) ».

Voici quelques scénarios où vous pouvez utiliser les manifestes d’application GitHub pour créer des applications préconfigurées :

* Aider les nouveaux membres de l’équipe à être rapidement opérationnels quand ils développent des applications GitHub.
* Permettre à d’autres utilisateurs d’étendre une application GitHub à l’aide des API GitHub sans avoir à configurer d’application.
* Créer des conceptions de référence d’application GitHub à partager avec la communauté GitHub.
* Garantir le déploiement d’applications GitHub sur des environnements de développement et de production à l’aide de la même configuration.
* Effectuer le suivi des révisions d’une configuration d’application GitHub.

## Implémentation du flux de manifeste de l’application GitHub

Le flux de manifeste de l’application GitHub utilise un processus d’établissement de liaison similaire au [flux OAuth](/apps/building-oauth-apps/authorizing-oauth-apps/). Le flux utilise un manifeste pour [inscrire une application GitHub](/apps/building-github-apps/creating-a-github-app/) et reçoit un `code` temporaire permettant de récupérer la clé privée, le secret de webhook et l’ID de l’application.

{% note %}

**Remarque :** Vous devez effectuer les trois étapes du flux de manifeste de l’application GitHub en moins d’une heure.

{% endnote %}

Suivez ces étapes pour implémenter le flux de manifeste de l’application GitHub :

1. Vous redirigez les utilisateurs vers GitHub pour créer une application GitHub.
1. GitHub redirige les utilisateurs vers votre site.
1. Vous échangez le code temporaire pour récupérer la configuration de l’application.

### 1. Vous redirigez les utilisateurs vers GitHub pour créer une application GitHub

Pour rediriger les utilisateurs vers la création d’une application GitHub, [fournissez un lien](#examples) sur lequel ils peuvent cliquer afin d’envoyer une requête `POST` à `https://github.com/settings/apps/new` pour un compte personnel, ou à `https://github.com/organizations/ORGANIZATION/settings/apps/new` pour un compte d’organisation, en remplaçant `ORGANIZATION` par le nom du compte d’organisation où l’application sera créée.

Vous devez inclure les [paramètres du manifeste de l’application GitHub](#github-app-manifest-parameters) sous forme de chaîne codée au format JSON dans un paramètre appelé `manifest`. Vous pouvez également inclure un [paramètre](#parameters) `state` pour plus de sécurité.

La personne qui crée l’application est redirigée vers une page GitHub comportant un champ d’entrée où elle peut modifier le nom de l’application que vous avez incluse dans le paramètre `manifest`. Si vous n’incluez pas `name` dans `manifest`, elle peut définir le nom de son choix pour l’application dans ce champ.

![Créer un manifeste de l’application GitHub](/assets/images/github-apps/create-github-app-manifest.png)

#### Paramètres du manifeste de l’application GitHub

 Name | Type | Description
-----|------|-------------
`name` | `string` | Nom de l’application GitHub.
`url` | `string` | **Obligatoire.** Page d’accueil de votre application GitHub.
`hook_attributes` | `object` | Configuration du webhook de l’application GitHub.
`redirect_url` | `string` | URL complète de redirection, une fois qu’un utilisateur a lancé la création d’une application GitHub à partir d’un manifeste.
`callback_urls` | `array of strings` | URL complète de redirection, une fois qu’une personne a autorisé une installation. Vous pouvez fournir jusqu’à 10 URL de rappel.
`setup_url` | `string` | URL complète permettant de rediriger les utilisateurs après l’installation de votre application GitHub si une configuration supplémentaire est nécessaire.
`description` | `string` | Description de l’application GitHub.
`public` | `boolean` | Affectez-lui la valeur `true` quand votre application GitHub est accessible au public, ou la valeur `false` quand elle est uniquement accessible au propriétaire de l’application.
`default_events` | `array` | Liste des [événements](/webhooks/event-payloads) auxquels l’application GitHub s’abonne.
`default_permissions` | `object` | Ensemble des [autorisations](/rest/reference/permissions-required-for-github-apps) nécessaires à l’application GitHub. Le format de l’objet utilise le nom d’autorisation de la clé (par exemple `issues`) et le type d’accès de la valeur (par exemple `write`).

L’objet `hook_attributes` a la clé suivante :

Name | Type | Description
-----|------|-------------
`url` | `string` | **Obligatoire.** URL du serveur qui va recevoir les requêtes `POST` du webhook.
`active` | `boolean` | Fournit les détails de l’événement quand ce crochet se déclenche. La valeur par défaut est true.

#### Paramètres

 Nom | Type | Description
-----|------|-------------
`state`| `string` | {% data reusables.apps.state_description %}

#### Exemples

Cet exemple utilise un formulaire sur une page web avec un bouton qui déclenche la requête `POST` pour un compte personnel :

```html
<form action="https://github.com/settings/apps/new?state=abc123" method="post">
 Create a GitHub App Manifest: <input type="text" name="manifest" id="manifest"><br>
 <input type="submit" value="Submit">
</form>

<script>
 input = document.getElementById("manifest")
 input.value = JSON.stringify({
   "name": "Octoapp",
   "url": "https://www.example.com",
   "hook_attributes": {
     "url": "https://example.com/github/events",
   },
   "redirect_url": "https://example.com/redirect",
   "callback_urls": [
     "https://example.com/callback"
   ],
   "public": true,
   "default_permissions": {
     "issues": "write",
     "checks": "write"
   },
   "default_events": [
     "issues",
     "issue_comment",
     "check_suite",
     "check_run"
   ]
 })
</script>
```

Cet exemple utilise un formulaire sur une page web avec un bouton qui déclenche la requête `POST` pour un compte d’organisation. Remplacez `ORGANIZATION` par le nom du compte d’organisation dans lequel vous souhaitez créer l’application.

```html
<form action="https://github.com/organizations/ORGANIZATION/settings/apps/new?state=abc123" method="post">
 Create a GitHub App Manifest: <input type="text" name="manifest" id="manifest"><br>
 <input type="submit" value="Submit">
</form>

<script>
 input = document.getElementById("manifest")
 input.value = JSON.stringify({
   "name": "Octoapp",
   "url": "https://www.example.com",
   "hook_attributes": {
     "url": "https://example.com/github/events",
   },
   "redirect_url": "https://example.com/redirect",
   "callback_urls": [
     "https://example.com/callback"
   ],
   "public": true,
   "default_permissions": {
     "issues": "write",
     "checks": "write"
   },
   "default_events": [
     "issues",
     "issue_comment",
     "check_suite",
     "check_run"
   ]
 })
</script>
```

### 2. GitHub redirige les utilisateurs vers votre site

Quand la personne clique sur **Créer une application GitHub**, GitHub effectue une redirection vers `redirect_url` avec un `code` temporaire dans un paramètre de code. Par exemple :

    https://example.com/redirect?code=a180b1a3d263c81bc6441d7b990bae27d4c10679

Si vous avez fourni un paramètre `state`, vous voyez également ce paramètre dans `redirect_url`. Par exemple :

    https://example.com/redirect?code=a180b1a3d263c81bc6441d7b990bae27d4c10679&state=abc123

### 3. Vous échangez le code temporaire pour récupérer la configuration de l’application

Pour permettre l’établissement d’une liaison, envoyez le `code` temporaire dans une requête `POST` au point de terminaison [Créer une application GitHub à partir d’un manifeste](/rest/reference/apps#create-a-github-app-from-a-manifest). La réponse doit inclure l’`id` (ID de l’application GitHub), `pem` (clé privée) et `webhook_secret`. GitHub crée automatiquement un secret de webhook pour l’application. Vous pouvez stocker ces valeurs dans des variables d’environnement sur le serveur de l’application. Par exemple, si votre application utilise [dotenv](https://github.com/bkeepers/dotenv) pour stocker les variables d’environnement, vous devez stocker les variables dans le fichier `.env` de votre application.

Vous devez effectuer cette étape du flux de manifeste de l’application GitHub en moins d’une heure.

{% note %}

**Remarque :** Ce point de terminaison est à débit limité. Consultez [Limites de débit](/rest/reference/rate-limit) pour savoir comment obtenir l’état de votre limite de débit actuelle.

{% endnote %}

    POST /app-manifests/{code}/conversions

Pour plus d’informations sur la réponse du point de terminaison, consultez [Créer une application GitHub à partir d’un manifeste](/rest/reference/apps#create-a-github-app-from-a-manifest).

Une fois la dernière étape du flux de manifeste effectuée, la personne qui crée l’application à partir du flux est propriétaire d’une application GitHub inscrite qu’elle peut installer dans l’un de ses dépôts personnels. Elle peut étendre l’application en utilisant les API GitHub, transférer sa propriété à une autre personne, ou la supprimer à tout moment.

## Utilisation de Probot pour implémenter le flux de manifeste de l’application GitHub

[Probot](https://probot.github.io/) est un framework créé avec [Node.js](https://nodejs.org/). Il effectue la plupart des tâches nécessaires à l’ensemble des applications GitHub, par exemple la validation des webhooks et l’authentification. Probot implémente le [flux de manifeste de l’application GitHub](#implementing-the-github-app-manifest-flow), ce qui facilite la création et le partage des conceptions de référence d’application GitHub avec la communauté GitHub.

Pour créer une application Probot à partager, suivez ces étapes :

1. [Générez une nouvelle application GitHub](https://probot.github.io/docs/development/#generating-a-new-app).
1. Ouvrez le projet que vous avez créé, puis personnalisez les paramètres dans le fichier `app.yml`. Probot utilise les paramètres de `app.yml` en tant que [paramètres du manifeste de l’application GitHub](#github-app-manifest-parameters).
1. Ajoutez le code personnalisé de votre application.
1. [Exécutez l’application GitHub localement](https://probot.github.io/docs/development/#running-the-app-locally), ou [hébergez-la où vous le souhaitez](#hosting-your-app-with-glitch). Quand vous accédez à l’URL de l’application hébergée, vous voyez une page web avec un bouton **Inscrire l’application GitHub** sur lequel les utilisateurs peuvent cliquer pour créer une application préconfigurée. La page web ci-dessous est l’implémentation par Probot de l’[étape 1](#1-you-redirect-people-to-github-to-create-a-new-github-app) dans le flux de manifeste de l’application GitHub :

![Inscrire une application GitHub Probot](/assets/images/github-apps/github_apps_probot-registration.png)

À l’aide de [dotenv](https://github.com/bkeepers/dotenv), Probot crée un fichier `.env`, puis définit les variables d’environnement `APP_ID`, `PRIVATE_KEY` et `WEBHOOK_SECRET` avec les valeurs [récupérées dans la configuration de l’application](#3-you-exchange-the-temporary-code-to-retrieve-the-app-configuration).

### Hébergement de votre application avec Glitch

Vous pouvez voir un [exemple d’application Probot](https://glitch.com/~auspicious-aardwolf), qui utilise [Glitch](https://glitch.com/) pour héberger et partager l’application. L’exemple utilise l’[API des vérifications](/rest/reference/checks), puis sélectionne les événements ainsi que les autorisations d’API des vérifications nécessaires dans le fichier `app.yml`. Glitch est un outil qui vous permet de « remixer vos propres » applications. Le remixage d’une application crée une copie de l’application que Glitch héberge et déploie. Consultez « [À propos de Glitch](https://glitch.com/about/) » pour en savoir plus sur le remixage d’applications Glitch.
