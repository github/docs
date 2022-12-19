---
title: Parcours avec pagination
intro: Découvrez comment utiliser la pagination pour gérer vos réponses à l’aide de quelques exemples utilisant l’API de recherche.
redirect_from:
- /guides/traversing-with-pagination
- /v3/guides/traversing-with-pagination
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- API
shortTitle: Traverse with pagination
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 92173dffdf2c50bdcd2b10fa42ef634683a3e149
ms.sourcegitcommit: d1d7ccc513192fdd0fc27bb49dc9c85108119b91
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/21/2022
ms.locfileid: "148179528"
---
L’API {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} fournit aux développeurs une très grande richesse d’informations.
La plupart du temps, nous demandons _trop_ d’informations. Par conséquent, afin de ne pas fatiguer nos serveurs, l’API [pagine automatiquement les éléments demandés](/rest/overview/resources-in-the-rest-api#pagination).

Dans ce guide, nous allons effectuer des appels à l’API de recherche et itérer sur les résultats à l’aide de la pagination. Vous trouverez le code source complet de ce projet dans le dépôt [platform-samples][platform samples].

{% data reusables.rest-api.dotcom-only-guide-note %}



## Principes de base de la pagination

Pour commencer, il est important de connaître certaines choses sur la réception d’éléments paginés :


1. Les différents appels d’API répondent avec des valeurs par défaut différentes. Par exemple, un appel à [Lister les dépôts publics](/rest/reference/repos#list-public-repositories) fournira des éléments paginés par groupes de 30, tandis qu’un appel à l’API de recherche GitHub fournira des éléments par groupes de 100.
2. Vous pouvez spécifier le nombre d’éléments à recevoir (100 au maximum). Toutefois :
3. Pour des raisons techniques, tous les points de terminaison ne se comportent pas de la même façon. Par exemple, les [événements](/rest/reference/activity#events) ne vous permettent pas de définir un maximum d’éléments à recevoir.
Veillez à lire la documentation sur la gestion des résultats paginés pour des points de terminaison spécifiques.

{% note %}

**Remarque** : vous devez toujours vous référer aux URL incluses dans l’en-tête de lien. N’essayez pas de deviner les URL ni de construire vos propres URL.

{% endnote %}


### En-tête de lien

L’en-tête de réponse inclut des informations sur la pagination. Pour plus d’informations sur les en-têtes, consultez « [Bien démarrer avec l’API REST](/rest/guides/getting-started-with-the-rest-api#about-the-response-code-and-headers) ». Pour obtenir l’en-tête de réponse, incluez l’indicateur `-I` dans votre demande. Par exemple :

```shell 
$ curl -I -H "Accept: application/vnd.github+json" -H "Authorization: Bearer YOUR_TOKEN"   https://api.github.com/enterprises/advacado-corp/audit-log

```

L’indicateur `-I` retourne uniquement l’en-tête de réponse. Si la réponse est paginée, l’en-tête de réponse inclut un `link` en-tête. Voici à quoi l’en-tête ressemble :

```
link: <https://api.github.com/enterprises/13827/audit-log?after=MS42NjQzODM5MTkzNDdlKzEyfDM0MkI6NDdBNDo4RTFGMEM6NUIyQkZCMzo2MzM0N0JBRg%3D%3D&before=>; rel="next"
```

ou

```
link: <https://api.github.com/repositories/1300192/issues?page=2>; rel="next", <https://api.github.com/repositories/1300192/issues?page=511>; rel="last"
```
### Types de pagination

L’API {% data variables.product.company_short %} utilise deux méthodes de pagination : la pagination basée sur la page et la pagination basée sur le curseur. Si l’en-tête `link` inclut `page`, l’opération utilise la pagination basée sur la page. Si l’en-tête `link` inclut `before` et `after`, l’opération utilise la pagination basée sur le curseur.


#### Pagination basée sur la page

L’en-tête de lien pour la pagination basée sur la page présente des informations sur la page précédente et la page suivante, ainsi que sur la première et la dernière page. Si vous n’avez pas demandé de page spécifique, la réponse est définie par défaut sur la première page. Les informations sur la première page et les pages précédentes sont omises.

Pour une demande qui n’a spécifié aucune page par exemple, cet en-tête indique que la page suivante est `2` et que la dernière page est `511`.

```
link: <https://api.github.com/repositories/1300192/issues?page=2>; rel="next", <https://api.github.com/repositories/1300192/issues?page=511>; rel="last"
```

Pour une demande qui a spécifié la page 5 par exemple, cet en-tête indique que la page précédente est `4`, que la page suivante est `6`, que la dernière page est `511` et que la première page est `1`.

```
link: <https://api.github.com/repositories/1300192/issues?page=4>; rel="prev", <https://api.github.com/repositories/1300192/issues?page=6>; rel="next", <https://api.github.com/repositories/1300192/issues?page=511>; rel="last", <https://api.github.com/repositories/1300192/issues?page=1>; rel="first"
```

#### Pagination basée sur le curseur

La pagination basée sur le curseur utilise les termes `before` et `after` pour naviguer dans les pages. `rel="next"` et `rel="prev"` indiquent le point de curseur dans le jeu de données et fournissent une référence pour le déplacement vers la page `before` et `after` par rapport à la page active.  

```
link: <https://api.github.com/enterprises/13827/audit-log?after=MS42NjQzODMzMzk2MzZlKzEyfFdxSzIxdGU0MlBWNUp5UzhBWDF6LWc%3D&before=>; rel="next",
<https://api.github.com/enterprises/13827/audit-log?after=&before=>; rel="first", 
<https://api.github.com/enterprises/13827/audit-log?after=&before=MS42NjQzODM5MTcyMjllKzEyfDI4NDE6NEVFNDoxODBDRkM5OjY5REE0MzI6NjMzNDdCQUQ%3D>; rel="prev"
```

Dans cet exemple, `rel=next` indique que la page suivante se trouve à l’adresse suivante :

```
after=MS42NjQzODM5MTkzNDdlKzEyfDM0MkI6NDdBNDo4RTFGMEM6NUIyQkZCMzo2MzM0N0JBRg%3D%3D&before=
```




### Utilisation de la pagination

#### Pagination basée sur le curseur

Pour la pagination basée sur le curseur, vous devez utiliser les termes `before` et `after`. Pour naviguer à l’aide de `before` et `after`, copiez l’en-tête de lien généré ci-dessus dans votre demande cURL :

```shell
$ curl -I -H "Accept: application/vnd.github+json" -H "Authorization: Bearer YOUR_TOKEN"  https://api.github.com/enterprises/13827/audit-log?after=MS42NjQzODM5MTkzNDdlKzEyfDM0MkI6NDdBNDo4RTFGMEM6NUIyQkZCMzo2MzM0N0JBRg%3D%3D&before=
```

L’exemple ci-dessus génère une page de résultats et de nouvelles informations d’en-tête que vous pouvez utiliser pour effectuer la demande suivante. `rel="next"` fournit la page de résultats suivante. `rel="prev"` fournit la page de résultats précédente. La partie importante de la sortie est l’en-tête de lien qui doit être généré au lieu d’être attribué manuellement. Copiez l’intégralité du lien à partir de la sortie suivante.

```
link: <https://api.github.com/enterprises/13827/audit-log?after=MS42NjQzODMzMzk2MzZlKzEyfFdxSzIxdGU0MlBWNUp5UzhBWDF6LWc%3D&before=>; rel="next", 
<https://api.github.com/enterprises/13827/audit-log?after=&before=>; rel="first", 
<https://api.github.com/enterprises/13827/audit-log?after=&before=MS42NjQzODM5MTcyMjllKzEyfDI4NDE6NEVFNDoxODBDRkM5OjY5REE0MzI6NjMzNDdCQUQ%3D>; rel="prev"
```

Contrairement à la pagination basée sur la page, les résultats ne retournent pas le numéro de la dernière page dans la réponse.

    link: <https://api.github.com/enterprises/13827/audit-log?after=MS42NjQzODMzMzk2MzZlKzEyfFdxSzIxdGU0MlBWNUp5UzhBWDF6LWc%3D&before=>; rel="next", 
    <https://api.github.com/enterprises/13827/audit-log?after=&before=>; rel="first", 
    <https://api.github.com/enterprises/13827/audit-log?after=&before=MS42NjQzODM5MTcyMjllKzEyfDI4NDE6NEVFNDoxODBDRkM5OjY5REE0MzI6NjMzNDdCQUQ%3D>; rel="prev"
    
Étant donné que la pagination basée sur le curseur crée un point de référence dans le jeu de données, elle ne peut pas calculer le nombre total de résultats.


#### Pagination basée sur la page

Pour naviguer à l’aide de la pagination basée sur la page, transmettez un paramètre `page`. Par défaut, `page` commence toujours à `1`. Dans l’exemple suivant, nous avons effectué une demande cURL aux projets Mozilla de l’API de recherche qui utilisent l’expression `addClass`. Au lieu de commencer à la page 1, passons à la page 14. 

```shell
$ curl -I "https://api.github.com/search/code?q=addClass+user:mozilla&page=14"
```

Voici un extrait de l’en-tête de lien dans la demande HTTP :

    Link: <https://api.github.com/search/code?q=addClass+user%3Amozilla&page=15>; rel="next",
      <https://api.github.com/search/code?q=addClass+user%3Amozilla&page=34>; rel="last",
      <https://api.github.com/search/code?q=addClass+user%3Amozilla&page=1>; rel="first",
      <https://api.github.com/search/code?q=addClass+user%3Amozilla&page=13>; rel="prev"

Dans cet exemple, `rel="next"` correspond à 15 et `rel="last"` à 34. Mais maintenant, nous avons quelques informations supplémentaires : `rel="first"` indique l’URL de la _première_ page, et plus important encore, `rel="prev"` vous permet de connaître le numéro de la page précédente. À l’aide de ces informations, vous pouvez construire une interface utilisateur qui permet aux utilisateurs de passer de la première liste de résultats à la dernière, à la précédente ou à la suivante dans un appel d’API.


### Modification du nombre d’éléments reçus

#### Pagination basée sur la page

En passant le paramètre `per_page`, vous pouvez spécifier le nombre d’éléments que chaque page doit retourner, jusqu’à un maximum de 100 éléments. Essayons de demander 50 éléments sur `addClass` :

```shell
$ curl -I "https://api.github.com/search/code?q=addClass+user:mozilla&per_page=50"
```

Notez l’effet produit sur la réponse d’en-tête :

    Link: <https://api.github.com/search/code?q=addClass+user%3Amozilla&per_page=50&page=2>; rel="next",
      <https://api.github.com/search/code?q=addClass+user%3Amozilla&per_page=50&page=20>; rel="last"

Comme vous avez pu le deviner, les informations `rel="last"` indiquent que la dernière page est maintenant la page 20. C’est parce que nous demandons plus d’informations par page à propos de nos résultats.

#### Pagination basée sur le curseur

Vous pouvez également transmettre le paramètre `per_page` pour la pagination basée sur le curseur. 

```shell
$ curl -I -H "Accept: application/vnd.github+json" -H "Authorization: Bearer YOUR_TOKEN"  https://api.github.com/enterprises/13827/audit-log?after=MS42NjQzODM5MTkzNDdlKzEyfDM0MkI6NDdBNDo4RTFGMEM6NUIyQkZCMzo2MzM0N0JBRg%3D%3D&before=&per_page=50
```

## Consommation des informations

Vous ne voulez pas avoir à effectuer des appels curl de bas niveau juste pour pouvoir utiliser la pagination. Nous allons donc écrire un petit script Ruby qui fait tout ce que nous venons de décrire ci-dessus.

Comme toujours, nous avons d’abord besoin de la bibliothèque Ruby [GitHub's Octokit.rb][octokit.rb] et de transmettre notre [{% data variables.product.pat_generic %}][personal token] :

``` ruby
require 'octokit'

# !!! DO NOT EVER USE HARD-CODED VALUES IN A REAL APP !!!
# Instead, set and test environment variables, like below
client = Octokit::Client.new :access_token => ENV['MY_PERSONAL_TOKEN']
```

Ensuite, nous allons exécuter la recherche à l’aide de la méthode `search_code` d’Octokit. Contrairement à lorsque nous utilisons `curl`, nous pouvons récupérer immédiatement le nombre de résultats. C’est donc ce que nous allons faire :

``` ruby
results = client.search_code('addClass user:mozilla')
total_count = results.total_count
```

Maintenant, récupérons le numéro de la dernière page, comme pour les informations `page=34>; rel="last"` de l’en-tête Link. Octokit.rb prend en charge les informations de pagination par le biais d’une implémentation appelée « [Relations de liaison Hypermedia][hypermedia-relations] ».
Nous n’allons pas rentrer dans les détails, mais disons simplement que chaque élément de la variable `results` comprend un hachage appelé `rels`, qui peut contenir des informations sur `:next`, `:last`, `:first` et `:prev`, en fonction du résultat affiché. Ces relations contiennent également des informations sur l’URL résultante, obtenues par l’appel à `rels[:last].href`.

Sachant cela, prenons le numéro de page du dernier résultat et présentons toutes ces informations à l’utilisateur :

``` ruby
last_response = client.last_response
number_of_pages = last_response.rels[:last].href.match(/page=(\d+).*$/)[1]

puts "There are #{total_count} results, on #{number_of_pages} pages!"
```

Enfin, nous allons exécuter une itération dans les résultats. Vous pouvez le faire avec une boucle `for i in 1..number_of_pages.to_i`. Toutefois, nous allons suivre les en-têtes `rels[:next]` pour récupérer les informations de chaque page. Pour plus de simplicité, prenons simplement le chemin de fichier du premier résultat de chaque page. Pour cela, nous aurons besoin d’une boucle. À la fin de chaque exécution de boucle, nous allons récupérer le jeu de données de la page suivante en suivant les informations `rels[:next]`.
La boucle se terminera lorsqu’il n’y aura plus aucune information `rels[:next]` à consommer (c’est-à-dire quand nous arriverons à `rels[:last]`). Voici à quoi cela doit ressembler :

``` ruby
puts last_response.data.items.first.path
until last_response.rels[:next].nil?
  last_response = last_response.rels[:next].get
  puts last_response.data.items.first.path
end
```

La modification du nombre d’éléments par page est extrêmement simple avec Octokit.rb. Il suffit de passer un hachage d’options `per_page` à la construction initiale du client. Après cela, votre code doit rester intact :

``` ruby
require 'octokit'

# !!! DO NOT EVER USE HARD-CODED VALUES IN A REAL APP !!!
# Instead, set and test environment variables, like below
client = Octokit::Client.new :access_token => ENV['MY_PERSONAL_TOKEN']

results = client.search_code('addClass user:mozilla', :per_page => 100)
total_count = results.total_count

last_response = client.last_response
number_of_pages = last_response.rels[:last].href.match(/page=(\d+).*$/)[1]

puts last_response.rels[:last].href
puts "There are #{total_count} results, on #{number_of_pages} pages!"

puts "And here's the first path for every set"

puts last_response.data.items.first.path
until last_response.rels[:next].nil?
  last_response = last_response.rels[:next].get
  puts last_response.data.items.first.path
end
```

## Construction de liaisons de pagination

Normalement, avec la pagination, votre objectif n’est pas de concaténer tous les résultats possibles, mais plutôt de produire un ensemble navigable, comme ceci :

![Exemple de liaisons de pagination](/assets/images/pagination_sample.png)

Nous allons ébaucher une microversion de ce que cela peut impliquer.

À partir du code ci-dessus, nous savons déjà que nous pouvons obtenir le `number_of_pages` dans les résultats paginés à partir du premier appel :

``` ruby
require 'octokit'

# !!! DO NOT EVER USE HARD-CODED VALUES IN A REAL APP !!!
# Instead, set and test environment variables, like below
client = Octokit::Client.new :access_token => ENV['MY_PERSONAL_TOKEN']

results = client.search_code('addClass user:mozilla')
total_count = results.total_count

last_response = client.last_response
number_of_pages = last_response.rels[:last].href.match(/page=(\d+).*$/)[1]

puts last_response.rels[:last].href
puts "There are #{total_count} results, on #{number_of_pages} pages!"
```

À partir de là, nous pouvons construire une belle représentation ASCII des zones de numéro :
``` ruby
numbers = ""
for i in 1..number_of_pages.to_i
  numbers << "[#{i}] "
end
puts numbers
```

Nous allons simuler un utilisateur qui clique sur l’une de ces zones, en construisant un numéro aléatoire :

``` ruby
random_page = Random.new
random_page = random_page.rand(1..number_of_pages.to_i)

puts "A User appeared, and clicked number #{random_page}!"
```

Maintenant que nous avons un numéro de page, nous pouvons utiliser Octokit pour récupérer explicitement cette page en passant l’option `:page` :

``` ruby
clicked_results = client.search_code('addClass user:mozilla', :page => random_page)
```

Si nous le voulions, nous pourrions également récupérer la page précédente et la page suivante afin de générer des liaisons pour les éléments Précédent (`<<`) et Suivant (`>>`) :

``` ruby
prev_page_href = client.last_response.rels[:prev] ? client.last_response.rels[:prev].href : "(none)"
next_page_href = client.last_response.rels[:next] ? client.last_response.rels[:next].href : "(none)"

puts "The prev page link is #{prev_page_href}"
puts "The next page link is #{next_page_href}"
```

[pagination]: /rest#pagination
[platform samples]: https://github.com/github/platform-samples/tree/master/api/ruby/traversing-with-pagination
[octokit.rb]: https://github.com/octokit/octokit.rb
[personal token]: /articles/creating-an-access-token-for-command-line-use
[hypermedia-relations]: https://github.com/octokit/octokit.rb#pagination
[listing commits]: /rest/reference/commits#list-commits
