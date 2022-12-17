---
title: Gestion des clés de déploiement
intro: Découvrez différentes façons de gérer les clés SSH sur vos serveurs lorsque vous automatisez les scripts de déploiement et quelle méthode est la meilleure pour vous.
redirect_from:
  - /guides/managing-deploy-keys
  - /v3/guides/managing-deploy-keys
  - /deploy-keys
  - /articles/managing-deploy-keys
  - /multiple-keys
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
ms.openlocfilehash: 425535eb582c84801d79f00df751bb48d4a5b05e
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146058467'
---
Vous pouvez gérer des clés SSH sur vos serveurs pendant l’automatisation des scripts de déploiement en utilisant le transfert d’agent SSH, HTTPS avec des jetons OAuth, des clés de déploiement ou des utilisateurs de machine.

## Transfert d’agent SSH

Dans de nombreux cas, en particulier au début d’un projet, le transfert d’agent SSH est la méthode la plus rapide et la plus simple. Le transfert d’agent utilise les mêmes clés SSH que votre ordinateur de développement local.

#### Avantages

* Vous n’avez pas besoin de générer ni de suivre de nouvelles clés.
* Il n’y a pas de gestion des clés, les utilisateurs ont les mêmes autorisations sur le serveur que celles qu’ils ont localement.
* Comme aucune clé n’est stockée sur le serveur, si le serveur est compromis, vous n’avez pas besoin de chasser ni de supprimer les clés compromises.

#### Inconvénients

* Les utilisateurs **doivent** ouvrir une connexion SSH pour le déploiement, les processus de déploiement automatiques ne peuvent pas être utilisés.
* Le transfert d’agent SSH peut être difficile à exécuter pour les utilisateurs Windows.

#### Configuration

1. Activez le transfert d’agent localement. Pour plus d’informations, consultez [notre guide sur le transfert d’agent SSH][ssh-agent-forwarding].
2. Définissez vos scripts de déploiement pour utiliser le transfert d’agent. Par exemple, sur un script bash, l’activation du transfert d’agent ressemble à ceci : `ssh -A serverA 'bash -s' < deploy.sh`

## Clonage HTTPS avec des jetons OAuth

Si vous ne voulez pas utiliser de clés SSH, vous pouvez utiliser HTTPS avec des jetons OAuth.

#### Avantages

* Toute personne ayant accès au serveur peut déployer le dépôt.
* Les utilisateurs n’ont pas besoin de changer leurs paramètres SSH locaux.
* Vous n’avez pas besoin d’avoir plusieurs jetons (un pour chaque utilisateur), un jeton par serveur suffit.
* Un jeton peut être révoqué à tout moment, ce qui le convertit essentiellement en mot de passe à usage unique.
{% ifversion ghes %}
* La génération de nouveaux jetons peut être facilement scriptée avec [l’API OAuth](/rest/reference/oauth-authorizations#create-a-new-authorization).
{% endif %}

#### Inconvénients

* Vous devez veiller à configurer votre jeton avec les étendues d’accès appropriées.
* Les jetons sont essentiellement des mots de passe et doivent être protégés de la même façon.

#### Configuration

Consultez [notre guide sur la création d’un jeton d’accès personnel](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token).

## Clés de déploiement

{% data reusables.repositories.deploy-keys %}

{% data reusables.repositories.deploy-keys-write-access %}

#### Avantages

* Toute personne ayant accès au dépôt et au serveur a la possibilité de déployer le projet.
* Les utilisateurs n’ont pas besoin de changer leurs paramètres SSH locaux.
* Les clés de déploiement sont en lecture seule par défaut, mais vous pouvez leur accorder un accès en écriture quand vous les ajoutez à un dépôt.

#### Inconvénients

* Déployer des clés accorde uniquement l’accès à un seul dépôt. Les projets plus complexes peuvent avoir de nombreux dépôts à tirer sur le même serveur.
* Les clés de déploiement ne sont généralement pas protégées par une phrase secrète, ce qui rend la clé facilement accessible si le serveur est compromis.

#### Configuration

1. [Exécutez la procédure `ssh-keygen`][generating-ssh-keys] sur votre serveur et notez l’endroit où vous enregistrez la paire de clés RSA publique et privée générée.
2. En haut à droite de n’importe quelle page {% data variables.product.product_name %}, cliquez sur votre photo de profil, puis sur **Votre profil**. ![Navigation vers le profil](/assets/images/profile-page.png)
3. Dans votre page de profil, cliquez sur **Dépôts**, puis sur le nom de votre dépôt. ![Lien des dépôts](/assets/images/repos.png)
4. Dans votre dépôt, cliquez sur **Paramètres**. ![Paramètres de dépôt](/assets/images/repo-settings.png)
5. Dans la barre latérale, cliquez sur **Clés de déploiement**, puis sur **Ajouter une clé de déploiement**. ![Lien Ajouter des clés de déploiement](/assets/images/add-deploy-key.png)
6. Fournissez un titre, collez-le dans votre clé publique.  ![Page Clé de déploiement](/assets/images/deploy-key.png)
7. Sélectionnez **Autoriser l’accès en écriture** pour que cette clé ait un accès en écriture sur le dépôt. Une clé de déploiement avec un accès en écriture permet à un déploiement de pousser vers le dépôt.
8. Cliquez sur **Ajouter une clé**.

#### Utilisation de plusieurs dépôts sur un seul serveur

Si vous utilisez plusieurs dépôts sur un serveur, vous devez générer une paire de clés dédiée pour chacun. Vous ne pouvez pas réutiliser une clé de déploiement pour plusieurs dépôts.

Dans le fichier de configuration SSH du serveur (généralement `~/.ssh/config`), ajoutez une entrée d’alias pour chaque dépôt. Par exemple :

```bash
Host {% ifversion fpt or ghec %}github.com{% else %}my-GHE-hostname.com{% endif %}-repo-0
        Hostname {% ifversion fpt or ghec %}github.com{% else %}my-GHE-hostname.com{% endif %}
        IdentityFile=/home/user/.ssh/repo-0_deploy_key

Host {% ifversion fpt or ghec %}github.com{% else %}my-GHE-hostname.com{% endif %}-repo-1
        Hostname {% ifversion fpt or ghec %}github.com{% else %}my-GHE-hostname.com{% endif %}
        IdentityFile=/home/user/.ssh/repo-1_deploy_key
```

* `Host {% ifversion fpt or ghec %}github.com{% else %}my-GHE-hostname.com{% endif %}-repo-0` : alias du dépôt.
* `Hostname {% ifversion fpt or ghec %}github.com{% else %}my-GHE-hostname.com{% endif %}` : configure le nom d’hôte à utiliser avec l’alias.
* `IdentityFile=/home/user/.ssh/repo-0_deploy_key` : attribue une clé privée à l’alias.

Vous pouvez ensuite utiliser l’alias du nom d’hôte pour interagir avec le dépôt en utilisant SSH, qui utilise la clé de déploiement unique attribuée à cet alias. Par exemple :

```bash
$ git clone git@{% ifversion fpt or ghec %}github.com{% else %}my-GHE-hostname.com{% endif %}-repo-1:OWNER/repo-1.git
```

## Jetons serveur à serveur

Si votre serveur doit accéder aux dépôts d’une ou de plusieurs organisations, vous pouvez utiliser une application GitHub pour définir l’accès dont vous avez besoin, puis générer des jetons _serveur à serveur_ avec une _étendue limitée_ à partir de cette application GitHub. Les jetons serveur à serveur peuvent être limités à un ou plusieurs dépôts, et peuvent avoir des autorisations affinées. Par exemple, vous pouvez générer un jeton avec un accès en lecture seule sur le contenu d’un dépôt.

Comme les applications GitHub sont des acteurs de choix sur {% data variables.product.product_name %}, les jetons serveur à serveur sont découplés à partir de n’importe quel utilisateur GitHub, ce qui les rend comparables aux « jetons de service ». Par ailleurs, les jetons serveur à serveur ont des limites de débit dédiées qui se mettent à l’échelle en fonction de la taille des organisations sur lesquelles ils agissent. Pour plus d’informations, consultez [Limites de débit des {% data variables.product.prodname_github_apps %}](/developers/apps/rate-limits-for-github-apps).

#### Avantages

- Jetons avec une étendue limitée, et avec des jeux d’autorisation et des délais d’expiration bien définis (1 heure ou moins s’ils sont révoqués manuellement avec l’API).
- Limites de débit dédiées qui augmentent avec votre organisation.
- Découplés à partir des identités utilisateur GitHub, ils ne consomment donc aucun siège avec licence.
- Ne reçoit jamais de mot de passe, ne peut donc pas recevoir de connexion directe.

#### Inconvénients

- Une configuration supplémentaire est nécessaire pour créer l’application GitHub.
- Les jetons serveur à serveur expirent au bout d’une heure, ils doivent donc être regénérés, en général à la demande dans le code.

#### Configuration

1. Déterminez si votre application GitHub doit être publique ou privée. Si votre application GitHub agit uniquement sur les dépôts au sein de votre organisation, elle peut être privée.
1. Déterminez les autorisations dont a besoin votre application GitHub, par exemple, un accès en lecture seule au contenu du dépôt.
1. Créez votre application GitHub dans la page des paramètres de votre organisation. Pour plus d’informations, consultez [Création d’une application GitHub](/developers/apps/creating-a-github-app).
1. Notez l’`id` de votre application GitHub.
1. Générez et téléchargez la clé privée de votre application GitHub, et stockez-la en lieu sûr. Pour plus d’informations, consultez [Génération d’une clé privée](/developers/apps/authenticating-with-github-apps#generating-a-private-key).
1. Installez votre application GitHub sur les dépôts sur lesquelles elle doit agir, vous pouvez éventuellement installer l’application GitHub sur tous les dépôts de votre organisation.
1. Identifiez l’`installation_id` qui représente la connexion entre votre application GitHub et les dépôts de l’organisation auxquels elle peut accéder.  Chaque paire application GitHub/organisation a un seul `installation_id`. Vous pouvez identifier cet `installation_id` avec [Obtenir une installation d’organisation pour l’application authentifiée](/rest/reference/apps#get-an-organization-installation-for-the-authenticated-app). L’application doit être authentifiée comme une application GitHub avec un jeton JWT. Pour plus d’informations, consultez [Authentification comme une application GitHub](/developers/apps/authenticating-with-github-apps#authenticating-as-a-github-app).
1. Générez un jeton serveur à serveur en utilisant le point de terminaison d’API REST correspondant, [Créer un jeton d’accès d’installation pour une application](/rest/reference/apps#create-an-installation-access-token-for-an-app). L’application doit être authentifiée comme une application GitHub avec un jeton JWT. Pour plus d’informations, consultez [Authentification comme une application GitHub](/developers/apps/authenticating-with-github-apps#authenticating-as-a-github-app) et [Authentification comme une installation](/developers/apps/authenticating-with-github-apps#authenticating-as-an-installation).
1. Utilisez ce jeton serveur à serveur pour interagir avec vos dépôts, via l’API REST ou l’API GraphQL, ou via un client Git.

## Utilisateurs machines

Si votre serveur doit avoir accès à plusieurs dépôts, vous pouvez créer un compte sur {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} et attacher une clé SSH, utilisée exclusivement pour l’automatisation. Comme ce compte sur {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} n’est pas utilisé par un humain, on l’appelle _utilisateur machine_. Vous pouvez ajouter l’utilisateur machine comme [collaborateur][collaborator] sur un dépôt personnel (en lui accordant un accès en lecture et en écriture), comme [collaborateur externe][outside-collaborator] sur un dépôt d’organisation (en lui accordant un accès en lecture, en écriture ou d’administrateur) ou l’ajouter à une [équipe][team] avec un accès aux dépôts dont il a besoin pour l’automatisation (en lui accordant les autorisations de l’équipe).

{% ifversion fpt or ghec %}

{% tip %}

**Astuce :** Nos [conditions d’utilisation][tos] stipulent :

> *Les comptes inscrits par des « bots » ou d’autres méthodes automatisées ne sont pas autorisés.*

Cela signifie que vous ne pouvez pas automatiser la création de comptes. Toutefois, si vous voulez créer un utilisateur machine pour automatiser des tâches comme le déploiement de scripts dans votre projet ou organisation, vous pouvez le faire.

{% endtip %}

{% endif %}

#### Avantages

* Toute personne ayant accès au dépôt et au serveur a la possibilité de déployer le projet.
* Aucun utilisateur (humain) n’a besoin de changer ses paramètres SSH locaux.
* Vous n’avez pas besoin de plusieurs clés, une par serveur suffit.

#### Inconvénients

* Seules les organisations peuvent limiter les utilisateurs machines à l’accès en lecture seule. Les dépôts personnels accordent toujours aux collaborateurs un accès en lecture/écriture.
* Les clés d’utilisateur machine, comme les clés de déploiement, ne sont généralement pas protégées par une phrase secrète.

#### Configuration

1. [Exécutez la procédure `ssh-keygen`][generating-ssh-keys] sur votre serveur et attachez la clé publique au compte de l’utilisateur machine.
2. Donnez au compte de l’utilisateur machine un accès aux dépôts que vous voulez automatiser. Pour ce faire, vous pouvez ajouter le compte comme [collaborateur][collaborator], comme [collaborateur externe][outside-collaborator] ou l’ajouter à une [équipe][team] d’organisation.

[ssh-agent-forwarding]: /guides/using-ssh-agent-forwarding/
[generating-ssh-keys]: /articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/#generating-a-new-ssh-key
[tos]: /free-pro-team@latest/github/site-policy/github-terms-of-service/
[git-automation]: /articles/git-automation-with-oauth-tokens
[collaborator]: /articles/inviting-collaborators-to-a-personal-repository
[outside-collaborator]: /articles/adding-outside-collaborators-to-repositories-in-your-organization
[team]: /articles/adding-organization-members-to-a-team

## Pour aller plus loin
- [Configuration des notifications](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/configuring-notifications#organization-alerts-notification-options)
