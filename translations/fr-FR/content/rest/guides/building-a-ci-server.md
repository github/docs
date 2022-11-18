---
title: Création d’un serveur CI
intro: Générez votre propre système CI à l’aide de l’API État.
redirect_from:
  - /guides/building-a-ci-server
  - /v3/guides/building-a-ci-server
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
ms.openlocfilehash: e8a22317562e209adca6cafa3fb8f1d55b1e04ee
ms.sourcegitcommit: 6b1c6174d0df40c90edfd7526496baabb1dd159d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/04/2022
ms.locfileid: '148132946'
---
L’[API État][status API] est chargée de lier les commits à un service de test afin que chaque poussée (push) que vous effectuez puisse être testée et représentée dans une demande de tirage (pull request) {% data variables.product.product_name %}.

Ce guide utilise cette API pour illustrer une configuration que vous pouvez utiliser.
Dans notre scénario, nous allons :

* Exécuter notre suite CI quand une demande de tirage est ouverte (nous définirons l’état de CI sur pending).
* Une fois le CI terminé, nous définirons l’état de la demande de tirage en conséquence.

Notre système CI et notre serveur hôte seront le fruit de notre imagination. Vous pouvez utiliser Travis, Jenkins ou autre chose. Ce guide porte principalement sur l’installation et la configuration du serveur gérant la communication.

Si vous ne l’avez pas déjà fait, [téléchargez `ngrok`][ngrok], puis apprenez à [l’utiliser][using ngrok]. Cet outil est très utile pour exposer des applications locales sur Internet.

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

* Statut
* Demande de tirage (pull request)

Il s’agit des événements que {% data variables.product.product_name %} enverra à notre serveur chaque fois que l’action appropriée se produira. Mettons à jour notre serveur pour gérer *uniquement* le scénario de demande de tirage pour l’instant :

``` ruby
post '/event_handler' do
  @payload = JSON.parse(params[:payload])

  case request.env['HTTP_X_GITHUB_EVENT']
  when "pull_request"
    if @payload["action"] == "opened"
      process_pull_request(@payload["pull_request"])
    end
  end
end

helpers do
  def process_pull_request(pull_request)
    puts "It's #{pull_request['title']}"
  end
end
```

Que se passe-t-il ? Chaque événement envoyé par {% data variables.product.product_name %} est accompagné d’un en-tête HTTP `X-GitHub-Event`. Pour l’instant, nous allons uniquement nous occuper des événements de demande de tirage. À partir de là, nous prendrons la charge utile d’informations et retournerons le champ de titre. Dans un scénario idéal, notre serveur devrait non seulement se soucier de l’ouverture d’une demande de tirage, mais aussi de sa mise à jour. Nous aurions ainsi la confirmation que chaque nouvelle poussée réussit les tests CI.
Mais pour les besoins de cette démonstration, nous allons simplement nous intéresser à l’ouverture.

Pour tester cette preuve de concept, modifiez une branche dans votre dépôt de test et ouvrez une demande de tirage. Votre serveur doit répondre en conséquence !

## Utilisation des états

Une fois notre serveur en place, nous sommes prêts à démarrer notre première exigence, qui consiste à définir (et à mettre à jour) les états de CI. Chaque fois que vous mettez à jour votre serveur, vous pouvez cliquer sur **Relivrer** pour envoyer la même charge utile. Il est inutile d’effectuer une nouvelle demande de tirage chaque fois que vous apportez une modification.

Étant donné que nous interagissons avec l’API {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}, nous allons utiliser [Octokit.rb][octokit.rb] pour gérer nos interactions. Nous allons configurer ce client avec [un {% data variables.product.pat_generic %}][access token] :

``` ruby
# !!! DO NOT EVER USE HARD-CODED VALUES IN A REAL APP !!!
# Instead, set and test environment variables, like below
ACCESS_TOKEN = ENV['MY_PERSONAL_TOKEN']

before do
  @client ||= Octokit::Client.new(:access_token => ACCESS_TOKEN)
end
```

Après cela, nous devrons simplement mettre à jour la demande de tirage sur {% data variables.product.product_name %} pour indiquer clairement que le traitement est effectué sur le CI :

``` ruby
def process_pull_request(pull_request)
  puts "Processing pull request..."
  @client.create_status(pull_request['base']['repo']['full_name'], pull_request['head']['sha'], 'pending')
end
```

Nous effectuons trois opérations basiques ici :

* nous recherchons le nom complet du dépôt ;
* nous recherchons le dernier SHA de la demande de tirage ;
* nous définissons l’état sur « pending ».

Et voilà ! À partir de là, vous pouvez exécuter n’importe quel processus dont vous avez besoin pour exécuter votre suite de tests. Vous pouvez par exemple transmettre votre code à Jenkins ou appeler un autre service web par le biais de son API, comme [Travis][travis api]. Après cela, pensez à mettre à jour l’état une fois de plus. Dans notre exemple, nous allons simplement le définir sur `"success"` :

``` ruby
def process_pull_request(pull_request)
  @client.create_status(pull_request['base']['repo']['full_name'], pull_request['head']['sha'], 'pending')
  sleep 2 # do busy work...
  @client.create_status(pull_request['base']['repo']['full_name'], pull_request['head']['sha'], 'success')
  puts "Pull request processed!"
end
``` 

## Conclusion

Chez GitHub, nous utilisons une version de [Janky][janky] pour gérer notre CI depuis des années.
Le flux de base est essentiellement le même que celui du serveur que nous avons créé ci-dessus.
Chez GitHub, nous :

* déclenchons un travail Jenkins lorsqu’une demande de tirage est créée ou mise à jour (via Janky) ;
* attendons une réponse sur l’état du CI ;
* si le code est vert, nous fusionnons la demande de tirage.

Toutes ces communications sont synthétisées dans nos salles de conversation. Vous n’avez pas besoin de créer votre propre configuration CI pour utiliser cet exemple.
Vous pouvez toujours vous appuyer sur les [intégrations GitHub][integrations].

[deploy API]: /rest/reference/repos#deployments
[status API]: /rest/reference/commits#commit-statuses
[ngrok]: https://ngrok.com/
[using ngrok]: /webhooks/configuring/#using-ngrok
[platform samples]: https://github.com/github/platform-samples/tree/master/api/ruby/building-a-ci-server
[Sinatra]: http://www.sinatrarb.com/
[webhook]: /webhooks/
[octokit.rb]: https://github.com/octokit/octokit.rb
[access token]: /articles/creating-an-access-token-for-command-line-use
[travis api]: https://api.travis-ci.org/docs/
[janky]: https://github.com/github/janky
[heaven]: https://github.com/atmos/heaven
[hubot]: https://github.com/github/hubot
[integrations]: https://github.com/integrations
