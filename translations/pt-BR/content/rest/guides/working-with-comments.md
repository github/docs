---
title: Trabalhar com comentários
intro: 'Ao usar a API REST, você pode acessar e gerenciar comentários nos seus pull requests, problemas ou commits.'
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
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145126757'
---
Para qualquer solicitação de pull, o {% data variables.product.product_name %} fornece três tipos de exibições de comentários: [comentários sobre a solicitação de pull][PR comment] como um todo, [comentários sobre uma linha específica][PR line comment] na solicitação de pull e [comentários sobre um commit específico][commit comment] na solicitação de pull. 

Cada um desses tipos de comentários passa por uma parte diferente da {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API.
Neste guia, vamos explorar como você pode acessar e manipular cada um. Para cada exemplo, usaremos [este exemplo de solicitação de pull criado][sample PR] no repositório "octocat". Como sempre, os exemplos podem ser encontrados em [nosso repositório platform-samples][platform-samples].

## Comentários do Pull Request

Para acessar os comentários sobre uma solicitação de pull, você passará pela [API de Problemas][issues].
A princípio, isso pode parecer contraintuitivo. Mas depois que você entender que uma solicitação de pull é apenas um problema com um código, fará sentido usar a API de Problemas para criar comentários sobre uma solicitação de pull.

Demonstraremos como buscar comentários de uma solicitação de pull criando um script do Ruby usando o [Octokit.rb][octokit.rb]. O ideal também é criar um [token de acesso pessoal][personal token].

O seguinte código ajudará você a começar a acessar os comentários de uma solicitação de pull usando o Octokit.rb:

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

Aqui, especificamente, chamamos a API de Problemas para obter os comentários (`issue_comments`), fornecendo o nome do repositório (`octocat/Spoon-Knife`) e a ID da solicitação de pull na qual estamos interessados (`1176`). Depois disso, é simplesmente uma questão de iterar pelos comentários para buscar informações sobre cada um.

## Comentários em uma linha de Pull Request

Na exibição de comparação, você pode iniciar uma discussão sobre um aspecto específico de uma alteração singular feita na solicitação de pull. Esses comentários ocorrem nas linhas individuais de um arquivo alterado. A URL do ponto de extremidade para essa discussão foi obtida [da API de Revisão de Solicitação de Pull][PR Review API].

O código a seguir busca todos os comentários de pull request feitos em arquivos, dado um único número de pull request:

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

Você perceberá que ele é incrivelmente semelhante ao exemplo acima. A diferença entre esta exibição e o comentário sobre a solicitação de pull é o foco da conversa.
Um comentário feito em uma solicitação de pull deve ser reservado para discussão ou ideias sobre a orientação geral do código. Um comentário feito como parte de uma revisão de solicitação de pull deve lidar especificamente com a forma como determinada alteração foi implementada em um arquivo.

## Comentários de commit

O último tipo de comentários ocorre especificamente nos commits individuais. Por esse motivo, eles usam [a API de comentário de commit][commit comment API].

Para recuperar os comentários em um commit, você deverá usar o SHA1 do commit.
Em outras palavras, você não usará nenhum identificador relacionado ao Pull Request. Veja um exemplo:

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

Observe que essa chamada à API vai recuperar os comentários de linha única, bem como os comentários feitos em todo o commit.

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
