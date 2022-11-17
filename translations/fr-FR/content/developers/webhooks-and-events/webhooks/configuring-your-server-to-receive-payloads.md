---
title: Configuration de votre serveur pour recevoir des charges utiles
intro: Découvrez comment configurer un serveur pour gérer les charges utiles de webhook entrantes.
redirect_from:
  - /webhooks/configuring
  - /developers/webhooks-and-events/configuring-your-server-to-receive-payloads
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Webhooks
shortTitle: Configure server for webhooks
ms.openlocfilehash: c306cadf4dd8d9cd573d694419a51179c8995797
ms.sourcegitcommit: 6b1c6174d0df40c90edfd7526496baabb1dd159d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/04/2022
ms.locfileid: '148132979'
---
Maintenant que notre webhook est prêt à livrer des messages, nous configurons un serveur Sinatra de base pour traiter les charges utiles entrantes.

{% note %}

**Remarque :** Vous pouvez télécharger le code source complet de ce projet [à partir du dépôt d’exemples de plateforme][platform samples].

{% endnote %}

## Écriture du serveur

Nous voulons que notre serveur écoute les demandes `POST`, sur `/payload`, car nous avons dit à GitHub que c’était là que se trouvait notre URL de webhook. Comme nous utilisons `ngrok` pour exposer notre environnement local, nous n’avons pas besoin de configurer un serveur réel quelque part en ligne et nous pouvons tester notre code localement.

Configurons une petite application Sinatra pour faire quelque chose avec les informations. Notre configuration initiale peut ressembler à ceci :

``` ruby
require 'sinatra'
require 'json'

post '/payload' do
  push = JSON.parse(request.body.read)
  puts "I got some JSON: #{push.inspect}"
end
```

(Si vous n’êtes pas familiarisé avec le fonctionnement de Sinatra, nous vous recommandons de [lire le guide Sinatra][Sinatra].)

Démarrez ce serveur.

Comme nous avons configuré notre webhook pour écouter les événements qui traitent les `Issues`, créez un problème sur le dépôt où vous faites les tests. Une fois que vous l’avez créé, revenez à votre terminal. Vous devez voir dans votre sortie quelque chose de ce type :

```shell
$ ~/Developer/platform-samples/hooks/ruby/configuring-your-server $ ruby server.rb
> == Sinatra/1.4.4 has taken the stage on 4567 for development with backup from Thin
> >> Thin web server (v1.5.1 codename Straight Razor)
> >> Maximum connections set to 1024
> >> Listening on localhost:4567, CTRL+C to stop
> I got some JSON: {"action"=>"opened", "issue"=>{"url"=>"...
```

Le résultat est correct ! Vous avez configuré votre serveur pour écouter les webhooks. Votre serveur peut désormais traiter ces informations comme vous le voulez. Par exemple, si vous configurez une application web « réelle », vous pouvez journaliser une partie de la sortie JSON dans une base de données.

Pour plus d’informations sur l’utilisation de webhooks, consultez le guide [Test de webhooks](/webhooks/testing).

[platform samples]: https://github.com/github/platform-samples/tree/master/hooks/ruby/configuring-your-server
[Sinatra]: http://www.sinatrarb.com/
