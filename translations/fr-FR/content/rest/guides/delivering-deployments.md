---
title: Livraison de déploiements
intro: 'À l’aide de l’API REST Déploiements, vous pouvez créer des outils personnalisés qui interagissent avec votre serveur et une application tierce.'
redirect_from:
  - /guides/delivering-deployments
  - /guides/automating-deployments-to-integrators
  - /v3/guides/delivering-deployments
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
ms.openlocfilehash: 7ac423a27fe8b1c145efa3c135d88f08487f153a
ms.sourcegitcommit: 6b1c6174d0df40c90edfd7526496baabb1dd159d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/04/2022
ms.locfileid: '148132980'
---
L’[API de déploiements][deploy API] offre à vos projets hébergés sur {% data variables.product.product_name %} la possibilité de lancer les déploiements sur un serveur que vous possédez. Combinée avec l’[API d’état][status API], elle vous permet de coordonner vos déploiements au moment où votre code atterrit sur la branche par défaut.

Ce guide utilise cette API pour illustrer une configuration que vous pouvez utiliser.
Dans notre scénario, nous allons :

* Fusionner une demande de tirage
* Une fois l’intégration continue (CI) terminée, nous définirons l’état de la demande de tirage en conséquence.
* Une fois la demande de tirage fusionnée, nous exécuterons notre déploiement sur notre serveur.

Notre système CI et notre serveur hôte seront le fruit de notre imagination. Il pourrait s’agir de Heroku, d’Amazon, ou de toute autre chose. Ce guide porte principalement sur l’installation et la configuration du serveur gérant la communication.

Si vous ne l’avez pas déjà fait, veillez à [télécharger `ngrok`][ngrok], puis apprenez à [l’utiliser][using ngrok]. Cet outil est très utile pour exposer des applications locales sur Internet.

{% ifversion cli-webhook-forwarding %} {% note %}

**Remarque :** Vous pouvez également utiliser le transfert de webhook pour configurer votre environnement local afin de recevoir des webhooks. Pour plus d’informations, consultez « [Réception de webhooks avec l’interface CLI GitHub](/developers/webhooks-and-events/webhooks/receiving-webhooks-with-the-github-cli) ».

{% endnote %} {% endif %}

Remarque : Vous pouvez télécharger le code source complet de ce projet [à partir du dépôt platform-samples][platform samples].

## Écriture de votre serveur

Nous allons écrire rapidement une application Sinatra pour prouver que nos connexions locales fonctionnent.
Commençons par ceci :

``` ruby
require 'sinatra'
require 'json'

post '/event_handler' do
  payload = JSON.parse(params[:payload])
  "Well, it worked!"
end
```

(Si vous n’êtes pas familiarisé avec le fonctionnement de Sinatra, nous vous recommandons de [lire le guide Sinatra][Sinatra].)

Démarrez ce serveur. Par défaut, Sinatra démarre sur le port `4567`. Vous devez également donc configurer `ngrok` pour qu’il commence à écouter ce port.

Pour que ce serveur fonctionne, nous devons configurer un dépôt avec un webhook.
Le webhook doit être configuré pour se déclencher chaque fois qu’une demande de tirage est créée ou fusionnée.
Créez un dépôt dans lequel vous vous sentez à l’aise pour travailler. Pourquoi pas le [dépôt De Spoon/Knife d’@octocat](https://github.com/octocat/Spoon-Knife) ?
Après cela, vous allez créer un webhook dans votre dépôt, en lui fournissant l’URL que `ngrok` vous a donnée et en choisissant `application/x-www-form-urlencoded` comme type de contenu :

![Nouvelle URL ngrok](/assets/images/webhook_sample_url.png)

Cliquez sur **Mettre à jour le webhook**. Vous devriez voir la réponse de corps suivante : `Well, it worked!`.
Très bien ! Cliquez sur **Me laisser sélectionner des événements individuels**, puis sélectionnez ce qui suit :

* Déploiement
* état du déploiement
* Demande de tirage (pull request)

Il s’agit des événements que {% data variables.product.product_name %} enverra à notre serveur chaque fois que l’action appropriée se produira. Nous allons maintenant configurer notre serveur pour *simplement* gérer le moment où les demandes de tirage sont fusionnées :

``` ruby
post '/event_handler' do
  @payload = JSON.parse(params[:payload])

  case request.env['HTTP_X_GITHUB_EVENT']
  when "pull_request"
    if @payload["action"] == "closed" && @payload["pull_request"]["merged"]
      puts "A pull request was merged! A deployment should start now..."
    end
  end
end
```

Que se passe-t-il ? Chaque événement envoyé par {% data variables.product.product_name %} est accompagné d’un en-tête HTTP `X-GitHub-Event`. Pour l’instant, nous allons uniquement nous occuper des événements de demande de tirage. Lors de la fusion d’une demande de tirage (son état est `closed`, et `merged` est `true`), nous lançons un déploiement.

Pour tester cette preuve de concept, modifiez une branche dans votre dépôt de test, ouvrez une demande de tirage et fusionnez-la. Votre serveur doit répondre en conséquence !

## Utilisation des déploiements

Avec notre serveur en place, le code en cours de révision et notre demande de tirage fusionnée, nous voulons que notre projet soit déployé.

Nous allons commencer par modifier notre écouteur d’événements pour traiter les demandes de tirage lors de leur fusion, et commencer à prêter attention aux déploiements :

``` ruby
when "pull_request"
  if @payload["action"] == "closed" && @payload["pull_request"]["merged"]
    start_deployment(@payload["pull_request"])
  end
when "deployment"
  process_deployment(@payload)
when "deployment_status"
  update_deployment_status
end
```

En fonction des informations reçues de la demande de tirage, nous allons commencer par remplir la méthode `start_deployment` :

``` ruby
def start_deployment(pull_request)
  user = pull_request['user']['login']
  payload = JSON.generate(:environment => 'production', :deploy_user => user)
  @client.create_deployment(pull_request['head']['repo']['full_name'], pull_request['head']['sha'], {:payload => payload, :description => "Deploying my sweet branch"})
end
```

Des déploiements peuvent avoir des métadonnées attachées, sous la forme d’une `payload` et d’une `description`. Bien que ces valeurs soient facultatives, elles sont utiles pour la journalisation et la représentation des informations.

Lors de la création d’un déploiement, un événement complètement distinct est déclenché. C’est pourquoi nous avons un nouveau cas `switch` dans le gestionnaire d’événements pour `deployment`. Vous pouvez utiliser ces informations pour être averti lors du déclenchement d’un déploiement.

Les déploiements pouvant prendre un peu de temps, nous voulons écouter divers événements, tels que le moment de création du déploiement et l’état dans lequel il se trouve.

Simulons un déploiement qui effectue un certain travail, et observons son effet sur la sortie. Commençons par compléter notre méthode `process_deployment` :

``` ruby
def process_deployment
  payload = JSON.parse(@payload['payload'])
  # you can send this information to your chat room, monitor, pager, etc.
  puts "Processing '#{@payload['description']}' for #{payload['deploy_user']} to #{payload['environment']}"
  sleep 2 # simulate work
  @client.create_deployment_status("repos/#{@payload['repository']['full_name']}/deployments/#{@payload['id']}", 'pending')
  sleep 2 # simulate work
  @client.create_deployment_status("repos/#{@payload['repository']['full_name']}/deployments/#{@payload['id']}", 'success')
end
```

Enfin, nous allons simuler le stockage des informations d’état en tant que sortie de console :

``` ruby
def update_deployment_status
  puts "Deployment status for #{@payload['id']} is #{@payload['state']}"
end
```

Décomposons ce qui se passe. Un nouveau déploiement est créé par `start_deployment`, ce qui déclenche l’événement `deployment`. À partir de là, nous appelons `process_deployment` à simuler le travail en cours. Pendant ce traitement, nous effectuons également un appel à `create_deployment_status`, qui permet à un récepteur de savoir ce qui se passe lorsque nous basculons l’état sur `pending`.

Une fois le déploiement terminé, nous définissons l’état sur `success`.

## Conclusion

Chez GitHub, nous utilisons une version de [Heaven][heaven] pour gérer nos déploiements depuis des années. Un flux commun est essentiellement le même que celui du serveur que nous avons généré ci-dessus :

* Attendez une réponse sur l’état des vérifications de CI (réussite ou échec)
* Si les vérifications requises réussissent, fusionnez la demande de tirage
* Heaven prend le code fusionné et le déploie sur des serveurs intermédiaires et de production
* Entre-temps, Heaven informe également tout le monde de la build, via la présence de [Hubot][hubot] dans nos salles de conversation

Et voilà ! Vous n’avez pas besoin de générer votre propre configuration de déploiement pour utiliser cet exemple.
Vous pouvez toujours vous appuyer sur les [intégrations GitHub][integrations].

[deploy API]: /rest/reference/repos#deployments
[status API]: /guides/building-a-ci-server
[ngrok]: https://ngrok.com/
[using ngrok]: /webhooks/configuring/#using-ngrok
[platform samples]: https://github.com/github/platform-samples/tree/master/api/ruby/delivering-deployments
[Sinatra]: http://www.sinatrarb.com/
[webhook]: /webhooks/
[octokit.rb]: https://github.com/octokit/octokit.rb
[access token]: /articles/creating-an-access-token-for-command-line-use
[travis api]: https://api.travis-ci.org/docs/
[janky]: https://github.com/github/janky
[heaven]: https://github.com/atmos/heaven
[hubot]: https://github.com/github/hubot
[integrations]: https://github.com/integrations
