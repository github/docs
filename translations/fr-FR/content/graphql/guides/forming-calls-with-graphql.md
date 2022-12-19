---
title: Formation d’appels avec GraphQL
intro: 'Découvrez comment s’authentifier auprès de l’API GraphQL, puis comment créer et exécuter des requêtes et des mutations.'
redirect_from:
  - /v4/guides/forming-calls
  - /graphql/guides/forming-calls
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
topics:
  - API
shortTitle: Form calls with GraphQL
ms.openlocfilehash: b3778872cad120f64f2fdbc238f2319bdd758513
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147527893'
---
## Authentification avec GraphQL

Pour communiquer avec le serveur GraphQL, vous aurez besoin d’un jeton OAuth avec les étendues appropriées.

Suivez les étapes décrites dans « [Création d’un jeton d’accès personnel](/github/authenticating-to-github/creating-a-personal-access-token) » pour créer un jeton. Les étendues dont vous avez besoin dépendent du type de données que vous essayez de demander. Par exemple, sélectionnez les étendues **User** pour demander des données utilisateur. Si vous avez besoin d’accéder aux informations d’un dépôt, sélectionnez les étendues **Repository** appropriées.

{% ifversion fpt or ghec %}

Pour une mise en correspondance avec le comportement de [GraphQL Explorer](/graphql/guides/using-the-explorer), demandez les étendues suivantes :

{% else %}

Les étendues suivantes sont recommandées :

{% endif %}


```
repo
read:packages
read:org
read:public_key
read:repo_hook
user
read:discussion
read:enterprise
read:gpg_key
```

L’API vous avertit si une ressource nécessite une étendue spécifique.

## Point de terminaison GraphQL

L’API REST a de nombreux points de terminaison ; l’API GraphQL, elle, n’en a qu’un seul :

<pre>{% data variables.product.graphql_url_pre %}</pre>

Le point de terminaison reste constant, quelle que soit l’opération que vous effectuez.

## Communication avec GraphQL

Étant donné que les opérations GraphQL se composent de JSON multiligne, GitHub recommande d’utiliser [Explorer](/graphql/guides/using-the-explorer) pour effectuer des appels GraphQL. Vous pouvez également utiliser cURL ou n’importe quelle autre bibliothèque HTTP.

Dans REST, les [verbes HTTP](/rest#http-verbs) déterminent l’opération effectuée. Dans GraphQL vous fournirez un corps encodé JSON, que vous effectuiez une requête ou une mutation ; le verbe HTTP est donc `POST`. L’exception est une [requête d’introspection](/graphql/guides/introduction-to-graphql#discovering-the-graphql-api), qui est un simple `GET` au point de terminaison. Pour plus d’informations sur les différences entre GraphQL et REST, consultez « [Migration de REST vers GraphQL](/graphql/guides/migrating-from-rest-to-graphql) ».

Pour interroger GraphQL à l’aide de cURL, effectuez une requête `POST` avec une charge utile JSON. La charge utile doit contenir une chaîne nommée `query` :

```shell
curl -H "Authorization: bearer <em>token</em>" -X POST -d " \
 { \
   \"query\": \"query { viewer { login }}\" \
 } \
" {% data variables.product.graphql_url_code %}
```

{% tip %}

**Remarque** : La valeur de chaîne de `"query"` doit échapper les caractères de nouvelle ligne, sinon le schéma ne l’analysera pas correctement. Pour le corps `POST`, utilisez des guillemets doubles externes et des guillemets doubles internes échappés.

{% endtip %}

### À propos des opérations de requête et de mutation

Les deux types d’opérations autorisées dans l’API GraphQL de GitHub sont les _requêtes_ et les _mutations_. Si l’on compare GraphQL à REST, les requêtes opèrent comme des requêtes `GET`, tandis que les mutations opèrent comme `POST`/`PATCH`/`DELETE`. Le [nom de la mutation](/graphql/reference/mutations) détermine quelle modification est exécutée.

Pour plus d’informations sur la limitation de débit, consultez « [Limitations des ressources GraphQL](/graphql/overview/resource-limitations) ».

Les requêtes et les mutations partagent des formes similaires, avec certaines différences importantes.

### À propos des requêtes

Les requêtes GraphQL retournent seulement les données que vous spécifiez. Pour former une requête, vous devez spécifier [des champs dans des champs](/graphql/guides/introduction-to-graphql#field) (également appelés _sous-champs imbriqués_) jusqu’à retourner uniquement des [valeurs scalaires](/graphql/reference/scalars).

Les requêtes sont structurées comme ceci :

<pre>query {
  <em>JSON objects to return</em>
}</pre>

Pour obtenir un exemple réel, consultez « [Exemple de requête](#example-query) ».

### À propos des mutations

Pour former une mutation, vous devez spécifier trois éléments :

1. _Nom de la mutation_. Type de modification que vous souhaitez effectuer.
2. _Objet d’entrée_. Données que vous souhaitez envoyer au serveur, composées de _champs d’entrée_. Passez-les comme argument au nom de la mutation.
3. _Objet de charge utile_. Données que vous souhaitez retourner à partir du serveur, composées de _champs de retour_. Passez-les comme corps du nom de la mutation.

Les mutations sont structurées comme suit :

<pre>mutation {
  <em>mutationName</em>(input: {<em>MutationNameInput!</em>}) {
    <em>MutationNamePayload</em>
  }
}</pre>

L’objet d’entrée dans cet exemple est `MutationNameInput`, et l’objet de charge utile est `MutationNamePayload`.

Dans la référence des [mutations](/graphql/reference/mutations), les _champs d’entrée_ listés correspondent à ce que vous passez en tant qu’objet d’entrée. Les _champs de retour_ listés correspondent à ce que vous passez en tant qu’objet de charge utile.

Pour obtenir un exemple réel, consultez « [Exemple de mutation](#example-mutation) ».

## Utilisation de variables

Les [variables](https://graphql.github.io/learn/queries/#variables) peuvent rendre les requêtes plus dynamiques et plus puissantes, et elles peuvent réduire la complexité lors de la transmission d’objets d’entrée de mutation.

{% note %}

**Remarque** : Si vous utilisez Explorer, veillez à entrer les variables dans le [volet Variables de requête](/graphql/guides/using-the-explorer#using-the-variable-pane) distinct, et n’incluez pas le mot `variables` avant l’objet JSON.

{% endnote %}

Voici un exemple de requête avec une variable unique :

```graphql
query($number_of_repos:Int!) {
  viewer {
    name
     repositories(last: $number_of_repos) {
       nodes {
         name
       }
     }
   }
}
variables {
   "number_of_repos": 3
}
```

L’utilisation des variables implique trois étapes :

1. Définir la variable en dehors de l’opération dans un objet `variables` :

  ```graphql
  variables {
     "number_of_repos": 3
  }
  ```

  L’objet doit être du JSON valide. Cet exemple montre un type de variable simple `Int`, mais il est possible de définir des types de variables plus complexes, tels que des objets d’entrée. Vous pouvez également définir plusieurs variables ici.

2. Passer la variable à l’opération en tant qu’argument :

  ```graphql
  query($number_of_repos:Int!){
  ```

  L’argument est une paire clé-valeur, où la clé est le _nom_ commençant par `$` (par exemple `$number_of_repos`), et la valeur est le _type_ (par exemple `Int`). Ajoutez un `!` pour indiquer si le type est obligatoire. Si vous avez défini plusieurs variables, incluez-les ici en tant qu’arguments multiples.

3. Utiliser la variable dans l’opération :

  ```graphql
  repositories(last: $number_of_repos) {
  ```

  Dans cet exemple, nous substituons la variable au nombre de dépôts à récupérer. Nous spécifions un type à l’étape 2, car GraphQL applique un type fort.

Ce processus rend l’argument de requête dynamique. Nous pouvons maintenant simplement modifier la valeur dans l’objet `variables` et conserver le reste de la requête identique.

L’utilisation de variables comme arguments vous permet de mettre à jour dynamiquement les valeurs dans l’objet `variables` sans modifier la requête.

## Exemple de requête

Examinons une requête plus complexe et mettons ces informations dans le contexte.

La requête suivante recherche le dépôt `octocat/Hello-World`, recherche les 20 derniers problèmes fermés et retourne le titre, l’URL et les cinq premières étiquettes de chaque problème :

```graphql
query {
  repository(owner:"octocat", name:"Hello-World") {
    issues(last:20, states:CLOSED) {
      edges {
        node {
          title
          url
          labels(first:5) {
            edges {
              node {
                name
              }
            }
          }
        }
      }
    }
  }
}
```

Examinons la ligne de composition ligne par ligne :

* `query {`

  Comme nous souhaitons lire des données à partir du serveur, et non les modifier, `query` est l’opération racine. (Si vous ne spécifiez pas d’opération, `query` est également l’opération par défaut.)

* `repository(owner:"octocat", name:"Hello-World") {`

  Pour commencer la requête, nous voulons trouver un objet [`repository`](/graphql/reference/objects#repository). La validation du schéma indique que cet objet nécessite un `owner` et un argument `name`.

* `issues(last:20, states:CLOSED) {`

  Pour tenir compte de tous les problèmes dans le dépôts, nous appelons l’objet `issues`. (Nous _pourrions_ interroger un `issue` unique sur un `repository`, mais cela nous obligerait à connaître le numéro du problème que nous voulons retourner et à le fournir en tant qu’argument.)

  Quelques détails concernant l’objet `issues` :

  - La [documentation](/graphql/reference/objects#repository) nous indique que cet objet a le type `IssueConnection`.
  - La validation du schéma indique que cet objet nécessite un `last` ou `first` nombre de résultats comme argument ; nous fournissons donc la valeur `20`.
  - La [documentation](/graphql/reference/objects#repository) nous indique également que cet objet accepte un argument `states`, qui est une énumération [`IssueState`](/graphql/reference/enums#issuestate) qui accepte des valeurs `OPEN` ou `CLOSED`. Pour trouver uniquement les problèmes fermés, nous affectons à la clé `states` la valeur `CLOSED`.

* `edges {`

  Nous savons que `issues` est une connexion car elle a le type `IssueConnection`. Pour récupérer des données sur des problèmes individuels, nous devons accéder au nœud via `edges`.

* `node {`

  Ici, nous récupérons le nœud à la fin de la périphérie. La [documentation sur `IssueConnection`](/graphql/reference/objects#issueconnection) indique que le nœud à la fin du type `IssueConnection` est un objet `Issue`.

* Maintenant que nous savons que nous récupérons un objet `Issue`, nous pouvons examiner la [documentation](/graphql/reference/objects#issue) et spécifier les champs que nous voulons retourner :

  ```graphql
  title
  url
  labels(first:5) {
    edges {
      node {
        name
      }
    }
  }
  ```

  Ici, nous spécifions les champs `title`, `url` et `labels` de l’objet `Issue`.

  Le champ `labels` a le type [`LabelConnection`](/graphql/reference/objects#labelconnection). Comme pour l’objet `issues`, `labels` étant une connexion, nous devons déplacer ses périphéries vers un nœud connecté : l’objet `label`. Au niveau du nœud, nous pouvons spécifier les champs d’objet `label` que nous voulons retourner, en l’occurrence `name`.

Vous remarquerez peut-être que l’exécution de cette requête sur le dépôt {% ifversion not ghae %}public{% endif %} `Hello-World` d’Octocat ne retournera pas beaucoup d’étiquettes. Essayez de l’exécuter sur l’un de vos propres dépôts qui utilisent des étiquettes, et vous verrez probablement une différence.

## Exemple de mutation

Les mutations nécessitent souvent des informations que vous ne pouvez connaître qu’en effectuant d’abord une requête. Cet exemple montre deux opérations :

1. Une requête pour obtenir un ID de problème
2. Une mutation pour ajouter un émoji de réaction à la question

```graphql
query FindIssueID {
  repository(owner:"octocat", name:"Hello-World") {
    issue(number:349) {
      id
    }
  }
}

mutation AddReactionToIssue {
  addReaction(input:{subjectId:"MDU6SXNzdWUyMzEzOTE1NTE=",content:HOORAY}) {
    reaction {
      content
    }
    subject {
      id
    }
  }
}
```

{% tip %}

Bien que vous puissiez inclure une requête et une mutation dans la même fenêtre Explorer si vous leur donnez des noms (`FindIssueID` et `AddReactionToIssue` dans cet exemple), les opérations seront exécutées en tant qu’appels distincts au point de terminaison GraphQL. Il n’est pas possible d’effectuer une requête en même temps qu’une mutation, ou inversement.

{% endtip %}

Examinons un exemple. La tâche semble simple : ajouter un émoji de réaction à un problème.

Comment savons-nous qu’il faut commencer par une requête ? En fait, nous ne le savons pas encore.

Étant donné que nous voulons modifier des données sur le serveur (attacher un émoji à un problème), nous commençons par rechercher une mutation utile dans le schéma. La documentation de référence montre la mutation [`addReaction`](/graphql/reference/mutations#addreaction), avec cette description : `Adds a reaction to a subject.` Parfait !

La documentation des mutations liste trois champs d’entrée :

* `clientMutationId` (`String`)
* `subjectId` (`ID!`)
* `content` (`ReactionContent!`)

Les `!` indiquent que `subjectId` et `content` sont des champs obligatoires. Le caractère obligatoire de `content` est logique : nous voulons ajouter une réaction, nous devons donc spécifier l’émoji à utiliser.

Mais pourquoi `subjectId` est-il nécessaire ? Parce que le `subjectId` est le seul moyen d’identifier à _quel_ problème dans _quel_ dépôt il faut réagir.

C’est pourquoi nous commençons cet exemple par une requête : obtenir l’`ID`.

Examinons la requête ligne par ligne :

* `query FindIssueID {`

  Ici, nous exécutons une requête et nous la nommons `FindIssueID`. Notez que le nommage d’une requête est facultatif ; nous lui donnons un nom ici afin de pouvoir l’inclure dans la même fenêtre Explorer que la mutation.

* `repository(owner:"octocat", name:"Hello-World") {`

  Nous spécifions le dépôt en interrogeant l’objet `repository` et en passant des arguments `owner` et `name`.

* `issue(number:349) {`

  Nous spécifions le problème auquel réagir en interrogeant l’objet `issue` et en transmettant un argument `number`.

* `id`

  C’est là que nous récupérons l’`id` de `https://github.com/octocat/Hello-World/issues/349` à transmettre en tant que `subjectId`.

Lorsque nous exécutons la requête, nous obtenons l’`id` : `MDU6SXNzdWUyMzEzOTE1NTE=`

{% tip %}

**Remarque** : L’`id` retourné dans la requête est la valeur que nous transmettrons en tant que `subjectID` dans la mutation. Ni la documentation ni l’introspection de schéma n’indiquera cette relation ; vous devrez comprendre les concepts qui sous-tendent les noms pour la déduire.

{% endtip %}

L’ID étant connu, nous pouvons poursuivre la mutation :

* `mutation AddReactionToIssue {`

  Ici, nous effectuons une mutation, et nous la nommons `AddReactionToIssue`. Comme pour les requêtes, le nommage d’une mutation est facultatif ; nous lui donnons un nom ici pour pouvoir l’inclure dans la même fenêtre Explorer que la requête.

* `addReaction(input:{subjectId:"MDU6SXNzdWUyMzEzOTE1NTE=",content:HOORAY}) {`

  Examinons cette ligne :

  - `addReaction` est le nom de la mutation
  - `input` est la clé d’argument requise. Il s’agit toujours de `input` pour une mutation
  - `{subjectId:"MDU6SXNzdWUyMzEzOTE1NTE=",content:HOORAY}` est la valeur d’argument requise. Il s’agit toujours d’un [objet d’entrée](/graphql/reference/input-objects) (d’où les accolades) composé de champs d’entrée (`subjectId` et `content` en l’occurrence) pour une mutation

  Comment savons-nous quelle valeur utiliser pour le contenu ? La [documentation sur `addReaction`](/graphql/reference/mutations#addreaction) indique que le champ `content` a le type [`ReactionContent`](/graphql/reference/enums#reactioncontent), qui est une [énumération](/graphql/reference/enums) car seules certains émojis de réaction sont pris en charge sur les problèmes GitHub. Voici les valeurs autorisées pour les réactions (notez que certaines valeurs diffèrent de leurs noms d’émojis correspondants) :

  {% data reusables.repositories.reaction_list %}

* Le reste de l’appel est composé de l’objet de charge utile. C’est là que nous spécifions les données que nous voulons que le serveur retourne une fois que nous avons effectué la mutation. Ces lignes proviennent de la [documentation sur `addReaction`](/graphql/reference/mutations#addreaction), avec trois champs de retour possibles :

    - `clientMutationId` (`String`)
    - `reaction` (`Reaction!`)
    - `subject` (`Reactable!`)

  Dans cet exemple, nous retournons les deux champs obligatoires (`reaction` et `subject`), tous deux ayant des sous-champs obligatoires (respectivement `content` et `id`).

Lorsque nous exécutons la mutation, voici la réponse :

```json
{
  "data": {
    "addReaction": {
      "reaction": {
        "content": "HOORAY"
      },
      "subject": {
        "id": "MDU6SXNzdWUyMTc5NTQ0OTc="
      }
    }
  }
}
```

Et voilà ! Consultez votre [réaction au problème](https://github.com/octocat/Hello-World/issues/349) en pointant sur le :tada: pour trouver votre nom d’utilisateur.

Une dernière remarque : lorsque vous transmettez plusieurs champs dans un objet d’entrée, la syntaxe peut être un peu encombrée. Déplacer les champs dans une [variable](#working-with-variables) peut aider. Voici comment vous pourriez réécrire la mutation d’origine à l’aide d’une variable :

```graphql
mutation($myVar:AddReactionInput!) {
  addReaction(input:$myVar) {
    reaction {
      content
    }
    subject {
      id
    }
  }
}
variables {
  "myVar": {
    "subjectId":"MDU6SXNzdWUyMTc5NTQ0OTc=",
    "content":"HOORAY"
  }
}
```

{% note %}

Vous remarquerez peut-être que la valeur du champ `content` dans l’exemple précédent (où elle est utilisée directement dans la mutation) n’a pas de guillemets autour de `HOORAY`, mais qu’elle en a en cas d’utilisation dans la variable. Il y a une raison à cela :
* Lorsque vous utilisez `content` directement dans la mutation, le schéma s’attend à ce que la valeur soit de type [`ReactionContent`](/graphql/reference/enums#reactioncontent), qui est une _énumération_, et non une chaîne. La validation du schéma génère une erreur si vous ajoutez des guillemets autour de la valeur d’énumération, car les guillemets sont réservés aux chaînes.
* Lorsque vous utilisez `content` dans une variable, la section des variables doit être du JSON valide ; les guillemets sont donc obligatoires. La validation du schéma interprète correctement le type `ReactionContent` lorsque la variable est transmise dans la mutation pendant l’exécution.

Pour plus d’informations sur la différence entre les énumérations et les chaînes, consultez la [spécification GraphQL officielle](https://graphql.github.io/graphql-spec/June2018/#sec-Enums).

{% endnote %}

## Pour aller plus loin

Il est possible de faire _beaucoup plus_ de choses lors de la formation d’appels GraphQL. Voici quelques pistes à suivre :

* [Pagination](https://graphql.org/learn/pagination/)
* [Fragments](https://graphql.org/learn/queries/#fragments)
* [Fragments inline](https://graphql.org/learn/queries/#inline-fragments)
* [Directives](https://graphql.org/learn/queries/#directives)
