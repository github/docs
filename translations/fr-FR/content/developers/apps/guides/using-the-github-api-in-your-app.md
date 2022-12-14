---
title: Utilisation de l’API GitHub dans votre application
intro: Découvrez comment configurer votre application pour écouter les événements et utiliser la bibliothèque Octokit pour effectuer des opérations d’API REST.
redirect_from:
  - /apps/building-your-first-github-app
  - /apps/quickstart-guides/using-the-github-api-in-your-app
  - /developers/apps/using-the-github-api-in-your-app
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
shortTitle: Build an app with the REST API
ms.openlocfilehash: 93679e41fe145406ed1eb99e2daaba6bf8e10e76
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145086421'
---
## Introduction

Ce guide vous permet de créer une application GitHub et de l’exécuter sur un serveur. L’application que vous générez ajoute une étiquette à tous les nouveaux problèmes ouverts dans le référentiel où l’application est installée.

Ce projet présente les étapes suivantes :

* Programmation de votre application pour écouter les événements
* Utilisation de la bibliothèque Octokit.rb pour effectuer des opérations de l’API REST

{% data reusables.apps.app-ruby-guides %}

Après avoir suivi les étapes, vous serez prêt à développer d’autres types d’intégrations à l’aide de la suite complète d’API GitHub. {% ifversion fpt or ghec %} Vous pouvez consulter des exemples réussis d’applications sur la [Place de marché GitHub](https://github.com/marketplace) et [Fonctionne avec GitHub](https://github.com/works-with).{% endif %}

## Prérequis

Il peut être utile d’avoir une connaissance de base des sujets suivants :

* [Applications GitHub](/apps/about-apps)
* [Webhooks](/webhooks)
* [Langage de programmation Ruby](https://www.ruby-lang.org/en/)
* [API REST](/rest)
* [Sinatra](http://sinatrarb.com/)

Toutefois, il est possible de suivre quel que soit votre niveau d’expérience. Nous allons fournir des liens vers les informations dont vous avez besoin.

Avant de débuter, vous devez :

1. Cloner le référentiel [Utilisation de l’API GitHub dans votre application](https://github.com/github-developer/using-the-github-api-in-your-app).
  ```shell
    $ git clone https://github.com/github-developer/using-the-github-api-in-your-app.git
  ```

  Dans le répertoire, vous trouverez un fichier `template_server.rb` avec le code de modèle à utiliser dans ce guide de démarrage rapide et un fichier `server.rb` avec le code de projet terminé.

1. Procédez comme décrit dans le guide de démarrage rapide [Configuration de votre environnement de développement](/apps/quickstart-guides/setting-up-your-development-environment/) pour configurer et exécuter le serveur d’applications `template_server.rb`. Si vous avez déjà suivi un autre guide de démarrage rapide sur l’application GitHub que [Configuration de votre environnement de développement](/apps/quickstart-guides/setting-up-your-development-environment/), vous devez inscrire une _nouvelle_ application GitHub et démarrer un nouveau canal Smee à utiliser avec ce guide de démarrage rapide.

  Ce guide de démarrage rapide inclut le même code `template_server.rb` que le guide de démarrage rapide [Configuration de votre environnement de développement](/apps/quickstart-guides/setting-up-your-development-environment/). **Remarque :** à mesure que vous suivez le guide de démarrage rapide [Configuration de votre environnement de développement](/apps/quickstart-guides/setting-up-your-development-environment/), veillez à utiliser les fichiers projet inclus dans votre référentiel [Utilisation de l’API GitHub dans votre application](https://github.com/github-developer/using-the-github-api-in-your-app).

  Consultez la section [Résolution des problèmes](/apps/quickstart-guides/setting-up-your-development-environment/#troubleshooting) si vous rencontrez des problèmes lors de la configuration de votre modèle d’application GitHub.

## Génération de l’application

Maintenant que vous êtes familiarisé avec le code `template_server.rb`, vous allez créer du code qui ajoute automatiquement l’étiquette `needs-response` à tous les problèmes ouverts dans le référentiel où l’application est installée.

Le fichier `template_server.rb` contient du code de modèle d’application qui n’a pas encore été personnalisé. Dans ce fichier, vous verrez du code d’espace réservé pour la gestion des événements de webhook et d’autres codes pour l’initialisation d’un client Octokit.rb.

{% note %}

**Remarque :** `template_server.rb` contient de nombreux commentaires de code qui complètent ce guide et expliquent des détails techniques supplémentaires. Il est utile de lire les commentaires de ce fichier à ce stade, avant de poursuivre cette section, afin d’obtenir une vue d’ensemble du fonctionnement du code.

Le code personnalisé final que vous allez créer à la fin de ce guide est fourni dans [`server.rb`](https://github.com/github-developer/using-the-github-api-in-your-app/blob/master/server.rb). Cependant, essayez d’attendre jusqu’à la fin pour le consulter.

{% endnote %}

Voici les étapes à suivre pour créer votre première application GitHub :

1. [Mettre à jour les autorisations d’application](#step-1-update-app-permissions)
2. [Ajouter la gestion des événements](#step-2-add-event-handling)
3. [Créer une étiquette](#step-3-create-a-new-label)
4. [Ajouter la gestion des étiquettes](#step-4-add-label-handling)

## Étape 1. Mettre à jour les autorisations d’application

Quand vous avez [inscrit votre application pour la première fois](/apps/quickstart-guides/setting-up-your-development-environment/#step-2-register-a-new-github-app), vous avez accepté les autorisations par défaut, ce qui signifie que votre application n’a pas accès à la plupart des ressources. Pour cet exemple, votre application doit être autorisée à lire les problèmes et à écrire des étiquettes.

Pour mettre à jour les autorisations de votre application :

1. Sélectionnez votre application dans la [page des paramètres de l’application](https://github.com/settings/apps), puis cliquez sur **Autorisations et webhooks** dans la barre latérale.
1. Dans la section « Autorisations », recherchez « Problèmes » et sélectionnez **Lecture et écriture** dans la liste déroulante « Accès » placée à côté. La description indique que cette option octroie l’accès aux problèmes et aux étiquettes, ce qui correspond à votre besoin.
1. Dans la section « S’abonner aux événements », sélectionnez **Problèmes** pour vous abonner à l’événement.
{% data reusables.apps.accept_new_permissions_steps %}

Très bien ! Votre application est autorisée à effectuer les tâches que vous souhaitez. Vous pouvez maintenant ajouter le code pour que cela fonctionne.

## Étape 2. Ajouter la gestion des événements

La première tâche de votre application est d’écouter les nouveaux problèmes qui sont ouverts. Maintenant que vous êtes abonné à l’événement **Problèmes**, vous commencez à recevoir le webhook [`issues`](/webhooks/event-payloads/#issues), qui est déclenché quand certaines actions liées au problème se produisent. Vous pouvez filtrer ce type d’événement pour l’action spécifique souhaitée dans votre code.

GitHub envoie des charges utiles de webhook en tant que demandes `POST`. Étant donné que vous avez transféré vos charges utiles de webhook Smee à `http://localhost/event_handler:3000`, votre serveur reçoit les charges utiles de la demande `POST` dans l’itinéraire `post '/event_handler'`.

Un itinéraire `post '/event_handler'` vide est déjà inclus dans le fichier `template_server.rb` que vous avez téléchargé dans la section des [prérequis](#prerequisites). Voici comment se présente l’itinéraire vide :

``` ruby
  post '/event_handler' do

    # # # # # # # # # # # #
    # ADD YOUR CODE HERE  #
    # # # # # # # # # # # #

    200 # success status
  end
```

Utilisez cet itinéraire pour gérer l’événement `issues` en ajoutant le code suivant :

``` ruby
case request.env['HTTP_X_GITHUB_EVENT']
when 'issues'
  if @payload['action'] === 'opened'
    handle_issue_opened_event(@payload)
  end
end
```

Chaque événement que GitHub envoie inclut un en-tête de demande appelé `HTTP_X_GITHUB_EVENT`, qui indique le type d’événement dans la demande `POST`. Vous ne vous occupez pour l’instant que des types d’événement `issues`. Chaque événement a un champ supplémentaire `action` qui indique le type d’action qui a déclenché les événements. Pour `issues`, le champ `action` peut être `assigned`, `unassigned`, `labeled`, `unlabeled`, `opened`, `edited`, `milestoned`, `demilestoned`, `closed` ou `reopened`.

Pour tester votre gestionnaire d’événements, essayez d’ajouter une méthode d’assistance temporaire. Vous effectuerez une mise à jour ultérieurement à l’étape [Ajouter la gestion des étiquettes](#step-4-add-label-handling). Pour l’instant, ajoutez le code suivant dans la section `helpers do` du code. Vous pouvez placer la nouvelle méthode au-dessus ou en dessous de l’une des autres méthodes d’assistance. L’ordre n’a pas d’importance.

``` ruby
def handle_issue_opened_event(payload)
  logger.debug 'An issue was opened!'
end
```

Cette méthode reçoit une charge utile d’événement au format JSON en tant qu’argument. Cela signifie que vous pouvez analyser la charge utile dans la méthode et explorer au niveau du détail les données spécifiques dont vous avez besoin. Il peut être judicieux d’inspecter la charge utile complète à un moment donné : essayez de remplacer `logger.debug 'An issue was opened!` par `logger.debug payload`. La structure de charge utile affichée doit correspondre à l’affichage [ dans la `issues`documentation de l’événement de webhook](/webhooks/event-payloads/#issues).

Très bien ! Il est temps de tester les modifications.

{% data reusables.apps.sinatra_restart_instructions %}

Dans votre navigateur, accédez au référentiel où vous avez installé votre application. Ouvrez un nouveau problème dans ce référentiel. Le problème peut concerner tout sujet que vous souhaitez. Il est utilisé à des fins de tests uniquement.

Quand vous repassez à votre Terminal, un message dans la sortie doit indiquer : `An issue was opened!` Félicitations ! Vous avez ajouté un gestionnaire d’événements à votre application. 💪

## Étape 3. Créer une étiquette

Bien, votre application est désormais en mesure d’indiquer quand des problèmes sont ouverts. Vous souhaitez maintenant ajouter l’étiquette `needs-response` à tout problème qui vient d’être ouvert dans un référentiel dans lequel l’application est installée.

Pour pouvoir _ajouter_ l’étiquette n’importe où, vous devez _créer_ l’étiquette personnalisée dans votre référentiel. Vous ne devez effectuer cette opération qu’une seule fois. Pour les besoins de ce guide, créez l’étiquette manuellement sur GitHub. Dans votre référentiel, cliquez sur **Problèmes**, puis sur **Étiquettes**, puis sur **Nouvelle étiquette**. Nommez la nouvelle étiquette `needs-response`.

{% tip %}

**Conseil** : ne serait-ce pas formidable si votre application pouvait créer l’étiquette programmatiquement ? [C’est possible](/rest/reference/issues#create-a-label) ! Essayez d’ajouter le code pour cela vous-même une fois que vous avez terminé les étapes décrites dans ce guide.

{% endtip %}

Maintenant que l’étiquette existe, vous pouvez programmer votre application afin d’utiliser l’API REST pour [ajouter l’étiquette à tout problème qui vient d’être ouvert](/rest/reference/issues#add-labels-to-an-issue).

## Étape 4. Ajouter la gestion des étiquettes

Félicitations, vous êtes arrivé à l’étape finale : ajout de la gestion des étiquettes à votre application. Pour cette tâche, vous devez utiliser la [bibliothèque Octokit.rb Ruby](http://octokit.github.io/octokit.rb/).

Dans la documentation Octokit.rb, recherchez la liste des [méthodes d’étiquette](http://octokit.github.io/octokit.rb/Octokit/Client/Labels.html). La méthode à utiliser est [`add_labels_to_an_issue`](http://octokit.github.io/octokit.rb/Octokit/Client/Labels.html#add_labels_to_an_issue-instance_method).

Revenez dans `template_server.rb`, recherchez la méthode que vous avez définie auparavant :

``` ruby
def handle_issue_opened_event(payload)
  logger.debug 'An issue was opened!'
end
```

La documentation [`add_labels_to_an_issue`](http://octokit.github.io/octokit.rb/Octokit/Client/Labels.html#add_labels_to_an_issue-instance_method) indique que vous devez transmettre trois arguments à cette méthode :

* Référentiel (chaîne au format `"owner/name"`)
* Numéro de problème (entier)
* Étiquettes (tableau)

Vous pouvez analyser la charge utile pour obtenir à la fois le référentiel et le numéro de problème. Étant donné que le nom de l’étiquette est toujours identique (`needs-response`), vous pouvez le transmettre en tant que chaîne codée en dur dans le tableau d’étiquettes. Avec les différents éléments, voici à quoi votre méthode mise à jour peut ressembler :

``` ruby
# When an issue is opened, add a label
def handle_issue_opened_event(payload)
  repo = payload['repository']['full_name']
  issue_number = payload['issue']['number']
  @installation_client.add_labels_to_an_issue(repo, issue_number, ['needs-response'])
end
```

Essayez d’ouvrir un nouveau problème dans votre référentiel de test et voyez ce qui se passe. Si rien ne se produit, essayez d’actualiser.

Vous ne voyez pas grand-chose dans le Terminal, _mais_ vous devez voir qu’un utilisateur de bot a ajouté une étiquette au problème.

{% note %}

**Remarque :** quand les applications GitHub effectuent des actions via l’API, comme l’ajout d’étiquettes, GitHub indique que ces actions sont effectuées par les comptes de _bot_. Pour plus d’informations, consultez « [Comptes de machine et de bot](/apps/differences-between-apps/#machine-vs-bot-accounts) ».

{% endnote %}

Si c’est le cas, félicitations ! Vous venez de créer une application qui fonctionne ! 🎉

Vous pouvez afficher le code final dans `server.rb` dans le [référentiel du modèle d’application](https://github.com/github-developer/using-the-github-api-in-your-app).

Consultez « [Étapes suivantes](#next-steps) » pour obtenir des suggestions sur les étapes que vous pouvez effectuer ensuite.

## Dépannage

Voici quelques problèmes courants et quelques solutions suggérées. Si vous rencontrez d’autres problèmes, vous pouvez demander de l’aide ou des conseils dans {% data variables.product.prodname_support_forum_with_url %}.

* **Q :** Mon serveur n’écoute pas les événements. Le client Smee s’exécute dans une fenêtre Terminal et j’envoie des événements à GitHub.com en ouvrant de nouveaux problèmes. Cependant, aucune sortie n’apparaît dans la fenêtre Terminal où j’exécute le serveur.

    **R :** Le domaine Smee indiqué dans les paramètres de votre application est peut-être incorrect. Visitez la [page des paramètres de l’application](https://github.com/settings/apps) et double-cliquez sur les champs indiqués dans « [Inscrire une nouvelle application avec GitHub](/apps/quickstart-guides/setting-up-your-development-environment/#step-2-register-a-new-github-app) ». Assurez-vous que le domaine dans ces champs correspond au domaine que vous avez utilisé dans votre commande `smee -u <unique_channel>` à l’étape « [Démarrez un nouveau canal Smee](/apps/quickstart-guides/setting-up-your-development-environment/#step-1-start-a-new-smee-channel). »

* **Q :** Mon application ne fonctionne pas. J’ai ouvert un nouveau problème. Cependant, même après l’actualisation, aucune étiquette n’a été ajoutée.

    **A :** Assurez-vous qu’il ne s’agit d’aucun des problèmes suivants :

    * Vous [avez installé l’application](/apps/quickstart-guides/setting-up-your-development-environment/#step-7-install-the-app-on-your-account) sur le référentiel où vous ouvrez le problème.
    * Votre [client Smee s’exécute](/apps/quickstart-guides/setting-up-your-development-environment/#step-1-start-a-new-smee-channel) dans une fenêtre Terminal.
    * Votre [serveur web s’exécute](/apps/quickstart-guides/setting-up-your-development-environment/#step-6-start-the-server) sans erreur dans une autre fenêtre Terminal.
    * Votre application dispose des [autorisations de lecture et d’écriture sur les problèmes et elle est abonnée aux événements de problème](/apps/quickstart-guides/setting-up-your-development-environment/#step-1-start-a-new-smee-channel).
    * Vous [avez consulté vos e-mails](#step-1-update-app-permissions) après avoir mis à jour les autorisations et accepté les nouvelles autorisations.

## Conclusion

Après avoir suivi ce guide, vous avez découvert les blocs de construction de base pour développer des applications GitHub. Récapitulatif :

* Programmation de votre application pour écouter les événements
* Utilisation de la bibliothèque Octokit.rb pour effectuer des opérations de l’API REST

## Étapes suivantes

Voici quelques suggestions d’étapes à consulter ensuite :

* [Réécrire votre application à l’aide de GraphQL](https://developer.github.com/changes/2018-04-30-graphql-supports-github-apps/).
* Réécrire votre application dans Node.js à l’aide de [Probot](https://github.com/probot/probot).
* À l’aide de l’application, vérifiez si l’étiquette `needs-response` existe déjà sur le problème. Si ce n’est pas le cas, ajoutez-la.
* Quand le bot ajoute l’étiquette avec succès, affichez un message dans le Terminal. (Conseil : comparez l’ID d’étiquette `needs-response` à l’ID de l’étiquette dans la charge utile comme condition pour votre message, de sorte que le message s’affiche uniquement quand l’étiquette concernée est ajoutée et non pas s’il s’agit d’une autre étiquette.)
* Ajoutez une page d’arrivée à votre application et connectez un [itinéraire Sinatra](https://github.com/sinatra/sinatra#routes) à celle-ci.
* Déplacez votre code vers un serveur hébergé (comme Heroku). N’oubliez pas de mettre à jour les paramètres de votre application avec le nouveau domaine.
* Partagez votre projet ou obtenez des conseils dans le {% data variables.product.prodname_support_forum_with_url %}{% ifversion fpt or ghec %}
* Avez-vous créé une application qui pourrait être utile à d’autres utilisateurs ? [Ajoutez-la à la Place de marché GitHub](/apps/marketplace/creating-and-submitting-your-app-for-approval/) !{% endif %}
