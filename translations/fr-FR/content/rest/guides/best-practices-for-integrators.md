---
title: Bonnes pratiques relatives aux intégrateurs
intro: 'Créez une application qui interagit de manière fiable avec l’API {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} et offre la meilleure expérience pour vos utilisateurs.'
redirect_from:
  - /guides/best-practices-for-integrators
  - /v3/guides/best-practices-for-integrators
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
shortTitle: Integrator best practices
ms.openlocfilehash: bdfc2449946e40b017dc028869deb7991d5a344a
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193338'
---
Vous souhaitez intégrer la plateforme GitHub ? [Vous êtes au bon endroit](https://github.com/integrations). Ce guide vous aidera à créer une application offrant une expérience optimale à vos utilisateurs *et* à vérifier qu’elle interagit de manière fiable avec l’API. 

## Sécuriser les charges utiles fournies à partir de GitHub

Il est très important de sécuriser les [charges utiles qui sont envoyées à partir de GitHub][event-types]. Même si aucune information personnelle (comme les mots de passe) n’est transmise dans une charge utile, la fuite d’informations,  *quel que soit leur type*, n’est pas une bonne chose. Parmi les informations susceptibles d’être sensibles figurent l’adresse e-mail du commiteur ou le nom des dépôts privés.

Vous pouvez effectuer plusieurs étapes pour sécuriser la réception des charges utiles fournies par GitHub :

1. Vérifiez que votre serveur de réception utilise une connexion HTTPS. Par défaut, GitHub vérifie les certificats SSL lors de la livraison des charges utiles.{% ifversion fpt or ghec %}
1. Vous pouvez ajouter l’[adresse IP utilisée lors de la livraison des hooks](/github/authenticating-to-github/about-githubs-ip-addresses) à la liste verte de votre serveur. Pour être sûr de toujours vérifier la bonne adresse IP, vous pouvez [utiliser le point de terminaison `/meta`](/rest/reference/meta#meta) pour trouver l’adresse que nous utilisons.{% endif %}
1. Fournissez un [jeton secret](/webhooks/securing/) pour être sûr que les charges utiles proviennent de GitHub. En appliquant un jeton secret, vous garantissez que toutes les données reçues par votre serveur proviennent uniquement de GitHub. Dans l’idéal, vous devez fournir un jeton secret différent *pour chaque utilisateur* de votre service. De cette façon, si un jeton est compromis, aucun autre utilisateur ne sera affecté.

## Favoriser le travail asynchrone par rapport au travail synchrone

GitHub s’attend à ce que les intégrations répondent sous {% ifversion fpt or ghec %}10{% else %}30{% endif %} secondes à compter de la réception de la charge utile webhook. Si votre service prend plus de temps que cela, GitHub met fin à la connexion et la charge utile est perdue.

Étant donné qu’il est impossible de prédire la rapidité de votre service, vous devez tout réaliser dans un travail en arrière-plan. [Resque](https://github.com/resque/resque/) (pour Ruby), [RQ](http://python-rq.org/) (pour Python) ou [RabbitMQ](http://www.rabbitmq.com/) (pour Java) sont des exemples de bibliothèques qui peuvent gérer la mise en file d’attente et le traitement des travaux en arrière-plan.

Notez que même si un travail en arrière-plan est en cours d’exécution, GitHub s’attend toujours à ce que votre serveur réponde sous {% ifversion fpt or ghec %}10{% else %}30{% endif %} secondes. Votre serveur doit confirmer qu’il a reçu la charge utile en envoyant une réponse. Il est essentiel que votre service effectue toutes les validations d’une charge utile dès que possible, afin que vous puissiez signaler correctement si votre serveur va poursuivre ou non avec la requête.

## Utiliser les codes d’état HTTP appropriés dans une réponse à GitHub

Chaque webhook comprend sa propre section « Livraisons récentes », qui indique si un déploiement a réussi ou non.

![Vue Livraisons récentes](/assets/images/webhooks_recent_deliveries.png)

Vous devez utiliser des codes d’état HTTP appropriés pour informer les utilisateurs. Vous pouvez utiliser des codes comme `201` ou `202` pour accuser réception d’une charge utile qui ne sera pas traitée (par exemple, une charge utile fournie par une branche qui n’est pas celle par défaut). Réservez le code d’erreur `500` aux erreurs graves.

## Fournir autant d’informations que possible à l’utilisateur

Les utilisateurs peuvent explorer les réponses du serveur que vous renvoyez à GitHub. Assurez-vous que vos messages sont clairs et informatifs.

![Vue d’une réponse de charge utile](/assets/images/payload_response_tab.png)

## Suivre les redirections que l’API envoie

GitHub est explicite lorsqu’il indique à quel moment une ressource a été déplacée. Pour cela, il fournit un code d’état de redirection. Vous devez suivre ces redirections. Chaque réponse de redirection définit l’en-tête `Location` avec le nouvel URI auquel accéder. Si vous recevez une redirection, il est préférable de mettre à jour votre code pour suivre le nouvel URI, dans le cas où vous demanderiez un chemin déprécié susceptible d’être supprimé.

Nous avons fourni la [liste des codes d’état HTTP](/rest#http-redirects) à surveiller lorsque vous concevez votre application en vue de suivre les redirections.

## N’analysez pas manuellement les URL

Souvent, les réponses d’API contiennent des données sous la forme d’URL. Par exemple, lors d’une demande de dépôt, nous allons envoyer une clé appelée `clone_url` avec une URL que vous pourrez utiliser pour cloner le dépôt.

Pour la stabilité de votre application, vous ne devez pas essayer d’analyser ces données, ni de deviner et de construire le format des futures URL. Votre application sera susceptible de ne plus fonctionner si nous décidons de modifier l’URL.

Par exemple, lors d’une utilisation de résultats paginés, il est souvent tentant de construire des URL avec `?page=<number>` à la fin. Ne cédez pas à cette tentation. Pour plus d’informations sur le suivi fiable des résultats paginés, consultez « [Utilisation de la pagination dans l’API REST](/rest/guides/using-pagination-in-the-rest-api) ».

## Vérifier le type d’événement et l’action avant de traiter l’événement

Il existe plusieurs [types d’événements webhook][event-types], et chaque événement peut avoir plusieurs actions. À mesure que le nombre de fonctionnalités GitHub augmente, nous pouvons parfois ajouter de nouveaux types d’événements ou ajouter de nouvelles actions aux types d’événements existants. Assurez-vous que votre application vérifie explicitement le type et l’action d’un événement avant d’effectuer un traitement webhook. L’en-tête de demande `X-GitHub-Event` peut être utilisé pour savoir quel événement a été reçu afin que le traitement puisse être géré de manière appropriée. De même, la charge utile a une clé de niveau supérieur `action` qui peut être utilisée pour savoir quelle action a été effectuée sur l’objet concerné.

Par exemple, si vous avez configuré un webhook GitHub pour tout recevoir (« Send me **everything** »), votre application recevra les nouveaux types d’événements et les nouvelles actions à mesure qu’ils sont ajoutés. Il n’est donc **pas recommandé d’utiliser n’importe quelle sorte de clause catch-all else**. Prenez l’exemple de code suivant :

```ruby
# Not recommended: a catch-all else clause
def receive
  event_type = request.headers["X-GitHub-Event"]
  payload    = request.body

  case event_type
  when "repository"
    process_repository(payload)
  when "issues"
    process_issues(payload)
  else
    process_pull_requests
  end
end
```

Dans cet exemple de code, les méthodes `process_repository` et `process_issues` seront correctement appelées si un événement `repository` ou `issues` a été reçu. Toutefois, tout autre type d’événement entraînera l’appel de `process_pull_requests`. Si de nouveaux types d’événements sont ajoutés, cela entraînera un comportement incorrect et les nouveaux types d’événements seront traités de la même façon qu’un événement `pull_request`.

Au lieu de cela, nous vous suggérons de vérifier explicitement les types d’événements et d’agir en conséquence. Dans l’exemple de code suivant, nous vérifions explicitement un événement `pull_request`, et la clause `else` journalise simplement que nous avons reçu un nouveau type d’événement :

```ruby
# Recommended: explicitly check each event type
def receive
  event_type = request.headers["X-GitHub-Event"]
  payload    = JSON.parse(request.body)

  case event_type
  when "repository"
    process_repository(payload)
  when "issues"
    process_issue(payload)
  when "pull_request"
    process_pull_requests(payload)
  else
    puts "Oooh, something new from GitHub: #{event_type}"
  end
end
```

Étant donné que chaque événement peut également avoir plusieurs actions, il est recommandé que les actions soient vérifiées de la même manière. Par exemple, [`IssuesEvent`](/webhooks/event-payloads/#issues) a plusieurs actions possibles. Elles incluent notamment `opened` quand le problème est créé, `closed` quand le problème est fermé et `assigned` quand le problème est affecté à une personne.

Comme pour l’ajout de types d’événements, nous pouvons ajouter de nouvelles actions aux événements existants. Il n’est donc **pas recommandé d’utiliser n’importe quelle clause catch-all else** lorsque vous vérifiez l’action d’un événement. Au lieu de cela, nous vous suggérons de vérifier explicitement les actions d’événement comme nous l’avons fait avec le type d’événement. Voici un exemple très similaire à ce que nous avons suggéré pour les types d’événements ci-dessus :

```ruby
# Recommended: explicitly check each action
def process_issue(payload)
  case payload["action"]
  when "opened"
    process_issue_opened(payload)
  when "assigned"
    process_issue_assigned(payload)
  when "closed"
    process_issue_closed(payload)
  else
    puts "Oooh, something new from GitHub: #{payload["action"]}"
  end
end
```

Dans cet exemple, l’action `closed` est vérifiée avant l’appel de la méthode `process_closed`. Toutes les actions non identifiées sont journalisées en vue d’une consultation future.

{% ifversion fpt or ghec or ghae %}

## Gestion des limites de débit

La [limite de débit](/rest/overview/resources-in-the-rest-api#rate-limiting) de l’API GitHub garantit que l’API sera rapide et disponible pour tout le monde.

Si vous atteignez la limite de débit, vous êtes supposé annuler vos demandes et réessayer plus tard lorsque vous y serez autorisé. Si vous ne le faites pas, votre application risque d’être interdite.

Vous pouvez [vérifier l’état de votre limite de débit](/rest/reference/rate-limit) à tout moment. La vérification de votre limite de débit n’entraîne aucuns frais.

## Gestion des limites de débit secondaires

Les [limites de débit secondaires](/rest/overview/resources-in-the-rest-api#secondary-rate-limits) permettent elles aussi de garantir la disponibilité de l’API.
Pour éviter d’atteindre cette limite, vous devez vous assurer que votre application respecte les instructions ci-dessous.

* Effectuez des demandes authentifiées ou utilisez l’ID client et le secret de votre application. Les demandes non authentifiées sont soumises à une limitation de débit secondaire plus agressive.
* Effectuez des demandes pour un seul utilisateur ou ID client de façon séquentielle. Vous ne devez pas effectuer de demandes pour un seul utilisateur ou un seul ID client de façon simultanée.
* Si vous effectuez un grand nombre de demandes `POST`, `PATCH`, `PUT` ou `DELETE` pour un utilisateur ou ID client unique, attendez au moins une seconde entre chaque demande.
* Si vous avez été limité, utilisez l’en-tête de réponse `Retry-After` pour ralentir. La valeur de l’en-tête `Retry-After` est toujours un entier correspondant au nombre de secondes que vous devez attendre avant d’effectuer à nouveau des demandes. Par exemple, `Retry-After: 30` signifie que vous devez attendre 30 secondes avant d’envoyer d’autres demandes.
* Les demandes qui créent du contenu déclenchant des notifications (comme des problèmes, des commentaires et des demandes de tirage) peuvent être limitées davantage et ne pas inclure d’en-tête `Retry-After` dans la réponse. Créez ce contenu à un rythme raisonnable afin d’éviter une limitation supplémentaire.

Nous nous réservons le droit de modifier ces directives si nécessaire pour garantir la disponibilité.

{% endif %}

## Gestion des erreurs d’API

Même si votre code ne peut pas générer de bogue, vous pouvez rencontrer des erreurs successives lorsque vous tentez d’accéder à l’API.

Au lieu d’ignorer les codes d’état `4xx` et `5xx`, vérifiez que vous interagissez correctement avec l’API. Par exemple, si un point de terminaison demande une chaîne et que vous transmettez une valeur numérique, vous recevrez une erreur de validation `5xx` et votre appel échouera. De même, toute tentative d’accès à un point de terminaison non autorisé ou inexistant entraîne une erreur `4xx`.

Le fait d’ignorer intentionnellement toutes les erreurs de validation peut entraîner la suspension de votre application pour abus.

[event-types]: /webhooks/event-payloads
