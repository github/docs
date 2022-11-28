---
title: Création de tests d’intégration continue CI avec l’API Vérifications
intro: 'Générez un serveur d’intégration continue pour exécuter des tests en utilisant une {% data variables.product.prodname_github_app %} et l’API de vérification.'
redirect_from:
  - /apps/quickstart-guides/creating-ci-tests-with-the-checks-api
  - /developers/apps/creating-ci-tests-with-the-checks-api
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
shortTitle: CI tests using Checks API
ms.openlocfilehash: 0459714ae9ffb8094c70a714a60a66a19964424f
ms.sourcegitcommit: 06d16bf9a5c7f3e7107f4dcd4d06edae5971638b
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/21/2022
ms.locfileid: '148179676'
---
## Introduction

Ce guide présente [GitHub Apps](/apps/) et l’API [Vérifications](/rest/reference/checks), que vous allez utiliser pour créer un serveur d’intégration continue (CI) qui exécute des tests.

L’intégration continue (CI) est une pratique logicielle qui nécessite un validation fréquente de code dans un dépôt partagé. Le fait de valider le code plus souvent permet de détecter les erreurs plus tôt, et réduit la quantité de code dont un développeur a besoin pour le débogage quand il trouve la source d’une erreur. Les mises à jour fréquentes du code facilitent également la fusion des modifications apportées par différents membres d’une équipe de développement logiciel. Ceci est idéal pour les développeurs, qui peuvent alors passer plus de temps à écrire du code et moins de temps à déboguer des erreurs ou à résoudre les conflits de fusion. 🙌

Un serveur de CI héberge du code qui exécute des tests de CI, comme des linters de code (qui vérifient la mise en forme du style), des vérifications de sécurité, la couverture du code et d’autres vérifications sur de nouvelles validations de code dans un dépôt. Des serveurs de CI peuvent même générer et déployer du code sur des serveurs intermédiaires ou de production. Pour obtenir des exemples de types de tests de CI que vous pouvez créer avec une application GitHub, consultez les [applications d’intégration continue](https://github.com/marketplace/category/continuous-integration) disponibles dans la Place de marché GitHub.

{% data reusables.apps.app-ruby-guides %}

### Vue d’ensemble de l’API Vérifications

[L’API Vérifications](/rest/reference/checks) vous permet de configurer des tests de CI qui s’exécutent automatiquement sur chaque validation de code dans un dépôt. L’API Vérifications fournit des informations détaillées concernant chaque vérification sur GitHub sous l’onglet **Vérifications** de la demande de tirage. Avec l’API Vérifications, vous pouvez créer des annotations avec des détails supplémentaires pour des lignes de code spécifiques. Des annotations sont visibles sous l’onglet **Vérifications**. Lorsque vous créez une annotation pour un fichier qui fait partie de la demande de tirage, les annotations sont également affichées sous l’onglet **Fichiers modifiés**.

Une _suite de vérifications_ est un groupe _d’exécutions de vérification_ (tests de CI individuels). Tant la suite que les exécutions contiennent des _états_ qui sont visibles dans une demande de tirage sur GitHub. Vous pouvez utiliser les états pour déterminer quand une validation de code introduit des erreurs. L’utilisation de ces états avec des [branches protégées](/rest/reference/repos#branches) peut empêcher des personnes de fusionner des demandes de tirage prématurément. Pour plus d’informations, consultez « [À propos des branches protégées](/github/administering-a-repository/about-protected-branches#require-status-checks-before-merging) ».

L’API Vérification envoie l’[événement de webhook `check_suite`](/webhooks/event-payloads/#check_suite) à toutes les applications GitHub installées sur un dépôt chaque fois que du nouveau code est envoyé (push) au dépôt. Pour recevoir toutes les actions d’événement de l’API Vérifications, l’application doit avoir l’autorisation `checks:write`. GitHub crée automatiquement des événements `check_suite` pour les nouvelles validations de code dans un dépôt en utilisant le flux par défaut. Vous pouvez choisir de [Mettre à jour les préférences du dépôt pour les suites de vérifications](/rest/reference/checks#update-repository-preferences-for-check-suites) si vous le souhaitez. Voici comment fonctionne le flux par défaut :

1. Chaque fois qu’une personne envoie du code au dépôt, GitHub envoie l’événement `check_suite` avec une action `requested` à toutes les GitHub Apps installées sur le dépôt qui ont l’autorisation`checks:write`. Cet événement permet aux applications de savoir que du code a été envoyé (push), et que GitHub a créé automatiquement une nouvelle suite de vérifications.
1. Lorsque votre application reçoit cet événement, elle peut [ajouter des exécutions de vérification](/rest/reference/checks#create-a-check-run) à cette suite.
1. Vos exécutions de vérification peuvent inclure des [annotations](/rest/reference/checks#annotations-object) qui sont affichées sur des lignes de code spécifiques.

**Dans ce guide, vous allez apprendre à effectuer les opérations suivantes :**

* Partie 1 : Configurer l’infrastructure pour un serveur de CI à l’aide de l’API Vérifications.
  * Configurer une application GitHub en tant que serveur qui reçoit des événements de l’API Vérifications.
  * Créer des exécutions de vérification pour les tests de CI quand un dépôt reçoit des validations nouvellement envoyées (push).
  * Réexécuter la exécutions de vérification quand un utilisateur demande cette action sur GitHub.
* Partie 2 : Compléter l’infrastructure de serveur de CI que vous avez créée en ajoutant un test de CI de linter.
  * Mettre à jour une exécution de vérification avec un `status`, une `conclusion` et des détails de `output`.
  * Créer des annotations sur des lignes de code que GitHub s’affiche sous les onglets **Vérifications** et **Fichiers modifiés** d’une demande de tirage.
  * Corriger automatiquement les recommandations de linter en exposant un bouton « Corriger cela » sous l’onglet **Vérifications** de la demande de tirage.

Pour vous faire une idée de ce que votre serveur de CI de l’API Vérifications fera lorsque vous aurez terminé ce démarrage rapide, consultez la démonstration ci-dessous :

![Démonstration de démarrage rapide du serveur de CI de l’API Vérifications](/assets/images/github-apps/github_apps_checks_api_ci_server.gif)

## Prérequis

Avant de commencer, vous pouvez vous familiariser avec [GitHub Apps](/apps/), [Webhooks](/webhooks) et l’[API Vérifications](/rest/reference/checks), si vous l’êtes pas encore. Vous trouverez d’autres API dans la [documentation API REST](/rest). L’API Vérifications est également disponible pour utilisation dans [GraphQL](/graphql), mais ce démarrage rapide se concentre sur REST. Pour plus d’informations, consultez les objets [Suite de vérifications](/graphql/reference/objects#checksuite) et [Exécution de vérification](/graphql/reference/objects#checkrun) de GraphQL.

Vous allez utiliser le [langage de programmation Ruby](https://www.ruby-lang.org/en/), le service de livraison de charge utile de webhook [Smee](https://smee.io/), la [bibliothèque Octokit.rb Ruby](http://octokit.github.io/octokit.rb/) pour l’API REST GitHub, et l’[infrastructure web Sinatra](http://sinatrarb.com/) pour créer votre application serveur de CI de l’API Vérifications.

Vous n’avez pas besoin d’être expert de l’un de ces outils ou concepts pour accomplir ce projet. Ce guide vous accompagnera au fil des étapes requises. Avant de commencer à créer des tests de CI avec l’API Vérifications, vous devez effectuer les opérations suivantes :

1. Cloner le dépôt [Création de tests de CI avec l’API Vérifications](https://github.com/github-developer/creating-ci-tests-with-the-checks-api).
  ```shell
    $ git clone https://github.com/github-developer/creating-ci-tests-with-the-checks-api.git
  ```

  Dans le répertoire, vous trouverez un fichier `template_server.rb` avec le code de modèle à utiliser dans ce démarrage rapide, et un fichier `server.rb` avec le code du projet terminé.

1. Procédez comme décrit dans le démarrage rapide « [Configuration de votre environnement de développement](/apps/quickstart-guides/setting-up-your-development-environment/) » pour configurer et exécuter le serveur d’applications. **Remarque :** au lieu de [cloner le dépôt de modèles d’application GitHub](/apps/quickstart-guides/setting-up-your-development-environment/#prerequisites), utilisez le fichier `template_server.rb` dans le dépôt que vous avez cloné à l’étape précédente de ce démarrage rapide.

  Si vous avez déjà effectué un démarrage rapide d’application GitHub, veillez à inscrire une _nouvelle_ application GitHub et à démarrer un nouveau canal Smee à utiliser avec ce démarrage rapide.

  Consultez la section [Résolution des problèmes](/apps/quickstart-guides/setting-up-your-development-environment/#troubleshooting) si vous rencontrez des difficultés lors de la configuration de votre modèle d’application GitHub.

## Partie 1. Création de l’interface de l’API Vérifications

Dans cette partie, vous allez ajouter le code nécessaire pour recevoir des événements de webhook `check_suite`, puis créer et mettre à jour des exécutions de vérification. Vous allez également apprendre à créer des exécutions de vérification quand une vérification a été redemandée sur GitHub. À la fin de cette section, vous serez en mesure d’afficher l’exécution de vérification que vous avez créée dans une demande de tirage GitHub.

Votre exécution de vérification n’effectuera aucune vérification du code dans cette section. Vous allez ajouter cette fonctionnalité dans la [Partie 2 : Création du test de CI Octo RuboCop](#part-2-creating-the-octo-rubocop-ci-test).

Vous devriez déjà disposer d’un canal Smee configuré qui transfère des charges utiles de webhook à votre serveur local. Votre serveur devrait être en cours d’exécution et connecté à l’application GitHub que vous avez inscrite et installée sur un dépôt de test. Si vous n’avez pas accompli les étapes décrites dans « [Configuration de votre environnement de développement](/apps/quickstart-guides/setting-up-your-development-environment/) », vous devez le faire pour pouvoir continuer.

C’est parti ! Voici les étapes que vous allez suivre dans la Partie 1 :

1. [Mise à jour des autorisations d’application](#step-11-updating-app-permissions)
1. [Ajout de la gestion des événements](#step-12-adding-event-handling)
1. [Création d’une exécution de vérification](#step-13-creating-a-check-run)
1. [Mise à jour d’une exécution de vérification](#step-14-updating-a-check-run)

## Étape 1.1. Mise à jour d’autorisations d’application

Quand vous avez [inscrit votre application pour la première fois](#prerequisites), vous avez accepté les autorisations par défaut, ce qui signifie que votre application n’a pas accès à la plupart des ressources. Pour cet exemple, votre application aura besoin de l’autorisation de lire et écrire des vérifications.

Pour mettre à jour les autorisations de votre application

1. Sélectionnez votre application dans la [page des paramètres de l’application](https://github.com/settings/apps), puis cliquez sur **Autorisations et webhooks** dans la barre latérale.
1. Dans la section « Autorisations », recherchez « Vérifications », puis sélectionnez **Lecture et écriture** dans la liste déroulante « Accès » juste à côté.
1. Dans la section « S’abonner à des événements », sélectionnez **Suite de vérifications** et **Exécution de vérification** pour vous abonner à ces événements.
{% data reusables.apps.accept_new_permissions_steps %}

Très bien ! Votre application est autorisée à effectuer les tâches que vous souhaitez. Vous pouvez maintenant ajouter le code pour gérer les événements.

## Étape 1.2. Ajout de la gestion des événements

Maintenant que votre application est abonnée aux événements **Suite de vérifications** et **Exécution de vérification**, elle va commencer à recevoir les webhooks [`check_suite`](/webhooks/event-payloads/#check_suite) et [`check_run`](/webhooks/event-payloads/#check_run). GitHub envoie des charges utiles de webhook en tant que demandes `POST`. Étant donné que vous avez transféré vos charges utiles de webhook Smee à `http://localhost/event_handler:3000`, votre serveur recevra les charges utiles de demande `POST` dans l’itinéraire `post '/event_handler'`.

Un itinéraire `post '/event_handler'` vide est déjà inclus dans le fichier `template_server.rb` que vous avez téléchargé dans la section des [prérequis](#prerequisites). Voici comment se présente l’itinéraire vide :

``` ruby
  post '/event_handler' do

    # # # # # # # # # # # #
    # ADD YOUR CODE HERE  #
    # # # # # # # # # # # #

    200 # success status
  end
```

Utilisez cet itinéraire pour gérer l’événement `check_suite` en ajoutant le code suivant :

``` ruby
# Get the event type from the HTTP_X_GITHUB_EVENT header
case request.env['HTTP_X_GITHUB_EVENT']
when 'check_suite'
  # A new check_suite has been created. Create a new check run with status queued
  if @payload['action'] == 'requested' || @payload['action'] == 'rerequested'
    create_check_run
  end
end
```

Chaque événement que GitHub envoie inclut un en-tête de demande appelé `HTTP_X_GITHUB_EVENT`, qui indique le type d’événement dans la demande `POST`. En ce moment précis, vous ne vous intéressez qu’aux événements de type `check_suite`, qui sont émis lors de la création d’une suite de vérifications. Chaque événement a un champ `action` supplémentaire qui indique le type d’action ayant déclenché les événements. Pour `check_suite`, le champ `action` peut être `requested`, `rerequested` ou `completed`.

L’action `requested` demande une exécution de vérification chaque fois que du code est envoyé (push) au dépôt, tandis que l’action `rerequested` demande que vous réexécutiez une vérification du code existant déjà dans le dépôt. Étant donné que les actions `requested` et `rerequested` nécessitent toutes deux la création d’une exécution de vérification, vous allez appeler une assistance appelée `create_check_run`. Écrivons cette méthode maintenant.

## Étape 1.3. Création d’une exécution de vérification

Vous allez ajouter cette nouvelle méthode en tant qu’[assistance Sinatra](https://github.com/sinatra/sinatra#helpers) au cas où vous voudriez que d’autres itinéraires l’utilisent également. Sous `helpers do`, ajoutez cette méthode `create_check_run` :

``` ruby
# Create a new check run with the status queued
def create_check_run
  @installation_client.create_check_run(
    # [String, Integer, Hash, Octokit Repository object] A GitHub repository.
    @payload['repository']['full_name'],
    # [String] The name of your check run.
    'Octo RuboCop',
    # [String] The SHA of the commit to check 
    # The payload structure differs depending on whether a check run or a check suite event occurred.
    @payload['check_run'].nil? ? @payload['check_suite']['head_sha'] : @payload['check_run']['head_sha'],
    # [Hash] 'Accept' header option, to avoid a warning about the API not being ready for production use.
    accept: 'application/vnd.github+json'
  )
end
```

Ce code appelle le point de terminaison « [Créer une exécution de vérification](/rest/reference/checks#create-a-check-run) » à l’aide de la [méthode create_check_run](https://msp-greg.github.io/octokit/Octokit/Client/Checks.html#create_check_run-instance_method).

Pour créer une exécution de vérification, seuls deux paramètres d’entrée sont requis : `name` et `head_sha`. Comme nous allons utiliser [RuboCop](https://rubocop.readthedocs.io/en/latest/) pour implémenter le test de CI plus loin dans ce démarrage rapide, le nom « Octo RuboCop » est utilisé ici, mais vous pouvez choisir n’importe quel nom pour l’exécution de vérification.

Pour l’instant, vous ne fournissez que les paramètres requis pour que la fonctionnalité de base opère, mais vous allez mettre à jour l’exécution de vérification plus tard, à mesure que vous recueillerez plus d’informations sur celle-ci. Par défaut, GitHub définit le `status` sur `queued`.

GitHub créant une exécution de vérification pour un SHA de validation spécifique, le paramètre `head_sha` est requis. Vous pouvez trouver le SHA de validation dans la charge utile du webhook. Même si vous ne créez pour l’instant qu’une exécution de vérification pour l’événement `check_suite`, il est bon de savoir que le `head_sha` est inclus dans les objets `check_suite` et `check_run` dans les charges utiles de l’événement.

Dans le code ci-dessus, vous utilisez l’[opérateur ternaire](https://ruby-doc.org/core-2.3.0/doc/syntax/control_expressions_rdoc.html#label-Ternary+if) qui fonctionne comme une instruction `if/else`, pour vérifier si la charge utile contient un objet `check_run`. Si c’est le cas, vous lisez le `head_sha` à partir de l’objet `check_run`. Sinon, vous l’avez lu à partir de l’objet `check_suite`.

Pour tester ce code, redémarrez le serveur à partir de votre terminal :

```shell
$ ruby template_server.rb
```

{% data reusables.apps.sinatra_restart_instructions %}

Ouvrez maintenant une demande de tirage dans le dépôt où vous avez installé votre application. Votre application devrait répondre en créant une exécution de vérification sur votre demande de tirage. Cliquez sur l’onglet **Vérifications**. Vous devriez voir quelque chose comme ceci :

![Exécution de vérification en file d’attente](/assets/images/github-apps/github_apps_queued_check_run.png)

Si vous voyez d’autres applications sous l’onglet Vérifications, cela signifie que vous disposez d’autres applications installées sur votre dépôt, qui disposent d’un accès **en lecture et écriture** aux vérifications, et sont abonnées aux événements **Suite de vérifications** et **Exécution de vérification**.

Très bien ! Vous avez demandé à GitHub de créer une exécution de vérification. Vous pouvez voir que l’état de l’exécution de vérification est défini sur `queued` en regard d’une icône jaune. Ensuite, vous allez devoir attendre que GitHub crée l’exécution de vérification et mette à jour son état.

## Étape 1.4. Mise à jour d’une exécution de vérification

Lorsque votre méthode `create_check_run` s’exécute, elle demande à GitHub de créer une nouvelle exécution de vérification. Lorsque GitHub aura terminé la création de l’exécution de vérification, vous recevrez l’événement de webhook `check_run` avec l’action `created`. Cet événement est votre signal pour commencer à exécuter la vérification.

Vous allez mettre à jour votre gestionnaire d’événements pour rechercher l’action `created`. Pendant que vous mettez à jour le gestionnaire d’événements, vous pouvez ajouter une condition pour l’action `rerequested`. Quand quelqu’un réexécute un seul test sur GitHub en cliquant sur le bouton « Réexécuter », GitHub envoie l’événement d’exécution de vérification `rerequested` à votre application. Quand une exécution de vérification est `rerequested`, vous devez recommencer le processus et créer une nouvelle exécution de vérification.

Pour inclure une condition pour l’événement `check_run` dans l’itinéraire `post '/event_handler'`, ajoutez le code suivant sous `case request.env['HTTP_X_GITHUB_EVENT']` :

``` ruby
when 'check_run'
  # Check that the event is being sent to this app
  if @payload['check_run']['app']['id'].to_s === APP_IDENTIFIER
    case @payload['action']
    when 'created'
      initiate_check_run
    when 'rerequested'
      create_check_run
    end
  end
```

GitHub envoie tous les événements pour les exécutions de vérification `created` à chaque application installée sur un dépôt disposant des autorisations de vérification nécessaires. Cela signifie que votre application recevra des exécutions de vérification créées par d’autres applications. Une exécution de vérification `created` diffère légèrement d’une suite de vérifications `requested` ou `rerequested` que GitHub envoie uniquement aux applications qui doivent exécuter une vérification. Le code ci-dessus recherche l’ID d’application de l’exécution de vérification. Cela filtre toutes les exécutions de vérification pour d’autres applications sur le dépôt.

Ensuite, vous allez écrire la méthode `initiate_check_run`, qui est l’endroit où vous allez mettre à jour l’état de la vérification d’exécution et préparer le lancement de votre test de CI.

Dans cette section, vous n’allez pas encore lancer le test de CI, mais découvrir comment mettre à jour l’état de l’exécution de vérification de `queued` à `pending`, puis de `pending` à `completed` voir le flux global d’une exécution de vérification. Dans la « [Partie 2 : Création du test de CI Octo RuboCop](#part-2-creating-the-octo-rubocop-ci-test) », vous allez ajouter le code qui effectue réellement le test de CI.

Nous allons créer la méthode `initiate_check_run` et mettre à jour l’état de l’exécution de vérification. Ajoutez le code suivant à la section assistances :

``` ruby
# Start the CI process
def initiate_check_run
  # Once the check run is created, you'll update the status of the check run
  # to 'in_progress' and run the CI process. When the CI finishes, you'll
  # update the check run status to 'completed' and add the CI results.

  @installation_client.update_check_run(
    @payload['repository']['full_name'],
    @payload['check_run']['id'],
    status: 'in_progress',
    accept: 'application/vnd.github+json'
  )

  # ***** RUN A CI TEST *****

  # Mark the check run as complete!
  @installation_client.update_check_run(
    @payload['repository']['full_name'],
    @payload['check_run']['id'],
    status: 'completed',
    conclusion: 'success',
    accept: 'application/vnd.github+json'
  )
end
```

Le code ci-dessus appelle le point de terminaison d’API « [Mettre à jour une exécution de vérification](/rest/reference/checks#update-a-check-run) » à l’aide de la [méthode Octokit `update_check_run`](https://msp-greg.github.io/octokit/Octokit/Client/Checks.html#update_check_run-instance_method) pour mettre à jour l’exécution de vérification que vous avez déjà créée.

Examinons ce que fait ce code. Tout d’abord, il met à jour l’état de l’exécution de vérification en `in_progress`, et définit implicitement l’heure `started_at` sur l’heure actuelle. Dans la [Partie 2](#part-2-creating-the-octo-rubocop-ci-test) de ce démarrage rapide, vous allez ajouter du code qui lance un test de CI réel sous `***** RUN A CI TEST *****`. Pour l’instant, vous allez laisser cette section comme un espace réservé, de sorte que le code qui le suit simulera simplement le fait que le processus de CI réussit, ainsi que tous les tests. Enfin, le code remet à jour l’état de l’exécution de vérification sur `completed`.

Dans la documentation « [Mettre à jour une exécution de vérification](/rest/reference/checks#update-a-check-run) », vous remarquerez que, lorsque vous fournissez un état `completed`, les paramètres `conclusion` et `completed_at` paramètres sont requis. La `conclusion` résume le résultat d’une exécution de vérification et peut être `success`, `failure`, `neutral`, `cancelled`, `timed_out` ou `action_required`. Vous allez définir la conclusion sur `success`, l’heure `completed_at` sur l’heure actuelle, et l’état sur `completed`.

Vous pouvez également fournir des informations supplémentaires l’action de votre vérification, mais vous y reviendrez dans la section suivante. Tester de nouveau ce code en réexécutant `template_server.rb` :

```shell
$ ruby template_server.rb
```

Accédez à votre demande de tirage ouverte, puis cliquez sur l’onglet **Vérifications**. Cliquez sur le bouton « Réexécuter tout » dans l’angle supérieur gauche. Vous devez voir l’exécution de vérification passer de `pending` à `in_progress`, et finir avec `success`:

![Exécution de vérification terminée](/assets/images/github-apps/github_apps_complete_check_run.png)

## Partie 2. Création du test de CI Octo RuboCop

[RuboCop](https://rubocop.readthedocs.io/en/latest/) est un linter et formateur de code Ruby. Il vérifie le code Ruby pour s’assurer qu’il est conforme au « [Guide de style Ruby](https://github.com/rubocop-hq/ruby-style-guide) ». RuboCop à trois fonctions principales :

* Linting pour vérifier le style de code
* Mise en forme du code
* Remplace les fonctionnalités de linting Ruby natives en utilisant `ruby -w`

Maintenant que vous avez l’interface créée pour recevoir des événements d’API Vérifications et créer des exécutions de vérification, vous pouvez créer une exécution de vérification qui implémente un test de CI.

Votre application exécute RuboCop sur le serveur de CI et crée des exécutions de vérification (tests CI dans ce cas) qui rapportent les résultats que RuboCop rapporte à GitHub.

L’API Vérifications vous permet de rapporter des détails riches sur chaque exécution de vérification, dont des états, des images, des résumés, des annotations et des actions demandées.

Les annotations sont des informations sur des lignes de code spécifiques dans un dépôt. Une annotation vous permet d’identifier et de visualiser les parties exactes du code pour lesquelles vous souhaitez afficher des informations supplémentaires. Ces informations peuvent être n’importe quoi : par exemple, un commentaire, une erreur ou un avertissement. Ce démarrage rapide utilise des annotations pour visualiser des erreurs de RuboCop.

Pour tirer parti des actions demandées, les développeurs d’applications peuvent créer des boutons sous l’onglet **Vérifications** des demandes d’extraction. Lorsque quelqu’un clique sur l’un de ces boutons, le clic envoie un événement `requested_action` `check_run` à l’application GitHub. La mesure de l’application prend est entièrement configurable par son développeur. Ce démarrage rapide vous guidera pour ajouter un bouton permettant aux utilisateurs de demander que RuboCop corrige les erreurs qu’il trouve. RuboCop prend en charge la correction automatique des erreurs à l’aide d’une option de ligne de commande, et vous allez configurer la `requested_action` pour tirer parti de cette option.

C’est parti ! Voici les étapes que vous allez suivre dans cette section :

1. [Ajout d’un fichier Ruby](#step-21-adding-a-ruby-file)
1. [Clonage du référentiel](#step-22-cloning-the-repository)
1. [Exécution de RuboCop](#step-23-running-rubocop)
1. [Collecte des erreurs de RuboCop](#step-24-collecting-rubocop-errors)
1. [Mise à jour de l’exécution de vérification avec les résultats de test de CI](#step-25-updating-the-check-run-with-ci-test-results)
1. [Correction automatique des erreurs de RuboCop](#step-26-automatically-fixing-rubocop-errors)
1. [Conseils pour la sécurité](#step-27-security-tips)

## Étape 2.1. Ajout d’un fichier Ruby

Vous pouvez transmettre des fichiers spécifiques ou des répertoires entiers pour vérification par RuboCop. Dans ce démarrage rapide, vous allez exécuter RuboCop sur un répertoire entier. RuboCop ne vérifiant que du code Ruby, vous aurez besoin d’au moins un fichier Ruby dans votre dépôt, qui contient des erreurs. L’exemple de fichier fourni ci-dessous contient quelques erreurs. Ajoutez cet exemple de fichier Ruby au dépôt où votre application est installée (veillez à nommer le fichier avec une extension `.rb`, comme dans `myfile.rb`) :

```ruby
# The Octocat class tells you about different breeds of Octocat
class Octocat
  def initialize(name, *breeds)
    # Instance variables
    @name = name
    @breeds = breeds
  end

  def display
    breed = @breeds.join("-")

    puts "I am of #{breed} breed, and my name is #{@name}."
  end
end

m = Octocat.new("Mona", "cat", "octopus")
m.display
```

## Étape 2.2. Clonage du référentiel

RuboCop est disponible en tant qu’utilitaire de ligne de commande. Cela signifie que votre application GitHub va devoir cloner une copie locale du dépôt sur le serveur de CI, afin que RuboCop puisse analyser les fichiers. Pour exécuter des opérations Git dans votre application Ruby, vous pouvez utiliser la gemme [ruby-git](https://github.com/ruby-git/ruby-git).

Le `Gemfile` dans le dépôt `building-a-checks-api-ci-server` inclut déjà la gemme ruby-git, et vous l’avez installé lors de l’exécution de `bundle install` lors des [étapes préalables](#prerequisites). Pour utiliser la gemme, ajoutez ce code au haut de votre fichier `template_server.rb` :

``` ruby
require 'git'
```

Pour cloner un dépôt, votre application a besoin d’une autorisation de lecture « Contenu de dépôt ». Plus loin dans ce démarrage rapide, vous allez devoir envoyer (push) du contenu à GitHub, ce qui nécessite une autorisation d’écriture. Continuez et définissez l’autorisation « Contenu de dépôt » de votre application sur **Lire et écrire** maintenant, afin de ne pas avoir à la mettre à jour ultérieurement. Pour mettre à jour les autorisations de votre application

1. Sélectionnez votre application dans la [page des paramètres de l’application](https://github.com/settings/apps), puis cliquez sur **Autorisations et webhooks** dans la barre latérale.
1. Dans la section « Autorisations », recherchez « Contenu de dépôt », puis sélectionnez **Lecture et écriture** dans la liste déroulante « Accès » juste à côté.
{% data reusables.apps.accept_new_permissions_steps %}

Pour cloner un dépôt à l’aide des autorisations de votre application GitHub, vous pouvez utiliser le jeton d’installation de l’application (`x-access-token:<token>`) indiqué dans l’exemple ci-dessous :

```shell
git clone https://x-access-token:<token>@github.com/<owner>/<repo>.git
```

Le code ci-dessus clone un dépôt via HTTP. Il requiert le nom complet du dépôt, qui inclut le propriétaire du dépôt (utilisateur ou organisation) et le nom du dépôt. Par exemple, le dépôt [octocat Hello-World](https://github.com/octocat/Hello-World) porte le nom complet `octocat/hello-world`.

Après avoir cloné le dépôt, votre application doit extraire les derniers changement de code et consulter une référence Git spécifique. Le code pour ce faire trouvera parfaitement place dans sa propre méthode. Pour effectuer ces opérations, la méthode a besoin du nom et du nom complet du dépôt, ainsi que de la référence pour la validation. La référence peut être un SHA, une branche ou une étiquette de validation. Ajoutez la nouvelle méthode suivante à la section de méthode d’assistance dans `template_server.rb` :

``` ruby
# Clones the repository to the current working directory, updates the
# contents using Git pull, and checks out the ref.
#
# full_repo_name  - The owner and repo. Ex: octocat/hello-world
# repository      - The repository name
# ref             - The branch, commit SHA, or tag to check out
def clone_repository(full_repo_name, repository, ref)
  @git = Git.clone("https://x-access-token:#{@installation_token.to_s}@github.com/#{full_repo_name}.git", repository)
  pwd = Dir.getwd()
  Dir.chdir(repository)
  @git.pull
  @git.checkout(ref)
  Dir.chdir(pwd)
end
```

Le code ci-dessus utilise la gemme `ruby-git` pour cloner le dépôt à l’aide du jeton d’installation de l’application. Ce code clone le code dans le même répertoire que `template_server.rb`. Pour exécuter des commandes Git dans le dépôt, le code doit changer dans le répertoire du dépôt. Avant de modifier des répertoires, le code stocke le répertoire de travail actif dans une variable (`pwd`) afin de se rappeler où retourner avant de quitter la méthode `clone_repository`.

Dans le répertoire du dépôt, ce code extrait et fusionne les dernières modifications (`@git.pull`), extrait la référence (`@git.checkout(ref)`), puis replace le répertoire dans le répertoire de travail d’origine (`pwd`).

Vous disposez maintenant d’une méthode qui clone un dépôt et valide une référence. Ensuite, vous devez ajouter du code pour obtenir les paramètres d’entrée requis et appeler la nouvelle méthode `clone_repository`. Ajoutez le code suivant sous le commentaire `***** RUN A CI TEST *****` dans votre méthode d’assistance `initiate_check_run` :

``` ruby
# ***** RUN A CI TEST *****
full_repo_name = @payload['repository']['full_name']
repository     = @payload['repository']['name']
head_sha       = @payload['check_run']['head_sha']

clone_repository(full_repo_name, repository, head_sha)
```

Le code ci-dessus obtient le nom complet du dépôt et le SHA principal de la validation à partir de la charge utile du webhook `check_run`.

## Étape 2.3. Exécution de RuboCop

Très bien ! Vous clonez le dépôt et créez des exécutions de vérification à l’aide de votre serveur de CI. Vous allez maintenant entrer dans les détails du [linter RuboCop](https://docs.rubocop.org/rubocop/usage/basic_usage.html#code-style-checker) et des [annotations de l’API Vérifications](/rest/reference/checks#create-a-check-run).

Le code suivant exécute RuboCop et enregistre les erreurs de code de style au format JSON. Ajoutez ce code sous l’appel à `clone_repository` que vous avez ajouté à l’[étape précédente](#step-22-cloning-the-repository), et au-dessus du code qui met à jour l’exécution de vérification pour terminer.

``` ruby
# Run RuboCop on all files in the repository
@report = `rubocop '#{repository}' --format json`
logger.debug @report
`rm -rf #{repository}`
@output = JSON.parse @report
```

Le code au-dessus exécute RuboCop sur tous les fichiers du répertoire du dépôt. L’option `--format json` est un moyen pratique d’enregistrer une copie des résultats de linting dans un format analysable par une machine. Pour plus de détails et un exemple du format JSON, consultez la [documentation RuboCop](https://docs.rubocop.org/rubocop/formatters.html#json-formatter).

Comme ce code stocke les résultats de RuboCop dans une variable `@report`, il peut supprimer en toute sécurité la validation du dépôt. Ce code analyse également le JSON afin que vous puissiez facilement accéder aux clés et valeurs de votre application GitHub à l’aide de la variable `@output`.

{% note %}

**Remarque :** la commande utilisée pour supprimer le dépôt (`rm -rf`) ne peut pas être annulée. Consultez l’[Étape 2.7. Conseils de sécurité](#step-27-security-tips) pour découvrir comment vérifier des webhooks pour voir s’ils contiennent des commandes malveillantes injectées susceptibles d’être utilisées pour supprimer un dépôt différent de celui prévu par votre application. Par exemple, si un acteur mal intentionné envoyait un webhook avec le nom de dépôt `./`, votre application supprimerait le répertoire racine. 😱 Si, pour une raison quelconque, vous n’utilisez _pas_ la méthode `verify_webhook_signature` (incluse dans `template_server.rb`) pour valider l’expéditeur du webhook, vérifiez que le nom du dépôt est valide.

{% endnote %}

Vous pouvez tester que ce code fonctionne et voir les erreurs signalées par RuboCop dans le résultat du débogage de votre serveur. Redémarrez le serveur `template_server.rb` et créez une demande de tirage dans le dépôt où vous testez votre application :

```shell
$ ruby template_server.rb
```

Vous devriez voir les erreurs de linting dans le résultat du débogage, même si elles ne sont pas imprimées avec la mise en forme. Vous pouvez utiliser un outil web comme le [formateur JSON](https://jsonformatter.org/) pour mettre en forme votre sortie JSON comme cette sortie d’erreur de linting mise en forme :

```json
{
  "metadata": {
    "rubocop_version": "0.60.0",
    "ruby_engine": "ruby",
    "ruby_version": "2.3.7",
    "ruby_patchlevel": "456",
    "ruby_platform": "universal.x86_64-darwin18"
  },
  "files": [
    {
      "path": "Octocat-breeds/octocat.rb",
      "offenses": [
        {
          "severity": "convention",
          "message": "Style/StringLiterals: Prefer single-quoted strings when you don't need string interpolation or special symbols.",
          "cop_name": "Style/StringLiterals",
          "corrected": false,
          "location": {
            "start_line": 17,
            "start_column": 17,
            "last_line": 17,
            "last_column": 22,
            "length": 6,
            "line": 17,
            "column": 17
          }
        },
        {
          "severity": "convention",
          "message": "Style/StringLiterals: Prefer single-quoted strings when you don't need string interpolation or special symbols.",
          "cop_name": "Style/StringLiterals",
          "corrected": false,
          "location": {
            "start_line": 17,
            "start_column": 25,
            "last_line": 17,
            "last_column": 29,
            "length": 5,
            "line": 17,
            "column": 25
          }
        }
      ]
    }
  ],
  "summary": {
    "offense_count": 2,
    "target_file_count": 1,
    "inspected_file_count": 1
  }
}
```

## Étape 2.4. Collecte d’erreurs de RuboCop

La variable `@output` contient les résultats JSON analysés du rapport de RuboCop. Comme indiqué ci-dessus, les résultats contiennent une section `summary` que votre code peut utiliser pour déterminer rapidement s’il y a des erreurs. Le code suivant définira la conclusion de l’exécution de vérification sur `success` si aucune erreur n’est signalée. RuboCop signale des erreurs pour chaque fichier figurant dans le tableau `files`. Par conséquent, s’il y a des erreurs, vous devez extraire des données de l’objet fichier.

L’API Vérifications vous permet de créer des annotations pour des lignes de code spécifiques. Lorsque vous créez ou mettez à jour une exécution de vérification, vous pouvez ajouter des annotations. Dans ce démarrage rapide, vous [mettez à jour l’exécution de vérification](/rest/reference/checks#update-a-check-run) avec des annotations.

L’API Vérifications limite le nombre d’annotations à un maximum de 50 par demande API. Pour créer plus de 50 annotations, vous devez adresser plusieurs demandes au point de terminaison [Mettre à jour une exécution de vérification](/rest/reference/checks#update-a-check-run). Par exemple, pour créer 105 annotations, vous devriez appeler le point de terminaison [Mettre à jour une exécution de vérification](/rest/reference/checks#update-a-check-run) à trois reprises. Les deux premières demandes auraient chacune 50 annotations, et la troisième inclurait les cinq annotations restantes. Chaque fois que vous mettez à jour l’exécution de vérification, des annotations sont ajoutées à la liste des annotations existantes pour l’exécution de vérification.

Une exécution de vérification attend des annotations sous la forme d’un tableau d’objets. Chaque objet d’annotation doit inclure les éléments `path`, `start_line`, `end_line`, `annotation_level` et `message`. RuboCop fournissant également les paramètres `start_column` et `end_column`, vous pouvez inclure ces paramètres facultatifs dans l’annotation. Les annotations ne prennent en charge les paramètres `start_column` et `end_column` que sur la même ligne. Pour plus d’informations, consultez la documentation de référence sur l’[objet `annotations`](/rest/reference/checks#annotations-object-1).

Vous allez extraire les informations requises de RuboCop, nécessaires pour créer chaque annotation. Ajoutez le code suivant au code que vous avez ajouté dans la [section précédente](#step-23-running-rubocop).

``` ruby
annotations = []
# You can create a maximum of 50 annotations per request to the Checks
# API. To add more than 50 annotations, use the "Update a check run" API
# endpoint. This example code limits the number of annotations to 50.
# See /rest/reference/checks#update-a-check-run
# for details.
max_annotations = 50

# RuboCop reports the number of errors found in "offense_count"
if @output['summary']['offense_count'] == 0
  conclusion = 'success'
else
  conclusion = 'neutral'
  @output['files'].each do |file|

    # Only parse offenses for files in this app's repository
    file_path = file['path'].gsub(/#{repository}\//,'')
    annotation_level = 'notice'

    # Parse each offense to get details and location
    file['offenses'].each do |offense|
      # Limit the number of annotations to 50
      next if max_annotations == 0
      max_annotations -= 1

      start_line   = offense['location']['start_line']
      end_line     = offense['location']['last_line']
      start_column = offense['location']['start_column']
      end_column   = offense['location']['last_column']
      message      = offense['message']

      # Create a new annotation for each error
      annotation = {
        path: file_path,
        start_line: start_line,
        end_line: end_line,
        start_column: start_column,
        end_column: end_column,
        annotation_level: annotation_level,
        message: message
      }
      # Annotations only support start and end columns on the same line
      if start_line == end_line
        annotation.merge({start_column: start_column, end_column: end_column})
      end

      annotations.push(annotation)
    end
  end
end
```

Ce code limite le nombre total d’annotations à 50. Toutefois, vous pouvez le modifier pour mettre à jour l’exécution de vérification pour chaque lot de 50 annotations. Le code ci-dessus inclut la variable `max_annotations` qui définit la limite de 50 utilisée dans la boucle qui itère dans les attaques.

Lorsque la valeur `offense_count` est zéro, le résultat du test de CI est `success`. S’il y a des erreurs, ce code définit la conclusion sur `neutral` afin d’empêcher l’application stricte d’erreurs à partir de linters de code. Toutefois, vous pouvez modifier la conclusion en `failure` si vous souhaitez vous assurer que la suite de vérifications échoue en cas d’erreurs de linting.

Lorsque des erreurs sont signalées, le code ci-dessus itère sur le tableau `files` dans le rapport de RuboCop. Pour chaque fichier, il extrait le chemin d’accès du fichier et définit le niveau d’annotation sur `notice`. Vous pourriez aller encore plus loin et définir des niveaux d’avertissement spécifiques pour chaque type de [RuboCop Cop](https://docs.rubocop.org/rubocop/cops.html) mais, pour simplifier les choses dans ce démarrage rapide, toutes les erreurs sont définies à un niveau de `notice`.

Ce code itère également sur chaque erreur dans le tableau `offenses` et collecte l’emplacement de l’attaque et du message d’erreur. Après avoir extrait les informations nécessaires, le code crée une annotation pour chaque erreur et la stocke dans le tableau `annotations`. En effet, les annotations ne prennent en charge les colonnes de début et de fin que sur la même ligne, et les paramètres `start_column` et `end_column` ne sont ajoutés à l’objet `annotation` que si les valeurs de ligne de début et de fin sont identiques.

Ce code ne crée pas encore d’annotation pour l’exécution de vérification. Vous allez ajouter ce code dans la section suivante.

## Étape 2.5. Mise à jour de l’exécution de vérification avec les résultats de test de CI

Chaque exécution de vérification de GitHub contient un objet `output` qui inclut des éléments `title`, `summary`, `text`, `annotations` et `images`. Étant donné que les paramètres `summary` et `title` sont les seuls requis pour le `output`, mais qu’ils ne fournissent pas beaucoup de détails, ce démarrage rapide ajoute `text` et `annotations`. Le code ici n’ajoute pas d’image, mais n’hésitez pas à en ajouter une si vous le souhaitez.

Pour le `summary`, cet exemple utilise les informations résumées de RuboCop, et ajoute de nouvelles lignes (`\n`) pour mettre en forme la sortie. Vous pouvez personnaliser ce que vous ajoutez au `text` paramètre, mais cet exemple définit le `text` paramètre sur la version RuboCop. Pour définir `summary` et `text`, ajouter ce code à celui que vous avez ajouté dans la [section précédente](#step-24-collecting-rubocop-errors) :

``` ruby
# Updated check run summary and text parameters
summary = "Octo RuboCop summary\n-Offense count: #{@output['summary']['offense_count']}\n-File count: #{@output['summary']['target_file_count']}\n-Target file count: #{@output['summary']['inspected_file_count']}"
text = "Octo RuboCop version: #{@output['metadata']['rubocop_version']}"
```

Vous disposez maintenant de toutes les informations dont vous avez besoin pour mettre à jour votre exécution de vérification. Dans la [première moitié de ce démarrage rapide](#step-14-updating-a-check-run), vous avez ajouté ce code pour définir l’état de l’exécution de vérification sur `success` :

``` ruby
# Mark the check run as complete!
@installation_client.update_check_run(
  @payload['repository']['full_name'],
  @payload['check_run']['id'],
  status: 'completed',
  conclusion: 'success',
  accept: 'application/vnd.github+json'
)
```

Vous devez mettre à jour ce code pour utiliser la variable `conclusion` que vous définissez en fonction des résultats de RuboCop (sur `success` ou `neutral`). Vous pouvez mettre à jour le code comme suit :

``` ruby
# Mark the check run as complete! And if there are warnings, share them.
@installation_client.update_check_run(
  @payload['repository']['full_name'],
  @payload['check_run']['id'],
  status: 'completed',
  conclusion: conclusion,
  output: {
    title: 'Octo RuboCop',
    summary: summary,
    text: text,
    annotations: annotations
  },
  actions: [{
    label: 'Fix this',
    description: 'Automatically fix all linter notices.',
    identifier: 'fix_rubocop_notices'
  }],
  accept: 'application/vnd.github+json'
)
```

Maintenant que vous définissez une conclusion basée sur l’état du test de CI et que vous avez ajouté la sortie des résultats de RuboCop, vous avez créé un test de CI. Félicitations ! 🙌

Le code ci-dessus ajoute également une fonctionnalité à votre serveur de CI, appelée [actions demandées](https://developer.github.com/changes/2018-05-23-request-actions-on-checks/) via l’objet `actions`. {% ifversion fpt or ghec %}(Notez que ceci n’a pas trait à [GitHub Actions](/actions).) {% endif %}Les actions demandées ajoutent un bouton sous l’onglet **Vérifications** de GitHub, qui permet à une personne de demander l’exécution de vérification pour prendre une mesure supplémentaire. La mesure supplémentaire est entièrement configurable par votre application. Par exemple, RuboCop disposant d’une fonctionnalité permettant de corriger automatiquement les erreurs détectées dans le code Ruby, votre serveur de CI peut utiliser un bouton Actions demandées pour permettre aux à des personnes de demander des corrections automatiques d’erreurs. Lorsque quelqu’un clique sur le bouton, l’application reçoit l’événement `check_run` avec une action `requested_action`. Chaque action demandée a un `identifier` que l’application utilise pour déterminer le bouton qui a été cliqué.

Dans le code ci-dessus, RuboCop ne corrige pas encore automatiquement les erreurs. Vous ajouterez cela dans la section suivante. Commencez cependant par examiner le test de CI que vous venez de créer en redémarrant le serveur `template_server.rb` et en créant une nouvelle demande de tirage :

```shell
$ ruby template_server.rb
```

Les annotations s’afficheront sous l’onglet **Vérifications**.

![Vérifier les annotations d’exécution sous l’onglet Vérifications](/assets/images/github-apps/github_apps_checks_annotations.png)

Notez le bouton « Corriger cela » que vous avez créé en ajoutant une action demandée.

![Bouton Action demandée dans l’exécution de vérification](/assets/images/github-apps/github_apps_checks_fix_this_button.png)

Si les annotations sont liées à un fichier déjà inclus dans la demande de tirage, les annotations s’afficheront également sous l’onglet **Fichiers modifiés**.

![Annotations d’exécution de vérification sous l’onglet Fichiers modifiés](/assets/images/github-apps/github_apps_checks_annotation_diff.png)

## Étape 2.6. Correction automatique d’erreurs de RuboCop

Si vous êtes arrivé jusqu’ici, bravo ! 👏 Vous avez déjà créé un test de CI. Dans cette section, vous allez ajouter une fonctionnalité qui utilise RuboCop pour corriger automatiquement les erreurs détectées. Vous avez déjà ajouté le bouton « Corriger cela » dans la [section précédente](#step-25-updating-the-check-run-with-ci-test-results). Vous allez maintenant ajouter le code pour gérer l’événement d’exécution de vérification `requested_action` déclenché quand quelqu’un clique sur le bouton « Corriger cela ».

L’outil RuboCop [offre](https://docs.rubocop.org/rubocop/usage/basic_usage.html#auto-correcting-offenses) l’option de ligne de commande `--auto-correct` pour corriger automatiquement les erreurs détectées. Lorsque vous utilisez la fonctionnalité `--auto-correct`, les mises à jour sont appliquées aux fichiers locaux sur le serveur. Vous devrez envoyer (push) les modifications à GitHub une fois RuboCop aura accompli son travail.

Pour effectuer un envoi (push) à un dépôt, votre application doit disposer d’autorisations d’écriture pour « Contenu de dépôt ». Vous redéfinirez cette autorisation à l’[Étape 2.2. Clonage du dépôt](#step-22-cloning-the-repository) sur **Lecture et écriture**. Vous êtes donc prêt.

Pour valider des fichiers, Git doit connaître le [nom d’utilisateur](/github/getting-started-with-github/setting-your-username-in-git/) et l’[e-mail](/articles/setting-your-commit-email-address-in-git/) à associer à la validation. Ajoutez deux variables d’environnement supplémentaires dans votre fichier `.env` pour stocker les paramètres de nom (`GITHUB_APP_USER_NAME`) et d’e-mail (`GITHUB_APP_USER_EMAIL`). Votre nom peut être le nom de votre application, et l’e-mail peut être n’importe quel e-mail de votre choix pour cet exemple. Par exemple :

```ini
GITHUB_APP_USER_NAME=Octoapp
GITHUB_APP_USER_EMAIL=octoapp@octo-org.com
```

Une fois que vous aurez mis à jour votre fichier `.env` avec le nom et l’e-mail de l’auteur et du valideur, vous serez prêt à ajouter du code pour lire les variables d’environnement et définir la configuration Git. Vous allez bientôt ajouter ce code.

Lorsque quelqu’un clique sur le bouton « Corriger cela », votre application reçoit le [webhook d’exécution de vérification](/webhooks/event-payloads/#check_run) avec le type d’action `requested_action`.

À l’[Étape 1.4. Mise à jour d’une exécution de vérification](#step-14-updating-a-check-run), vous avez mis à jour votre `event_handler` pour gérer les actions de recherche dans l’événement `check_run`. Vous disposez déjà d’une instruction case pour gérer les types d’actions `created` et `rerequested` :

``` ruby
when 'check_run'
  # Check that the event is being sent to this app
  if @payload['check_run']['app']['id'].to_s === APP_IDENTIFIER
    case @payload['action']
    when 'created'
      initiate_check_run
    when 'rerequested'
      create_check_run
  end
end
```

Ajoutez une autre instruction `when` après l’instruction case `rerequested` pour gérer l’événement `rerequested_action` :

``` ruby
when 'requested_action'
  take_requested_action
```

Ce code appelle une nouvelle méthode qui gère tous les événements `requested_action` pour votre application. Ajoutez la méthode suivante à la section des méthodes d’assistance de votre code :

``` ruby
# Handles the check run `requested_action` event
# See /webhooks/event-payloads/#check_run
def take_requested_action
  full_repo_name = @payload['repository']['full_name']
  repository     = @payload['repository']['name']
  head_branch    = @payload['check_run']['check_suite']['head_branch']

  if (@payload['requested_action']['identifier'] == 'fix_rubocop_notices')
    clone_repository(full_repo_name, repository, head_branch)

    # Sets your commit username and email address
    @git.config('user.name', ENV['GITHUB_APP_USER_NAME'])
    @git.config('user.email', ENV['GITHUB_APP_USER_EMAIL'])

    # Automatically correct RuboCop style errors
    @report = `rubocop '#{repository}/*' --format json --auto-correct`

    pwd = Dir.getwd()
    Dir.chdir(repository)
    begin
      @git.commit_all('Automatically fix Octo RuboCop notices.')
      @git.push("https://x-access-token:#{@installation_token.to_s}@github.com/#{full_repo_name}.git", head_branch)
    rescue
      # Nothing to commit!
      puts 'Nothing to commit'
    end
    Dir.chdir(pwd)
    `rm -rf '#{repository}'`
  end
end
```

Le code ci-dessus clone un dépôt comme le code que vous avez ajouté à l’[Étape 2.2. Clonage du dépôt](#step-22-cloning-the-repository). Une instruction `if` vérifie que l’identificateur de l’action demandée correspond à l’identificateur du bouton RuboCop (`fix_rubocop_notices`). Quand ils correspondent, le code clone le dépôt, définit le nom d’utilisateur et l’e-mail Git, puis exécute RuboCop avec l’option `--auto-correct`. L’option `--auto-correct` applique automatiquement les modifications aux fichiers du serveur de CI local.

Les fichiers sont modifiés localement, mais vous devez toujours les envoyer (push) à GitHub. Vous allez utiliser à nouveau la gemme `ruby-git` pour valider tous les fichiers. Git dispose d’une commande qui effectue une copie intermédiaire de tous les fichiers modifiés ou supprimés et les valide : `git commit -a`. Pour faire la même chose à l’aide de `ruby-git`, le code ci-dessus utilise la méthode `commit_all`. Ensuite, le code envoie (push) les fichiers validés à GitHub à l’aide du jeton d’installation, en utilisant la même méthode d’authentification que la commande Git `clone`. Enfin, il supprime le répertoire du dépôt pour s’assurer que le répertoire de travail est prêt pour l’événement suivant.

Et voilà ! Le code que vous avez écrit complète maintenant le serveur de CI de l’API Vérifications. 💪 Redémarrez votre serveur `template_server.rb` et créez une demande de tirage :

```shell
$ ruby template_server.rb
```

{% data reusables.apps.sinatra_restart_instructions %}

Cette fois, cliquez sur le bouton « Corriger cela » afin de corriger automatiquement les erreurs que RuboCop a détectées sous l’onglet **Vérifications**.

Sous l’onglet **Validations**, vous verrez une toute nouvelle validation par le nom d’utilisateur que vous avez défini dans votre configuration Git. Il se peut que vous deviez actualiser votre navigateur pour voir la mise à jour.

![Nouvelle validation pour corriger automatiquement les avis Octo RuboCop](/assets/images/github-apps/github_apps_new_requested_action_commit.png)

Étant donné qu’une nouvelle validation a été envoyée (push) au dépôt, vous verrez une nouvelle suite de vérifications pour Octo RuboCop sous l’onglet **Vérifications**. Mais cette fois, il n’y a pas d’erreur parce que RuboCop les a toutes corrigées. 🎉

![Aucune suite de vérifications ou erreur d’exécution de vérification](/assets/images/github-apps/github_apps_checks_api_success.png)

Vous trouverez le code complet de l’application que vous venez de créer dans le fichier `server.rb` dans le dépôt [Création de tests de CI avec l’API Vérifications](https://github.com/github-developer/creating-ci-tests-with-the-checks-api).

## Étape 2.7. Conseils pour la sécurité

Le modèle de code d’application GitHub dispose déjà d’une méthode pour vérifier les charges utiles de webhook entrantes afin de s’assurer qu’elles proviennent d’une source approuvée. Si vous ne validez pas les charges utiles du webhook, vous devez vous assurer que, lorsque des noms de dépôts sont inclus dans la charge utile du webhook, celui-ci ne contient pas de commandes arbitraires qui pourraient être utilisées de manière malveillante. Le code ci-dessous vérifie que le nom du dépôt contient uniquement des caractères alphabétiques latins, des traits d’union et des traits de soulignement. Pour vous donner un exemple complet, le code `server.rb` entier disponible dans le [dépôt accompagnant](https://github.com/github-developer/creating-ci-tests-with-the-checks-api) ce démarrage rapide inclut tant la méthode de validation des charges utiles du webhook, que cette vérification du nom du dépôt.

``` ruby
# This quickstart example uses the repository name in the webhook with
# command-line utilities. For security reasons, you should validate the
# repository name to ensure that a bad actor isn't attempting to execute
# arbitrary commands or inject false repository names. If a repository name
# is provided in the webhook, validate that it consists only of latin
# alphabetic characters, `-`, and `_`.
unless @payload['repository'].nil?
  halt 400 if (@payload['repository']['name'] =~ /[0-9A-Za-z\-\_]+/).nil?
end
```

## Dépannage

Voici quelques problèmes courants et quelques solutions suggérées. Si vous rencontrez d’autres problèmes, vous pouvez demander de l’aide ou des conseils dans le {% data reusables.support.prodname_support_forum_with_url %}.

* **Q :** Mon application n’envoie (push) pas de code à GitHub. Je ne vois pas les correctifs que RuboCop fabrique automatiquement.

    **R :** Assurez-vous que vous disposez d’autorisations de **Lecture et écriture** pour « Contenu de dépôt », et que vous clonez le dépôt avec votre jeton d’installation. Pour plus de détails, consultez l’[Étape 2.2. Clonage du dépôt](#step-22-cloning-the-repository).

* **Q :** Une erreur s’affiche dans le résultat du débogage de `template_server.rb` lié au clonage de mon dépôt.

    **R :** Si vous voyez l’erreur suivante, cela signifie que vous n’avez pas supprimé la validation du dépôt dans l’une des méthodes `initiate_check_run` ou `take_requested_action`, voire dans les deux :

    ```shell
    2018-11-26 16:55:13 - Git::GitExecuteError - git  clone '--' 'https://x-access-token:ghs_9b2080277016f797074c4dEbD350745f4257@github.com/codertocat/octocat-breeds.git' 'Octocat-breeds'  2>&1:fatal: destination path 'Octocat-breeds' already exists and is not an empty directory.:
    ```

    Comparez votre code au fichier `server.rb` pour vous assurer que vous avez le même code dans vos méthodes `initiate_check_run` et `take_requested_action`.

* **Q :** Les nouvelles exécutions de vérification ne s’affichent pas sous l’onglet « Vérifications » sur GitHub.

    **R :** Redémarrez Smee et réexécutez votre serveur `template_server.rb`.

* **Q :** Je ne vois pas le bouton « Réexécuter tout » sous l’onglet « Vérifications » sur GitHub.

    **R :** Redémarrez Smee et réexécutez votre serveur `template_server.rb`.

## Conclusion

Ce guide vous a inculqué les bases de l’utilisation de l’API Vérifications pour créer un serveur de CI. Récapitulatif :

* Vous avez configuré votre serveur pour recevoir des événements de l’API Vérifications et créer des exécutions de vérification.
* Vous avez utilisé RuboCop pour vérifier le code dans les dépôts et créer des annotations pour les erreurs.
* Vous avez implémenté une action demandée qui corrige automatiquement les erreurs de linter.

## Étapes suivantes

Voici quelques suggestions d’étapes à accomplir ensuite :

* Actuellement, le bouton « Corriger cela » s’affiche toujours. Mettez à jour le code que vous avez écrit pour afficher le bouton « Corriger cela » uniquement quand RuboCop détecte des erreurs.
* Si vous préférez que RuboCop ne valide pas les fichiers directement dans la branche principale, vous pouvez mettre à jour le code pour [créer une demande de tirage](/rest/reference/pulls#create-a-pull-request) avec une nouvelle branche basée sur la branche principale.
