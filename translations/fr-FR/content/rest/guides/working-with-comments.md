---
title: Utilisation des commentaires
intro: 'À l’aide de l’API REST, vous pouvez accéder et gérer des commentaires dans vos demandes de tirage, problèmes ou commits.'
redirect_from:
  - /guides/working-with-comments
  - /v3/guides/working-with-comments
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
ms.openlocfilehash: 9b3b768d66199fda62bc5e644da9539d5425215e
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145129041'
---
Pour toutes les demandes de tirage, {% data variables.product.product_name %} fournit trois types de commentaires : les [commentaires sur la demande de tirage][PR comment] dans son ensemble, les [commentaires sur une ligne spécifique][PR line comment] de la demande de tirage et les [commentaires sur un commit spécifique][commit comment] de la demande de tirage. 

Chacun de ces types passe par une partie différente de l’API {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}.
Dans ce guide, nous allons voir comment accéder à chacun d’eux et comment les manipuler. Pour chaque exemple, nous allons utiliser [cet exemple de demande de tirage][sample PR] effectuée sur le dépôt « octocat ». Comme toujours, vous trouverez des exemples dans [notre dépôt platform-samples][platform-samples].

## Commentaires sur les demandes de tirage

Pour accéder aux commentaires d’une demande de tirage, vous devez passer par [l’API Issues][issues].
Au premier abord, cela peut sembler contre-intuitif. Toutefois, une fois que vous comprenez qu’une demande de tirage n’est qu’un problème de code, il paraît logique d’utiliser l’API Issues pour créer des commentaires à propos d’une demande de tirage.

Nous allons montrer comment récupérer les commentaires d’une demande de tirage en créant un script Ruby avec [Octokit.rb][octokit.rb]. Vous devrez également créer un [jeton d’accès personnel][personal token].

Le code suivant doit vous aider à accéder aux commentaires d’une demande de tirage avec Octokit.rb :

``` ruby
require 'octokit'

# !!! DO NOT EVER USE HARD-CODED VALUES IN A REAL APP !!!
# Instead, set and test environment variables, like below
client = Octokit::Client.new :access_token => ENV['MY_PERSONAL_TOKEN']

client.issue_comments("octocat/Spoon-Knife", 1176).each do |comment|
  username = comment[:user][:login]
  post_date = comment[:created_at]
  content = comment[:body]

  puts "#{username} made a comment on #{post_date}. It says:\n'#{content}'\n"
end
```

Ici, nous appelons spécifiquement l’API Issues pour obtenir les commentaires (`issue_comments`), en fournissant le nom du dépôt (`octocat/Spoon-Knife`) et l’ID de la demande de tirage qui nous intéresse (`1176`). Après cela, il s’agit simplement d’itérer dans les commentaires pour récupérer les informations sur chacun d’eux.

## Commentaires sur une ligne d’une demande de tirage

Dans la vue différentielle, vous pouvez commencer une discussion à propos d’un aspect particulier d’une modification apportée à la demande de tirage. Ces commentaires se font sur les lignes d’un fichier modifié. L’URL du point de terminaison de cette discussion provient de l’[API Pull Request Review][PR Review API].

Le code suivant récupère tous les commentaires de demande de tirage effectués sur les fichiers, à partir d’un seul numéro de demande de tirage :

``` ruby
require 'octokit'

# !!! DO NOT EVER USE HARD-CODED VALUES IN A REAL APP !!!
# Instead, set and test environment variables, like below
client = Octokit::Client.new :access_token => ENV['MY_PERSONAL_TOKEN']

client.pull_request_comments("octocat/Spoon-Knife", 1176).each do |comment|
  username = comment[:user][:login]
  post_date = comment[:created_at]
  content = comment[:body]
  path = comment[:path]
  position = comment[:position]

  puts "#{username} made a comment on #{post_date} for the file called #{path}, on line #{position}. It says:\n'#{content}'\n"
end
```

Vous remarquerez qu’il est très similaire à l’exemple ci-dessus. La différence entre cette vue et le commentaire de demande de tirage est le focus de la conversation.
Les commentaires concernant une demande de tirage doivent être réservés aux discussions ou aux idées sur la direction globale du code. Les commentaires faits dans le cadre d’une révision de demande de tirage doivent concerner uniquement la façon dont une modification a été implémentée dans un fichier.

## Commit Comments

Le dernier type de commentaires concerne les commits. Pour cela, l’[API Commit Comments][commit comment API] est utilisée.

Pour récupérer les commentaires concernant un commit, vous devez utiliser le SHA1 du commit.
En d’autres termes, vous n’utiliserez aucun identificateur lié à la demande de tirage. Voici un exemple :

``` ruby
require 'octokit'

# !!! DO NOT EVER USE HARD-CODED VALUES IN A REAL APP !!!
# Instead, set and test environment variables, like below
client = Octokit::Client.new :access_token => ENV['MY_PERSONAL_TOKEN']

client.commit_comments("octocat/Spoon-Knife", "cbc28e7c8caee26febc8c013b0adfb97a4edd96e").each do |comment|
  username = comment[:user][:login]
  post_date = comment[:created_at]
  content = comment[:body]

  puts "#{username} made a comment on #{post_date}. It says:\n'#{content}'\n"
end
```

Notez que cet appel d’API récupérera aussi bien les commentaires concernant une seule ligne que les commentaires concernant l’intégralité d’un commit.

[PR comment]: https://github.com/octocat/Spoon-Knife/pull/1176#issuecomment-24114792
[PR line comment]: https://github.com/octocat/Spoon-Knife/pull/1176#discussion_r6252889
[commit comment]: https://github.com/octocat/Spoon-Knife/commit/cbc28e7c8caee26febc8c013b0adfb97a4edd96e#commitcomment-4049848
[sample PR]: https://github.com/octocat/Spoon-Knife/pull/1176
[platform-samples]: https://github.com/github/platform-samples/tree/master/api/ruby/working-with-comments
[issues]: /rest/reference/issues#comments
[personal token]: /articles/creating-an-access-token-for-command-line-use
[octokit.rb]: https://github.com/octokit/octokit.rb
[PR Review API]: /rest/reference/pulls#comments
[commit comment API]: /rest/reference/commits#get-a-commit-comment
