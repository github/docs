---
title: Configuration de votre environnement de développement pour créer une application GitHub
intro: 'Apprenez les bases de l’extension et de la création de nouvelles {% data variables.product.prodname_github_apps %}.'
redirect_from:
  - /apps/quickstart-guides/setting-up-your-development-environment
  - /developers/apps/setting-up-your-development-environment-to-create-a-github-app
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
shortTitle: Development environment
ms.openlocfilehash: 61370cfa0643bcba91cfe78e077346cd40286e1e
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145086429'
---
## Introduction

Ce guide décrit les étapes nécessaires pour configurer une application GitHub et l’exécuter sur un serveur. Les applications GitHub nécessitent des étapes de configuration pour gérer les événements de webhook et connecter l’inscription d’application sur GitHub à votre code. L’application de ce guide sert de base vous permettant d’étendre et de créer des applications GitHub.

À la fin de ce guide, vous aurez inscrit une application GitHub et configuré un serveur web pour recevoir des événements de webhook. Vous allez découvrir l’utilisation d’un outil appelé Smee permettant de capturer des charges utiles de webhook et de les transférer vers votre environnement de développement local. Le modèle d’application que vous allez configurer dans cette section n’a aucune fonction, mais il sert de cadre pour commencer à écrire le code de l’application à l’aide de l’API ou pour d’autres [guides de démarrage rapide](/apps/quickstart-guides/). {% ifversion fpt or ghec %} Vous pouvez consulter des exemples réussis d’applications sur la [Place de marché GitHub](https://github.com/marketplace) et [Fonctionne avec GitHub](https://github.com/works-with).{% endif %}

À la fin de ce projet, vous serez en mesure de vous authentifier en tant qu’application GitHub et en tant qu’installation. De plus, vous connaîtrez les différences entre ces méthodes d’authentification.

Voici les étapes à suivre pour configurer le modèle d’application GitHub :

1. [Démarrer un nouveau canal Smee](#step-1-start-a-new-smee-channel)
1. [Inscrire une nouvelle application GitHub](#step-2-register-a-new-github-app)
1. [Enregistrer votre clé privée et l’ID d’application](#step-3-save-your-private-key-and-app-id)
1. [Préparer l’environnement d’exécution](#step-4-prepare-the-runtime-environment)
1. [Passer en revue le code du modèle d’application GitHub](#step-5-review-the-github-app-template-code)
1. [Démarrer le serveur](#step-6-start-the-server)
1. [Installer l’application sur votre compte](#step-7-install-the-app-on-your-account)

{% data reusables.apps.app-ruby-guides %}

## Prérequis

Il peut être utile d’avoir une connaissance de base des sujets suivants :

* [Applications GitHub](/apps/about-apps)
* [Webhooks](/webhooks)
* [Langage de programmation Ruby](https://www.ruby-lang.org/en/)
* [API REST](/rest)
* [Sinatra](http://sinatrarb.com/)

Toutefois, il est possible de suivre quel que soit votre niveau d’expérience. Nous allons fournir des liens vers les informations dont vous avez besoin.

Avant de commencer, vous devez cloner le référentiel avec le code du modèle utilisé dans ce guide de démarrage rapide. Ouvrez votre application Terminal et recherchez le répertoire où vous souhaitez stocker le code. Exécutez cette commande pour cloner le référentiel [Modèle d’application GitHub](https://github.com/github-developer/github-app-template) :

```shell
$ git clone https://github.com/github-developer/github-app-template.git
```

## Étape 1. Démarrer un nouveau canal Smee

Pour aider GitHub à envoyer des webhooks à votre ordinateur local sans l’exposer à Internet, vous pouvez utiliser un outil appelé Smee. Tout d’abord, accédez à https://smee.io et cliquez sur **Démarrer un nouveau canal**. Si vous êtes déjà familiarisé avec d’autres outils qui exposent votre ordinateur local à Internet comme [`ngrok`](https://dashboard.ngrok.com/get-started) ou [`localtunnel`](https://localtunnel.github.io/www/), n’hésitez pas à les utiliser.

![Bouton Nouveau canal Smee](/assets/images/smee-new-channel.png)

Le démarrage d’un nouveau canal Smee crée un domaine unique où GitHub peut envoyer des charges utiles de webhook. Vous aurez besoin de ce domaine à l’étape suivante. Voici un exemple de domaine unique à l’adresse `https://smee.io/qrfeVRbFbffd6vD` :

![Canal unique Smee](/assets/images/smee-unique-domain.png)

Revenez ensuite au Terminal et procédez comme suit pour exécuter le client CLI Smee :

{% note %}

**Remarque :** les étapes suivantes divergent légèrement des instructions « Utiliser l’interface CLI » qui s’affichent dans votre page de canal Smee. Il n’est **pas** nécessaire de suivre les instructions « Utiliser le client Node.js » ni « Utilisation de la prise en charge intégrée de Probot ».

{% endnote %}

1. Installez le client :

    ```shell
    $ npm install --global smee-client
    ```

2. Exécutez le client (en remplaçant `https://smee.io/qrfeVRbFbffd6vD` par votre propre domaine) :

    ```shell
    $ smee --url https://smee.io/qrfeVRbFbffd6vD --path /event_handler --port 3000
    ```

    Un résultat similaire à ce qui suit s’affiche normalement :

    ```shell
    Forwarding https://smee.io/qrfeVRbFbffd6vD to http://127.0.0.1:3000/event_handler
    Connected https://smee.io/qrfeVRbFbffd6vD
    ```

La commande `smee --url <unique_channel>` indique à Smee de transférer tous les événements de webhook reçus par le canal Smee vers le client Smee s’exécutant sur votre ordinateur. L’option `--path /event_handler` transfère les événements à l’itinéraire `/event_handler`. Nous aborderons cette opération dans une [section ultérieure](#step-5-review-the-github-app-template-code). L’option `--port 3000` spécifie le port 3000, qui est le port que votre serveur écoute. Si vous utilisez Smee, votre machine n’a pas besoin d’être ouverte à l’Internet public pour recevoir des webhooks provenant de GitHub. Vous pouvez également ouvrir cette URL Smee dans votre navigateur pour inspecter les charges utiles de webhook à mesure qu’elles arrivent.

Nous vous recommandons de laisser cette fenêtre Terminal ouverte et Smee connecté pour le reste des étapes décrites dans ce guide. Bien que vous _puissiez_ déconnecter et reconnecter le client Smee sans perdre votre domaine unique (contrairement à `ngrok`), il est plus facile de rester connecté et d’effectuer les autres tâches de ligne de commande dans une autre fenêtre de Terminal.

## Étape 2. Inscrire une nouvelle application GitHub

Si vous n’avez pas encore de compte GitHub, c’est le [moment de vous inscrire](https://github.com/join). N’oubliez pas de vérifier votre e-mail avant de continuer. Pour inscrire une nouvelle application, consultez la [page des paramètres de l’application](https://github.com/settings/apps) dans votre profil GitHub, puis cliquez sur **Nouvelle application GitHub**.

![Site web GitHub, montrant **Nouvelle application**](/assets/images/new-app.png)

Un formulaire s’affiche pour indiquer les détails de votre application. Consultez « [Création d’une application GitHub](/apps/building-github-apps/creating-a-github-app/) » pour obtenir des informations générales sur les champs de cette page. Pour les besoins de ce guide, vous devez entrer des données spécifiques dans quelques champs :

{% note %}

**Remarque :** vous pouvez toujours mettre à jour ces paramètres ultérieurement pour pointer vers un serveur hébergé.

{% endnote %}

* Pour « URL de la page d’accueil », utilisez le domaine émis par Smee. Par exemple :

    ![Formulaire avec le domaine Smee rempli pour l’URL de la page d’accueil](/assets/images/homepage-url.png)

* Pour « URL du webhook », utilisez à nouveau le domaine émis par Smee. Par exemple :

    ![Formulaire avec le domaine Smee rempli pour l’URL du webhook](/assets/images/webhook-url.png)

* Pour « Secret du webhook », créez un mot de passe pour sécuriser vos points de terminaison webhook. Il doit être connu de vous uniquement (et de GitHub par le biais de ce formulaire). Le secret est important, car vous recevez des charges utiles à partir de l’Internet public et ce secret vous permet de vérifier l’expéditeur du webhook. Notez que les paramètres d’application GitHub indiquent que le secret de webhook est facultatif, ce qui est vrai dans la plupart des cas. Toutefois, vous devez définir un secret de webhook pour que le code de l’application modèle fonctionne.

    ![Formulaire avec un secret webhook rempli](/assets/images/webhook-secret.png)

* Sur la page Autorisations et webhooks, vous pouvez spécifier un ensemble d’autorisations pour votre application, qui détermine la quantité de données auxquelles votre application a accès. Dans la section « Autorisations du référentiel », faites défiler jusqu’à « Métadonnées » et sélectionnez `Access: Read-only`. Si vous décidez d’étendre cette application de modèle, vous pouvez mettre à jour ces autorisations ultérieurement.

* En bas de la page Autorisations et webhooks, spécifiez s’il s’agit d’une application privée ou d’une application publique. Ce paramètre détermine qui peut l’installer : uniquement vous ou n’importe quel utilisateur dans le monde ? Pour l’instant, laissez l’application privée en sélectionnant **Uniquement dans ce compte**.

    ![Confidentialité de l’application GitHub](/assets/images/create_app.png)

Cliquez sur **Créer une application GitHub** pour créer votre application.

## Étape 3. Enregistrer votre clé privée et l’ID d’application

Après avoir créé votre application, vous revenez à la [page des paramètres de l’application](https://github.com/settings/apps). Il vous reste deux opérations à effectuer ici :

* **Générez une clé privée pour votre application.** Cette opération est nécessaire pour authentifier votre application ultérieurement. Faites défiler la page vers le bas, puis cliquez sur **Générer une clé privée**. Enregistrez le fichier `PEM` obtenu (il porte un nom du type _`app-name`_ - _`date`_ -`private-key.pem`) dans un répertoire afin de le retrouver ultérieurement.

    ![Boîte de dialogue de génération de clé privée](/assets/images/private_key.png)

* **Notez l’ID d’application que GitHub a attribué à votre application.** Vous en aurez besoin pour préparer votre environnement d’exécution.

    <img src="/assets/images/app_id.png" alt="Your app's ID number" width="200px"/>

## Étape 4. Préparer l’environnement d’exécution

Pour sécuriser vos informations, nous vous recommandons de placer l’ensemble des secrets liés à l’application dans la mémoire de votre ordinateur où votre application peut les trouver, plutôt que de les placer directement dans votre code. Un outil de développement pratique appelé [dotenv](https://github.com/bkeepers/dotenv) charge les variables d’environnement spécifiques au projet d’un fichier `.env` vers `ENV`. N’enregistrez jamais votre fichier `.env` dans GitHub. Il s’agit d’un fichier local qui stocke des informations sensibles qui ne doivent pas se trouver sur l’Internet public. Le fichier `.env` est déjà inclus dans le fichier [`.gitignore`](/github/getting-started-with-github/ignoring-files/) du référentiel pour éviter ce problème.

Le code de modèle que vous avez téléchargé dans la [section Prérequis](#prerequisites) contient déjà un exemple de fichier appelé `.env-example`. Renommez l’exemple de fichier `.env-example` en `.env` ou créez une copie du fichier `.env-example` appelé `.env`. Vous n’avez pas encore installé dotenv. Vous l’installerez ultérieurement dans ce guide de démarrage rapide en exécutant `bundle install`. **Remarque :** les démarrages rapides qui référencent les étapes de ce guide peuvent inclure des variables d’environnement supplémentaires dans le fichier `.env-example`. Consultez le guide de démarrage rapide pour le projet que vous avez cloné sur GitHub afin d’obtenir des conseils pour définir ces variables d’environnement supplémentaires.

Vous devez ajouter ces variables au fichier `.env` :

* _`GITHUB_PRIVATE_KEY`_  : ajoutez la clé privée que vous avez [générée et enregistrée précédemment](#step-3-save-your-private-key-and-app-id). Ouvrez le fichier `.pem` avec un éditeur de texte ou utilisez la ligne de commande pour afficher le contenu du fichier : `cat path/to/your/private-key.pem`. Copiez l’intégralité du contenu du fichier en tant que valeur `GITHUB_PRIVATE_KEY` dans votre fichier `.env`. **Remarque :** étant donné que le fichier PEM contient plusieurs lignes, vous devez ajouter des guillemets autour de la valeur, comme dans l’exemple ci-dessous.
* _`GITHUB_APP_IDENTIFIER`_  : utilisez l’ID d’application que vous avez noté dans la section précédente.
* _`GITHUB_WEBHOOK_SECRET`_  : ajoutez votre secret du webhook.

Voici un exemple de fichier `.env` :

```
GITHUB_PRIVATE_KEY="-----BEGIN RSA PRIVATE KEY-----
...
HkVN9...
...
-----END DSA PRIVATE KEY-----"
GITHUB_APP_IDENTIFIER=12345
GITHUB_WEBHOOK_SECRET=your webhook secret
```

## Étape 5. Passer en revue le code du modèle d’application GitHub

Le code du modèle d’application contient déjà du code qui est nécessaire pour chaque application GitHub. Cette section vous présente en détail le code qui existe déjà dans le modèle d’application GitHub. Vous ne devez effectuer aucune étape dans cette section. Si vous êtes déjà familiarisé avec le code du modèle, vous pouvez passer à la section « [Étape 6. Démarrez le serveur](#step-6-start-the-server). »

Ouvrez le fichier `template_server.rb` dans l’éditeur de texte de votre choix. Des commentaires dans ce fichier fournissent un contexte supplémentaire pour le code du modèle. Nous vous recommandons de lire ces commentaires attentivement et même d’ajouter vos propres commentaires pour accompagner le nouveau code que vous écrivez.

En haut du fichier, la valeur `set :port 3000` définit le port utilisé lors du démarrage du serveur web, conformément au port vers lequel vous avez redirigé vos charges utiles de webhook lors de « [l’Étape 1. Démarrez un nouveau canal Smee](#step-1-start-a-new-smee-channel). »

Le code suivant correspond à la déclaration `class GHApp < Sinatra::Application`. Vous allez écrire tout le code de votre application GitHub dans cette classe.

La classe dans le modèle prêt à l’emploi effectue les opérations suivantes :
* [Lire les variables d’environnement](#read-the-environment-variables)
* [Activation de la journalisation](#turn-on-logging)
* [Définir un filtre avant](#define-a-before-filter)
* [Définir le gestionnaire de routage](#define-a-route-handler)
* [Définir les méthodes d’assistance](#define-the-helper-methods)

### Lire les variables d’environnement

La première opération effectuée par cette classe est de lire les trois variables d’environnement que vous avez définies lors de « [l’Étape 4. Préparez l’environnement d’exécution](#step-4-prepare-the-runtime-environment) » et de les stocker dans des variables en vue de les utiliser ultérieurement :

``` ruby
# Expects that the private key in PEM format. Converts the newlines
PRIVATE_KEY = OpenSSL::PKey::RSA.new(ENV['GITHUB_PRIVATE_KEY'].gsub('\n', "\n"))

# Your registered app must have a secret set. The secret is used to verify
# that webhooks are sent by GitHub.
WEBHOOK_SECRET = ENV['GITHUB_WEBHOOK_SECRET']

# The GitHub App's identifier (type integer) set when registering an app.
APP_IDENTIFIER = ENV['GITHUB_APP_IDENTIFIER']
```

### Activation de la journalisation

Voici un bloc de code qui active la journalisation pendant le développement. Il s’agit de l’environnement par défaut dans Sinatra. Ce code active la journalisation au niveau `DEBUG` pour afficher une sortie utile dans le Terminal pendant le développement de l’application :

``` ruby
# Turn on Sinatra's verbose logging during development
configure :development do
  set :logging, Logger::DEBUG
end
```

### Définir un filtre avant

Sinatra utilise des [filtres avant](https://github.com/sinatra/sinatra#filters) qui vous permettent d’exécuter du code avant le gestionnaire d’itinéraires. Le bloc `before` du modèle appelle quatre [méthodes d’assistance](https://github.com/sinatra/sinatra#helpers). L’application modèle définit ces méthodes d’assistance dans une [section ultérieure](#define-the-helper-methods).

``` ruby
# Before each request to the `/event_handler` route
before '/event_handler' do
  get_payload_request(request)
  verify_webhook_signature
  authenticate_app
  # Authenticate the app installation in order to run API operations
  authenticate_installation(@payload)
end
```

### Définir un gestionnaire de routage

Un itinéraire vide est inclus dans le code du modèle. Ce code gère toutes les demandes `POST` vers l’itinéraire `/event_handler`. Ce guide de démarrage rapide n’aborde pas l’écriture du gestionnaire d’événements. Toutefois, consultez les autres [guides de démarrage rapide](/apps/quickstart-guides/) pour obtenir des exemples expliquant comment étendre cette application de modèle.

``` ruby
post '/event_handler' do

end
```

### Définir les méthodes d’assistance

Les méthodes d’assistance de ce modèle se chargent de la majeure partie du travail. Quatre méthodes d’assistance sont définies dans cette section du code.

#### Gestion de la charge utile de webhook

La première méthode `get_payload_request` capture la charge utile de webhook et la convertit au format JSON, ce qui facilite beaucoup l’accès aux données de la charge utile.

#### Vérification de la signature du webhook

La deuxième méthode `verify_webhook_signature` effectue la vérification de la signature webhook pour s’assurer que GitHub a généré l’événement. Pour en savoir plus sur le code de l’assistance `verify_webhook_signature`, consultez « [Sécurisation de vos webhooks](/webhooks/securing/) ». Si les webhooks sont sécurisés, cette méthode journalise toutes les charges utiles entrantes sur votre Terminal. Le code d’enregistreur d’événements est utile pour vérifier que votre serveur web fonctionne, mais vous pouvez le supprimer ultérieurement.

#### Authentification en tant qu’application GitHub

Pour effectuer des appels d’API, vous allez utiliser la [bibliothèque Octokit](http://octokit.github.io/octokit.rb/). Toute tâche intéressante avec cette bibliothèque nécessite de s’authentifier, ou plutôt nécessite que votre application s’authentifie. Les applications GitHub disposent de deux méthodes d’authentification :

- Authentification en tant qu’application GitHub à l’aide d’un jeton [JSON Web Token (JWT).](https://jwt.io/introduction)
- Authentification en tant qu’installation spécifique d’une application GitHub à l’aide d’un jeton d’accès d’installation.

Vous découvrirez l’authentification en tant qu’installation dans la [section suivante](#authenticating-as-an-installation).

[L’authentification en tant qu’application GitHub](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) vous permet d’effectuer quelques opérations :

 * Vous pouvez récupérer des informations de gestion de haut niveau sur votre application GitHub.
 * Vous pouvez demander des jetons d’accès pour une installation de l’application.

Par exemple, vous vous authentifiez en tant qu’application GitHub pour récupérer une liste des comptes (organisation et personnel) qui ont installé votre application. Mais cette méthode d’authentification offre peu de possibilités avec l’API. Pour accéder aux données d’un référentiel et effectuer des opérations pour le compte de l’installation, vous devez vous authentifier en tant qu’installation. Pour ce faire, vous devez d’abord vous authentifier en tant qu’application GitHub pour demander un jeton d’accès d’installation.

Avant de pouvoir utiliser la bibliothèque Octokit.rb pour effectuer des appels d’API, vous devez initialiser un [client Octokit](http://octokit.github.io/octokit.rb/Octokit/Client.html) authentifié en tant qu’application GitHub. La méthode d’assistance `authenticate_app` se charge de cette tâche.

``` ruby
# Instantiate an Octokit client authenticated as a GitHub App.
# GitHub App authentication requires that you construct a
# JWT (https://jwt.io/introduction/) signed with the app's private key,
# so GitHub can be sure that it came from the app an not altered by
# a malicious third party.
def authenticate_app
  payload = {
      # The time that this JWT was issued, _i.e._ now.
      iat: Time.now.to_i,

      # JWT expiration time (10 minute maximum)
      exp: Time.now.to_i + (10 * 60),

      # Your GitHub App's identifier number
      iss: APP_IDENTIFIER
  }

  # Cryptographically sign the JWT
  jwt = JWT.encode(payload, PRIVATE_KEY, 'RS256')

  # Create the Octokit client, using the JWT as the auth token.
  @app_client ||= Octokit::Client.new(bearer_token: jwt)
end
```

Le code ci-dessus génère un jeton [JSON Web Token (JWT)](https://jwt.io/introduction) et l’utilise (ainsi que la clé privée de votre application) pour initialiser le client Octokit. GitHub vérifie l’authentification d’une demande en vérifiant le jeton avec la clé publique stockée de l’application. Pour en savoir plus sur le fonctionnement de ce code, consultez « [Authentification en tant qu’application GitHub](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) ».

#### Authentification en tant qu’installation

Une _installation_ fait référence à tout compte d’utilisateur ou d’organisation ayant installé l’application. Même si un utilisateur installe l’application sur plusieurs référentiels, cela compte comme une seule installation, car il s’agit du même compte. La dernière méthode d’assistance `authenticate_installation` initialise un [client Octokit](http://octokit.github.io/octokit.rb/Octokit/Client.html) authentifié en tant qu’installation. Vous utilisez ce client Octokit pour effectuer des appels d’API authentifiés.

``` ruby
# Instantiate an Octokit client authenticated as an installation of a
# GitHub App to run API operations.
def authenticate_installation(payload)
  installation_id = payload['installation']['id']
  installation_token = @app_client.create_app_installation_access_token(installation_id)[:token]
  @installation_client = Octokit::Client.new(bearer_token: installation_token)
end
```

La méthode Octokit [`create_app_installation_access_token`](http://octokit.github.io/octokit.rb/Octokit/Client/Apps.html#create_app_installation_access_token-instance_method) crée un jeton d’installation. Cette méthode accepte deux arguments :

* Installation (entier) : ID d’une installation d’application GitHub
* Options (hachage, valeur par défaut : `{}`) : ensemble personnalisable d’options

Chaque fois qu’une application GitHub reçoit un webhook, elle inclut un objet `installation` avec un `id`. À l’aide du client authentifié en tant qu’application GitHub, vous transmettez cet ID à la méthode `create_app_installation_access_token` pour générer un jeton d’accès pour chaque installation. Étant donné que vous ne transmettez aucune option à la méthode, les options sont par défaut un hachage vide. Si vous examinez [les documents](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation), vous constatez que la réponse pour `create_app_installation_access_token` inclut deux champs : `token` et `expired_at`. Le code de modèle sélectionne le jeton dans la réponse et initialise un client d’installation.

Avec cette méthode en place, chaque fois que votre application reçoit une nouvelle charge utile webhook, elle crée un client pour l’installation qui a déclenché l’événement. Ce processus d’authentification permet à votre application GitHub de fonctionner sur toutes les installations de n’importe quel compte.

Vous pouvez maintenant commencer à effectuer des appels d’API.

## Étape 6. Démarrer le serveur

Votre application n’effectue aucune _opération_ pour le moment. Toutefois, vous pouvez l’exécuter sur le serveur à ce stade.

Laissez Smee s’exécuter dans l’onglet actif de votre Terminal. Ouvrez un nouvel onglet et accédez `cd` au répertoire dans lequel vous [avez cloné le code du modèle d’application](#prerequisites). Le code Ruby dans ce référentiel démarre un serveur web [Sinatra](http://sinatrarb.com/). Ce code a quelques dépendances. Vous pouvez les installer en exécutant :

```shell
$ gem install bundler
```

Suivi de :

```shell
$ bundle install
```

Une fois les dépendances installées, vous pouvez démarrer le serveur :

```shell
$ bundle exec ruby template_server.rb
```

La réponse doit ressembler à ceci :

```shell
> == Sinatra (v2.0.3) has taken the stage on 3000 for development with backup from Puma
> Puma starting in single mode...
> * Version 3.11.2 (ruby 2.4.0-p0), codename: Love Song
> * Min threads: 0, max threads: 16
> * Environment: development
> * Listening on tcp://localhost:3000
> Use Ctrl-C to stop
```

En cas d’erreur, vérifiez que vous avez créé le fichier `.env` dans le répertoire qui contient `template_server.rb`.

Une fois que le serveur est en cours d’exécution, vous pouvez le tester en accédant à `http://localhost:3000` dans votre navigateur. Si l’application fonctionne comme prévu, une page d’erreur utile s’affiche :

<img src="/assets/images/sinatra-404.png" alt="Sinatra's 404 error page" width="500px"/>

Parfait ! Il s’agit d’une page d’erreur, mais c’est une page d’erreur _Sinatra_. Cela signifie que votre application est connectée au serveur comme prévu. Ce message s’affiche parce que vous n’avez fourni à l’application aucun élément à afficher.

## Étape 7. Installer l’application sur votre compte

Vous pouvez tester que le serveur écoute votre application en déclenchant un événement qu’il doit recevoir. Un événement simple de test consiste à installer l’application sur votre compte GitHub, ce qui doit envoyer l’événement [`installation`](/webhooks/event-payloads/#installation). Si l’application la reçoit, une sortie doit s’afficher dans l’onglet Terminal où vous avez démarré `template_server.rb`.

Pour installer l’application, consultez la [page des paramètres de l’application](https://github.com/settings/apps), choisissez votre application, puis cliquez sur **Installer l’application** dans la barre latérale. À côté de votre nom d’utilisateur, cliquez sur **Installer**.

Vous êtes invité à installer l’application sur tous les référentiels ou sur les référentiels sélectionnés. Si vous ne souhaitez pas installer l’application sur _tous_ vos référentiels, ce n’est pas un problème. Vous pouvez créer un référentiel de bac à sable à des fins de test et installer votre application ici.

<img src="/assets/images/install_permissions.png" alt="App installation permissions" width="500px"/>

Une fois que vous avez cliqué sur **Installer**, examinez la sortie dans votre Terminal. Un résultat semblable à celui-ci doit s’afficher :

```shell
> D, [2018-06-29T15:45:43.773077 #30488] DEBUG -- : ---- received event integration_installation
> D, [2018-06-29T15:45:43.773141 #30488] DEBUG -- : ----         action created
> 192.30.252.44 - - [29/Jun/2018:15:45:43 -0400] "POST / HTTP/2" 200 2 0.0067
> D, [2018-06-29T15:45:43.833016 #30488] DEBUG -- : ---- received event installation
> D, [2018-06-29T15:45:43.833062 #30488] DEBUG -- : ----         action created
> 192.30.252.39 - - [29/Jun/2018:15:45:43 -0400] "POST / HTTP/2" 200 2 0.0019
```

C’est une bonne nouvelle ! Cela signifie que votre application a reçu une notification indiquant qu’elle a été installée sur votre compte GitHub. Si un résultat semblable à celui-ci s’affiche, votre application s’exécute sur le serveur comme prévu. 🙌

Si la sortie ne s’affiche pas, assurez-vous que Smee s’exécute correctement dans un autre onglet Terminal. Si vous devez redémarrer Smee, notez que vous devez également _désinstaller_ puis _réinstaller_ l’application pour envoyer à nouveau l’événement `installation` à votre application et voir la sortie dans Terminal. Si le problème n’est pas lié à Smee, consultez la section « [Résolution des problèmes](#troubleshooting) » pour trouver des idées supplémentaires.

Si vous vous demandez d’où provient la sortie du terminal ci-dessus, elle est écrite dans le [code du modèle d’application](#prerequisites) dans `template_server.rb`.

## Dépannage

Voici quelques problèmes courants et quelques solutions suggérées. Si vous rencontrez d’autres problèmes, vous pouvez demander de l’aide ou des conseils dans {% data variables.product.prodname_support_forum_with_url %}.

* **Q :** Quand j’essaie d’installer le client en ligne de commande Smee, l’erreur suivante se produit :

    ```shell
    > npm: command not found
    ```

    **R :** Apparemment, npm n’est pas installé. La meilleure façon de l’installer consiste à télécharger le package Node.js à la page https://nodejs.org, puis de suivre les instructions d’installation pour votre système. npm est installé en même temps que Node.js.

* **Q :** Quand j’exécute le serveur, l’erreur suivante se produit :

    ```shell
    > server.rb:38:in `initialize': Neither PUB key nor PRIV key: header too long (OpenSSL::PKey::RSAError)
    ```

    **R :** Vous n’avez probablement pas configuré votre variable d’environnement de clé privée correctement. Votre variable `GITHUB_PRIVATE_KEY` doit se présenter comme suit :

    ```
    GITHUB_PRIVATE_KEY="-----BEGIN RSA PRIVATE KEY-----
    ...
    HkVN9...
    ...
    -----END RSA PRIVATE KEY-----"
    ```

    Vérifiez que vous avez copié la clé publique correcte dans votre fichier `.env`.

* **Q :** Quand j’exécute le serveur, il se bloque avec cette erreur :

    ```shell
    > Octokit::Unauthorized ... 401 - Bad credentials`
    ```

    **R :** Vous pouvez être authentifié en tant qu’application GitHub, mais pas en tant qu’installation. Veillez à suivre toutes les étapes décrites sous « [Authentifier en tant qu’installation](#authenticating-as-an-installation) » et utilisez la variable d’instance `@installation_client` (authentifiée avec un jeton d’accès d’installation) pour vos opérations d’API, et non la variable d’instance `@app_client` (authentifiée avec un JWT). Le `@app_client` peut uniquement récupérer des informations de haut niveau sur votre application et obtenir les jetons d’accès d’installation. Il ne peut pas vraiment effectuer d’autres opérations dans l’API.

* **Q :** Mon serveur n’écoute pas les événements. Le client Smee s’exécute dans une fenêtre Terminal et j’installe l’application sur un référentiel sur GitHub. Cependant, aucune sortie n’apparaît dans la fenêtre Terminal où j’exécute le serveur.

    **R :** Il est possible que vous n’exécutiez pas le client Smee, que vous exécutiez la commande Smee avec des paramètres incorrects ou que le domaine Smee ne soit pas correct dans les paramètres d’application GitHub. Commencez par vérifier que le client Smee s’exécute dans un onglet Terminal. Si ce n’est pas le problème, consultez la [page des paramètres de l’application](https://github.com/settings/apps) et vérifiez les champs affichés dans la section « [Étape 2. Inscrire une nouvelle application GitHub](#step-2-register-a-new-github-app). » Assurez-vous que le domaine dans ces champs correspond au domaine que vous avez utilisé dans votre commande `smee -u <unique_channel>` à l’« [Étape 1. Démarrez un nouveau canal Smee](#step-1-start-a-new-smee-channel). » Si aucune des actions ci-dessus ne fonctionne, vérifiez que vous exécutez la commande Smee complète, notamment les options `--path` et `--port`, par exemple : `smee --url https://smee.io/qrfeVRbFbffd6vD --path /event_handler --port 3000` (en remplaçant `https://smee.io/qrfeVRbFbffd6vD` par votre propre domaine Smee).

* **Q :** Une erreur 404 `Octokit::NotFound` s’affiche dans ma sortie de débogage :
    ```
    2018-12-06 15:00:56 - Octokit::NotFound - POST {% data variables.product.api_url_code %}/app/installations/500991/access_tokens: 404 - Not Found // See: /v3/apps/#create-a-new-installation-token:
    ```

    **R :** Vérifiez que les variables de votre fichier `.env` sont correctes. Assurez-vous que vous n’avez pas défini des variables identiques dans d’autres fichiers de variables d’environnement comme `bash_profile`. Vous pouvez vérifier les variables d’environnement que votre application utilise en ajoutant des instructions `puts` au code de votre application et en réexécutant le code. Par exemple, pour vous assurer que vous disposez du jeu de clés privées correct, vous pouvez ajouter `puts PRIVATE_KEY` au code de votre application :

    ```
    PRIVATE_KEY = OpenSSL::PKey::RSA.new(ENV['GITHUB_PRIVATE_KEY'].gsub('\n', "\n"))
    puts PRIVATE_KEY
    ```

## Conclusion

Après avoir suivi ce guide, vous avez découvert les blocs de construction de base pour développer des applications GitHub. Récapitulatif :

* Vous avez inscrit une nouvelle application GitHub
* Vous avez utilisé Smee pour recevoir des charges utiles webhook
* Vous avez exécuté un serveur web simple via Sinatra
* Vous vous êtes authentifié en tant qu’application GitHub
* Vous vous êtes authentifié en tant qu’installation

## Étapes suivantes

Vous disposez maintenant d’une application GitHub s’exécutant sur un serveur. Elle n’a encore aucune fonction, mais vous pouvez consultez des instructions expliquant comment personnaliser votre modèle d’application GitHub dans les autres [guides de démarrage rapide](/apps/quickstart-guides/).
